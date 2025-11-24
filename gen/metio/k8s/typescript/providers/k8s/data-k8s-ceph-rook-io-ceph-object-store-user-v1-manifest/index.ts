// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCephRookIoCephObjectStoreUserV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#metadata DataK8SCephRookIoCephObjectStoreUserV1Manifest#metadata}
  */
  readonly metadata: DataK8SCephRookIoCephObjectStoreUserV1ManifestMetadata;
  /**
  * ObjectStoreUserSpec represent the spec of an Objectstoreuser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#spec DataK8SCephRookIoCephObjectStoreUserV1Manifest#spec}
  */
  readonly spec: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpec;
}
export interface DataK8SCephRookIoCephObjectStoreUserV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#annotations DataK8SCephRookIoCephObjectStoreUserV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#labels DataK8SCephRookIoCephObjectStoreUserV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#name DataK8SCephRookIoCephObjectStoreUserV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#namespace DataK8SCephRookIoCephObjectStoreUserV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCephRookIoCephObjectStoreUserV1ManifestMetadataToTerraform(struct?: DataK8SCephRookIoCephObjectStoreUserV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectStoreUserV1ManifestMetadataToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreUserV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectStoreUserV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreUserV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreUserV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilities {
  /**
  * Add capabilities for user to send request to RGW Cache API header. Documented in https://docs.ceph.com/en/latest/radosgw/rgw-cache/#cache-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#amz_cache DataK8SCephRookIoCephObjectStoreUserV1Manifest#amz_cache}
  */
  readonly amzCache?: string;
  /**
  * Add capabilities for user to change bucket index logging. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#bilog DataK8SCephRookIoCephObjectStoreUserV1Manifest#bilog}
  */
  readonly bilog?: string;
  /**
  * Admin capabilities to read/write Ceph object store buckets. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#bucket DataK8SCephRookIoCephObjectStoreUserV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Admin capabilities to read/write Ceph object store buckets. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#buckets DataK8SCephRookIoCephObjectStoreUserV1Manifest#buckets}
  */
  readonly buckets?: string;
  /**
  * Add capabilities for user to change data logging. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#datalog DataK8SCephRookIoCephObjectStoreUserV1Manifest#datalog}
  */
  readonly datalog?: string;
  /**
  * Admin capabilities to read/write information about the user. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#info DataK8SCephRookIoCephObjectStoreUserV1Manifest#info}
  */
  readonly info?: string;
  /**
  * Add capabilities for user to change metadata logging. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#mdlog DataK8SCephRookIoCephObjectStoreUserV1Manifest#mdlog}
  */
  readonly mdlog?: string;
  /**
  * Admin capabilities to read/write Ceph object store metadata. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#metadata DataK8SCephRookIoCephObjectStoreUserV1Manifest#metadata}
  */
  readonly metadata?: string;
  /**
  * Add capabilities for user to change oidc provider. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#oidc_provider DataK8SCephRookIoCephObjectStoreUserV1Manifest#oidc_provider}
  */
  readonly oidcProvider?: string;
  /**
  * Add capabilities for user to set rate limiter for user and bucket. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#ratelimit DataK8SCephRookIoCephObjectStoreUserV1Manifest#ratelimit}
  */
  readonly ratelimit?: string;
  /**
  * Admin capabilities to read/write roles for user. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#roles DataK8SCephRookIoCephObjectStoreUserV1Manifest#roles}
  */
  readonly roles?: string;
  /**
  * Admin capabilities to read/write Ceph object store usage. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#usage DataK8SCephRookIoCephObjectStoreUserV1Manifest#usage}
  */
  readonly usage?: string;
  /**
  * Admin capabilities to read/write Ceph object store users. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#user DataK8SCephRookIoCephObjectStoreUserV1Manifest#user}
  */
  readonly user?: string;
  /**
  * Add capabilities for user to change user policies. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#user_policy DataK8SCephRookIoCephObjectStoreUserV1Manifest#user_policy}
  */
  readonly userPolicy?: string;
  /**
  * Admin capabilities to read/write Ceph object store users. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#users DataK8SCephRookIoCephObjectStoreUserV1Manifest#users}
  */
  readonly users?: string;
  /**
  * Admin capabilities to read/write Ceph object store zones. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#zone DataK8SCephRookIoCephObjectStoreUserV1Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilitiesToTerraform(struct?: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amz_cache: cdktf.stringToTerraform(struct!.amzCache),
    bilog: cdktf.stringToTerraform(struct!.bilog),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    buckets: cdktf.stringToTerraform(struct!.buckets),
    datalog: cdktf.stringToTerraform(struct!.datalog),
    info: cdktf.stringToTerraform(struct!.info),
    mdlog: cdktf.stringToTerraform(struct!.mdlog),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    oidc_provider: cdktf.stringToTerraform(struct!.oidcProvider),
    ratelimit: cdktf.stringToTerraform(struct!.ratelimit),
    roles: cdktf.stringToTerraform(struct!.roles),
    usage: cdktf.stringToTerraform(struct!.usage),
    user: cdktf.stringToTerraform(struct!.user),
    user_policy: cdktf.stringToTerraform(struct!.userPolicy),
    users: cdktf.stringToTerraform(struct!.users),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilitiesToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amz_cache: {
      value: cdktf.stringToHclTerraform(struct!.amzCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bilog: {
      value: cdktf.stringToHclTerraform(struct!.bilog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buckets: {
      value: cdktf.stringToHclTerraform(struct!.buckets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datalog: {
      value: cdktf.stringToHclTerraform(struct!.datalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info: {
      value: cdktf.stringToHclTerraform(struct!.info),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdlog: {
      value: cdktf.stringToHclTerraform(struct!.mdlog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_provider: {
      value: cdktf.stringToHclTerraform(struct!.oidcProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratelimit: {
      value: cdktf.stringToHclTerraform(struct!.ratelimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.stringToHclTerraform(struct!.roles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage: {
      value: cdktf.stringToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_policy: {
      value: cdktf.stringToHclTerraform(struct!.userPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.stringToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amzCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.amzCache = this._amzCache;
    }
    if (this._bilog !== undefined) {
      hasAnyValues = true;
      internalValueResult.bilog = this._bilog;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._datalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.datalog = this._datalog;
    }
    if (this._info !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info;
    }
    if (this._mdlog !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdlog = this._mdlog;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._oidcProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcProvider = this._oidcProvider;
    }
    if (this._ratelimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimit = this._ratelimit;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._userPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPolicy = this._userPolicy;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amzCache = undefined;
      this._bilog = undefined;
      this._bucket = undefined;
      this._buckets = undefined;
      this._datalog = undefined;
      this._info = undefined;
      this._mdlog = undefined;
      this._metadata = undefined;
      this._oidcProvider = undefined;
      this._ratelimit = undefined;
      this._roles = undefined;
      this._usage = undefined;
      this._user = undefined;
      this._userPolicy = undefined;
      this._users = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amzCache = value.amzCache;
      this._bilog = value.bilog;
      this._bucket = value.bucket;
      this._buckets = value.buckets;
      this._datalog = value.datalog;
      this._info = value.info;
      this._mdlog = value.mdlog;
      this._metadata = value.metadata;
      this._oidcProvider = value.oidcProvider;
      this._ratelimit = value.ratelimit;
      this._roles = value.roles;
      this._usage = value.usage;
      this._user = value.user;
      this._userPolicy = value.userPolicy;
      this._users = value.users;
      this._zone = value.zone;
    }
  }

  // amz_cache - computed: false, optional: true, required: false
  private _amzCache?: string; 
  public get amzCache() {
    return this.getStringAttribute('amz_cache');
  }
  public set amzCache(value: string) {
    this._amzCache = value;
  }
  public resetAmzCache() {
    this._amzCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amzCacheInput() {
    return this._amzCache;
  }

  // bilog - computed: false, optional: true, required: false
  private _bilog?: string; 
  public get bilog() {
    return this.getStringAttribute('bilog');
  }
  public set bilog(value: string) {
    this._bilog = value;
  }
  public resetBilog() {
    this._bilog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bilogInput() {
    return this._bilog;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets?: string; 
  public get buckets() {
    return this.getStringAttribute('buckets');
  }
  public set buckets(value: string) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // datalog - computed: false, optional: true, required: false
  private _datalog?: string; 
  public get datalog() {
    return this.getStringAttribute('datalog');
  }
  public set datalog(value: string) {
    this._datalog = value;
  }
  public resetDatalog() {
    this._datalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datalogInput() {
    return this._datalog;
  }

  // info - computed: false, optional: true, required: false
  private _info?: string; 
  public get info() {
    return this.getStringAttribute('info');
  }
  public set info(value: string) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // mdlog - computed: false, optional: true, required: false
  private _mdlog?: string; 
  public get mdlog() {
    return this.getStringAttribute('mdlog');
  }
  public set mdlog(value: string) {
    this._mdlog = value;
  }
  public resetMdlog() {
    this._mdlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdlogInput() {
    return this._mdlog;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // oidc_provider - computed: false, optional: true, required: false
  private _oidcProvider?: string; 
  public get oidcProvider() {
    return this.getStringAttribute('oidc_provider');
  }
  public set oidcProvider(value: string) {
    this._oidcProvider = value;
  }
  public resetOidcProvider() {
    this._oidcProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcProviderInput() {
    return this._oidcProvider;
  }

  // ratelimit - computed: false, optional: true, required: false
  private _ratelimit?: string; 
  public get ratelimit() {
    return this.getStringAttribute('ratelimit');
  }
  public set ratelimit(value: string) {
    this._ratelimit = value;
  }
  public resetRatelimit() {
    this._ratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitInput() {
    return this._ratelimit;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string; 
  public get roles() {
    return this.getStringAttribute('roles');
  }
  public set roles(value: string) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_policy - computed: false, optional: true, required: false
  private _userPolicy?: string; 
  public get userPolicy() {
    return this.getStringAttribute('user_policy');
  }
  public set userPolicy(value: string) {
    this._userPolicy = value;
  }
  public resetUserPolicy() {
    this._userPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPolicyInput() {
    return this._userPolicy;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string; 
  public get users() {
    return this.getStringAttribute('users');
  }
  public set users(value: string) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotas {
  /**
  * Maximum bucket limit for the ceph user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#max_buckets DataK8SCephRookIoCephObjectStoreUserV1Manifest#max_buckets}
  */
  readonly maxBuckets?: number;
  /**
  * Maximum number of objects across all the user's buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#max_objects DataK8SCephRookIoCephObjectStoreUserV1Manifest#max_objects}
  */
  readonly maxObjects?: number;
  /**
  * Maximum size limit of all objects across all the user's buckets See https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity for more info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#max_size DataK8SCephRookIoCephObjectStoreUserV1Manifest#max_size}
  */
  readonly maxSize?: string;
}

