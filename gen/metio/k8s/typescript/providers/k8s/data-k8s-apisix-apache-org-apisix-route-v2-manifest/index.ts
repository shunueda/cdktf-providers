// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApisixApacheOrgApisixRouteV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#metadata DataK8SApisixApacheOrgApisixRouteV2Manifest#metadata}
  */
  readonly metadata: DataK8SApisixApacheOrgApisixRouteV2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#spec DataK8SApisixApacheOrgApisixRouteV2Manifest#spec}
  */
  readonly spec?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpec;
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#annotations DataK8SApisixApacheOrgApisixRouteV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#labels DataK8SApisixApacheOrgApisixRouteV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#name DataK8SApisixApacheOrgApisixRouteV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#namespace DataK8SApisixApacheOrgApisixRouteV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestMetadataToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApisixApacheOrgApisixRouteV2ManifestMetadataToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApisixApacheOrgApisixRouteV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#cookie DataK8SApisixApacheOrgApisixRouteV2Manifest#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#header DataK8SApisixApacheOrgApisixRouteV2Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#query DataK8SApisixApacheOrgApisixRouteV2Manifest#query}
  */
  readonly query?: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuthToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    header: cdktf.stringToTerraform(struct!.header),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuthToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
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
      this._cookie = value.cookie;
      this._header = value.header;
      this._query = value.query;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
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
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
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
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#header DataK8SApisixApacheOrgApisixRouteV2Manifest#header}
  */
  readonly header?: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuthToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuthToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#base_dn DataK8SApisixApacheOrgApisixRouteV2Manifest#base_dn}
  */
  readonly baseDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#ldap_uri DataK8SApisixApacheOrgApisixRouteV2Manifest#ldap_uri}
  */
  readonly ldapUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#uid DataK8SApisixApacheOrgApisixRouteV2Manifest#uid}
  */
  readonly uid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#use_tls DataK8SApisixApacheOrgApisixRouteV2Manifest#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuthToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    ldap_uri: cdktf.stringToTerraform(struct!.ldapUri),
    uid: cdktf.stringToTerraform(struct!.uid),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuthToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_uri: {
      value: cdktf.stringToHclTerraform(struct!.ldapUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._ldapUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapUri = this._ldapUri;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._useTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._ldapUri = undefined;
      this._uid = undefined;
      this._useTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._ldapUri = value.ldapUri;
      this._uid = value.uid;
      this._useTls = value.useTls;
    }
  }

  // base_dn - computed: false, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // ldap_uri - computed: false, optional: true, required: false
  private _ldapUri?: string; 
  public get ldapUri() {
    return this.getStringAttribute('ldap_uri');
  }
  public set ldapUri(value: string) {
    this._ldapUri = value;
  }
  public resetLdapUri() {
    this._ldapUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUriInput() {
    return this._ldapUri;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#enable DataK8SApisixApacheOrgApisixRouteV2Manifest#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#jwt_auth DataK8SApisixApacheOrgApisixRouteV2Manifest#jwt_auth}
  */
  readonly jwtAuth?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#key_auth DataK8SApisixApacheOrgApisixRouteV2Manifest#key_auth}
  */
  readonly keyAuth?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#ldap_auth DataK8SApisixApacheOrgApisixRouteV2Manifest#ldap_auth}
  */
  readonly ldapAuth?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#type DataK8SApisixApacheOrgApisixRouteV2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    jwt_auth: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuthToTerraform(struct!.jwtAuth),
    key_auth: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuthToTerraform(struct!.keyAuth),
    ldap_auth: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuthToTerraform(struct!.ldapAuth),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthentication | cdktf.IResolvable): any {
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
    jwt_auth: {
      value: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuthToHclTerraform(struct!.jwtAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuth",
    },
    key_auth: {
      value: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuthToHclTerraform(struct!.keyAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuth",
    },
    ldap_auth: {
      value: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuthToHclTerraform(struct!.ldapAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuth",
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

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._jwtAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAuth = this._jwtAuth?.internalValue;
    }
    if (this._keyAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAuth = this._keyAuth?.internalValue;
    }
    if (this._ldapAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapAuth = this._ldapAuth?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._jwtAuth.internalValue = undefined;
      this._keyAuth.internalValue = undefined;
      this._ldapAuth.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._jwtAuth.internalValue = value.jwtAuth;
      this._keyAuth.internalValue = value.keyAuth;
      this._ldapAuth.internalValue = value.ldapAuth;
      this._type = value.type;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // jwt_auth - computed: false, optional: true, required: false
  private _jwtAuth = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuthOutputReference(this, "jwt_auth");
  public get jwtAuth() {
    return this._jwtAuth;
  }
  public putJwtAuth(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationJwtAuth) {
    this._jwtAuth.internalValue = value;
  }
  public resetJwtAuth() {
    this._jwtAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAuthInput() {
    return this._jwtAuth.internalValue;
  }

  // key_auth - computed: false, optional: true, required: false
  private _keyAuth = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuthOutputReference(this, "key_auth");
  public get keyAuth() {
    return this._keyAuth;
  }
  public putKeyAuth(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationKeyAuth) {
    this._keyAuth.internalValue = value;
  }
  public resetKeyAuth() {
    this._keyAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAuthInput() {
    return this._keyAuth.internalValue;
  }

  // ldap_auth - computed: false, optional: true, required: false
  private _ldapAuth = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuthOutputReference(this, "ldap_auth");
  public get ldapAuth() {
    return this._ldapAuth;
  }
  public putLdapAuth(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationLdapAuth) {
    this._ldapAuth.internalValue = value;
  }
  public resetLdapAuth() {
    this._ldapAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAuthInput() {
    return this._ldapAuth.internalValue;
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
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackends {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#resolve_granularity DataK8SApisixApacheOrgApisixRouteV2Manifest#resolve_granularity}
  */
  readonly resolveGranularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#service_name DataK8SApisixApacheOrgApisixRouteV2Manifest#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#service_port DataK8SApisixApacheOrgApisixRouteV2Manifest#service_port}
  */
  readonly servicePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#subset DataK8SApisixApacheOrgApisixRouteV2Manifest#subset}
  */
  readonly subset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#weight DataK8SApisixApacheOrgApisixRouteV2Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackendsToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolve_granularity: cdktf.stringToTerraform(struct!.resolveGranularity),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_port: cdktf.stringToTerraform(struct!.servicePort),
    subset: cdktf.stringToTerraform(struct!.subset),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackendsToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resolve_granularity: {
      value: cdktf.stringToHclTerraform(struct!.resolveGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port: {
      value: cdktf.stringToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subset: {
      value: cdktf.stringToHclTerraform(struct!.subset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolveGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveGranularity = this._resolveGranularity;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    if (this._subset !== undefined) {
      hasAnyValues = true;
      internalValueResult.subset = this._subset;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resolveGranularity = undefined;
      this._serviceName = undefined;
      this._servicePort = undefined;
      this._subset = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resolveGranularity = value.resolveGranularity;
      this._serviceName = value.serviceName;
      this._servicePort = value.servicePort;
      this._subset = value.subset;
      this._weight = value.weight;
    }
  }

  // resolve_granularity - computed: false, optional: true, required: false
  private _resolveGranularity?: string; 
  public get resolveGranularity() {
    return this.getStringAttribute('resolve_granularity');
  }
  public set resolveGranularity(value: string) {
    this._resolveGranularity = value;
  }
  public resetResolveGranularity() {
    this._resolveGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveGranularityInput() {
    return this._resolveGranularity;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_port - computed: false, optional: true, required: false
  private _servicePort?: string; 
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
  public set servicePort(value: string) {
    this._servicePort = value;
  }
  public resetServicePort() {
    this._servicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackendsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackends[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackendsOutputReference {
    return new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#name DataK8SApisixApacheOrgApisixRouteV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#scope DataK8SApisixApacheOrgApisixRouteV2Manifest#scope}
  */
  readonly scope: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubjectToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubjectToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubject | cdktf.IResolvable): any {
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._scope = value.scope;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#op DataK8SApisixApacheOrgApisixRouteV2Manifest#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#set DataK8SApisixApacheOrgApisixRouteV2Manifest#set}
  */
  readonly set?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#subject DataK8SApisixApacheOrgApisixRouteV2Manifest#subject}
  */
  readonly subject?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubject;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#value DataK8SApisixApacheOrgApisixRouteV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.set),
    subject: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubjectToTerraform(struct!.subject),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.set),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject: {
      value: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubjectToHclTerraform(struct!.subject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubject",
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

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._set = undefined;
      this._subject.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._set = value.set;
      this._subject.internalValue = value.subject;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // set - computed: false, optional: true, required: false
  private _set?: string[]; 
  public get set() {
    return this.getListAttribute('set');
  }
  public set set(value: string[]) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsSubject) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
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

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsOutputReference {
    return new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#exprs DataK8SApisixApacheOrgApisixRouteV2Manifest#exprs}
  */
  readonly exprs?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#filter_func DataK8SApisixApacheOrgApisixRouteV2Manifest#filter_func}
  */
  readonly filterFunc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#hosts DataK8SApisixApacheOrgApisixRouteV2Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#methods DataK8SApisixApacheOrgApisixRouteV2Manifest#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#paths DataK8SApisixApacheOrgApisixRouteV2Manifest#paths}
  */
  readonly paths: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#remote_addrs DataK8SApisixApacheOrgApisixRouteV2Manifest#remote_addrs}
  */
  readonly remoteAddrs?: string[];
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exprs: cdktf.listMapper(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsToTerraform, false)(struct!.exprs),
    filter_func: cdktf.stringToTerraform(struct!.filterFunc),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    remote_addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteAddrs),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exprs: {
      value: cdktf.listMapperHcl(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsToHclTerraform, false)(struct!.exprs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsList",
    },
    filter_func: {
      value: cdktf.stringToHclTerraform(struct!.filterFunc),
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
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
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
    remote_addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteAddrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exprs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exprs = this._exprs?.internalValue;
    }
    if (this._filterFunc !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterFunc = this._filterFunc;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._remoteAddrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddrs = this._remoteAddrs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exprs.internalValue = undefined;
      this._filterFunc = undefined;
      this._hosts = undefined;
      this._methods = undefined;
      this._paths = undefined;
      this._remoteAddrs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exprs.internalValue = value.exprs;
      this._filterFunc = value.filterFunc;
      this._hosts = value.hosts;
      this._methods = value.methods;
      this._paths = value.paths;
      this._remoteAddrs = value.remoteAddrs;
    }
  }

  // exprs - computed: false, optional: true, required: false
  private _exprs = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprsList(this, "exprs", false);
  public get exprs() {
    return this._exprs;
  }
  public putExprs(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchExprs[] | cdktf.IResolvable) {
    this._exprs.internalValue = value;
  }
  public resetExprs() {
    this._exprs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprsInput() {
    return this._exprs.internalValue;
  }

  // filter_func - computed: false, optional: true, required: false
  private _filterFunc?: string; 
  public get filterFunc() {
    return this.getStringAttribute('filter_func');
  }
  public set filterFunc(value: string) {
    this._filterFunc = value;
  }
  public resetFilterFunc() {
    this._filterFunc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterFuncInput() {
    return this._filterFunc;
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

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // remote_addrs - computed: false, optional: true, required: false
  private _remoteAddrs?: string[]; 
  public get remoteAddrs() {
    return this.getListAttribute('remote_addrs');
  }
  public set remoteAddrs(value: string[]) {
    this._remoteAddrs = value;
  }
  public resetRemoteAddrs() {
    this._remoteAddrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddrsInput() {
    return this._remoteAddrs;
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPlugins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#config DataK8SApisixApacheOrgApisixRouteV2Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#enable DataK8SApisixApacheOrgApisixRouteV2Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#name DataK8SApisixApacheOrgApisixRouteV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#secret_ref DataK8SApisixApacheOrgApisixRouteV2Manifest#secret_ref}
  */
  readonly secretRef?: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPluginsToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    enable: cdktf.booleanToTerraform(struct!.enable),
    name: cdktf.stringToTerraform(struct!.name),
    secret_ref: cdktf.stringToTerraform(struct!.secretRef),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPluginsToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._enable = undefined;
      this._name = undefined;
      this._secretRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._enable = value.enable;
      this._name = value.name;
      this._secretRef = value.secretRef;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: string; 
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }
  public set secretRef(value: string) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef;
  }
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPluginsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPlugins[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPluginsOutputReference {
    return new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#connect DataK8SApisixApacheOrgApisixRouteV2Manifest#connect}
  */
  readonly connect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#read DataK8SApisixApacheOrgApisixRouteV2Manifest#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#send DataK8SApisixApacheOrgApisixRouteV2Manifest#send}
  */
  readonly send?: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeoutToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect: cdktf.stringToTerraform(struct!.connect),
    read: cdktf.stringToTerraform(struct!.read),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeoutToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect: {
      value: cdktf.stringToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connect = undefined;
      this._read = undefined;
      this._send = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connect = value.connect;
      this._read = value.read;
      this._send = value.send;
    }
  }

  // connect - computed: false, optional: true, required: false
  private _connect?: string; 
  public get connect() {
    return this.getStringAttribute('connect');
  }
  public set connect(value: string) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#name DataK8SApisixApacheOrgApisixRouteV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#weight DataK8SApisixApacheOrgApisixRouteV2Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreamsToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreamsToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreams | cdktf.IResolvable): any {
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._weight = value.weight;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreamsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreams[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreamsOutputReference {
    return new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#authentication DataK8SApisixApacheOrgApisixRouteV2Manifest#authentication}
  */
  readonly authentication?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#backends DataK8SApisixApacheOrgApisixRouteV2Manifest#backends}
  */
  readonly backends?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackends[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#match DataK8SApisixApacheOrgApisixRouteV2Manifest#match}
  */
  readonly match?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#name DataK8SApisixApacheOrgApisixRouteV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#plugin_config_name DataK8SApisixApacheOrgApisixRouteV2Manifest#plugin_config_name}
  */
  readonly pluginConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#plugin_config_namespace DataK8SApisixApacheOrgApisixRouteV2Manifest#plugin_config_namespace}
  */
  readonly pluginConfigNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#plugins DataK8SApisixApacheOrgApisixRouteV2Manifest#plugins}
  */
  readonly plugins?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPlugins[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#priority DataK8SApisixApacheOrgApisixRouteV2Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#timeout DataK8SApisixApacheOrgApisixRouteV2Manifest#timeout}
  */
  readonly timeout?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeout;
  /**
  * Upstreams refer to ApisixUpstream CRD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#upstreams DataK8SApisixApacheOrgApisixRouteV2Manifest#upstreams}
  */
  readonly upstreams?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreams[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#websocket DataK8SApisixApacheOrgApisixRouteV2Manifest#websocket}
  */
  readonly websocket?: boolean | cdktf.IResolvable;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationToTerraform(struct!.authentication),
    backends: cdktf.listMapper(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackendsToTerraform, false)(struct!.backends),
    match: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    plugin_config_name: cdktf.stringToTerraform(struct!.pluginConfigName),
    plugin_config_namespace: cdktf.stringToTerraform(struct!.pluginConfigNamespace),
    plugins: cdktf.listMapper(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPluginsToTerraform, false)(struct!.plugins),
    priority: cdktf.numberToTerraform(struct!.priority),
    timeout: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeoutToTerraform(struct!.timeout),
    upstreams: cdktf.listMapper(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreamsToTerraform, false)(struct!.upstreams),
    websocket: cdktf.booleanToTerraform(struct!.websocket),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthentication",
    },
    backends: {
      value: cdktf.listMapperHcl(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackendsToHclTerraform, false)(struct!.backends),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackendsList",
    },
    match: {
      value: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatch",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_config_name: {
      value: cdktf.stringToHclTerraform(struct!.pluginConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_config_namespace: {
      value: cdktf.stringToHclTerraform(struct!.pluginConfigNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugins: {
      value: cdktf.listMapperHcl(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPluginsToHclTerraform, false)(struct!.plugins),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPluginsList",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeout",
    },
    upstreams: {
      value: cdktf.listMapperHcl(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreamsToHclTerraform, false)(struct!.upstreams),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreamsList",
    },
    websocket: {
      value: cdktf.booleanToHclTerraform(struct!.websocket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._backends?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pluginConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginConfigName = this._pluginConfigName;
    }
    if (this._pluginConfigNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginConfigNamespace = this._pluginConfigNamespace;
    }
    if (this._plugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._upstreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreams = this._upstreams?.internalValue;
    }
    if (this._websocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocket = this._websocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._backends.internalValue = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
      this._pluginConfigName = undefined;
      this._pluginConfigNamespace = undefined;
      this._plugins.internalValue = undefined;
      this._priority = undefined;
      this._timeout.internalValue = undefined;
      this._upstreams.internalValue = undefined;
      this._websocket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._backends.internalValue = value.backends;
      this._match.internalValue = value.match;
      this._name = value.name;
      this._pluginConfigName = value.pluginConfigName;
      this._pluginConfigNamespace = value.pluginConfigNamespace;
      this._plugins.internalValue = value.plugins;
      this._priority = value.priority;
      this._timeout.internalValue = value.timeout;
      this._upstreams.internalValue = value.upstreams;
      this._websocket = value.websocket;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // backends - computed: false, optional: true, required: false
  private _backends = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackendsList(this, "backends", false);
  public get backends() {
    return this._backends;
  }
  public putBackends(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpBackends[] | cdktf.IResolvable) {
    this._backends.internalValue = value;
  }
  public resetBackends() {
    this._backends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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

  // plugin_config_name - computed: false, optional: true, required: false
  private _pluginConfigName?: string; 
  public get pluginConfigName() {
    return this.getStringAttribute('plugin_config_name');
  }
  public set pluginConfigName(value: string) {
    this._pluginConfigName = value;
  }
  public resetPluginConfigName() {
    this._pluginConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginConfigNameInput() {
    return this._pluginConfigName;
  }

  // plugin_config_namespace - computed: false, optional: true, required: false
  private _pluginConfigNamespace?: string; 
  public get pluginConfigNamespace() {
    return this.getStringAttribute('plugin_config_namespace');
  }
  public set pluginConfigNamespace(value: string) {
    this._pluginConfigNamespace = value;
  }
  public resetPluginConfigNamespace() {
    this._pluginConfigNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginConfigNamespaceInput() {
    return this._pluginConfigNamespace;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
  public putPlugins(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpPlugins[] | cdktf.IResolvable) {
    this._plugins.internalValue = value;
  }
  public resetPlugins() {
    this._plugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins.internalValue;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // upstreams - computed: false, optional: true, required: false
  private _upstreams = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreamsList(this, "upstreams", false);
  public get upstreams() {
    return this._upstreams;
  }
  public putUpstreams(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpUpstreams[] | cdktf.IResolvable) {
    this._upstreams.internalValue = value;
  }
  public resetUpstreams() {
    this._upstreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsInput() {
    return this._upstreams.internalValue;
  }

  // websocket - computed: false, optional: true, required: false
  private _websocket?: boolean | cdktf.IResolvable; 
  public get websocket() {
    return this.getBooleanAttribute('websocket');
  }
  public set websocket(value: boolean | cdktf.IResolvable) {
    this._websocket = value;
  }
  public resetWebsocket() {
    this._websocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketInput() {
    return this._websocket;
  }
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpList extends cdktf.ComplexList {
  public internalValue? : DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttp[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpOutputReference {
    return new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#resolve_granularity DataK8SApisixApacheOrgApisixRouteV2Manifest#resolve_granularity}
  */
  readonly resolveGranularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#service_name DataK8SApisixApacheOrgApisixRouteV2Manifest#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#service_port DataK8SApisixApacheOrgApisixRouteV2Manifest#service_port}
  */
  readonly servicePort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#subset DataK8SApisixApacheOrgApisixRouteV2Manifest#subset}
  */
  readonly subset?: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackendToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolve_granularity: cdktf.stringToTerraform(struct!.resolveGranularity),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_port: cdktf.stringToTerraform(struct!.servicePort),
    subset: cdktf.stringToTerraform(struct!.subset),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackendToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resolve_granularity: {
      value: cdktf.stringToHclTerraform(struct!.resolveGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port: {
      value: cdktf.stringToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolveGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveGranularity = this._resolveGranularity;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    if (this._subset !== undefined) {
      hasAnyValues = true;
      internalValueResult.subset = this._subset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resolveGranularity = undefined;
      this._serviceName = undefined;
      this._servicePort = undefined;
      this._subset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resolveGranularity = value.resolveGranularity;
      this._serviceName = value.serviceName;
      this._servicePort = value.servicePort;
      this._subset = value.subset;
    }
  }

  // resolve_granularity - computed: false, optional: true, required: false
  private _resolveGranularity?: string; 
  public get resolveGranularity() {
    return this.getStringAttribute('resolve_granularity');
  }
  public set resolveGranularity(value: string) {
    this._resolveGranularity = value;
  }
  public resetResolveGranularity() {
    this._resolveGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveGranularityInput() {
    return this._resolveGranularity;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: string; 
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
  public set servicePort(value: string) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
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
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#host DataK8SApisixApacheOrgApisixRouteV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#ingress_port DataK8SApisixApacheOrgApisixRouteV2Manifest#ingress_port}
  */
  readonly ingressPort: number;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatchToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    ingress_port: cdktf.numberToTerraform(struct!.ingressPort),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatchToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatch | cdktf.IResolvable): any {
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
    ingress_port: {
      value: cdktf.numberToHclTerraform(struct!.ingressPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ingressPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPort = this._ingressPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._ingressPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._ingressPort = value.ingressPort;
    }
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

  // ingress_port - computed: false, optional: false, required: true
  private _ingressPort?: number; 
  public get ingressPort() {
    return this.getNumberAttribute('ingress_port');
  }
  public set ingressPort(value: number) {
    this._ingressPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPortInput() {
    return this._ingressPort;
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPlugins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#config DataK8SApisixApacheOrgApisixRouteV2Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#enable DataK8SApisixApacheOrgApisixRouteV2Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#name DataK8SApisixApacheOrgApisixRouteV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#secret_ref DataK8SApisixApacheOrgApisixRouteV2Manifest#secret_ref}
  */
  readonly secretRef?: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPluginsToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    enable: cdktf.booleanToTerraform(struct!.enable),
    name: cdktf.stringToTerraform(struct!.name),
    secret_ref: cdktf.stringToTerraform(struct!.secretRef),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPluginsToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._enable = undefined;
      this._name = undefined;
      this._secretRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._enable = value.enable;
      this._name = value.name;
      this._secretRef = value.secretRef;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: string; 
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }
  public set secretRef(value: string) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef;
  }
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPluginsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPlugins[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPluginsOutputReference {
    return new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#backend DataK8SApisixApacheOrgApisixRouteV2Manifest#backend}
  */
  readonly backend: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackend;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#match DataK8SApisixApacheOrgApisixRouteV2Manifest#match}
  */
  readonly match: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#name DataK8SApisixApacheOrgApisixRouteV2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#plugins DataK8SApisixApacheOrgApisixRouteV2Manifest#plugins}
  */
  readonly plugins?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPlugins[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#protocol DataK8SApisixApacheOrgApisixRouteV2Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackendToTerraform(struct!.backend),
    match: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    plugins: cdktf.listMapper(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPluginsToTerraform, false)(struct!.plugins),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackend",
    },
    match: {
      value: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatch",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugins: {
      value: cdktf.listMapperHcl(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPluginsToHclTerraform, false)(struct!.plugins),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPluginsList",
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

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._plugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend.internalValue = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
      this._plugins.internalValue = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend.internalValue = value.backend;
      this._match.internalValue = value.match;
      this._name = value.name;
      this._plugins.internalValue = value.plugins;
      this._protocol = value.protocol;
    }
  }

  // backend - computed: false, optional: false, required: true
  private _backend = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamBackend) {
    this._backend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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

  // plugins - computed: false, optional: true, required: false
  private _plugins = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
  public putPlugins(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamPlugins[] | cdktf.IResolvable) {
    this._plugins.internalValue = value;
  }
  public resetPlugins() {
    this._plugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins.internalValue;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamList extends cdktf.ComplexList {
  public internalValue? : DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStream[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamOutputReference {
    return new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApisixApacheOrgApisixRouteV2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#http DataK8SApisixApacheOrgApisixRouteV2Manifest#http}
  */
  readonly http?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#ingress_class_name DataK8SApisixApacheOrgApisixRouteV2Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#stream DataK8SApisixApacheOrgApisixRouteV2Manifest#stream}
  */
  readonly stream?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStream[] | cdktf.IResolvable;
}

export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecToTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: cdktf.listMapper(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpToTerraform, false)(struct!.http),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    stream: cdktf.listMapper(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamToTerraform, false)(struct!.stream),
  }
}


export function dataK8SApisixApacheOrgApisixRouteV2ManifestSpecToHclTerraform(struct?: DataK8SApisixApacheOrgApisixRouteV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: cdktf.listMapperHcl(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpToHclTerraform, false)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpList",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream: {
      value: cdktf.listMapperHcl(dataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamToHclTerraform, false)(struct!.stream),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixRouteV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixRouteV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._stream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._ingressClassName = undefined;
      this._stream.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._ingressClassName = value.ingressClassName;
      this._stream.internalValue = value.stream;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
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

  // stream - computed: false, optional: true, required: false
  private _stream = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStreamList(this, "stream", false);
  public get stream() {
    return this._stream;
  }
  public putStream(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpecStream[] | cdktf.IResolvable) {
    this._stream.internalValue = value;
  }
  public resetStream() {
    this._stream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest k8s_apisix_apache_org_apisix_route_v2_manifest}
*/
export class DataK8SApisixApacheOrgApisixRouteV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apisix_apache_org_apisix_route_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApisixApacheOrgApisixRouteV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApisixApacheOrgApisixRouteV2Manifest to import
  * @param importFromId The id of the existing DataK8SApisixApacheOrgApisixRouteV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApisixApacheOrgApisixRouteV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apisix_apache_org_apisix_route_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apisix_apache_org_apisix_route_v2_manifest k8s_apisix_apache_org_apisix_route_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApisixApacheOrgApisixRouteV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApisixApacheOrgApisixRouteV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apisix_apache_org_apisix_route_v2_manifest',
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
  private _metadata = new DataK8SApisixApacheOrgApisixRouteV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApisixApacheOrgApisixRouteV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApisixApacheOrgApisixRouteV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApisixApacheOrgApisixRouteV2ManifestSpec) {
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
      metadata: dataK8SApisixApacheOrgApisixRouteV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApisixApacheOrgApisixRouteV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestMetadata",
      },
      spec: {
        value: dataK8SApisixApacheOrgApisixRouteV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApisixApacheOrgApisixRouteV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
