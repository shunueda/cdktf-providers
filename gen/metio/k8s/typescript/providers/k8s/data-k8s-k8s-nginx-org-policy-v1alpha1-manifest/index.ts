// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SNginxOrgPolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#metadata DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadata;
  /**
  * PolicySpec is the spec of the Policy resource. The spec includes multiple fields, where each field represents a different policy. Only one policy (field) is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#spec DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpec;
}
export interface DataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#annotations DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#labels DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#name DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#namespace DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#allow DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#allow}
  */
  readonly allow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#deny DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#deny}
  */
  readonly deny?: string[];
}

export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControlToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    deny: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deny),
  }
}


export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControlToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allow),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deny: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deny),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._deny = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._deny = value.deny;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return this.getListAttribute('allow');
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: string[]; 
  public get deny() {
    return this.getListAttribute('deny');
  }
  public set deny(value: string[]) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }
}
export interface DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#ciphers DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#protocols DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#protocols}
  */
  readonly protocols?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#server_name DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#server_name}
  */
  readonly serverName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#session_reuse DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#session_reuse}
  */
  readonly sessionReuse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#ssl_name DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#ssl_name}
  */
  readonly sslName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#tls_secret DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#tls_secret}
  */
  readonly tlsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#trusted_cert_secret DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#trusted_cert_secret}
  */
  readonly trustedCertSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#verify_depth DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#verify_depth}
  */
  readonly verifyDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#verify_server DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#verify_server}
  */
  readonly verifyServer?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtlsToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ciphers: cdktf.stringToTerraform(struct!.ciphers),
    protocols: cdktf.stringToTerraform(struct!.protocols),
    server_name: cdktf.booleanToTerraform(struct!.serverName),
    session_reuse: cdktf.booleanToTerraform(struct!.sessionReuse),
    ssl_name: cdktf.stringToTerraform(struct!.sslName),
    tls_secret: cdktf.stringToTerraform(struct!.tlsSecret),
    trusted_cert_secret: cdktf.stringToTerraform(struct!.trustedCertSecret),
    verify_depth: cdktf.numberToTerraform(struct!.verifyDepth),
    verify_server: cdktf.booleanToTerraform(struct!.verifyServer),
  }
}