export function dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotasToTerraform(struct?: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_buckets: cdktf.numberToTerraform(struct!.maxBuckets),
    max_objects: cdktf.numberToTerraform(struct!.maxObjects),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
  }
}


export function dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotasToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_buckets: {
      value: cdktf.numberToHclTerraform(struct!.maxBuckets),
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

export class DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBuckets = this._maxBuckets;
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

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBuckets = undefined;
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
      this._maxBuckets = value.maxBuckets;
      this._maxObjects = value.maxObjects;
      this._maxSize = value.maxSize;
    }
  }

  // max_buckets - computed: false, optional: true, required: false
  private _maxBuckets?: number; 
  public get maxBuckets() {
    return this.getNumberAttribute('max_buckets');
  }
  public set maxBuckets(value: number) {
    this._maxBuckets = value;
  }
  public resetMaxBuckets() {
    this._maxBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBucketsInput() {
    return this._maxBuckets;
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
export interface DataK8SCephRookIoCephObjectStoreUserV1ManifestSpec {
  /**
  * Additional admin-level capabilities for the Ceph object store user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#capabilities DataK8SCephRookIoCephObjectStoreUserV1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilities;
  /**
  * The namespace where the parent CephCluster and CephObjectStore are found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#cluster_namespace DataK8SCephRookIoCephObjectStoreUserV1Manifest#cluster_namespace}
  */
  readonly clusterNamespace?: string;
  /**
  * The display name for the ceph users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#display_name DataK8SCephRookIoCephObjectStoreUserV1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * ObjectUserQuotaSpec can be used to set quotas for the object store user to limit their usage. See the [Ceph docs](https://docs.ceph.com/en/latest/radosgw/admin/?#quota-management) for more
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#quotas DataK8SCephRookIoCephObjectStoreUserV1Manifest#quotas}
  */
  readonly quotas?: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotas;
  /**
  * The store the user will be created in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#store DataK8SCephRookIoCephObjectStoreUserV1Manifest#store}
  */
  readonly store?: string;
}

export function dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecToTerraform(struct?: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilitiesToTerraform(struct!.capabilities),
    cluster_namespace: cdktf.stringToTerraform(struct!.clusterNamespace),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    quotas: dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotasToTerraform(struct!.quotas),
    store: cdktf.stringToTerraform(struct!.store),
  }
}


export function dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecToHclTerraform(struct?: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilities",
    },
    cluster_namespace: {
      value: cdktf.stringToHclTerraform(struct!.clusterNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quotas: {
      value: dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotasToHclTerraform(struct!.quotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotas",
    },
    store: {
      value: cdktf.stringToHclTerraform(struct!.store),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectStoreUserV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._clusterNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNamespace = this._clusterNamespace;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._quotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotas = this._quotas?.internalValue;
    }
    if (this._store !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities.internalValue = undefined;
      this._clusterNamespace = undefined;
      this._displayName = undefined;
      this._quotas.internalValue = undefined;
      this._store = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities.internalValue = value.capabilities;
      this._clusterNamespace = value.clusterNamespace;
      this._displayName = value.displayName;
      this._quotas.internalValue = value.quotas;
      this._store = value.store;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // cluster_namespace - computed: false, optional: true, required: false
  private _clusterNamespace?: string; 
  public get clusterNamespace() {
    return this.getStringAttribute('cluster_namespace');
  }
  public set clusterNamespace(value: string) {
    this._clusterNamespace = value;
  }
  public resetClusterNamespace() {
    this._clusterNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamespaceInput() {
    return this._clusterNamespace;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // quotas - computed: false, optional: true, required: false
  private _quotas = new DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotasOutputReference(this, "quotas");
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecQuotas) {
    this._quotas.internalValue = value;
  }
  public resetQuotas() {
    this._quotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotasInput() {
    return this._quotas.internalValue;
  }

  // store - computed: false, optional: true, required: false
  private _store?: string; 
  public get store() {
    return this.getStringAttribute('store');
  }
  public set store(value: string) {
    this._store = value;
  }
  public resetStore() {
    this._store = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest k8s_ceph_rook_io_ceph_object_store_user_v1_manifest}
*/
export class DataK8SCephRookIoCephObjectStoreUserV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ceph_rook_io_ceph_object_store_user_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCephRookIoCephObjectStoreUserV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCephRookIoCephObjectStoreUserV1Manifest to import
  * @param importFromId The id of the existing DataK8SCephRookIoCephObjectStoreUserV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCephRookIoCephObjectStoreUserV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ceph_rook_io_ceph_object_store_user_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ceph_rook_io_ceph_object_store_user_v1_manifest k8s_ceph_rook_io_ceph_object_store_user_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCephRookIoCephObjectStoreUserV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCephRookIoCephObjectStoreUserV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ceph_rook_io_ceph_object_store_user_v1_manifest',
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
  private _metadata = new DataK8SCephRookIoCephObjectStoreUserV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCephRookIoCephObjectStoreUserV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCephRookIoCephObjectStoreUserV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCephRookIoCephObjectStoreUserV1ManifestSpec) {
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
      metadata: dataK8SCephRookIoCephObjectStoreUserV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCephRookIoCephObjectStoreUserV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephObjectStoreUserV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCephRookIoCephObjectStoreUserV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephObjectStoreUserV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
