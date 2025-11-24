// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#metadata DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#spec DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpec;
}
export interface DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#annotations DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#labels DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#name DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#namespace DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpec {
  /**
  * The URL of the cluster, will be used for the active-active database URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#api_fqdn_url DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#api_fqdn_url}
  */
  readonly apiFqdnUrl: string;
  /**
  * The database URL suffix, will be used for the active-active database replication endpoint and replication endpoint SNI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#db_fqdn_suffix DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#db_fqdn_suffix}
  */
  readonly dbFqdnSuffix?: string;
  /**
  * The name of the REC that the RERC is pointing at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#rec_name DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#rec_name}
  */
  readonly recName: string;
  /**
  * The namespace of the REC that the RERC is pointing at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#rec_namespace DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#rec_namespace}
  */
  readonly recNamespace: string;
  /**
  * The name of the secret containing cluster credentials. Must be of the following format: 'redis-enterprise-<RERC name>'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#secret_name DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_fqdn_url: cdktf.stringToTerraform(struct!.apiFqdnUrl),
    db_fqdn_suffix: cdktf.stringToTerraform(struct!.dbFqdnSuffix),
    rec_name: cdktf.stringToTerraform(struct!.recName),
    rec_namespace: cdktf.stringToTerraform(struct!.recNamespace),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_fqdn_url: {
      value: cdktf.stringToHclTerraform(struct!.apiFqdnUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_fqdn_suffix: {
      value: cdktf.stringToHclTerraform(struct!.dbFqdnSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rec_name: {
      value: cdktf.stringToHclTerraform(struct!.recName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rec_namespace: {
      value: cdktf.stringToHclTerraform(struct!.recNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiFqdnUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiFqdnUrl = this._apiFqdnUrl;
    }
    if (this._dbFqdnSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbFqdnSuffix = this._dbFqdnSuffix;
    }
    if (this._recName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recName = this._recName;
    }
    if (this._recNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.recNamespace = this._recNamespace;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiFqdnUrl = undefined;
      this._dbFqdnSuffix = undefined;
      this._recName = undefined;
      this._recNamespace = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiFqdnUrl = value.apiFqdnUrl;
      this._dbFqdnSuffix = value.dbFqdnSuffix;
      this._recName = value.recName;
      this._recNamespace = value.recNamespace;
      this._secretName = value.secretName;
    }
  }

  // api_fqdn_url - computed: false, optional: false, required: true
  private _apiFqdnUrl?: string; 
  public get apiFqdnUrl() {
    return this.getStringAttribute('api_fqdn_url');
  }
  public set apiFqdnUrl(value: string) {
    this._apiFqdnUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiFqdnUrlInput() {
    return this._apiFqdnUrl;
  }

  // db_fqdn_suffix - computed: false, optional: true, required: false
  private _dbFqdnSuffix?: string; 
  public get dbFqdnSuffix() {
    return this.getStringAttribute('db_fqdn_suffix');
  }
  public set dbFqdnSuffix(value: string) {
    this._dbFqdnSuffix = value;
  }
  public resetDbFqdnSuffix() {
    this._dbFqdnSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbFqdnSuffixInput() {
    return this._dbFqdnSuffix;
  }

  // rec_name - computed: false, optional: false, required: true
  private _recName?: string; 
  public get recName() {
    return this.getStringAttribute('rec_name');
  }
  public set recName(value: string) {
    this._recName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recNameInput() {
    return this._recName;
  }

  // rec_namespace - computed: false, optional: false, required: true
  private _recNamespace?: string; 
  public get recNamespace() {
    return this.getStringAttribute('rec_namespace');
  }
  public set recNamespace(value: string) {
    this._recNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recNamespaceInput() {
    return this._recNamespace;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest k8s_app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest}
*/
export class DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest k8s_app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_app_redislabs_com_redis_enterprise_remote_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppRedislabsComRedisEnterpriseRemoteClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
