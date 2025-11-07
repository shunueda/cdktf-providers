// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#metadata DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadata;
  /**
  * Peer authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/peer_authentication.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#spec DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpec;
}
export interface DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#annotations DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#labels DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#name DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#namespace DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtls {
  /**
  * Defines the mTLS mode used for peer authentication. Valid Options: DISABLE, PERMISSIVE, STRICT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#mode DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtlsToTerraform(struct?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtlsToHclTerraform(struct?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
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
export interface DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtls {
  /**
  * Defines the mTLS mode used for peer authentication. Valid Options: DISABLE, PERMISSIVE, STRICT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#mode DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtlsToTerraform(struct?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtlsToHclTerraform(struct?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
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
export interface DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelector {
  /**
  * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#match_labels DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelectorToTerraform(struct?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelectorToHclTerraform(struct?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
    }
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
export interface DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpec {
  /**
  * Mutual TLS settings for workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#mtls DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#mtls}
  */
  readonly mtls?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtls;
  /**
  * Port specific mutual TLS settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#port_level_mtls DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#port_level_mtls}
  */
  readonly portLevelMtls?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtls;
  /**
  * The selector determines the workloads to apply the PeerAuthentication on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#selector DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelector;
}

export function dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecToTerraform(struct?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtls: dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtlsToTerraform(struct!.mtls),
    port_level_mtls: dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtlsToTerraform(struct!.portLevelMtls),
    selector: dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtls: {
      value: dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtlsToHclTerraform(struct!.mtls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtls",
    },
    port_level_mtls: {
      value: dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtlsToHclTerraform(struct!.portLevelMtls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtls",
    },
    selector: {
      value: dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtls = this._mtls?.internalValue;
    }
    if (this._portLevelMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portLevelMtls = this._portLevelMtls?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtls.internalValue = undefined;
      this._portLevelMtls.internalValue = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtls.internalValue = value.mtls;
      this._portLevelMtls.internalValue = value.portLevelMtls;
      this._selector.internalValue = value.selector;
    }
  }

  // mtls - computed: false, optional: true, required: false
  private _mtls = new DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtlsOutputReference(this, "mtls");
  public get mtls() {
    return this._mtls;
  }
  public putMtls(value: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecMtls) {
    this._mtls.internalValue = value;
  }
  public resetMtls() {
    this._mtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsInput() {
    return this._mtls.internalValue;
  }

  // port_level_mtls - computed: false, optional: true, required: false
  private _portLevelMtls = new DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtlsOutputReference(this, "port_level_mtls");
  public get portLevelMtls() {
    return this._portLevelMtls;
  }
  public putPortLevelMtls(value: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecPortLevelMtls) {
    this._portLevelMtls.internalValue = value;
  }
  public resetPortLevelMtls() {
    this._portLevelMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portLevelMtlsInput() {
    return this._portLevelMtls.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecSelector) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest k8s_security_istio_io_peer_authentication_v1beta1_manifest}
*/
export class DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_security_istio_io_peer_authentication_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecurityIstioIoPeerAuthenticationV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_security_istio_io_peer_authentication_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_peer_authentication_v1beta1_manifest k8s_security_istio_io_peer_authentication_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_security_istio_io_peer_authentication_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpec) {
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
      metadata: dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityIstioIoPeerAuthenticationV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
