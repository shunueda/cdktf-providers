// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#metadata DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#spec DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpec;
}
export interface DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#annotations DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#labels DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#name DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#namespace DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#name DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#value DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeaderToTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeaderToHclTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeader | cdktf.IResolvable): any {
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

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeader | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#http_header DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#http_header}
  */
  readonly httpHeader?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#path DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#port DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#task_name DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#task_name}
  */
  readonly taskName?: string;
}

export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStructToTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_header: dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeaderToTerraform(struct!.httpHeader),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    task_name: cdktf.stringToTerraform(struct!.taskName),
  }
}


export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStructToHclTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_header: {
      value: dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeader",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    task_name: {
      value: cdktf.stringToHclTerraform(struct!.taskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._taskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskName = this._taskName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpHeader.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._taskName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpHeader.internalValue = value.httpHeader;
      this._path = value.path;
      this._port = value.port;
      this._taskName = value.taskName;
    }
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeaderOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListHttpHeader) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
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

  // task_name - computed: false, optional: true, required: false
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  public resetTaskName() {
    this._taskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }
}

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStructOutputReference {
    return new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#phase DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#phase}
  */
  readonly phase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#task_name DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#task_name}
  */
  readonly taskName?: string;
}

export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStructToTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phase: cdktf.stringToTerraform(struct!.phase),
    task_name: cdktf.stringToTerraform(struct!.taskName),
  }
}


export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStructToHclTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_name: {
      value: cdktf.stringToHclTerraform(struct!.taskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._taskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskName = this._taskName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._phase = undefined;
      this._taskName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._phase = value.phase;
      this._taskName = value.taskName;
    }
  }

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // task_name - computed: false, optional: true, required: false
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  public resetTaskName() {
    this._taskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }
}

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStructOutputReference {
    return new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#port DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#task_name DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#task_name}
  */
  readonly taskName?: string;
}

export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStructToTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    task_name: cdktf.stringToTerraform(struct!.taskName),
  }
}


export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStructToHclTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStruct | cdktf.IResolvable): any {
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
    task_name: {
      value: cdktf.stringToHclTerraform(struct!.taskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._taskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskName = this._taskName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._taskName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._taskName = value.taskName;
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

  // task_name - computed: false, optional: true, required: false
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  public resetTaskName() {
    this._taskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }
}

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStructOutputReference {
    return new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#http_get_list DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#http_get_list}
  */
  readonly httpGetList?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#task_status_list DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#task_status_list}
  */
  readonly taskStatusList?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#tcp_socket_list DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#tcp_socket_list}
  */
  readonly tcpSocketList?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStruct[] | cdktf.IResolvable;
}

export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeToTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_get_list: cdktf.listMapper(dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStructToTerraform, false)(struct!.httpGetList),
    task_status_list: cdktf.listMapper(dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStructToTerraform, false)(struct!.taskStatusList),
    tcp_socket_list: cdktf.listMapper(dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStructToTerraform, false)(struct!.tcpSocketList),
  }
}


export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeToHclTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_get_list: {
      value: cdktf.listMapperHcl(dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStructToHclTerraform, false)(struct!.httpGetList),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStructList",
    },
    task_status_list: {
      value: cdktf.listMapperHcl(dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStructToHclTerraform, false)(struct!.taskStatusList),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStructList",
    },
    tcp_socket_list: {
      value: cdktf.listMapperHcl(dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStructToHclTerraform, false)(struct!.tcpSocketList),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpGetList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetList = this._httpGetList?.internalValue;
    }
    if (this._taskStatusList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskStatusList = this._taskStatusList?.internalValue;
    }
    if (this._tcpSocketList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocketList = this._tcpSocketList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpGetList.internalValue = undefined;
      this._taskStatusList.internalValue = undefined;
      this._tcpSocketList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpGetList.internalValue = value.httpGetList;
      this._taskStatusList.internalValue = value.taskStatusList;
      this._tcpSocketList.internalValue = value.tcpSocketList;
    }
  }

  // http_get_list - computed: false, optional: true, required: false
  private _httpGetList = new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStructList(this, "http_get_list", false);
  public get httpGetList() {
    return this._httpGetList;
  }
  public putHttpGetList(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeHttpGetListStruct[] | cdktf.IResolvable) {
    this._httpGetList.internalValue = value;
  }
  public resetHttpGetList() {
    this._httpGetList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetListInput() {
    return this._httpGetList.internalValue;
  }

  // task_status_list - computed: false, optional: true, required: false
  private _taskStatusList = new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStructList(this, "task_status_list", false);
  public get taskStatusList() {
    return this._taskStatusList;
  }
  public putTaskStatusList(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTaskStatusListStruct[] | cdktf.IResolvable) {
    this._taskStatusList.internalValue = value;
  }
  public resetTaskStatusList() {
    this._taskStatusList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskStatusListInput() {
    return this._taskStatusList.internalValue;
  }

  // tcp_socket_list - computed: false, optional: true, required: false
  private _tcpSocketList = new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStructList(this, "tcp_socket_list", false);
  public get tcpSocketList() {
    return this._tcpSocketList;
  }
  public putTcpSocketList(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeTcpSocketListStruct[] | cdktf.IResolvable) {
    this._tcpSocketList.internalValue = value;
  }
  public resetTcpSocketList() {
    this._tcpSocketList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketListInput() {
    return this._tcpSocketList.internalValue;
  }
}
export interface DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#probe DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#probe}
  */
  readonly probe?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#targets DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#targets}
  */
  readonly targets?: string[];
}

export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnToTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    probe: dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeToTerraform(struct!.probe),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
  }
}


