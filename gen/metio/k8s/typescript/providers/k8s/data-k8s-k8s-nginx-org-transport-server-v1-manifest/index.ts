// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SNginxOrgTransportServerV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#metadata DataK8SK8SNginxOrgTransportServerV1Manifest#metadata}
  */
  readonly metadata: DataK8SK8SNginxOrgTransportServerV1ManifestMetadata;
  /**
  * TransportServerSpec is the spec of the TransportServer resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#spec DataK8SK8SNginxOrgTransportServerV1Manifest#spec}
  */
  readonly spec?: DataK8SK8SNginxOrgTransportServerV1ManifestSpec;
}
export interface DataK8SK8SNginxOrgTransportServerV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#annotations DataK8SK8SNginxOrgTransportServerV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#labels DataK8SK8SNginxOrgTransportServerV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#name DataK8SK8SNginxOrgTransportServerV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#namespace DataK8SK8SNginxOrgTransportServerV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SNginxOrgTransportServerV1ManifestMetadataToTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SNginxOrgTransportServerV1ManifestMetadataToHclTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgTransportServerV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgTransportServerV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgTransportServerV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SNginxOrgTransportServerV1ManifestSpecAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#pass DataK8SK8SNginxOrgTransportServerV1Manifest#pass}
  */
  readonly pass?: string;
}

export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecActionToTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.stringToTerraform(struct!.pass),
  }
}


export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecActionToHclTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgTransportServerV1ManifestSpecActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgTransportServerV1ManifestSpecAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }
}
export interface DataK8SK8SNginxOrgTransportServerV1ManifestSpecListener {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#name DataK8SK8SNginxOrgTransportServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#protocol DataK8SK8SNginxOrgTransportServerV1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecListenerToTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecListenerToHclTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecListener | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgTransportServerV1ManifestSpecListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgTransportServerV1ManifestSpecListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._protocol = value.protocol;
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
export interface DataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#timeout DataK8SK8SNginxOrgTransportServerV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParametersToTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParametersToHclTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
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
export interface DataK8SK8SNginxOrgTransportServerV1ManifestSpecTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#secret DataK8SK8SNginxOrgTransportServerV1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecTlsToTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecTlsToHclTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgTransportServerV1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgTransportServerV1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secret = value.secret;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#connect_timeout DataK8SK8SNginxOrgTransportServerV1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#next_upstream DataK8SK8SNginxOrgTransportServerV1Manifest#next_upstream}
  */
  readonly nextUpstream?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#next_upstream_timeout DataK8SK8SNginxOrgTransportServerV1Manifest#next_upstream_timeout}
  */
  readonly nextUpstreamTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#next_upstream_tries DataK8SK8SNginxOrgTransportServerV1Manifest#next_upstream_tries}
  */
  readonly nextUpstreamTries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#udp_requests DataK8SK8SNginxOrgTransportServerV1Manifest#udp_requests}
  */
  readonly udpRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#udp_responses DataK8SK8SNginxOrgTransportServerV1Manifest#udp_responses}
  */
  readonly udpResponses?: number;
}

export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParametersToTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    next_upstream: cdktf.booleanToTerraform(struct!.nextUpstream),
    next_upstream_timeout: cdktf.stringToTerraform(struct!.nextUpstreamTimeout),
    next_upstream_tries: cdktf.numberToTerraform(struct!.nextUpstreamTries),
    udp_requests: cdktf.numberToTerraform(struct!.udpRequests),
    udp_responses: cdktf.numberToTerraform(struct!.udpResponses),
  }
}


