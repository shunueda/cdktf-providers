// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SMariadbComGrantV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#metadata DataK8SK8SMariadbComGrantV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SK8SMariadbComGrantV1Alpha1ManifestMetadata;
  /**
  * GrantSpec defines the desired state of Grant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#spec DataK8SK8SMariadbComGrantV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SK8SMariadbComGrantV1Alpha1ManifestSpec;
}
export interface DataK8SK8SMariadbComGrantV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#annotations DataK8SK8SMariadbComGrantV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#labels DataK8SK8SMariadbComGrantV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#name DataK8SK8SMariadbComGrantV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#namespace DataK8SK8SMariadbComGrantV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SMariadbComGrantV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SK8SMariadbComGrantV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SMariadbComGrantV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SK8SMariadbComGrantV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SMariadbComGrantV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComGrantV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SMariadbComGrantV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#name DataK8SK8SMariadbComGrantV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#namespace DataK8SK8SMariadbComGrantV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * WaitForIt indicates whether the controller using this reference should wait for MariaDB to be ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#wait_for_it DataK8SK8SMariadbComGrantV1Alpha1Manifest#wait_for_it}
  */
  readonly waitForIt?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRefToTerraform(struct?: DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    wait_for_it: cdktf.booleanToTerraform(struct!.waitForIt),
  }
}


