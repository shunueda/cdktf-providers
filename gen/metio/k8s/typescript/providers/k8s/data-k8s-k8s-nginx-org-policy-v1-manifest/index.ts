// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SNginxOrgPolicyV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#metadata DataK8SK8SNginxOrgPolicyV1Manifest#metadata}
  */
  readonly metadata: DataK8SK8SNginxOrgPolicyV1ManifestMetadata;
  /**
  * PolicySpec is the spec of the Policy resource. The spec includes multiple fields, where each field represents a different policy. Only one policy (field) is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#spec DataK8SK8SNginxOrgPolicyV1Manifest#spec}
  */
  readonly spec?: DataK8SK8SNginxOrgPolicyV1ManifestSpec;
}
export interface DataK8SK8SNginxOrgPolicyV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#annotations DataK8SK8SNginxOrgPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#labels DataK8SK8SNginxOrgPolicyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#name DataK8SK8SNginxOrgPolicyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#namespace DataK8SK8SNginxOrgPolicyV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestMetadataToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SNginxOrgPolicyV1ManifestMetadataToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgPolicyV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#allow DataK8SK8SNginxOrgPolicyV1Manifest#allow}
  */
  readonly allow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#deny DataK8SK8SNginxOrgPolicyV1Manifest#deny}
  */
  readonly deny?: string[];
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControlToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    deny: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deny),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControlToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControl | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControl | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#header DataK8SK8SNginxOrgPolicyV1Manifest#header}
  */
  readonly header?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#query DataK8SK8SNginxOrgPolicyV1Manifest#query}
  */
  readonly query?: string[];
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedInToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.header),
    query: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.query),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedInToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.header),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.query),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedIn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedIn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._query = value.query;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header?: string[]; 
  public get header() {
    return this.getListAttribute('header');
  }
  public set header(value: string[]) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string[]; 
  public get query() {
    return this.getListAttribute('query');
  }
  public set query(value: string[]) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#client_secret DataK8SK8SNginxOrgPolicyV1Manifest#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * SuppliedIn defines the locations API Key should be supplied in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#supplied_in DataK8SK8SNginxOrgPolicyV1Manifest#supplied_in}
  */
  readonly suppliedIn?: DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedIn;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeyToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    supplied_in: dataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedInToTerraform(struct!.suppliedIn),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeyToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supplied_in: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedInToHclTerraform(struct!.suppliedIn),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedIn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._suppliedIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppliedIn = this._suppliedIn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientSecret = undefined;
      this._suppliedIn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientSecret = value.clientSecret;
      this._suppliedIn.internalValue = value.suppliedIn;
    }
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // supplied_in - computed: false, optional: true, required: false
  private _suppliedIn = new DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedInOutputReference(this, "supplied_in");
  public get suppliedIn() {
    return this._suppliedIn;
  }
  public putSuppliedIn(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeySuppliedIn) {
    this._suppliedIn.internalValue = value;
  }
  public resetSuppliedIn() {
    this._suppliedIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppliedInInput() {
    return this._suppliedIn.internalValue;
  }
}
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#realm DataK8SK8SNginxOrgPolicyV1Manifest#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#secret DataK8SK8SNginxOrgPolicyV1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuthToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realm: cdktf.stringToTerraform(struct!.realm),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuthToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuth | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuth | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._realm = undefined;
      this._secret = undefined;
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
}
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#ciphers DataK8SK8SNginxOrgPolicyV1Manifest#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#protocols DataK8SK8SNginxOrgPolicyV1Manifest#protocols}
  */
  readonly protocols?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#server_name DataK8SK8SNginxOrgPolicyV1Manifest#server_name}
  */
  readonly serverName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#session_reuse DataK8SK8SNginxOrgPolicyV1Manifest#session_reuse}
  */
  readonly sessionReuse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#ssl_name DataK8SK8SNginxOrgPolicyV1Manifest#ssl_name}
  */
  readonly sslName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#tls_secret DataK8SK8SNginxOrgPolicyV1Manifest#tls_secret}
  */
  readonly tlsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#trusted_cert_secret DataK8SK8SNginxOrgPolicyV1Manifest#trusted_cert_secret}
  */
  readonly trustedCertSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#verify_depth DataK8SK8SNginxOrgPolicyV1Manifest#verify_depth}
  */
  readonly verifyDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#verify_server DataK8SK8SNginxOrgPolicyV1Manifest#verify_server}
  */
  readonly verifyServer?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtlsToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtls | cdktf.IResolvable): any {
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


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtlsToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtls | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtls | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#client_cert_secret DataK8SK8SNginxOrgPolicyV1Manifest#client_cert_secret}
  */
  readonly clientCertSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#crl_file_name DataK8SK8SNginxOrgPolicyV1Manifest#crl_file_name}
  */
  readonly crlFileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#verify_client DataK8SK8SNginxOrgPolicyV1Manifest#verify_client}
  */
  readonly verifyClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#verify_depth DataK8SK8SNginxOrgPolicyV1Manifest#verify_depth}
  */
  readonly verifyDepth?: number;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtlsToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_cert_secret: cdktf.stringToTerraform(struct!.clientCertSecret),
    crl_file_name: cdktf.stringToTerraform(struct!.crlFileName),
    verify_client: cdktf.stringToTerraform(struct!.verifyClient),
    verify_depth: cdktf.numberToTerraform(struct!.verifyDepth),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtlsToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtls | cdktf.IResolvable): any {
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
    crl_file_name: {
      value: cdktf.stringToHclTerraform(struct!.crlFileName),
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

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertSecret = this._clientCertSecret;
    }
    if (this._crlFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlFileName = this._crlFileName;
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

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertSecret = undefined;
      this._crlFileName = undefined;
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
      this._crlFileName = value.crlFileName;
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

  // crl_file_name - computed: false, optional: true, required: false
  private _crlFileName?: string; 
  public get crlFileName() {
    return this.getStringAttribute('crl_file_name');
  }
  public set crlFileName(value: string) {
    this._crlFileName = value;
  }
  public resetCrlFileName() {
    this._crlFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlFileNameInput() {
    return this._crlFileName;
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
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecJwt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#jwks_uri DataK8SK8SNginxOrgPolicyV1Manifest#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#key_cache DataK8SK8SNginxOrgPolicyV1Manifest#key_cache}
  */
  readonly keyCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#realm DataK8SK8SNginxOrgPolicyV1Manifest#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#secret DataK8SK8SNginxOrgPolicyV1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#token DataK8SK8SNginxOrgPolicyV1Manifest#token}
  */
  readonly token?: string;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecJwtToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    key_cache: cdktf.stringToTerraform(struct!.keyCache),
    realm: cdktf.stringToTerraform(struct!.realm),
    secret: cdktf.stringToTerraform(struct!.secret),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecJwtToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_cache: {
      value: cdktf.stringToHclTerraform(struct!.keyCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecJwt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._keyCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCache = this._keyCache;
    }
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

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecJwt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jwksUri = undefined;
      this._keyCache = undefined;
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
      this._jwksUri = value.jwksUri;
      this._keyCache = value.keyCache;
      this._realm = value.realm;
      this._secret = value.secret;
      this._token = value.token;
    }
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // key_cache - computed: false, optional: true, required: false
  private _keyCache?: string; 
  public get keyCache() {
    return this.getStringAttribute('key_cache');
  }
  public set keyCache(value: string) {
    this._keyCache = value;
  }
  public resetKeyCache() {
    this._keyCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCacheInput() {
    return this._keyCache;
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
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecOidc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#access_token_enable DataK8SK8SNginxOrgPolicyV1Manifest#access_token_enable}
  */
  readonly accessTokenEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#auth_endpoint DataK8SK8SNginxOrgPolicyV1Manifest#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#auth_extra_args DataK8SK8SNginxOrgPolicyV1Manifest#auth_extra_args}
  */
  readonly authExtraArgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#client_id DataK8SK8SNginxOrgPolicyV1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#client_secret DataK8SK8SNginxOrgPolicyV1Manifest#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#end_session_endpoint DataK8SK8SNginxOrgPolicyV1Manifest#end_session_endpoint}
  */
  readonly endSessionEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#jwks_uri DataK8SK8SNginxOrgPolicyV1Manifest#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#post_logout_redirect_uri DataK8SK8SNginxOrgPolicyV1Manifest#post_logout_redirect_uri}
  */
  readonly postLogoutRedirectUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#redirect_uri DataK8SK8SNginxOrgPolicyV1Manifest#redirect_uri}
  */
  readonly redirectUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#scope DataK8SK8SNginxOrgPolicyV1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#token_endpoint DataK8SK8SNginxOrgPolicyV1Manifest#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#zone_sync_leeway DataK8SK8SNginxOrgPolicyV1Manifest#zone_sync_leeway}
  */
  readonly zoneSyncLeeway?: number;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecOidcToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_enable: cdktf.booleanToTerraform(struct!.accessTokenEnable),
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    auth_extra_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authExtraArgs),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    end_session_endpoint: cdktf.stringToTerraform(struct!.endSessionEndpoint),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    post_logout_redirect_uri: cdktf.stringToTerraform(struct!.postLogoutRedirectUri),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
    scope: cdktf.stringToTerraform(struct!.scope),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    zone_sync_leeway: cdktf.numberToTerraform(struct!.zoneSyncLeeway),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecOidcToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_enable: {
      value: cdktf.booleanToHclTerraform(struct!.accessTokenEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_extra_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authExtraArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_session_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endSessionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_logout_redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.postLogoutRedirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_sync_leeway: {
      value: cdktf.numberToHclTerraform(struct!.zoneSyncLeeway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenEnable = this._accessTokenEnable;
    }
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._authExtraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.authExtraArgs = this._authExtraArgs;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._endSessionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSessionEndpoint = this._endSessionEndpoint;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._postLogoutRedirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.postLogoutRedirectUri = this._postLogoutRedirectUri;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._zoneSyncLeeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSyncLeeway = this._zoneSyncLeeway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenEnable = undefined;
      this._authEndpoint = undefined;
      this._authExtraArgs = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._endSessionEndpoint = undefined;
      this._jwksUri = undefined;
      this._postLogoutRedirectUri = undefined;
      this._redirectUri = undefined;
      this._scope = undefined;
      this._tokenEndpoint = undefined;
      this._zoneSyncLeeway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenEnable = value.accessTokenEnable;
      this._authEndpoint = value.authEndpoint;
      this._authExtraArgs = value.authExtraArgs;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._endSessionEndpoint = value.endSessionEndpoint;
      this._jwksUri = value.jwksUri;
      this._postLogoutRedirectUri = value.postLogoutRedirectUri;
      this._redirectUri = value.redirectUri;
      this._scope = value.scope;
      this._tokenEndpoint = value.tokenEndpoint;
      this._zoneSyncLeeway = value.zoneSyncLeeway;
    }
  }

  // access_token_enable - computed: false, optional: true, required: false
  private _accessTokenEnable?: boolean | cdktf.IResolvable; 
  public get accessTokenEnable() {
    return this.getBooleanAttribute('access_token_enable');
  }
  public set accessTokenEnable(value: boolean | cdktf.IResolvable) {
    this._accessTokenEnable = value;
  }
  public resetAccessTokenEnable() {
    this._accessTokenEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenEnableInput() {
    return this._accessTokenEnable;
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // auth_extra_args - computed: false, optional: true, required: false
  private _authExtraArgs?: string[]; 
  public get authExtraArgs() {
    return this.getListAttribute('auth_extra_args');
  }
  public set authExtraArgs(value: string[]) {
    this._authExtraArgs = value;
  }
  public resetAuthExtraArgs() {
    this._authExtraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authExtraArgsInput() {
    return this._authExtraArgs;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // end_session_endpoint - computed: false, optional: true, required: false
  private _endSessionEndpoint?: string; 
  public get endSessionEndpoint() {
    return this.getStringAttribute('end_session_endpoint');
  }
  public set endSessionEndpoint(value: string) {
    this._endSessionEndpoint = value;
  }
  public resetEndSessionEndpoint() {
    this._endSessionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSessionEndpointInput() {
    return this._endSessionEndpoint;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // post_logout_redirect_uri - computed: false, optional: true, required: false
  private _postLogoutRedirectUri?: string; 
  public get postLogoutRedirectUri() {
    return this.getStringAttribute('post_logout_redirect_uri');
  }
  public set postLogoutRedirectUri(value: string) {
    this._postLogoutRedirectUri = value;
  }
  public resetPostLogoutRedirectUri() {
    this._postLogoutRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutRedirectUriInput() {
    return this._postLogoutRedirectUri;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // zone_sync_leeway - computed: false, optional: true, required: false
  private _zoneSyncLeeway?: number; 
  public get zoneSyncLeeway() {
    return this.getNumberAttribute('zone_sync_leeway');
  }
  public set zoneSyncLeeway(value: number) {
    this._zoneSyncLeeway = value;
  }
  public resetZoneSyncLeeway() {
    this._zoneSyncLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSyncLeewayInput() {
    return this._zoneSyncLeeway;
  }
}
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#burst DataK8SK8SNginxOrgPolicyV1Manifest#burst}
  */
  readonly burst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#delay DataK8SK8SNginxOrgPolicyV1Manifest#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#dry_run DataK8SK8SNginxOrgPolicyV1Manifest#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#key DataK8SK8SNginxOrgPolicyV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#log_level DataK8SK8SNginxOrgPolicyV1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#no_delay DataK8SK8SNginxOrgPolicyV1Manifest#no_delay}
  */
  readonly noDelay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#rate DataK8SK8SNginxOrgPolicyV1Manifest#rate}
  */
  readonly rate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#reject_code DataK8SK8SNginxOrgPolicyV1Manifest#reject_code}
  */
  readonly rejectCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#scale DataK8SK8SNginxOrgPolicyV1Manifest#scale}
  */
  readonly scale?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#zone_size DataK8SK8SNginxOrgPolicyV1Manifest#zone_size}
  */
  readonly zoneSize?: string;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimitToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimit | cdktf.IResolvable): any {
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
    scale: cdktf.booleanToTerraform(struct!.scale),
    zone_size: cdktf.stringToTerraform(struct!.zoneSize),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimitToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimit | cdktf.IResolvable): any {
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
    scale: {
      value: cdktf.booleanToHclTerraform(struct!.scale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimit | cdktf.IResolvable | undefined {
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
    if (this._scale !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale;
    }
    if (this._zoneSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSize = this._zoneSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimit | cdktf.IResolvable | undefined) {
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
      this._scale = undefined;
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
      this._scale = value.scale;
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

  // scale - computed: false, optional: true, required: false
  private _scale?: boolean | cdktf.IResolvable; 
  public get scale() {
    return this.getBooleanAttribute('scale');
  }
  public set scale(value: boolean | cdktf.IResolvable) {
    this._scale = value;
  }
  public resetScale() {
    this._scale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale;
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
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#ap_log_bundle DataK8SK8SNginxOrgPolicyV1Manifest#ap_log_bundle}
  */
  readonly apLogBundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#ap_log_conf DataK8SK8SNginxOrgPolicyV1Manifest#ap_log_conf}
  */
  readonly apLogConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#enable DataK8SK8SNginxOrgPolicyV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#log_dest DataK8SK8SNginxOrgPolicyV1Manifest#log_dest}
  */
  readonly logDest?: string;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_log_bundle: cdktf.stringToTerraform(struct!.apLogBundle),
    ap_log_conf: cdktf.stringToTerraform(struct!.apLogConf),
    enable: cdktf.booleanToTerraform(struct!.enable),
    log_dest: cdktf.stringToTerraform(struct!.logDest),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_log_bundle: {
      value: cdktf.stringToHclTerraform(struct!.apLogBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_log_conf: {
      value: cdktf.stringToHclTerraform(struct!.apLogConf),
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
    log_dest: {
      value: cdktf.stringToHclTerraform(struct!.logDest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apLogBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.apLogBundle = this._apLogBundle;
    }
    if (this._apLogConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.apLogConf = this._apLogConf;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._logDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDest = this._logDest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apLogBundle = undefined;
      this._apLogConf = undefined;
      this._enable = undefined;
      this._logDest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apLogBundle = value.apLogBundle;
      this._apLogConf = value.apLogConf;
      this._enable = value.enable;
      this._logDest = value.logDest;
    }
  }

  // ap_log_bundle - computed: false, optional: true, required: false
  private _apLogBundle?: string; 
  public get apLogBundle() {
    return this.getStringAttribute('ap_log_bundle');
  }
  public set apLogBundle(value: string) {
    this._apLogBundle = value;
  }
  public resetApLogBundle() {
    this._apLogBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apLogBundleInput() {
    return this._apLogBundle;
  }

  // ap_log_conf - computed: false, optional: true, required: false
  private _apLogConf?: string; 
  public get apLogConf() {
    return this.getStringAttribute('ap_log_conf');
  }
  public set apLogConf(value: string) {
    this._apLogConf = value;
  }
  public resetApLogConf() {
    this._apLogConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apLogConfInput() {
    return this._apLogConf;
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

  // log_dest - computed: false, optional: true, required: false
  private _logDest?: string; 
  public get logDest() {
    return this.getStringAttribute('log_dest');
  }
  public set logDest(value: string) {
    this._logDest = value;
  }
  public resetLogDest() {
    this._logDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestInput() {
    return this._logDest;
  }
}
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#ap_log_bundle DataK8SK8SNginxOrgPolicyV1Manifest#ap_log_bundle}
  */
  readonly apLogBundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#ap_log_conf DataK8SK8SNginxOrgPolicyV1Manifest#ap_log_conf}
  */
  readonly apLogConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#enable DataK8SK8SNginxOrgPolicyV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#log_dest DataK8SK8SNginxOrgPolicyV1Manifest#log_dest}
  */
  readonly logDest?: string;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogsToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_log_bundle: cdktf.stringToTerraform(struct!.apLogBundle),
    ap_log_conf: cdktf.stringToTerraform(struct!.apLogConf),
    enable: cdktf.booleanToTerraform(struct!.enable),
    log_dest: cdktf.stringToTerraform(struct!.logDest),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogsToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_log_bundle: {
      value: cdktf.stringToHclTerraform(struct!.apLogBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_log_conf: {
      value: cdktf.stringToHclTerraform(struct!.apLogConf),
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
    log_dest: {
      value: cdktf.stringToHclTerraform(struct!.logDest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apLogBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.apLogBundle = this._apLogBundle;
    }
    if (this._apLogConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.apLogConf = this._apLogConf;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._logDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDest = this._logDest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apLogBundle = undefined;
      this._apLogConf = undefined;
      this._enable = undefined;
      this._logDest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apLogBundle = value.apLogBundle;
      this._apLogConf = value.apLogConf;
      this._enable = value.enable;
      this._logDest = value.logDest;
    }
  }

  // ap_log_bundle - computed: false, optional: true, required: false
  private _apLogBundle?: string; 
  public get apLogBundle() {
    return this.getStringAttribute('ap_log_bundle');
  }
  public set apLogBundle(value: string) {
    this._apLogBundle = value;
  }
  public resetApLogBundle() {
    this._apLogBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apLogBundleInput() {
    return this._apLogBundle;
  }

  // ap_log_conf - computed: false, optional: true, required: false
  private _apLogConf?: string; 
  public get apLogConf() {
    return this.getStringAttribute('ap_log_conf');
  }
  public set apLogConf(value: string) {
    this._apLogConf = value;
  }
  public resetApLogConf() {
    this._apLogConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apLogConfInput() {
    return this._apLogConf;
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

  // log_dest - computed: false, optional: true, required: false
  private _logDest?: string; 
  public get logDest() {
    return this.getStringAttribute('log_dest');
  }
  public set logDest(value: string) {
    this._logDest = value;
  }
  public resetLogDest() {
    this._logDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestInput() {
    return this._logDest;
  }
}

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogsOutputReference {
    return new DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpecWaf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#ap_bundle DataK8SK8SNginxOrgPolicyV1Manifest#ap_bundle}
  */
  readonly apBundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#ap_policy DataK8SK8SNginxOrgPolicyV1Manifest#ap_policy}
  */
  readonly apPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#enable DataK8SK8SNginxOrgPolicyV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * SecurityLog defines the security log of a WAF policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#security_log DataK8SK8SNginxOrgPolicyV1Manifest#security_log}
  */
  readonly securityLog?: DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLog;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#security_logs DataK8SK8SNginxOrgPolicyV1Manifest#security_logs}
  */
  readonly securityLogs?: DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogs[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecWafToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecWaf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_bundle: cdktf.stringToTerraform(struct!.apBundle),
    ap_policy: cdktf.stringToTerraform(struct!.apPolicy),
    enable: cdktf.booleanToTerraform(struct!.enable),
    security_log: dataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogToTerraform(struct!.securityLog),
    security_logs: cdktf.listMapper(dataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogsToTerraform, false)(struct!.securityLogs),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecWafToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpecWaf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_bundle: {
      value: cdktf.stringToHclTerraform(struct!.apBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_policy: {
      value: cdktf.stringToHclTerraform(struct!.apPolicy),
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
    security_log: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogToHclTerraform(struct!.securityLog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLog",
    },
    security_logs: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogsToHclTerraform, false)(struct!.securityLogs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecWafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpecWaf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.apBundle = this._apBundle;
    }
    if (this._apPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.apPolicy = this._apPolicy;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._securityLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLog = this._securityLog?.internalValue;
    }
    if (this._securityLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLogs = this._securityLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecWaf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apBundle = undefined;
      this._apPolicy = undefined;
      this._enable = undefined;
      this._securityLog.internalValue = undefined;
      this._securityLogs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apBundle = value.apBundle;
      this._apPolicy = value.apPolicy;
      this._enable = value.enable;
      this._securityLog.internalValue = value.securityLog;
      this._securityLogs.internalValue = value.securityLogs;
    }
  }

  // ap_bundle - computed: false, optional: true, required: false
  private _apBundle?: string; 
  public get apBundle() {
    return this.getStringAttribute('ap_bundle');
  }
  public set apBundle(value: string) {
    this._apBundle = value;
  }
  public resetApBundle() {
    this._apBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBundleInput() {
    return this._apBundle;
  }

  // ap_policy - computed: false, optional: true, required: false
  private _apPolicy?: string; 
  public get apPolicy() {
    return this.getStringAttribute('ap_policy');
  }
  public set apPolicy(value: string) {
    this._apPolicy = value;
  }
  public resetApPolicy() {
    this._apPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apPolicyInput() {
    return this._apPolicy;
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

  // security_log - computed: false, optional: true, required: false
  private _securityLog = new DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogOutputReference(this, "security_log");
  public get securityLog() {
    return this._securityLog;
  }
  public putSecurityLog(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLog) {
    this._securityLog.internalValue = value;
  }
  public resetSecurityLog() {
    this._securityLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLogInput() {
    return this._securityLog.internalValue;
  }

  // security_logs - computed: false, optional: true, required: false
  private _securityLogs = new DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogsList(this, "security_logs", false);
  public get securityLogs() {
    return this._securityLogs;
  }
  public putSecurityLogs(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecWafSecurityLogs[] | cdktf.IResolvable) {
    this._securityLogs.internalValue = value;
  }
  public resetSecurityLogs() {
    this._securityLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLogsInput() {
    return this._securityLogs.internalValue;
  }
}
export interface DataK8SK8SNginxOrgPolicyV1ManifestSpec {
  /**
  * AccessControl defines an access policy based on the source IP of a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#access_control DataK8SK8SNginxOrgPolicyV1Manifest#access_control}
  */
  readonly accessControl?: DataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControl;
  /**
  * APIKey defines an API Key policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#api_key DataK8SK8SNginxOrgPolicyV1Manifest#api_key}
  */
  readonly apiKey?: DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKey;
  /**
  * BasicAuth holds HTTP Basic authentication configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#basic_auth DataK8SK8SNginxOrgPolicyV1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuth;
  /**
  * EgressMTLS defines an Egress MTLS policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#egress_mtls DataK8SK8SNginxOrgPolicyV1Manifest#egress_mtls}
  */
  readonly egressMtls?: DataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#ingress_class_name DataK8SK8SNginxOrgPolicyV1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * IngressMTLS defines an Ingress MTLS policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#ingress_mtls DataK8SK8SNginxOrgPolicyV1Manifest#ingress_mtls}
  */
  readonly ingressMtls?: DataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtls;
  /**
  * JWTAuth holds JWT authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#jwt DataK8SK8SNginxOrgPolicyV1Manifest#jwt}
  */
  readonly jwt?: DataK8SK8SNginxOrgPolicyV1ManifestSpecJwt;
  /**
  * OIDC defines an Open ID Connect policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#oidc DataK8SK8SNginxOrgPolicyV1Manifest#oidc}
  */
  readonly oidc?: DataK8SK8SNginxOrgPolicyV1ManifestSpecOidc;
  /**
  * RateLimit defines a rate limit policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#rate_limit DataK8SK8SNginxOrgPolicyV1Manifest#rate_limit}
  */
  readonly rateLimit?: DataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimit;
  /**
  * WAF defines an WAF policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#waf DataK8SK8SNginxOrgPolicyV1Manifest#waf}
  */
  readonly waf?: DataK8SK8SNginxOrgPolicyV1ManifestSpecWaf;
}

export function dataK8SK8SNginxOrgPolicyV1ManifestSpecToTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control: dataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControlToTerraform(struct!.accessControl),
    api_key: dataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeyToTerraform(struct!.apiKey),
    basic_auth: dataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuthToTerraform(struct!.basicAuth),
    egress_mtls: dataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtlsToTerraform(struct!.egressMtls),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    ingress_mtls: dataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtlsToTerraform(struct!.ingressMtls),
    jwt: dataK8SK8SNginxOrgPolicyV1ManifestSpecJwtToTerraform(struct!.jwt),
    oidc: dataK8SK8SNginxOrgPolicyV1ManifestSpecOidcToTerraform(struct!.oidc),
    rate_limit: dataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimitToTerraform(struct!.rateLimit),
    waf: dataK8SK8SNginxOrgPolicyV1ManifestSpecWafToTerraform(struct!.waf),
  }
}


export function dataK8SK8SNginxOrgPolicyV1ManifestSpecToHclTerraform(struct?: DataK8SK8SNginxOrgPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_control: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControlToHclTerraform(struct!.accessControl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControl",
    },
    api_key: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKey",
    },
    basic_auth: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuth",
    },
    egress_mtls: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtlsToHclTerraform(struct!.egressMtls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtls",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_mtls: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtlsToHclTerraform(struct!.ingressMtls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtls",
    },
    jwt: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecJwtToHclTerraform(struct!.jwt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecJwt",
    },
    oidc: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecOidc",
    },
    rate_limit: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimit",
    },
    waf: {
      value: dataK8SK8SNginxOrgPolicyV1ManifestSpecWafToHclTerraform(struct!.waf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpecWaf",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgPolicyV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgPolicyV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControl = this._accessControl?.internalValue;
    }
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._egressMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressMtls = this._egressMtls?.internalValue;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._ingressMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressMtls = this._ingressMtls?.internalValue;
    }
    if (this._jwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    if (this._waf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waf = this._waf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgPolicyV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControl.internalValue = undefined;
      this._apiKey.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._egressMtls.internalValue = undefined;
      this._ingressClassName = undefined;
      this._ingressMtls.internalValue = undefined;
      this._jwt.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._rateLimit.internalValue = undefined;
      this._waf.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControl.internalValue = value.accessControl;
      this._apiKey.internalValue = value.apiKey;
      this._basicAuth.internalValue = value.basicAuth;
      this._egressMtls.internalValue = value.egressMtls;
      this._ingressClassName = value.ingressClassName;
      this._ingressMtls.internalValue = value.ingressMtls;
      this._jwt.internalValue = value.jwt;
      this._oidc.internalValue = value.oidc;
      this._rateLimit.internalValue = value.rateLimit;
      this._waf.internalValue = value.waf;
    }
  }

  // access_control - computed: false, optional: true, required: false
  private _accessControl = new DataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControlOutputReference(this, "access_control");
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecAccessControl) {
    this._accessControl.internalValue = value;
  }
  public resetAccessControl() {
    this._accessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // egress_mtls - computed: false, optional: true, required: false
  private _egressMtls = new DataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtlsOutputReference(this, "egress_mtls");
  public get egressMtls() {
    return this._egressMtls;
  }
  public putEgressMtls(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecEgressMtls) {
    this._egressMtls.internalValue = value;
  }
  public resetEgressMtls() {
    this._egressMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressMtlsInput() {
    return this._egressMtls.internalValue;
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

  // ingress_mtls - computed: false, optional: true, required: false
  private _ingressMtls = new DataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtlsOutputReference(this, "ingress_mtls");
  public get ingressMtls() {
    return this._ingressMtls;
  }
  public putIngressMtls(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecIngressMtls) {
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
  private _jwt = new DataK8SK8SNginxOrgPolicyV1ManifestSpecJwtOutputReference(this, "jwt");
  public get jwt() {
    return this._jwt;
  }
  public putJwt(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecJwt) {
    this._jwt.internalValue = value;
  }
  public resetJwt() {
    this._jwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new DataK8SK8SNginxOrgPolicyV1ManifestSpecOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // waf - computed: false, optional: true, required: false
  private _waf = new DataK8SK8SNginxOrgPolicyV1ManifestSpecWafOutputReference(this, "waf");
  public get waf() {
    return this._waf;
  }
  public putWaf(value: DataK8SK8SNginxOrgPolicyV1ManifestSpecWaf) {
    this._waf.internalValue = value;
  }
  public resetWaf() {
    this._waf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest k8s_k8s_nginx_org_policy_v1_manifest}
*/
export class DataK8SK8SNginxOrgPolicyV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_nginx_org_policy_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SNginxOrgPolicyV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SNginxOrgPolicyV1Manifest to import
  * @param importFromId The id of the existing DataK8SK8SNginxOrgPolicyV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SNginxOrgPolicyV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_nginx_org_policy_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8s_nginx_org_policy_v1_manifest k8s_k8s_nginx_org_policy_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SNginxOrgPolicyV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SNginxOrgPolicyV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_nginx_org_policy_v1_manifest',
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
  private _metadata = new DataK8SK8SNginxOrgPolicyV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SNginxOrgPolicyV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SNginxOrgPolicyV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SNginxOrgPolicyV1ManifestSpec) {
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
      metadata: dataK8SK8SNginxOrgPolicyV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SNginxOrgPolicyV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SNginxOrgPolicyV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SNginxOrgPolicyV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SNginxOrgPolicyV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
