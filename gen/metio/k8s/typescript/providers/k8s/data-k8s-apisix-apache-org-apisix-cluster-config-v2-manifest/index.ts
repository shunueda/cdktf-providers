// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApisixApacheOrgApisixClusterConfigV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#metadata DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#metadata}
  */
  readonly metadata: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#spec DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#spec}
  */
  readonly spec?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpec;
}
export interface DataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#annotations DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#labels DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#name DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadataToTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadataToHclTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdmin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#admin_key DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#admin_key}
  */
  readonly adminKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#base_url DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#base_url}
  */
  readonly baseUrl: string;
}

export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdminToTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_key: cdktf.stringToTerraform(struct!.adminKey),
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
  }
}


export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdminToHclTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_key: {
      value: cdktf.stringToHclTerraform(struct!.adminKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdminOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdmin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminKey = this._adminKey;
    }
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdmin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminKey = undefined;
      this._baseUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminKey = value.adminKey;
      this._baseUrl = value.baseUrl;
    }
  }

  // admin_key - computed: false, optional: true, required: false
  private _adminKey?: string; 
  public get adminKey() {
    return this.getStringAttribute('admin_key');
  }
  public set adminKey(value: string) {
    this._adminKey = value;
  }
  public resetAdminKey() {
    this._adminKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminKeyInput() {
    return this._adminKey;
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }
}
export interface DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#enable DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#prefer_name DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#prefer_name}
  */
  readonly preferName?: boolean | cdktf.IResolvable;
}

export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheusToTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    prefer_name: cdktf.booleanToTerraform(struct!.preferName),
  }
}


export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheusToHclTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheus | cdktf.IResolvable): any {
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
    prefer_name: {
      value: cdktf.booleanToHclTerraform(struct!.preferName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._preferName !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferName = this._preferName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._preferName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._preferName = value.preferName;
    }
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

  // prefer_name - computed: false, optional: true, required: false
  private _preferName?: boolean | cdktf.IResolvable; 
  public get preferName() {
    return this.getBooleanAttribute('prefer_name');
  }
  public set preferName(value: boolean | cdktf.IResolvable) {
    this._preferName = value;
  }
  public resetPreferName() {
    this._preferName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferNameInput() {
    return this._preferName;
  }
}
export interface DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#enable DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#sample_ratio DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#sample_ratio}
  */
  readonly sampleRatio?: number;
}

export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalkingToTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sample_ratio: cdktf.numberToTerraform(struct!.sampleRatio),
  }
}


export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalkingToHclTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalking | cdktf.IResolvable): any {
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
    sample_ratio: {
      value: cdktf.numberToHclTerraform(struct!.sampleRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._sampleRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRatio = this._sampleRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._sampleRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._sampleRatio = value.sampleRatio;
    }
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

  // sample_ratio - computed: false, optional: true, required: false
  private _sampleRatio?: number; 
  public get sampleRatio() {
    return this.getNumberAttribute('sample_ratio');
  }
  public set sampleRatio(value: number) {
    this._sampleRatio = value;
  }
  public resetSampleRatio() {
    this._sampleRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRatioInput() {
    return this._sampleRatio;
  }
}
export interface DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#prometheus DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#prometheus}
  */
  readonly prometheus?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#skywalking DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#skywalking}
  */
  readonly skywalking?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalking;
}

export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringToTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prometheus: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheusToTerraform(struct!.prometheus),
    skywalking: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalkingToTerraform(struct!.skywalking),
  }
}


export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringToHclTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prometheus: {
      value: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheus",
    },
    skywalking: {
      value: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalkingToHclTerraform(struct!.skywalking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalking",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._skywalking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skywalking = this._skywalking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prometheus.internalValue = undefined;
      this._skywalking.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prometheus.internalValue = value.prometheus;
      this._skywalking.internalValue = value.skywalking;
    }
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // skywalking - computed: false, optional: true, required: false
  private _skywalking = new DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalkingOutputReference(this, "skywalking");
  public get skywalking() {
    return this._skywalking;
  }
  public putSkywalking(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringSkywalking) {
    this._skywalking.internalValue = value;
  }
  public resetSkywalking() {
    this._skywalking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skywalkingInput() {
    return this._skywalking.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#admin DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#admin}
  */
  readonly admin?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdmin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#ingress_class_name DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#monitoring DataK8SApisixApacheOrgApisixClusterConfigV2Manifest#monitoring}
  */
  readonly monitoring?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoring;
}

export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecToTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdminToTerraform(struct!.admin),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    monitoring: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringToTerraform(struct!.monitoring),
  }
}


export function dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecToHclTerraform(struct?: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin: {
      value: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdminToHclTerraform(struct!.admin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdmin",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring: {
      value: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin?.internalValue;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admin.internalValue = undefined;
      this._ingressClassName = undefined;
      this._monitoring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admin.internalValue = value.admin;
      this._ingressClassName = value.ingressClassName;
      this._monitoring.internalValue = value.monitoring;
    }
  }

  // admin - computed: false, optional: true, required: false
  private _admin = new DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdminOutputReference(this, "admin");
  public get admin() {
    return this._admin;
  }
  public putAdmin(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecAdmin) {
    this._admin.internalValue = value;
  }
  public resetAdmin() {
    this._admin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin.internalValue;
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

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest k8s_apisix_apache_org_apisix_cluster_config_v2_manifest}
*/
export class DataK8SApisixApacheOrgApisixClusterConfigV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apisix_apache_org_apisix_cluster_config_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApisixApacheOrgApisixClusterConfigV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApisixApacheOrgApisixClusterConfigV2Manifest to import
  * @param importFromId The id of the existing DataK8SApisixApacheOrgApisixClusterConfigV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApisixApacheOrgApisixClusterConfigV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apisix_apache_org_apisix_cluster_config_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apisix_apache_org_apisix_cluster_config_v2_manifest k8s_apisix_apache_org_apisix_cluster_config_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApisixApacheOrgApisixClusterConfigV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apisix_apache_org_apisix_cluster_config_v2_manifest',
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
  private _metadata = new DataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpec) {
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
      metadata: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApisixApacheOrgApisixClusterConfigV2ManifestMetadata",
      },
      spec: {
        value: dataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApisixApacheOrgApisixClusterConfigV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
