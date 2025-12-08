// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCephRookIoCephObjectStoreV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#metadata DataK8SCephRookIoCephObjectStoreV1Manifest#metadata}
  */
  readonly metadata: DataK8SCephRookIoCephObjectStoreV1ManifestMetadata;
  /**
  * ObjectStoreSpec represent the spec of a pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#spec DataK8SCephRookIoCephObjectStoreV1Manifest#spec}
  */
  readonly spec: DataK8SCephRookIoCephObjectStoreV1ManifestSpec;
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#annotations DataK8SCephRookIoCephObjectStoreV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#labels DataK8SCephRookIoCephObjectStoreV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#namespace DataK8SCephRookIoCephObjectStoreV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestMetadataToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestMetadataToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystone {
  /**
  * The roles requires to serve requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#accepted_roles DataK8SCephRookIoCephObjectStoreV1Manifest#accepted_roles}
  */
  readonly acceptedRoles: string[];
  /**
  * Create new users in their own tenants of the same name. Possible values are true, false, swift and s3. The latter have the effect of splitting the identity space such that only the indicated protocol will use implicit tenants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#implicit_tenants DataK8SCephRookIoCephObjectStoreV1Manifest#implicit_tenants}
  */
  readonly implicitTenants?: string;
  /**
  * The number of seconds between token revocation checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#revocation_interval DataK8SCephRookIoCephObjectStoreV1Manifest#revocation_interval}
  */
  readonly revocationInterval?: number;
  /**
  * The name of the secret containing the credentials for the service user account used by RGW. It has to be in the same namespace as the object store resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#service_user_secret_name DataK8SCephRookIoCephObjectStoreV1Manifest#service_user_secret_name}
  */
  readonly serviceUserSecretName: string;
  /**
  * The maximum number of entries in each Keystone token cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#token_cache_size DataK8SCephRookIoCephObjectStoreV1Manifest#token_cache_size}
  */
  readonly tokenCacheSize?: number;
  /**
  * The URL for the Keystone server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#url DataK8SCephRookIoCephObjectStoreV1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystoneToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accepted_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acceptedRoles),
    implicit_tenants: cdktf.stringToTerraform(struct!.implicitTenants),
    revocation_interval: cdktf.numberToTerraform(struct!.revocationInterval),
    service_user_secret_name: cdktf.stringToTerraform(struct!.serviceUserSecretName),
    token_cache_size: cdktf.numberToTerraform(struct!.tokenCacheSize),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystoneToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accepted_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acceptedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    implicit_tenants: {
      value: cdktf.stringToHclTerraform(struct!.implicitTenants),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revocation_interval: {
      value: cdktf.numberToHclTerraform(struct!.revocationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_user_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceUserSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.tokenCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptedRoles = this._acceptedRoles;
    }
    if (this._implicitTenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.implicitTenants = this._implicitTenants;
    }
    if (this._revocationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationInterval = this._revocationInterval;
    }
    if (this._serviceUserSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUserSecretName = this._serviceUserSecretName;
    }
    if (this._tokenCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenCacheSize = this._tokenCacheSize;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptedRoles = undefined;
      this._implicitTenants = undefined;
      this._revocationInterval = undefined;
      this._serviceUserSecretName = undefined;
      this._tokenCacheSize = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptedRoles = value.acceptedRoles;
      this._implicitTenants = value.implicitTenants;
      this._revocationInterval = value.revocationInterval;
      this._serviceUserSecretName = value.serviceUserSecretName;
      this._tokenCacheSize = value.tokenCacheSize;
      this._url = value.url;
    }
  }

  // accepted_roles - computed: false, optional: false, required: true
  private _acceptedRoles?: string[]; 
  public get acceptedRoles() {
    return this.getListAttribute('accepted_roles');
  }
  public set acceptedRoles(value: string[]) {
    this._acceptedRoles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedRolesInput() {
    return this._acceptedRoles;
  }

  // implicit_tenants - computed: false, optional: true, required: false
  private _implicitTenants?: string; 
  public get implicitTenants() {
    return this.getStringAttribute('implicit_tenants');
  }
  public set implicitTenants(value: string) {
    this._implicitTenants = value;
  }
  public resetImplicitTenants() {
    this._implicitTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitTenantsInput() {
    return this._implicitTenants;
  }

  // revocation_interval - computed: false, optional: true, required: false
  private _revocationInterval?: number; 
  public get revocationInterval() {
    return this.getNumberAttribute('revocation_interval');
  }
  public set revocationInterval(value: number) {
    this._revocationInterval = value;
  }
  public resetRevocationInterval() {
    this._revocationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationIntervalInput() {
    return this._revocationInterval;
  }

  // service_user_secret_name - computed: false, optional: false, required: true
  private _serviceUserSecretName?: string; 
  public get serviceUserSecretName() {
    return this.getStringAttribute('service_user_secret_name');
  }
  public set serviceUserSecretName(value: string) {
    this._serviceUserSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUserSecretNameInput() {
    return this._serviceUserSecretName;
  }

  // token_cache_size - computed: false, optional: true, required: false
  private _tokenCacheSize?: number; 
  public get tokenCacheSize() {
    return this.getNumberAttribute('token_cache_size');
  }
  public set tokenCacheSize(value: number) {
    this._tokenCacheSize = value;
  }
  public resetTokenCacheSize() {
    this._tokenCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCacheSizeInput() {
    return this._tokenCacheSize;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuth {
  /**
  * The spec for Keystone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#keystone DataK8SCephRookIoCephObjectStoreV1Manifest#keystone}
  */
  readonly keystone?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystone;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keystone: dataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystoneToTerraform(struct!.keystone),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keystone: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystoneToHclTerraform(struct!.keystone),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystone",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keystone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystone = this._keystone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keystone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keystone.internalValue = value.keystone;
    }
  }

  // keystone - computed: false, optional: true, required: false
  private _keystone = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystoneOutputReference(this, "keystone");
  public get keystone() {
    return this._keystone;
  }
  public putKeystone(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthKeystone) {
    this._keystone.internalValue = value;
  }
  public resetKeystone() {
    this._keystone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneInput() {
    return this._keystone.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCoded {
  /**
  * The algorithm for erasure coding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#algorithm DataK8SCephRookIoCephObjectStoreV1Manifest#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type). This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#coding_chunks DataK8SCephRookIoCephObjectStoreV1Manifest#coding_chunks}
  */
  readonly codingChunks: number;
  /**
  * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type). The number of chunks required to recover an object when any single OSD is lost is the same as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#data_chunks DataK8SCephRookIoCephObjectStoreV1Manifest#data_chunks}
  */
  readonly dataChunks: number;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCodedToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCoded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    coding_chunks: cdktf.numberToTerraform(struct!.codingChunks),
    data_chunks: cdktf.numberToTerraform(struct!.dataChunks),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCodedToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCoded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coding_chunks: {
      value: cdktf.numberToHclTerraform(struct!.codingChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_chunks: {
      value: cdktf.numberToHclTerraform(struct!.dataChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCodedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCoded | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._codingChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.codingChunks = this._codingChunks;
    }
    if (this._dataChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataChunks = this._dataChunks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCoded | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._codingChunks = undefined;
      this._dataChunks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._codingChunks = value.codingChunks;
      this._dataChunks = value.dataChunks;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // coding_chunks - computed: false, optional: false, required: true
  private _codingChunks?: number; 
  public get codingChunks() {
    return this.getNumberAttribute('coding_chunks');
  }
  public set codingChunks(value: number) {
    this._codingChunks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codingChunksInput() {
    return this._codingChunks;
  }

  // data_chunks - computed: false, optional: false, required: true
  private _dataChunks?: number; 
  public get dataChunks() {
    return this.getNumberAttribute('data_chunks');
  }
  public set dataChunks(value: number) {
    this._dataChunks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataChunksInput() {
    return this._dataChunks;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeers {
  /**
  * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#secret_names DataK8SCephRookIoCephObjectStoreV1Manifest#secret_names}
  */
  readonly secretNames?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeersToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretNames),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeersToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNames = this._secretNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretNames = value.secretNames;
    }
  }

  // secret_names - computed: false, optional: true, required: false
  private _secretNames?: string[]; 
  public get secretNames() {
    return this.getListAttribute('secret_names');
  }
  public set secretNames(value: string[]) {
    this._secretNames = value;
  }
  public resetSecretNames() {
    this._secretNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamesInput() {
    return this._secretNames;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedules {
  /**
  * Interval represent the periodicity of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#interval DataK8SCephRookIoCephObjectStoreV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Path is the path to snapshot, only valid for CephFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path?: string;
  /**
  * StartTime indicates when to start the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#start_time DataK8SCephRookIoCephObjectStoreV1Manifest#start_time}
  */
  readonly startTime?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedulesToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedulesToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedules | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._path = value.path;
      this._startTime = value.startTime;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedulesOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroring {
  /**
  * Enabled whether this pool is mirrored or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#enabled DataK8SCephRookIoCephObjectStoreV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mode is the mirroring mode: either pool or image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mode DataK8SCephRookIoCephObjectStoreV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Peers represents the peers spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#peers DataK8SCephRookIoCephObjectStoreV1Manifest#peers}
  */
  readonly peers?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeers;
  /**
  * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#snapshot_schedules DataK8SCephRookIoCephObjectStoreV1Manifest#snapshot_schedules}
  */
  readonly snapshotSchedules?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
    peers: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeersToTerraform(struct!.peers),
    snapshot_schedules: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedulesToTerraform, false)(struct!.snapshotSchedules),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peers: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeersToHclTerraform(struct!.peers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeers",
    },
    snapshot_schedules: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedulesToHclTerraform, false)(struct!.snapshotSchedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._snapshotSchedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotSchedules = this._snapshotSchedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._mode = undefined;
      this._peers.internalValue = undefined;
      this._snapshotSchedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._mode = value.mode;
      this._peers.internalValue = value.peers;
      this._snapshotSchedules.internalValue = value.snapshotSchedules;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // peers - computed: false, optional: true, required: false
  private _peers = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeersOutputReference(this, "peers");
  public get peers() {
    return this._peers;
  }
  public putPeers(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringPeers) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // snapshot_schedules - computed: false, optional: true, required: false
  private _snapshotSchedules = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedulesList(this, "snapshot_schedules", false);
  public get snapshotSchedules() {
    return this._snapshotSchedules;
  }
  public putSnapshotSchedules(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable) {
    this._snapshotSchedules.internalValue = value;
  }
  public resetSnapshotSchedules() {
    this._snapshotSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotSchedulesInput() {
    return this._snapshotSchedules.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotas {
  /**
  * MaxBytes represents the quota in bytes Deprecated in favor of MaxSize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#max_bytes DataK8SCephRookIoCephObjectStoreV1Manifest#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * MaxObjects represents the quota in objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#max_objects DataK8SCephRookIoCephObjectStoreV1Manifest#max_objects}
  */
  readonly maxObjects?: number;
  /**
  * MaxSize represents the quota in bytes as a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#max_size DataK8SCephRookIoCephObjectStoreV1Manifest#max_size}
  */
  readonly maxSize?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotasToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_objects: cdktf.numberToTerraform(struct!.maxObjects),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotasToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_objects: {
      value: cdktf.numberToHclTerraform(struct!.maxObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjects = this._maxObjects;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBytes = undefined;
      this._maxObjects = undefined;
      this._maxSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBytes = value.maxBytes;
      this._maxObjects = value.maxObjects;
      this._maxSize = value.maxSize;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_objects - computed: false, optional: true, required: false
  private _maxObjects?: number; 
  public get maxObjects() {
    return this.getNumberAttribute('max_objects');
  }
  public set maxObjects(value: number) {
    this._maxObjects = value;
  }
  public resetMaxObjects() {
    this._maxObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectsInput() {
    return this._maxObjects;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorage {
  /**
  * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#primary_device_class DataK8SCephRookIoCephObjectStoreV1Manifest#primary_device_class}
  */
  readonly primaryDeviceClass: string;
  /**
  * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#secondary_device_class DataK8SCephRookIoCephObjectStoreV1Manifest#secondary_device_class}
  */
  readonly secondaryDeviceClass: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorageToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_device_class: cdktf.stringToTerraform(struct!.primaryDeviceClass),
    secondary_device_class: cdktf.stringToTerraform(struct!.secondaryDeviceClass),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorageToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_device_class: {
      value: cdktf.stringToHclTerraform(struct!.primaryDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_device_class: {
      value: cdktf.stringToHclTerraform(struct!.secondaryDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryDeviceClass = this._primaryDeviceClass;
    }
    if (this._secondaryDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDeviceClass = this._secondaryDeviceClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryDeviceClass = undefined;
      this._secondaryDeviceClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryDeviceClass = value.primaryDeviceClass;
      this._secondaryDeviceClass = value.secondaryDeviceClass;
    }
  }

  // primary_device_class - computed: false, optional: false, required: true
  private _primaryDeviceClass?: string; 
  public get primaryDeviceClass() {
    return this.getStringAttribute('primary_device_class');
  }
  public set primaryDeviceClass(value: string) {
    this._primaryDeviceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDeviceClassInput() {
    return this._primaryDeviceClass;
  }

  // secondary_device_class - computed: false, optional: false, required: true
  private _secondaryDeviceClass?: string; 
  public get secondaryDeviceClass() {
    return this.getStringAttribute('secondary_device_class');
  }
  public set secondaryDeviceClass(value: string) {
    this._secondaryDeviceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDeviceClassInput() {
    return this._secondaryDeviceClass;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicated {
  /**
  * HybridStorage represents hybrid storage tier settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#hybrid_storage DataK8SCephRookIoCephObjectStoreV1Manifest#hybrid_storage}
  */
  readonly hybridStorage?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorage;
  /**
  * ReplicasPerFailureDomain the number of replica in the specified failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#replicas_per_failure_domain DataK8SCephRookIoCephObjectStoreV1Manifest#replicas_per_failure_domain}
  */
  readonly replicasPerFailureDomain?: number;
  /**
  * RequireSafeReplicaSize if false allows you to set replica 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#require_safe_replica_size DataK8SCephRookIoCephObjectStoreV1Manifest#require_safe_replica_size}
  */
  readonly requireSafeReplicaSize?: boolean | cdktf.IResolvable;
  /**
  * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#size DataK8SCephRookIoCephObjectStoreV1Manifest#size}
  */
  readonly size: number;
  /**
  * SubFailureDomain the name of the sub-failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#sub_failure_domain DataK8SCephRookIoCephObjectStoreV1Manifest#sub_failure_domain}
  */
  readonly subFailureDomain?: string;
  /**
  * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#target_size_ratio DataK8SCephRookIoCephObjectStoreV1Manifest#target_size_ratio}
  */
  readonly targetSizeRatio?: number;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hybrid_storage: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorageToTerraform(struct!.hybridStorage),
    replicas_per_failure_domain: cdktf.numberToTerraform(struct!.replicasPerFailureDomain),
    require_safe_replica_size: cdktf.booleanToTerraform(struct!.requireSafeReplicaSize),
    size: cdktf.numberToTerraform(struct!.size),
    sub_failure_domain: cdktf.stringToTerraform(struct!.subFailureDomain),
    target_size_ratio: cdktf.numberToTerraform(struct!.targetSizeRatio),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hybrid_storage: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorageToHclTerraform(struct!.hybridStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorage",
    },
    replicas_per_failure_domain: {
      value: cdktf.numberToHclTerraform(struct!.replicasPerFailureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_safe_replica_size: {
      value: cdktf.booleanToHclTerraform(struct!.requireSafeReplicaSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.subFailureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_size_ratio: {
      value: cdktf.numberToHclTerraform(struct!.targetSizeRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hybridStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridStorage = this._hybridStorage?.internalValue;
    }
    if (this._replicasPerFailureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicasPerFailureDomain = this._replicasPerFailureDomain;
    }
    if (this._requireSafeReplicaSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSafeReplicaSize = this._requireSafeReplicaSize;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._subFailureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subFailureDomain = this._subFailureDomain;
    }
    if (this._targetSizeRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSizeRatio = this._targetSizeRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hybridStorage.internalValue = undefined;
      this._replicasPerFailureDomain = undefined;
      this._requireSafeReplicaSize = undefined;
      this._size = undefined;
      this._subFailureDomain = undefined;
      this._targetSizeRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hybridStorage.internalValue = value.hybridStorage;
      this._replicasPerFailureDomain = value.replicasPerFailureDomain;
      this._requireSafeReplicaSize = value.requireSafeReplicaSize;
      this._size = value.size;
      this._subFailureDomain = value.subFailureDomain;
      this._targetSizeRatio = value.targetSizeRatio;
    }
  }

  // hybrid_storage - computed: false, optional: true, required: false
  private _hybridStorage = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorageOutputReference(this, "hybrid_storage");
  public get hybridStorage() {
    return this._hybridStorage;
  }
  public putHybridStorage(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedHybridStorage) {
    this._hybridStorage.internalValue = value;
  }
  public resetHybridStorage() {
    this._hybridStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridStorageInput() {
    return this._hybridStorage.internalValue;
  }

  // replicas_per_failure_domain - computed: false, optional: true, required: false
  private _replicasPerFailureDomain?: number; 
  public get replicasPerFailureDomain() {
    return this.getNumberAttribute('replicas_per_failure_domain');
  }
  public set replicasPerFailureDomain(value: number) {
    this._replicasPerFailureDomain = value;
  }
  public resetReplicasPerFailureDomain() {
    this._replicasPerFailureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasPerFailureDomainInput() {
    return this._replicasPerFailureDomain;
  }

  // require_safe_replica_size - computed: false, optional: true, required: false
  private _requireSafeReplicaSize?: boolean | cdktf.IResolvable; 
  public get requireSafeReplicaSize() {
    return this.getBooleanAttribute('require_safe_replica_size');
  }
  public set requireSafeReplicaSize(value: boolean | cdktf.IResolvable) {
    this._requireSafeReplicaSize = value;
  }
  public resetRequireSafeReplicaSize() {
    this._requireSafeReplicaSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSafeReplicaSizeInput() {
    return this._requireSafeReplicaSize;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sub_failure_domain - computed: false, optional: true, required: false
  private _subFailureDomain?: string; 
  public get subFailureDomain() {
    return this.getStringAttribute('sub_failure_domain');
  }
  public set subFailureDomain(value: string) {
    this._subFailureDomain = value;
  }
  public resetSubFailureDomain() {
    this._subFailureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subFailureDomainInput() {
    return this._subFailureDomain;
  }

  // target_size_ratio - computed: false, optional: true, required: false
  private _targetSizeRatio?: number; 
  public get targetSizeRatio() {
    return this.getNumberAttribute('target_size_ratio');
  }
  public set targetSizeRatio(value: number) {
    this._targetSizeRatio = value;
  }
  public resetTargetSizeRatio() {
    this._targetSizeRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSizeRatioInput() {
    return this._targetSizeRatio;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#disabled DataK8SCephRookIoCephObjectStoreV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#interval DataK8SCephRookIoCephObjectStoreV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#timeout DataK8SCephRookIoCephObjectStoreV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirrorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    interval: cdktf.stringToTerraform(struct!.interval),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirrorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._interval = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._interval = value.interval;
      this._timeout = value.timeout;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheck {
  /**
  * HealthCheckSpec represents the health check of an object store bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mirror DataK8SCephRookIoCephObjectStoreV1Manifest#mirror}
  */
  readonly mirror?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirror;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirrorToTerraform(struct!.mirror),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirrorToHclTerraform(struct!.mirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirror",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirror.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirror.internalValue = value.mirror;
    }
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirrorOutputReference(this, "mirror");
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckMirror) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPool {
  /**
  * The application name to set on the pool. Only expected to be set for rgw pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#application DataK8SCephRookIoCephObjectStoreV1Manifest#application}
  */
  readonly application?: string;
  /**
  * DEPRECATED: use Parameters instead, e.g., Parameters['compression_mode'] = 'force' The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force) Do NOT set a default value for kubebuilder as this will override the Parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#compression_mode DataK8SCephRookIoCephObjectStoreV1Manifest#compression_mode}
  */
  readonly compressionMode?: string;
  /**
  * The root of the crush hierarchy utilized by the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#crush_root DataK8SCephRookIoCephObjectStoreV1Manifest#crush_root}
  */
  readonly crushRoot?: string;
  /**
  * The device class the OSD should set to for use in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#device_class DataK8SCephRookIoCephObjectStoreV1Manifest#device_class}
  */
  readonly deviceClass?: string;
  /**
  * Allow rook operator to change the pool CRUSH tunables once the pool is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#enable_crush_updates DataK8SCephRookIoCephObjectStoreV1Manifest#enable_crush_updates}
  */
  readonly enableCrushUpdates?: boolean | cdktf.IResolvable;
  /**
  * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#enable_rbd_stats DataK8SCephRookIoCephObjectStoreV1Manifest#enable_rbd_stats}
  */
  readonly enableRbdStats?: boolean | cdktf.IResolvable;
  /**
  * The erasure code settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#erasure_coded DataK8SCephRookIoCephObjectStoreV1Manifest#erasure_coded}
  */
  readonly erasureCoded?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCoded;
  /**
  * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#failure_domain DataK8SCephRookIoCephObjectStoreV1Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * The mirroring settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mirroring DataK8SCephRookIoCephObjectStoreV1Manifest#mirroring}
  */
  readonly mirroring?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroring;
  /**
  * Parameters is a list of properties to enable on a given pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#parameters DataK8SCephRookIoCephObjectStoreV1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The quota settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#quotas DataK8SCephRookIoCephObjectStoreV1Manifest#quotas}
  */
  readonly quotas?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotas;
  /**
  * The replication settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#replicated DataK8SCephRookIoCephObjectStoreV1Manifest#replicated}
  */
  readonly replicated?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicated;
  /**
  * The mirroring statusCheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#status_check DataK8SCephRookIoCephObjectStoreV1Manifest#status_check}
  */
  readonly statusCheck?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheck;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.stringToTerraform(struct!.application),
    compression_mode: cdktf.stringToTerraform(struct!.compressionMode),
    crush_root: cdktf.stringToTerraform(struct!.crushRoot),
    device_class: cdktf.stringToTerraform(struct!.deviceClass),
    enable_crush_updates: cdktf.booleanToTerraform(struct!.enableCrushUpdates),
    enable_rbd_stats: cdktf.booleanToTerraform(struct!.enableRbdStats),
    erasure_coded: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCodedToTerraform(struct!.erasureCoded),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    mirroring: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringToTerraform(struct!.mirroring),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    quotas: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotasToTerraform(struct!.quotas),
    replicated: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedToTerraform(struct!.replicated),
    status_check: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckToTerraform(struct!.statusCheck),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_mode: {
      value: cdktf.stringToHclTerraform(struct!.compressionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crush_root: {
      value: cdktf.stringToHclTerraform(struct!.crushRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_class: {
      value: cdktf.stringToHclTerraform(struct!.deviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_crush_updates: {
      value: cdktf.booleanToHclTerraform(struct!.enableCrushUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rbd_stats: {
      value: cdktf.booleanToHclTerraform(struct!.enableRbdStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    erasure_coded: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCodedToHclTerraform(struct!.erasureCoded),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCoded",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirroring: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringToHclTerraform(struct!.mirroring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroring",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    quotas: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotasToHclTerraform(struct!.quotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotas",
    },
    replicated: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedToHclTerraform(struct!.replicated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicated",
    },
    status_check: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckToHclTerraform(struct!.statusCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._compressionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMode = this._compressionMode;
    }
    if (this._crushRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.crushRoot = this._crushRoot;
    }
    if (this._deviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceClass = this._deviceClass;
    }
    if (this._enableCrushUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCrushUpdates = this._enableCrushUpdates;
    }
    if (this._enableRbdStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRbdStats = this._enableRbdStats;
    }
    if (this._erasureCoded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.erasureCoded = this._erasureCoded?.internalValue;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._mirroring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroring = this._mirroring?.internalValue;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._quotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotas = this._quotas?.internalValue;
    }
    if (this._replicated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicated = this._replicated?.internalValue;
    }
    if (this._statusCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCheck = this._statusCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._compressionMode = undefined;
      this._crushRoot = undefined;
      this._deviceClass = undefined;
      this._enableCrushUpdates = undefined;
      this._enableRbdStats = undefined;
      this._erasureCoded.internalValue = undefined;
      this._failureDomain = undefined;
      this._mirroring.internalValue = undefined;
      this._parameters = undefined;
      this._quotas.internalValue = undefined;
      this._replicated.internalValue = undefined;
      this._statusCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._compressionMode = value.compressionMode;
      this._crushRoot = value.crushRoot;
      this._deviceClass = value.deviceClass;
      this._enableCrushUpdates = value.enableCrushUpdates;
      this._enableRbdStats = value.enableRbdStats;
      this._erasureCoded.internalValue = value.erasureCoded;
      this._failureDomain = value.failureDomain;
      this._mirroring.internalValue = value.mirroring;
      this._parameters = value.parameters;
      this._quotas.internalValue = value.quotas;
      this._replicated.internalValue = value.replicated;
      this._statusCheck.internalValue = value.statusCheck;
    }
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // compression_mode - computed: false, optional: true, required: false
  private _compressionMode?: string; 
  public get compressionMode() {
    return this.getStringAttribute('compression_mode');
  }
  public set compressionMode(value: string) {
    this._compressionMode = value;
  }
  public resetCompressionMode() {
    this._compressionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionModeInput() {
    return this._compressionMode;
  }

  // crush_root - computed: false, optional: true, required: false
  private _crushRoot?: string; 
  public get crushRoot() {
    return this.getStringAttribute('crush_root');
  }
  public set crushRoot(value: string) {
    this._crushRoot = value;
  }
  public resetCrushRoot() {
    this._crushRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crushRootInput() {
    return this._crushRoot;
  }

  // device_class - computed: false, optional: true, required: false
  private _deviceClass?: string; 
  public get deviceClass() {
    return this.getStringAttribute('device_class');
  }
  public set deviceClass(value: string) {
    this._deviceClass = value;
  }
  public resetDeviceClass() {
    this._deviceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceClassInput() {
    return this._deviceClass;
  }

  // enable_crush_updates - computed: false, optional: true, required: false
  private _enableCrushUpdates?: boolean | cdktf.IResolvable; 
  public get enableCrushUpdates() {
    return this.getBooleanAttribute('enable_crush_updates');
  }
  public set enableCrushUpdates(value: boolean | cdktf.IResolvable) {
    this._enableCrushUpdates = value;
  }
  public resetEnableCrushUpdates() {
    this._enableCrushUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrushUpdatesInput() {
    return this._enableCrushUpdates;
  }

  // enable_rbd_stats - computed: false, optional: true, required: false
  private _enableRbdStats?: boolean | cdktf.IResolvable; 
  public get enableRbdStats() {
    return this.getBooleanAttribute('enable_rbd_stats');
  }
  public set enableRbdStats(value: boolean | cdktf.IResolvable) {
    this._enableRbdStats = value;
  }
  public resetEnableRbdStats() {
    this._enableRbdStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbdStatsInput() {
    return this._enableRbdStats;
  }

  // erasure_coded - computed: false, optional: true, required: false
  private _erasureCoded = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCodedOutputReference(this, "erasure_coded");
  public get erasureCoded() {
    return this._erasureCoded;
  }
  public putErasureCoded(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolErasureCoded) {
    this._erasureCoded.internalValue = value;
  }
  public resetErasureCoded() {
    this._erasureCoded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erasureCodedInput() {
    return this._erasureCoded.internalValue;
  }

  // failure_domain - computed: false, optional: true, required: false
  private _failureDomain?: string; 
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }
  public set failureDomain(value: string) {
    this._failureDomain = value;
  }
  public resetFailureDomain() {
    this._failureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainInput() {
    return this._failureDomain;
  }

  // mirroring - computed: false, optional: true, required: false
  private _mirroring = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroringOutputReference(this, "mirroring");
  public get mirroring() {
    return this._mirroring;
  }
  public putMirroring(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolMirroring) {
    this._mirroring.internalValue = value;
  }
  public resetMirroring() {
    this._mirroring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringInput() {
    return this._mirroring.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // quotas - computed: false, optional: true, required: false
  private _quotas = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotasOutputReference(this, "quotas");
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolQuotas) {
    this._quotas.internalValue = value;
  }
  public resetQuotas() {
    this._quotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotasInput() {
    return this._quotas.internalValue;
  }

  // replicated - computed: false, optional: true, required: false
  private _replicated = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicatedOutputReference(this, "replicated");
  public get replicated() {
    return this._replicated;
  }
  public putReplicated(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolReplicated) {
    this._replicated.internalValue = value;
  }
  public resetReplicated() {
    this._replicated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedInput() {
    return this._replicated.internalValue;
  }

  // status_check - computed: false, optional: true, required: false
  private _statusCheck = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheckOutputReference(this, "status_check");
  public get statusCheck() {
    return this._statusCheck;
  }
  public putStatusCheck(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolStatusCheck) {
    this._statusCheck.internalValue = value;
  }
  public resetStatusCheck() {
    this._statusCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckInput() {
    return this._statusCheck.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mode DataK8SCephRookIoCephObjectStoreV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#default_mode DataK8SCephRookIoCephObjectStoreV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#items DataK8SCephRookIoCephObjectStoreV1Manifest#items}
  */
  readonly items?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#optional DataK8SCephRookIoCephObjectStoreV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDir {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#medium DataK8SCephRookIoCephObjectStoreV1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#size_limit DataK8SCephRookIoCephObjectStoreV1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDirToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDirToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#type DataK8SCephRookIoCephObjectStoreV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPathToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPathToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#claim_name DataK8SCephRookIoCephObjectStoreV1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#read_only DataK8SCephRookIoCephObjectStoreV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaimToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaimToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_labels DataK8SCephRookIoCephObjectStoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#label_selector DataK8SCephRookIoCephObjectStoreV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#optional DataK8SCephRookIoCephObjectStoreV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#signer_name DataK8SCephRookIoCephObjectStoreV1Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    path: cdktf.stringToTerraform(struct!.path),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer_name: {
      value: cdktf.stringToHclTerraform(struct!.signerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._path = undefined;
      this._signerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._optional = value.optional;
      this._path = value.path;
      this._signerName = value.signerName;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // signer_name - computed: false, optional: true, required: false
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  public resetSignerName() {
    this._signerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mode DataK8SCephRookIoCephObjectStoreV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#items DataK8SCephRookIoCephObjectStoreV1Manifest#items}
  */
  readonly items?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#optional DataK8SCephRookIoCephObjectStoreV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#api_version DataK8SCephRookIoCephObjectStoreV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#field_path DataK8SCephRookIoCephObjectStoreV1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
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

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#container_name DataK8SCephRookIoCephObjectStoreV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#divisor DataK8SCephRookIoCephObjectStoreV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#resource DataK8SCephRookIoCephObjectStoreV1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
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

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#field_ref DataK8SCephRookIoCephObjectStoreV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mode DataK8SCephRookIoCephObjectStoreV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#resource_field_ref DataK8SCephRookIoCephObjectStoreV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#items DataK8SCephRookIoCephObjectStoreV1Manifest#items}
  */
  readonly items?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mode DataK8SCephRookIoCephObjectStoreV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#items DataK8SCephRookIoCephObjectStoreV1Manifest#items}
  */
  readonly items?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#optional DataK8SCephRookIoCephObjectStoreV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#audience DataK8SCephRookIoCephObjectStoreV1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#expiration_seconds DataK8SCephRookIoCephObjectStoreV1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expirationSeconds = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
      this._path = value.path;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#cluster_trust_bundle DataK8SCephRookIoCephObjectStoreV1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#config_map DataK8SCephRookIoCephObjectStoreV1Manifest#config_map}
  */
  readonly configMap?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#downward_api DataK8SCephRookIoCephObjectStoreV1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#secret DataK8SCephRookIoCephObjectStoreV1Manifest#secret}
  */
  readonly secret?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#service_account_token DataK8SCephRookIoCephObjectStoreV1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountToken;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterTrustBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTrustBundle = this._clusterTrustBundle?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._serviceAccountToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountToken = this._serviceAccountToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._serviceAccountToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = value.clusterTrustBundle;
      this._configMap.internalValue = value.configMap;
      this._downwardApi.internalValue = value.downwardApi;
      this._secret.internalValue = value.secret;
      this._serviceAccountToken.internalValue = value.serviceAccountToken;
    }
  }

  // cluster_trust_bundle - computed: false, optional: true, required: false
  private _clusterTrustBundle = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundle) {
    this._clusterTrustBundle.internalValue = value;
  }
  public resetClusterTrustBundle() {
    this._clusterTrustBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTrustBundleInput() {
    return this._clusterTrustBundle.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountToken) {
    this._serviceAccountToken.internalValue = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken.internalValue;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#default_mode DataK8SCephRookIoCephObjectStoreV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#sources DataK8SCephRookIoCephObjectStoreV1Manifest#sources}
  */
  readonly sources?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._sources.internalValue = value.sources;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mode DataK8SCephRookIoCephObjectStoreV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#default_mode DataK8SCephRookIoCephObjectStoreV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#items DataK8SCephRookIoCephObjectStoreV1Manifest#items}
  */
  readonly items?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#optional DataK8SCephRookIoCephObjectStoreV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#secret_name DataK8SCephRookIoCephObjectStoreV1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#config_map DataK8SCephRookIoCephObjectStoreV1Manifest#config_map}
  */
  readonly configMap?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#empty_dir DataK8SCephRookIoCephObjectStoreV1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDir;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#host_path DataK8SCephRookIoCephObjectStoreV1Manifest#host_path}
  */
  readonly hostPath?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#persistent_volume_claim DataK8SCephRookIoCephObjectStoreV1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#projected DataK8SCephRookIoCephObjectStoreV1Manifest#projected}
  */
  readonly projected?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjected;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#secret DataK8SCephRookIoCephObjectStoreV1Manifest#secret}
  */
  readonly secret?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecret;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapToTerraform(struct!.configMap),
    empty_dir: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDirToTerraform(struct!.emptyDir),
    host_path: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPathToTerraform(struct!.hostPath),
    persistent_volume_claim: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    projected: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedToTerraform(struct!.projected),
    secret: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretToTerraform(struct!.secret),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMap",
    },
    empty_dir: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDir",
    },
    host_path: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPath",
    },
    persistent_volume_claim: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaim",
    },
    projected: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjected",
    },
    secret: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._hostPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._projected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projected = this._projected?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._projected.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._emptyDir.internalValue = value.emptyDir;
      this._hostPath.internalValue = value.hostPath;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._projected.internalValue = value.projected;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // projected - computed: false, optional: true, required: false
  private _projected = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceProjected) {
    this._projected.internalValue = value;
  }
  public resetProjected() {
    this._projected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedInput() {
    return this._projected.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMounts {
  /**
  * SubPath defines the sub-path (subdirectory) of the directory root where the volumeSource will be mounted. All files/keys in the volume source's volume will be mounted to the subdirectory. This is not the same as the Kubernetes 'subPath' volume mount option. Each subPath definition must be unique and must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#sub_path DataK8SCephRookIoCephObjectStoreV1Manifest#sub_path}
  */
  readonly subPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#volume_source DataK8SCephRookIoCephObjectStoreV1Manifest#volume_source}
  */
  readonly volumeSource: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSource;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    volume_source: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceToTerraform(struct!.volumeSource),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_source: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceToHclTerraform(struct!.volumeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._volumeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSource = this._volumeSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subPath = undefined;
      this._volumeSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subPath = value.subPath;
      this._volumeSource.internalValue = value.volumeSource;
    }
  }

  // sub_path - computed: false, optional: false, required: true
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // volume_source - computed: false, optional: false, required: true
  private _volumeSource = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSourceOutputReference(this, "volume_source");
  public get volumeSource() {
    return this._volumeSource;
  }
  public putVolumeSource(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsVolumeSource) {
    this._volumeSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSourceInput() {
    return this._volumeSource.internalValue;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpoints {
  /**
  * The DNS-addressable Hostname of this endpoint. This field will be preferred over IP if both are given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#hostname DataK8SCephRookIoCephObjectStoreV1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * The IP of this endpoint. As a legacy behavior, this supports being given a DNS-addressable hostname as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#ip DataK8SCephRookIoCephObjectStoreV1Manifest#ip}
  */
  readonly ip?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpointsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpointsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpointsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_fields DataK8SCephRookIoCephObjectStoreV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#preference DataK8SCephRookIoCephObjectStoreV1Manifest#preference}
  */
  readonly preference: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#weight DataK8SCephRookIoCephObjectStoreV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_fields DataK8SCephRookIoCephObjectStoreV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#node_selector_terms DataK8SCephRookIoCephObjectStoreV1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SCephRookIoCephObjectStoreV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SCephRookIoCephObjectStoreV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_labels DataK8SCephRookIoCephObjectStoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_labels DataK8SCephRookIoCephObjectStoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#label_selector DataK8SCephRookIoCephObjectStoreV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_label_keys DataK8SCephRookIoCephObjectStoreV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mismatch_label_keys DataK8SCephRookIoCephObjectStoreV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#namespace_selector DataK8SCephRookIoCephObjectStoreV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#namespaces DataK8SCephRookIoCephObjectStoreV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#topology_key DataK8SCephRookIoCephObjectStoreV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
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

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#pod_affinity_term DataK8SCephRookIoCephObjectStoreV1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#weight DataK8SCephRookIoCephObjectStoreV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_labels DataK8SCephRookIoCephObjectStoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_labels DataK8SCephRookIoCephObjectStoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#label_selector DataK8SCephRookIoCephObjectStoreV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_label_keys DataK8SCephRookIoCephObjectStoreV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mismatch_label_keys DataK8SCephRookIoCephObjectStoreV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#namespace_selector DataK8SCephRookIoCephObjectStoreV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#namespaces DataK8SCephRookIoCephObjectStoreV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#topology_key DataK8SCephRookIoCephObjectStoreV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
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

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SCephRookIoCephObjectStoreV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SCephRookIoCephObjectStoreV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_labels DataK8SCephRookIoCephObjectStoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_labels DataK8SCephRookIoCephObjectStoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#label_selector DataK8SCephRookIoCephObjectStoreV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_label_keys DataK8SCephRookIoCephObjectStoreV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mismatch_label_keys DataK8SCephRookIoCephObjectStoreV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#namespace_selector DataK8SCephRookIoCephObjectStoreV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#namespaces DataK8SCephRookIoCephObjectStoreV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#topology_key DataK8SCephRookIoCephObjectStoreV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
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

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#pod_affinity_term DataK8SCephRookIoCephObjectStoreV1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#weight DataK8SCephRookIoCephObjectStoreV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_labels DataK8SCephRookIoCephObjectStoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_labels DataK8SCephRookIoCephObjectStoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#label_selector DataK8SCephRookIoCephObjectStoreV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_label_keys DataK8SCephRookIoCephObjectStoreV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mismatch_label_keys DataK8SCephRookIoCephObjectStoreV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#namespace_selector DataK8SCephRookIoCephObjectStoreV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#namespaces DataK8SCephRookIoCephObjectStoreV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#topology_key DataK8SCephRookIoCephObjectStoreV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
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

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SCephRookIoCephObjectStoreV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SCephRookIoCephObjectStoreV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#effect DataK8SCephRookIoCephObjectStoreV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#toleration_seconds DataK8SCephRookIoCephObjectStoreV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#value DataK8SCephRookIoCephObjectStoreV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerationsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerationsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerationsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key DataK8SCephRookIoCephObjectStoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#operator DataK8SCephRookIoCephObjectStoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#values DataK8SCephRookIoCephObjectStoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_expressions DataK8SCephRookIoCephObjectStoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_labels DataK8SCephRookIoCephObjectStoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#label_selector DataK8SCephRookIoCephObjectStoreV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#match_label_keys DataK8SCephRookIoCephObjectStoreV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#max_skew DataK8SCephRookIoCephObjectStoreV1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#min_domains DataK8SCephRookIoCephObjectStoreV1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#node_affinity_policy DataK8SCephRookIoCephObjectStoreV1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#node_taints_policy DataK8SCephRookIoCephObjectStoreV1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#topology_key DataK8SCephRookIoCephObjectStoreV1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#when_unsatisfiable DataK8SCephRookIoCephObjectStoreV1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#node_affinity DataK8SCephRookIoCephObjectStoreV1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#pod_affinity DataK8SCephRookIoCephObjectStoreV1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#pod_anti_affinity DataK8SCephRookIoCephObjectStoreV1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#tolerations DataK8SCephRookIoCephObjectStoreV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#topology_spread_constraints DataK8SCephRookIoCephObjectStoreV1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityToTerraform(struct!.podAntiAffinity),
    tolerations: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinity",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#request DataK8SCephRookIoCephObjectStoreV1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaimsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaimsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaimsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#claims DataK8SCephRookIoCephObjectStoreV1Manifest#claims}
  */
  readonly claims?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#limits DataK8SCephRookIoCephObjectStoreV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#requests DataK8SCephRookIoCephObjectStoreV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaimsList",
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayService {
  /**
  * The annotations-related configuration to add/set on each rgw service. nullable optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#annotations DataK8SCephRookIoCephObjectStoreV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayServiceToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayServiceToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayService | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
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
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecGateway {
  /**
  * AdditionalVolumeMounts allows additional volumes to be mounted to the RGW pod. The root directory for each additional volume mount is '/var/rgw'. Example: for an additional mount at subPath 'ldap', mounted from a secret that has key 'bindpass.secret', the file would reside at '/var/rgw/ldap/bindpass.secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#additional_volume_mounts DataK8SCephRookIoCephObjectStoreV1Manifest#additional_volume_mounts}
  */
  readonly additionalVolumeMounts?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMounts[] | cdktf.IResolvable;
  /**
  * The annotations-related configuration to add/set on each Pod related object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#annotations DataK8SCephRookIoCephObjectStoreV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The name of the secret that stores custom ca-bundle with root and intermediate certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#ca_bundle_ref DataK8SCephRookIoCephObjectStoreV1Manifest#ca_bundle_ref}
  */
  readonly caBundleRef?: string;
  /**
  * Whether rgw dashboard is enabled for the rgw daemon. If not set, the rgw dashboard will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#dashboard_enabled DataK8SCephRookIoCephObjectStoreV1Manifest#dashboard_enabled}
  */
  readonly dashboardEnabled?: boolean | cdktf.IResolvable;
  /**
  * DisableMultisiteSyncTraffic, when true, prevents this object store's gateways from transmitting multisite replication data. Note that this value does not affect whether gateways receive multisite replication traffic: see ObjectZone.spec.customEndpoints for that. If false or unset, this object store's gateways will be able to transmit multisite replication data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#disable_multisite_sync_traffic DataK8SCephRookIoCephObjectStoreV1Manifest#disable_multisite_sync_traffic}
  */
  readonly disableMultisiteSyncTraffic?: boolean | cdktf.IResolvable;
  /**
  * ExternalRgwEndpoints points to external RGW endpoint(s). Multiple endpoints can be given, but for stability of ObjectBucketClaims, we highly recommend that users give only a single external RGW endpoint that is a load balancer that sends requests to the multiple RGWs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#external_rgw_endpoints DataK8SCephRookIoCephObjectStoreV1Manifest#external_rgw_endpoints}
  */
  readonly externalRgwEndpoints?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpoints[] | cdktf.IResolvable;
  /**
  * Whether host networking is enabled for the rgw daemon. If not set, the network settings from the cluster CR will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#host_network DataK8SCephRookIoCephObjectStoreV1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * The number of pods in the rgw replicaset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#instances DataK8SCephRookIoCephObjectStoreV1Manifest#instances}
  */
  readonly instances?: number;
  /**
  * The labels-related configuration to add/set on each Pod related object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#labels DataK8SCephRookIoCephObjectStoreV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#placement DataK8SCephRookIoCephObjectStoreV1Manifest#placement}
  */
  readonly placement?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacement;
  /**
  * The port the rgw service will be listening on (http)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#port DataK8SCephRookIoCephObjectStoreV1Manifest#port}
  */
  readonly port?: number;
  /**
  * PriorityClassName sets priority classes on the rgw pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#priority_class_name DataK8SCephRookIoCephObjectStoreV1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * The resource requirements for the rgw pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#resources DataK8SCephRookIoCephObjectStoreV1Manifest#resources}
  */
  readonly resources?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResources;
  /**
  * The port the rgw service will be listening on (https)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#secure_port DataK8SCephRookIoCephObjectStoreV1Manifest#secure_port}
  */
  readonly securePort?: number;
  /**
  * The configuration related to add/set on each rgw service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#service DataK8SCephRookIoCephObjectStoreV1Manifest#service}
  */
  readonly service?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayService;
  /**
  * The name of the secret that stores the ssl certificate for secure rgw connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#ssl_certificate_ref DataK8SCephRookIoCephObjectStoreV1Manifest#ssl_certificate_ref}
  */
  readonly sslCertificateRef?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_volume_mounts: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsToTerraform, false)(struct!.additionalVolumeMounts),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    ca_bundle_ref: cdktf.stringToTerraform(struct!.caBundleRef),
    dashboard_enabled: cdktf.booleanToTerraform(struct!.dashboardEnabled),
    disable_multisite_sync_traffic: cdktf.booleanToTerraform(struct!.disableMultisiteSyncTraffic),
    external_rgw_endpoints: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpointsToTerraform, false)(struct!.externalRgwEndpoints),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    instances: cdktf.numberToTerraform(struct!.instances),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    placement: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementToTerraform(struct!.placement),
    port: cdktf.numberToTerraform(struct!.port),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    resources: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesToTerraform(struct!.resources),
    secure_port: cdktf.numberToTerraform(struct!.securePort),
    service: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayServiceToTerraform(struct!.service),
    ssl_certificate_ref: cdktf.stringToTerraform(struct!.sslCertificateRef),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsToHclTerraform, false)(struct!.additionalVolumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsList",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ca_bundle_ref: {
      value: cdktf.stringToHclTerraform(struct!.caBundleRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dashboardEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_multisite_sync_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.disableMultisiteSyncTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_rgw_endpoints: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpointsToHclTerraform, false)(struct!.externalRgwEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpointsList",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instances: {
      value: cdktf.numberToHclTerraform(struct!.instances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    placement: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacement",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResources",
    },
    secure_port: {
      value: cdktf.numberToHclTerraform(struct!.securePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayService",
    },
    ssl_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalVolumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVolumeMounts = this._additionalVolumeMounts?.internalValue;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._caBundleRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundleRef = this._caBundleRef;
    }
    if (this._dashboardEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardEnabled = this._dashboardEnabled;
    }
    if (this._disableMultisiteSyncTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMultisiteSyncTraffic = this._disableMultisiteSyncTraffic;
    }
    if (this._externalRgwEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalRgwEndpoints = this._externalRgwEndpoints?.internalValue;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._securePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.securePort = this._securePort;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._sslCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificateRef = this._sslCertificateRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalVolumeMounts.internalValue = undefined;
      this._annotations = undefined;
      this._caBundleRef = undefined;
      this._dashboardEnabled = undefined;
      this._disableMultisiteSyncTraffic = undefined;
      this._externalRgwEndpoints.internalValue = undefined;
      this._hostNetwork = undefined;
      this._instances = undefined;
      this._labels = undefined;
      this._placement.internalValue = undefined;
      this._port = undefined;
      this._priorityClassName = undefined;
      this._resources.internalValue = undefined;
      this._securePort = undefined;
      this._service.internalValue = undefined;
      this._sslCertificateRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalVolumeMounts.internalValue = value.additionalVolumeMounts;
      this._annotations = value.annotations;
      this._caBundleRef = value.caBundleRef;
      this._dashboardEnabled = value.dashboardEnabled;
      this._disableMultisiteSyncTraffic = value.disableMultisiteSyncTraffic;
      this._externalRgwEndpoints.internalValue = value.externalRgwEndpoints;
      this._hostNetwork = value.hostNetwork;
      this._instances = value.instances;
      this._labels = value.labels;
      this._placement.internalValue = value.placement;
      this._port = value.port;
      this._priorityClassName = value.priorityClassName;
      this._resources.internalValue = value.resources;
      this._securePort = value.securePort;
      this._service.internalValue = value.service;
      this._sslCertificateRef = value.sslCertificateRef;
    }
  }

  // additional_volume_mounts - computed: false, optional: true, required: false
  private _additionalVolumeMounts = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMountsList(this, "additional_volume_mounts", false);
  public get additionalVolumeMounts() {
    return this._additionalVolumeMounts;
  }
  public putAdditionalVolumeMounts(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayAdditionalVolumeMounts[] | cdktf.IResolvable) {
    this._additionalVolumeMounts.internalValue = value;
  }
  public resetAdditionalVolumeMounts() {
    this._additionalVolumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVolumeMountsInput() {
    return this._additionalVolumeMounts.internalValue;
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

  // ca_bundle_ref - computed: false, optional: true, required: false
  private _caBundleRef?: string; 
  public get caBundleRef() {
    return this.getStringAttribute('ca_bundle_ref');
  }
  public set caBundleRef(value: string) {
    this._caBundleRef = value;
  }
  public resetCaBundleRef() {
    this._caBundleRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleRefInput() {
    return this._caBundleRef;
  }

  // dashboard_enabled - computed: false, optional: true, required: false
  private _dashboardEnabled?: boolean | cdktf.IResolvable; 
  public get dashboardEnabled() {
    return this.getBooleanAttribute('dashboard_enabled');
  }
  public set dashboardEnabled(value: boolean | cdktf.IResolvable) {
    this._dashboardEnabled = value;
  }
  public resetDashboardEnabled() {
    this._dashboardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardEnabledInput() {
    return this._dashboardEnabled;
  }

  // disable_multisite_sync_traffic - computed: false, optional: true, required: false
  private _disableMultisiteSyncTraffic?: boolean | cdktf.IResolvable; 
  public get disableMultisiteSyncTraffic() {
    return this.getBooleanAttribute('disable_multisite_sync_traffic');
  }
  public set disableMultisiteSyncTraffic(value: boolean | cdktf.IResolvable) {
    this._disableMultisiteSyncTraffic = value;
  }
  public resetDisableMultisiteSyncTraffic() {
    this._disableMultisiteSyncTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMultisiteSyncTrafficInput() {
    return this._disableMultisiteSyncTraffic;
  }

  // external_rgw_endpoints - computed: false, optional: true, required: false
  private _externalRgwEndpoints = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpointsList(this, "external_rgw_endpoints", false);
  public get externalRgwEndpoints() {
    return this._externalRgwEndpoints;
  }
  public putExternalRgwEndpoints(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayExternalRgwEndpoints[] | cdktf.IResolvable) {
    this._externalRgwEndpoints.internalValue = value;
  }
  public resetExternalRgwEndpoints() {
    this._externalRgwEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRgwEndpointsInput() {
    return this._externalRgwEndpoints.internalValue;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
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

  // placement - computed: false, optional: true, required: false
  private _placement = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
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

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // secure_port - computed: false, optional: true, required: false
  private _securePort?: number; 
  public get securePort() {
    return this.getNumberAttribute('secure_port');
  }
  public set securePort(value: number) {
    this._securePort = value;
  }
  public resetSecurePort() {
    this._securePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securePortInput() {
    return this._securePort;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // ssl_certificate_ref - computed: false, optional: true, required: false
  private _sslCertificateRef?: string; 
  public get sslCertificateRef() {
    return this.getStringAttribute('ssl_certificate_ref');
  }
  public set sslCertificateRef(value: string) {
    this._sslCertificateRef = value;
  }
  public resetSslCertificateRef() {
    this._sslCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateRefInput() {
    return this._sslCertificateRef;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#command DataK8SCephRookIoCephObjectStoreV1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExecToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExecToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#port DataK8SCephRookIoCephObjectStoreV1Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#service DataK8SCephRookIoCephObjectStoreV1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpcToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpcToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._port = value.port;
      this._service = value.service;
    }
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#value DataK8SCephRookIoCephObjectStoreV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#host DataK8SCephRookIoCephObjectStoreV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#http_headers DataK8SCephRookIoCephObjectStoreV1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#port DataK8SCephRookIoCephObjectStoreV1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#scheme DataK8SCephRookIoCephObjectStoreV1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGet | cdktf.IResolvable): any {
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
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#host DataK8SCephRookIoCephObjectStoreV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#port DataK8SCephRookIoCephObjectStoreV1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocketToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocketToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocket | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#exec DataK8SCephRookIoCephObjectStoreV1Manifest#exec}
  */
  readonly exec?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#failure_threshold DataK8SCephRookIoCephObjectStoreV1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#grpc DataK8SCephRookIoCephObjectStoreV1Manifest#grpc}
  */
  readonly grpc?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#http_get DataK8SCephRookIoCephObjectStoreV1Manifest#http_get}
  */
  readonly httpGet?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#initial_delay_seconds DataK8SCephRookIoCephObjectStoreV1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#period_seconds DataK8SCephRookIoCephObjectStoreV1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#success_threshold DataK8SCephRookIoCephObjectStoreV1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#tcp_socket DataK8SCephRookIoCephObjectStoreV1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#termination_grace_period_seconds DataK8SCephRookIoCephObjectStoreV1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#timeout_seconds DataK8SCephRookIoCephObjectStoreV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpc",
    },
    http_get: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbe {
  /**
  * Disabled determines whether probe is disable or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#disabled DataK8SCephRookIoCephObjectStoreV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#probe DataK8SCephRookIoCephObjectStoreV1Manifest#probe}
  */
  readonly probe?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbe;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    probe: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeToTerraform(struct!.probe),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    probe: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeToHclTerraform(struct!.probe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._probe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probe = this._probe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._probe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._probe.internalValue = value.probe;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // probe - computed: false, optional: true, required: false
  private _probe = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbeOutputReference(this, "probe");
  public get probe() {
    return this._probe;
  }
  public putProbe(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeProbe) {
    this._probe.internalValue = value;
  }
  public resetProbe() {
    this._probe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#command DataK8SCephRookIoCephObjectStoreV1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExecToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExecToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#port DataK8SCephRookIoCephObjectStoreV1Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#service DataK8SCephRookIoCephObjectStoreV1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpcToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpcToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._port = value.port;
      this._service = value.service;
    }
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#value DataK8SCephRookIoCephObjectStoreV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#host DataK8SCephRookIoCephObjectStoreV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#http_headers DataK8SCephRookIoCephObjectStoreV1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#port DataK8SCephRookIoCephObjectStoreV1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#scheme DataK8SCephRookIoCephObjectStoreV1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGet | cdktf.IResolvable): any {
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
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#host DataK8SCephRookIoCephObjectStoreV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#port DataK8SCephRookIoCephObjectStoreV1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocketToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocketToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocket | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#exec DataK8SCephRookIoCephObjectStoreV1Manifest#exec}
  */
  readonly exec?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#failure_threshold DataK8SCephRookIoCephObjectStoreV1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#grpc DataK8SCephRookIoCephObjectStoreV1Manifest#grpc}
  */
  readonly grpc?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#http_get DataK8SCephRookIoCephObjectStoreV1Manifest#http_get}
  */
  readonly httpGet?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#initial_delay_seconds DataK8SCephRookIoCephObjectStoreV1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#period_seconds DataK8SCephRookIoCephObjectStoreV1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#success_threshold DataK8SCephRookIoCephObjectStoreV1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#tcp_socket DataK8SCephRookIoCephObjectStoreV1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#termination_grace_period_seconds DataK8SCephRookIoCephObjectStoreV1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#timeout_seconds DataK8SCephRookIoCephObjectStoreV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpc",
    },
    http_get: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbe {
  /**
  * Disabled determines whether probe is disable or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#disabled DataK8SCephRookIoCephObjectStoreV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#probe DataK8SCephRookIoCephObjectStoreV1Manifest#probe}
  */
  readonly probe?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbe;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    probe: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeToTerraform(struct!.probe),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    probe: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeToHclTerraform(struct!.probe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._probe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probe = this._probe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._probe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._probe.internalValue = value.probe;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // probe - computed: false, optional: true, required: false
  private _probe = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbeOutputReference(this, "probe");
  public get probe() {
    return this._probe;
  }
  public putProbe(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeProbe) {
    this._probe.internalValue = value;
  }
  public resetProbe() {
    this._probe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheck {
  /**
  * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#readiness_probe DataK8SCephRookIoCephObjectStoreV1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbe;
  /**
  * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#startup_probe DataK8SCephRookIoCephObjectStoreV1Manifest#startup_probe}
  */
  readonly startupProbe?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbe;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    readiness_probe: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeToTerraform(struct!.readinessProbe),
    startup_probe: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeToTerraform(struct!.startupProbe),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    readiness_probe: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbe",
    },
    startup_probe: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._startupProbe.internalValue = value.startupProbe;
    }
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpoint {
  /**
  * DnsName is the DNS name (in RFC-1123 format) of the endpoint. If the DNS name corresponds to an endpoint with DNS wildcard support, do not include the wildcard itself in the list of hostnames. E.g., use 'mystore.example.com' instead of '*.mystore.example.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#dns_name DataK8SCephRookIoCephObjectStoreV1Manifest#dns_name}
  */
  readonly dnsName: string;
  /**
  * Port is the port on which S3 connections can be made for this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#port DataK8SCephRookIoCephObjectStoreV1Manifest#port}
  */
  readonly port: number;
  /**
  * UseTls defines whether the endpoint uses TLS (HTTPS) or not (HTTP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#use_tls DataK8SCephRookIoCephObjectStoreV1Manifest#use_tls}
  */
  readonly useTls: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpointToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    port: cdktf.numberToTerraform(struct!.port),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpointToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._useTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsName = undefined;
      this._port = undefined;
      this._useTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsName = value.dnsName;
      this._port = value.port;
      this._useTls = value.useTls;
    }
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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

  // use_tls - computed: false, optional: false, required: true
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecHosting {
  /**
  * AdvertiseEndpoint is the default endpoint Rook will return for resources dependent on this object store. This endpoint will be returned to CephObjectStoreUsers, Object Bucket Claims, and COSI Buckets/Accesses. By default, Rook returns the endpoint for the object store's Kubernetes service using HTTPS with 'gateway.securePort' if it is defined (otherwise, HTTP with 'gateway.port').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#advertise_endpoint DataK8SCephRookIoCephObjectStoreV1Manifest#advertise_endpoint}
  */
  readonly advertiseEndpoint?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpoint;
  /**
  * A list of DNS host names on which object store gateways will accept client S3 connections. When specified, object store gateways will reject client S3 connections to hostnames that are not present in this list, so include all endpoints. The object store's advertiseEndpoint and Kubernetes service endpoint, plus CephObjectZone 'customEndpoints' are automatically added to the list but may be set here again if desired. Each DNS name must be valid according RFC-1123. If the DNS name corresponds to an endpoint with DNS wildcard support, do not include the wildcard itself in the list of hostnames. E.g., use 'mystore.example.com' instead of '*.mystore.example.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#dns_names DataK8SCephRookIoCephObjectStoreV1Manifest#dns_names}
  */
  readonly dnsNames?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHosting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_endpoint: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpointToTerraform(struct!.advertiseEndpoint),
    dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsNames),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHosting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_endpoint: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpointToHclTerraform(struct!.advertiseEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpoint",
    },
    dns_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecHosting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseEndpoint = this._advertiseEndpoint?.internalValue;
    }
    if (this._dnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNames = this._dnsNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHosting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseEndpoint.internalValue = undefined;
      this._dnsNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseEndpoint.internalValue = value.advertiseEndpoint;
      this._dnsNames = value.dnsNames;
    }
  }

  // advertise_endpoint - computed: false, optional: true, required: false
  private _advertiseEndpoint = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpointOutputReference(this, "advertise_endpoint");
  public get advertiseEndpoint() {
    return this._advertiseEndpoint;
  }
  public putAdvertiseEndpoint(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingAdvertiseEndpoint) {
    this._advertiseEndpoint.internalValue = value;
  }
  public resetAdvertiseEndpoint() {
    this._advertiseEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseEndpointInput() {
    return this._advertiseEndpoint.internalValue;
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCoded {
  /**
  * The algorithm for erasure coding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#algorithm DataK8SCephRookIoCephObjectStoreV1Manifest#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type). This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#coding_chunks DataK8SCephRookIoCephObjectStoreV1Manifest#coding_chunks}
  */
  readonly codingChunks: number;
  /**
  * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type). The number of chunks required to recover an object when any single OSD is lost is the same as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#data_chunks DataK8SCephRookIoCephObjectStoreV1Manifest#data_chunks}
  */
  readonly dataChunks: number;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCodedToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    coding_chunks: cdktf.numberToTerraform(struct!.codingChunks),
    data_chunks: cdktf.numberToTerraform(struct!.dataChunks),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCodedToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coding_chunks: {
      value: cdktf.numberToHclTerraform(struct!.codingChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_chunks: {
      value: cdktf.numberToHclTerraform(struct!.dataChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCodedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._codingChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.codingChunks = this._codingChunks;
    }
    if (this._dataChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataChunks = this._dataChunks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._codingChunks = undefined;
      this._dataChunks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._codingChunks = value.codingChunks;
      this._dataChunks = value.dataChunks;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // coding_chunks - computed: false, optional: false, required: true
  private _codingChunks?: number; 
  public get codingChunks() {
    return this.getNumberAttribute('coding_chunks');
  }
  public set codingChunks(value: number) {
    this._codingChunks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codingChunksInput() {
    return this._codingChunks;
  }

  // data_chunks - computed: false, optional: false, required: true
  private _dataChunks?: number; 
  public get dataChunks() {
    return this.getNumberAttribute('data_chunks');
  }
  public set dataChunks(value: number) {
    this._dataChunks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataChunksInput() {
    return this._dataChunks;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeers {
  /**
  * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#secret_names DataK8SCephRookIoCephObjectStoreV1Manifest#secret_names}
  */
  readonly secretNames?: string[];
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeersToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretNames),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeersToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNames = this._secretNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretNames = value.secretNames;
    }
  }

  // secret_names - computed: false, optional: true, required: false
  private _secretNames?: string[]; 
  public get secretNames() {
    return this.getListAttribute('secret_names');
  }
  public set secretNames(value: string[]) {
    this._secretNames = value;
  }
  public resetSecretNames() {
    this._secretNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamesInput() {
    return this._secretNames;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedules {
  /**
  * Interval represent the periodicity of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#interval DataK8SCephRookIoCephObjectStoreV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Path is the path to snapshot, only valid for CephFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#path DataK8SCephRookIoCephObjectStoreV1Manifest#path}
  */
  readonly path?: string;
  /**
  * StartTime indicates when to start the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#start_time DataK8SCephRookIoCephObjectStoreV1Manifest#start_time}
  */
  readonly startTime?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._path = value.path;
      this._startTime = value.startTime;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroring {
  /**
  * Enabled whether this pool is mirrored or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#enabled DataK8SCephRookIoCephObjectStoreV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mode is the mirroring mode: either pool or image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mode DataK8SCephRookIoCephObjectStoreV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Peers represents the peers spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#peers DataK8SCephRookIoCephObjectStoreV1Manifest#peers}
  */
  readonly peers?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeers;
  /**
  * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#snapshot_schedules DataK8SCephRookIoCephObjectStoreV1Manifest#snapshot_schedules}
  */
  readonly snapshotSchedules?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
    peers: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeersToTerraform(struct!.peers),
    snapshot_schedules: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToTerraform, false)(struct!.snapshotSchedules),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peers: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeersToHclTerraform(struct!.peers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeers",
    },
    snapshot_schedules: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToHclTerraform, false)(struct!.snapshotSchedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._snapshotSchedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotSchedules = this._snapshotSchedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._mode = undefined;
      this._peers.internalValue = undefined;
      this._snapshotSchedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._mode = value.mode;
      this._peers.internalValue = value.peers;
      this._snapshotSchedules.internalValue = value.snapshotSchedules;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // peers - computed: false, optional: true, required: false
  private _peers = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeersOutputReference(this, "peers");
  public get peers() {
    return this._peers;
  }
  public putPeers(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringPeers) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // snapshot_schedules - computed: false, optional: true, required: false
  private _snapshotSchedules = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesList(this, "snapshot_schedules", false);
  public get snapshotSchedules() {
    return this._snapshotSchedules;
  }
  public putSnapshotSchedules(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable) {
    this._snapshotSchedules.internalValue = value;
  }
  public resetSnapshotSchedules() {
    this._snapshotSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotSchedulesInput() {
    return this._snapshotSchedules.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotas {
  /**
  * MaxBytes represents the quota in bytes Deprecated in favor of MaxSize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#max_bytes DataK8SCephRookIoCephObjectStoreV1Manifest#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * MaxObjects represents the quota in objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#max_objects DataK8SCephRookIoCephObjectStoreV1Manifest#max_objects}
  */
  readonly maxObjects?: number;
  /**
  * MaxSize represents the quota in bytes as a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#max_size DataK8SCephRookIoCephObjectStoreV1Manifest#max_size}
  */
  readonly maxSize?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotasToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_objects: cdktf.numberToTerraform(struct!.maxObjects),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotasToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_objects: {
      value: cdktf.numberToHclTerraform(struct!.maxObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjects = this._maxObjects;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBytes = undefined;
      this._maxObjects = undefined;
      this._maxSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBytes = value.maxBytes;
      this._maxObjects = value.maxObjects;
      this._maxSize = value.maxSize;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_objects - computed: false, optional: true, required: false
  private _maxObjects?: number; 
  public get maxObjects() {
    return this.getNumberAttribute('max_objects');
  }
  public set maxObjects(value: number) {
    this._maxObjects = value;
  }
  public resetMaxObjects() {
    this._maxObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectsInput() {
    return this._maxObjects;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorage {
  /**
  * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#primary_device_class DataK8SCephRookIoCephObjectStoreV1Manifest#primary_device_class}
  */
  readonly primaryDeviceClass: string;
  /**
  * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#secondary_device_class DataK8SCephRookIoCephObjectStoreV1Manifest#secondary_device_class}
  */
  readonly secondaryDeviceClass: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorageToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_device_class: cdktf.stringToTerraform(struct!.primaryDeviceClass),
    secondary_device_class: cdktf.stringToTerraform(struct!.secondaryDeviceClass),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorageToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_device_class: {
      value: cdktf.stringToHclTerraform(struct!.primaryDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_device_class: {
      value: cdktf.stringToHclTerraform(struct!.secondaryDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryDeviceClass = this._primaryDeviceClass;
    }
    if (this._secondaryDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDeviceClass = this._secondaryDeviceClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryDeviceClass = undefined;
      this._secondaryDeviceClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryDeviceClass = value.primaryDeviceClass;
      this._secondaryDeviceClass = value.secondaryDeviceClass;
    }
  }

  // primary_device_class - computed: false, optional: false, required: true
  private _primaryDeviceClass?: string; 
  public get primaryDeviceClass() {
    return this.getStringAttribute('primary_device_class');
  }
  public set primaryDeviceClass(value: string) {
    this._primaryDeviceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDeviceClassInput() {
    return this._primaryDeviceClass;
  }

  // secondary_device_class - computed: false, optional: false, required: true
  private _secondaryDeviceClass?: string; 
  public get secondaryDeviceClass() {
    return this.getStringAttribute('secondary_device_class');
  }
  public set secondaryDeviceClass(value: string) {
    this._secondaryDeviceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDeviceClassInput() {
    return this._secondaryDeviceClass;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicated {
  /**
  * HybridStorage represents hybrid storage tier settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#hybrid_storage DataK8SCephRookIoCephObjectStoreV1Manifest#hybrid_storage}
  */
  readonly hybridStorage?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorage;
  /**
  * ReplicasPerFailureDomain the number of replica in the specified failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#replicas_per_failure_domain DataK8SCephRookIoCephObjectStoreV1Manifest#replicas_per_failure_domain}
  */
  readonly replicasPerFailureDomain?: number;
  /**
  * RequireSafeReplicaSize if false allows you to set replica 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#require_safe_replica_size DataK8SCephRookIoCephObjectStoreV1Manifest#require_safe_replica_size}
  */
  readonly requireSafeReplicaSize?: boolean | cdktf.IResolvable;
  /**
  * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#size DataK8SCephRookIoCephObjectStoreV1Manifest#size}
  */
  readonly size: number;
  /**
  * SubFailureDomain the name of the sub-failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#sub_failure_domain DataK8SCephRookIoCephObjectStoreV1Manifest#sub_failure_domain}
  */
  readonly subFailureDomain?: string;
  /**
  * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#target_size_ratio DataK8SCephRookIoCephObjectStoreV1Manifest#target_size_ratio}
  */
  readonly targetSizeRatio?: number;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hybrid_storage: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorageToTerraform(struct!.hybridStorage),
    replicas_per_failure_domain: cdktf.numberToTerraform(struct!.replicasPerFailureDomain),
    require_safe_replica_size: cdktf.booleanToTerraform(struct!.requireSafeReplicaSize),
    size: cdktf.numberToTerraform(struct!.size),
    sub_failure_domain: cdktf.stringToTerraform(struct!.subFailureDomain),
    target_size_ratio: cdktf.numberToTerraform(struct!.targetSizeRatio),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hybrid_storage: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorageToHclTerraform(struct!.hybridStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorage",
    },
    replicas_per_failure_domain: {
      value: cdktf.numberToHclTerraform(struct!.replicasPerFailureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_safe_replica_size: {
      value: cdktf.booleanToHclTerraform(struct!.requireSafeReplicaSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.subFailureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_size_ratio: {
      value: cdktf.numberToHclTerraform(struct!.targetSizeRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hybridStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridStorage = this._hybridStorage?.internalValue;
    }
    if (this._replicasPerFailureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicasPerFailureDomain = this._replicasPerFailureDomain;
    }
    if (this._requireSafeReplicaSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSafeReplicaSize = this._requireSafeReplicaSize;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._subFailureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subFailureDomain = this._subFailureDomain;
    }
    if (this._targetSizeRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSizeRatio = this._targetSizeRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hybridStorage.internalValue = undefined;
      this._replicasPerFailureDomain = undefined;
      this._requireSafeReplicaSize = undefined;
      this._size = undefined;
      this._subFailureDomain = undefined;
      this._targetSizeRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hybridStorage.internalValue = value.hybridStorage;
      this._replicasPerFailureDomain = value.replicasPerFailureDomain;
      this._requireSafeReplicaSize = value.requireSafeReplicaSize;
      this._size = value.size;
      this._subFailureDomain = value.subFailureDomain;
      this._targetSizeRatio = value.targetSizeRatio;
    }
  }

  // hybrid_storage - computed: false, optional: true, required: false
  private _hybridStorage = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorageOutputReference(this, "hybrid_storage");
  public get hybridStorage() {
    return this._hybridStorage;
  }
  public putHybridStorage(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedHybridStorage) {
    this._hybridStorage.internalValue = value;
  }
  public resetHybridStorage() {
    this._hybridStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridStorageInput() {
    return this._hybridStorage.internalValue;
  }

  // replicas_per_failure_domain - computed: false, optional: true, required: false
  private _replicasPerFailureDomain?: number; 
  public get replicasPerFailureDomain() {
    return this.getNumberAttribute('replicas_per_failure_domain');
  }
  public set replicasPerFailureDomain(value: number) {
    this._replicasPerFailureDomain = value;
  }
  public resetReplicasPerFailureDomain() {
    this._replicasPerFailureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasPerFailureDomainInput() {
    return this._replicasPerFailureDomain;
  }

  // require_safe_replica_size - computed: false, optional: true, required: false
  private _requireSafeReplicaSize?: boolean | cdktf.IResolvable; 
  public get requireSafeReplicaSize() {
    return this.getBooleanAttribute('require_safe_replica_size');
  }
  public set requireSafeReplicaSize(value: boolean | cdktf.IResolvable) {
    this._requireSafeReplicaSize = value;
  }
  public resetRequireSafeReplicaSize() {
    this._requireSafeReplicaSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSafeReplicaSizeInput() {
    return this._requireSafeReplicaSize;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sub_failure_domain - computed: false, optional: true, required: false
  private _subFailureDomain?: string; 
  public get subFailureDomain() {
    return this.getStringAttribute('sub_failure_domain');
  }
  public set subFailureDomain(value: string) {
    this._subFailureDomain = value;
  }
  public resetSubFailureDomain() {
    this._subFailureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subFailureDomainInput() {
    return this._subFailureDomain;
  }

  // target_size_ratio - computed: false, optional: true, required: false
  private _targetSizeRatio?: number; 
  public get targetSizeRatio() {
    return this.getNumberAttribute('target_size_ratio');
  }
  public set targetSizeRatio(value: number) {
    this._targetSizeRatio = value;
  }
  public resetTargetSizeRatio() {
    this._targetSizeRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSizeRatioInput() {
    return this._targetSizeRatio;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#disabled DataK8SCephRookIoCephObjectStoreV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#interval DataK8SCephRookIoCephObjectStoreV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#timeout DataK8SCephRookIoCephObjectStoreV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirrorToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    interval: cdktf.stringToTerraform(struct!.interval),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirrorToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._interval = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._interval = value.interval;
      this._timeout = value.timeout;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheck {
  /**
  * HealthCheckSpec represents the health check of an object store bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mirror DataK8SCephRookIoCephObjectStoreV1Manifest#mirror}
  */
  readonly mirror?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirror;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirrorToTerraform(struct!.mirror),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirrorToHclTerraform(struct!.mirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirror",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirror.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirror.internalValue = value.mirror;
    }
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirrorOutputReference(this, "mirror");
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckMirror) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPool {
  /**
  * The application name to set on the pool. Only expected to be set for rgw pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#application DataK8SCephRookIoCephObjectStoreV1Manifest#application}
  */
  readonly application?: string;
  /**
  * DEPRECATED: use Parameters instead, e.g., Parameters['compression_mode'] = 'force' The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force) Do NOT set a default value for kubebuilder as this will override the Parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#compression_mode DataK8SCephRookIoCephObjectStoreV1Manifest#compression_mode}
  */
  readonly compressionMode?: string;
  /**
  * The root of the crush hierarchy utilized by the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#crush_root DataK8SCephRookIoCephObjectStoreV1Manifest#crush_root}
  */
  readonly crushRoot?: string;
  /**
  * The device class the OSD should set to for use in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#device_class DataK8SCephRookIoCephObjectStoreV1Manifest#device_class}
  */
  readonly deviceClass?: string;
  /**
  * Allow rook operator to change the pool CRUSH tunables once the pool is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#enable_crush_updates DataK8SCephRookIoCephObjectStoreV1Manifest#enable_crush_updates}
  */
  readonly enableCrushUpdates?: boolean | cdktf.IResolvable;
  /**
  * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#enable_rbd_stats DataK8SCephRookIoCephObjectStoreV1Manifest#enable_rbd_stats}
  */
  readonly enableRbdStats?: boolean | cdktf.IResolvable;
  /**
  * The erasure code settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#erasure_coded DataK8SCephRookIoCephObjectStoreV1Manifest#erasure_coded}
  */
  readonly erasureCoded?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCoded;
  /**
  * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#failure_domain DataK8SCephRookIoCephObjectStoreV1Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * The mirroring settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#mirroring DataK8SCephRookIoCephObjectStoreV1Manifest#mirroring}
  */
  readonly mirroring?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroring;
  /**
  * Parameters is a list of properties to enable on a given pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#parameters DataK8SCephRookIoCephObjectStoreV1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The quota settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#quotas DataK8SCephRookIoCephObjectStoreV1Manifest#quotas}
  */
  readonly quotas?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotas;
  /**
  * The replication settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#replicated DataK8SCephRookIoCephObjectStoreV1Manifest#replicated}
  */
  readonly replicated?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicated;
  /**
  * The mirroring statusCheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#status_check DataK8SCephRookIoCephObjectStoreV1Manifest#status_check}
  */
  readonly statusCheck?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheck;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.stringToTerraform(struct!.application),
    compression_mode: cdktf.stringToTerraform(struct!.compressionMode),
    crush_root: cdktf.stringToTerraform(struct!.crushRoot),
    device_class: cdktf.stringToTerraform(struct!.deviceClass),
    enable_crush_updates: cdktf.booleanToTerraform(struct!.enableCrushUpdates),
    enable_rbd_stats: cdktf.booleanToTerraform(struct!.enableRbdStats),
    erasure_coded: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCodedToTerraform(struct!.erasureCoded),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    mirroring: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringToTerraform(struct!.mirroring),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    quotas: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotasToTerraform(struct!.quotas),
    replicated: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedToTerraform(struct!.replicated),
    status_check: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckToTerraform(struct!.statusCheck),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_mode: {
      value: cdktf.stringToHclTerraform(struct!.compressionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crush_root: {
      value: cdktf.stringToHclTerraform(struct!.crushRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_class: {
      value: cdktf.stringToHclTerraform(struct!.deviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_crush_updates: {
      value: cdktf.booleanToHclTerraform(struct!.enableCrushUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rbd_stats: {
      value: cdktf.booleanToHclTerraform(struct!.enableRbdStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    erasure_coded: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCodedToHclTerraform(struct!.erasureCoded),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCoded",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirroring: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringToHclTerraform(struct!.mirroring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroring",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    quotas: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotasToHclTerraform(struct!.quotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotas",
    },
    replicated: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedToHclTerraform(struct!.replicated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicated",
    },
    status_check: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckToHclTerraform(struct!.statusCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._compressionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMode = this._compressionMode;
    }
    if (this._crushRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.crushRoot = this._crushRoot;
    }
    if (this._deviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceClass = this._deviceClass;
    }
    if (this._enableCrushUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCrushUpdates = this._enableCrushUpdates;
    }
    if (this._enableRbdStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRbdStats = this._enableRbdStats;
    }
    if (this._erasureCoded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.erasureCoded = this._erasureCoded?.internalValue;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._mirroring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroring = this._mirroring?.internalValue;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._quotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotas = this._quotas?.internalValue;
    }
    if (this._replicated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicated = this._replicated?.internalValue;
    }
    if (this._statusCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCheck = this._statusCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._compressionMode = undefined;
      this._crushRoot = undefined;
      this._deviceClass = undefined;
      this._enableCrushUpdates = undefined;
      this._enableRbdStats = undefined;
      this._erasureCoded.internalValue = undefined;
      this._failureDomain = undefined;
      this._mirroring.internalValue = undefined;
      this._parameters = undefined;
      this._quotas.internalValue = undefined;
      this._replicated.internalValue = undefined;
      this._statusCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._compressionMode = value.compressionMode;
      this._crushRoot = value.crushRoot;
      this._deviceClass = value.deviceClass;
      this._enableCrushUpdates = value.enableCrushUpdates;
      this._enableRbdStats = value.enableRbdStats;
      this._erasureCoded.internalValue = value.erasureCoded;
      this._failureDomain = value.failureDomain;
      this._mirroring.internalValue = value.mirroring;
      this._parameters = value.parameters;
      this._quotas.internalValue = value.quotas;
      this._replicated.internalValue = value.replicated;
      this._statusCheck.internalValue = value.statusCheck;
    }
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // compression_mode - computed: false, optional: true, required: false
  private _compressionMode?: string; 
  public get compressionMode() {
    return this.getStringAttribute('compression_mode');
  }
  public set compressionMode(value: string) {
    this._compressionMode = value;
  }
  public resetCompressionMode() {
    this._compressionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionModeInput() {
    return this._compressionMode;
  }

  // crush_root - computed: false, optional: true, required: false
  private _crushRoot?: string; 
  public get crushRoot() {
    return this.getStringAttribute('crush_root');
  }
  public set crushRoot(value: string) {
    this._crushRoot = value;
  }
  public resetCrushRoot() {
    this._crushRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crushRootInput() {
    return this._crushRoot;
  }

  // device_class - computed: false, optional: true, required: false
  private _deviceClass?: string; 
  public get deviceClass() {
    return this.getStringAttribute('device_class');
  }
  public set deviceClass(value: string) {
    this._deviceClass = value;
  }
  public resetDeviceClass() {
    this._deviceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceClassInput() {
    return this._deviceClass;
  }

  // enable_crush_updates - computed: false, optional: true, required: false
  private _enableCrushUpdates?: boolean | cdktf.IResolvable; 
  public get enableCrushUpdates() {
    return this.getBooleanAttribute('enable_crush_updates');
  }
  public set enableCrushUpdates(value: boolean | cdktf.IResolvable) {
    this._enableCrushUpdates = value;
  }
  public resetEnableCrushUpdates() {
    this._enableCrushUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrushUpdatesInput() {
    return this._enableCrushUpdates;
  }

  // enable_rbd_stats - computed: false, optional: true, required: false
  private _enableRbdStats?: boolean | cdktf.IResolvable; 
  public get enableRbdStats() {
    return this.getBooleanAttribute('enable_rbd_stats');
  }
  public set enableRbdStats(value: boolean | cdktf.IResolvable) {
    this._enableRbdStats = value;
  }
  public resetEnableRbdStats() {
    this._enableRbdStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbdStatsInput() {
    return this._enableRbdStats;
  }

  // erasure_coded - computed: false, optional: true, required: false
  private _erasureCoded = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCodedOutputReference(this, "erasure_coded");
  public get erasureCoded() {
    return this._erasureCoded;
  }
  public putErasureCoded(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolErasureCoded) {
    this._erasureCoded.internalValue = value;
  }
  public resetErasureCoded() {
    this._erasureCoded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erasureCodedInput() {
    return this._erasureCoded.internalValue;
  }

  // failure_domain - computed: false, optional: true, required: false
  private _failureDomain?: string; 
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }
  public set failureDomain(value: string) {
    this._failureDomain = value;
  }
  public resetFailureDomain() {
    this._failureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainInput() {
    return this._failureDomain;
  }

  // mirroring - computed: false, optional: true, required: false
  private _mirroring = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroringOutputReference(this, "mirroring");
  public get mirroring() {
    return this._mirroring;
  }
  public putMirroring(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolMirroring) {
    this._mirroring.internalValue = value;
  }
  public resetMirroring() {
    this._mirroring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringInput() {
    return this._mirroring.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // quotas - computed: false, optional: true, required: false
  private _quotas = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotasOutputReference(this, "quotas");
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolQuotas) {
    this._quotas.internalValue = value;
  }
  public resetQuotas() {
    this._quotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotasInput() {
    return this._quotas.internalValue;
  }

  // replicated - computed: false, optional: true, required: false
  private _replicated = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicatedOutputReference(this, "replicated");
  public get replicated() {
    return this._replicated;
  }
  public putReplicated(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolReplicated) {
    this._replicated.internalValue = value;
  }
  public resetReplicated() {
    this._replicated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedInput() {
    return this._replicated.internalValue;
  }

  // status_check - computed: false, optional: true, required: false
  private _statusCheck = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheckOutputReference(this, "status_check");
  public get statusCheck() {
    return this._statusCheck;
  }
  public putStatusCheck(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolStatusCheck) {
    this._statusCheck.internalValue = value;
  }
  public resetStatusCheck() {
    this._statusCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckInput() {
    return this._statusCheck.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3 {
  /**
  * Whether to use Keystone for authentication. This option maps directly to the rgw_s3_auth_use_keystone option. Enabling it allows generating S3 credentials via an OpenStack API call, see the docs. If not given, the defaults of the corresponding RGW option apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#auth_use_keystone DataK8SCephRookIoCephObjectStoreV1Manifest#auth_use_keystone}
  */
  readonly authUseKeystone?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable S3. This defaults to true (even if protocols.s3 is not present in the CRD). This maintains backwards compatibility – by default S3 is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#enabled DataK8SCephRookIoCephObjectStoreV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3ToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_use_keystone: cdktf.booleanToTerraform(struct!.authUseKeystone),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3ToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_use_keystone: {
      value: cdktf.booleanToHclTerraform(struct!.authUseKeystone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUseKeystone !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUseKeystone = this._authUseKeystone;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authUseKeystone = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authUseKeystone = value.authUseKeystone;
      this._enabled = value.enabled;
    }
  }

  // auth_use_keystone - computed: false, optional: true, required: false
  private _authUseKeystone?: boolean | cdktf.IResolvable; 
  public get authUseKeystone() {
    return this.getBooleanAttribute('auth_use_keystone');
  }
  public set authUseKeystone(value: boolean | cdktf.IResolvable) {
    this._authUseKeystone = value;
  }
  public resetAuthUseKeystone() {
    this._authUseKeystone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUseKeystoneInput() {
    return this._authUseKeystone;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwift {
  /**
  * Whether or not the Swift account name should be included in the Swift API URL. If set to false (the default), then the Swift API will listen on a URL formed like http://host:port/<rgw_swift_url_prefix>/v1. If set to true, the Swift API URL will be http://host:port/<rgw_swift_url_prefix>/v1/AUTH_<account_name>. You must set this option to true (and update the Keystone service catalog) if you want radosgw to support publicly-readable containers and temporary URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#account_in_url DataK8SCephRookIoCephObjectStoreV1Manifest#account_in_url}
  */
  readonly accountInUrl?: boolean | cdktf.IResolvable;
  /**
  * The URL prefix for the Swift API, to distinguish it from the S3 API endpoint. The default is swift, which makes the Swift API available at the URL http://host:port/swift/v1 (or http://host:port/swift/v1/AUTH_%(tenant_id)s if rgw swift account in url is enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#url_prefix DataK8SCephRookIoCephObjectStoreV1Manifest#url_prefix}
  */
  readonly urlPrefix?: string;
  /**
  * Enables the Object Versioning of OpenStack Object Storage API. This allows clients to put the X-Versions-Location attribute on containers that should be versioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#versioning_enabled DataK8SCephRookIoCephObjectStoreV1Manifest#versioning_enabled}
  */
  readonly versioningEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwiftToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_in_url: cdktf.booleanToTerraform(struct!.accountInUrl),
    url_prefix: cdktf.stringToTerraform(struct!.urlPrefix),
    versioning_enabled: cdktf.booleanToTerraform(struct!.versioningEnabled),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwiftToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_in_url: {
      value: cdktf.booleanToHclTerraform(struct!.accountInUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url_prefix: {
      value: cdktf.stringToHclTerraform(struct!.urlPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versioning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.versioningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountInUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountInUrl = this._accountInUrl;
    }
    if (this._urlPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPrefix = this._urlPrefix;
    }
    if (this._versioningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.versioningEnabled = this._versioningEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountInUrl = undefined;
      this._urlPrefix = undefined;
      this._versioningEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountInUrl = value.accountInUrl;
      this._urlPrefix = value.urlPrefix;
      this._versioningEnabled = value.versioningEnabled;
    }
  }

  // account_in_url - computed: false, optional: true, required: false
  private _accountInUrl?: boolean | cdktf.IResolvable; 
  public get accountInUrl() {
    return this.getBooleanAttribute('account_in_url');
  }
  public set accountInUrl(value: boolean | cdktf.IResolvable) {
    this._accountInUrl = value;
  }
  public resetAccountInUrl() {
    this._accountInUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInUrlInput() {
    return this._accountInUrl;
  }

  // url_prefix - computed: false, optional: true, required: false
  private _urlPrefix?: string; 
  public get urlPrefix() {
    return this.getStringAttribute('url_prefix');
  }
  public set urlPrefix(value: string) {
    this._urlPrefix = value;
  }
  public resetUrlPrefix() {
    this._urlPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPrefixInput() {
    return this._urlPrefix;
  }

  // versioning_enabled - computed: false, optional: true, required: false
  private _versioningEnabled?: boolean | cdktf.IResolvable; 
  public get versioningEnabled() {
    return this.getBooleanAttribute('versioning_enabled');
  }
  public set versioningEnabled(value: boolean | cdktf.IResolvable) {
    this._versioningEnabled = value;
  }
  public resetVersioningEnabled() {
    this._versioningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningEnabledInput() {
    return this._versioningEnabled;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocols {
  /**
  * The spec for S3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#s3 DataK8SCephRookIoCephObjectStoreV1Manifest#s3}
  */
  readonly s3?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3;
  /**
  * The spec for Swift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#swift DataK8SCephRookIoCephObjectStoreV1Manifest#swift}
  */
  readonly swift?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwift;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3ToTerraform(struct!.s3),
    swift: dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwiftToTerraform(struct!.swift),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3",
    },
    swift: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwiftToHclTerraform(struct!.swift),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwift",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._swift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swift = this._swift?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
      this._swift.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
      this._swift.internalValue = value.swift;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // swift - computed: false, optional: true, required: false
  private _swift = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwiftOutputReference(this, "swift");
  public get swift() {
    return this._swift;
  }
  public putSwift(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsSwift) {
    this._swift.internalValue = value;
  }
  public resetSwift() {
    this._swift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swiftInput() {
    return this._swift.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotation {
  /**
  * Enabled represents whether the key rotation is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#enabled DataK8SCephRookIoCephObjectStoreV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Schedule represents the cron schedule for key rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#schedule DataK8SCephRookIoCephObjectStoreV1Manifest#schedule}
  */
  readonly schedule?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotationToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotationToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._schedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._schedule = value.schedule;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKms {
  /**
  * ConnectionDetails contains the KMS connection details (address, port etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#connection_details DataK8SCephRookIoCephObjectStoreV1Manifest#connection_details}
  */
  readonly connectionDetails?: { [key: string]: string };
  /**
  * TokenSecretName is the kubernetes secret containing the KMS token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#token_secret_name DataK8SCephRookIoCephObjectStoreV1Manifest#token_secret_name}
  */
  readonly tokenSecretName?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKmsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_details: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.connectionDetails),
    token_secret_name: cdktf.stringToTerraform(struct!.tokenSecretName),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKmsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_details: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.connectionDetails),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    token_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDetails = this._connectionDetails;
    }
    if (this._tokenSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretName = this._tokenSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionDetails = undefined;
      this._tokenSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionDetails = value.connectionDetails;
      this._tokenSecretName = value.tokenSecretName;
    }
  }

  // connection_details - computed: false, optional: true, required: false
  private _connectionDetails?: { [key: string]: string }; 
  public get connectionDetails() {
    return this.getStringMapAttribute('connection_details');
  }
  public set connectionDetails(value: { [key: string]: string }) {
    this._connectionDetails = value;
  }
  public resetConnectionDetails() {
    this._connectionDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDetailsInput() {
    return this._connectionDetails;
  }

  // token_secret_name - computed: false, optional: true, required: false
  private _tokenSecretName?: string; 
  public get tokenSecretName() {
    return this.getStringAttribute('token_secret_name');
  }
  public set tokenSecretName(value: string) {
    this._tokenSecretName = value;
  }
  public resetTokenSecretName() {
    this._tokenSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretNameInput() {
    return this._tokenSecretName;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3 {
  /**
  * ConnectionDetails contains the KMS connection details (address, port etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#connection_details DataK8SCephRookIoCephObjectStoreV1Manifest#connection_details}
  */
  readonly connectionDetails?: { [key: string]: string };
  /**
  * TokenSecretName is the kubernetes secret containing the KMS token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#token_secret_name DataK8SCephRookIoCephObjectStoreV1Manifest#token_secret_name}
  */
  readonly tokenSecretName?: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3ToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_details: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.connectionDetails),
    token_secret_name: cdktf.stringToTerraform(struct!.tokenSecretName),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3ToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_details: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.connectionDetails),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    token_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDetails = this._connectionDetails;
    }
    if (this._tokenSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretName = this._tokenSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionDetails = undefined;
      this._tokenSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionDetails = value.connectionDetails;
      this._tokenSecretName = value.tokenSecretName;
    }
  }

  // connection_details - computed: false, optional: true, required: false
  private _connectionDetails?: { [key: string]: string }; 
  public get connectionDetails() {
    return this.getStringMapAttribute('connection_details');
  }
  public set connectionDetails(value: { [key: string]: string }) {
    this._connectionDetails = value;
  }
  public resetConnectionDetails() {
    this._connectionDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDetailsInput() {
    return this._connectionDetails;
  }

  // token_secret_name - computed: false, optional: true, required: false
  private _tokenSecretName?: string; 
  public get tokenSecretName() {
    return this.getStringAttribute('token_secret_name');
  }
  public set tokenSecretName(value: string) {
    this._tokenSecretName = value;
  }
  public resetTokenSecretName() {
    this._tokenSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretNameInput() {
    return this._tokenSecretName;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurity {
  /**
  * KeyRotation defines options for Key Rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#key_rotation DataK8SCephRookIoCephObjectStoreV1Manifest#key_rotation}
  */
  readonly keyRotation?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotation;
  /**
  * KeyManagementService is the main Key Management option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#kms DataK8SCephRookIoCephObjectStoreV1Manifest#kms}
  */
  readonly kms?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKms;
  /**
  * The settings for supporting AWS-SSE:S3 with RGW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#s3 DataK8SCephRookIoCephObjectStoreV1Manifest#s3}
  */
  readonly s3?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_rotation: dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotationToTerraform(struct!.keyRotation),
    kms: dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKmsToTerraform(struct!.kms),
    s3: dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3ToTerraform(struct!.s3),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_rotation: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotationToHclTerraform(struct!.keyRotation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotation",
    },
    kms: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKmsToHclTerraform(struct!.kms),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKms",
    },
    s3: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyRotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRotation = this._keyRotation?.internalValue;
    }
    if (this._kms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kms = this._kms?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyRotation.internalValue = undefined;
      this._kms.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyRotation.internalValue = value.keyRotation;
      this._kms.internalValue = value.kms;
      this._s3.internalValue = value.s3;
    }
  }

  // key_rotation - computed: false, optional: true, required: false
  private _keyRotation = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotationOutputReference(this, "key_rotation");
  public get keyRotation() {
    return this._keyRotation;
  }
  public putKeyRotation(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKeyRotation) {
    this._keyRotation.internalValue = value;
  }
  public resetKeyRotation() {
    this._keyRotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRotationInput() {
    return this._keyRotation.internalValue;
  }

  // kms - computed: false, optional: true, required: false
  private _kms = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKmsOutputReference(this, "kms");
  public get kms() {
    return this._kms;
  }
  public putKms(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityKms) {
    this._kms.internalValue = value;
  }
  public resetKms() {
    this._kms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsInput() {
    return this._kms.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses {
  /**
  * DataPoolName is the data pool used to store ObjectStore objects data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#data_pool_name DataK8SCephRookIoCephObjectStoreV1Manifest#data_pool_name}
  */
  readonly dataPoolName: string;
  /**
  * Name is the StorageClass name. Ceph allows arbitrary name for StorageClasses, however most clients/libs insist on AWS names so it is recommended to use one of the valid x-amz-storage-class values for better compatibility: REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | OUTPOSTS | GLACIER_IR | SNOW | EXPRESS_ONEZONE See AWS docs: https://aws.amazon.com/de/s3/storage-classes/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_pool_name: cdktf.stringToTerraform(struct!.dataPoolName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataPoolName),
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPoolName = this._dataPoolName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPoolName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPoolName = value.dataPoolName;
      this._name = value.name;
    }
  }

  // data_pool_name - computed: false, optional: false, required: true
  private _dataPoolName?: string; 
  public get dataPoolName() {
    return this.getStringAttribute('data_pool_name');
  }
  public set dataPoolName(value: string) {
    this._dataPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPoolNameInput() {
    return this._dataPoolName;
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacements {
  /**
  * The data pool used to store ObjectStore data that cannot use erasure coding (ex: multi-part uploads). If dataPoolName is not erasure coded, then there is no need for dataNonECPoolName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#data_non_ec_pool_name DataK8SCephRookIoCephObjectStoreV1Manifest#data_non_ec_pool_name}
  */
  readonly dataNonEcPoolName?: string;
  /**
  * The data pool used to store ObjectStore objects data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#data_pool_name DataK8SCephRookIoCephObjectStoreV1Manifest#data_pool_name}
  */
  readonly dataPoolName: string;
  /**
  * The metadata pool used to store ObjectStore bucket index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#metadata_pool_name DataK8SCephRookIoCephObjectStoreV1Manifest#metadata_pool_name}
  */
  readonly metadataPoolName: string;
  /**
  * Pool placement name. Name can be arbitrary. Placement with name 'default' will be used as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * StorageClasses can be selected by user to override dataPoolName during object creation. Each placement has default STANDARD StorageClass pointing to dataPoolName. This list allows defining additional StorageClasses on top of default STANDARD storage class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#storage_classes DataK8SCephRookIoCephObjectStoreV1Manifest#storage_classes}
  */
  readonly storageClasses?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_non_ec_pool_name: cdktf.stringToTerraform(struct!.dataNonEcPoolName),
    data_pool_name: cdktf.stringToTerraform(struct!.dataPoolName),
    metadata_pool_name: cdktf.stringToTerraform(struct!.metadataPoolName),
    name: cdktf.stringToTerraform(struct!.name),
    storage_classes: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesToTerraform, false)(struct!.storageClasses),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_non_ec_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataNonEcPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.metadataPoolName),
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
    storage_classes: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesToHclTerraform, false)(struct!.storageClasses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataNonEcPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNonEcPoolName = this._dataNonEcPoolName;
    }
    if (this._dataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPoolName = this._dataPoolName;
    }
    if (this._metadataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPoolName = this._metadataPoolName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataNonEcPoolName = undefined;
      this._dataPoolName = undefined;
      this._metadataPoolName = undefined;
      this._name = undefined;
      this._storageClasses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataNonEcPoolName = value.dataNonEcPoolName;
      this._dataPoolName = value.dataPoolName;
      this._metadataPoolName = value.metadataPoolName;
      this._name = value.name;
      this._storageClasses.internalValue = value.storageClasses;
    }
  }

  // data_non_ec_pool_name - computed: false, optional: true, required: false
  private _dataNonEcPoolName?: string; 
  public get dataNonEcPoolName() {
    return this.getStringAttribute('data_non_ec_pool_name');
  }
  public set dataNonEcPoolName(value: string) {
    this._dataNonEcPoolName = value;
  }
  public resetDataNonEcPoolName() {
    this._dataNonEcPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNonEcPoolNameInput() {
    return this._dataNonEcPoolName;
  }

  // data_pool_name - computed: false, optional: false, required: true
  private _dataPoolName?: string; 
  public get dataPoolName() {
    return this.getStringAttribute('data_pool_name');
  }
  public set dataPoolName(value: string) {
    this._dataPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPoolNameInput() {
    return this._dataPoolName;
  }

  // metadata_pool_name - computed: false, optional: false, required: true
  private _metadataPoolName?: string; 
  public get metadataPoolName() {
    return this.getStringAttribute('metadata_pool_name');
  }
  public set metadataPoolName(value: string) {
    this._metadataPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPoolNameInput() {
    return this._metadataPoolName;
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

  // storage_classes - computed: false, optional: true, required: false
  private _storageClasses = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesList(this, "storage_classes", false);
  public get storageClasses() {
    return this._storageClasses;
  }
  public putStorageClasses(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses[] | cdktf.IResolvable) {
    this._storageClasses.internalValue = value;
  }
  public resetStorageClasses() {
    this._storageClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses.internalValue;
  }
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacements[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsOutputReference {
    return new DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPools {
  /**
  * The data pool used for creating RADOS namespaces in the object store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#data_pool_name DataK8SCephRookIoCephObjectStoreV1Manifest#data_pool_name}
  */
  readonly dataPoolName?: string;
  /**
  * The metadata pool used for creating RADOS namespaces in the object store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#metadata_pool_name DataK8SCephRookIoCephObjectStoreV1Manifest#metadata_pool_name}
  */
  readonly metadataPoolName?: string;
  /**
  * PoolPlacements control which Pools are associated with a particular RGW bucket. Once PoolPlacements are defined, RGW client will be able to associate pool with ObjectStore bucket by providing '<LocationConstraint>' during s3 bucket creation or 'X-Storage-Policy' header during swift container creation. See: https://docs.ceph.com/en/latest/radosgw/placement/#placement-targets PoolPlacement with name: 'default' will be used as a default pool if no option is provided during bucket creation. If default placement is not provided, spec.sharedPools.dataPoolName and spec.sharedPools.MetadataPoolName will be used as default pools. If spec.sharedPools are also empty, then RGW pools (spec.dataPool and spec.metadataPool) will be used as defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#pool_placements DataK8SCephRookIoCephObjectStoreV1Manifest#pool_placements}
  */
  readonly poolPlacements?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacements[] | cdktf.IResolvable;
  /**
  * Whether the RADOS namespaces should be preserved on deletion of the object store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#preserve_rados_namespace_data_on_delete DataK8SCephRookIoCephObjectStoreV1Manifest#preserve_rados_namespace_data_on_delete}
  */
  readonly preserveRadosNamespaceDataOnDelete?: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_pool_name: cdktf.stringToTerraform(struct!.dataPoolName),
    metadata_pool_name: cdktf.stringToTerraform(struct!.metadataPoolName),
    pool_placements: cdktf.listMapper(dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsToTerraform, false)(struct!.poolPlacements),
    preserve_rados_namespace_data_on_delete: cdktf.booleanToTerraform(struct!.preserveRadosNamespaceDataOnDelete),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.metadataPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_placements: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsToHclTerraform, false)(struct!.poolPlacements),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsList",
    },
    preserve_rados_namespace_data_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.preserveRadosNamespaceDataOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPoolName = this._dataPoolName;
    }
    if (this._metadataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPoolName = this._metadataPoolName;
    }
    if (this._poolPlacements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolPlacements = this._poolPlacements?.internalValue;
    }
    if (this._preserveRadosNamespaceDataOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveRadosNamespaceDataOnDelete = this._preserveRadosNamespaceDataOnDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPoolName = undefined;
      this._metadataPoolName = undefined;
      this._poolPlacements.internalValue = undefined;
      this._preserveRadosNamespaceDataOnDelete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPoolName = value.dataPoolName;
      this._metadataPoolName = value.metadataPoolName;
      this._poolPlacements.internalValue = value.poolPlacements;
      this._preserveRadosNamespaceDataOnDelete = value.preserveRadosNamespaceDataOnDelete;
    }
  }

  // data_pool_name - computed: false, optional: true, required: false
  private _dataPoolName?: string; 
  public get dataPoolName() {
    return this.getStringAttribute('data_pool_name');
  }
  public set dataPoolName(value: string) {
    this._dataPoolName = value;
  }
  public resetDataPoolName() {
    this._dataPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPoolNameInput() {
    return this._dataPoolName;
  }

  // metadata_pool_name - computed: false, optional: true, required: false
  private _metadataPoolName?: string; 
  public get metadataPoolName() {
    return this.getStringAttribute('metadata_pool_name');
  }
  public set metadataPoolName(value: string) {
    this._metadataPoolName = value;
  }
  public resetMetadataPoolName() {
    this._metadataPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPoolNameInput() {
    return this._metadataPoolName;
  }

  // pool_placements - computed: false, optional: true, required: false
  private _poolPlacements = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacementsList(this, "pool_placements", false);
  public get poolPlacements() {
    return this._poolPlacements;
  }
  public putPoolPlacements(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsPoolPlacements[] | cdktf.IResolvable) {
    this._poolPlacements.internalValue = value;
  }
  public resetPoolPlacements() {
    this._poolPlacements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolPlacementsInput() {
    return this._poolPlacements.internalValue;
  }

  // preserve_rados_namespace_data_on_delete - computed: false, optional: true, required: false
  private _preserveRadosNamespaceDataOnDelete?: boolean | cdktf.IResolvable; 
  public get preserveRadosNamespaceDataOnDelete() {
    return this.getBooleanAttribute('preserve_rados_namespace_data_on_delete');
  }
  public set preserveRadosNamespaceDataOnDelete(value: boolean | cdktf.IResolvable) {
    this._preserveRadosNamespaceDataOnDelete = value;
  }
  public resetPreserveRadosNamespaceDataOnDelete() {
    this._preserveRadosNamespaceDataOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveRadosNamespaceDataOnDeleteInput() {
    return this._preserveRadosNamespaceDataOnDelete;
  }
}
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpecZone {
  /**
  * RGW Zone the Object Store is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#name DataK8SCephRookIoCephObjectStoreV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecZoneToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecZoneToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecZone | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpecZone | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecZone | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectStoreV1ManifestSpec {
  /**
  * The list of allowed namespaces in addition to the object store namespace where ceph object store users may be created. Specify '*' to allow all namespaces, otherwise list individual namespaces that are to be allowed. This is useful for applications that need object store credentials to be created in their own namespace, where neither OBCs nor COSI is being used to create buckets. The default is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#allow_users_in_namespaces DataK8SCephRookIoCephObjectStoreV1Manifest#allow_users_in_namespaces}
  */
  readonly allowUsersInNamespaces?: string[];
  /**
  * The authentication configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#auth DataK8SCephRookIoCephObjectStoreV1Manifest#auth}
  */
  readonly auth?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuth;
  /**
  * The data pool settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#data_pool DataK8SCephRookIoCephObjectStoreV1Manifest#data_pool}
  */
  readonly dataPool?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPool;
  /**
  * The rgw pod info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#gateway DataK8SCephRookIoCephObjectStoreV1Manifest#gateway}
  */
  readonly gateway?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGateway;
  /**
  * The RGW health probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#health_check DataK8SCephRookIoCephObjectStoreV1Manifest#health_check}
  */
  readonly healthCheck?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheck;
  /**
  * Hosting settings for the object store. A common use case for hosting configuration is to inform Rook of endpoints that support DNS wildcards, which in turn allows virtual host-style bucket addressing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#hosting DataK8SCephRookIoCephObjectStoreV1Manifest#hosting}
  */
  readonly hosting?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHosting;
  /**
  * The metadata pool settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#metadata_pool DataK8SCephRookIoCephObjectStoreV1Manifest#metadata_pool}
  */
  readonly metadataPool?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPool;
  /**
  * Preserve pools on object store deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#preserve_pools_on_delete DataK8SCephRookIoCephObjectStoreV1Manifest#preserve_pools_on_delete}
  */
  readonly preservePoolsOnDelete?: boolean | cdktf.IResolvable;
  /**
  * The protocol specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#protocols DataK8SCephRookIoCephObjectStoreV1Manifest#protocols}
  */
  readonly protocols?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocols;
  /**
  * Security represents security settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#security DataK8SCephRookIoCephObjectStoreV1Manifest#security}
  */
  readonly security?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurity;
  /**
  * The pool information when configuring RADOS namespaces in existing pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#shared_pools DataK8SCephRookIoCephObjectStoreV1Manifest#shared_pools}
  */
  readonly sharedPools?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPools;
  /**
  * The multisite info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#zone DataK8SCephRookIoCephObjectStoreV1Manifest#zone}
  */
  readonly zone?: DataK8SCephRookIoCephObjectStoreV1ManifestSpecZone;
}

export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecToTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_users_in_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowUsersInNamespaces),
    auth: dataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthToTerraform(struct!.auth),
    data_pool: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolToTerraform(struct!.dataPool),
    gateway: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayToTerraform(struct!.gateway),
    health_check: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckToTerraform(struct!.healthCheck),
    hosting: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingToTerraform(struct!.hosting),
    metadata_pool: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolToTerraform(struct!.metadataPool),
    preserve_pools_on_delete: cdktf.booleanToTerraform(struct!.preservePoolsOnDelete),
    protocols: dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsToTerraform(struct!.protocols),
    security: dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityToTerraform(struct!.security),
    shared_pools: dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsToTerraform(struct!.sharedPools),
    zone: dataK8SCephRookIoCephObjectStoreV1ManifestSpecZoneToTerraform(struct!.zone),
  }
}


export function dataK8SCephRookIoCephObjectStoreV1ManifestSpecToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_users_in_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowUsersInNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuth",
    },
    data_pool: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolToHclTerraform(struct!.dataPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPool",
    },
    gateway: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecGateway",
    },
    health_check: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheck",
    },
    hosting: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingToHclTerraform(struct!.hosting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecHosting",
    },
    metadata_pool: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolToHclTerraform(struct!.metadataPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPool",
    },
    preserve_pools_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.preservePoolsOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocols: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsToHclTerraform(struct!.protocols),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocols",
    },
    security: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurity",
    },
    shared_pools: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsToHclTerraform(struct!.sharedPools),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPools",
    },
    zone: {
      value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecZoneToHclTerraform(struct!.zone),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpecZone",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUsersInNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUsersInNamespaces = this._allowUsersInNamespaces;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._dataPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPool = this._dataPool?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._hosting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosting = this._hosting?.internalValue;
    }
    if (this._metadataPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPool = this._metadataPool?.internalValue;
    }
    if (this._preservePoolsOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.preservePoolsOnDelete = this._preservePoolsOnDelete;
    }
    if (this._protocols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._sharedPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPools = this._sharedPools?.internalValue;
    }
    if (this._zone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowUsersInNamespaces = undefined;
      this._auth.internalValue = undefined;
      this._dataPool.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._hosting.internalValue = undefined;
      this._metadataPool.internalValue = undefined;
      this._preservePoolsOnDelete = undefined;
      this._protocols.internalValue = undefined;
      this._security.internalValue = undefined;
      this._sharedPools.internalValue = undefined;
      this._zone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowUsersInNamespaces = value.allowUsersInNamespaces;
      this._auth.internalValue = value.auth;
      this._dataPool.internalValue = value.dataPool;
      this._gateway.internalValue = value.gateway;
      this._healthCheck.internalValue = value.healthCheck;
      this._hosting.internalValue = value.hosting;
      this._metadataPool.internalValue = value.metadataPool;
      this._preservePoolsOnDelete = value.preservePoolsOnDelete;
      this._protocols.internalValue = value.protocols;
      this._security.internalValue = value.security;
      this._sharedPools.internalValue = value.sharedPools;
      this._zone.internalValue = value.zone;
    }
  }

  // allow_users_in_namespaces - computed: false, optional: true, required: false
  private _allowUsersInNamespaces?: string[]; 
  public get allowUsersInNamespaces() {
    return this.getListAttribute('allow_users_in_namespaces');
  }
  public set allowUsersInNamespaces(value: string[]) {
    this._allowUsersInNamespaces = value;
  }
  public resetAllowUsersInNamespaces() {
    this._allowUsersInNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUsersInNamespacesInput() {
    return this._allowUsersInNamespaces;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // data_pool - computed: false, optional: true, required: false
  private _dataPool = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPoolOutputReference(this, "data_pool");
  public get dataPool() {
    return this._dataPool;
  }
  public putDataPool(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecDataPool) {
    this._dataPool.internalValue = value;
  }
  public resetDataPool() {
    this._dataPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPoolInput() {
    return this._dataPool.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // hosting - computed: false, optional: true, required: false
  private _hosting = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecHostingOutputReference(this, "hosting");
  public get hosting() {
    return this._hosting;
  }
  public putHosting(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecHosting) {
    this._hosting.internalValue = value;
  }
  public resetHosting() {
    this._hosting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostingInput() {
    return this._hosting.internalValue;
  }

  // metadata_pool - computed: false, optional: true, required: false
  private _metadataPool = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPoolOutputReference(this, "metadata_pool");
  public get metadataPool() {
    return this._metadataPool;
  }
  public putMetadataPool(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecMetadataPool) {
    this._metadataPool.internalValue = value;
  }
  public resetMetadataPool() {
    this._metadataPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPoolInput() {
    return this._metadataPool.internalValue;
  }

  // preserve_pools_on_delete - computed: false, optional: true, required: false
  private _preservePoolsOnDelete?: boolean | cdktf.IResolvable; 
  public get preservePoolsOnDelete() {
    return this.getBooleanAttribute('preserve_pools_on_delete');
  }
  public set preservePoolsOnDelete(value: boolean | cdktf.IResolvable) {
    this._preservePoolsOnDelete = value;
  }
  public resetPreservePoolsOnDelete() {
    this._preservePoolsOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservePoolsOnDeleteInput() {
    return this._preservePoolsOnDelete;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocolsOutputReference(this, "protocols");
  public get protocols() {
    return this._protocols;
  }
  public putProtocols(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecProtocols) {
    this._protocols.internalValue = value;
  }
  public resetProtocols() {
    this._protocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // shared_pools - computed: false, optional: true, required: false
  private _sharedPools = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPoolsOutputReference(this, "shared_pools");
  public get sharedPools() {
    return this._sharedPools;
  }
  public putSharedPools(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecSharedPools) {
    this._sharedPools.internalValue = value;
  }
  public resetSharedPools() {
    this._sharedPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPoolsInput() {
    return this._sharedPools.internalValue;
  }

  // zone - computed: false, optional: true, required: false
  private _zone = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecZoneOutputReference(this, "zone");
  public get zone() {
    return this._zone;
  }
  public putZone(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpecZone) {
    this._zone.internalValue = value;
  }
  public resetZone() {
    this._zone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest k8s_ceph_rook_io_ceph_object_store_v1_manifest}
*/
export class DataK8SCephRookIoCephObjectStoreV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ceph_rook_io_ceph_object_store_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCephRookIoCephObjectStoreV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCephRookIoCephObjectStoreV1Manifest to import
  * @param importFromId The id of the existing DataK8SCephRookIoCephObjectStoreV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCephRookIoCephObjectStoreV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ceph_rook_io_ceph_object_store_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_object_store_v1_manifest k8s_ceph_rook_io_ceph_object_store_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCephRookIoCephObjectStoreV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCephRookIoCephObjectStoreV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ceph_rook_io_ceph_object_store_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SCephRookIoCephObjectStoreV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCephRookIoCephObjectStoreV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCephRookIoCephObjectStoreV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCephRookIoCephObjectStoreV1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SCephRookIoCephObjectStoreV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCephRookIoCephObjectStoreV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCephRookIoCephObjectStoreV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCephRookIoCephObjectStoreV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephObjectStoreV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
