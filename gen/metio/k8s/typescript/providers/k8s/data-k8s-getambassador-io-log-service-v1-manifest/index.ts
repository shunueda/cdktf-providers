// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGetambassadorIoLogServiceV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#metadata DataK8SGetambassadorIoLogServiceV1Manifest#metadata}
  */
  readonly metadata: DataK8SGetambassadorIoLogServiceV1ManifestMetadata;
  /**
  * LogServiceSpec defines the desired state of LogService
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#spec DataK8SGetambassadorIoLogServiceV1Manifest#spec}
  */
  readonly spec?: DataK8SGetambassadorIoLogServiceV1ManifestSpec;
}
export interface DataK8SGetambassadorIoLogServiceV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#annotations DataK8SGetambassadorIoLogServiceV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#labels DataK8SGetambassadorIoLogServiceV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#name DataK8SGetambassadorIoLogServiceV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#namespace DataK8SGetambassadorIoLogServiceV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGetambassadorIoLogServiceV1ManifestMetadataToTerraform(struct?: DataK8SGetambassadorIoLogServiceV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoLogServiceV1ManifestMetadataToHclTerraform(struct?: DataK8SGetambassadorIoLogServiceV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoLogServiceV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoLogServiceV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoLogServiceV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#during_request DataK8SGetambassadorIoLogServiceV1Manifest#during_request}
  */
  readonly duringRequest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#during_response DataK8SGetambassadorIoLogServiceV1Manifest#during_response}
  */
  readonly duringResponse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#during_trailer DataK8SGetambassadorIoLogServiceV1Manifest#during_trailer}
  */
  readonly duringTrailer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#header_name DataK8SGetambassadorIoLogServiceV1Manifest#header_name}
  */
  readonly headerName?: string;
}

