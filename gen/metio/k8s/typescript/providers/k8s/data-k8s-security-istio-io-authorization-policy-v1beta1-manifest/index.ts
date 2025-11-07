// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#metadata DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadata;
  /**
  * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#spec DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpec;
}
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#annotations DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#labels DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#name DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#namespace DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProvider {
  /**
  * Specifies the name of the extension provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#name DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProviderToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProviderToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProvider | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSource {
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#ip_blocks DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#ip_blocks}
  */
  readonly ipBlocks?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#namespaces DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#not_ip_blocks DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#not_ip_blocks}
  */
  readonly notIpBlocks?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#not_namespaces DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#not_namespaces}
  */
  readonly notNamespaces?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#not_principals DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#not_principals}
  */
  readonly notPrincipals?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#not_remote_ip_blocks DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#not_remote_ip_blocks}
  */
  readonly notRemoteIpBlocks?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#not_request_principals DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#not_request_principals}
  */
  readonly notRequestPrincipals?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#principals DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#principals}
  */
  readonly principals?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#remote_ip_blocks DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#remote_ip_blocks}
  */
  readonly remoteIpBlocks?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#request_principals DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#request_principals}
  */
  readonly requestPrincipals?: string[];
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSourceToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipBlocks),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    not_ip_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notIpBlocks),
    not_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notNamespaces),
    not_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notPrincipals),
    not_remote_ip_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notRemoteIpBlocks),
    not_request_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notRequestPrincipals),
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
    remote_ip_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteIpBlocks),
    request_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestPrincipals),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSourceToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_ip_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notIpBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notPrincipals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_remote_ip_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notRemoteIpBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_request_principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notRequestPrincipals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_ip_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteIpBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestPrincipals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._notIpBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.notIpBlocks = this._notIpBlocks;
    }
    if (this._notNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNamespaces = this._notNamespaces;
    }
    if (this._notPrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPrincipals = this._notPrincipals;
    }
    if (this._notRemoteIpBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.notRemoteIpBlocks = this._notRemoteIpBlocks;
    }
    if (this._notRequestPrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.notRequestPrincipals = this._notRequestPrincipals;
    }
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    if (this._remoteIpBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpBlocks = this._remoteIpBlocks;
    }
    if (this._requestPrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPrincipals = this._requestPrincipals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlocks = undefined;
      this._namespaces = undefined;
      this._notIpBlocks = undefined;
      this._notNamespaces = undefined;
      this._notPrincipals = undefined;
      this._notRemoteIpBlocks = undefined;
      this._notRequestPrincipals = undefined;
      this._principals = undefined;
      this._remoteIpBlocks = undefined;
      this._requestPrincipals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlocks = value.ipBlocks;
      this._namespaces = value.namespaces;
      this._notIpBlocks = value.notIpBlocks;
      this._notNamespaces = value.notNamespaces;
      this._notPrincipals = value.notPrincipals;
      this._notRemoteIpBlocks = value.notRemoteIpBlocks;
      this._notRequestPrincipals = value.notRequestPrincipals;
      this._principals = value.principals;
      this._remoteIpBlocks = value.remoteIpBlocks;
      this._requestPrincipals = value.requestPrincipals;
    }
  }

  // ip_blocks - computed: false, optional: true, required: false
  private _ipBlocks?: string[]; 
  public get ipBlocks() {
    return this.getListAttribute('ip_blocks');
  }
  public set ipBlocks(value: string[]) {
    this._ipBlocks = value;
  }
  public resetIpBlocks() {
    this._ipBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // not_ip_blocks - computed: false, optional: true, required: false
  private _notIpBlocks?: string[]; 
  public get notIpBlocks() {
    return this.getListAttribute('not_ip_blocks');
  }
  public set notIpBlocks(value: string[]) {
    this._notIpBlocks = value;
  }
  public resetNotIpBlocks() {
    this._notIpBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notIpBlocksInput() {
    return this._notIpBlocks;
  }

  // not_namespaces - computed: false, optional: true, required: false
  private _notNamespaces?: string[]; 
  public get notNamespaces() {
    return this.getListAttribute('not_namespaces');
  }
  public set notNamespaces(value: string[]) {
    this._notNamespaces = value;
  }
  public resetNotNamespaces() {
    this._notNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNamespacesInput() {
    return this._notNamespaces;
  }

  // not_principals - computed: false, optional: true, required: false
  private _notPrincipals?: string[]; 
  public get notPrincipals() {
    return this.getListAttribute('not_principals');
  }
  public set notPrincipals(value: string[]) {
    this._notPrincipals = value;
  }
  public resetNotPrincipals() {
    this._notPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPrincipalsInput() {
    return this._notPrincipals;
  }

  // not_remote_ip_blocks - computed: false, optional: true, required: false
  private _notRemoteIpBlocks?: string[]; 
  public get notRemoteIpBlocks() {
    return this.getListAttribute('not_remote_ip_blocks');
  }
  public set notRemoteIpBlocks(value: string[]) {
    this._notRemoteIpBlocks = value;
  }
  public resetNotRemoteIpBlocks() {
    this._notRemoteIpBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notRemoteIpBlocksInput() {
    return this._notRemoteIpBlocks;
  }

  // not_request_principals - computed: false, optional: true, required: false
  private _notRequestPrincipals?: string[]; 
  public get notRequestPrincipals() {
    return this.getListAttribute('not_request_principals');
  }
  public set notRequestPrincipals(value: string[]) {
    this._notRequestPrincipals = value;
  }
  public resetNotRequestPrincipals() {
    this._notRequestPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notRequestPrincipalsInput() {
    return this._notRequestPrincipals;
  }

  // principals - computed: false, optional: true, required: false
  private _principals?: string[]; 
  public get principals() {
    return this.getListAttribute('principals');
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // remote_ip_blocks - computed: false, optional: true, required: false
  private _remoteIpBlocks?: string[]; 
  public get remoteIpBlocks() {
    return this.getListAttribute('remote_ip_blocks');
  }
  public set remoteIpBlocks(value: string[]) {
    this._remoteIpBlocks = value;
  }
  public resetRemoteIpBlocks() {
    this._remoteIpBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpBlocksInput() {
    return this._remoteIpBlocks;
  }

  // request_principals - computed: false, optional: true, required: false
  private _requestPrincipals?: string[]; 
  public get requestPrincipals() {
    return this.getListAttribute('request_principals');
  }
  public set requestPrincipals(value: string[]) {
    this._requestPrincipals = value;
  }
  public resetRequestPrincipals() {
    this._requestPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPrincipalsInput() {
    return this._requestPrincipals;
  }
}
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFrom {
  /**
  * Source specifies the source of a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#source DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#source}
  */
  readonly source?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSource;
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSourceToTerraform(struct!.source),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromOutputReference {
    return new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperation {
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#hosts DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#methods DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#methods}
  */
  readonly methods?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#not_hosts DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#not_hosts}
  */
  readonly notHosts?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#not_methods DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#not_methods}
  */
  readonly notMethods?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#not_paths DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#not_paths}
  */
  readonly notPaths?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#not_ports DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#not_ports}
  */
  readonly notPorts?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#paths DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#paths}
  */
  readonly paths?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#ports DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#ports}
  */
  readonly ports?: string[];
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperationToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    not_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notHosts),
    not_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notMethods),
    not_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notPaths),
    not_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notPorts),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperationToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._notHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notHosts = this._notHosts;
    }
    if (this._notMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.notMethods = this._notMethods;
    }
    if (this._notPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPaths = this._notPaths;
    }
    if (this._notPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPorts = this._notPorts;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._methods = undefined;
      this._notHosts = undefined;
      this._notMethods = undefined;
      this._notPaths = undefined;
      this._notPorts = undefined;
      this._paths = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._methods = value.methods;
      this._notHosts = value.notHosts;
      this._notMethods = value.notMethods;
      this._notPaths = value.notPaths;
      this._notPorts = value.notPorts;
      this._paths = value.paths;
      this._ports = value.ports;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // not_hosts - computed: false, optional: true, required: false
  private _notHosts?: string[]; 
  public get notHosts() {
    return this.getListAttribute('not_hosts');
  }
  public set notHosts(value: string[]) {
    this._notHosts = value;
  }
  public resetNotHosts() {
    this._notHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notHostsInput() {
    return this._notHosts;
  }

  // not_methods - computed: false, optional: true, required: false
  private _notMethods?: string[]; 
  public get notMethods() {
    return this.getListAttribute('not_methods');
  }
  public set notMethods(value: string[]) {
    this._notMethods = value;
  }
  public resetNotMethods() {
    this._notMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notMethodsInput() {
    return this._notMethods;
  }

  // not_paths - computed: false, optional: true, required: false
  private _notPaths?: string[]; 
  public get notPaths() {
    return this.getListAttribute('not_paths');
  }
  public set notPaths(value: string[]) {
    this._notPaths = value;
  }
  public resetNotPaths() {
    this._notPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPathsInput() {
    return this._notPaths;
  }

  // not_ports - computed: false, optional: true, required: false
  private _notPorts?: string[]; 
  public get notPorts() {
    return this.getListAttribute('not_ports');
  }
  public set notPorts(value: string[]) {
    this._notPorts = value;
  }
  public resetNotPorts() {
    this._notPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPortsInput() {
    return this._notPorts;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesTo {
  /**
  * Operation specifies the operation of a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#operation DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#operation}
  */
  readonly operation?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperation;
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperationToTerraform(struct!.operation),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperationToHclTerraform(struct!.operation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation.internalValue = value.operation;
    }
  }

  // operation - computed: false, optional: true, required: false
  private _operation = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOperation) {
    this._operation.internalValue = value;
  }
  public resetOperation() {
    this._operation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }
}

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOutputReference {
    return new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhen {
  /**
  * The name of an Istio attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#key DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#not_values DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#not_values}
  */
  readonly notValues?: string[];
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#values DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhenToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    not_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notValues),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhenToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhen | cdktf.IResolvable): any {
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
    not_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._notValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.notValues = this._notValues;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._notValues = undefined;
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
      this._notValues = value.notValues;
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

  // not_values - computed: false, optional: true, required: false
  private _notValues?: string[]; 
  public get notValues() {
    return this.getListAttribute('not_values');
  }
  public set notValues(value: string[]) {
    this._notValues = value;
  }
  public resetNotValues() {
    this._notValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notValuesInput() {
    return this._notValues;
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

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhenList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhen[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhenOutputReference {
    return new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRules {
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#from DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#from}
  */
  readonly from?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFrom[] | cdktf.IResolvable;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#to DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#to}
  */
  readonly to?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesTo[] | cdktf.IResolvable;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#when DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#when}
  */
  readonly when?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhen[] | cdktf.IResolvable;
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromToTerraform, false)(struct!.from),
    to: cdktf.listMapper(dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToToTerraform, false)(struct!.to),
    when: cdktf.listMapper(dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhenToTerraform, false)(struct!.when),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromList",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToList",
    },
    when: {
      value: cdktf.listMapperHcl(dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhenToHclTerraform, false)(struct!.when),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    if (this._when?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
      this._when.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
      this._when.internalValue = value.when;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesFrom[] | cdktf.IResolvable) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesTo[] | cdktf.IResolvable) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }

  // when - computed: false, optional: true, required: false
  private _when = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhenList(this, "when", false);
  public get when() {
    return this._when;
  }
  public putWhen(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesWhen[] | cdktf.IResolvable) {
    this._when.internalValue = value;
  }
  public resetWhen() {
    this._when.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when.internalValue;
  }
}

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesOutputReference {
    return new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelector {
  /**
  * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#match_labels DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelectorToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelectorToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelector | cdktf.IResolvable): any {
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

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelector | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRef {
  /**
  * group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#group DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#kind DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#name DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * namespace is the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#namespace DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefs {
  /**
  * group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#group DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#kind DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#name DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * namespace is the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#namespace DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefsToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefsToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefsOutputReference {
    return new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpec {
  /**
  * Optional. Valid Options: ALLOW, DENY, AUDIT, CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#action DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#action}
  */
  readonly action?: string;
  /**
  * Specifies detailed configuration of the CUSTOM action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#provider DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#provider}
  */
  readonly provider?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProvider;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#rules DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#rules}
  */
  readonly rules?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRules[] | cdktf.IResolvable;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#selector DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#target_ref DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRef;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#target_refs DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest#target_refs}
  */
  readonly targetRefs?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefs[] | cdktf.IResolvable;
}

export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecToTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    provider: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProviderToTerraform(struct!.provider),
    rules: cdktf.listMapper(dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToTerraform, false)(struct!.rules),
    selector: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelectorToTerraform(struct!.selector),
    target_ref: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    target_refs: cdktf.listMapper(dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefsToTerraform, false)(struct!.targetRefs),
  }
}


export function dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpec | cdktf.IResolvable): any {
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
    provider: {
      value: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProviderToHclTerraform(struct!.provider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProvider",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesList",
    },
    selector: {
      value: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelector",
    },
    target_ref: {
      value: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRef",
    },
    target_refs: {
      value: cdktf.listMapperHcl(dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefsToHclTerraform, false)(struct!.targetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._targetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefs = this._targetRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._provider.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._targetRef.internalValue = undefined;
      this._targetRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._provider.internalValue = value.provider;
      this._rules.internalValue = value.rules;
      this._selector.internalValue = value.selector;
      this._targetRef.internalValue = value.targetRef;
      this._targetRefs.internalValue = value.targetRefs;
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

  // provider - computed: false, optional: true, required: false
  private _provider = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecProvider) {
    this._provider.internalValue = value;
  }
  public resetProvider() {
    this._provider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // target_refs - computed: false, optional: true, required: false
  private _targetRefs = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefsList(this, "target_refs", false);
  public get targetRefs() {
    return this._targetRefs;
  }
  public putTargetRefs(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecTargetRefs[] | cdktf.IResolvable) {
    this._targetRefs.internalValue = value;
  }
  public resetTargetRefs() {
    this._targetRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefsInput() {
    return this._targetRefs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest k8s_security_istio_io_authorization_policy_v1beta1_manifest}
*/
export class DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_security_istio_io_authorization_policy_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_security_istio_io_authorization_policy_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/security_istio_io_authorization_policy_v1beta1_manifest k8s_security_istio_io_authorization_policy_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_security_istio_io_authorization_policy_v1beta1_manifest',
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
  private _metadata = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpec) {
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
      metadata: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityIstioIoAuthorizationPolicyV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