export function dataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRefToHclTerraform(struct?: DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_for_it: {
      value: cdktf.booleanToHclTerraform(struct!.waitForIt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._waitForIt !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForIt = this._waitForIt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._waitForIt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._waitForIt = value.waitForIt;
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

  // wait_for_it - computed: false, optional: true, required: false
  private _waitForIt?: boolean | cdktf.IResolvable; 
  public get waitForIt() {
    return this.getBooleanAttribute('wait_for_it');
  }
  public set waitForIt(value: boolean | cdktf.IResolvable) {
    this._waitForIt = value;
  }
  public resetWaitForIt() {
    this._waitForIt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForItInput() {
    return this._waitForIt;
  }
}
export interface DataK8SK8SMariadbComGrantV1Alpha1ManifestSpec {
  /**
  * CleanupPolicy defines the behavior for cleaning up a SQL resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#cleanup_policy DataK8SK8SMariadbComGrantV1Alpha1Manifest#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Database to use in the Grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#database DataK8SK8SMariadbComGrantV1Alpha1Manifest#database}
  */
  readonly database?: string;
  /**
  * GrantOption to use in the Grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#grant_option DataK8SK8SMariadbComGrantV1Alpha1Manifest#grant_option}
  */
  readonly grantOption?: boolean | cdktf.IResolvable;
  /**
  * Host to use in the Grant. It can be localhost, an IP or '%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#host DataK8SK8SMariadbComGrantV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * MariaDBRef is a reference to a MariaDB object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#maria_db_ref DataK8SK8SMariadbComGrantV1Alpha1Manifest#maria_db_ref}
  */
  readonly mariaDbRef: DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRef;
  /**
  * Privileges to use in the Grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#privileges DataK8SK8SMariadbComGrantV1Alpha1Manifest#privileges}
  */
  readonly privileges: string[];
  /**
  * RequeueInterval is used to perform requeue reconciliations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#requeue_interval DataK8SK8SMariadbComGrantV1Alpha1Manifest#requeue_interval}
  */
  readonly requeueInterval?: string;
  /**
  * RetryInterval is the interval used to perform retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#retry_interval DataK8SK8SMariadbComGrantV1Alpha1Manifest#retry_interval}
  */
  readonly retryInterval?: string;
  /**
  * Table to use in the Grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#table DataK8SK8SMariadbComGrantV1Alpha1Manifest#table}
  */
  readonly table?: string;
  /**
  * Username to use in the Grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#username DataK8SK8SMariadbComGrantV1Alpha1Manifest#username}
  */
  readonly username: string;
}

export function dataK8SK8SMariadbComGrantV1Alpha1ManifestSpecToTerraform(struct?: DataK8SK8SMariadbComGrantV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    database: cdktf.stringToTerraform(struct!.database),
    grant_option: cdktf.booleanToTerraform(struct!.grantOption),
    host: cdktf.stringToTerraform(struct!.host),
    maria_db_ref: dataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRefToTerraform(struct!.mariaDbRef),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    requeue_interval: cdktf.stringToTerraform(struct!.requeueInterval),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
    table: cdktf.stringToTerraform(struct!.table),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SK8SMariadbComGrantV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SK8SMariadbComGrantV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_option: {
      value: cdktf.booleanToHclTerraform(struct!.grantOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maria_db_ref: {
      value: dataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRefToHclTerraform(struct!.mariaDbRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRef",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    requeue_interval: {
      value: cdktf.stringToHclTerraform(struct!.requeueInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComGrantV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._grantOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantOption = this._grantOption;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._mariaDbRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mariaDbRef = this._mariaDbRef?.internalValue;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._requeueInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requeueInterval = this._requeueInterval;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComGrantV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanupPolicy = undefined;
      this._database = undefined;
      this._grantOption = undefined;
      this._host = undefined;
      this._mariaDbRef.internalValue = undefined;
      this._privileges = undefined;
      this._requeueInterval = undefined;
      this._retryInterval = undefined;
      this._table = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanupPolicy = value.cleanupPolicy;
      this._database = value.database;
      this._grantOption = value.grantOption;
      this._host = value.host;
      this._mariaDbRef.internalValue = value.mariaDbRef;
      this._privileges = value.privileges;
      this._requeueInterval = value.requeueInterval;
      this._retryInterval = value.retryInterval;
      this._table = value.table;
      this._username = value.username;
    }
  }

  // cleanup_policy - computed: false, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // grant_option - computed: false, optional: true, required: false
  private _grantOption?: boolean | cdktf.IResolvable; 
  public get grantOption() {
    return this.getBooleanAttribute('grant_option');
  }
  public set grantOption(value: boolean | cdktf.IResolvable) {
    this._grantOption = value;
  }
  public resetGrantOption() {
    this._grantOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantOptionInput() {
    return this._grantOption;
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

  // maria_db_ref - computed: false, optional: false, required: true
  private _mariaDbRef = new DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRefOutputReference(this, "maria_db_ref");
  public get mariaDbRef() {
    return this._mariaDbRef;
  }
  public putMariaDbRef(value: DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecMariaDbRef) {
    this._mariaDbRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbRefInput() {
    return this._mariaDbRef.internalValue;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return this.getListAttribute('privileges');
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // requeue_interval - computed: false, optional: true, required: false
  private _requeueInterval?: string; 
  public get requeueInterval() {
    return this.getStringAttribute('requeue_interval');
  }
  public set requeueInterval(value: string) {
    this._requeueInterval = value;
  }
  public resetRequeueInterval() {
    this._requeueInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requeueIntervalInput() {
    return this._requeueInterval;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest k8s_k8s_mariadb_com_grant_v1alpha1_manifest}
*/
export class DataK8SK8SMariadbComGrantV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_mariadb_com_grant_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SMariadbComGrantV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SMariadbComGrantV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SK8SMariadbComGrantV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SMariadbComGrantV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_mariadb_com_grant_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/k8s_mariadb_com_grant_v1alpha1_manifest k8s_k8s_mariadb_com_grant_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SMariadbComGrantV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SMariadbComGrantV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_mariadb_com_grant_v1alpha1_manifest',
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
  private _metadata = new DataK8SK8SMariadbComGrantV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SMariadbComGrantV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SMariadbComGrantV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SMariadbComGrantV1Alpha1ManifestSpec) {
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
      metadata: dataK8SK8SMariadbComGrantV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SMariadbComGrantV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SMariadbComGrantV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SMariadbComGrantV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SMariadbComGrantV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SMariadbComGrantV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