export function dataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeadersToTerraform(struct?: DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    during_request: cdktf.booleanToTerraform(struct!.duringRequest),
    during_response: cdktf.booleanToTerraform(struct!.duringResponse),
    during_trailer: cdktf.booleanToTerraform(struct!.duringTrailer),
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function dataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeadersToHclTerraform(struct?: DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    during_request: {
      value: cdktf.booleanToHclTerraform(struct!.duringRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    during_response: {
      value: cdktf.booleanToHclTerraform(struct!.duringResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    during_trailer: {
      value: cdktf.booleanToHclTerraform(struct!.duringTrailer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duringRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.duringRequest = this._duringRequest;
    }
    if (this._duringResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.duringResponse = this._duringResponse;
    }
    if (this._duringTrailer !== undefined) {
      hasAnyValues = true;
      internalValueResult.duringTrailer = this._duringTrailer;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duringRequest = undefined;
      this._duringResponse = undefined;
      this._duringTrailer = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duringRequest = value.duringRequest;
      this._duringResponse = value.duringResponse;
      this._duringTrailer = value.duringTrailer;
      this._headerName = value.headerName;
    }
  }

  // during_request - computed: false, optional: true, required: false
  private _duringRequest?: boolean | cdktf.IResolvable; 
  public get duringRequest() {
    return this.getBooleanAttribute('during_request');
  }
  public set duringRequest(value: boolean | cdktf.IResolvable) {
    this._duringRequest = value;
  }
  public resetDuringRequest() {
    this._duringRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duringRequestInput() {
    return this._duringRequest;
  }

  // during_response - computed: false, optional: true, required: false
  private _duringResponse?: boolean | cdktf.IResolvable; 
  public get duringResponse() {
    return this.getBooleanAttribute('during_response');
  }
  public set duringResponse(value: boolean | cdktf.IResolvable) {
    this._duringResponse = value;
  }
  public resetDuringResponse() {
    this._duringResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duringResponseInput() {
    return this._duringResponse;
  }

  // during_trailer - computed: false, optional: true, required: false
  private _duringTrailer?: boolean | cdktf.IResolvable; 
  public get duringTrailer() {
    return this.getBooleanAttribute('during_trailer');
  }
  public set duringTrailer(value: boolean | cdktf.IResolvable) {
    this._duringTrailer = value;
  }
  public resetDuringTrailer() {
    this._duringTrailer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duringTrailerInput() {
    return this._duringTrailer;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}

export class DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeadersOutputReference {
    return new DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#additional_log_headers DataK8SGetambassadorIoLogServiceV1Manifest#additional_log_headers}
  */
  readonly additionalLogHeaders?: DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeaders[] | cdktf.IResolvable;
}

export function dataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigToTerraform(struct?: DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_log_headers: cdktf.listMapper(dataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeadersToTerraform, false)(struct!.additionalLogHeaders),
  }
}


export function dataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigToHclTerraform(struct?: DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_log_headers: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeadersToHclTerraform, false)(struct!.additionalLogHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLogHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLogHeaders = this._additionalLogHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalLogHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalLogHeaders.internalValue = value.additionalLogHeaders;
    }
  }

  // additional_log_headers - computed: false, optional: true, required: false
  private _additionalLogHeaders = new DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeadersList(this, "additional_log_headers", false);
  public get additionalLogHeaders() {
    return this._additionalLogHeaders;
  }
  public putAdditionalLogHeaders(value: DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigAdditionalLogHeaders[] | cdktf.IResolvable) {
    this._additionalLogHeaders.internalValue = value;
  }
  public resetAdditionalLogHeaders() {
    this._additionalLogHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLogHeadersInput() {
    return this._additionalLogHeaders.internalValue;
  }
}
export interface DataK8SGetambassadorIoLogServiceV1ManifestSpec {
  /**
  * AmbassadorID declares which Ambassador instances should pay attention to this resource. May either be a string or a list of strings. If no value is provided, the default is: ambassador_id: - 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#ambassador_id DataK8SGetambassadorIoLogServiceV1Manifest#ambassador_id}
  */
  readonly ambassadorId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#driver DataK8SGetambassadorIoLogServiceV1Manifest#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#driver_config DataK8SGetambassadorIoLogServiceV1Manifest#driver_config}
  */
  readonly driverConfig?: DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#flush_interval_byte_size DataK8SGetambassadorIoLogServiceV1Manifest#flush_interval_byte_size}
  */
  readonly flushIntervalByteSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#flush_interval_time DataK8SGetambassadorIoLogServiceV1Manifest#flush_interval_time}
  */
  readonly flushIntervalTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#grpc DataK8SGetambassadorIoLogServiceV1Manifest#grpc}
  */
  readonly grpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#service DataK8SGetambassadorIoLogServiceV1Manifest#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#v3_protocol_version DataK8SGetambassadorIoLogServiceV1Manifest#v3_protocol_version}
  */
  readonly v3ProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#v3_stats_name DataK8SGetambassadorIoLogServiceV1Manifest#v3_stats_name}
  */
  readonly v3StatsName?: string;
}

export function dataK8SGetambassadorIoLogServiceV1ManifestSpecToTerraform(struct?: DataK8SGetambassadorIoLogServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ambassador_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ambassadorId),
    driver: cdktf.stringToTerraform(struct!.driver),
    driver_config: dataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigToTerraform(struct!.driverConfig),
    flush_interval_byte_size: cdktf.numberToTerraform(struct!.flushIntervalByteSize),
    flush_interval_time: cdktf.numberToTerraform(struct!.flushIntervalTime),
    grpc: cdktf.booleanToTerraform(struct!.grpc),
    service: cdktf.stringToTerraform(struct!.service),
    v3_protocol_version: cdktf.stringToTerraform(struct!.v3ProtocolVersion),
    v3_stats_name: cdktf.stringToTerraform(struct!.v3StatsName),
  }
}


export function dataK8SGetambassadorIoLogServiceV1ManifestSpecToHclTerraform(struct?: DataK8SGetambassadorIoLogServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ambassador_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ambassadorId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_config: {
      value: dataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigToHclTerraform(struct!.driverConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfig",
    },
    flush_interval_byte_size: {
      value: cdktf.numberToHclTerraform(struct!.flushIntervalByteSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flush_interval_time: {
      value: cdktf.numberToHclTerraform(struct!.flushIntervalTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: cdktf.booleanToHclTerraform(struct!.grpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.v3ProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_stats_name: {
      value: cdktf.stringToHclTerraform(struct!.v3StatsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoLogServiceV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoLogServiceV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ambassadorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambassadorId = this._ambassadorId;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._driverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverConfig = this._driverConfig?.internalValue;
    }
    if (this._flushIntervalByteSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushIntervalByteSize = this._flushIntervalByteSize;
    }
    if (this._flushIntervalTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushIntervalTime = this._flushIntervalTime;
    }
    if (this._grpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._v3ProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3ProtocolVersion = this._v3ProtocolVersion;
    }
    if (this._v3StatsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3StatsName = this._v3StatsName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoLogServiceV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ambassadorId = undefined;
      this._driver = undefined;
      this._driverConfig.internalValue = undefined;
      this._flushIntervalByteSize = undefined;
      this._flushIntervalTime = undefined;
      this._grpc = undefined;
      this._service = undefined;
      this._v3ProtocolVersion = undefined;
      this._v3StatsName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ambassadorId = value.ambassadorId;
      this._driver = value.driver;
      this._driverConfig.internalValue = value.driverConfig;
      this._flushIntervalByteSize = value.flushIntervalByteSize;
      this._flushIntervalTime = value.flushIntervalTime;
      this._grpc = value.grpc;
      this._service = value.service;
      this._v3ProtocolVersion = value.v3ProtocolVersion;
      this._v3StatsName = value.v3StatsName;
    }
  }

  // ambassador_id - computed: false, optional: true, required: false
  private _ambassadorId?: string[]; 
  public get ambassadorId() {
    return this.getListAttribute('ambassador_id');
  }
  public set ambassadorId(value: string[]) {
    this._ambassadorId = value;
  }
  public resetAmbassadorId() {
    this._ambassadorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambassadorIdInput() {
    return this._ambassadorId;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // driver_config - computed: false, optional: true, required: false
  private _driverConfig = new DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfigOutputReference(this, "driver_config");
  public get driverConfig() {
    return this._driverConfig;
  }
  public putDriverConfig(value: DataK8SGetambassadorIoLogServiceV1ManifestSpecDriverConfig) {
    this._driverConfig.internalValue = value;
  }
  public resetDriverConfig() {
    this._driverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverConfigInput() {
    return this._driverConfig.internalValue;
  }

  // flush_interval_byte_size - computed: false, optional: true, required: false
  private _flushIntervalByteSize?: number; 
  public get flushIntervalByteSize() {
    return this.getNumberAttribute('flush_interval_byte_size');
  }
  public set flushIntervalByteSize(value: number) {
    this._flushIntervalByteSize = value;
  }
  public resetFlushIntervalByteSize() {
    this._flushIntervalByteSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushIntervalByteSizeInput() {
    return this._flushIntervalByteSize;
  }

  // flush_interval_time - computed: false, optional: true, required: false
  private _flushIntervalTime?: number; 
  public get flushIntervalTime() {
    return this.getNumberAttribute('flush_interval_time');
  }
  public set flushIntervalTime(value: number) {
    this._flushIntervalTime = value;
  }
  public resetFlushIntervalTime() {
    this._flushIntervalTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushIntervalTimeInput() {
    return this._flushIntervalTime;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc?: boolean | cdktf.IResolvable; 
  public get grpc() {
    return this.getBooleanAttribute('grpc');
  }
  public set grpc(value: boolean | cdktf.IResolvable) {
    this._grpc = value;
  }
  public resetGrpc() {
    this._grpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc;
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

  // v3_protocol_version - computed: false, optional: true, required: false
  private _v3ProtocolVersion?: string; 
  public get v3ProtocolVersion() {
    return this.getStringAttribute('v3_protocol_version');
  }
  public set v3ProtocolVersion(value: string) {
    this._v3ProtocolVersion = value;
  }
  public resetV3ProtocolVersion() {
    this._v3ProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3ProtocolVersionInput() {
    return this._v3ProtocolVersion;
  }

  // v3_stats_name - computed: false, optional: true, required: false
  private _v3StatsName?: string; 
  public get v3StatsName() {
    return this.getStringAttribute('v3_stats_name');
  }
  public set v3StatsName(value: string) {
    this._v3StatsName = value;
  }
  public resetV3StatsName() {
    this._v3StatsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3StatsNameInput() {
    return this._v3StatsName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest k8s_getambassador_io_log_service_v1_manifest}
*/
export class DataK8SGetambassadorIoLogServiceV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_getambassador_io_log_service_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGetambassadorIoLogServiceV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGetambassadorIoLogServiceV1Manifest to import
  * @param importFromId The id of the existing DataK8SGetambassadorIoLogServiceV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGetambassadorIoLogServiceV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_getambassador_io_log_service_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/getambassador_io_log_service_v1_manifest k8s_getambassador_io_log_service_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGetambassadorIoLogServiceV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGetambassadorIoLogServiceV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_getambassador_io_log_service_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SGetambassadorIoLogServiceV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGetambassadorIoLogServiceV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGetambassadorIoLogServiceV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGetambassadorIoLogServiceV1ManifestSpec) {
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
      metadata: dataK8SGetambassadorIoLogServiceV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGetambassadorIoLogServiceV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGetambassadorIoLogServiceV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoLogServiceV1ManifestMetadata",
      },
      spec: {
        value: dataK8SGetambassadorIoLogServiceV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoLogServiceV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