export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnToHclTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    probe: {
      value: dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeToHclTerraform(struct!.probe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbe",
    },
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._probe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probe = this._probe?.internalValue;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._probe.internalValue = undefined;
      this._targets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._probe.internalValue = value.probe;
      this._targets = value.targets;
    }
  }

  // probe - computed: false, optional: true, required: false
  private _probe = new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbeOutputReference(this, "probe");
  public get probe() {
    return this._probe;
  }
  public putProbe(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnProbe) {
    this._probe.internalValue = value;
  }
  public resetProbe() {
    this._probe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }
}
export interface DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#depends_on DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#depends_on}
  */
  readonly dependsOn?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#name DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsToTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depends_on: dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnToTerraform(struct!.dependsOn),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsToHclTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depends_on: {
      value: dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnToHclTerraform(struct!.dependsOn),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOn",
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

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependsOn.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependsOn.internalValue = value.dependsOn;
      this._name = value.name;
    }
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOnOutputReference(this, "depends_on");
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsDependsOn) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
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

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlows[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsOutputReference {
    return new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#flows DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#flows}
  */
  readonly flows?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlows[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#job_retain_policy DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest#job_retain_policy}
  */
  readonly jobRetainPolicy?: string;
}

export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecToTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flows: cdktf.listMapper(dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsToTerraform, false)(struct!.flows),
    job_retain_policy: cdktf.stringToTerraform(struct!.jobRetainPolicy),
  }
}


export function dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flows: {
      value: cdktf.listMapperHcl(dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsToHclTerraform, false)(struct!.flows),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsList",
    },
    job_retain_policy: {
      value: cdktf.stringToHclTerraform(struct!.jobRetainPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flows = this._flows?.internalValue;
    }
    if (this._jobRetainPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobRetainPolicy = this._jobRetainPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flows.internalValue = undefined;
      this._jobRetainPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flows.internalValue = value.flows;
      this._jobRetainPolicy = value.jobRetainPolicy;
    }
  }

  // flows - computed: false, optional: true, required: false
  private _flows = new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlowsList(this, "flows", false);
  public get flows() {
    return this._flows;
  }
  public putFlows(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecFlows[] | cdktf.IResolvable) {
    this._flows.internalValue = value;
  }
  public resetFlows() {
    this._flows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowsInput() {
    return this._flows.internalValue;
  }

  // job_retain_policy - computed: false, optional: true, required: false
  private _jobRetainPolicy?: string; 
  public get jobRetainPolicy() {
    return this.getStringAttribute('job_retain_policy');
  }
  public set jobRetainPolicy(value: string) {
    this._jobRetainPolicy = value;
  }
  public resetJobRetainPolicy() {
    this._jobRetainPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobRetainPolicyInput() {
    return this._jobRetainPolicy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest k8s_flow_volcano_sh_job_flow_v1alpha1_manifest}
*/
export class DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_flow_volcano_sh_job_flow_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFlowVolcanoShJobFlowV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_flow_volcano_sh_job_flow_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flow_volcano_sh_job_flow_v1alpha1_manifest k8s_flow_volcano_sh_job_flow_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_flow_volcano_sh_job_flow_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpec) {
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
      metadata: dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlowVolcanoShJobFlowV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
