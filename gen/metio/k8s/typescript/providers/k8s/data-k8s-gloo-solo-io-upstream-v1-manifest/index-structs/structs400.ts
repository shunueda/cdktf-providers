import * as cdktf from 'cdktf';
import { DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendValue,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendValueToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendValueToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendValueOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsBody,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsBodyToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsBodyToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsBodyOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsDynamicMetadataValues,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsDynamicMetadataValuesToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsDynamicMetadataValuesToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsDynamicMetadataValuesList,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsExtractors,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsExtractorsToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsExtractorsToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsExtractorsOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeaders,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestSwaggerInfo,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestSwaggerInfoToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestSwaggerInfoToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestSwaggerInfoOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGraphql,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGraphqlToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGraphqlToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGraphqlOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpc,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcJsonTranscoder,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcJsonTranscoderToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcJsonTranscoderToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcJsonTranscoderOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecAi,
dataK8SGlooSoloIoUpstreamV1ManifestSpecAiToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecAiToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecAiOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecAws,
dataK8SGlooSoloIoUpstreamV1ManifestSpecAwsToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecAwsToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecAwsOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecAwsEc2,
dataK8SGlooSoloIoUpstreamV1ManifestSpecAwsEc2ToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecAwsEc2ToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecAwsEc2OutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecAzure,
dataK8SGlooSoloIoUpstreamV1ManifestSpecAzureToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecAzureToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecAzureOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecCircuitBreakers,
dataK8SGlooSoloIoUpstreamV1ManifestSpecCircuitBreakersToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecCircuitBreakersToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecCircuitBreakersOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecConnectionConfig,
dataK8SGlooSoloIoUpstreamV1ManifestSpecConnectionConfigToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecConnectionConfigToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecConnectionConfigOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecConsul,
dataK8SGlooSoloIoUpstreamV1ManifestSpecConsulToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecConsulToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecConsulOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecDiscoveryMetadata,
dataK8SGlooSoloIoUpstreamV1ManifestSpecDiscoveryMetadataToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecDiscoveryMetadataToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecDiscoveryMetadataOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecFailover,
dataK8SGlooSoloIoUpstreamV1ManifestSpecFailoverToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecFailoverToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecFailoverOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecGcp,
dataK8SGlooSoloIoUpstreamV1ManifestSpecGcpToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecGcpToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecGcpOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecHealthChecks,
dataK8SGlooSoloIoUpstreamV1ManifestSpecHealthChecksToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecHealthChecksToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecHealthChecksList,
DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectHeaders,
dataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectHeadersToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectHeadersToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectHeadersList,
DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectSslConfig,
dataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectSslConfigToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectSslConfigToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectSslConfigOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecKube,
dataK8SGlooSoloIoUpstreamV1ManifestSpecKubeToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecKubeToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecKubeOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecLoadBalancerConfig,
dataK8SGlooSoloIoUpstreamV1ManifestSpecLoadBalancerConfigToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecLoadBalancerConfigToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecLoadBalancerConfigOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecNamespacedStatuses,
dataK8SGlooSoloIoUpstreamV1ManifestSpecNamespacedStatusesToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecNamespacedStatusesToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecNamespacedStatusesOutputReference,
DataK8SGlooSoloIoUpstreamV1ManifestSpecOutlierDetection,
dataK8SGlooSoloIoUpstreamV1ManifestSpecOutlierDetectionToTerraform,
dataK8SGlooSoloIoUpstreamV1ManifestSpecOutlierDetectionToHclTerraform,
DataK8SGlooSoloIoUpstreamV1ManifestSpecOutlierDetectionOutputReference } from './structs0'
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#key DataK8SGlooSoloIoUpstreamV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#value DataK8SGlooSoloIoUpstreamV1Manifest#value}
  */
  readonly value?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendValue;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendValueToTerraform(struct!.value),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppend | cdktf.IResolvable): any {
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
    value: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppend[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendOutputReference {
    return new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#text DataK8SGlooSoloIoUpstreamV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#override_empty DataK8SGlooSoloIoUpstreamV1Manifest#override_empty}
  */
  readonly overrideEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#tmpl DataK8SGlooSoloIoUpstreamV1Manifest#tmpl}
  */
  readonly tmpl?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_empty: cdktf.booleanToTerraform(struct!.overrideEmpty),
    tmpl: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplToTerraform(struct!.tmpl),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_empty: {
      value: cdktf.booleanToHclTerraform(struct!.overrideEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tmpl: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplToHclTerraform(struct!.tmpl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideEmpty = this._overrideEmpty;
    }
    if (this._tmpl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpl = this._tmpl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideEmpty = undefined;
      this._tmpl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideEmpty = value.overrideEmpty;
      this._tmpl.internalValue = value.tmpl;
    }
  }

  // override_empty - computed: false, optional: true, required: false
  private _overrideEmpty?: boolean | cdktf.IResolvable; 
  public get overrideEmpty() {
    return this.getBooleanAttribute('override_empty');
  }
  public set overrideEmpty(value: boolean | cdktf.IResolvable) {
    this._overrideEmpty = value;
  }
  public resetOverrideEmpty() {
    this._overrideEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideEmptyInput() {
    return this._overrideEmpty;
  }

  // tmpl - computed: false, optional: true, required: false
  private _tmpl = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplOutputReference(this, "tmpl");
  public get tmpl() {
    return this._tmpl;
  }
  public putTmpl(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl) {
    this._tmpl.internalValue = value;
  }
  public resetTmpl() {
    this._tmpl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmplInput() {
    return this._tmpl.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#json_keys DataK8SGlooSoloIoUpstreamV1Manifest#json_keys}
  */
  readonly jsonKeys?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeys;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_keys: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysToTerraform(struct!.jsonKeys),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_keys: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysToHclTerraform(struct!.jsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKeys = this._jsonKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKeys.internalValue = value.jsonKeys;
    }
  }

  // json_keys - computed: false, optional: true, required: false
  private _jsonKeys = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeysOutputReference(this, "json_keys");
  public get jsonKeys() {
    return this._jsonKeys;
  }
  public putJsonKeys(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysJsonKeys) {
    this._jsonKeys.internalValue = value;
  }
  public resetJsonKeys() {
    this._jsonKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeysInput() {
    return this._jsonKeys.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#advanced_templates DataK8SGlooSoloIoUpstreamV1Manifest#advanced_templates}
  */
  readonly advancedTemplates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#body DataK8SGlooSoloIoUpstreamV1Manifest#body}
  */
  readonly body?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#dynamic_metadata_values DataK8SGlooSoloIoUpstreamV1Manifest#dynamic_metadata_values}
  */
  readonly dynamicMetadataValues?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsDynamicMetadataValues[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#escape_characters DataK8SGlooSoloIoUpstreamV1Manifest#escape_characters}
  */
  readonly escapeCharacters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#extractors DataK8SGlooSoloIoUpstreamV1Manifest#extractors}
  */
  readonly extractors?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsExtractors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#headers DataK8SGlooSoloIoUpstreamV1Manifest#headers}
  */
  readonly headers?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#headers_to_append DataK8SGlooSoloIoUpstreamV1Manifest#headers_to_append}
  */
  readonly headersToAppend?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppend[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#headers_to_remove DataK8SGlooSoloIoUpstreamV1Manifest#headers_to_remove}
  */
  readonly headersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#ignore_error_on_parse DataK8SGlooSoloIoUpstreamV1Manifest#ignore_error_on_parse}
  */
  readonly ignoreErrorOnParse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#merge_extractors_to_body DataK8SGlooSoloIoUpstreamV1Manifest#merge_extractors_to_body}
  */
  readonly mergeExtractorsToBody?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#merge_json_keys DataK8SGlooSoloIoUpstreamV1Manifest#merge_json_keys}
  */
  readonly mergeJsonKeys?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeys;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#parse_body_behavior DataK8SGlooSoloIoUpstreamV1Manifest#parse_body_behavior}
  */
  readonly parseBodyBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#passthrough DataK8SGlooSoloIoUpstreamV1Manifest#passthrough}
  */
  readonly passthrough?: { [key: string]: string };
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_templates: cdktf.booleanToTerraform(struct!.advancedTemplates),
    body: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsBodyToTerraform(struct!.body),
    dynamic_metadata_values: cdktf.listMapper(dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsDynamicMetadataValuesToTerraform, false)(struct!.dynamicMetadataValues),
    escape_characters: cdktf.booleanToTerraform(struct!.escapeCharacters),
    extractors: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsExtractorsToTerraform(struct!.extractors),
    headers: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToTerraform(struct!.headers),
    headers_to_append: cdktf.listMapper(dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendToTerraform, false)(struct!.headersToAppend),
    headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToRemove),
    ignore_error_on_parse: cdktf.booleanToTerraform(struct!.ignoreErrorOnParse),
    merge_extractors_to_body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.mergeExtractorsToBody),
    merge_json_keys: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysToTerraform(struct!.mergeJsonKeys),
    parse_body_behavior: cdktf.stringToTerraform(struct!.parseBodyBehavior),
    passthrough: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.passthrough),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_templates: {
      value: cdktf.booleanToHclTerraform(struct!.advancedTemplates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    body: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsBody",
    },
    dynamic_metadata_values: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsDynamicMetadataValuesToHclTerraform, false)(struct!.dynamicMetadataValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsDynamicMetadataValuesList",
    },
    escape_characters: {
      value: cdktf.booleanToHclTerraform(struct!.escapeCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extractors: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsExtractorsToHclTerraform(struct!.extractors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsExtractors",
    },
    headers: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeaders",
    },
    headers_to_append: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendToHclTerraform, false)(struct!.headersToAppend),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendList",
    },
    headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_error_on_parse: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrorOnParse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    merge_extractors_to_body: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.mergeExtractorsToBody),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    merge_json_keys: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysToHclTerraform(struct!.mergeJsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeys",
    },
    parse_body_behavior: {
      value: cdktf.stringToHclTerraform(struct!.parseBodyBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passthrough: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.passthrough),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedTemplates = this._advancedTemplates;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._dynamicMetadataValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicMetadataValues = this._dynamicMetadataValues?.internalValue;
    }
    if (this._escapeCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeCharacters = this._escapeCharacters;
    }
    if (this._extractors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractors = this._extractors?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._headersToAppend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToAppend = this._headersToAppend?.internalValue;
    }
    if (this._headersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToRemove = this._headersToRemove;
    }
    if (this._ignoreErrorOnParse !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrorOnParse = this._ignoreErrorOnParse;
    }
    if (this._mergeExtractorsToBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeExtractorsToBody = this._mergeExtractorsToBody;
    }
    if (this._mergeJsonKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeJsonKeys = this._mergeJsonKeys?.internalValue;
    }
    if (this._parseBodyBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseBodyBehavior = this._parseBodyBehavior;
    }
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedTemplates = undefined;
      this._body.internalValue = undefined;
      this._dynamicMetadataValues.internalValue = undefined;
      this._escapeCharacters = undefined;
      this._extractors.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._headersToAppend.internalValue = undefined;
      this._headersToRemove = undefined;
      this._ignoreErrorOnParse = undefined;
      this._mergeExtractorsToBody = undefined;
      this._mergeJsonKeys.internalValue = undefined;
      this._parseBodyBehavior = undefined;
      this._passthrough = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedTemplates = value.advancedTemplates;
      this._body.internalValue = value.body;
      this._dynamicMetadataValues.internalValue = value.dynamicMetadataValues;
      this._escapeCharacters = value.escapeCharacters;
      this._extractors.internalValue = value.extractors;
      this._headers.internalValue = value.headers;
      this._headersToAppend.internalValue = value.headersToAppend;
      this._headersToRemove = value.headersToRemove;
      this._ignoreErrorOnParse = value.ignoreErrorOnParse;
      this._mergeExtractorsToBody = value.mergeExtractorsToBody;
      this._mergeJsonKeys.internalValue = value.mergeJsonKeys;
      this._parseBodyBehavior = value.parseBodyBehavior;
      this._passthrough = value.passthrough;
    }
  }

  // advanced_templates - computed: false, optional: true, required: false
  private _advancedTemplates?: boolean | cdktf.IResolvable; 
  public get advancedTemplates() {
    return this.getBooleanAttribute('advanced_templates');
  }
  public set advancedTemplates(value: boolean | cdktf.IResolvable) {
    this._advancedTemplates = value;
  }
  public resetAdvancedTemplates() {
    this._advancedTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedTemplatesInput() {
    return this._advancedTemplates;
  }

  // body - computed: false, optional: true, required: false
  private _body = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // dynamic_metadata_values - computed: false, optional: true, required: false
  private _dynamicMetadataValues = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsDynamicMetadataValuesList(this, "dynamic_metadata_values", false);
  public get dynamicMetadataValues() {
    return this._dynamicMetadataValues;
  }
  public putDynamicMetadataValues(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsDynamicMetadataValues[] | cdktf.IResolvable) {
    this._dynamicMetadataValues.internalValue = value;
  }
  public resetDynamicMetadataValues() {
    this._dynamicMetadataValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMetadataValuesInput() {
    return this._dynamicMetadataValues.internalValue;
  }

  // escape_characters - computed: false, optional: true, required: false
  private _escapeCharacters?: boolean | cdktf.IResolvable; 
  public get escapeCharacters() {
    return this.getBooleanAttribute('escape_characters');
  }
  public set escapeCharacters(value: boolean | cdktf.IResolvable) {
    this._escapeCharacters = value;
  }
  public resetEscapeCharacters() {
    this._escapeCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharactersInput() {
    return this._escapeCharacters;
  }

  // extractors - computed: false, optional: true, required: false
  private _extractors = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsExtractorsOutputReference(this, "extractors");
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsExtractors) {
    this._extractors.internalValue = value;
  }
  public resetExtractors() {
    this._extractors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorsInput() {
    return this._extractors.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // headers_to_append - computed: false, optional: true, required: false
  private _headersToAppend = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppendList(this, "headers_to_append", false);
  public get headersToAppend() {
    return this._headersToAppend;
  }
  public putHeadersToAppend(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsHeadersToAppend[] | cdktf.IResolvable) {
    this._headersToAppend.internalValue = value;
  }
  public resetHeadersToAppend() {
    this._headersToAppend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToAppendInput() {
    return this._headersToAppend.internalValue;
  }

  // headers_to_remove - computed: false, optional: true, required: false
  private _headersToRemove?: string[]; 
  public get headersToRemove() {
    return this.getListAttribute('headers_to_remove');
  }
  public set headersToRemove(value: string[]) {
    this._headersToRemove = value;
  }
  public resetHeadersToRemove() {
    this._headersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToRemoveInput() {
    return this._headersToRemove;
  }

  // ignore_error_on_parse - computed: false, optional: true, required: false
  private _ignoreErrorOnParse?: boolean | cdktf.IResolvable; 
  public get ignoreErrorOnParse() {
    return this.getBooleanAttribute('ignore_error_on_parse');
  }
  public set ignoreErrorOnParse(value: boolean | cdktf.IResolvable) {
    this._ignoreErrorOnParse = value;
  }
  public resetIgnoreErrorOnParse() {
    this._ignoreErrorOnParse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorOnParseInput() {
    return this._ignoreErrorOnParse;
  }

  // merge_extractors_to_body - computed: false, optional: true, required: false
  private _mergeExtractorsToBody?: { [key: string]: string }; 
  public get mergeExtractorsToBody() {
    return this.getStringMapAttribute('merge_extractors_to_body');
  }
  public set mergeExtractorsToBody(value: { [key: string]: string }) {
    this._mergeExtractorsToBody = value;
  }
  public resetMergeExtractorsToBody() {
    this._mergeExtractorsToBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeExtractorsToBodyInput() {
    return this._mergeExtractorsToBody;
  }

  // merge_json_keys - computed: false, optional: true, required: false
  private _mergeJsonKeys = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeysOutputReference(this, "merge_json_keys");
  public get mergeJsonKeys() {
    return this._mergeJsonKeys;
  }
  public putMergeJsonKeys(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsMergeJsonKeys) {
    this._mergeJsonKeys.internalValue = value;
  }
  public resetMergeJsonKeys() {
    this._mergeJsonKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeJsonKeysInput() {
    return this._mergeJsonKeys.internalValue;
  }

  // parse_body_behavior - computed: false, optional: true, required: false
  private _parseBodyBehavior?: string; 
  public get parseBodyBehavior() {
    return this.getStringAttribute('parse_body_behavior');
  }
  public set parseBodyBehavior(value: string) {
    this._parseBodyBehavior = value;
  }
  public resetParseBodyBehavior() {
    this._parseBodyBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseBodyBehaviorInput() {
    return this._parseBodyBehavior;
  }

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: { [key: string]: string }; 
  public get passthrough() {
    return this.getStringMapAttribute('passthrough');
  }
  public set passthrough(value: { [key: string]: string }) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#swagger_info DataK8SGlooSoloIoUpstreamV1Manifest#swagger_info}
  */
  readonly swaggerInfo?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestSwaggerInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#transformations DataK8SGlooSoloIoUpstreamV1Manifest#transformations}
  */
  readonly transformations?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformations;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swagger_info: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestSwaggerInfoToTerraform(struct!.swaggerInfo),
    transformations: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsToTerraform(struct!.transformations),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swagger_info: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestSwaggerInfoToHclTerraform(struct!.swaggerInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestSwaggerInfo",
    },
    transformations: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformations",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swaggerInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swaggerInfo = this._swaggerInfo?.internalValue;
    }
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._swaggerInfo.internalValue = undefined;
      this._transformations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._swaggerInfo.internalValue = value.swaggerInfo;
      this._transformations.internalValue = value.transformations;
    }
  }

  // swagger_info - computed: false, optional: true, required: false
  private _swaggerInfo = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestSwaggerInfoOutputReference(this, "swagger_info");
  public get swaggerInfo() {
    return this._swaggerInfo;
  }
  public putSwaggerInfo(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestSwaggerInfo) {
    this._swaggerInfo.internalValue = value;
  }
  public resetSwaggerInfo() {
    this._swaggerInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swaggerInfoInput() {
    return this._swaggerInfo.internalValue;
  }

  // transformations - computed: false, optional: true, required: false
  private _transformations = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestTransformations) {
    this._transformations.internalValue = value;
  }
  public resetTransformations() {
    this._transformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#graphql DataK8SGlooSoloIoUpstreamV1Manifest#graphql}
  */
  readonly graphql?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGraphql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#grpc DataK8SGlooSoloIoUpstreamV1Manifest#grpc}
  */
  readonly grpc?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#grpc_json_transcoder DataK8SGlooSoloIoUpstreamV1Manifest#grpc_json_transcoder}
  */
  readonly grpcJsonTranscoder?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcJsonTranscoder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#rest DataK8SGlooSoloIoUpstreamV1Manifest#rest}
  */
  readonly rest?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRest;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graphql: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGraphqlToTerraform(struct!.graphql),
    grpc: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcToTerraform(struct!.grpc),
    grpc_json_transcoder: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcJsonTranscoderToTerraform(struct!.grpcJsonTranscoder),
    rest: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestToTerraform(struct!.rest),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graphql: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGraphqlToHclTerraform(struct!.graphql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGraphql",
    },
    grpc: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpc",
    },
    grpc_json_transcoder: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcJsonTranscoderToHclTerraform(struct!.grpcJsonTranscoder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcJsonTranscoder",
    },
    rest: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestToHclTerraform(struct!.rest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graphql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphql = this._graphql?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._grpcJsonTranscoder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcJsonTranscoder = this._grpcJsonTranscoder?.internalValue;
    }
    if (this._rest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rest = this._rest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graphql.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._grpcJsonTranscoder.internalValue = undefined;
      this._rest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graphql.internalValue = value.graphql;
      this._grpc.internalValue = value.grpc;
      this._grpcJsonTranscoder.internalValue = value.grpcJsonTranscoder;
      this._rest.internalValue = value.rest;
    }
  }

  // graphql - computed: false, optional: true, required: false
  private _graphql = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGraphqlOutputReference(this, "graphql");
  public get graphql() {
    return this._graphql;
  }
  public putGraphql(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGraphql) {
    this._graphql.internalValue = value;
  }
  public resetGraphql() {
    this._graphql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlInput() {
    return this._graphql.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // grpc_json_transcoder - computed: false, optional: true, required: false
  private _grpcJsonTranscoder = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcJsonTranscoderOutputReference(this, "grpc_json_transcoder");
  public get grpcJsonTranscoder() {
    return this._grpcJsonTranscoder;
  }
  public putGrpcJsonTranscoder(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecGrpcJsonTranscoder) {
    this._grpcJsonTranscoder.internalValue = value;
  }
  public resetGrpcJsonTranscoder() {
    this._grpcJsonTranscoder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcJsonTranscoderInput() {
    return this._grpcJsonTranscoder.internalValue;
  }

  // rest - computed: false, optional: true, required: false
  private _rest = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRestOutputReference(this, "rest");
  public get rest() {
    return this._rest;
  }
  public putRest(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecRest) {
    this._rest.internalValue = value;
  }
  public resetRest() {
    this._rest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restInput() {
    return this._rest.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecPipe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#path DataK8SGlooSoloIoUpstreamV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#service_spec DataK8SGlooSoloIoUpstreamV1Manifest#service_spec}
  */
  readonly serviceSpec?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpec;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    service_spec: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecToTerraform(struct!.serviceSpec),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipe | cdktf.IResolvable): any {
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
    service_spec: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecToHclTerraform(struct!.serviceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecPipe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._serviceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSpec = this._serviceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._serviceSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._serviceSpec.internalValue = value.serviceSpec;
    }
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

  // service_spec - computed: false, optional: true, required: false
  private _serviceSpec = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpecOutputReference(this, "service_spec");
  public get serviceSpec() {
    return this._serviceSpec;
  }
  public putServiceSpec(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeServiceSpec) {
    this._serviceSpec.internalValue = value;
  }
  public resetServiceSpec() {
    this._serviceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSpecInput() {
    return this._serviceSpec.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#per_upstream_preconnect_ratio DataK8SGlooSoloIoUpstreamV1Manifest#per_upstream_preconnect_ratio}
  */
  readonly perUpstreamPreconnectRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#predictive_preconnect_ratio DataK8SGlooSoloIoUpstreamV1Manifest#predictive_preconnect_ratio}
  */
  readonly predictivePreconnectRatio?: number;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicyToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_upstream_preconnect_ratio: cdktf.numberToTerraform(struct!.perUpstreamPreconnectRatio),
    predictive_preconnect_ratio: cdktf.numberToTerraform(struct!.predictivePreconnectRatio),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicyToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_upstream_preconnect_ratio: {
      value: cdktf.numberToHclTerraform(struct!.perUpstreamPreconnectRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    predictive_preconnect_ratio: {
      value: cdktf.numberToHclTerraform(struct!.predictivePreconnectRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perUpstreamPreconnectRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.perUpstreamPreconnectRatio = this._perUpstreamPreconnectRatio;
    }
    if (this._predictivePreconnectRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictivePreconnectRatio = this._predictivePreconnectRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._perUpstreamPreconnectRatio = undefined;
      this._predictivePreconnectRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._perUpstreamPreconnectRatio = value.perUpstreamPreconnectRatio;
      this._predictivePreconnectRatio = value.predictivePreconnectRatio;
    }
  }

  // per_upstream_preconnect_ratio - computed: false, optional: true, required: false
  private _perUpstreamPreconnectRatio?: number; 
  public get perUpstreamPreconnectRatio() {
    return this.getNumberAttribute('per_upstream_preconnect_ratio');
  }
  public set perUpstreamPreconnectRatio(value: number) {
    this._perUpstreamPreconnectRatio = value;
  }
  public resetPerUpstreamPreconnectRatio() {
    this._perUpstreamPreconnectRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUpstreamPreconnectRatioInput() {
    return this._perUpstreamPreconnectRatio;
  }

  // predictive_preconnect_ratio - computed: false, optional: true, required: false
  private _predictivePreconnectRatio?: number; 
  public get predictivePreconnectRatio() {
    return this.getNumberAttribute('predictive_preconnect_ratio');
  }
  public set predictivePreconnectRatio(value: number) {
    this._predictivePreconnectRatio = value;
  }
  public resetPredictivePreconnectRatio() {
    this._predictivePreconnectRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictivePreconnectRatioInput() {
    return this._predictivePreconnectRatio;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#cipher_suites DataK8SGlooSoloIoUpstreamV1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#ecdh_curves DataK8SGlooSoloIoUpstreamV1Manifest#ecdh_curves}
  */
  readonly ecdhCurves?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#maximum_protocol_version DataK8SGlooSoloIoUpstreamV1Manifest#maximum_protocol_version}
  */
  readonly maximumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#minimum_protocol_version DataK8SGlooSoloIoUpstreamV1Manifest#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParametersToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    ecdh_curves: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ecdhCurves),
    maximum_protocol_version: cdktf.stringToTerraform(struct!.maximumProtocolVersion),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParametersToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ecdh_curves: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ecdhCurves),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.maximumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._ecdhCurves !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecdhCurves = this._ecdhCurves;
    }
    if (this._maximumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumProtocolVersion = this._maximumProtocolVersion;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherSuites = undefined;
      this._ecdhCurves = undefined;
      this._maximumProtocolVersion = undefined;
      this._minimumProtocolVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherSuites = value.cipherSuites;
      this._ecdhCurves = value.ecdhCurves;
      this._maximumProtocolVersion = value.maximumProtocolVersion;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // ecdh_curves - computed: false, optional: true, required: false
  private _ecdhCurves?: string[]; 
  public get ecdhCurves() {
    return this.getListAttribute('ecdh_curves');
  }
  public set ecdhCurves(value: string[]) {
    this._ecdhCurves = value;
  }
  public resetEcdhCurves() {
    this._ecdhCurves = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdhCurvesInput() {
    return this._ecdhCurves;
  }

  // maximum_protocol_version - computed: false, optional: true, required: false
  private _maximumProtocolVersion?: string; 
  public get maximumProtocolVersion() {
    return this.getStringAttribute('maximum_protocol_version');
  }
  public set maximumProtocolVersion(value: string) {
    this._maximumProtocolVersion = value;
  }
  public resetMaximumProtocolVersion() {
    this._maximumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumProtocolVersionInput() {
    return this._maximumProtocolVersion;
  }

  // minimum_protocol_version - computed: false, optional: true, required: false
  private _minimumProtocolVersion?: string; 
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }
  public set minimumProtocolVersion(value: string) {
    this._minimumProtocolVersion = value;
  }
  public resetMinimumProtocolVersion() {
    this._minimumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProtocolVersionInput() {
    return this._minimumProtocolVersion;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#header DataK8SGlooSoloIoUpstreamV1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#token_file_name DataK8SGlooSoloIoUpstreamV1Manifest#token_file_name}
  */
  readonly tokenFileName?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSourceToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    token_file_name: cdktf.stringToTerraform(struct!.tokenFileName),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSourceToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_file_name: {
      value: cdktf.stringToHclTerraform(struct!.tokenFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._tokenFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenFileName = this._tokenFileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._tokenFileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._tokenFileName = value.tokenFileName;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // token_file_name - computed: false, optional: true, required: false
  private _tokenFileName?: string; 
  public get tokenFileName() {
    return this.getStringAttribute('token_file_name');
  }
  public set tokenFileName(value: string) {
    this._tokenFileName = value;
  }
  public resetTokenFileName() {
    this._tokenFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenFileNameInput() {
    return this._tokenFileName;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#file_credential_source DataK8SGlooSoloIoUpstreamV1Manifest#file_credential_source}
  */
  readonly fileCredentialSource?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSource;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_credential_source: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSourceToTerraform(struct!.fileCredentialSource),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_credential_source: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSourceToHclTerraform(struct!.fileCredentialSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileCredentialSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCredentialSource = this._fileCredentialSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileCredentialSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileCredentialSource.internalValue = value.fileCredentialSource;
    }
  }

  // file_credential_source - computed: false, optional: true, required: false
  private _fileCredentialSource = new DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSourceOutputReference(this, "file_credential_source");
  public get fileCredentialSource() {
    return this._fileCredentialSource;
  }
  public putFileCredentialSource(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsFileCredentialSource) {
    this._fileCredentialSource.internalValue = value;
  }
  public resetFileCredentialSource() {
    this._fileCredentialSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCredentialSourceInput() {
    return this._fileCredentialSource.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#call_credentials DataK8SGlooSoloIoUpstreamV1Manifest#call_credentials}
  */
  readonly callCredentials?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#certificates_secret_name DataK8SGlooSoloIoUpstreamV1Manifest#certificates_secret_name}
  */
  readonly certificatesSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#cluster_name DataK8SGlooSoloIoUpstreamV1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#target_uri DataK8SGlooSoloIoUpstreamV1Manifest#target_uri}
  */
  readonly targetUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#validation_context_name DataK8SGlooSoloIoUpstreamV1Manifest#validation_context_name}
  */
  readonly validationContextName?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call_credentials: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsToTerraform(struct!.callCredentials),
    certificates_secret_name: cdktf.stringToTerraform(struct!.certificatesSecretName),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
    validation_context_name: cdktf.stringToTerraform(struct!.validationContextName),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call_credentials: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsToHclTerraform(struct!.callCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentials",
    },
    certificates_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.certificatesSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_context_name: {
      value: cdktf.stringToHclTerraform(struct!.validationContextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callCredentials = this._callCredentials?.internalValue;
    }
    if (this._certificatesSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatesSecretName = this._certificatesSecretName;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    if (this._validationContextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationContextName = this._validationContextName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callCredentials.internalValue = undefined;
      this._certificatesSecretName = undefined;
      this._clusterName = undefined;
      this._targetUri = undefined;
      this._validationContextName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callCredentials.internalValue = value.callCredentials;
      this._certificatesSecretName = value.certificatesSecretName;
      this._clusterName = value.clusterName;
      this._targetUri = value.targetUri;
      this._validationContextName = value.validationContextName;
    }
  }

  // call_credentials - computed: false, optional: true, required: false
  private _callCredentials = new DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentialsOutputReference(this, "call_credentials");
  public get callCredentials() {
    return this._callCredentials;
  }
  public putCallCredentials(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsCallCredentials) {
    this._callCredentials.internalValue = value;
  }
  public resetCallCredentials() {
    this._callCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callCredentialsInput() {
    return this._callCredentials.internalValue;
  }

  // certificates_secret_name - computed: false, optional: true, required: false
  private _certificatesSecretName?: string; 
  public get certificatesSecretName() {
    return this.getStringAttribute('certificates_secret_name');
  }
  public set certificatesSecretName(value: string) {
    this._certificatesSecretName = value;
  }
  public resetCertificatesSecretName() {
    this._certificatesSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesSecretNameInput() {
    return this._certificatesSecretName;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // target_uri - computed: false, optional: true, required: false
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  public resetTargetUri() {
    this._targetUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }

  // validation_context_name - computed: false, optional: true, required: false
  private _validationContextName?: string; 
  public get validationContextName() {
    return this.getStringAttribute('validation_context_name');
  }
  public set validationContextName(value: string) {
    this._validationContextName = value;
  }
  public resetValidationContextName() {
    this._validationContextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationContextNameInput() {
    return this._validationContextName;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#name DataK8SGlooSoloIoUpstreamV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#namespace DataK8SGlooSoloIoUpstreamV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRefToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRefToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#ocsp_staple DataK8SGlooSoloIoUpstreamV1Manifest#ocsp_staple}
  */
  readonly ocspStaple?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#root_ca DataK8SGlooSoloIoUpstreamV1Manifest#root_ca}
  */
  readonly rootCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#tls_cert DataK8SGlooSoloIoUpstreamV1Manifest#tls_cert}
  */
  readonly tlsCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#tls_key DataK8SGlooSoloIoUpstreamV1Manifest#tls_key}
  */
  readonly tlsKey?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFilesToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocsp_staple: cdktf.stringToTerraform(struct!.ocspStaple),
    root_ca: cdktf.stringToTerraform(struct!.rootCa),
    tls_cert: cdktf.stringToTerraform(struct!.tlsCert),
    tls_key: cdktf.stringToTerraform(struct!.tlsKey),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFilesToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ocsp_staple: {
      value: cdktf.stringToHclTerraform(struct!.ocspStaple),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_ca: {
      value: cdktf.stringToHclTerraform(struct!.rootCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocspStaple !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStaple = this._ocspStaple;
    }
    if (this._rootCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCa = this._rootCa;
    }
    if (this._tlsCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCert = this._tlsCert;
    }
    if (this._tlsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsKey = this._tlsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ocspStaple = undefined;
      this._rootCa = undefined;
      this._tlsCert = undefined;
      this._tlsKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ocspStaple = value.ocspStaple;
      this._rootCa = value.rootCa;
      this._tlsCert = value.tlsCert;
      this._tlsKey = value.tlsKey;
    }
  }

  // ocsp_staple - computed: false, optional: true, required: false
  private _ocspStaple?: string; 
  public get ocspStaple() {
    return this.getStringAttribute('ocsp_staple');
  }
  public set ocspStaple(value: string) {
    this._ocspStaple = value;
  }
  public resetOcspStaple() {
    this._ocspStaple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStapleInput() {
    return this._ocspStaple;
  }

  // root_ca - computed: false, optional: true, required: false
  private _rootCa?: string; 
  public get rootCa() {
    return this.getStringAttribute('root_ca');
  }
  public set rootCa(value: string) {
    this._rootCa = value;
  }
  public resetRootCa() {
    this._rootCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaInput() {
    return this._rootCa;
  }

  // tls_cert - computed: false, optional: true, required: false
  private _tlsCert?: string; 
  public get tlsCert() {
    return this.getStringAttribute('tls_cert');
  }
  public set tlsCert(value: string) {
    this._tlsCert = value;
  }
  public resetTlsCert() {
    this._tlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertInput() {
    return this._tlsCert;
  }

  // tls_key - computed: false, optional: true, required: false
  private _tlsKey?: string; 
  public get tlsKey() {
    return this.getStringAttribute('tls_key');
  }
  public set tlsKey(value: string) {
    this._tlsKey = value;
  }
  public resetTlsKey() {
    this._tlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeyInput() {
    return this._tlsKey;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#allow_renegotiation DataK8SGlooSoloIoUpstreamV1Manifest#allow_renegotiation}
  */
  readonly allowRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#alpn_protocols DataK8SGlooSoloIoUpstreamV1Manifest#alpn_protocols}
  */
  readonly alpnProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#one_way_tls DataK8SGlooSoloIoUpstreamV1Manifest#one_way_tls}
  */
  readonly oneWayTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#parameters DataK8SGlooSoloIoUpstreamV1Manifest#parameters}
  */
  readonly parameters?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#sds DataK8SGlooSoloIoUpstreamV1Manifest#sds}
  */
  readonly sds?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSds;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#secret_ref DataK8SGlooSoloIoUpstreamV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#sni DataK8SGlooSoloIoUpstreamV1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#ssl_files DataK8SGlooSoloIoUpstreamV1Manifest#ssl_files}
  */
  readonly sslFiles?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFiles;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#verify_subject_alt_name DataK8SGlooSoloIoUpstreamV1Manifest#verify_subject_alt_name}
  */
  readonly verifySubjectAltName?: string[];
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_renegotiation: cdktf.booleanToTerraform(struct!.allowRenegotiation),
    alpn_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alpnProtocols),
    one_way_tls: cdktf.booleanToTerraform(struct!.oneWayTls),
    parameters: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParametersToTerraform(struct!.parameters),
    sds: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsToTerraform(struct!.sds),
    secret_ref: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRefToTerraform(struct!.secretRef),
    sni: cdktf.stringToTerraform(struct!.sni),
    ssl_files: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFilesToTerraform(struct!.sslFiles),
    verify_subject_alt_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifySubjectAltName),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_renegotiation: {
      value: cdktf.booleanToHclTerraform(struct!.allowRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alpn_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alpnProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    one_way_tls: {
      value: cdktf.booleanToHclTerraform(struct!.oneWayTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParameters",
    },
    sds: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSds",
    },
    secret_ref: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRef",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_files: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFilesToHclTerraform(struct!.sslFiles),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFiles",
    },
    verify_subject_alt_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verifySubjectAltName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRenegotiation = this._allowRenegotiation;
    }
    if (this._alpnProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.alpnProtocols = this._alpnProtocols;
    }
    if (this._oneWayTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneWayTls = this._oneWayTls;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._sslFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslFiles = this._sslFiles?.internalValue;
    }
    if (this._verifySubjectAltName !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySubjectAltName = this._verifySubjectAltName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRenegotiation = undefined;
      this._alpnProtocols = undefined;
      this._oneWayTls = undefined;
      this._parameters.internalValue = undefined;
      this._sds.internalValue = undefined;
      this._secretRef.internalValue = undefined;
      this._sni = undefined;
      this._sslFiles.internalValue = undefined;
      this._verifySubjectAltName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRenegotiation = value.allowRenegotiation;
      this._alpnProtocols = value.alpnProtocols;
      this._oneWayTls = value.oneWayTls;
      this._parameters.internalValue = value.parameters;
      this._sds.internalValue = value.sds;
      this._secretRef.internalValue = value.secretRef;
      this._sni = value.sni;
      this._sslFiles.internalValue = value.sslFiles;
      this._verifySubjectAltName = value.verifySubjectAltName;
    }
  }

  // allow_renegotiation - computed: false, optional: true, required: false
  private _allowRenegotiation?: boolean | cdktf.IResolvable; 
  public get allowRenegotiation() {
    return this.getBooleanAttribute('allow_renegotiation');
  }
  public set allowRenegotiation(value: boolean | cdktf.IResolvable) {
    this._allowRenegotiation = value;
  }
  public resetAllowRenegotiation() {
    this._allowRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRenegotiationInput() {
    return this._allowRenegotiation;
  }

  // alpn_protocols - computed: false, optional: true, required: false
  private _alpnProtocols?: string[]; 
  public get alpnProtocols() {
    return this.getListAttribute('alpn_protocols');
  }
  public set alpnProtocols(value: string[]) {
    this._alpnProtocols = value;
  }
  public resetAlpnProtocols() {
    this._alpnProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnProtocolsInput() {
    return this._alpnProtocols;
  }

  // one_way_tls - computed: false, optional: true, required: false
  private _oneWayTls?: boolean | cdktf.IResolvable; 
  public get oneWayTls() {
    return this.getBooleanAttribute('one_way_tls');
  }
  public set oneWayTls(value: boolean | cdktf.IResolvable) {
    this._oneWayTls = value;
  }
  public resetOneWayTls() {
    this._oneWayTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneWayTlsInput() {
    return this._oneWayTls;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // ssl_files - computed: false, optional: true, required: false
  private _sslFiles = new DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFilesOutputReference(this, "ssl_files");
  public get sslFiles() {
    return this._sslFiles;
  }
  public putSslFiles(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigSslFiles) {
    this._sslFiles.internalValue = value;
  }
  public resetSslFiles() {
    this._sslFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslFilesInput() {
    return this._sslFiles.internalValue;
  }

  // verify_subject_alt_name - computed: false, optional: true, required: false
  private _verifySubjectAltName?: string[]; 
  public get verifySubjectAltName() {
    return this.getListAttribute('verify_subject_alt_name');
  }
  public set verifySubjectAltName(value: string[]) {
    this._verifySubjectAltName = value;
  }
  public resetVerifySubjectAltName() {
    this._verifySubjectAltName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySubjectAltNameInput() {
    return this._verifySubjectAltName;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#method DataK8SGlooSoloIoUpstreamV1Manifest#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#path DataK8SGlooSoloIoUpstreamV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfigToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfigToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._path = value.path;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#addr DataK8SGlooSoloIoUpstreamV1Manifest#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#health_check_config DataK8SGlooSoloIoUpstreamV1Manifest#health_check_config}
  */
  readonly healthCheckConfig?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#load_balancing_weight DataK8SGlooSoloIoUpstreamV1Manifest#load_balancing_weight}
  */
  readonly loadBalancingWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#metadata DataK8SGlooSoloIoUpstreamV1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#port DataK8SGlooSoloIoUpstreamV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#sni_addr DataK8SGlooSoloIoUpstreamV1Manifest#sni_addr}
  */
  readonly sniAddr?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    health_check_config: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfigToTerraform(struct!.healthCheckConfig),
    load_balancing_weight: cdktf.numberToTerraform(struct!.loadBalancingWeight),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    port: cdktf.numberToTerraform(struct!.port),
    sni_addr: cdktf.stringToTerraform(struct!.sniAddr),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_config: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfigToHclTerraform(struct!.healthCheckConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfig",
    },
    load_balancing_weight: {
      value: cdktf.numberToHclTerraform(struct!.loadBalancingWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sni_addr: {
      value: cdktf.stringToHclTerraform(struct!.sniAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._healthCheckConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckConfig = this._healthCheckConfig?.internalValue;
    }
    if (this._loadBalancingWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingWeight = this._loadBalancingWeight;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sniAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniAddr = this._sniAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._healthCheckConfig.internalValue = undefined;
      this._loadBalancingWeight = undefined;
      this._metadata = undefined;
      this._port = undefined;
      this._sniAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._healthCheckConfig.internalValue = value.healthCheckConfig;
      this._loadBalancingWeight = value.loadBalancingWeight;
      this._metadata = value.metadata;
      this._port = value.port;
      this._sniAddr = value.sniAddr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // health_check_config - computed: false, optional: true, required: false
  private _healthCheckConfig = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public putHealthCheckConfig(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsHealthCheckConfig) {
    this._healthCheckConfig.internalValue = value;
  }
  public resetHealthCheckConfig() {
    this._healthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig.internalValue;
  }

  // load_balancing_weight - computed: false, optional: true, required: false
  private _loadBalancingWeight?: number; 
  public get loadBalancingWeight() {
    return this.getNumberAttribute('load_balancing_weight');
  }
  public set loadBalancingWeight(value: number) {
    this._loadBalancingWeight = value;
  }
  public resetLoadBalancingWeight() {
    this._loadBalancingWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingWeightInput() {
    return this._loadBalancingWeight;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // sni_addr - computed: false, optional: true, required: false
  private _sniAddr?: string; 
  public get sniAddr() {
    return this.getStringAttribute('sni_addr');
  }
  public set sniAddr(value: string) {
    this._sniAddr = value;
  }
  public resetSniAddr() {
    this._sniAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniAddrInput() {
    return this._sniAddr;
  }
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHosts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsOutputReference {
    return new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#url DataK8SGlooSoloIoUpstreamV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpointToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpointToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphql {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#endpoint DataK8SGlooSoloIoUpstreamV1Manifest#endpoint}
  */
  readonly endpoint?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpoint;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpointToTerraform(struct!.endpoint),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpoint",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint.internalValue = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#function_names DataK8SGlooSoloIoUpstreamV1Manifest#function_names}
  */
  readonly functionNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#package_name DataK8SGlooSoloIoUpstreamV1Manifest#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#service_name DataK8SGlooSoloIoUpstreamV1Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServicesToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functionNames),
    package_name: cdktf.stringToTerraform(struct!.packageName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServicesToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functionNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    package_name: {
      value: cdktf.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionNames = this._functionNames;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionNames = undefined;
      this._packageName = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionNames = value.functionNames;
      this._packageName = value.packageName;
      this._serviceName = value.serviceName;
    }
  }

  // function_names - computed: false, optional: true, required: false
  private _functionNames?: string[]; 
  public get functionNames() {
    return this.getListAttribute('function_names');
  }
  public set functionNames(value: string[]) {
    this._functionNames = value;
  }
  public resetFunctionNames() {
    this._functionNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNamesInput() {
    return this._functionNames;
  }

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServicesOutputReference {
    return new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#descriptors DataK8SGlooSoloIoUpstreamV1Manifest#descriptors}
  */
  readonly descriptors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#grpc_services DataK8SGlooSoloIoUpstreamV1Manifest#grpc_services}
  */
  readonly grpcServices?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServices[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    descriptors: cdktf.stringToTerraform(struct!.descriptors),
    grpc_services: cdktf.listMapper(dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServicesToTerraform, false)(struct!.grpcServices),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    descriptors: {
      value: cdktf.stringToHclTerraform(struct!.descriptors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grpc_services: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServicesToHclTerraform, false)(struct!.grpcServices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptors = this._descriptors;
    }
    if (this._grpcServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcServices = this._grpcServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptors = undefined;
      this._grpcServices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptors = value.descriptors;
      this._grpcServices.internalValue = value.grpcServices;
    }
  }

  // descriptors - computed: false, optional: true, required: false
  private _descriptors?: string; 
  public get descriptors() {
    return this.getStringAttribute('descriptors');
  }
  public set descriptors(value: string) {
    this._descriptors = value;
  }
  public resetDescriptors() {
    this._descriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptorsInput() {
    return this._descriptors;
  }

  // grpc_services - computed: false, optional: true, required: false
  private _grpcServices = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServicesList(this, "grpc_services", false);
  public get grpcServices() {
    return this._grpcServices;
  }
  public putGrpcServices(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcGrpcServices[] | cdktf.IResolvable) {
    this._grpcServices.internalValue = value;
  }
  public resetGrpcServices() {
    this._grpcServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServicesInput() {
    return this._grpcServices.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#add_whitespace DataK8SGlooSoloIoUpstreamV1Manifest#add_whitespace}
  */
  readonly addWhitespace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#always_print_enums_as_ints DataK8SGlooSoloIoUpstreamV1Manifest#always_print_enums_as_ints}
  */
  readonly alwaysPrintEnumsAsInts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#always_print_primitive_fields DataK8SGlooSoloIoUpstreamV1Manifest#always_print_primitive_fields}
  */
  readonly alwaysPrintPrimitiveFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#preserve_proto_field_names DataK8SGlooSoloIoUpstreamV1Manifest#preserve_proto_field_names}
  */
  readonly preserveProtoFieldNames?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptionsToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_whitespace: cdktf.booleanToTerraform(struct!.addWhitespace),
    always_print_enums_as_ints: cdktf.booleanToTerraform(struct!.alwaysPrintEnumsAsInts),
    always_print_primitive_fields: cdktf.booleanToTerraform(struct!.alwaysPrintPrimitiveFields),
    preserve_proto_field_names: cdktf.booleanToTerraform(struct!.preserveProtoFieldNames),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptionsToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_whitespace: {
      value: cdktf.booleanToHclTerraform(struct!.addWhitespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_print_enums_as_ints: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysPrintEnumsAsInts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_print_primitive_fields: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysPrintPrimitiveFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_proto_field_names: {
      value: cdktf.booleanToHclTerraform(struct!.preserveProtoFieldNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addWhitespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.addWhitespace = this._addWhitespace;
    }
    if (this._alwaysPrintEnumsAsInts !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysPrintEnumsAsInts = this._alwaysPrintEnumsAsInts;
    }
    if (this._alwaysPrintPrimitiveFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysPrintPrimitiveFields = this._alwaysPrintPrimitiveFields;
    }
    if (this._preserveProtoFieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveProtoFieldNames = this._preserveProtoFieldNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addWhitespace = undefined;
      this._alwaysPrintEnumsAsInts = undefined;
      this._alwaysPrintPrimitiveFields = undefined;
      this._preserveProtoFieldNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addWhitespace = value.addWhitespace;
      this._alwaysPrintEnumsAsInts = value.alwaysPrintEnumsAsInts;
      this._alwaysPrintPrimitiveFields = value.alwaysPrintPrimitiveFields;
      this._preserveProtoFieldNames = value.preserveProtoFieldNames;
    }
  }

  // add_whitespace - computed: false, optional: true, required: false
  private _addWhitespace?: boolean | cdktf.IResolvable; 
  public get addWhitespace() {
    return this.getBooleanAttribute('add_whitespace');
  }
  public set addWhitespace(value: boolean | cdktf.IResolvable) {
    this._addWhitespace = value;
  }
  public resetAddWhitespace() {
    this._addWhitespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addWhitespaceInput() {
    return this._addWhitespace;
  }

  // always_print_enums_as_ints - computed: false, optional: true, required: false
  private _alwaysPrintEnumsAsInts?: boolean | cdktf.IResolvable; 
  public get alwaysPrintEnumsAsInts() {
    return this.getBooleanAttribute('always_print_enums_as_ints');
  }
  public set alwaysPrintEnumsAsInts(value: boolean | cdktf.IResolvable) {
    this._alwaysPrintEnumsAsInts = value;
  }
  public resetAlwaysPrintEnumsAsInts() {
    this._alwaysPrintEnumsAsInts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysPrintEnumsAsIntsInput() {
    return this._alwaysPrintEnumsAsInts;
  }

  // always_print_primitive_fields - computed: false, optional: true, required: false
  private _alwaysPrintPrimitiveFields?: boolean | cdktf.IResolvable; 
  public get alwaysPrintPrimitiveFields() {
    return this.getBooleanAttribute('always_print_primitive_fields');
  }
  public set alwaysPrintPrimitiveFields(value: boolean | cdktf.IResolvable) {
    this._alwaysPrintPrimitiveFields = value;
  }
  public resetAlwaysPrintPrimitiveFields() {
    this._alwaysPrintPrimitiveFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysPrintPrimitiveFieldsInput() {
    return this._alwaysPrintPrimitiveFields;
  }

  // preserve_proto_field_names - computed: false, optional: true, required: false
  private _preserveProtoFieldNames?: boolean | cdktf.IResolvable; 
  public get preserveProtoFieldNames() {
    return this.getBooleanAttribute('preserve_proto_field_names');
  }
  public set preserveProtoFieldNames(value: boolean | cdktf.IResolvable) {
    this._preserveProtoFieldNames = value;
  }
  public resetPreserveProtoFieldNames() {
    this._preserveProtoFieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveProtoFieldNamesInput() {
    return this._preserveProtoFieldNames;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#name DataK8SGlooSoloIoUpstreamV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#namespace DataK8SGlooSoloIoUpstreamV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRefToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRefToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#config_map_ref DataK8SGlooSoloIoUpstreamV1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#key DataK8SGlooSoloIoUpstreamV1Manifest#key}
  */
  readonly key?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRefToTerraform(struct!.configMapRef),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRef",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = value.configMapRef;
      this._key = value.key;
    }
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
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
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#auto_mapping DataK8SGlooSoloIoUpstreamV1Manifest#auto_mapping}
  */
  readonly autoMapping?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#convert_grpc_status DataK8SGlooSoloIoUpstreamV1Manifest#convert_grpc_status}
  */
  readonly convertGrpcStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#ignore_unknown_query_parameters DataK8SGlooSoloIoUpstreamV1Manifest#ignore_unknown_query_parameters}
  */
  readonly ignoreUnknownQueryParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#ignored_query_parameters DataK8SGlooSoloIoUpstreamV1Manifest#ignored_query_parameters}
  */
  readonly ignoredQueryParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#match_incoming_request_route DataK8SGlooSoloIoUpstreamV1Manifest#match_incoming_request_route}
  */
  readonly matchIncomingRequestRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#print_options DataK8SGlooSoloIoUpstreamV1Manifest#print_options}
  */
  readonly printOptions?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#proto_descriptor DataK8SGlooSoloIoUpstreamV1Manifest#proto_descriptor}
  */
  readonly protoDescriptor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#proto_descriptor_bin DataK8SGlooSoloIoUpstreamV1Manifest#proto_descriptor_bin}
  */
  readonly protoDescriptorBin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#proto_descriptor_config_map DataK8SGlooSoloIoUpstreamV1Manifest#proto_descriptor_config_map}
  */
  readonly protoDescriptorConfigMap?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#services DataK8SGlooSoloIoUpstreamV1Manifest#services}
  */
  readonly services?: string[];
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_mapping: cdktf.booleanToTerraform(struct!.autoMapping),
    convert_grpc_status: cdktf.booleanToTerraform(struct!.convertGrpcStatus),
    ignore_unknown_query_parameters: cdktf.booleanToTerraform(struct!.ignoreUnknownQueryParameters),
    ignored_query_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredQueryParameters),
    match_incoming_request_route: cdktf.booleanToTerraform(struct!.matchIncomingRequestRoute),
    print_options: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptionsToTerraform(struct!.printOptions),
    proto_descriptor: cdktf.stringToTerraform(struct!.protoDescriptor),
    proto_descriptor_bin: cdktf.stringToTerraform(struct!.protoDescriptorBin),
    proto_descriptor_config_map: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapToTerraform(struct!.protoDescriptorConfigMap),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.autoMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    convert_grpc_status: {
      value: cdktf.booleanToHclTerraform(struct!.convertGrpcStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_unknown_query_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUnknownQueryParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignored_query_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_incoming_request_route: {
      value: cdktf.booleanToHclTerraform(struct!.matchIncomingRequestRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    print_options: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptionsToHclTerraform(struct!.printOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptions",
    },
    proto_descriptor: {
      value: cdktf.stringToHclTerraform(struct!.protoDescriptor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_descriptor_bin: {
      value: cdktf.stringToHclTerraform(struct!.protoDescriptorBin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_descriptor_config_map: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapToHclTerraform(struct!.protoDescriptorConfigMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMap",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMapping = this._autoMapping;
    }
    if (this._convertGrpcStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.convertGrpcStatus = this._convertGrpcStatus;
    }
    if (this._ignoreUnknownQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnknownQueryParameters = this._ignoreUnknownQueryParameters;
    }
    if (this._ignoredQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredQueryParameters = this._ignoredQueryParameters;
    }
    if (this._matchIncomingRequestRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIncomingRequestRoute = this._matchIncomingRequestRoute;
    }
    if (this._printOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.printOptions = this._printOptions?.internalValue;
    }
    if (this._protoDescriptor !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoDescriptor = this._protoDescriptor;
    }
    if (this._protoDescriptorBin !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoDescriptorBin = this._protoDescriptorBin;
    }
    if (this._protoDescriptorConfigMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoDescriptorConfigMap = this._protoDescriptorConfigMap?.internalValue;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoMapping = undefined;
      this._convertGrpcStatus = undefined;
      this._ignoreUnknownQueryParameters = undefined;
      this._ignoredQueryParameters = undefined;
      this._matchIncomingRequestRoute = undefined;
      this._printOptions.internalValue = undefined;
      this._protoDescriptor = undefined;
      this._protoDescriptorBin = undefined;
      this._protoDescriptorConfigMap.internalValue = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoMapping = value.autoMapping;
      this._convertGrpcStatus = value.convertGrpcStatus;
      this._ignoreUnknownQueryParameters = value.ignoreUnknownQueryParameters;
      this._ignoredQueryParameters = value.ignoredQueryParameters;
      this._matchIncomingRequestRoute = value.matchIncomingRequestRoute;
      this._printOptions.internalValue = value.printOptions;
      this._protoDescriptor = value.protoDescriptor;
      this._protoDescriptorBin = value.protoDescriptorBin;
      this._protoDescriptorConfigMap.internalValue = value.protoDescriptorConfigMap;
      this._services = value.services;
    }
  }

  // auto_mapping - computed: false, optional: true, required: false
  private _autoMapping?: boolean | cdktf.IResolvable; 
  public get autoMapping() {
    return this.getBooleanAttribute('auto_mapping');
  }
  public set autoMapping(value: boolean | cdktf.IResolvable) {
    this._autoMapping = value;
  }
  public resetAutoMapping() {
    this._autoMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMappingInput() {
    return this._autoMapping;
  }

  // convert_grpc_status - computed: false, optional: true, required: false
  private _convertGrpcStatus?: boolean | cdktf.IResolvable; 
  public get convertGrpcStatus() {
    return this.getBooleanAttribute('convert_grpc_status');
  }
  public set convertGrpcStatus(value: boolean | cdktf.IResolvable) {
    this._convertGrpcStatus = value;
  }
  public resetConvertGrpcStatus() {
    this._convertGrpcStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertGrpcStatusInput() {
    return this._convertGrpcStatus;
  }

  // ignore_unknown_query_parameters - computed: false, optional: true, required: false
  private _ignoreUnknownQueryParameters?: boolean | cdktf.IResolvable; 
  public get ignoreUnknownQueryParameters() {
    return this.getBooleanAttribute('ignore_unknown_query_parameters');
  }
  public set ignoreUnknownQueryParameters(value: boolean | cdktf.IResolvable) {
    this._ignoreUnknownQueryParameters = value;
  }
  public resetIgnoreUnknownQueryParameters() {
    this._ignoreUnknownQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnknownQueryParametersInput() {
    return this._ignoreUnknownQueryParameters;
  }

  // ignored_query_parameters - computed: false, optional: true, required: false
  private _ignoredQueryParameters?: string[]; 
  public get ignoredQueryParameters() {
    return this.getListAttribute('ignored_query_parameters');
  }
  public set ignoredQueryParameters(value: string[]) {
    this._ignoredQueryParameters = value;
  }
  public resetIgnoredQueryParameters() {
    this._ignoredQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredQueryParametersInput() {
    return this._ignoredQueryParameters;
  }

  // match_incoming_request_route - computed: false, optional: true, required: false
  private _matchIncomingRequestRoute?: boolean | cdktf.IResolvable; 
  public get matchIncomingRequestRoute() {
    return this.getBooleanAttribute('match_incoming_request_route');
  }
  public set matchIncomingRequestRoute(value: boolean | cdktf.IResolvable) {
    this._matchIncomingRequestRoute = value;
  }
  public resetMatchIncomingRequestRoute() {
    this._matchIncomingRequestRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIncomingRequestRouteInput() {
    return this._matchIncomingRequestRoute;
  }

  // print_options - computed: false, optional: true, required: false
  private _printOptions = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptionsOutputReference(this, "print_options");
  public get printOptions() {
    return this._printOptions;
  }
  public putPrintOptions(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderPrintOptions) {
    this._printOptions.internalValue = value;
  }
  public resetPrintOptions() {
    this._printOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get printOptionsInput() {
    return this._printOptions.internalValue;
  }

  // proto_descriptor - computed: false, optional: true, required: false
  private _protoDescriptor?: string; 
  public get protoDescriptor() {
    return this.getStringAttribute('proto_descriptor');
  }
  public set protoDescriptor(value: string) {
    this._protoDescriptor = value;
  }
  public resetProtoDescriptor() {
    this._protoDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoDescriptorInput() {
    return this._protoDescriptor;
  }

  // proto_descriptor_bin - computed: false, optional: true, required: false
  private _protoDescriptorBin?: string; 
  public get protoDescriptorBin() {
    return this.getStringAttribute('proto_descriptor_bin');
  }
  public set protoDescriptorBin(value: string) {
    this._protoDescriptorBin = value;
  }
  public resetProtoDescriptorBin() {
    this._protoDescriptorBin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoDescriptorBinInput() {
    return this._protoDescriptorBin;
  }

  // proto_descriptor_config_map - computed: false, optional: true, required: false
  private _protoDescriptorConfigMap = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMapOutputReference(this, "proto_descriptor_config_map");
  public get protoDescriptorConfigMap() {
    return this._protoDescriptorConfigMap;
  }
  public putProtoDescriptorConfigMap(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderProtoDescriptorConfigMap) {
    this._protoDescriptorConfigMap.internalValue = value;
  }
  public resetProtoDescriptorConfigMap() {
    this._protoDescriptorConfigMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoDescriptorConfigMapInput() {
    return this._protoDescriptorConfigMap.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#inline DataK8SGlooSoloIoUpstreamV1Manifest#inline}
  */
  readonly inline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#url DataK8SGlooSoloIoUpstreamV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfoToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: cdktf.stringToTerraform(struct!.inline),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfoToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: cdktf.stringToHclTerraform(struct!.inline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline = value.inline;
      this._url = value.url;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline?: string; 
  public get inline() {
    return this.getStringAttribute('inline');
  }
  public set inline(value: string) {
    this._inline = value;
  }
  public resetInline() {
    this._inline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#text DataK8SGlooSoloIoUpstreamV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBodyToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBodyToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#text DataK8SGlooSoloIoUpstreamV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValueToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValueToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#json_to_proto DataK8SGlooSoloIoUpstreamV1Manifest#json_to_proto}
  */
  readonly jsonToProto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#key DataK8SGlooSoloIoUpstreamV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#metadata_namespace DataK8SGlooSoloIoUpstreamV1Manifest#metadata_namespace}
  */
  readonly metadataNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#value DataK8SGlooSoloIoUpstreamV1Manifest#value}
  */
  readonly value?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValue;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_to_proto: cdktf.booleanToTerraform(struct!.jsonToProto),
    key: cdktf.stringToTerraform(struct!.key),
    metadata_namespace: cdktf.stringToTerraform(struct!.metadataNamespace),
    value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValueToTerraform(struct!.value),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_to_proto: {
      value: cdktf.booleanToHclTerraform(struct!.jsonToProto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_namespace: {
      value: cdktf.stringToHclTerraform(struct!.metadataNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonToProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonToProto = this._jsonToProto;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._metadataNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataNamespace = this._metadataNamespace;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonToProto = undefined;
      this._key = undefined;
      this._metadataNamespace = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonToProto = value.jsonToProto;
      this._key = value.key;
      this._metadataNamespace = value.metadataNamespace;
      this._value.internalValue = value.value;
    }
  }

  // json_to_proto - computed: false, optional: true, required: false
  private _jsonToProto?: boolean | cdktf.IResolvable; 
  public get jsonToProto() {
    return this.getBooleanAttribute('json_to_proto');
  }
  public set jsonToProto(value: boolean | cdktf.IResolvable) {
    this._jsonToProto = value;
  }
  public resetJsonToProto() {
    this._jsonToProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonToProtoInput() {
    return this._jsonToProto;
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

  // metadata_namespace - computed: false, optional: true, required: false
  private _metadataNamespace?: string; 
  public get metadataNamespace() {
    return this.getStringAttribute('metadata_namespace');
  }
  public set metadataNamespace(value: string) {
    this._metadataNamespace = value;
  }
  public resetMetadataNamespace() {
    this._metadataNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataNamespaceInput() {
    return this._metadataNamespace;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValues[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesOutputReference {
    return new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#body DataK8SGlooSoloIoUpstreamV1Manifest#body}
  */
  readonly body?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#header DataK8SGlooSoloIoUpstreamV1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#mode DataK8SGlooSoloIoUpstreamV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#regex DataK8SGlooSoloIoUpstreamV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#replacement_text DataK8SGlooSoloIoUpstreamV1Manifest#replacement_text}
  */
  readonly replacementText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#subgroup DataK8SGlooSoloIoUpstreamV1Manifest#subgroup}
  */
  readonly subgroup?: number;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractorsToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.body),
    header: cdktf.stringToTerraform(struct!.header),
    mode: cdktf.stringToTerraform(struct!.mode),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement_text: cdktf.stringToTerraform(struct!.replacementText),
    subgroup: cdktf.numberToTerraform(struct!.subgroup),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractorsToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.body),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement_text: {
      value: cdktf.stringToHclTerraform(struct!.replacementText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subgroup: {
      value: cdktf.numberToHclTerraform(struct!.subgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacementText !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementText = this._replacementText;
    }
    if (this._subgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.subgroup = this._subgroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._header = undefined;
      this._mode = undefined;
      this._regex = undefined;
      this._replacementText = undefined;
      this._subgroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._header = value.header;
      this._mode = value.mode;
      this._regex = value.regex;
      this._replacementText = value.replacementText;
      this._subgroup = value.subgroup;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: { [key: string]: string }; 
  public get body() {
    return this.getStringMapAttribute('body');
  }
  public set body(value: { [key: string]: string }) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement_text - computed: false, optional: true, required: false
  private _replacementText?: string; 
  public get replacementText() {
    return this.getStringAttribute('replacement_text');
  }
  public set replacementText(value: string) {
    this._replacementText = value;
  }
  public resetReplacementText() {
    this._replacementText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementTextInput() {
    return this._replacementText;
  }

  // subgroup - computed: false, optional: true, required: false
  private _subgroup?: number; 
  public get subgroup() {
    return this.getNumberAttribute('subgroup');
  }
  public set subgroup(value: number) {
    this._subgroup = value;
  }
  public resetSubgroup() {
    this._subgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subgroupInput() {
    return this._subgroup;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#text DataK8SGlooSoloIoUpstreamV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#text DataK8SGlooSoloIoUpstreamV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValueToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValueToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#key DataK8SGlooSoloIoUpstreamV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#value DataK8SGlooSoloIoUpstreamV1Manifest#value}
  */
  readonly value?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValue;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValueToTerraform(struct!.value),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppend | cdktf.IResolvable): any {
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
    value: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppend[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendOutputReference {
    return new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#text DataK8SGlooSoloIoUpstreamV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#override_empty DataK8SGlooSoloIoUpstreamV1Manifest#override_empty}
  */
  readonly overrideEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#tmpl DataK8SGlooSoloIoUpstreamV1Manifest#tmpl}
  */
  readonly tmpl?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_empty: cdktf.booleanToTerraform(struct!.overrideEmpty),
    tmpl: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplToTerraform(struct!.tmpl),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_empty: {
      value: cdktf.booleanToHclTerraform(struct!.overrideEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tmpl: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplToHclTerraform(struct!.tmpl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideEmpty = this._overrideEmpty;
    }
    if (this._tmpl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpl = this._tmpl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideEmpty = undefined;
      this._tmpl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideEmpty = value.overrideEmpty;
      this._tmpl.internalValue = value.tmpl;
    }
  }

  // override_empty - computed: false, optional: true, required: false
  private _overrideEmpty?: boolean | cdktf.IResolvable; 
  public get overrideEmpty() {
    return this.getBooleanAttribute('override_empty');
  }
  public set overrideEmpty(value: boolean | cdktf.IResolvable) {
    this._overrideEmpty = value;
  }
  public resetOverrideEmpty() {
    this._overrideEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideEmptyInput() {
    return this._overrideEmpty;
  }

  // tmpl - computed: false, optional: true, required: false
  private _tmpl = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmplOutputReference(this, "tmpl");
  public get tmpl() {
    return this._tmpl;
  }
  public putTmpl(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysTmpl) {
    this._tmpl.internalValue = value;
  }
  public resetTmpl() {
    this._tmpl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmplInput() {
    return this._tmpl.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#json_keys DataK8SGlooSoloIoUpstreamV1Manifest#json_keys}
  */
  readonly jsonKeys?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeys;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_keys: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysToTerraform(struct!.jsonKeys),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_keys: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysToHclTerraform(struct!.jsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKeys = this._jsonKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKeys.internalValue = value.jsonKeys;
    }
  }

  // json_keys - computed: false, optional: true, required: false
  private _jsonKeys = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeysOutputReference(this, "json_keys");
  public get jsonKeys() {
    return this._jsonKeys;
  }
  public putJsonKeys(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysJsonKeys) {
    this._jsonKeys.internalValue = value;
  }
  public resetJsonKeys() {
    this._jsonKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeysInput() {
    return this._jsonKeys.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#advanced_templates DataK8SGlooSoloIoUpstreamV1Manifest#advanced_templates}
  */
  readonly advancedTemplates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#body DataK8SGlooSoloIoUpstreamV1Manifest#body}
  */
  readonly body?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#dynamic_metadata_values DataK8SGlooSoloIoUpstreamV1Manifest#dynamic_metadata_values}
  */
  readonly dynamicMetadataValues?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValues[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#escape_characters DataK8SGlooSoloIoUpstreamV1Manifest#escape_characters}
  */
  readonly escapeCharacters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#extractors DataK8SGlooSoloIoUpstreamV1Manifest#extractors}
  */
  readonly extractors?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#headers DataK8SGlooSoloIoUpstreamV1Manifest#headers}
  */
  readonly headers?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#headers_to_append DataK8SGlooSoloIoUpstreamV1Manifest#headers_to_append}
  */
  readonly headersToAppend?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppend[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#headers_to_remove DataK8SGlooSoloIoUpstreamV1Manifest#headers_to_remove}
  */
  readonly headersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#ignore_error_on_parse DataK8SGlooSoloIoUpstreamV1Manifest#ignore_error_on_parse}
  */
  readonly ignoreErrorOnParse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#merge_extractors_to_body DataK8SGlooSoloIoUpstreamV1Manifest#merge_extractors_to_body}
  */
  readonly mergeExtractorsToBody?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#merge_json_keys DataK8SGlooSoloIoUpstreamV1Manifest#merge_json_keys}
  */
  readonly mergeJsonKeys?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeys;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#parse_body_behavior DataK8SGlooSoloIoUpstreamV1Manifest#parse_body_behavior}
  */
  readonly parseBodyBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#passthrough DataK8SGlooSoloIoUpstreamV1Manifest#passthrough}
  */
  readonly passthrough?: { [key: string]: string };
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_templates: cdktf.booleanToTerraform(struct!.advancedTemplates),
    body: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBodyToTerraform(struct!.body),
    dynamic_metadata_values: cdktf.listMapper(dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesToTerraform, false)(struct!.dynamicMetadataValues),
    escape_characters: cdktf.booleanToTerraform(struct!.escapeCharacters),
    extractors: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractorsToTerraform(struct!.extractors),
    headers: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToTerraform(struct!.headers),
    headers_to_append: cdktf.listMapper(dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendToTerraform, false)(struct!.headersToAppend),
    headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToRemove),
    ignore_error_on_parse: cdktf.booleanToTerraform(struct!.ignoreErrorOnParse),
    merge_extractors_to_body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.mergeExtractorsToBody),
    merge_json_keys: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysToTerraform(struct!.mergeJsonKeys),
    parse_body_behavior: cdktf.stringToTerraform(struct!.parseBodyBehavior),
    passthrough: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.passthrough),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_templates: {
      value: cdktf.booleanToHclTerraform(struct!.advancedTemplates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    body: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBody",
    },
    dynamic_metadata_values: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesToHclTerraform, false)(struct!.dynamicMetadataValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesList",
    },
    escape_characters: {
      value: cdktf.booleanToHclTerraform(struct!.escapeCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extractors: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractorsToHclTerraform(struct!.extractors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractors",
    },
    headers: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeaders",
    },
    headers_to_append: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendToHclTerraform, false)(struct!.headersToAppend),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendList",
    },
    headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_error_on_parse: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrorOnParse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    merge_extractors_to_body: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.mergeExtractorsToBody),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    merge_json_keys: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysToHclTerraform(struct!.mergeJsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeys",
    },
    parse_body_behavior: {
      value: cdktf.stringToHclTerraform(struct!.parseBodyBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passthrough: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.passthrough),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedTemplates = this._advancedTemplates;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._dynamicMetadataValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicMetadataValues = this._dynamicMetadataValues?.internalValue;
    }
    if (this._escapeCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeCharacters = this._escapeCharacters;
    }
    if (this._extractors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractors = this._extractors?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._headersToAppend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToAppend = this._headersToAppend?.internalValue;
    }
    if (this._headersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToRemove = this._headersToRemove;
    }
    if (this._ignoreErrorOnParse !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrorOnParse = this._ignoreErrorOnParse;
    }
    if (this._mergeExtractorsToBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeExtractorsToBody = this._mergeExtractorsToBody;
    }
    if (this._mergeJsonKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeJsonKeys = this._mergeJsonKeys?.internalValue;
    }
    if (this._parseBodyBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseBodyBehavior = this._parseBodyBehavior;
    }
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedTemplates = undefined;
      this._body.internalValue = undefined;
      this._dynamicMetadataValues.internalValue = undefined;
      this._escapeCharacters = undefined;
      this._extractors.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._headersToAppend.internalValue = undefined;
      this._headersToRemove = undefined;
      this._ignoreErrorOnParse = undefined;
      this._mergeExtractorsToBody = undefined;
      this._mergeJsonKeys.internalValue = undefined;
      this._parseBodyBehavior = undefined;
      this._passthrough = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedTemplates = value.advancedTemplates;
      this._body.internalValue = value.body;
      this._dynamicMetadataValues.internalValue = value.dynamicMetadataValues;
      this._escapeCharacters = value.escapeCharacters;
      this._extractors.internalValue = value.extractors;
      this._headers.internalValue = value.headers;
      this._headersToAppend.internalValue = value.headersToAppend;
      this._headersToRemove = value.headersToRemove;
      this._ignoreErrorOnParse = value.ignoreErrorOnParse;
      this._mergeExtractorsToBody = value.mergeExtractorsToBody;
      this._mergeJsonKeys.internalValue = value.mergeJsonKeys;
      this._parseBodyBehavior = value.parseBodyBehavior;
      this._passthrough = value.passthrough;
    }
  }

  // advanced_templates - computed: false, optional: true, required: false
  private _advancedTemplates?: boolean | cdktf.IResolvable; 
  public get advancedTemplates() {
    return this.getBooleanAttribute('advanced_templates');
  }
  public set advancedTemplates(value: boolean | cdktf.IResolvable) {
    this._advancedTemplates = value;
  }
  public resetAdvancedTemplates() {
    this._advancedTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedTemplatesInput() {
    return this._advancedTemplates;
  }

  // body - computed: false, optional: true, required: false
  private _body = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // dynamic_metadata_values - computed: false, optional: true, required: false
  private _dynamicMetadataValues = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValuesList(this, "dynamic_metadata_values", false);
  public get dynamicMetadataValues() {
    return this._dynamicMetadataValues;
  }
  public putDynamicMetadataValues(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsDynamicMetadataValues[] | cdktf.IResolvable) {
    this._dynamicMetadataValues.internalValue = value;
  }
  public resetDynamicMetadataValues() {
    this._dynamicMetadataValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMetadataValuesInput() {
    return this._dynamicMetadataValues.internalValue;
  }

  // escape_characters - computed: false, optional: true, required: false
  private _escapeCharacters?: boolean | cdktf.IResolvable; 
  public get escapeCharacters() {
    return this.getBooleanAttribute('escape_characters');
  }
  public set escapeCharacters(value: boolean | cdktf.IResolvable) {
    this._escapeCharacters = value;
  }
  public resetEscapeCharacters() {
    this._escapeCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharactersInput() {
    return this._escapeCharacters;
  }

  // extractors - computed: false, optional: true, required: false
  private _extractors = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractorsOutputReference(this, "extractors");
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsExtractors) {
    this._extractors.internalValue = value;
  }
  public resetExtractors() {
    this._extractors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorsInput() {
    return this._extractors.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // headers_to_append - computed: false, optional: true, required: false
  private _headersToAppend = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppendList(this, "headers_to_append", false);
  public get headersToAppend() {
    return this._headersToAppend;
  }
  public putHeadersToAppend(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsHeadersToAppend[] | cdktf.IResolvable) {
    this._headersToAppend.internalValue = value;
  }
  public resetHeadersToAppend() {
    this._headersToAppend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToAppendInput() {
    return this._headersToAppend.internalValue;
  }

  // headers_to_remove - computed: false, optional: true, required: false
  private _headersToRemove?: string[]; 
  public get headersToRemove() {
    return this.getListAttribute('headers_to_remove');
  }
  public set headersToRemove(value: string[]) {
    this._headersToRemove = value;
  }
  public resetHeadersToRemove() {
    this._headersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToRemoveInput() {
    return this._headersToRemove;
  }

  // ignore_error_on_parse - computed: false, optional: true, required: false
  private _ignoreErrorOnParse?: boolean | cdktf.IResolvable; 
  public get ignoreErrorOnParse() {
    return this.getBooleanAttribute('ignore_error_on_parse');
  }
  public set ignoreErrorOnParse(value: boolean | cdktf.IResolvable) {
    this._ignoreErrorOnParse = value;
  }
  public resetIgnoreErrorOnParse() {
    this._ignoreErrorOnParse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorOnParseInput() {
    return this._ignoreErrorOnParse;
  }

  // merge_extractors_to_body - computed: false, optional: true, required: false
  private _mergeExtractorsToBody?: { [key: string]: string }; 
  public get mergeExtractorsToBody() {
    return this.getStringMapAttribute('merge_extractors_to_body');
  }
  public set mergeExtractorsToBody(value: { [key: string]: string }) {
    this._mergeExtractorsToBody = value;
  }
  public resetMergeExtractorsToBody() {
    this._mergeExtractorsToBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeExtractorsToBodyInput() {
    return this._mergeExtractorsToBody;
  }

  // merge_json_keys - computed: false, optional: true, required: false
  private _mergeJsonKeys = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeysOutputReference(this, "merge_json_keys");
  public get mergeJsonKeys() {
    return this._mergeJsonKeys;
  }
  public putMergeJsonKeys(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsMergeJsonKeys) {
    this._mergeJsonKeys.internalValue = value;
  }
  public resetMergeJsonKeys() {
    this._mergeJsonKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeJsonKeysInput() {
    return this._mergeJsonKeys.internalValue;
  }

  // parse_body_behavior - computed: false, optional: true, required: false
  private _parseBodyBehavior?: string; 
  public get parseBodyBehavior() {
    return this.getStringAttribute('parse_body_behavior');
  }
  public set parseBodyBehavior(value: string) {
    this._parseBodyBehavior = value;
  }
  public resetParseBodyBehavior() {
    this._parseBodyBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseBodyBehaviorInput() {
    return this._parseBodyBehavior;
  }

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: { [key: string]: string }; 
  public get passthrough() {
    return this.getStringMapAttribute('passthrough');
  }
  public set passthrough(value: { [key: string]: string }) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#swagger_info DataK8SGlooSoloIoUpstreamV1Manifest#swagger_info}
  */
  readonly swaggerInfo?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#transformations DataK8SGlooSoloIoUpstreamV1Manifest#transformations}
  */
  readonly transformations?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformations;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swagger_info: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfoToTerraform(struct!.swaggerInfo),
    transformations: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsToTerraform(struct!.transformations),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swagger_info: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfoToHclTerraform(struct!.swaggerInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfo",
    },
    transformations: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformations",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swaggerInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swaggerInfo = this._swaggerInfo?.internalValue;
    }
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._swaggerInfo.internalValue = undefined;
      this._transformations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._swaggerInfo.internalValue = value.swaggerInfo;
      this._transformations.internalValue = value.transformations;
    }
  }

  // swagger_info - computed: false, optional: true, required: false
  private _swaggerInfo = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfoOutputReference(this, "swagger_info");
  public get swaggerInfo() {
    return this._swaggerInfo;
  }
  public putSwaggerInfo(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestSwaggerInfo) {
    this._swaggerInfo.internalValue = value;
  }
  public resetSwaggerInfo() {
    this._swaggerInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swaggerInfoInput() {
    return this._swaggerInfo.internalValue;
  }

  // transformations - computed: false, optional: true, required: false
  private _transformations = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestTransformations) {
    this._transformations.internalValue = value;
  }
  public resetTransformations() {
    this._transformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#graphql DataK8SGlooSoloIoUpstreamV1Manifest#graphql}
  */
  readonly graphql?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#grpc DataK8SGlooSoloIoUpstreamV1Manifest#grpc}
  */
  readonly grpc?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#grpc_json_transcoder DataK8SGlooSoloIoUpstreamV1Manifest#grpc_json_transcoder}
  */
  readonly grpcJsonTranscoder?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#rest DataK8SGlooSoloIoUpstreamV1Manifest#rest}
  */
  readonly rest?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRest;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graphql: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlToTerraform(struct!.graphql),
    grpc: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcToTerraform(struct!.grpc),
    grpc_json_transcoder: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderToTerraform(struct!.grpcJsonTranscoder),
    rest: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestToTerraform(struct!.rest),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graphql: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlToHclTerraform(struct!.graphql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphql",
    },
    grpc: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpc",
    },
    grpc_json_transcoder: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderToHclTerraform(struct!.grpcJsonTranscoder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoder",
    },
    rest: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestToHclTerraform(struct!.rest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graphql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphql = this._graphql?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._grpcJsonTranscoder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcJsonTranscoder = this._grpcJsonTranscoder?.internalValue;
    }
    if (this._rest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rest = this._rest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graphql.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._grpcJsonTranscoder.internalValue = undefined;
      this._rest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graphql.internalValue = value.graphql;
      this._grpc.internalValue = value.grpc;
      this._grpcJsonTranscoder.internalValue = value.grpcJsonTranscoder;
      this._rest.internalValue = value.rest;
    }
  }

  // graphql - computed: false, optional: true, required: false
  private _graphql = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphqlOutputReference(this, "graphql");
  public get graphql() {
    return this._graphql;
  }
  public putGraphql(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGraphql) {
    this._graphql.internalValue = value;
  }
  public resetGraphql() {
    this._graphql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlInput() {
    return this._graphql.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // grpc_json_transcoder - computed: false, optional: true, required: false
  private _grpcJsonTranscoder = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoderOutputReference(this, "grpc_json_transcoder");
  public get grpcJsonTranscoder() {
    return this._grpcJsonTranscoder;
  }
  public putGrpcJsonTranscoder(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecGrpcJsonTranscoder) {
    this._grpcJsonTranscoder.internalValue = value;
  }
  public resetGrpcJsonTranscoder() {
    this._grpcJsonTranscoder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcJsonTranscoderInput() {
    return this._grpcJsonTranscoder.internalValue;
  }

  // rest - computed: false, optional: true, required: false
  private _rest = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRestOutputReference(this, "rest");
  public get rest() {
    return this._rest;
  }
  public putRest(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecRest) {
    this._rest.internalValue = value;
  }
  public resetRest() {
    this._rest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restInput() {
    return this._rest.internalValue;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpecStatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#auto_sni_rewrite DataK8SGlooSoloIoUpstreamV1Manifest#auto_sni_rewrite}
  */
  readonly autoSniRewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#hosts DataK8SGlooSoloIoUpstreamV1Manifest#hosts}
  */
  readonly hosts?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHosts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#service_spec DataK8SGlooSoloIoUpstreamV1Manifest#service_spec}
  */
  readonly serviceSpec?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#use_tls DataK8SGlooSoloIoUpstreamV1Manifest#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_sni_rewrite: cdktf.booleanToTerraform(struct!.autoSniRewrite),
    hosts: cdktf.listMapper(dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsToTerraform, false)(struct!.hosts),
    service_spec: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecToTerraform(struct!.serviceSpec),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_sni_rewrite: {
      value: cdktf.booleanToHclTerraform(struct!.autoSniRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosts: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsList",
    },
    service_spec: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecToHclTerraform(struct!.serviceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpec",
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

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpecStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSniRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSniRewrite = this._autoSniRewrite;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._serviceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSpec = this._serviceSpec?.internalValue;
    }
    if (this._useTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSniRewrite = undefined;
      this._hosts.internalValue = undefined;
      this._serviceSpec.internalValue = undefined;
      this._useTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSniRewrite = value.autoSniRewrite;
      this._hosts.internalValue = value.hosts;
      this._serviceSpec.internalValue = value.serviceSpec;
      this._useTls = value.useTls;
    }
  }

  // auto_sni_rewrite - computed: false, optional: true, required: false
  private _autoSniRewrite?: boolean | cdktf.IResolvable; 
  public get autoSniRewrite() {
    return this.getBooleanAttribute('auto_sni_rewrite');
  }
  public set autoSniRewrite(value: boolean | cdktf.IResolvable) {
    this._autoSniRewrite = value;
  }
  public resetAutoSniRewrite() {
    this._autoSniRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSniRewriteInput() {
    return this._autoSniRewrite;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // service_spec - computed: false, optional: true, required: false
  private _serviceSpec = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpecOutputReference(this, "service_spec");
  public get serviceSpec() {
    return this._serviceSpec;
  }
  public putServiceSpec(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticServiceSpec) {
    this._serviceSpec.internalValue = value;
  }
  public resetServiceSpec() {
    this._serviceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSpecInput() {
    return this._serviceSpec.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }
}
export interface DataK8SGlooSoloIoUpstreamV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#ai DataK8SGlooSoloIoUpstreamV1Manifest#ai}
  */
  readonly ai?: DataK8SGlooSoloIoUpstreamV1ManifestSpecAi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#aws DataK8SGlooSoloIoUpstreamV1Manifest#aws}
  */
  readonly aws?: DataK8SGlooSoloIoUpstreamV1ManifestSpecAws;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#aws_ec2 DataK8SGlooSoloIoUpstreamV1Manifest#aws_ec2}
  */
  readonly awsEc2?: DataK8SGlooSoloIoUpstreamV1ManifestSpecAwsEc2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#azure DataK8SGlooSoloIoUpstreamV1Manifest#azure}
  */
  readonly azure?: DataK8SGlooSoloIoUpstreamV1ManifestSpecAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#circuit_breakers DataK8SGlooSoloIoUpstreamV1Manifest#circuit_breakers}
  */
  readonly circuitBreakers?: DataK8SGlooSoloIoUpstreamV1ManifestSpecCircuitBreakers;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#connection_config DataK8SGlooSoloIoUpstreamV1Manifest#connection_config}
  */
  readonly connectionConfig?: DataK8SGlooSoloIoUpstreamV1ManifestSpecConnectionConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#consul DataK8SGlooSoloIoUpstreamV1Manifest#consul}
  */
  readonly consul?: DataK8SGlooSoloIoUpstreamV1ManifestSpecConsul;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#disable_istio_auto_mtls DataK8SGlooSoloIoUpstreamV1Manifest#disable_istio_auto_mtls}
  */
  readonly disableIstioAutoMtls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#discovery_metadata DataK8SGlooSoloIoUpstreamV1Manifest#discovery_metadata}
  */
  readonly discoveryMetadata?: DataK8SGlooSoloIoUpstreamV1ManifestSpecDiscoveryMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#dns_refresh_rate DataK8SGlooSoloIoUpstreamV1Manifest#dns_refresh_rate}
  */
  readonly dnsRefreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#failover DataK8SGlooSoloIoUpstreamV1Manifest#failover}
  */
  readonly failover?: DataK8SGlooSoloIoUpstreamV1ManifestSpecFailover;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#gcp DataK8SGlooSoloIoUpstreamV1Manifest#gcp}
  */
  readonly gcp?: DataK8SGlooSoloIoUpstreamV1ManifestSpecGcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#health_checks DataK8SGlooSoloIoUpstreamV1Manifest#health_checks}
  */
  readonly healthChecks?: DataK8SGlooSoloIoUpstreamV1ManifestSpecHealthChecks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#http_connect_headers DataK8SGlooSoloIoUpstreamV1Manifest#http_connect_headers}
  */
  readonly httpConnectHeaders?: DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#http_connect_ssl_config DataK8SGlooSoloIoUpstreamV1Manifest#http_connect_ssl_config}
  */
  readonly httpConnectSslConfig?: DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectSslConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#http_proxy_hostname DataK8SGlooSoloIoUpstreamV1Manifest#http_proxy_hostname}
  */
  readonly httpProxyHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#ignore_health_on_host_removal DataK8SGlooSoloIoUpstreamV1Manifest#ignore_health_on_host_removal}
  */
  readonly ignoreHealthOnHostRemoval?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#initial_connection_window_size DataK8SGlooSoloIoUpstreamV1Manifest#initial_connection_window_size}
  */
  readonly initialConnectionWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#initial_stream_window_size DataK8SGlooSoloIoUpstreamV1Manifest#initial_stream_window_size}
  */
  readonly initialStreamWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#kube DataK8SGlooSoloIoUpstreamV1Manifest#kube}
  */
  readonly kube?: DataK8SGlooSoloIoUpstreamV1ManifestSpecKube;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#load_balancer_config DataK8SGlooSoloIoUpstreamV1Manifest#load_balancer_config}
  */
  readonly loadBalancerConfig?: DataK8SGlooSoloIoUpstreamV1ManifestSpecLoadBalancerConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#max_concurrent_streams DataK8SGlooSoloIoUpstreamV1Manifest#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#namespaced_statuses DataK8SGlooSoloIoUpstreamV1Manifest#namespaced_statuses}
  */
  readonly namespacedStatuses?: DataK8SGlooSoloIoUpstreamV1ManifestSpecNamespacedStatuses;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#outlier_detection DataK8SGlooSoloIoUpstreamV1Manifest#outlier_detection}
  */
  readonly outlierDetection?: DataK8SGlooSoloIoUpstreamV1ManifestSpecOutlierDetection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#override_stream_error_on_invalid_http_message DataK8SGlooSoloIoUpstreamV1Manifest#override_stream_error_on_invalid_http_message}
  */
  readonly overrideStreamErrorOnInvalidHttpMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#pipe DataK8SGlooSoloIoUpstreamV1Manifest#pipe}
  */
  readonly pipe?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#preconnect_policy DataK8SGlooSoloIoUpstreamV1Manifest#preconnect_policy}
  */
  readonly preconnectPolicy?: DataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#protocol_selection DataK8SGlooSoloIoUpstreamV1Manifest#protocol_selection}
  */
  readonly protocolSelection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#proxy_protocol_version DataK8SGlooSoloIoUpstreamV1Manifest#proxy_protocol_version}
  */
  readonly proxyProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#respect_dns_ttl DataK8SGlooSoloIoUpstreamV1Manifest#respect_dns_ttl}
  */
  readonly respectDnsTtl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#ssl_config DataK8SGlooSoloIoUpstreamV1Manifest#ssl_config}
  */
  readonly sslConfig?: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#static DataK8SGlooSoloIoUpstreamV1Manifest#static}
  */
  readonly static?: DataK8SGlooSoloIoUpstreamV1ManifestSpecStatic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gloo_solo_io_upstream_v1_manifest#use_http2 DataK8SGlooSoloIoUpstreamV1Manifest#use_http2}
  */
  readonly useHttp2?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoUpstreamV1ManifestSpecToTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai: dataK8SGlooSoloIoUpstreamV1ManifestSpecAiToTerraform(struct!.ai),
    aws: dataK8SGlooSoloIoUpstreamV1ManifestSpecAwsToTerraform(struct!.aws),
    aws_ec2: dataK8SGlooSoloIoUpstreamV1ManifestSpecAwsEc2ToTerraform(struct!.awsEc2),
    azure: dataK8SGlooSoloIoUpstreamV1ManifestSpecAzureToTerraform(struct!.azure),
    circuit_breakers: dataK8SGlooSoloIoUpstreamV1ManifestSpecCircuitBreakersToTerraform(struct!.circuitBreakers),
    connection_config: dataK8SGlooSoloIoUpstreamV1ManifestSpecConnectionConfigToTerraform(struct!.connectionConfig),
    consul: dataK8SGlooSoloIoUpstreamV1ManifestSpecConsulToTerraform(struct!.consul),
    disable_istio_auto_mtls: cdktf.booleanToTerraform(struct!.disableIstioAutoMtls),
    discovery_metadata: dataK8SGlooSoloIoUpstreamV1ManifestSpecDiscoveryMetadataToTerraform(struct!.discoveryMetadata),
    dns_refresh_rate: cdktf.stringToTerraform(struct!.dnsRefreshRate),
    failover: dataK8SGlooSoloIoUpstreamV1ManifestSpecFailoverToTerraform(struct!.failover),
    gcp: dataK8SGlooSoloIoUpstreamV1ManifestSpecGcpToTerraform(struct!.gcp),
    health_checks: cdktf.listMapper(dataK8SGlooSoloIoUpstreamV1ManifestSpecHealthChecksToTerraform, false)(struct!.healthChecks),
    http_connect_headers: cdktf.listMapper(dataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectHeadersToTerraform, false)(struct!.httpConnectHeaders),
    http_connect_ssl_config: dataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectSslConfigToTerraform(struct!.httpConnectSslConfig),
    http_proxy_hostname: cdktf.stringToTerraform(struct!.httpProxyHostname),
    ignore_health_on_host_removal: cdktf.booleanToTerraform(struct!.ignoreHealthOnHostRemoval),
    initial_connection_window_size: cdktf.numberToTerraform(struct!.initialConnectionWindowSize),
    initial_stream_window_size: cdktf.numberToTerraform(struct!.initialStreamWindowSize),
    kube: dataK8SGlooSoloIoUpstreamV1ManifestSpecKubeToTerraform(struct!.kube),
    load_balancer_config: dataK8SGlooSoloIoUpstreamV1ManifestSpecLoadBalancerConfigToTerraform(struct!.loadBalancerConfig),
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
    namespaced_statuses: dataK8SGlooSoloIoUpstreamV1ManifestSpecNamespacedStatusesToTerraform(struct!.namespacedStatuses),
    outlier_detection: dataK8SGlooSoloIoUpstreamV1ManifestSpecOutlierDetectionToTerraform(struct!.outlierDetection),
    override_stream_error_on_invalid_http_message: cdktf.booleanToTerraform(struct!.overrideStreamErrorOnInvalidHttpMessage),
    pipe: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeToTerraform(struct!.pipe),
    preconnect_policy: dataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicyToTerraform(struct!.preconnectPolicy),
    protocol_selection: cdktf.stringToTerraform(struct!.protocolSelection),
    proxy_protocol_version: cdktf.stringToTerraform(struct!.proxyProtocolVersion),
    respect_dns_ttl: cdktf.booleanToTerraform(struct!.respectDnsTtl),
    ssl_config: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigToTerraform(struct!.sslConfig),
    static: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticToTerraform(struct!.static),
    use_http2: cdktf.booleanToTerraform(struct!.useHttp2),
  }
}


export function dataK8SGlooSoloIoUpstreamV1ManifestSpecToHclTerraform(struct?: DataK8SGlooSoloIoUpstreamV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecAiToHclTerraform(struct!.ai),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecAi",
    },
    aws: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecAws",
    },
    aws_ec2: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecAwsEc2ToHclTerraform(struct!.awsEc2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecAwsEc2",
    },
    azure: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecAzure",
    },
    circuit_breakers: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecCircuitBreakersToHclTerraform(struct!.circuitBreakers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecCircuitBreakers",
    },
    connection_config: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecConnectionConfigToHclTerraform(struct!.connectionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecConnectionConfig",
    },
    consul: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecConsulToHclTerraform(struct!.consul),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecConsul",
    },
    disable_istio_auto_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.disableIstioAutoMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery_metadata: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecDiscoveryMetadataToHclTerraform(struct!.discoveryMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecDiscoveryMetadata",
    },
    dns_refresh_rate: {
      value: cdktf.stringToHclTerraform(struct!.dnsRefreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecFailoverToHclTerraform(struct!.failover),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecFailover",
    },
    gcp: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecGcp",
    },
    health_checks: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoUpstreamV1ManifestSpecHealthChecksToHclTerraform, false)(struct!.healthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecHealthChecksList",
    },
    http_connect_headers: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectHeadersToHclTerraform, false)(struct!.httpConnectHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectHeadersList",
    },
    http_connect_ssl_config: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectSslConfigToHclTerraform(struct!.httpConnectSslConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectSslConfig",
    },
    http_proxy_hostname: {
      value: cdktf.stringToHclTerraform(struct!.httpProxyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_health_on_host_removal: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHealthOnHostRemoval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_connection_window_size: {
      value: cdktf.numberToHclTerraform(struct!.initialConnectionWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_stream_window_size: {
      value: cdktf.numberToHclTerraform(struct!.initialStreamWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecKubeToHclTerraform(struct!.kube),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecKube",
    },
    load_balancer_config: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecLoadBalancerConfigToHclTerraform(struct!.loadBalancerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecLoadBalancerConfig",
    },
    max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    namespaced_statuses: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecNamespacedStatusesToHclTerraform(struct!.namespacedStatuses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecNamespacedStatuses",
    },
    outlier_detection: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecOutlierDetection",
    },
    override_stream_error_on_invalid_http_message: {
      value: cdktf.booleanToHclTerraform(struct!.overrideStreamErrorOnInvalidHttpMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipe: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPipeToHclTerraform(struct!.pipe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPipe",
    },
    preconnect_policy: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicyToHclTerraform(struct!.preconnectPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicy",
    },
    protocol_selection: {
      value: cdktf.stringToHclTerraform(struct!.protocolSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.proxyProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    respect_dns_ttl: {
      value: cdktf.booleanToHclTerraform(struct!.respectDnsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_config: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfig",
    },
    static: {
      value: dataK8SGlooSoloIoUpstreamV1ManifestSpecStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoUpstreamV1ManifestSpecStatic",
    },
    use_http2: {
      value: cdktf.booleanToHclTerraform(struct!.useHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoUpstreamV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoUpstreamV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ai?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ai = this._ai?.internalValue;
    }
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._awsEc2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEc2 = this._awsEc2?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._circuitBreakers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitBreakers = this._circuitBreakers?.internalValue;
    }
    if (this._connectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionConfig = this._connectionConfig?.internalValue;
    }
    if (this._consul?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consul = this._consul?.internalValue;
    }
    if (this._disableIstioAutoMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIstioAutoMtls = this._disableIstioAutoMtls;
    }
    if (this._discoveryMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryMetadata = this._discoveryMetadata?.internalValue;
    }
    if (this._dnsRefreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRefreshRate = this._dnsRefreshRate;
    }
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    if (this._healthChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthChecks = this._healthChecks?.internalValue;
    }
    if (this._httpConnectHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConnectHeaders = this._httpConnectHeaders?.internalValue;
    }
    if (this._httpConnectSslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConnectSslConfig = this._httpConnectSslConfig?.internalValue;
    }
    if (this._httpProxyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyHostname = this._httpProxyHostname;
    }
    if (this._ignoreHealthOnHostRemoval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHealthOnHostRemoval = this._ignoreHealthOnHostRemoval;
    }
    if (this._initialConnectionWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialConnectionWindowSize = this._initialConnectionWindowSize;
    }
    if (this._initialStreamWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialStreamWindowSize = this._initialStreamWindowSize;
    }
    if (this._kube?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kube = this._kube?.internalValue;
    }
    if (this._loadBalancerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerConfig = this._loadBalancerConfig?.internalValue;
    }
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    if (this._namespacedStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedStatuses = this._namespacedStatuses?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    if (this._overrideStreamErrorOnInvalidHttpMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideStreamErrorOnInvalidHttpMessage = this._overrideStreamErrorOnInvalidHttpMessage;
    }
    if (this._pipe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipe = this._pipe?.internalValue;
    }
    if (this._preconnectPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconnectPolicy = this._preconnectPolicy?.internalValue;
    }
    if (this._protocolSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolSelection = this._protocolSelection;
    }
    if (this._proxyProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocolVersion = this._proxyProtocolVersion;
    }
    if (this._respectDnsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectDnsTtl = this._respectDnsTtl;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    if (this._useHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttp2 = this._useHttp2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoUpstreamV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ai.internalValue = undefined;
      this._aws.internalValue = undefined;
      this._awsEc2.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._circuitBreakers.internalValue = undefined;
      this._connectionConfig.internalValue = undefined;
      this._consul.internalValue = undefined;
      this._disableIstioAutoMtls = undefined;
      this._discoveryMetadata.internalValue = undefined;
      this._dnsRefreshRate = undefined;
      this._failover.internalValue = undefined;
      this._gcp.internalValue = undefined;
      this._healthChecks.internalValue = undefined;
      this._httpConnectHeaders.internalValue = undefined;
      this._httpConnectSslConfig.internalValue = undefined;
      this._httpProxyHostname = undefined;
      this._ignoreHealthOnHostRemoval = undefined;
      this._initialConnectionWindowSize = undefined;
      this._initialStreamWindowSize = undefined;
      this._kube.internalValue = undefined;
      this._loadBalancerConfig.internalValue = undefined;
      this._maxConcurrentStreams = undefined;
      this._namespacedStatuses.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
      this._overrideStreamErrorOnInvalidHttpMessage = undefined;
      this._pipe.internalValue = undefined;
      this._preconnectPolicy.internalValue = undefined;
      this._protocolSelection = undefined;
      this._proxyProtocolVersion = undefined;
      this._respectDnsTtl = undefined;
      this._sslConfig.internalValue = undefined;
      this._static.internalValue = undefined;
      this._useHttp2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ai.internalValue = value.ai;
      this._aws.internalValue = value.aws;
      this._awsEc2.internalValue = value.awsEc2;
      this._azure.internalValue = value.azure;
      this._circuitBreakers.internalValue = value.circuitBreakers;
      this._connectionConfig.internalValue = value.connectionConfig;
      this._consul.internalValue = value.consul;
      this._disableIstioAutoMtls = value.disableIstioAutoMtls;
      this._discoveryMetadata.internalValue = value.discoveryMetadata;
      this._dnsRefreshRate = value.dnsRefreshRate;
      this._failover.internalValue = value.failover;
      this._gcp.internalValue = value.gcp;
      this._healthChecks.internalValue = value.healthChecks;
      this._httpConnectHeaders.internalValue = value.httpConnectHeaders;
      this._httpConnectSslConfig.internalValue = value.httpConnectSslConfig;
      this._httpProxyHostname = value.httpProxyHostname;
      this._ignoreHealthOnHostRemoval = value.ignoreHealthOnHostRemoval;
      this._initialConnectionWindowSize = value.initialConnectionWindowSize;
      this._initialStreamWindowSize = value.initialStreamWindowSize;
      this._kube.internalValue = value.kube;
      this._loadBalancerConfig.internalValue = value.loadBalancerConfig;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
      this._namespacedStatuses.internalValue = value.namespacedStatuses;
      this._outlierDetection.internalValue = value.outlierDetection;
      this._overrideStreamErrorOnInvalidHttpMessage = value.overrideStreamErrorOnInvalidHttpMessage;
      this._pipe.internalValue = value.pipe;
      this._preconnectPolicy.internalValue = value.preconnectPolicy;
      this._protocolSelection = value.protocolSelection;
      this._proxyProtocolVersion = value.proxyProtocolVersion;
      this._respectDnsTtl = value.respectDnsTtl;
      this._sslConfig.internalValue = value.sslConfig;
      this._static.internalValue = value.static;
      this._useHttp2 = value.useHttp2;
    }
  }

  // ai - computed: false, optional: true, required: false
  private _ai = new DataK8SGlooSoloIoUpstreamV1ManifestSpecAiOutputReference(this, "ai");
  public get ai() {
    return this._ai;
  }
  public putAi(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecAi) {
    this._ai.internalValue = value;
  }
  public resetAi() {
    this._ai.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiInput() {
    return this._ai.internalValue;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SGlooSoloIoUpstreamV1ManifestSpecAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // aws_ec2 - computed: false, optional: true, required: false
  private _awsEc2 = new DataK8SGlooSoloIoUpstreamV1ManifestSpecAwsEc2OutputReference(this, "aws_ec2");
  public get awsEc2() {
    return this._awsEc2;
  }
  public putAwsEc2(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecAwsEc2) {
    this._awsEc2.internalValue = value;
  }
  public resetAwsEc2() {
    this._awsEc2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2Input() {
    return this._awsEc2.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SGlooSoloIoUpstreamV1ManifestSpecAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // circuit_breakers - computed: false, optional: true, required: false
  private _circuitBreakers = new DataK8SGlooSoloIoUpstreamV1ManifestSpecCircuitBreakersOutputReference(this, "circuit_breakers");
  public get circuitBreakers() {
    return this._circuitBreakers;
  }
  public putCircuitBreakers(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecCircuitBreakers) {
    this._circuitBreakers.internalValue = value;
  }
  public resetCircuitBreakers() {
    this._circuitBreakers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakersInput() {
    return this._circuitBreakers.internalValue;
  }

  // connection_config - computed: false, optional: true, required: false
  private _connectionConfig = new DataK8SGlooSoloIoUpstreamV1ManifestSpecConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }

  // consul - computed: false, optional: true, required: false
  private _consul = new DataK8SGlooSoloIoUpstreamV1ManifestSpecConsulOutputReference(this, "consul");
  public get consul() {
    return this._consul;
  }
  public putConsul(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecConsul) {
    this._consul.internalValue = value;
  }
  public resetConsul() {
    this._consul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulInput() {
    return this._consul.internalValue;
  }

  // disable_istio_auto_mtls - computed: false, optional: true, required: false
  private _disableIstioAutoMtls?: boolean | cdktf.IResolvable; 
  public get disableIstioAutoMtls() {
    return this.getBooleanAttribute('disable_istio_auto_mtls');
  }
  public set disableIstioAutoMtls(value: boolean | cdktf.IResolvable) {
    this._disableIstioAutoMtls = value;
  }
  public resetDisableIstioAutoMtls() {
    this._disableIstioAutoMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIstioAutoMtlsInput() {
    return this._disableIstioAutoMtls;
  }

  // discovery_metadata - computed: false, optional: true, required: false
  private _discoveryMetadata = new DataK8SGlooSoloIoUpstreamV1ManifestSpecDiscoveryMetadataOutputReference(this, "discovery_metadata");
  public get discoveryMetadata() {
    return this._discoveryMetadata;
  }
  public putDiscoveryMetadata(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecDiscoveryMetadata) {
    this._discoveryMetadata.internalValue = value;
  }
  public resetDiscoveryMetadata() {
    this._discoveryMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryMetadataInput() {
    return this._discoveryMetadata.internalValue;
  }

  // dns_refresh_rate - computed: false, optional: true, required: false
  private _dnsRefreshRate?: string; 
  public get dnsRefreshRate() {
    return this.getStringAttribute('dns_refresh_rate');
  }
  public set dnsRefreshRate(value: string) {
    this._dnsRefreshRate = value;
  }
  public resetDnsRefreshRate() {
    this._dnsRefreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRefreshRateInput() {
    return this._dnsRefreshRate;
  }

  // failover - computed: false, optional: true, required: false
  private _failover = new DataK8SGlooSoloIoUpstreamV1ManifestSpecFailoverOutputReference(this, "failover");
  public get failover() {
    return this._failover;
  }
  public putFailover(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecFailover) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new DataK8SGlooSoloIoUpstreamV1ManifestSpecGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks = new DataK8SGlooSoloIoUpstreamV1ManifestSpecHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecHealthChecks[] | cdktf.IResolvable) {
    this._healthChecks.internalValue = value;
  }
  public resetHealthChecks() {
    this._healthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks.internalValue;
  }

  // http_connect_headers - computed: false, optional: true, required: false
  private _httpConnectHeaders = new DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectHeadersList(this, "http_connect_headers", false);
  public get httpConnectHeaders() {
    return this._httpConnectHeaders;
  }
  public putHttpConnectHeaders(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectHeaders[] | cdktf.IResolvable) {
    this._httpConnectHeaders.internalValue = value;
  }
  public resetHttpConnectHeaders() {
    this._httpConnectHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectHeadersInput() {
    return this._httpConnectHeaders.internalValue;
  }

  // http_connect_ssl_config - computed: false, optional: true, required: false
  private _httpConnectSslConfig = new DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectSslConfigOutputReference(this, "http_connect_ssl_config");
  public get httpConnectSslConfig() {
    return this._httpConnectSslConfig;
  }
  public putHttpConnectSslConfig(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecHttpConnectSslConfig) {
    this._httpConnectSslConfig.internalValue = value;
  }
  public resetHttpConnectSslConfig() {
    this._httpConnectSslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectSslConfigInput() {
    return this._httpConnectSslConfig.internalValue;
  }

  // http_proxy_hostname - computed: false, optional: true, required: false
  private _httpProxyHostname?: string; 
  public get httpProxyHostname() {
    return this.getStringAttribute('http_proxy_hostname');
  }
  public set httpProxyHostname(value: string) {
    this._httpProxyHostname = value;
  }
  public resetHttpProxyHostname() {
    this._httpProxyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyHostnameInput() {
    return this._httpProxyHostname;
  }

  // ignore_health_on_host_removal - computed: false, optional: true, required: false
  private _ignoreHealthOnHostRemoval?: boolean | cdktf.IResolvable; 
  public get ignoreHealthOnHostRemoval() {
    return this.getBooleanAttribute('ignore_health_on_host_removal');
  }
  public set ignoreHealthOnHostRemoval(value: boolean | cdktf.IResolvable) {
    this._ignoreHealthOnHostRemoval = value;
  }
  public resetIgnoreHealthOnHostRemoval() {
    this._ignoreHealthOnHostRemoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHealthOnHostRemovalInput() {
    return this._ignoreHealthOnHostRemoval;
  }

  // initial_connection_window_size - computed: false, optional: true, required: false
  private _initialConnectionWindowSize?: number; 
  public get initialConnectionWindowSize() {
    return this.getNumberAttribute('initial_connection_window_size');
  }
  public set initialConnectionWindowSize(value: number) {
    this._initialConnectionWindowSize = value;
  }
  public resetInitialConnectionWindowSize() {
    this._initialConnectionWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialConnectionWindowSizeInput() {
    return this._initialConnectionWindowSize;
  }

  // initial_stream_window_size - computed: false, optional: true, required: false
  private _initialStreamWindowSize?: number; 
  public get initialStreamWindowSize() {
    return this.getNumberAttribute('initial_stream_window_size');
  }
  public set initialStreamWindowSize(value: number) {
    this._initialStreamWindowSize = value;
  }
  public resetInitialStreamWindowSize() {
    this._initialStreamWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialStreamWindowSizeInput() {
    return this._initialStreamWindowSize;
  }

  // kube - computed: false, optional: true, required: false
  private _kube = new DataK8SGlooSoloIoUpstreamV1ManifestSpecKubeOutputReference(this, "kube");
  public get kube() {
    return this._kube;
  }
  public putKube(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecKube) {
    this._kube.internalValue = value;
  }
  public resetKube() {
    this._kube.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeInput() {
    return this._kube.internalValue;
  }

  // load_balancer_config - computed: false, optional: true, required: false
  private _loadBalancerConfig = new DataK8SGlooSoloIoUpstreamV1ManifestSpecLoadBalancerConfigOutputReference(this, "load_balancer_config");
  public get loadBalancerConfig() {
    return this._loadBalancerConfig;
  }
  public putLoadBalancerConfig(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecLoadBalancerConfig) {
    this._loadBalancerConfig.internalValue = value;
  }
  public resetLoadBalancerConfig() {
    this._loadBalancerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerConfigInput() {
    return this._loadBalancerConfig.internalValue;
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }

  // namespaced_statuses - computed: false, optional: true, required: false
  private _namespacedStatuses = new DataK8SGlooSoloIoUpstreamV1ManifestSpecNamespacedStatusesOutputReference(this, "namespaced_statuses");
  public get namespacedStatuses() {
    return this._namespacedStatuses;
  }
  public putNamespacedStatuses(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecNamespacedStatuses) {
    this._namespacedStatuses.internalValue = value;
  }
  public resetNamespacedStatuses() {
    this._namespacedStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedStatusesInput() {
    return this._namespacedStatuses.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new DataK8SGlooSoloIoUpstreamV1ManifestSpecOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // override_stream_error_on_invalid_http_message - computed: false, optional: true, required: false
  private _overrideStreamErrorOnInvalidHttpMessage?: boolean | cdktf.IResolvable; 
  public get overrideStreamErrorOnInvalidHttpMessage() {
    return this.getBooleanAttribute('override_stream_error_on_invalid_http_message');
  }
  public set overrideStreamErrorOnInvalidHttpMessage(value: boolean | cdktf.IResolvable) {
    this._overrideStreamErrorOnInvalidHttpMessage = value;
  }
  public resetOverrideStreamErrorOnInvalidHttpMessage() {
    this._overrideStreamErrorOnInvalidHttpMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideStreamErrorOnInvalidHttpMessageInput() {
    return this._overrideStreamErrorOnInvalidHttpMessage;
  }

  // pipe - computed: false, optional: true, required: false
  private _pipe = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPipeOutputReference(this, "pipe");
  public get pipe() {
    return this._pipe;
  }
  public putPipe(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPipe) {
    this._pipe.internalValue = value;
  }
  public resetPipe() {
    this._pipe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipeInput() {
    return this._pipe.internalValue;
  }

  // preconnect_policy - computed: false, optional: true, required: false
  private _preconnectPolicy = new DataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicyOutputReference(this, "preconnect_policy");
  public get preconnectPolicy() {
    return this._preconnectPolicy;
  }
  public putPreconnectPolicy(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecPreconnectPolicy) {
    this._preconnectPolicy.internalValue = value;
  }
  public resetPreconnectPolicy() {
    this._preconnectPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconnectPolicyInput() {
    return this._preconnectPolicy.internalValue;
  }

  // protocol_selection - computed: false, optional: true, required: false
  private _protocolSelection?: string; 
  public get protocolSelection() {
    return this.getStringAttribute('protocol_selection');
  }
  public set protocolSelection(value: string) {
    this._protocolSelection = value;
  }
  public resetProtocolSelection() {
    this._protocolSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolSelectionInput() {
    return this._protocolSelection;
  }

  // proxy_protocol_version - computed: false, optional: true, required: false
  private _proxyProtocolVersion?: string; 
  public get proxyProtocolVersion() {
    return this.getStringAttribute('proxy_protocol_version');
  }
  public set proxyProtocolVersion(value: string) {
    this._proxyProtocolVersion = value;
  }
  public resetProxyProtocolVersion() {
    this._proxyProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolVersionInput() {
    return this._proxyProtocolVersion;
  }

  // respect_dns_ttl - computed: false, optional: true, required: false
  private _respectDnsTtl?: boolean | cdktf.IResolvable; 
  public get respectDnsTtl() {
    return this.getBooleanAttribute('respect_dns_ttl');
  }
  public set respectDnsTtl(value: boolean | cdktf.IResolvable) {
    this._respectDnsTtl = value;
  }
  public resetRespectDnsTtl() {
    this._respectDnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectDnsTtlInput() {
    return this._respectDnsTtl;
  }

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new DataK8SGlooSoloIoUpstreamV1ManifestSpecStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: DataK8SGlooSoloIoUpstreamV1ManifestSpecStatic) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }

  // use_http2 - computed: false, optional: true, required: false
  private _useHttp2?: boolean | cdktf.IResolvable; 
  public get useHttp2() {
    return this.getBooleanAttribute('use_http2');
  }
  public set useHttp2(value: boolean | cdktf.IResolvable) {
    this._useHttp2 = value;
  }
  public resetUseHttp2() {
    this._useHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttp2Input() {
    return this._useHttp2;
  }
}