export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtlsToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ciphers: {
      value: cdktf.stringToHclTerraform(struct!.ciphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.stringToHclTerraform(struct!.protocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.booleanToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_reuse: {
      value: cdktf.booleanToHclTerraform(struct!.sessionReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_name: {
      value: cdktf.stringToHclTerraform(struct!.sslName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_secret: {
      value: cdktf.stringToHclTerraform(struct!.tlsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_cert_secret: {
      value: cdktf.stringToHclTerraform(struct!.trustedCertSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_depth: {
      value: cdktf.numberToHclTerraform(struct!.verifyDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verify_server: {
      value: cdktf.booleanToHclTerraform(struct!.verifyServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sessionReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionReuse = this._sessionReuse;
    }
    if (this._sslName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslName = this._sslName;
    }
    if (this._tlsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecret = this._tlsSecret;
    }
    if (this._trustedCertSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertSecret = this._trustedCertSecret;
    }
    if (this._verifyDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyDepth = this._verifyDepth;
    }
    if (this._verifyServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyServer = this._verifyServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciphers = undefined;
      this._protocols = undefined;
      this._serverName = undefined;
      this._sessionReuse = undefined;
      this._sslName = undefined;
      this._tlsSecret = undefined;
      this._trustedCertSecret = undefined;
      this._verifyDepth = undefined;
      this._verifyServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciphers = value.ciphers;
      this._protocols = value.protocols;
      this._serverName = value.serverName;
      this._sessionReuse = value.sessionReuse;
      this._sslName = value.sslName;
      this._tlsSecret = value.tlsSecret;
      this._trustedCertSecret = value.trustedCertSecret;
      this._verifyDepth = value.verifyDepth;
      this._verifyServer = value.verifyServer;
    }
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string; 
  public get ciphers() {
    return this.getStringAttribute('ciphers');
  }
  public set ciphers(value: string) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string; 
  public get protocols() {
    return this.getStringAttribute('protocols');
  }
  public set protocols(value: string) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: boolean | cdktf.IResolvable; 
  public get serverName() {
    return this.getBooleanAttribute('server_name');
  }
  public set serverName(value: boolean | cdktf.IResolvable) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // session_reuse - computed: false, optional: true, required: false
  private _sessionReuse?: boolean | cdktf.IResolvable; 
  public get sessionReuse() {
    return this.getBooleanAttribute('session_reuse');
  }
  public set sessionReuse(value: boolean | cdktf.IResolvable) {
    this._sessionReuse = value;
  }
  public resetSessionReuse() {
    this._sessionReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReuseInput() {
    return this._sessionReuse;
  }

  // ssl_name - computed: false, optional: true, required: false
  private _sslName?: string; 
  public get sslName() {
    return this.getStringAttribute('ssl_name');
  }
  public set sslName(value: string) {
    this._sslName = value;
  }
  public resetSslName() {
    this._sslName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslNameInput() {
    return this._sslName;
  }

  // tls_secret - computed: false, optional: true, required: false
  private _tlsSecret?: string; 
  public get tlsSecret() {
    return this.getStringAttribute('tls_secret');
  }
  public set tlsSecret(value: string) {
    this._tlsSecret = value;
  }
  public resetTlsSecret() {
    this._tlsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecretInput() {
    return this._tlsSecret;
  }

  // trusted_cert_secret - computed: false, optional: true, required: false
  private _trustedCertSecret?: string; 
  public get trustedCertSecret() {
    return this.getStringAttribute('trusted_cert_secret');
  }
  public set trustedCertSecret(value: string) {
    this._trustedCertSecret = value;
  }
  public resetTrustedCertSecret() {
    this._trustedCertSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertSecretInput() {
    return this._trustedCertSecret;
  }

  // verify_depth - computed: false, optional: true, required: false
  private _verifyDepth?: number; 
  public get verifyDepth() {
    return this.getNumberAttribute('verify_depth');
  }
  public set verifyDepth(value: number) {
    this._verifyDepth = value;
  }
  public resetVerifyDepth() {
    this._verifyDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDepthInput() {
    return this._verifyDepth;
  }

  // verify_server - computed: false, optional: true, required: false
  private _verifyServer?: boolean | cdktf.IResolvable; 
  public get verifyServer() {
    return this.getBooleanAttribute('verify_server');
  }
  public set verifyServer(value: boolean | cdktf.IResolvable) {
    this._verifyServer = value;
  }
  public resetVerifyServer() {
    this._verifyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyServerInput() {
    return this._verifyServer;
  }
}
export interface DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#client_cert_secret DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#client_cert_secret}
  */
  readonly clientCertSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#verify_client DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#verify_client}
  */
  readonly verifyClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#verify_depth DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#verify_depth}
  */
  readonly verifyDepth?: number;
}

export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtlsToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_cert_secret: cdktf.stringToTerraform(struct!.clientCertSecret),
    verify_client: cdktf.stringToTerraform(struct!.verifyClient),
    verify_depth: cdktf.numberToTerraform(struct!.verifyDepth),
  }
}


export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtlsToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_cert_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientCertSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_client: {
      value: cdktf.stringToHclTerraform(struct!.verifyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_depth: {
      value: cdktf.numberToHclTerraform(struct!.verifyDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertSecret = this._clientCertSecret;
    }
    if (this._verifyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyClient = this._verifyClient;
    }
    if (this._verifyDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyDepth = this._verifyDepth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertSecret = undefined;
      this._verifyClient = undefined;
      this._verifyDepth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCertSecret = value.clientCertSecret;
      this._verifyClient = value.verifyClient;
      this._verifyDepth = value.verifyDepth;
    }
  }

  // client_cert_secret - computed: false, optional: true, required: false
  private _clientCertSecret?: string; 
  public get clientCertSecret() {
    return this.getStringAttribute('client_cert_secret');
  }
  public set clientCertSecret(value: string) {
    this._clientCertSecret = value;
  }
  public resetClientCertSecret() {
    this._clientCertSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertSecretInput() {
    return this._clientCertSecret;
  }

  // verify_client - computed: false, optional: true, required: false
  private _verifyClient?: string; 
  public get verifyClient() {
    return this.getStringAttribute('verify_client');
  }
  public set verifyClient(value: string) {
    this._verifyClient = value;
  }
  public resetVerifyClient() {
    this._verifyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClientInput() {
    return this._verifyClient;
  }

  // verify_depth - computed: false, optional: true, required: false
  private _verifyDepth?: number; 
  public get verifyDepth() {
    return this.getNumberAttribute('verify_depth');
  }
  public set verifyDepth(value: number) {
    this._verifyDepth = value;
  }
  public resetVerifyDepth() {
    this._verifyDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDepthInput() {
    return this._verifyDepth;
  }
}
export interface DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#realm DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#secret DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#token DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#token}
  */
  readonly token?: string;
}

export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwtToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realm: cdktf.stringToTerraform(struct!.realm),
    secret: cdktf.stringToTerraform(struct!.secret),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwtToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._realm = undefined;
      this._secret = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._realm = value.realm;
      this._secret = value.secret;
      this._token = value.token;
    }
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#burst DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#burst}
  */
  readonly burst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#delay DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#dry_run DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#key DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#log_level DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#no_delay DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#no_delay}
  */
  readonly noDelay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#rate DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#rate}
  */
  readonly rate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#reject_code DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#reject_code}
  */
  readonly rejectCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#zone_size DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#zone_size}
  */
  readonly zoneSize?: string;
}

export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimitToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst: cdktf.numberToTerraform(struct!.burst),
    delay: cdktf.numberToTerraform(struct!.delay),
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    key: cdktf.stringToTerraform(struct!.key),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    no_delay: cdktf.booleanToTerraform(struct!.noDelay),
    rate: cdktf.stringToTerraform(struct!.rate),
    reject_code: cdktf.numberToTerraform(struct!.rejectCode),
    zone_size: cdktf.stringToTerraform(struct!.zoneSize),
  }
}


export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimitToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    no_delay: {
      value: cdktf.booleanToHclTerraform(struct!.noDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reject_code: {
      value: cdktf.numberToHclTerraform(struct!.rejectCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_size: {
      value: cdktf.stringToHclTerraform(struct!.zoneSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._noDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDelay = this._noDelay;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._rejectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectCode = this._rejectCode;
    }
    if (this._zoneSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSize = this._zoneSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burst = undefined;
      this._delay = undefined;
      this._dryRun = undefined;
      this._key = undefined;
      this._logLevel = undefined;
      this._noDelay = undefined;
      this._rate = undefined;
      this._rejectCode = undefined;
      this._zoneSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burst = value.burst;
      this._delay = value.delay;
      this._dryRun = value.dryRun;
      this._key = value.key;
      this._logLevel = value.logLevel;
      this._noDelay = value.noDelay;
      this._rate = value.rate;
      this._rejectCode = value.rejectCode;
      this._zoneSize = value.zoneSize;
    }
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // no_delay - computed: false, optional: true, required: false
  private _noDelay?: boolean | cdktf.IResolvable; 
  public get noDelay() {
    return this.getBooleanAttribute('no_delay');
  }
  public set noDelay(value: boolean | cdktf.IResolvable) {
    this._noDelay = value;
  }
  public resetNoDelay() {
    this._noDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDelayInput() {
    return this._noDelay;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // reject_code - computed: false, optional: true, required: false
  private _rejectCode?: number; 
  public get rejectCode() {
    return this.getNumberAttribute('reject_code');
  }
  public set rejectCode(value: number) {
    this._rejectCode = value;
  }
  public resetRejectCode() {
    this._rejectCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectCodeInput() {
    return this._rejectCode;
  }

  // zone_size - computed: false, optional: true, required: false
  private _zoneSize?: string; 
  public get zoneSize() {
    return this.getStringAttribute('zone_size');
  }
  public set zoneSize(value: string) {
    this._zoneSize = value;
  }
  public resetZoneSize() {
    this._zoneSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSizeInput() {
    return this._zoneSize;
  }
}
export interface DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpec {
  /**
  * AccessControl defines an access policy based on the source IP of a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#access_control DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#access_control}
  */
  readonly accessControl?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControl;
  /**
  * EgressMTLS defines an Egress MTLS policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#egress_mtls DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#egress_mtls}
  */
  readonly egressMtls?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtls;
  /**
  * IngressMTLS defines an Ingress MTLS policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#ingress_mtls DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#ingress_mtls}
  */
  readonly ingressMtls?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtls;
  /**
  * JWTAuth holds JWT authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#jwt DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#jwt}
  */
  readonly jwt?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwt;
  /**
  * RateLimit defines a rate limit policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#rate_limit DataK8SK8SNginxOrgPolicyV1Alpha1Manifest#rate_limit}
  */
  readonly rateLimit?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimit;
}

export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControlToTerraform(struct!.accessControl),
    egress_mtls: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtlsToTerraform(struct!.egressMtls),
    ingress_mtls: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtlsToTerraform(struct!.ingressMtls),
    jwt: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwtToTerraform(struct!.jwt),
    rate_limit: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimitToTerraform(struct!.rateLimit),
  }
}


export function dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_control: {
      value: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControlToHclTerraform(struct!.accessControl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControl",
    },
    egress_mtls: {
      value: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtlsToHclTerraform(struct!.egressMtls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtls",
    },
    ingress_mtls: {
      value: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtlsToHclTerraform(struct!.ingressMtls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtls",
    },
    jwt: {
      value: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwtToHclTerraform(struct!.jwt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwt",
    },
    rate_limit: {
      value: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControl = this._accessControl?.internalValue;
    }
    if (this._egressMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressMtls = this._egressMtls?.internalValue;
    }
    if (this._ingressMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressMtls = this._ingressMtls?.internalValue;
    }
    if (this._jwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt?.internalValue;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControl.internalValue = undefined;
      this._egressMtls.internalValue = undefined;
      this._ingressMtls.internalValue = undefined;
      this._jwt.internalValue = undefined;
      this._rateLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControl.internalValue = value.accessControl;
      this._egressMtls.internalValue = value.egressMtls;
      this._ingressMtls.internalValue = value.ingressMtls;
      this._jwt.internalValue = value.jwt;
      this._rateLimit.internalValue = value.rateLimit;
    }
  }

  // access_control - computed: false, optional: true, required: false
  private _accessControl = new DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControlOutputReference(this, "access_control");
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecAccessControl) {
    this._accessControl.internalValue = value;
  }
  public resetAccessControl() {
    this._accessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // egress_mtls - computed: false, optional: true, required: false
  private _egressMtls = new DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtlsOutputReference(this, "egress_mtls");
  public get egressMtls() {
    return this._egressMtls;
  }
  public putEgressMtls(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecEgressMtls) {
    this._egressMtls.internalValue = value;
  }
  public resetEgressMtls() {
    this._egressMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressMtlsInput() {
    return this._egressMtls.internalValue;
  }

  // ingress_mtls - computed: false, optional: true, required: false
  private _ingressMtls = new DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtlsOutputReference(this, "ingress_mtls");
  public get ingressMtls() {
    return this._ingressMtls;
  }
  public putIngressMtls(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecIngressMtls) {
    this._ingressMtls.internalValue = value;
  }
  public resetIngressMtls() {
    this._ingressMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressMtlsInput() {
    return this._ingressMtls.internalValue;
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt = new DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwtOutputReference(this, "jwt");
  public get jwt() {
    return this._jwt;
  }
  public putJwt(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecJwt) {
    this._jwt.internalValue = value;
  }
  public resetJwt() {
    this._jwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt.internalValue;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest k8s_k8s_nginx_org_policy_v1alpha1_manifest}
*/
export class DataK8SK8SNginxOrgPolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_nginx_org_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SNginxOrgPolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SNginxOrgPolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SK8SNginxOrgPolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SNginxOrgPolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_nginx_org_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_policy_v1alpha1_manifest k8s_k8s_nginx_org_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SNginxOrgPolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_nginx_org_policy_v1alpha1_manifest',
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
  private _metadata = new DataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SNginxOrgPolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SNginxOrgPolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
