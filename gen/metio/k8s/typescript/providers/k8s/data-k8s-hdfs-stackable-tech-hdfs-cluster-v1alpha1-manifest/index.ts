// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#metadata DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadata;
  /**
  * An HDFS cluster stacklet. This resource is managed by the Stackable operator for Apache Hadoop HDFS. Find more information on how to use it and the resources that the operator generates in the [operator documentation](https://docs.stackable.tech/home/nightly/hdfs/). The CRD contains three roles: 'nameNodes', 'dataNodes' and 'journalNodes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#spec DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpec;
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#annotations DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#labels DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#name DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#namespace DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos {
  /**
  * Name of the SecretClass providing the keytab for the HDFS services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#secret_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretClass = value.secretClass;
    }
  }

  // secret_class - computed: false, optional: false, required: true
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthentication {
  /**
  * Kerberos configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#kerberos DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#kerberos}
  */
  readonly kerberos: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos;
  /**
  * Name of the SecretClass providing the tls certificates for the WebUIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#tls_secret_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#tls_secret_class}
  */
  readonly tlsSecretClass?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosToTerraform(struct!.kerberos),
    tls_secret_class: cdktf.stringToTerraform(struct!.tlsSecretClass),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosToHclTerraform(struct!.kerberos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos",
    },
    tls_secret_class: {
      value: cdktf.stringToHclTerraform(struct!.tlsSecretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos = this._kerberos?.internalValue;
    }
    if (this._tlsSecretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecretClass = this._tlsSecretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kerberos.internalValue = undefined;
      this._tlsSecretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kerberos.internalValue = value.kerberos;
      this._tlsSecretClass = value.tlsSecretClass;
    }
  }

  // kerberos - computed: false, optional: false, required: true
  private _kerberos = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos) {
    this._kerberos.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
  }

  // tls_secret_class - computed: false, optional: true, required: false
  private _tlsSecretClass?: string; 
  public get tlsSecretClass() {
    return this.getStringAttribute('tls_secret_class');
  }
  public set tlsSecretClass(value: string) {
    this._tlsSecretClass = value;
  }
  public resetTlsSecretClass() {
    this._tlsSecretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecretClassInput() {
    return this._tlsSecretClass;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa {
  /**
  * The [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) for the OPA stacklet that should be used for authorization requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_map_name DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_map_name}
  */
  readonly configMapName: string;
  /**
  * The name of the Rego package containing the Rego rules for the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#package DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#package}
  */
  readonly package?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_name: cdktf.stringToTerraform(struct!.configMapName),
    package: cdktf.stringToTerraform(struct!.package),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.configMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapName = this._configMapName;
    }
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapName = undefined;
      this._package = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapName = value.configMapName;
      this._package = value.package;
    }
  }

  // config_map_name - computed: false, optional: false, required: true
  private _configMapName?: string; 
  public get configMapName() {
    return this.getStringAttribute('config_map_name');
  }
  public set configMapName(value: string) {
    this._configMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapNameInput() {
    return this._configMapName;
  }

  // package - computed: false, optional: true, required: false
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  public resetPackage() {
    this._package = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorization {
  /**
  * Configure the OPA stacklet [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) and the name of the Rego package containing your authorization rules. Consult the [OPA authorization documentation](https://docs.stackable.tech/home/nightly/concepts/opa) to learn how to deploy Rego authorization rules with OPA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#opa DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#opa}
  */
  readonly opa: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opa: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaToTerraform(struct!.opa),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opa: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaToHclTerraform(struct!.opa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opa = this._opa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._opa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._opa.internalValue = value.opa;
    }
  }

  // opa - computed: false, optional: false, required: true
  private _opa = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaOutputReference(this, "opa");
  public get opa() {
    return this._opa;
  }
  public putOpa(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa) {
    this._opa.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opaInput() {
    return this._opa.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwareness {
  /**
  * Name of the label on the Kubernetes Node (where the Pod is placed on) used to resolve a datanode to a topology zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_label DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_label}
  */
  readonly nodeLabel?: string;
  /**
  * Name of the label on the Kubernetes Pod used to resolve a datanode to a topology zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_label DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_label}
  */
  readonly podLabel?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwarenessToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwareness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_label: cdktf.stringToTerraform(struct!.nodeLabel),
    pod_label: cdktf.stringToTerraform(struct!.podLabel),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwarenessToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwareness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_label: {
      value: cdktf.stringToHclTerraform(struct!.nodeLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_label: {
      value: cdktf.stringToHclTerraform(struct!.podLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwarenessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwareness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabel = this._nodeLabel;
    }
    if (this._podLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.podLabel = this._podLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwareness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeLabel = undefined;
      this._podLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeLabel = value.nodeLabel;
      this._podLabel = value.podLabel;
    }
  }

  // node_label - computed: false, optional: true, required: false
  private _nodeLabel?: string; 
  public get nodeLabel() {
    return this.getStringAttribute('node_label');
  }
  public set nodeLabel(value: string) {
    this._nodeLabel = value;
  }
  public resetNodeLabel() {
    this._nodeLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelInput() {
    return this._nodeLabel;
  }

  // pod_label - computed: false, optional: true, required: false
  private _podLabel?: string; 
  public get podLabel() {
    return this.getStringAttribute('pod_label');
  }
  public set podLabel(value: string) {
    this._podLabel = value;
  }
  public resetPodLabel() {
    this._podLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podLabelInput() {
    return this._podLabel;
  }
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwarenessList extends cdktf.ComplexList {
  public internalValue? : DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwareness[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwarenessOutputReference {
    return new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwarenessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfig {
  /**
  * Settings related to user [authentication](https://docs.stackable.tech/home/nightly/usage-guide/security).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#authentication DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#authentication}
  */
  readonly authentication?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthentication;
  /**
  * Authorization options for HDFS. Learn more in the [HDFS authorization usage guide](https://docs.stackable.tech/home/nightly/hdfs/usage-guide/security#authorization).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#authorization DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#authorization}
  */
  readonly authorization?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorization;
  /**
  * 'dfsReplication' is the factor of how many times a file will be replicated to different data nodes. The default is 3. You need at least the same amount of data nodes so each file can be replicated correctly, otherwise a warning will be printed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#dfs_replication DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#dfs_replication}
  */
  readonly dfsReplication?: number;
  /**
  * Deprecated, please use '.spec.nameNodes.config.listenerClass' and '.spec.dataNodes.config.listenerClass' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#listener_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * Configuration to control HDFS topology (rack) awareness feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#rack_awareness DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#rack_awareness}
  */
  readonly rackAwareness?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwareness[] | cdktf.IResolvable;
  /**
  * Name of the Vector aggregator [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery). It must contain the key 'ADDRESS' with the address of the Vector aggregator. Follow the [logging tutorial](https://docs.stackable.tech/home/nightly/tutorials/logging-vector-aggregator) to learn how to configure log aggregation with Vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#vector_aggregator_config_map_name DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#vector_aggregator_config_map_name}
  */
  readonly vectorAggregatorConfigMapName?: string;
  /**
  * Name of the [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) for a ZooKeeper cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#zookeeper_config_map_name DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#zookeeper_config_map_name}
  */
  readonly zookeeperConfigMapName: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToTerraform(struct!.authentication),
    authorization: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationToTerraform(struct!.authorization),
    dfs_replication: cdktf.numberToTerraform(struct!.dfsReplication),
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    rack_awareness: cdktf.listMapper(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwarenessToTerraform, false)(struct!.rackAwareness),
    vector_aggregator_config_map_name: cdktf.stringToTerraform(struct!.vectorAggregatorConfigMapName),
    zookeeper_config_map_name: cdktf.stringToTerraform(struct!.zookeeperConfigMapName),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthentication",
    },
    authorization: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorization",
    },
    dfs_replication: {
      value: cdktf.numberToHclTerraform(struct!.dfsReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack_awareness: {
      value: cdktf.listMapperHcl(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwarenessToHclTerraform, false)(struct!.rackAwareness),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwarenessList",
    },
    vector_aggregator_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.vectorAggregatorConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zookeeper_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.zookeeperConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._dfsReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfsReplication = this._dfsReplication;
    }
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    if (this._rackAwareness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rackAwareness = this._rackAwareness?.internalValue;
    }
    if (this._vectorAggregatorConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorAggregatorConfigMapName = this._vectorAggregatorConfigMapName;
    }
    if (this._zookeeperConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperConfigMapName = this._zookeeperConfigMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._authorization.internalValue = undefined;
      this._dfsReplication = undefined;
      this._listenerClass = undefined;
      this._rackAwareness.internalValue = undefined;
      this._vectorAggregatorConfigMapName = undefined;
      this._zookeeperConfigMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._authorization.internalValue = value.authorization;
      this._dfsReplication = value.dfsReplication;
      this._listenerClass = value.listenerClass;
      this._rackAwareness.internalValue = value.rackAwareness;
      this._vectorAggregatorConfigMapName = value.vectorAggregatorConfigMapName;
      this._zookeeperConfigMapName = value.zookeeperConfigMapName;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // dfs_replication - computed: false, optional: true, required: false
  private _dfsReplication?: number; 
  public get dfsReplication() {
    return this.getNumberAttribute('dfs_replication');
  }
  public set dfsReplication(value: number) {
    this._dfsReplication = value;
  }
  public resetDfsReplication() {
    this._dfsReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfsReplicationInput() {
    return this._dfsReplication;
  }

  // listener_class - computed: false, optional: true, required: false
  private _listenerClass?: string; 
  public get listenerClass() {
    return this.getStringAttribute('listener_class');
  }
  public set listenerClass(value: string) {
    this._listenerClass = value;
  }
  public resetListenerClass() {
    this._listenerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerClassInput() {
    return this._listenerClass;
  }

  // rack_awareness - computed: false, optional: true, required: false
  private _rackAwareness = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwarenessList(this, "rack_awareness", false);
  public get rackAwareness() {
    return this._rackAwareness;
  }
  public putRackAwareness(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigRackAwareness[] | cdktf.IResolvable) {
    this._rackAwareness.internalValue = value;
  }
  public resetRackAwareness() {
    this._rackAwareness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackAwarenessInput() {
    return this._rackAwareness.internalValue;
  }

  // vector_aggregator_config_map_name - computed: false, optional: true, required: false
  private _vectorAggregatorConfigMapName?: string; 
  public get vectorAggregatorConfigMapName() {
    return this.getStringAttribute('vector_aggregator_config_map_name');
  }
  public set vectorAggregatorConfigMapName(value: string) {
    this._vectorAggregatorConfigMapName = value;
  }
  public resetVectorAggregatorConfigMapName() {
    this._vectorAggregatorConfigMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorAggregatorConfigMapNameInput() {
    return this._vectorAggregatorConfigMapName;
  }

  // zookeeper_config_map_name - computed: false, optional: false, required: true
  private _zookeeperConfigMapName?: string; 
  public get zookeeperConfigMapName() {
    return this.getStringAttribute('zookeeper_config_map_name');
  }
  public set zookeeperConfigMapName(value: string) {
    this._zookeeperConfigMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperConfigMapNameInput() {
    return this._zookeeperConfigMapName;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperation {
  /**
  * Flag to stop cluster reconciliation by the operator. This means that all changes in the custom resource spec are ignored until this flag is set to false or removed. The operator will however still watch the deployed resources at the time and update the custom resource status field. If applied at the same time with 'stopped', 'reconciliationPaused' will take precedence over 'stopped' and stop the reconciliation immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#reconciliation_paused DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#reconciliation_paused}
  */
  readonly reconciliationPaused?: boolean | cdktf.IResolvable;
  /**
  * Flag to stop the cluster. This means all deployed resources (e.g. Services, StatefulSets, ConfigMaps) are kept but all deployed Pods (e.g. replicas from a StatefulSet) are scaled to 0 and therefore stopped and removed. If applied at the same time with 'reconciliationPaused', the latter will pause reconciliation and 'stopped' will take no effect until 'reconciliationPaused' is set to false or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#stopped DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciliation_paused: cdktf.booleanToTerraform(struct!.reconciliationPaused),
    stopped: cdktf.booleanToTerraform(struct!.stopped),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reconciliation_paused: {
      value: cdktf.booleanToHclTerraform(struct!.reconciliationPaused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stopped: {
      value: cdktf.booleanToHclTerraform(struct!.stopped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reconciliationPaused !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconciliationPaused = this._reconciliationPaused;
    }
    if (this._stopped !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopped = this._stopped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reconciliationPaused = undefined;
      this._stopped = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reconciliationPaused = value.reconciliationPaused;
      this._stopped = value.stopped;
    }
  }

  // reconciliation_paused - computed: false, optional: true, required: false
  private _reconciliationPaused?: boolean | cdktf.IResolvable; 
  public get reconciliationPaused() {
    return this.getBooleanAttribute('reconciliation_paused');
  }
  public set reconciliationPaused(value: boolean | cdktf.IResolvable) {
    this._reconciliationPaused = value;
  }
  public resetReconciliationPaused() {
    this._reconciliationPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconciliationPausedInput() {
    return this._reconciliationPaused;
  }

  // stopped - computed: false, optional: true, required: false
  private _stopped?: boolean | cdktf.IResolvable; 
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }
  public set stopped(value: boolean | cdktf.IResolvable) {
    this._stopped = value;
  }
  public resetStopped() {
    this._stopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedInput() {
    return this._stopped;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_selector DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinityToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinityToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_map DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustomToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFileToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#console DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#custom DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#file DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#loggers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggers;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#containers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#max DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#min DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpuToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpuToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#limit DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#runtime_limits DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemoryToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemoryToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#key DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#operator DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#values DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressionsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressionsOutputReference {
    return new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_expressions DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_labels DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressionsList",
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorage {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#capacity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#count DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#hdfs_storage_type DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#hdfs_storage_type}
  */
  readonly hdfsStorageType?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#selectors DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    count: cdktf.numberToTerraform(struct!.count),
    hdfs_storage_type: cdktf.stringToTerraform(struct!.hdfsStorageType),
    selectors: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hdfs_storage_type: {
      value: cdktf.stringToHclTerraform(struct!.hdfsStorageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._hdfsStorageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfsStorageType = this._hdfsStorageType;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._count = undefined;
      this._hdfsStorageType = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._count = value.count;
      this._hdfsStorageType = value.hdfsStorageType;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // hdfs_storage_type - computed: false, optional: true, required: false
  private _hdfsStorageType?: string; 
  public get hdfsStorageType() {
    return this.getStringAttribute('hdfs_storage_type');
  }
  public set hdfsStorageType(value: string) {
    this._hdfsStorageType = value;
  }
  public resetHdfsStorageType() {
    this._hdfsStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsStorageTypeInput() {
    return this._hdfsStorageType;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cpu DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#memory DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorage;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemory",
    },
    storage: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * This field controls which [ListenerClass](https://docs.stackable.tech/home/nightly/listener-operator/listenerclass.html) is used to expose this rolegroup. DataNodes should have a direct ListenerClass, such as 'cluster-internal' or 'external-unstable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#listener_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#logging DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#resources DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResources;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    logging: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLogging",
    },
    resources: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._listenerClass = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._listenerClass = value.listenerClass;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // listener_class - computed: false, optional: true, required: false
  private _listenerClass?: string; 
  public get listenerClass() {
    return this.getStringAttribute('listener_class');
  }
  public set listenerClass(value: string) {
    this._listenerClass = value;
  }
  public resetListenerClass() {
    this._listenerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerClassInput() {
    return this._listenerClass;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#enabled DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#max_unavailable DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxUnavailable = value.maxUnavailable;
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

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudget;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
    }
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_selector DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinityToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_map DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#console DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#custom DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#file DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#loggers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#containers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#max DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#min DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#limit DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#runtime_limits DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#key DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#operator DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#values DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressionsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressionsOutputReference {
    return new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_expressions DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_labels DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressionsList",
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorage {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#capacity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#count DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#hdfs_storage_type DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#hdfs_storage_type}
  */
  readonly hdfsStorageType?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#selectors DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    count: cdktf.numberToTerraform(struct!.count),
    hdfs_storage_type: cdktf.stringToTerraform(struct!.hdfsStorageType),
    selectors: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hdfs_storage_type: {
      value: cdktf.stringToHclTerraform(struct!.hdfsStorageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._hdfsStorageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfsStorageType = this._hdfsStorageType;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._count = undefined;
      this._hdfsStorageType = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._count = value.count;
      this._hdfsStorageType = value.hdfsStorageType;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // hdfs_storage_type - computed: false, optional: true, required: false
  private _hdfsStorageType?: string; 
  public get hdfsStorageType() {
    return this.getStringAttribute('hdfs_storage_type');
  }
  public set hdfsStorageType(value: string) {
    this._hdfsStorageType = value;
  }
  public resetHdfsStorageType() {
    this._hdfsStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsStorageTypeInput() {
    return this._hdfsStorageType;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cpu DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#memory DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorage;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * This field controls which [ListenerClass](https://docs.stackable.tech/home/nightly/listener-operator/listenerclass.html) is used to expose this rolegroup. DataNodes should have a direct ListenerClass, such as 'cluster-internal' or 'external-unstable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#listener_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#logging DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#resources DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResources;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    logging: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._listenerClass = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._listenerClass = value.listenerClass;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // listener_class - computed: false, optional: true, required: false
  private _listenerClass?: string; 
  public get listenerClass() {
    return this.getStringAttribute('listener_class');
  }
  public set listenerClass(value: string) {
    this._listenerClass = value;
  }
  public resetListenerClass() {
    this._listenerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerClassInput() {
    return this._listenerClass;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cli_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Configuration options that are available for all roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#env_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#replicas DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._replicas = value.replicas;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cli_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Configuration options that are available for all roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#env_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#role_config DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#role_groups DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroups;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role_config: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfig",
    },
    role_groups: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._roleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleConfig = this._roleConfig?.internalValue;
    }
    if (this._roleGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleGroups = this._roleGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._roleConfig.internalValue = undefined;
      this._roleGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._roleConfig.internalValue = value.roleConfig;
      this._roleGroups.internalValue = value.roleGroups;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // role_config - computed: false, optional: true, required: false
  private _roleConfig = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleConfig) {
    this._roleConfig.internalValue = value;
  }
  public resetRoleConfig() {
    this._roleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigInput() {
    return this._roleConfig.internalValue;
  }

  // role_groups - computed: false, optional: false, required: true
  private _roleGroups = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#name DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImage {
  /**
  * Overwrite the docker image. Specify the full docker image name, e.g. 'docker.stackable.tech/stackable/superset:1.4.1-stackable2.1.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#custom DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: string;
  /**
  * Version of the product, e.g. '1.4.1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#product_version DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#product_version}
  */
  readonly productVersion?: string;
  /**
  * [Pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) used when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pull_policy DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * [Image pull secrets](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) to pull images from a private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pull_secrets DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Name of the docker repo, e.g. 'docker.stackable.tech/stackable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#repo DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#repo}
  */
  readonly repo?: string;
  /**
  * Stackable version of the product, e.g. '23.4', '23.4.1' or '0.0.0-dev'. If not specified, the operator will use its own version, e.g. '23.4.1'. When using a nightly operator or a pr version, it will use the nightly '0.0.0-dev' image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#stackable_version DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#stackable_version}
  */
  readonly stackableVersion?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    product_version: cdktf.stringToTerraform(struct!.productVersion),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repo: cdktf.stringToTerraform(struct!.repo),
    stackable_version: cdktf.stringToTerraform(struct!.stackableVersion),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.stringToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_version: {
      value: cdktf.stringToHclTerraform(struct!.productVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecretsList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stackable_version: {
      value: cdktf.stringToHclTerraform(struct!.stackableVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._productVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.productVersion = this._productVersion;
    }
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._pullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecrets = this._pullSecrets?.internalValue;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._stackableVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackableVersion = this._stackableVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._productVersion = undefined;
      this._pullPolicy = undefined;
      this._pullSecrets.internalValue = undefined;
      this._repo = undefined;
      this._stackableVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._productVersion = value.productVersion;
      this._pullPolicy = value.pullPolicy;
      this._pullSecrets.internalValue = value.pullSecrets;
      this._repo = value.repo;
      this._stackableVersion = value.stackableVersion;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: string; 
  public get custom() {
    return this.getStringAttribute('custom');
  }
  public set custom(value: string) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // product_version - computed: false, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // pull_secrets - computed: false, optional: true, required: false
  private _pullSecrets = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._pullSecrets.internalValue = value;
  }
  public resetPullSecrets() {
    this._pullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretsInput() {
    return this._pullSecrets.internalValue;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // stackable_version - computed: false, optional: true, required: false
  private _stackableVersion?: string; 
  public get stackableVersion() {
    return this.getStringAttribute('stackable_version');
  }
  public set stackableVersion(value: string) {
    this._stackableVersion = value;
  }
  public resetStackableVersion() {
    this._stackableVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackableVersionInput() {
    return this._stackableVersion;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_selector DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinityToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinityToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_map DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustomToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFileToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#console DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#custom DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#file DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#loggers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggers;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#containers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#max DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#min DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpuToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpuToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#limit DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#runtime_limits DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemoryToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemoryToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#key DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#operator DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#values DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference {
    return new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_expressions DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_labels DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressionsList",
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageData {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#capacity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#selectors DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#data DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageData;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataToTerraform(struct!.data),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cpu DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#memory DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorage;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemory",
    },
    storage: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#logging DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#resources DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResources;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLogging",
    },
    resources: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#enabled DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#max_unavailable DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxUnavailable = value.maxUnavailable;
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

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudget;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
    }
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_selector DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinityToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_map DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#console DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#custom DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#file DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#loggers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#containers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#max DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#min DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#limit DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#runtime_limits DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#key DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#operator DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#values DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference {
    return new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_expressions DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_labels DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList",
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageData {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#capacity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#selectors DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#data DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageData;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataToTerraform(struct!.data),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cpu DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#memory DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorage;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#logging DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#resources DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResources;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cli_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Configuration options that are available for all roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#env_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#replicas DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._replicas = value.replicas;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cli_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Configuration options that are available for all roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#env_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#role_config DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#role_groups DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroups;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role_config: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfig",
    },
    role_groups: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._roleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleConfig = this._roleConfig?.internalValue;
    }
    if (this._roleGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleGroups = this._roleGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._roleConfig.internalValue = undefined;
      this._roleGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._roleConfig.internalValue = value.roleConfig;
      this._roleGroups.internalValue = value.roleGroups;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // role_config - computed: false, optional: true, required: false
  private _roleConfig = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleConfig) {
    this._roleConfig.internalValue = value;
  }
  public resetRoleConfig() {
    this._roleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigInput() {
    return this._roleConfig.internalValue;
  }

  // role_groups - computed: false, optional: false, required: true
  private _roleGroups = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_selector DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinityToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinityToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_map DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustomToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFileToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#console DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#custom DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#file DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#loggers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggers;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#containers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#max DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#min DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpuToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpuToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#limit DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#runtime_limits DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemoryToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemoryToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#key DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#operator DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#values DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference {
    return new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_expressions DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_labels DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressionsList",
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageData {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#capacity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#selectors DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#data DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageData;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataToTerraform(struct!.data),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cpu DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#memory DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorage;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemory",
    },
    storage: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * This field controls which [ListenerClass](https://docs.stackable.tech/home/nightly/listener-operator/listenerclass.html) is used to expose this rolegroup. NameNodes should have a stable ListenerClass, such as 'cluster-internal' or 'external-stable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#listener_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#logging DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#resources DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResources;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    logging: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLogging",
    },
    resources: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._listenerClass = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._listenerClass = value.listenerClass;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // listener_class - computed: false, optional: true, required: false
  private _listenerClass?: string; 
  public get listenerClass() {
    return this.getStringAttribute('listener_class');
  }
  public set listenerClass(value: string) {
    this._listenerClass = value;
  }
  public resetListenerClass() {
    this._listenerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerClassInput() {
    return this._listenerClass;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#enabled DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#max_unavailable DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxUnavailable = value.maxUnavailable;
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

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudget;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
    }
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#node_selector DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinityToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_map DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#level DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#console DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#custom DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#file DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#loggers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#containers DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#max DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#min DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#limit DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#runtime_limits DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#key DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#operator DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#values DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference {
    return new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_expressions DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#match_labels DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList",
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

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageData {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#capacity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#selectors DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#data DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageData;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataToTerraform(struct!.data),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cpu DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#memory DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#storage DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorage;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#affinity DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * This field controls which [ListenerClass](https://docs.stackable.tech/home/nightly/listener-operator/listenerclass.html) is used to expose this rolegroup. NameNodes should have a stable ListenerClass, such as 'cluster-internal' or 'external-stable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#listener_class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#logging DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#resources DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResources;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    logging: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._listenerClass = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._listenerClass = value.listenerClass;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // listener_class - computed: false, optional: true, required: false
  private _listenerClass?: string; 
  public get listenerClass() {
    return this.getStringAttribute('listener_class');
  }
  public set listenerClass(value: string) {
    this._listenerClass = value;
  }
  public resetListenerClass() {
    this._listenerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerClassInput() {
    return this._listenerClass;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cli_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Configuration options that are available for all roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#env_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#replicas DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._replicas = value.replicas;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cli_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Configuration options that are available for all roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#config_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#env_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#pod_overrides DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#role_config DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#role_groups DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroups;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role_config: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfig",
    },
    role_groups: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._roleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleConfig = this._roleConfig?.internalValue;
    }
    if (this._roleGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleGroups = this._roleGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._roleConfig.internalValue = undefined;
      this._roleGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._roleConfig.internalValue = value.roleConfig;
      this._roleGroups.internalValue = value.roleGroups;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // role_config - computed: false, optional: true, required: false
  private _roleConfig = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleConfig) {
    this._roleConfig.internalValue = value;
  }
  public resetRoleConfig() {
    this._roleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigInput() {
    return this._roleConfig.internalValue;
  }

  // role_groups - computed: false, optional: false, required: true
  private _roleGroups = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpec {
  /**
  * Configuration that applies to all roles and role groups. This includes settings for authentication, logging and the ZooKeeper cluster to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cluster_config DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfig;
  /**
  * [Cluster operations](https://docs.stackable.tech/home/nightly/concepts/operations/cluster_operations) properties, allow stopping the product instance as well as pausing reconciliation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#cluster_operation DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#cluster_operation}
  */
  readonly clusterOperation?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperation;
  /**
  * This struct represents a role - e.g. HDFS datanodes or Trino workers. It has a key-value-map containing all the roleGroups that are part of this role. Additionally, there is a 'config', which is configurable at the role *and* roleGroup level. Everything at roleGroup level is merged on top of what is configured on role level. There is also a second form of config, which can only be configured at role level, the 'roleConfig'. You can learn more about this in the [Roles and role group concept documentation](https://docs.stackable.tech/home/nightly/concepts/roles-and-role-groups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#data_nodes DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#data_nodes}
  */
  readonly dataNodes?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodes;
  /**
  * Specify which image to use, the easiest way is to only configure the 'productVersion'. You can also configure a custom image registry to pull from, as well as completely custom images. Consult the [Product image selection documentation](https://docs.stackable.tech/home/nightly/concepts/product_image_selection) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#image DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#image}
  */
  readonly image: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImage;
  /**
  * This struct represents a role - e.g. HDFS datanodes or Trino workers. It has a key-value-map containing all the roleGroups that are part of this role. Additionally, there is a 'config', which is configurable at the role *and* roleGroup level. Everything at roleGroup level is merged on top of what is configured on role level. There is also a second form of config, which can only be configured at role level, the 'roleConfig'. You can learn more about this in the [Roles and role group concept documentation](https://docs.stackable.tech/home/nightly/concepts/roles-and-role-groups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#journal_nodes DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#journal_nodes}
  */
  readonly journalNodes?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodes;
  /**
  * This struct represents a role - e.g. HDFS datanodes or Trino workers. It has a key-value-map containing all the roleGroups that are part of this role. Additionally, there is a 'config', which is configurable at the role *and* roleGroup level. Everything at roleGroup level is merged on top of what is configured on role level. There is also a second form of config, which can only be configured at role level, the 'roleConfig'. You can learn more about this in the [Roles and role group concept documentation](https://docs.stackable.tech/home/nightly/concepts/roles-and-role-groups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#name_nodes DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest#name_nodes}
  */
  readonly nameNodes?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodes;
}

export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_config: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct!.clusterConfig),
    cluster_operation: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct!.clusterOperation),
    data_nodes: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesToTerraform(struct!.dataNodes),
    image: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    journal_nodes: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesToTerraform(struct!.journalNodes),
    name_nodes: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesToTerraform(struct!.nameNodes),
  }
}


export function dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_config: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfig",
    },
    cluster_operation: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct!.clusterOperation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperation",
    },
    data_nodes: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesToHclTerraform(struct!.dataNodes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodes",
    },
    image: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImage",
    },
    journal_nodes: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesToHclTerraform(struct!.journalNodes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodes",
    },
    name_nodes: {
      value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesToHclTerraform(struct!.nameNodes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    if (this._clusterOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterOperation = this._clusterOperation?.internalValue;
    }
    if (this._dataNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNodes = this._dataNodes?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._journalNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.journalNodes = this._journalNodes?.internalValue;
    }
    if (this._nameNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameNodes = this._nameNodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = undefined;
      this._clusterOperation.internalValue = undefined;
      this._dataNodes.internalValue = undefined;
      this._image.internalValue = undefined;
      this._journalNodes.internalValue = undefined;
      this._nameNodes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._clusterOperation.internalValue = value.clusterOperation;
      this._dataNodes.internalValue = value.dataNodes;
      this._image.internalValue = value.image;
      this._journalNodes.internalValue = value.journalNodes;
      this._nameNodes.internalValue = value.nameNodes;
    }
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cluster_operation - computed: false, optional: true, required: false
  private _clusterOperation = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperationOutputReference(this, "cluster_operation");
  public get clusterOperation() {
    return this._clusterOperation;
  }
  public putClusterOperation(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecClusterOperation) {
    this._clusterOperation.internalValue = value;
  }
  public resetClusterOperation() {
    this._clusterOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOperationInput() {
    return this._clusterOperation.internalValue;
  }

  // data_nodes - computed: false, optional: true, required: false
  private _dataNodes = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodesOutputReference(this, "data_nodes");
  public get dataNodes() {
    return this._dataNodes;
  }
  public putDataNodes(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecDataNodes) {
    this._dataNodes.internalValue = value;
  }
  public resetDataNodes() {
    this._dataNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodesInput() {
    return this._dataNodes.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // journal_nodes - computed: false, optional: true, required: false
  private _journalNodes = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodesOutputReference(this, "journal_nodes");
  public get journalNodes() {
    return this._journalNodes;
  }
  public putJournalNodes(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecJournalNodes) {
    this._journalNodes.internalValue = value;
  }
  public resetJournalNodes() {
    this._journalNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get journalNodesInput() {
    return this._journalNodes.internalValue;
  }

  // name_nodes - computed: false, optional: true, required: false
  private _nameNodes = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodesOutputReference(this, "name_nodes");
  public get nameNodes() {
    return this._nameNodes;
  }
  public putNameNodes(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecNameNodes) {
    this._nameNodes.internalValue = value;
  }
  public resetNameNodes() {
    this._nameNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameNodesInput() {
    return this._nameNodes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest k8s_hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest}
*/
export class DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHdfsStackableTechHdfsClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest k8s_hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hdfs_stackable_tech_hdfs_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHdfsStackableTechHdfsClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
