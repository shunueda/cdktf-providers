// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#metadata DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadata;
  /**
  * An HBase cluster stacklet. This resource is managed by the Stackable operator for Apache HBase. Find more information on how to use it and the resources that the operator generates in the [operator documentation](https://docs.stackable.tech/home/nightly/hbase/). The CRD contains three roles: 'masters', 'regionServers' and 'restServers'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#spec DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpec;
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#annotations DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#labels DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#name DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#namespace DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos {
  /**
  * Name of the SecretClass providing the keytab for the HBase services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#secret_class DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthentication {
  /**
  * Kerberos configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#kerberos DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#kerberos}
  */
  readonly kerberos: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos;
  /**
  * Name of the SecretClass providing the tls certificates for the WebUIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#tls_secret_class DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#tls_secret_class}
  */
  readonly tlsSecretClass?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosToTerraform(struct!.kerberos),
    tls_secret_class: cdktf.stringToTerraform(struct!.tlsSecretClass),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosToHclTerraform(struct!.kerberos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable | undefined) {
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
  private _kerberos = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationKerberos) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa {
  /**
  * The [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) for the OPA stacklet that should be used for authorization requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_map_name DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_map_name}
  */
  readonly configMapName: string;
  /**
  * The name of the Rego package containing the Rego rules for the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#package DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#package}
  */
  readonly package?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_name: cdktf.stringToTerraform(struct!.configMapName),
    package: cdktf.stringToTerraform(struct!.package),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorization {
  /**
  * Configure the OPA stacklet [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) and the name of the Rego package containing your authorization rules. Consult the [OPA authorization documentation](https://docs.stackable.tech/home/nightly/concepts/opa) to learn how to deploy Rego authorization rules with OPA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#opa DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#opa}
  */
  readonly opa: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opa: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaToTerraform(struct!.opa),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opa: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaToHclTerraform(struct!.opa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorization | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorization | cdktf.IResolvable | undefined) {
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
  private _opa = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpaOutputReference(this, "opa");
  public get opa() {
    return this._opa;
  }
  public putOpa(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOpa) {
    this._opa.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opaInput() {
    return this._opa.internalValue;
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfig {
  /**
  * Settings related to user [authentication](https://docs.stackable.tech/home/nightly/usage-guide/security).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#authentication DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#authentication}
  */
  readonly authentication?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#authorization DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#authorization}
  */
  readonly authorization?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorization;
  /**
  * Name of the [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) for an HDFS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hdfs_config_map_name DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hdfs_config_map_name}
  */
  readonly hdfsConfigMapName: string;
  /**
  * This field controls which type of Service the Operator creates for this HbaseCluster: * cluster-internal: Use a ClusterIP service * external-unstable: Use a NodePort service This is a temporary solution with the goal to keep yaml manifests forward compatible. In the future, this setting will control which [ListenerClass](https://docs.stackable.tech/home/nightly/listener-operator/listenerclass.html) will be used to expose the service, and ListenerClass names will stay the same, allowing for a non-breaking change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#listener_class DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * Name of the Vector aggregator [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery). It must contain the key 'ADDRESS' with the address of the Vector aggregator. Follow the [logging tutorial](https://docs.stackable.tech/home/nightly/tutorials/logging-vector-aggregator) to learn how to configure log aggregation with Vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#vector_aggregator_config_map_name DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#vector_aggregator_config_map_name}
  */
  readonly vectorAggregatorConfigMapName?: string;
  /**
  * Name of the [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) for a ZooKeeper cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#zookeeper_config_map_name DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#zookeeper_config_map_name}
  */
  readonly zookeeperConfigMapName: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToTerraform(struct!.authentication),
    authorization: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationToTerraform(struct!.authorization),
    hdfs_config_map_name: cdktf.stringToTerraform(struct!.hdfsConfigMapName),
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    vector_aggregator_config_map_name: cdktf.stringToTerraform(struct!.vectorAggregatorConfigMapName),
    zookeeper_config_map_name: cdktf.stringToTerraform(struct!.zookeeperConfigMapName),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthentication",
    },
    authorization: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorization",
    },
    hdfs_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.hdfsConfigMapName),
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined {
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
    if (this._hdfsConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfsConfigMapName = this._hdfsConfigMapName;
    }
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._authorization.internalValue = undefined;
      this._hdfsConfigMapName = undefined;
      this._listenerClass = undefined;
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
      this._hdfsConfigMapName = value.hdfsConfigMapName;
      this._listenerClass = value.listenerClass;
      this._vectorAggregatorConfigMapName = value.vectorAggregatorConfigMapName;
      this._zookeeperConfigMapName = value.zookeeperConfigMapName;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthentication) {
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
  private _authorization = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // hdfs_config_map_name - computed: false, optional: false, required: true
  private _hdfsConfigMapName?: string; 
  public get hdfsConfigMapName() {
    return this.getStringAttribute('hdfs_config_map_name');
  }
  public set hdfsConfigMapName(value: string) {
    this._hdfsConfigMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsConfigMapNameInput() {
    return this._hdfsConfigMapName;
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperation {
  /**
  * Flag to stop cluster reconciliation by the operator. This means that all changes in the custom resource spec are ignored until this flag is set to false or removed. The operator will however still watch the deployed resources at the time and update the custom resource status field. If applied at the same time with 'stopped', 'reconciliationPaused' will take precedence over 'stopped' and stop the reconciliation immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#reconciliation_paused DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#reconciliation_paused}
  */
  readonly reconciliationPaused?: boolean | cdktf.IResolvable;
  /**
  * Flag to stop the cluster. This means all deployed resources (e.g. Services, StatefulSets, ConfigMaps) are kept but all deployed Pods (e.g. replicas from a StatefulSet) are scaled to 0 and therefore stopped and removed. If applied at the same time with 'reconciliationPaused', the latter will pause reconciliation and 'stopped' will take no effect until 'reconciliationPaused' is set to false or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#stopped DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciliation_paused: cdktf.booleanToTerraform(struct!.reconciliationPaused),
    stopped: cdktf.booleanToTerraform(struct!.stopped),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#name DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImage {
  /**
  * Overwrite the docker image. Specify the full docker image name, e.g. 'docker.stackable.tech/stackable/superset:1.4.1-stackable2.1.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#custom DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: string;
  /**
  * Version of the product, e.g. '1.4.1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#product_version DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#product_version}
  */
  readonly productVersion?: string;
  /**
  * [Pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) used when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pull_policy DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * [Image pull secrets](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) to pull images from a private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pull_secrets DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Name of the docker repo, e.g. 'docker.stackable.tech/stackable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#repo DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#repo}
  */
  readonly repo?: string;
  /**
  * Stackable version of the product, e.g. '23.4', '23.4.1' or '0.0.0-dev'. If not specified, the operator will use its own version, e.g. '23.4.1'. When using a nightly operator or a pr version, it will use the nightly '0.0.0-dev' image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#stackable_version DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#stackable_version}
  */
  readonly stackableVersion?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    product_version: cdktf.stringToTerraform(struct!.productVersion),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repo: cdktf.stringToTerraform(struct!.repo),
    stackable_version: cdktf.stringToTerraform(struct!.stackableVersion),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecretsList",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
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
  private _pullSecrets = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_selector DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinityToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinityToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_map DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustomToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFileToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#console DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#custom DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#file DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#loggers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggers;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersCustom) {
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
  private _file = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersLoggers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#containers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainers",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingContainers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#max DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#min DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpuToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpuToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#limit DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#runtime_limits DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemoryToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemoryToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cpu DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#memory DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#storage DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResources | cdktf.IResolvable | undefined {
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
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
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
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesCpu) {
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
  private _memory = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesMemory) {
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
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_opts DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_opts}
  */
  readonly hbaseOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_rootdir DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_rootdir}
  */
  readonly hbaseRootdir?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#logging DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#resources DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResources;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    hbase_opts: cdktf.stringToTerraform(struct!.hbaseOpts),
    hbase_rootdir: cdktf.stringToTerraform(struct!.hbaseRootdir),
    logging: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_opts: {
      value: cdktf.stringToHclTerraform(struct!.hbaseOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_rootdir: {
      value: cdktf.stringToHclTerraform(struct!.hbaseRootdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLogging",
    },
    resources: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfig | cdktf.IResolvable | undefined {
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
    if (this._hbaseOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseOpts = this._hbaseOpts;
    }
    if (this._hbaseRootdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseRootdir = this._hbaseRootdir;
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._hbaseOpts = undefined;
      this._hbaseRootdir = undefined;
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
      this._hbaseOpts = value.hbaseOpts;
      this._hbaseRootdir = value.hbaseRootdir;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigAffinity) {
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

  // hbase_opts - computed: false, optional: true, required: false
  private _hbaseOpts?: string; 
  public get hbaseOpts() {
    return this.getStringAttribute('hbase_opts');
  }
  public set hbaseOpts(value: string) {
    this._hbaseOpts = value;
  }
  public resetHbaseOpts() {
    this._hbaseOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseOptsInput() {
    return this._hbaseOpts;
  }

  // hbase_rootdir - computed: false, optional: true, required: false
  private _hbaseRootdir?: string; 
  public get hbaseRootdir() {
    return this.getStringAttribute('hbase_rootdir');
  }
  public set hbaseRootdir(value: string) {
    this._hbaseRootdir = value;
  }
  public resetHbaseRootdir() {
    this._hbaseRootdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseRootdirInput() {
    return this._hbaseRootdir;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigLogging) {
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
  private _resources = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigResources) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#enabled DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#max_unavailable DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudget;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfig | cdktf.IResolvable | undefined) {
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
  private _podDisruptionBudget = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigPodDisruptionBudget) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_selector DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinityToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_map DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#console DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#custom DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#file DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#loggers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersCustom) {
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
  private _file = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersLoggers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#containers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainers",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingContainers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#max DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#min DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#limit DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#runtime_limits DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cpu DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#memory DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#storage DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResources | cdktf.IResolvable | undefined {
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
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
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
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesCpu) {
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
  private _memory = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesMemory) {
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
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_opts DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_opts}
  */
  readonly hbaseOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_rootdir DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_rootdir}
  */
  readonly hbaseRootdir?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#logging DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#resources DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResources;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    hbase_opts: cdktf.stringToTerraform(struct!.hbaseOpts),
    hbase_rootdir: cdktf.stringToTerraform(struct!.hbaseRootdir),
    logging: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_opts: {
      value: cdktf.stringToHclTerraform(struct!.hbaseOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_rootdir: {
      value: cdktf.stringToHclTerraform(struct!.hbaseRootdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfig | cdktf.IResolvable | undefined {
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
    if (this._hbaseOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseOpts = this._hbaseOpts;
    }
    if (this._hbaseRootdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseRootdir = this._hbaseRootdir;
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._hbaseOpts = undefined;
      this._hbaseRootdir = undefined;
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
      this._hbaseOpts = value.hbaseOpts;
      this._hbaseRootdir = value.hbaseRootdir;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigAffinity) {
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

  // hbase_opts - computed: false, optional: true, required: false
  private _hbaseOpts?: string; 
  public get hbaseOpts() {
    return this.getStringAttribute('hbase_opts');
  }
  public set hbaseOpts(value: string) {
    this._hbaseOpts = value;
  }
  public resetHbaseOpts() {
    this._hbaseOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseOptsInput() {
    return this._hbaseOpts;
  }

  // hbase_rootdir - computed: false, optional: true, required: false
  private _hbaseRootdir?: string; 
  public get hbaseRootdir() {
    return this.getStringAttribute('hbase_rootdir');
  }
  public set hbaseRootdir(value: string) {
    this._hbaseRootdir = value;
  }
  public resetHbaseRootdir() {
    this._hbaseRootdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseRootdirInput() {
    return this._hbaseRootdir;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigLogging) {
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
  private _resources = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigResources) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cli_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#env_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#replicas DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroups | cdktf.IResolvable): any {
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
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfig",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroups | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsConfig) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMasters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cli_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#env_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#role_config DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#role_groups DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroups;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMasters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMasters | cdktf.IResolvable): any {
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
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfig",
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
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfig",
    },
    role_groups: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMasters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMasters | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersConfig) {
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
  private _roleConfig = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleConfig) {
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
  private _roleGroups = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_selector DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinityToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinityToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_map DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustomToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFileToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#console DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#custom DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#file DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#loggers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggers;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersCustom) {
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
  private _file = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersLoggers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#containers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainers",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingContainers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#max DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#min DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpuToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpuToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#limit DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#runtime_limits DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemoryToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemoryToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cpu DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#memory DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#storage DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResources | cdktf.IResolvable | undefined {
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
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
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
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesCpu) {
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
  private _memory = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesMemory) {
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
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_opts DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_opts}
  */
  readonly hbaseOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_rootdir DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_rootdir}
  */
  readonly hbaseRootdir?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#logging DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#resources DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResources;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    hbase_opts: cdktf.stringToTerraform(struct!.hbaseOpts),
    hbase_rootdir: cdktf.stringToTerraform(struct!.hbaseRootdir),
    logging: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_opts: {
      value: cdktf.stringToHclTerraform(struct!.hbaseOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_rootdir: {
      value: cdktf.stringToHclTerraform(struct!.hbaseRootdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLogging",
    },
    resources: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfig | cdktf.IResolvable | undefined {
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
    if (this._hbaseOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseOpts = this._hbaseOpts;
    }
    if (this._hbaseRootdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseRootdir = this._hbaseRootdir;
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._hbaseOpts = undefined;
      this._hbaseRootdir = undefined;
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
      this._hbaseOpts = value.hbaseOpts;
      this._hbaseRootdir = value.hbaseRootdir;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigAffinity) {
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

  // hbase_opts - computed: false, optional: true, required: false
  private _hbaseOpts?: string; 
  public get hbaseOpts() {
    return this.getStringAttribute('hbase_opts');
  }
  public set hbaseOpts(value: string) {
    this._hbaseOpts = value;
  }
  public resetHbaseOpts() {
    this._hbaseOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseOptsInput() {
    return this._hbaseOpts;
  }

  // hbase_rootdir - computed: false, optional: true, required: false
  private _hbaseRootdir?: string; 
  public get hbaseRootdir() {
    return this.getStringAttribute('hbase_rootdir');
  }
  public set hbaseRootdir(value: string) {
    this._hbaseRootdir = value;
  }
  public resetHbaseRootdir() {
    this._hbaseRootdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseRootdirInput() {
    return this._hbaseRootdir;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigLogging) {
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
  private _resources = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigResources) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#enabled DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#max_unavailable DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudget;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfig | cdktf.IResolvable | undefined) {
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
  private _podDisruptionBudget = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigPodDisruptionBudget) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_selector DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinityToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_map DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#console DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#custom DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#file DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#loggers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersCustom) {
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
  private _file = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersLoggers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#containers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainers",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingContainers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#max DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#min DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#limit DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#runtime_limits DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cpu DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#memory DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#storage DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResources | cdktf.IResolvable | undefined {
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
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
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
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesCpu) {
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
  private _memory = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesMemory) {
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
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_opts DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_opts}
  */
  readonly hbaseOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_rootdir DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_rootdir}
  */
  readonly hbaseRootdir?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#logging DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#resources DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResources;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    hbase_opts: cdktf.stringToTerraform(struct!.hbaseOpts),
    hbase_rootdir: cdktf.stringToTerraform(struct!.hbaseRootdir),
    logging: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_opts: {
      value: cdktf.stringToHclTerraform(struct!.hbaseOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_rootdir: {
      value: cdktf.stringToHclTerraform(struct!.hbaseRootdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfig | cdktf.IResolvable | undefined {
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
    if (this._hbaseOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseOpts = this._hbaseOpts;
    }
    if (this._hbaseRootdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseRootdir = this._hbaseRootdir;
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._hbaseOpts = undefined;
      this._hbaseRootdir = undefined;
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
      this._hbaseOpts = value.hbaseOpts;
      this._hbaseRootdir = value.hbaseRootdir;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigAffinity) {
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

  // hbase_opts - computed: false, optional: true, required: false
  private _hbaseOpts?: string; 
  public get hbaseOpts() {
    return this.getStringAttribute('hbase_opts');
  }
  public set hbaseOpts(value: string) {
    this._hbaseOpts = value;
  }
  public resetHbaseOpts() {
    this._hbaseOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseOptsInput() {
    return this._hbaseOpts;
  }

  // hbase_rootdir - computed: false, optional: true, required: false
  private _hbaseRootdir?: string; 
  public get hbaseRootdir() {
    return this.getStringAttribute('hbase_rootdir');
  }
  public set hbaseRootdir(value: string) {
    this._hbaseRootdir = value;
  }
  public resetHbaseRootdir() {
    this._hbaseRootdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseRootdirInput() {
    return this._hbaseRootdir;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigLogging) {
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
  private _resources = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigResources) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cli_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#env_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#replicas DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroups | cdktf.IResolvable): any {
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
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfig",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroups | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsConfig) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cli_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#env_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#role_config DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#role_groups DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroups;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServers | cdktf.IResolvable): any {
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
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfig",
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
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfig",
    },
    role_groups: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServers | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersConfig) {
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
  private _roleConfig = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleConfig) {
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
  private _roleGroups = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_selector DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinityToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinityToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_map DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustomToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFileToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#console DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#custom DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#file DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#loggers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggers;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersCustom) {
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
  private _file = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersLoggers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#containers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainers",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingContainers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#max DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#min DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpuToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpuToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#limit DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#runtime_limits DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemoryToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemoryToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cpu DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#memory DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#storage DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResources | cdktf.IResolvable | undefined {
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
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
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
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesCpu) {
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
  private _memory = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesMemory) {
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
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_opts DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_opts}
  */
  readonly hbaseOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_rootdir DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_rootdir}
  */
  readonly hbaseRootdir?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#logging DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#resources DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResources;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    hbase_opts: cdktf.stringToTerraform(struct!.hbaseOpts),
    hbase_rootdir: cdktf.stringToTerraform(struct!.hbaseRootdir),
    logging: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_opts: {
      value: cdktf.stringToHclTerraform(struct!.hbaseOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_rootdir: {
      value: cdktf.stringToHclTerraform(struct!.hbaseRootdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLogging",
    },
    resources: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfig | cdktf.IResolvable | undefined {
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
    if (this._hbaseOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseOpts = this._hbaseOpts;
    }
    if (this._hbaseRootdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseRootdir = this._hbaseRootdir;
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._hbaseOpts = undefined;
      this._hbaseRootdir = undefined;
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
      this._hbaseOpts = value.hbaseOpts;
      this._hbaseRootdir = value.hbaseRootdir;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigAffinity) {
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

  // hbase_opts - computed: false, optional: true, required: false
  private _hbaseOpts?: string; 
  public get hbaseOpts() {
    return this.getStringAttribute('hbase_opts');
  }
  public set hbaseOpts(value: string) {
    this._hbaseOpts = value;
  }
  public resetHbaseOpts() {
    this._hbaseOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseOptsInput() {
    return this._hbaseOpts;
  }

  // hbase_rootdir - computed: false, optional: true, required: false
  private _hbaseRootdir?: string; 
  public get hbaseRootdir() {
    return this.getStringAttribute('hbase_rootdir');
  }
  public set hbaseRootdir(value: string) {
    this._hbaseRootdir = value;
  }
  public resetHbaseRootdir() {
    this._hbaseRootdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseRootdirInput() {
    return this._hbaseRootdir;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigLogging) {
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
  private _resources = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigResources) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#enabled DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#max_unavailable DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudget;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfig | cdktf.IResolvable | undefined) {
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
  private _podDisruptionBudget = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigPodDisruptionBudget) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#node_selector DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinityToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_map DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#level DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#console DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#custom DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#file DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#loggers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
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
  private _console = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersConsole) {
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
  private _custom = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersCustom) {
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
  private _file = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersFile) {
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
  private _loggers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersLoggers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#containers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#enable_vector_agent DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainers",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingContainers) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#max DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#min DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#limit DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#runtime_limits DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cpu DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#memory DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#storage DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResources | cdktf.IResolvable | undefined {
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
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
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
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesCpu) {
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
  private _memory = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesMemory) {
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
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#affinity DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_opts DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_opts}
  */
  readonly hbaseOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#hbase_rootdir DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#hbase_rootdir}
  */
  readonly hbaseRootdir?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#logging DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#resources DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResources;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    hbase_opts: cdktf.stringToTerraform(struct!.hbaseOpts),
    hbase_rootdir: cdktf.stringToTerraform(struct!.hbaseRootdir),
    logging: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_opts: {
      value: cdktf.stringToHclTerraform(struct!.hbaseOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_rootdir: {
      value: cdktf.stringToHclTerraform(struct!.hbaseRootdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfig | cdktf.IResolvable | undefined {
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
    if (this._hbaseOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseOpts = this._hbaseOpts;
    }
    if (this._hbaseRootdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseRootdir = this._hbaseRootdir;
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._hbaseOpts = undefined;
      this._hbaseRootdir = undefined;
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
      this._hbaseOpts = value.hbaseOpts;
      this._hbaseRootdir = value.hbaseRootdir;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigAffinity) {
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

  // hbase_opts - computed: false, optional: true, required: false
  private _hbaseOpts?: string; 
  public get hbaseOpts() {
    return this.getStringAttribute('hbase_opts');
  }
  public set hbaseOpts(value: string) {
    this._hbaseOpts = value;
  }
  public resetHbaseOpts() {
    this._hbaseOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseOptsInput() {
    return this._hbaseOpts;
  }

  // hbase_rootdir - computed: false, optional: true, required: false
  private _hbaseRootdir?: string; 
  public get hbaseRootdir() {
    return this.getStringAttribute('hbase_rootdir');
  }
  public set hbaseRootdir(value: string) {
    this._hbaseRootdir = value;
  }
  public resetHbaseRootdir() {
    this._hbaseRootdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseRootdirInput() {
    return this._hbaseRootdir;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigLogging) {
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
  private _resources = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigResources) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cli_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#env_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#replicas DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroups | cdktf.IResolvable): any {
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
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfig",
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

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroups | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsConfig) {
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
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cli_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#config_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#env_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#pod_overrides DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#role_config DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#role_groups DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroups;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServers | cdktf.IResolvable): any {
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
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfig",
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
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfig",
    },
    role_groups: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServers | cdktf.IResolvable | undefined) {
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
  private _config = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersConfig) {
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
  private _roleConfig = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleConfig) {
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
  private _roleGroups = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpec {
  /**
  * Configuration that applies to all roles and role groups. This includes settings for logging, ZooKeeper and HDFS connection, among other things.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cluster_config DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfig;
  /**
  * [Cluster operations](https://docs.stackable.tech/home/nightly/concepts/operations/cluster_operations) properties, allow stopping the product instance as well as pausing reconciliation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#cluster_operation DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#cluster_operation}
  */
  readonly clusterOperation?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperation;
  /**
  * Specify which image to use, the easiest way is to only configure the 'productVersion'. You can also configure a custom image registry to pull from, as well as completely custom images. Consult the [Product image selection documentation](https://docs.stackable.tech/home/nightly/concepts/product_image_selection) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#image DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#image}
  */
  readonly image: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImage;
  /**
  * The HBase master process is responsible for assigning regions to region servers and manages the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#masters DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#masters}
  */
  readonly masters?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMasters;
  /**
  * Region servers hold the data and handle requests from clients for their region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#region_servers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#region_servers}
  */
  readonly regionServers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServers;
  /**
  * Rest servers provide a REST API to interact with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#rest_servers DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest#rest_servers}
  */
  readonly restServers?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServers;
}

export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_config: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct!.clusterConfig),
    cluster_operation: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct!.clusterOperation),
    image: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    masters: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersToTerraform(struct!.masters),
    region_servers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersToTerraform(struct!.regionServers),
    rest_servers: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersToTerraform(struct!.restServers),
  }
}


export function dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_config: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfig",
    },
    cluster_operation: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct!.clusterOperation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperation",
    },
    image: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImage",
    },
    masters: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersToHclTerraform(struct!.masters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMasters",
    },
    region_servers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersToHclTerraform(struct!.regionServers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServers",
    },
    rest_servers: {
      value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersToHclTerraform(struct!.restServers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._masters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masters = this._masters?.internalValue;
    }
    if (this._regionServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionServers = this._regionServers?.internalValue;
    }
    if (this._restServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restServers = this._restServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = undefined;
      this._clusterOperation.internalValue = undefined;
      this._image.internalValue = undefined;
      this._masters.internalValue = undefined;
      this._regionServers.internalValue = undefined;
      this._restServers.internalValue = undefined;
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
      this._image.internalValue = value.image;
      this._masters.internalValue = value.masters;
      this._regionServers.internalValue = value.regionServers;
      this._restServers.internalValue = value.restServers;
    }
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cluster_operation - computed: false, optional: true, required: false
  private _clusterOperation = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperationOutputReference(this, "cluster_operation");
  public get clusterOperation() {
    return this._clusterOperation;
  }
  public putClusterOperation(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecClusterOperation) {
    this._clusterOperation.internalValue = value;
  }
  public resetClusterOperation() {
    this._clusterOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOperationInput() {
    return this._clusterOperation.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // masters - computed: false, optional: true, required: false
  private _masters = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMastersOutputReference(this, "masters");
  public get masters() {
    return this._masters;
  }
  public putMasters(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecMasters) {
    this._masters.internalValue = value;
  }
  public resetMasters() {
    this._masters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mastersInput() {
    return this._masters.internalValue;
  }

  // region_servers - computed: false, optional: true, required: false
  private _regionServers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServersOutputReference(this, "region_servers");
  public get regionServers() {
    return this._regionServers;
  }
  public putRegionServers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRegionServers) {
    this._regionServers.internalValue = value;
  }
  public resetRegionServers() {
    this._regionServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionServersInput() {
    return this._regionServers.internalValue;
  }

  // rest_servers - computed: false, optional: true, required: false
  private _restServers = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServersOutputReference(this, "rest_servers");
  public get restServers() {
    return this._restServers;
  }
  public putRestServers(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecRestServers) {
    this._restServers.internalValue = value;
  }
  public resetRestServers() {
    this._restServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restServersInput() {
    return this._restServers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest k8s_hbase_stackable_tech_hbase_cluster_v1alpha1_manifest}
*/
export class DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hbase_stackable_tech_hbase_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHbaseStackableTechHbaseClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hbase_stackable_tech_hbase_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hbase_stackable_tech_hbase_cluster_v1alpha1_manifest k8s_hbase_stackable_tech_hbase_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hbase_stackable_tech_hbase_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHbaseStackableTechHbaseClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