export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParametersToHclTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParameters | cdktf.IResolvable): any {
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
    next_upstream: {
      value: cdktf.booleanToHclTerraform(struct!.nextUpstream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    next_upstream_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nextUpstreamTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_upstream_tries: {
      value: cdktf.numberToHclTerraform(struct!.nextUpstreamTries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_requests: {
      value: cdktf.numberToHclTerraform(struct!.udpRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_responses: {
      value: cdktf.numberToHclTerraform(struct!.udpResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._nextUpstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpstream = this._nextUpstream;
    }
    if (this._nextUpstreamTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpstreamTimeout = this._nextUpstreamTimeout;
    }
    if (this._nextUpstreamTries !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpstreamTries = this._nextUpstreamTries;
    }
    if (this._udpRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRequests = this._udpRequests;
    }
    if (this._udpResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpResponses = this._udpResponses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._nextUpstream = undefined;
      this._nextUpstreamTimeout = undefined;
      this._nextUpstreamTries = undefined;
      this._udpRequests = undefined;
      this._udpResponses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._nextUpstream = value.nextUpstream;
      this._nextUpstreamTimeout = value.nextUpstreamTimeout;
      this._nextUpstreamTries = value.nextUpstreamTries;
      this._udpRequests = value.udpRequests;
      this._udpResponses = value.udpResponses;
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

  // next_upstream - computed: false, optional: true, required: false
  private _nextUpstream?: boolean | cdktf.IResolvable; 
  public get nextUpstream() {
    return this.getBooleanAttribute('next_upstream');
  }
  public set nextUpstream(value: boolean | cdktf.IResolvable) {
    this._nextUpstream = value;
  }
  public resetNextUpstream() {
    this._nextUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpstreamInput() {
    return this._nextUpstream;
  }

  // next_upstream_timeout - computed: false, optional: true, required: false
  private _nextUpstreamTimeout?: string; 
  public get nextUpstreamTimeout() {
    return this.getStringAttribute('next_upstream_timeout');
  }
  public set nextUpstreamTimeout(value: string) {
    this._nextUpstreamTimeout = value;
  }
  public resetNextUpstreamTimeout() {
    this._nextUpstreamTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpstreamTimeoutInput() {
    return this._nextUpstreamTimeout;
  }

  // next_upstream_tries - computed: false, optional: true, required: false
  private _nextUpstreamTries?: number; 
  public get nextUpstreamTries() {
    return this.getNumberAttribute('next_upstream_tries');
  }
  public set nextUpstreamTries(value: number) {
    this._nextUpstreamTries = value;
  }
  public resetNextUpstreamTries() {
    this._nextUpstreamTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpstreamTriesInput() {
    return this._nextUpstreamTries;
  }

  // udp_requests - computed: false, optional: true, required: false
  private _udpRequests?: number; 
  public get udpRequests() {
    return this.getNumberAttribute('udp_requests');
  }
  public set udpRequests(value: number) {
    this._udpRequests = value;
  }
  public resetUdpRequests() {
    this._udpRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRequestsInput() {
    return this._udpRequests;
  }

  // udp_responses - computed: false, optional: true, required: false
  private _udpResponses?: number; 
  public get udpResponses() {
    return this.getNumberAttribute('udp_responses');
  }
  public set udpResponses(value: number) {
    this._udpResponses = value;
  }
  public resetUdpResponses() {
    this._udpResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpResponsesInput() {
    return this._udpResponses;
  }
}
export interface DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#expect DataK8SK8SNginxOrgTransportServerV1Manifest#expect}
  */
  readonly expect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#send DataK8SK8SNginxOrgTransportServerV1Manifest#send}
  */
  readonly send?: string;
}

export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatchToTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expect: cdktf.stringToTerraform(struct!.expect),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatchToHclTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expect: {
      value: cdktf.stringToHclTerraform(struct!.expect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expect !== undefined) {
      hasAnyValues = true;
      internalValueResult.expect = this._expect;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expect = undefined;
      this._send = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expect = value.expect;
      this._send = value.send;
    }
  }

  // expect - computed: false, optional: true, required: false
  private _expect?: string; 
  public get expect() {
    return this.getStringAttribute('expect');
  }
  public set expect(value: string) {
    this._expect = value;
  }
  public resetExpect() {
    this._expect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect;
  }

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#enable DataK8SK8SNginxOrgTransportServerV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#fails DataK8SK8SNginxOrgTransportServerV1Manifest#fails}
  */
  readonly fails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#interval DataK8SK8SNginxOrgTransportServerV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#jitter DataK8SK8SNginxOrgTransportServerV1Manifest#jitter}
  */
  readonly jitter?: string;
  /**
  * TransportServerMatch defines the parameters of a custom health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#match DataK8SK8SNginxOrgTransportServerV1Manifest#match}
  */
  readonly match?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#passes DataK8SK8SNginxOrgTransportServerV1Manifest#passes}
  */
  readonly passes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#port DataK8SK8SNginxOrgTransportServerV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#timeout DataK8SK8SNginxOrgTransportServerV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckToTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    fails: cdktf.numberToTerraform(struct!.fails),
    interval: cdktf.stringToTerraform(struct!.interval),
    jitter: cdktf.stringToTerraform(struct!.jitter),
    match: dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatchToTerraform(struct!.match),
    passes: cdktf.numberToTerraform(struct!.passes),
    port: cdktf.numberToTerraform(struct!.port),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckToHclTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable): any {
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
    fails: {
      value: cdktf.numberToHclTerraform(struct!.fails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jitter: {
      value: cdktf.stringToHclTerraform(struct!.jitter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatch",
    },
    passes: {
      value: cdktf.numberToHclTerraform(struct!.passes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._fails !== undefined) {
      hasAnyValues = true;
      internalValueResult.fails = this._fails;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._jitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitter = this._jitter;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._passes !== undefined) {
      hasAnyValues = true;
      internalValueResult.passes = this._passes;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._fails = undefined;
      this._interval = undefined;
      this._jitter = undefined;
      this._match.internalValue = undefined;
      this._passes = undefined;
      this._port = undefined;
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
      this._fails = value.fails;
      this._interval = value.interval;
      this._jitter = value.jitter;
      this._match.internalValue = value.match;
      this._passes = value.passes;
      this._port = value.port;
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

  // fails - computed: false, optional: true, required: false
  private _fails?: number; 
  public get fails() {
    return this.getNumberAttribute('fails');
  }
  public set fails(value: number) {
    this._fails = value;
  }
  public resetFails() {
    this._fails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failsInput() {
    return this._fails;
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

  // jitter - computed: false, optional: true, required: false
  private _jitter?: string; 
  public get jitter() {
    return this.getStringAttribute('jitter');
  }
  public set jitter(value: string) {
    this._jitter = value;
  }
  public resetJitter() {
    this._jitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterInput() {
    return this._jitter;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // passes - computed: false, optional: true, required: false
  private _passes?: number; 
  public get passes() {
    return this.getNumberAttribute('passes');
  }
  public set passes(value: number) {
    this._passes = value;
  }
  public resetPasses() {
    this._passes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passesInput() {
    return this._passes;
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
export interface DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#backup DataK8SK8SNginxOrgTransportServerV1Manifest#backup}
  */
  readonly backup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#backup_port DataK8SK8SNginxOrgTransportServerV1Manifest#backup_port}
  */
  readonly backupPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#fail_timeout DataK8SK8SNginxOrgTransportServerV1Manifest#fail_timeout}
  */
  readonly failTimeout?: string;
  /**
  * TransportServerHealthCheck defines the parameters for active Upstream HealthChecks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#health_check DataK8SK8SNginxOrgTransportServerV1Manifest#health_check}
  */
  readonly healthCheck?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#load_balancing_method DataK8SK8SNginxOrgTransportServerV1Manifest#load_balancing_method}
  */
  readonly loadBalancingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#max_conns DataK8SK8SNginxOrgTransportServerV1Manifest#max_conns}
  */
  readonly maxConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#max_fails DataK8SK8SNginxOrgTransportServerV1Manifest#max_fails}
  */
  readonly maxFails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#name DataK8SK8SNginxOrgTransportServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#port DataK8SK8SNginxOrgTransportServerV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#service DataK8SK8SNginxOrgTransportServerV1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsToTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.stringToTerraform(struct!.backup),
    backup_port: cdktf.numberToTerraform(struct!.backupPort),
    fail_timeout: cdktf.stringToTerraform(struct!.failTimeout),
    health_check: dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckToTerraform(struct!.healthCheck),
    load_balancing_method: cdktf.stringToTerraform(struct!.loadBalancingMethod),
    max_conns: cdktf.numberToTerraform(struct!.maxConns),
    max_fails: cdktf.numberToTerraform(struct!.maxFails),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsToHclTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.stringToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_port: {
      value: cdktf.numberToHclTerraform(struct!.backupPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_timeout: {
      value: cdktf.stringToHclTerraform(struct!.failTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheck",
    },
    load_balancing_method: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_conns: {
      value: cdktf.numberToHclTerraform(struct!.maxConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_fails: {
      value: cdktf.numberToHclTerraform(struct!.maxFails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._backupPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPort = this._backupPort;
    }
    if (this._failTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.failTimeout = this._failTimeout;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._loadBalancingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingMethod = this._loadBalancingMethod;
    }
    if (this._maxConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConns = this._maxConns;
    }
    if (this._maxFails !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFails = this._maxFails;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup = undefined;
      this._backupPort = undefined;
      this._failTimeout = undefined;
      this._healthCheck.internalValue = undefined;
      this._loadBalancingMethod = undefined;
      this._maxConns = undefined;
      this._maxFails = undefined;
      this._name = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup = value.backup;
      this._backupPort = value.backupPort;
      this._failTimeout = value.failTimeout;
      this._healthCheck.internalValue = value.healthCheck;
      this._loadBalancingMethod = value.loadBalancingMethod;
      this._maxConns = value.maxConns;
      this._maxFails = value.maxFails;
      this._name = value.name;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: string; 
  public get backup() {
    return this.getStringAttribute('backup');
  }
  public set backup(value: string) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // backup_port - computed: false, optional: true, required: false
  private _backupPort?: number; 
  public get backupPort() {
    return this.getNumberAttribute('backup_port');
  }
  public set backupPort(value: number) {
    this._backupPort = value;
  }
  public resetBackupPort() {
    this._backupPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPortInput() {
    return this._backupPort;
  }

  // fail_timeout - computed: false, optional: true, required: false
  private _failTimeout?: string; 
  public get failTimeout() {
    return this.getStringAttribute('fail_timeout');
  }
  public set failTimeout(value: string) {
    this._failTimeout = value;
  }
  public resetFailTimeout() {
    this._failTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTimeoutInput() {
    return this._failTimeout;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // load_balancing_method - computed: false, optional: true, required: false
  private _loadBalancingMethod?: string; 
  public get loadBalancingMethod() {
    return this.getStringAttribute('load_balancing_method');
  }
  public set loadBalancingMethod(value: string) {
    this._loadBalancingMethod = value;
  }
  public resetLoadBalancingMethod() {
    this._loadBalancingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingMethodInput() {
    return this._loadBalancingMethod;
  }

  // max_conns - computed: false, optional: true, required: false
  private _maxConns?: number; 
  public get maxConns() {
    return this.getNumberAttribute('max_conns');
  }
  public set maxConns(value: number) {
    this._maxConns = value;
  }
  public resetMaxConns() {
    this._maxConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnsInput() {
    return this._maxConns;
  }

  // max_fails - computed: false, optional: true, required: false
  private _maxFails?: number; 
  public get maxFails() {
    return this.getNumberAttribute('max_fails');
  }
  public set maxFails(value: number) {
    this._maxFails = value;
  }
  public resetMaxFails() {
    this._maxFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailsInput() {
    return this._maxFails;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreams[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsOutputReference {
    return new DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgTransportServerV1ManifestSpec {
  /**
  * TransportServerAction defines an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#action DataK8SK8SNginxOrgTransportServerV1Manifest#action}
  */
  readonly action?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#host DataK8SK8SNginxOrgTransportServerV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#ingress_class_name DataK8SK8SNginxOrgTransportServerV1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * TransportServerListener defines a listener for a TransportServer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#listener DataK8SK8SNginxOrgTransportServerV1Manifest#listener}
  */
  readonly listener?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecListener;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#server_snippets DataK8SK8SNginxOrgTransportServerV1Manifest#server_snippets}
  */
  readonly serverSnippets?: string;
  /**
  * SessionParameters defines session parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#session_parameters DataK8SK8SNginxOrgTransportServerV1Manifest#session_parameters}
  */
  readonly sessionParameters?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#stream_snippets DataK8SK8SNginxOrgTransportServerV1Manifest#stream_snippets}
  */
  readonly streamSnippets?: string;
  /**
  * TransportServerTLS defines TransportServerTLS configuration for a TransportServer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#tls DataK8SK8SNginxOrgTransportServerV1Manifest#tls}
  */
  readonly tls?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecTls;
  /**
  * UpstreamParameters defines parameters for an upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#upstream_parameters DataK8SK8SNginxOrgTransportServerV1Manifest#upstream_parameters}
  */
  readonly upstreamParameters?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#upstreams DataK8SK8SNginxOrgTransportServerV1Manifest#upstreams}
  */
  readonly upstreams?: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreams[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecToTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SK8SNginxOrgTransportServerV1ManifestSpecActionToTerraform(struct!.action),
    host: cdktf.stringToTerraform(struct!.host),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    listener: dataK8SK8SNginxOrgTransportServerV1ManifestSpecListenerToTerraform(struct!.listener),
    server_snippets: cdktf.stringToTerraform(struct!.serverSnippets),
    session_parameters: dataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParametersToTerraform(struct!.sessionParameters),
    stream_snippets: cdktf.stringToTerraform(struct!.streamSnippets),
    tls: dataK8SK8SNginxOrgTransportServerV1ManifestSpecTlsToTerraform(struct!.tls),
    upstream_parameters: dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParametersToTerraform(struct!.upstreamParameters),
    upstreams: cdktf.listMapper(dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsToTerraform, false)(struct!.upstreams),
  }
}


export function dataK8SK8SNginxOrgTransportServerV1ManifestSpecToHclTerraform(struct?: DataK8SK8SNginxOrgTransportServerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SK8SNginxOrgTransportServerV1ManifestSpecActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgTransportServerV1ManifestSpecAction",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener: {
      value: dataK8SK8SNginxOrgTransportServerV1ManifestSpecListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgTransportServerV1ManifestSpecListener",
    },
    server_snippets: {
      value: cdktf.stringToHclTerraform(struct!.serverSnippets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_parameters: {
      value: dataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParametersToHclTerraform(struct!.sessionParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParameters",
    },
    stream_snippets: {
      value: cdktf.stringToHclTerraform(struct!.streamSnippets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SK8SNginxOrgTransportServerV1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgTransportServerV1ManifestSpecTls",
    },
    upstream_parameters: {
      value: dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParametersToHclTerraform(struct!.upstreamParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParameters",
    },
    upstreams: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsToHclTerraform, false)(struct!.upstreams),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgTransportServerV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgTransportServerV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._serverSnippets !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSnippets = this._serverSnippets;
    }
    if (this._sessionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionParameters = this._sessionParameters?.internalValue;
    }
    if (this._streamSnippets !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamSnippets = this._streamSnippets;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._upstreamParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamParameters = this._upstreamParameters?.internalValue;
    }
    if (this._upstreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreams = this._upstreams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._host = undefined;
      this._ingressClassName = undefined;
      this._listener.internalValue = undefined;
      this._serverSnippets = undefined;
      this._sessionParameters.internalValue = undefined;
      this._streamSnippets = undefined;
      this._tls.internalValue = undefined;
      this._upstreamParameters.internalValue = undefined;
      this._upstreams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._host = value.host;
      this._ingressClassName = value.ingressClassName;
      this._listener.internalValue = value.listener;
      this._serverSnippets = value.serverSnippets;
      this._sessionParameters.internalValue = value.sessionParameters;
      this._streamSnippets = value.streamSnippets;
      this._tls.internalValue = value.tls;
      this._upstreamParameters.internalValue = value.upstreamParameters;
      this._upstreams.internalValue = value.upstreams;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataK8SK8SNginxOrgTransportServerV1ManifestSpecActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // host - computed: false, optional: true, required: false
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

  // ingress_class_name - computed: false, optional: true, required: false
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

  // listener - computed: false, optional: true, required: false
  private _listener = new DataK8SK8SNginxOrgTransportServerV1ManifestSpecListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecListener) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // server_snippets - computed: false, optional: true, required: false
  private _serverSnippets?: string; 
  public get serverSnippets() {
    return this.getStringAttribute('server_snippets');
  }
  public set serverSnippets(value: string) {
    this._serverSnippets = value;
  }
  public resetServerSnippets() {
    this._serverSnippets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSnippetsInput() {
    return this._serverSnippets;
  }

  // session_parameters - computed: false, optional: true, required: false
  private _sessionParameters = new DataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParametersOutputReference(this, "session_parameters");
  public get sessionParameters() {
    return this._sessionParameters;
  }
  public putSessionParameters(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecSessionParameters) {
    this._sessionParameters.internalValue = value;
  }
  public resetSessionParameters() {
    this._sessionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionParametersInput() {
    return this._sessionParameters.internalValue;
  }

  // stream_snippets - computed: false, optional: true, required: false
  private _streamSnippets?: string; 
  public get streamSnippets() {
    return this.getStringAttribute('stream_snippets');
  }
  public set streamSnippets(value: string) {
    this._streamSnippets = value;
  }
  public resetStreamSnippets() {
    this._streamSnippets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSnippetsInput() {
    return this._streamSnippets;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SK8SNginxOrgTransportServerV1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // upstream_parameters - computed: false, optional: true, required: false
  private _upstreamParameters = new DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParametersOutputReference(this, "upstream_parameters");
  public get upstreamParameters() {
    return this._upstreamParameters;
  }
  public putUpstreamParameters(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamParameters) {
    this._upstreamParameters.internalValue = value;
  }
  public resetUpstreamParameters() {
    this._upstreamParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamParametersInput() {
    return this._upstreamParameters.internalValue;
  }

  // upstreams - computed: false, optional: true, required: false
  private _upstreams = new DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreamsList(this, "upstreams", false);
  public get upstreams() {
    return this._upstreams;
  }
  public putUpstreams(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpecUpstreams[] | cdktf.IResolvable) {
    this._upstreams.internalValue = value;
  }
  public resetUpstreams() {
    this._upstreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsInput() {
    return this._upstreams.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest k8s_k8s_nginx_org_transport_server_v1_manifest}
*/
export class DataK8SK8SNginxOrgTransportServerV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_nginx_org_transport_server_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SNginxOrgTransportServerV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SNginxOrgTransportServerV1Manifest to import
  * @param importFromId The id of the existing DataK8SK8SNginxOrgTransportServerV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SNginxOrgTransportServerV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_nginx_org_transport_server_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_transport_server_v1_manifest k8s_k8s_nginx_org_transport_server_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SNginxOrgTransportServerV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SNginxOrgTransportServerV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_nginx_org_transport_server_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SK8SNginxOrgTransportServerV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SNginxOrgTransportServerV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SNginxOrgTransportServerV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SNginxOrgTransportServerV1ManifestSpec) {
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
      metadata: dataK8SK8SNginxOrgTransportServerV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SNginxOrgTransportServerV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SNginxOrgTransportServerV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SNginxOrgTransportServerV1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SNginxOrgTransportServerV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SNginxOrgTransportServerV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
