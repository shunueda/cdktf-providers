// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#metadata DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadata;
  /**
  * Spec defines the desired state of Flagsmith
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#spec DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpec;
}
export interface DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#annotations DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#labels DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#name DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#namespace DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdb {
  /**
  * Set to true if InfluxDB will be installed. If the value is false InfluxDB will not be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#enabled DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdbToTerraform(struct?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdbToHclTerraform(struct?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdb | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresql {
  /**
  * Set to true if PostgreSQL will be installed. If the value is false PostgreSQL will not be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#enabled DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresqlToTerraform(struct?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresqlToHclTerraform(struct?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresql | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpec {
  /**
  * Configuration how to setup the flagsmith api service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#api DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#api}
  */
  readonly api: { [key: string]: string };
  /**
  * Configuration how to setup the flagsmith frontend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#frontend DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#frontend}
  */
  readonly frontend: { [key: string]: string };
  /**
  * Configuration how to setup the flagsmith hooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#hooks DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#hooks}
  */
  readonly hooks?: { [key: string]: string };
  /**
  * Configuration how to setup the flagsmith InfluxDB service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#influxdb DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#influxdb}
  */
  readonly influxdb?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdb;
  /**
  * Configuration how to setup ingress to the flagsmith if flagsmith is using Kubernetes and not OpenShift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#ingress DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#ingress}
  */
  readonly ingress?: { [key: string]: string };
  /**
  * Configuration how to setup the flagsmith metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#metrics DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#metrics}
  */
  readonly metrics?: { [key: string]: string };
  /**
  * If flagsmith install on OpenShift set value to true otherwise false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#openshift DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#openshift}
  */
  readonly openshift?: boolean | cdktf.IResolvable;
  /**
  * Configuration how to setup the flagsmith postgresql service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#postgresql DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#postgresql}
  */
  readonly postgresql?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresql;
  /**
  * Configuration how to setup the flagsmith kubernetes service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#service DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest#service}
  */
  readonly service?: { [key: string]: string };
}

export function dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.api),
    frontend: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.frontend),
    hooks: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hooks),
    influxdb: dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdbToTerraform(struct!.influxdb),
    ingress: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ingress),
    metrics: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metrics),
    openshift: cdktf.booleanToTerraform(struct!.openshift),
    postgresql: dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresqlToTerraform(struct!.postgresql),
    service: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.service),
  }
}


export function dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.api),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    frontend: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.frontend),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hooks: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hooks),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    influxdb: {
      value: dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdbToHclTerraform(struct!.influxdb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdb",
    },
    ingress: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ingress),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metrics: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metrics),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    openshift: {
      value: cdktf.booleanToHclTerraform(struct!.openshift),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    postgresql: {
      value: dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresqlToHclTerraform(struct!.postgresql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresql",
    },
    service: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.service),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._frontend !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontend = this._frontend;
    }
    if (this._hooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.hooks = this._hooks;
    }
    if (this._influxdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb = this._influxdb?.internalValue;
    }
    if (this._ingress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._openshift !== undefined) {
      hasAnyValues = true;
      internalValueResult.openshift = this._openshift;
    }
    if (this._postgresql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresql = this._postgresql?.internalValue;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._api = undefined;
      this._frontend = undefined;
      this._hooks = undefined;
      this._influxdb.internalValue = undefined;
      this._ingress = undefined;
      this._metrics = undefined;
      this._openshift = undefined;
      this._postgresql.internalValue = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._api = value.api;
      this._frontend = value.frontend;
      this._hooks = value.hooks;
      this._influxdb.internalValue = value.influxdb;
      this._ingress = value.ingress;
      this._metrics = value.metrics;
      this._openshift = value.openshift;
      this._postgresql.internalValue = value.postgresql;
      this._service = value.service;
    }
  }

  // api - computed: false, optional: false, required: true
  private _api?: { [key: string]: string }; 
  public get api() {
    return this.getStringMapAttribute('api');
  }
  public set api(value: { [key: string]: string }) {
    this._api = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // frontend - computed: false, optional: false, required: true
  private _frontend?: { [key: string]: string }; 
  public get frontend() {
    return this.getStringMapAttribute('frontend');
  }
  public set frontend(value: { [key: string]: string }) {
    this._frontend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendInput() {
    return this._frontend;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks?: { [key: string]: string }; 
  public get hooks() {
    return this.getStringMapAttribute('hooks');
  }
  public set hooks(value: { [key: string]: string }) {
    this._hooks = value;
  }
  public resetHooks() {
    this._hooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks;
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb = new DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdbOutputReference(this, "influxdb");
  public get influxdb() {
    return this._influxdb;
  }
  public putInfluxdb(value: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecInfluxdb) {
    this._influxdb.internalValue = value;
  }
  public resetInfluxdb() {
    this._influxdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: { [key: string]: string }; 
  public get ingress() {
    return this.getStringMapAttribute('ingress');
  }
  public set ingress(value: { [key: string]: string }) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics?: { [key: string]: string }; 
  public get metrics() {
    return this.getStringMapAttribute('metrics');
  }
  public set metrics(value: { [key: string]: string }) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // openshift - computed: false, optional: true, required: false
  private _openshift?: boolean | cdktf.IResolvable; 
  public get openshift() {
    return this.getBooleanAttribute('openshift');
  }
  public set openshift(value: boolean | cdktf.IResolvable) {
    this._openshift = value;
  }
  public resetOpenshift() {
    this._openshift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openshiftInput() {
    return this._openshift;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecPostgresql) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service?: { [key: string]: string }; 
  public get service() {
    return this.getStringMapAttribute('service');
  }
  public set service(value: { [key: string]: string }) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest k8s_charts_flagsmith_com_flagsmith_v1alpha1_manifest}
*/
export class DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_charts_flagsmith_com_flagsmith_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChartsFlagsmithComFlagsmithV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_charts_flagsmith_com_flagsmith_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/charts_flagsmith_com_flagsmith_v1alpha1_manifest k8s_charts_flagsmith_com_flagsmith_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_charts_flagsmith_com_flagsmith_v1alpha1_manifest',
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
  private _metadata = new DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChartsFlagsmithComFlagsmithV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
