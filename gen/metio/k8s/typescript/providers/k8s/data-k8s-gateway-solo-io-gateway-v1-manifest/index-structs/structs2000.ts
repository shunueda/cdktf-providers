import * as cdktf from 'cdktf';
import { DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateBody,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateBodyToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateBodyToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateBodyOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateDynamicMetadataValues,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateDynamicMetadataValuesToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateDynamicMetadataValuesToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateDynamicMetadataValuesList,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateExtractors,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateExtractorsToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateExtractorsToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateExtractorsOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeaders,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToAppend,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToAppendToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToAppendToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToAppendList,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateMergeJsonKeys,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateMergeJsonKeysToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateMergeJsonKeysToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateMergeJsonKeysOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationHeaderBodyTransform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationHeaderBodyTransformToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationHeaderBodyTransformToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationHeaderBodyTransformOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsHeaderManipulation,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsHeaderManipulationToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsHeaderManipulationToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsHeaderManipulationOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsStagedTransformations,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsStagedTransformationsToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsStagedTransformationsToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsStagedTransformationsOutputReference } from './structs1600'
import { DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsBufferPerRoute,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsBufferPerRouteToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsBufferPerRouteToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsBufferPerRouteOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsCsrf,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsCsrfToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsCsrfToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsCsrfOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtauth,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtauthToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtauthToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtauthOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtensions,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtensionsToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtensionsToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtensionsOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsDestination,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsDestinationToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsDestinationToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsDestinationOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOptions,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOptionsToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOptionsToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOptionsOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecHybridGateway,
dataK8SGatewaySoloIoGatewayV1ManifestSpecHybridGatewayToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecHybridGatewayToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecHybridGatewayOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecNamespacedStatuses,
dataK8SGatewaySoloIoGatewayV1ManifestSpecNamespacedStatusesToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecNamespacedStatusesToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecNamespacedStatusesOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecOptions,
dataK8SGatewaySoloIoGatewayV1ManifestSpecOptionsToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecOptionsToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecOptionsOutputReference,
DataK8SGatewaySoloIoGatewayV1ManifestSpecRouteOptions,
dataK8SGatewaySoloIoGatewayV1ManifestSpecRouteOptionsToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecRouteOptionsToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecRouteOptionsOutputReference } from './structs1200'
import { DataK8SGatewaySoloIoGatewayV1ManifestSpecHttpGateway,
dataK8SGatewaySoloIoGatewayV1ManifestSpecHttpGatewayToTerraform,
dataK8SGatewaySoloIoGatewayV1ManifestSpecHttpGatewayToHclTerraform,
DataK8SGatewaySoloIoGatewayV1ManifestSpecHttpGatewayOutputReference } from './structs0'
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#advanced_templates DataK8SGatewaySoloIoGatewayV1Manifest#advanced_templates}
  */
  readonly advancedTemplates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#body DataK8SGatewaySoloIoGatewayV1Manifest#body}
  */
  readonly body?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#dynamic_metadata_values DataK8SGatewaySoloIoGatewayV1Manifest#dynamic_metadata_values}
  */
  readonly dynamicMetadataValues?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateDynamicMetadataValues[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#escape_characters DataK8SGatewaySoloIoGatewayV1Manifest#escape_characters}
  */
  readonly escapeCharacters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#extractors DataK8SGatewaySoloIoGatewayV1Manifest#extractors}
  */
  readonly extractors?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateExtractors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers DataK8SGatewaySoloIoGatewayV1Manifest#headers}
  */
  readonly headers?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers_to_append DataK8SGatewaySoloIoGatewayV1Manifest#headers_to_append}
  */
  readonly headersToAppend?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToAppend[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers_to_remove DataK8SGatewaySoloIoGatewayV1Manifest#headers_to_remove}
  */
  readonly headersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#ignore_error_on_parse DataK8SGatewaySoloIoGatewayV1Manifest#ignore_error_on_parse}
  */
  readonly ignoreErrorOnParse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#merge_extractors_to_body DataK8SGatewaySoloIoGatewayV1Manifest#merge_extractors_to_body}
  */
  readonly mergeExtractorsToBody?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#merge_json_keys DataK8SGatewaySoloIoGatewayV1Manifest#merge_json_keys}
  */
  readonly mergeJsonKeys?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateMergeJsonKeys;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#parse_body_behavior DataK8SGatewaySoloIoGatewayV1Manifest#parse_body_behavior}
  */
  readonly parseBodyBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#passthrough DataK8SGatewaySoloIoGatewayV1Manifest#passthrough}
  */
  readonly passthrough?: { [key: string]: string };
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_templates: cdktf.booleanToTerraform(struct!.advancedTemplates),
    body: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateBodyToTerraform(struct!.body),
    dynamic_metadata_values: cdktf.listMapper(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateDynamicMetadataValuesToTerraform, false)(struct!.dynamicMetadataValues),
    escape_characters: cdktf.booleanToTerraform(struct!.escapeCharacters),
    extractors: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateExtractorsToTerraform(struct!.extractors),
    headers: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToTerraform(struct!.headers),
    headers_to_append: cdktf.listMapper(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToAppendToTerraform, false)(struct!.headersToAppend),
    headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToRemove),
    ignore_error_on_parse: cdktf.booleanToTerraform(struct!.ignoreErrorOnParse),
    merge_extractors_to_body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.mergeExtractorsToBody),
    merge_json_keys: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateMergeJsonKeysToTerraform(struct!.mergeJsonKeys),
    parse_body_behavior: cdktf.stringToTerraform(struct!.parseBodyBehavior),
    passthrough: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.passthrough),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplate | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateBody",
    },
    dynamic_metadata_values: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateDynamicMetadataValuesToHclTerraform, false)(struct!.dynamicMetadataValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateDynamicMetadataValuesList",
    },
    escape_characters: {
      value: cdktf.booleanToHclTerraform(struct!.escapeCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extractors: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateExtractorsToHclTerraform(struct!.extractors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateExtractors",
    },
    headers: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeaders",
    },
    headers_to_append: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToAppendToHclTerraform, false)(struct!.headersToAppend),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToAppendList",
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateMergeJsonKeysToHclTerraform(struct!.mergeJsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateMergeJsonKeys",
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplate | cdktf.IResolvable | undefined) {
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
  private _body = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateBody) {
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
  private _dynamicMetadataValues = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateDynamicMetadataValuesList(this, "dynamic_metadata_values", false);
  public get dynamicMetadataValues() {
    return this._dynamicMetadataValues;
  }
  public putDynamicMetadataValues(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateDynamicMetadataValues[] | cdktf.IResolvable) {
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
  private _extractors = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateExtractorsOutputReference(this, "extractors");
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateExtractors) {
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
  private _headers = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeaders) {
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
  private _headersToAppend = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToAppendList(this, "headers_to_append", false);
  public get headersToAppend() {
    return this._headersToAppend;
  }
  public putHeadersToAppend(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateHeadersToAppend[] | cdktf.IResolvable) {
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
  private _mergeJsonKeys = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateMergeJsonKeysOutputReference(this, "merge_json_keys");
  public get mergeJsonKeys() {
    return this._mergeJsonKeys;
  }
  public putMergeJsonKeys(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateMergeJsonKeys) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#non_xml_transform DataK8SGatewaySoloIoGatewayV1Manifest#non_xml_transform}
  */
  readonly nonXmlTransform?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#set_content_type DataK8SGatewaySoloIoGatewayV1Manifest#set_content_type}
  */
  readonly setContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#xslt DataK8SGatewaySoloIoGatewayV1Manifest#xslt}
  */
  readonly xslt?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformationToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_xml_transform: cdktf.booleanToTerraform(struct!.nonXmlTransform),
    set_content_type: cdktf.stringToTerraform(struct!.setContentType),
    xslt: cdktf.stringToTerraform(struct!.xslt),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformationToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_xml_transform: {
      value: cdktf.booleanToHclTerraform(struct!.nonXmlTransform),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_content_type: {
      value: cdktf.stringToHclTerraform(struct!.setContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xslt: {
      value: cdktf.stringToHclTerraform(struct!.xslt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonXmlTransform !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonXmlTransform = this._nonXmlTransform;
    }
    if (this._setContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.setContentType = this._setContentType;
    }
    if (this._xslt !== undefined) {
      hasAnyValues = true;
      internalValueResult.xslt = this._xslt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonXmlTransform = undefined;
      this._setContentType = undefined;
      this._xslt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonXmlTransform = value.nonXmlTransform;
      this._setContentType = value.setContentType;
      this._xslt = value.xslt;
    }
  }

  // non_xml_transform - computed: false, optional: true, required: false
  private _nonXmlTransform?: boolean | cdktf.IResolvable; 
  public get nonXmlTransform() {
    return this.getBooleanAttribute('non_xml_transform');
  }
  public set nonXmlTransform(value: boolean | cdktf.IResolvable) {
    this._nonXmlTransform = value;
  }
  public resetNonXmlTransform() {
    this._nonXmlTransform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonXmlTransformInput() {
    return this._nonXmlTransform;
  }

  // set_content_type - computed: false, optional: true, required: false
  private _setContentType?: string; 
  public get setContentType() {
    return this.getStringAttribute('set_content_type');
  }
  public set setContentType(value: string) {
    this._setContentType = value;
  }
  public resetSetContentType() {
    this._setContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setContentTypeInput() {
    return this._setContentType;
  }

  // xslt - computed: false, optional: true, required: false
  private _xslt?: string; 
  public get xslt() {
    return this.getStringAttribute('xslt');
  }
  public set xslt(value: string) {
    this._xslt = value;
  }
  public resetXslt() {
    this._xslt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsltInput() {
    return this._xslt;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#header_body_transform DataK8SGatewaySoloIoGatewayV1Manifest#header_body_transform}
  */
  readonly headerBodyTransform?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationHeaderBodyTransform;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#log_request_response_info DataK8SGatewaySoloIoGatewayV1Manifest#log_request_response_info}
  */
  readonly logRequestResponseInfo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#transformation_template DataK8SGatewaySoloIoGatewayV1Manifest#transformation_template}
  */
  readonly transformationTemplate?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#xslt_transformation DataK8SGatewaySoloIoGatewayV1Manifest#xslt_transformation}
  */
  readonly xsltTransformation?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformation;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_body_transform: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationHeaderBodyTransformToTerraform(struct!.headerBodyTransform),
    log_request_response_info: cdktf.booleanToTerraform(struct!.logRequestResponseInfo),
    transformation_template: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateToTerraform(struct!.transformationTemplate),
    xslt_transformation: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformationToTerraform(struct!.xsltTransformation),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_body_transform: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationHeaderBodyTransformToHclTerraform(struct!.headerBodyTransform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationHeaderBodyTransform",
    },
    log_request_response_info: {
      value: cdktf.booleanToHclTerraform(struct!.logRequestResponseInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transformation_template: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateToHclTerraform(struct!.transformationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplate",
    },
    xslt_transformation: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformationToHclTerraform(struct!.xsltTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerBodyTransform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerBodyTransform = this._headerBodyTransform?.internalValue;
    }
    if (this._logRequestResponseInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRequestResponseInfo = this._logRequestResponseInfo;
    }
    if (this._transformationTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationTemplate = this._transformationTemplate?.internalValue;
    }
    if (this._xsltTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xsltTransformation = this._xsltTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerBodyTransform.internalValue = undefined;
      this._logRequestResponseInfo = undefined;
      this._transformationTemplate.internalValue = undefined;
      this._xsltTransformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerBodyTransform.internalValue = value.headerBodyTransform;
      this._logRequestResponseInfo = value.logRequestResponseInfo;
      this._transformationTemplate.internalValue = value.transformationTemplate;
      this._xsltTransformation.internalValue = value.xsltTransformation;
    }
  }

  // header_body_transform - computed: false, optional: true, required: false
  private _headerBodyTransform = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationHeaderBodyTransformOutputReference(this, "header_body_transform");
  public get headerBodyTransform() {
    return this._headerBodyTransform;
  }
  public putHeaderBodyTransform(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationHeaderBodyTransform) {
    this._headerBodyTransform.internalValue = value;
  }
  public resetHeaderBodyTransform() {
    this._headerBodyTransform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBodyTransformInput() {
    return this._headerBodyTransform.internalValue;
  }

  // log_request_response_info - computed: false, optional: true, required: false
  private _logRequestResponseInfo?: boolean | cdktf.IResolvable; 
  public get logRequestResponseInfo() {
    return this.getBooleanAttribute('log_request_response_info');
  }
  public set logRequestResponseInfo(value: boolean | cdktf.IResolvable) {
    this._logRequestResponseInfo = value;
  }
  public resetLogRequestResponseInfo() {
    this._logRequestResponseInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestResponseInfoInput() {
    return this._logRequestResponseInfo;
  }

  // transformation_template - computed: false, optional: true, required: false
  private _transformationTemplate = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplateOutputReference(this, "transformation_template");
  public get transformationTemplate() {
    return this._transformationTemplate;
  }
  public putTransformationTemplate(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationTransformationTemplate) {
    this._transformationTemplate.internalValue = value;
  }
  public resetTransformationTemplate() {
    this._transformationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationTemplateInput() {
    return this._transformationTemplate.internalValue;
  }

  // xslt_transformation - computed: false, optional: true, required: false
  private _xsltTransformation = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformationOutputReference(this, "xslt_transformation");
  public get xsltTransformation() {
    return this._xsltTransformation;
  }
  public putXsltTransformation(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationXsltTransformation) {
    this._xsltTransformation.internalValue = value;
  }
  public resetXsltTransformation() {
    this._xsltTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsltTransformationInput() {
    return this._xsltTransformation.internalValue;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransform {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#add_request_metadata DataK8SGatewaySoloIoGatewayV1Manifest#add_request_metadata}
  */
  readonly addRequestMetadata?: boolean | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransformToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_request_metadata: cdktf.booleanToTerraform(struct!.addRequestMetadata),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransformToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_request_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.addRequestMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addRequestMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.addRequestMetadata = this._addRequestMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addRequestMetadata = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addRequestMetadata = value.addRequestMetadata;
    }
  }

  // add_request_metadata - computed: false, optional: true, required: false
  private _addRequestMetadata?: boolean | cdktf.IResolvable; 
  public get addRequestMetadata() {
    return this.getBooleanAttribute('add_request_metadata');
  }
  public set addRequestMetadata(value: boolean | cdktf.IResolvable) {
    this._addRequestMetadata = value;
  }
  public resetAddRequestMetadata() {
    this._addRequestMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRequestMetadataInput() {
    return this._addRequestMetadata;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#text DataK8SGatewaySoloIoGatewayV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBodyToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBodyToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBody | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBody | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBody | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#text DataK8SGatewaySoloIoGatewayV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#json_to_proto DataK8SGatewaySoloIoGatewayV1Manifest#json_to_proto}
  */
  readonly jsonToProto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#key DataK8SGatewaySoloIoGatewayV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#metadata_namespace DataK8SGatewaySoloIoGatewayV1Manifest#metadata_namespace}
  */
  readonly metadataNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#value DataK8SGatewaySoloIoGatewayV1Manifest#value}
  */
  readonly value?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_to_proto: cdktf.booleanToTerraform(struct!.jsonToProto),
    key: cdktf.stringToTerraform(struct!.key),
    metadata_namespace: cdktf.stringToTerraform(struct!.metadataNamespace),
    value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueToTerraform(struct!.value),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues | cdktf.IResolvable | undefined) {
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
  private _value = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue) {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesOutputReference {
    return new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#body DataK8SGatewaySoloIoGatewayV1Manifest#body}
  */
  readonly body?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#header DataK8SGatewaySoloIoGatewayV1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#mode DataK8SGatewaySoloIoGatewayV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#regex DataK8SGatewaySoloIoGatewayV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#replacement_text DataK8SGatewaySoloIoGatewayV1Manifest#replacement_text}
  */
  readonly replacementText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#subgroup DataK8SGatewaySoloIoGatewayV1Manifest#subgroup}
  */
  readonly subgroup?: number;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractorsToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractors | cdktf.IResolvable): any {
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


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractorsToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractors | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractors | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#text DataK8SGatewaySoloIoGatewayV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeaders | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeaders | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#text DataK8SGatewaySoloIoGatewayV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#key DataK8SGatewaySoloIoGatewayV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#value DataK8SGatewaySoloIoGatewayV1Manifest#value}
  */
  readonly value?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueToTerraform(struct!.value),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend | cdktf.IResolvable | undefined) {
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
  private _value = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue) {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendOutputReference {
    return new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#text DataK8SGatewaySoloIoGatewayV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#override_empty DataK8SGatewaySoloIoGatewayV1Manifest#override_empty}
  */
  readonly overrideEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#tmpl DataK8SGatewaySoloIoGatewayV1Manifest#tmpl}
  */
  readonly tmpl?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_empty: cdktf.booleanToTerraform(struct!.overrideEmpty),
    tmpl: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplToTerraform(struct!.tmpl),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplToHclTerraform(struct!.tmpl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined) {
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
  private _tmpl = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplOutputReference(this, "tmpl");
  public get tmpl() {
    return this._tmpl;
  }
  public putTmpl(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#json_keys DataK8SGatewaySoloIoGatewayV1Manifest#json_keys}
  */
  readonly jsonKeys?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_keys: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysToTerraform(struct!.jsonKeys),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_keys: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysToHclTerraform(struct!.jsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys | cdktf.IResolvable | undefined) {
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
  private _jsonKeys = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysOutputReference(this, "json_keys");
  public get jsonKeys() {
    return this._jsonKeys;
  }
  public putJsonKeys(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#advanced_templates DataK8SGatewaySoloIoGatewayV1Manifest#advanced_templates}
  */
  readonly advancedTemplates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#body DataK8SGatewaySoloIoGatewayV1Manifest#body}
  */
  readonly body?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#dynamic_metadata_values DataK8SGatewaySoloIoGatewayV1Manifest#dynamic_metadata_values}
  */
  readonly dynamicMetadataValues?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#escape_characters DataK8SGatewaySoloIoGatewayV1Manifest#escape_characters}
  */
  readonly escapeCharacters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#extractors DataK8SGatewaySoloIoGatewayV1Manifest#extractors}
  */
  readonly extractors?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers DataK8SGatewaySoloIoGatewayV1Manifest#headers}
  */
  readonly headers?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers_to_append DataK8SGatewaySoloIoGatewayV1Manifest#headers_to_append}
  */
  readonly headersToAppend?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers_to_remove DataK8SGatewaySoloIoGatewayV1Manifest#headers_to_remove}
  */
  readonly headersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#ignore_error_on_parse DataK8SGatewaySoloIoGatewayV1Manifest#ignore_error_on_parse}
  */
  readonly ignoreErrorOnParse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#merge_extractors_to_body DataK8SGatewaySoloIoGatewayV1Manifest#merge_extractors_to_body}
  */
  readonly mergeExtractorsToBody?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#merge_json_keys DataK8SGatewaySoloIoGatewayV1Manifest#merge_json_keys}
  */
  readonly mergeJsonKeys?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#parse_body_behavior DataK8SGatewaySoloIoGatewayV1Manifest#parse_body_behavior}
  */
  readonly parseBodyBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#passthrough DataK8SGatewaySoloIoGatewayV1Manifest#passthrough}
  */
  readonly passthrough?: { [key: string]: string };
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_templates: cdktf.booleanToTerraform(struct!.advancedTemplates),
    body: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBodyToTerraform(struct!.body),
    dynamic_metadata_values: cdktf.listMapper(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesToTerraform, false)(struct!.dynamicMetadataValues),
    escape_characters: cdktf.booleanToTerraform(struct!.escapeCharacters),
    extractors: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractorsToTerraform(struct!.extractors),
    headers: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToTerraform(struct!.headers),
    headers_to_append: cdktf.listMapper(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendToTerraform, false)(struct!.headersToAppend),
    headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToRemove),
    ignore_error_on_parse: cdktf.booleanToTerraform(struct!.ignoreErrorOnParse),
    merge_extractors_to_body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.mergeExtractorsToBody),
    merge_json_keys: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysToTerraform(struct!.mergeJsonKeys),
    parse_body_behavior: cdktf.stringToTerraform(struct!.parseBodyBehavior),
    passthrough: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.passthrough),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplate | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBody",
    },
    dynamic_metadata_values: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesToHclTerraform, false)(struct!.dynamicMetadataValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesList",
    },
    escape_characters: {
      value: cdktf.booleanToHclTerraform(struct!.escapeCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extractors: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractorsToHclTerraform(struct!.extractors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractors",
    },
    headers: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeaders",
    },
    headers_to_append: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendToHclTerraform, false)(struct!.headersToAppend),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendList",
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysToHclTerraform(struct!.mergeJsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys",
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplate | cdktf.IResolvable | undefined) {
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
  private _body = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateBody) {
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
  private _dynamicMetadataValues = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesList(this, "dynamic_metadata_values", false);
  public get dynamicMetadataValues() {
    return this._dynamicMetadataValues;
  }
  public putDynamicMetadataValues(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues[] | cdktf.IResolvable) {
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
  private _extractors = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractorsOutputReference(this, "extractors");
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateExtractors) {
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
  private _headers = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeaders) {
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
  private _headersToAppend = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendList(this, "headers_to_append", false);
  public get headersToAppend() {
    return this._headersToAppend;
  }
  public putHeadersToAppend(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend[] | cdktf.IResolvable) {
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
  private _mergeJsonKeys = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysOutputReference(this, "merge_json_keys");
  public get mergeJsonKeys() {
    return this._mergeJsonKeys;
  }
  public putMergeJsonKeys(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#non_xml_transform DataK8SGatewaySoloIoGatewayV1Manifest#non_xml_transform}
  */
  readonly nonXmlTransform?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#set_content_type DataK8SGatewaySoloIoGatewayV1Manifest#set_content_type}
  */
  readonly setContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#xslt DataK8SGatewaySoloIoGatewayV1Manifest#xslt}
  */
  readonly xslt?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformationToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_xml_transform: cdktf.booleanToTerraform(struct!.nonXmlTransform),
    set_content_type: cdktf.stringToTerraform(struct!.setContentType),
    xslt: cdktf.stringToTerraform(struct!.xslt),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformationToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_xml_transform: {
      value: cdktf.booleanToHclTerraform(struct!.nonXmlTransform),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_content_type: {
      value: cdktf.stringToHclTerraform(struct!.setContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xslt: {
      value: cdktf.stringToHclTerraform(struct!.xslt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonXmlTransform !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonXmlTransform = this._nonXmlTransform;
    }
    if (this._setContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.setContentType = this._setContentType;
    }
    if (this._xslt !== undefined) {
      hasAnyValues = true;
      internalValueResult.xslt = this._xslt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonXmlTransform = undefined;
      this._setContentType = undefined;
      this._xslt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonXmlTransform = value.nonXmlTransform;
      this._setContentType = value.setContentType;
      this._xslt = value.xslt;
    }
  }

  // non_xml_transform - computed: false, optional: true, required: false
  private _nonXmlTransform?: boolean | cdktf.IResolvable; 
  public get nonXmlTransform() {
    return this.getBooleanAttribute('non_xml_transform');
  }
  public set nonXmlTransform(value: boolean | cdktf.IResolvable) {
    this._nonXmlTransform = value;
  }
  public resetNonXmlTransform() {
    this._nonXmlTransform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonXmlTransformInput() {
    return this._nonXmlTransform;
  }

  // set_content_type - computed: false, optional: true, required: false
  private _setContentType?: string; 
  public get setContentType() {
    return this.getStringAttribute('set_content_type');
  }
  public set setContentType(value: string) {
    this._setContentType = value;
  }
  public resetSetContentType() {
    this._setContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setContentTypeInput() {
    return this._setContentType;
  }

  // xslt - computed: false, optional: true, required: false
  private _xslt?: string; 
  public get xslt() {
    return this.getStringAttribute('xslt');
  }
  public set xslt(value: string) {
    this._xslt = value;
  }
  public resetXslt() {
    this._xslt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsltInput() {
    return this._xslt;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#header_body_transform DataK8SGatewaySoloIoGatewayV1Manifest#header_body_transform}
  */
  readonly headerBodyTransform?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransform;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#log_request_response_info DataK8SGatewaySoloIoGatewayV1Manifest#log_request_response_info}
  */
  readonly logRequestResponseInfo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#transformation_template DataK8SGatewaySoloIoGatewayV1Manifest#transformation_template}
  */
  readonly transformationTemplate?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#xslt_transformation DataK8SGatewaySoloIoGatewayV1Manifest#xslt_transformation}
  */
  readonly xsltTransformation?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformation;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_body_transform: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransformToTerraform(struct!.headerBodyTransform),
    log_request_response_info: cdktf.booleanToTerraform(struct!.logRequestResponseInfo),
    transformation_template: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateToTerraform(struct!.transformationTemplate),
    xslt_transformation: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformationToTerraform(struct!.xsltTransformation),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_body_transform: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransformToHclTerraform(struct!.headerBodyTransform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransform",
    },
    log_request_response_info: {
      value: cdktf.booleanToHclTerraform(struct!.logRequestResponseInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transformation_template: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateToHclTerraform(struct!.transformationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplate",
    },
    xslt_transformation: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformationToHclTerraform(struct!.xsltTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerBodyTransform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerBodyTransform = this._headerBodyTransform?.internalValue;
    }
    if (this._logRequestResponseInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRequestResponseInfo = this._logRequestResponseInfo;
    }
    if (this._transformationTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationTemplate = this._transformationTemplate?.internalValue;
    }
    if (this._xsltTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xsltTransformation = this._xsltTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerBodyTransform.internalValue = undefined;
      this._logRequestResponseInfo = undefined;
      this._transformationTemplate.internalValue = undefined;
      this._xsltTransformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerBodyTransform.internalValue = value.headerBodyTransform;
      this._logRequestResponseInfo = value.logRequestResponseInfo;
      this._transformationTemplate.internalValue = value.transformationTemplate;
      this._xsltTransformation.internalValue = value.xsltTransformation;
    }
  }

  // header_body_transform - computed: false, optional: true, required: false
  private _headerBodyTransform = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransformOutputReference(this, "header_body_transform");
  public get headerBodyTransform() {
    return this._headerBodyTransform;
  }
  public putHeaderBodyTransform(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationHeaderBodyTransform) {
    this._headerBodyTransform.internalValue = value;
  }
  public resetHeaderBodyTransform() {
    this._headerBodyTransform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBodyTransformInput() {
    return this._headerBodyTransform.internalValue;
  }

  // log_request_response_info - computed: false, optional: true, required: false
  private _logRequestResponseInfo?: boolean | cdktf.IResolvable; 
  public get logRequestResponseInfo() {
    return this.getBooleanAttribute('log_request_response_info');
  }
  public set logRequestResponseInfo(value: boolean | cdktf.IResolvable) {
    this._logRequestResponseInfo = value;
  }
  public resetLogRequestResponseInfo() {
    this._logRequestResponseInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestResponseInfoInput() {
    return this._logRequestResponseInfo;
  }

  // transformation_template - computed: false, optional: true, required: false
  private _transformationTemplate = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplateOutputReference(this, "transformation_template");
  public get transformationTemplate() {
    return this._transformationTemplate;
  }
  public putTransformationTemplate(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationTransformationTemplate) {
    this._transformationTemplate.internalValue = value;
  }
  public resetTransformationTemplate() {
    this._transformationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationTemplateInput() {
    return this._transformationTemplate.internalValue;
  }

  // xslt_transformation - computed: false, optional: true, required: false
  private _xsltTransformation = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformationOutputReference(this, "xslt_transformation");
  public get xsltTransformation() {
    return this._xsltTransformation;
  }
  public putXsltTransformation(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationXsltTransformation) {
    this._xsltTransformation.internalValue = value;
  }
  public resetXsltTransformation() {
    this._xsltTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsltTransformationInput() {
    return this._xsltTransformation.internalValue;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#clear_route_cache DataK8SGatewaySoloIoGatewayV1Manifest#clear_route_cache}
  */
  readonly clearRouteCache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#request_transformation DataK8SGatewaySoloIoGatewayV1Manifest#request_transformation}
  */
  readonly requestTransformation?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#response_transformation DataK8SGatewaySoloIoGatewayV1Manifest#response_transformation}
  */
  readonly responseTransformation?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformation;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_route_cache: cdktf.booleanToTerraform(struct!.clearRouteCache),
    request_transformation: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationToTerraform(struct!.requestTransformation),
    response_transformation: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationToTerraform(struct!.responseTransformation),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_route_cache: {
      value: cdktf.booleanToHclTerraform(struct!.clearRouteCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_transformation: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationToHclTerraform(struct!.requestTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformation",
    },
    response_transformation: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationToHclTerraform(struct!.responseTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearRouteCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearRouteCache = this._clearRouteCache;
    }
    if (this._requestTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTransformation = this._requestTransformation?.internalValue;
    }
    if (this._responseTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTransformation = this._responseTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearRouteCache = undefined;
      this._requestTransformation.internalValue = undefined;
      this._responseTransformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearRouteCache = value.clearRouteCache;
      this._requestTransformation.internalValue = value.requestTransformation;
      this._responseTransformation.internalValue = value.responseTransformation;
    }
  }

  // clear_route_cache - computed: false, optional: true, required: false
  private _clearRouteCache?: boolean | cdktf.IResolvable; 
  public get clearRouteCache() {
    return this.getBooleanAttribute('clear_route_cache');
  }
  public set clearRouteCache(value: boolean | cdktf.IResolvable) {
    this._clearRouteCache = value;
  }
  public resetClearRouteCache() {
    this._clearRouteCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearRouteCacheInput() {
    return this._clearRouteCache;
  }

  // request_transformation - computed: false, optional: true, required: false
  private _requestTransformation = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformationOutputReference(this, "request_transformation");
  public get requestTransformation() {
    return this._requestTransformation;
  }
  public putRequestTransformation(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsRequestTransformation) {
    this._requestTransformation.internalValue = value;
  }
  public resetRequestTransformation() {
    this._requestTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTransformationInput() {
    return this._requestTransformation.internalValue;
  }

  // response_transformation - computed: false, optional: true, required: false
  private _responseTransformation = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformationOutputReference(this, "response_transformation");
  public get responseTransformation() {
    return this._responseTransformation;
  }
  public putResponseTransformation(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsResponseTransformation) {
    this._responseTransformation.internalValue = value;
  }
  public resetResponseTransformation() {
    this._responseTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTransformationInput() {
    return this._responseTransformation.internalValue;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#buffer_per_route DataK8SGatewaySoloIoGatewayV1Manifest#buffer_per_route}
  */
  readonly bufferPerRoute?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsBufferPerRoute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#csrf DataK8SGatewaySoloIoGatewayV1Manifest#csrf}
  */
  readonly csrf?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsCsrf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#extauth DataK8SGatewaySoloIoGatewayV1Manifest#extauth}
  */
  readonly extauth?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtauth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#extensions DataK8SGatewaySoloIoGatewayV1Manifest#extensions}
  */
  readonly extensions?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtensions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#header_manipulation DataK8SGatewaySoloIoGatewayV1Manifest#header_manipulation}
  */
  readonly headerManipulation?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsHeaderManipulation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#staged_transformations DataK8SGatewaySoloIoGatewayV1Manifest#staged_transformations}
  */
  readonly stagedTransformations?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsStagedTransformations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#transformations DataK8SGatewaySoloIoGatewayV1Manifest#transformations}
  */
  readonly transformations?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformations;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_per_route: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsBufferPerRouteToTerraform(struct!.bufferPerRoute),
    csrf: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsCsrfToTerraform(struct!.csrf),
    extauth: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtauthToTerraform(struct!.extauth),
    extensions: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtensionsToTerraform(struct!.extensions),
    header_manipulation: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsHeaderManipulationToTerraform(struct!.headerManipulation),
    staged_transformations: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsStagedTransformationsToTerraform(struct!.stagedTransformations),
    transformations: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsToTerraform(struct!.transformations),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_per_route: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsBufferPerRouteToHclTerraform(struct!.bufferPerRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsBufferPerRoute",
    },
    csrf: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsCsrfToHclTerraform(struct!.csrf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsCsrf",
    },
    extauth: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtauthToHclTerraform(struct!.extauth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtauth",
    },
    extensions: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtensionsToHclTerraform(struct!.extensions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtensions",
    },
    header_manipulation: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsHeaderManipulationToHclTerraform(struct!.headerManipulation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsHeaderManipulation",
    },
    staged_transformations: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsStagedTransformationsToHclTerraform(struct!.stagedTransformations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsStagedTransformations",
    },
    transformations: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformations",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferPerRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferPerRoute = this._bufferPerRoute?.internalValue;
    }
    if (this._csrf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csrf = this._csrf?.internalValue;
    }
    if (this._extauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extauth = this._extauth?.internalValue;
    }
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._headerManipulation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerManipulation = this._headerManipulation?.internalValue;
    }
    if (this._stagedTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagedTransformations = this._stagedTransformations?.internalValue;
    }
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferPerRoute.internalValue = undefined;
      this._csrf.internalValue = undefined;
      this._extauth.internalValue = undefined;
      this._extensions.internalValue = undefined;
      this._headerManipulation.internalValue = undefined;
      this._stagedTransformations.internalValue = undefined;
      this._transformations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferPerRoute.internalValue = value.bufferPerRoute;
      this._csrf.internalValue = value.csrf;
      this._extauth.internalValue = value.extauth;
      this._extensions.internalValue = value.extensions;
      this._headerManipulation.internalValue = value.headerManipulation;
      this._stagedTransformations.internalValue = value.stagedTransformations;
      this._transformations.internalValue = value.transformations;
    }
  }

  // buffer_per_route - computed: false, optional: true, required: false
  private _bufferPerRoute = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsBufferPerRouteOutputReference(this, "buffer_per_route");
  public get bufferPerRoute() {
    return this._bufferPerRoute;
  }
  public putBufferPerRoute(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsBufferPerRoute) {
    this._bufferPerRoute.internalValue = value;
  }
  public resetBufferPerRoute() {
    this._bufferPerRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferPerRouteInput() {
    return this._bufferPerRoute.internalValue;
  }

  // csrf - computed: false, optional: true, required: false
  private _csrf = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsCsrfOutputReference(this, "csrf");
  public get csrf() {
    return this._csrf;
  }
  public putCsrf(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsCsrf) {
    this._csrf.internalValue = value;
  }
  public resetCsrf() {
    this._csrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfInput() {
    return this._csrf.internalValue;
  }

  // extauth - computed: false, optional: true, required: false
  private _extauth = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtauthOutputReference(this, "extauth");
  public get extauth() {
    return this._extauth;
  }
  public putExtauth(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtauth) {
    this._extauth.internalValue = value;
  }
  public resetExtauth() {
    this._extauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extauthInput() {
    return this._extauth.internalValue;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsExtensions) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // header_manipulation - computed: false, optional: true, required: false
  private _headerManipulation = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsHeaderManipulationOutputReference(this, "header_manipulation");
  public get headerManipulation() {
    return this._headerManipulation;
  }
  public putHeaderManipulation(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsHeaderManipulation) {
    this._headerManipulation.internalValue = value;
  }
  public resetHeaderManipulation() {
    this._headerManipulation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerManipulationInput() {
    return this._headerManipulation.internalValue;
  }

  // staged_transformations - computed: false, optional: true, required: false
  private _stagedTransformations = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsStagedTransformationsOutputReference(this, "staged_transformations");
  public get stagedTransformations() {
    return this._stagedTransformations;
  }
  public putStagedTransformations(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsStagedTransformations) {
    this._stagedTransformations.internalValue = value;
  }
  public resetStagedTransformations() {
    this._stagedTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagedTransformationsInput() {
    return this._stagedTransformations.internalValue;
  }

  // transformations - computed: false, optional: true, required: false
  private _transformations = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsTransformations) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#destination DataK8SGatewaySoloIoGatewayV1Manifest#destination}
  */
  readonly destination?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#options DataK8SGatewaySoloIoGatewayV1Manifest#options}
  */
  readonly options?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#weight DataK8SGatewaySoloIoGatewayV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsDestinationToTerraform(struct!.destination),
    options: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsToTerraform(struct!.options),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsDestination",
    },
    options: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptions",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._options.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._options.internalValue = value.options;
      this._weight = value.weight;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOutputReference {
    return new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMulti {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#destinations DataK8SGatewaySoloIoGatewayV1Manifest#destinations}
  */
  readonly destinations?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinations[] | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsToTerraform, false)(struct!.destinations),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMulti | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMulti | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
    }
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsul {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#data_centers DataK8SGatewaySoloIoGatewayV1Manifest#data_centers}
  */
  readonly dataCenters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#service_name DataK8SGatewaySoloIoGatewayV1Manifest#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#tags DataK8SGatewaySoloIoGatewayV1Manifest#tags}
  */
  readonly tags?: string[];
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsulToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_centers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataCenters),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsulToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_centers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataCenters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsul | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCenters = this._dataCenters;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsul | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataCenters = undefined;
      this._serviceName = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataCenters = value.dataCenters;
      this._serviceName = value.serviceName;
      this._tags = value.tags;
    }
  }

  // data_centers - computed: false, optional: true, required: false
  private _dataCenters?: string[]; 
  public get dataCenters() {
    return this.getListAttribute('data_centers');
  }
  public set dataCenters(value: string[]) {
    this._dataCenters = value;
  }
  public resetDataCenters() {
    this._dataCenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentersInput() {
    return this._dataCenters;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#invocation_style DataK8SGatewaySoloIoGatewayV1Manifest#invocation_style}
  */
  readonly invocationStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#logical_name DataK8SGatewaySoloIoGatewayV1Manifest#logical_name}
  */
  readonly logicalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#request_transformation DataK8SGatewaySoloIoGatewayV1Manifest#request_transformation}
  */
  readonly requestTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#response_transformation DataK8SGatewaySoloIoGatewayV1Manifest#response_transformation}
  */
  readonly responseTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#unwrap_as_alb DataK8SGatewaySoloIoGatewayV1Manifest#unwrap_as_alb}
  */
  readonly unwrapAsAlb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#unwrap_as_api_gateway DataK8SGatewaySoloIoGatewayV1Manifest#unwrap_as_api_gateway}
  */
  readonly unwrapAsApiGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#wrap_as_api_gateway DataK8SGatewaySoloIoGatewayV1Manifest#wrap_as_api_gateway}
  */
  readonly wrapAsApiGateway?: boolean | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAwsToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invocation_style: cdktf.stringToTerraform(struct!.invocationStyle),
    logical_name: cdktf.stringToTerraform(struct!.logicalName),
    request_transformation: cdktf.booleanToTerraform(struct!.requestTransformation),
    response_transformation: cdktf.booleanToTerraform(struct!.responseTransformation),
    unwrap_as_alb: cdktf.booleanToTerraform(struct!.unwrapAsAlb),
    unwrap_as_api_gateway: cdktf.booleanToTerraform(struct!.unwrapAsApiGateway),
    wrap_as_api_gateway: cdktf.booleanToTerraform(struct!.wrapAsApiGateway),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAwsToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invocation_style: {
      value: cdktf.stringToHclTerraform(struct!.invocationStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_name: {
      value: cdktf.stringToHclTerraform(struct!.logicalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.requestTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.responseTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unwrap_as_alb: {
      value: cdktf.booleanToHclTerraform(struct!.unwrapAsAlb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unwrap_as_api_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.unwrapAsApiGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wrap_as_api_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.wrapAsApiGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationStyle = this._invocationStyle;
    }
    if (this._logicalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalName = this._logicalName;
    }
    if (this._requestTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTransformation = this._requestTransformation;
    }
    if (this._responseTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTransformation = this._responseTransformation;
    }
    if (this._unwrapAsAlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapAsAlb = this._unwrapAsAlb;
    }
    if (this._unwrapAsApiGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapAsApiGateway = this._unwrapAsApiGateway;
    }
    if (this._wrapAsApiGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrapAsApiGateway = this._wrapAsApiGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invocationStyle = undefined;
      this._logicalName = undefined;
      this._requestTransformation = undefined;
      this._responseTransformation = undefined;
      this._unwrapAsAlb = undefined;
      this._unwrapAsApiGateway = undefined;
      this._wrapAsApiGateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invocationStyle = value.invocationStyle;
      this._logicalName = value.logicalName;
      this._requestTransformation = value.requestTransformation;
      this._responseTransformation = value.responseTransformation;
      this._unwrapAsAlb = value.unwrapAsAlb;
      this._unwrapAsApiGateway = value.unwrapAsApiGateway;
      this._wrapAsApiGateway = value.wrapAsApiGateway;
    }
  }

  // invocation_style - computed: false, optional: true, required: false
  private _invocationStyle?: string; 
  public get invocationStyle() {
    return this.getStringAttribute('invocation_style');
  }
  public set invocationStyle(value: string) {
    this._invocationStyle = value;
  }
  public resetInvocationStyle() {
    this._invocationStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationStyleInput() {
    return this._invocationStyle;
  }

  // logical_name - computed: false, optional: true, required: false
  private _logicalName?: string; 
  public get logicalName() {
    return this.getStringAttribute('logical_name');
  }
  public set logicalName(value: string) {
    this._logicalName = value;
  }
  public resetLogicalName() {
    this._logicalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalNameInput() {
    return this._logicalName;
  }

  // request_transformation - computed: false, optional: true, required: false
  private _requestTransformation?: boolean | cdktf.IResolvable; 
  public get requestTransformation() {
    return this.getBooleanAttribute('request_transformation');
  }
  public set requestTransformation(value: boolean | cdktf.IResolvable) {
    this._requestTransformation = value;
  }
  public resetRequestTransformation() {
    this._requestTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTransformationInput() {
    return this._requestTransformation;
  }

  // response_transformation - computed: false, optional: true, required: false
  private _responseTransformation?: boolean | cdktf.IResolvable; 
  public get responseTransformation() {
    return this.getBooleanAttribute('response_transformation');
  }
  public set responseTransformation(value: boolean | cdktf.IResolvable) {
    this._responseTransformation = value;
  }
  public resetResponseTransformation() {
    this._responseTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTransformationInput() {
    return this._responseTransformation;
  }

  // unwrap_as_alb - computed: false, optional: true, required: false
  private _unwrapAsAlb?: boolean | cdktf.IResolvable; 
  public get unwrapAsAlb() {
    return this.getBooleanAttribute('unwrap_as_alb');
  }
  public set unwrapAsAlb(value: boolean | cdktf.IResolvable) {
    this._unwrapAsAlb = value;
  }
  public resetUnwrapAsAlb() {
    this._unwrapAsAlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrapAsAlbInput() {
    return this._unwrapAsAlb;
  }

  // unwrap_as_api_gateway - computed: false, optional: true, required: false
  private _unwrapAsApiGateway?: boolean | cdktf.IResolvable; 
  public get unwrapAsApiGateway() {
    return this.getBooleanAttribute('unwrap_as_api_gateway');
  }
  public set unwrapAsApiGateway(value: boolean | cdktf.IResolvable) {
    this._unwrapAsApiGateway = value;
  }
  public resetUnwrapAsApiGateway() {
    this._unwrapAsApiGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrapAsApiGatewayInput() {
    return this._unwrapAsApiGateway;
  }

  // wrap_as_api_gateway - computed: false, optional: true, required: false
  private _wrapAsApiGateway?: boolean | cdktf.IResolvable; 
  public get wrapAsApiGateway() {
    return this.getBooleanAttribute('wrap_as_api_gateway');
  }
  public set wrapAsApiGateway(value: boolean | cdktf.IResolvable) {
    this._wrapAsApiGateway = value;
  }
  public resetWrapAsApiGateway() {
    this._wrapAsApiGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapAsApiGatewayInput() {
    return this._wrapAsApiGateway;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#function_name DataK8SGatewaySoloIoGatewayV1Manifest#function_name}
  */
  readonly functionName?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzureToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzureToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
    }
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers DataK8SGatewaySoloIoGatewayV1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#path DataK8SGatewaySoloIoGatewayV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParametersToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParametersToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._path = value.path;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#function DataK8SGatewaySoloIoGatewayV1Manifest#function}
  */
  readonly function?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#package DataK8SGatewaySoloIoGatewayV1Manifest#package}
  */
  readonly package?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#parameters DataK8SGatewaySoloIoGatewayV1Manifest#parameters}
  */
  readonly parameters?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#service DataK8SGatewaySoloIoGatewayV1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
    package: cdktf.stringToTerraform(struct!.package),
    parameters: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParametersToTerraform(struct!.parameters),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
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
    parameters: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParameters",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._function = undefined;
      this._package = undefined;
      this._parameters.internalValue = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._function = value.function;
      this._package = value.package;
      this._parameters.internalValue = value.parameters;
      this._service = value.service;
    }
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
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
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers DataK8SGatewaySoloIoGatewayV1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#path DataK8SGatewaySoloIoGatewayV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParametersToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParametersToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._path = value.path;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#text DataK8SGatewaySoloIoGatewayV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBodyToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBodyToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBody | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBody | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBody | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#text DataK8SGatewaySoloIoGatewayV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#json_to_proto DataK8SGatewaySoloIoGatewayV1Manifest#json_to_proto}
  */
  readonly jsonToProto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#key DataK8SGatewaySoloIoGatewayV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#metadata_namespace DataK8SGatewaySoloIoGatewayV1Manifest#metadata_namespace}
  */
  readonly metadataNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#value DataK8SGatewaySoloIoGatewayV1Manifest#value}
  */
  readonly value?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_to_proto: cdktf.booleanToTerraform(struct!.jsonToProto),
    key: cdktf.stringToTerraform(struct!.key),
    metadata_namespace: cdktf.stringToTerraform(struct!.metadataNamespace),
    value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueToTerraform(struct!.value),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValues | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValues | cdktf.IResolvable | undefined) {
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
  private _value = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue) {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValues[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesOutputReference {
    return new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#body DataK8SGatewaySoloIoGatewayV1Manifest#body}
  */
  readonly body?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#header DataK8SGatewaySoloIoGatewayV1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#mode DataK8SGatewaySoloIoGatewayV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#regex DataK8SGatewaySoloIoGatewayV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#replacement_text DataK8SGatewaySoloIoGatewayV1Manifest#replacement_text}
  */
  readonly replacementText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#subgroup DataK8SGatewaySoloIoGatewayV1Manifest#subgroup}
  */
  readonly subgroup?: number;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractorsToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractors | cdktf.IResolvable): any {
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


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractorsToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractors | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractors | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#text DataK8SGatewaySoloIoGatewayV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeaders | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeaders | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#text DataK8SGatewaySoloIoGatewayV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValueToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValueToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValue | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValue | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#key DataK8SGatewaySoloIoGatewayV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#value DataK8SGatewaySoloIoGatewayV1Manifest#value}
  */
  readonly value?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValue;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValueToTerraform(struct!.value),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppend | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppend | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppend | cdktf.IResolvable | undefined) {
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
  private _value = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendValue) {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppend[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendOutputReference {
    return new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#text DataK8SGatewaySoloIoGatewayV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#override_empty DataK8SGatewaySoloIoGatewayV1Manifest#override_empty}
  */
  readonly overrideEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#tmpl DataK8SGatewaySoloIoGatewayV1Manifest#tmpl}
  */
  readonly tmpl?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_empty: cdktf.booleanToTerraform(struct!.overrideEmpty),
    tmpl: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplToTerraform(struct!.tmpl),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplToHclTerraform(struct!.tmpl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined) {
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
  private _tmpl = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplOutputReference(this, "tmpl");
  public get tmpl() {
    return this._tmpl;
  }
  public putTmpl(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#json_keys DataK8SGatewaySoloIoGatewayV1Manifest#json_keys}
  */
  readonly jsonKeys?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_keys: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysToTerraform(struct!.jsonKeys),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_keys: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysToHclTerraform(struct!.jsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeys | cdktf.IResolvable | undefined) {
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
  private _jsonKeys = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysOutputReference(this, "json_keys");
  public get jsonKeys() {
    return this._jsonKeys;
  }
  public putJsonKeys(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#advanced_templates DataK8SGatewaySoloIoGatewayV1Manifest#advanced_templates}
  */
  readonly advancedTemplates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#body DataK8SGatewaySoloIoGatewayV1Manifest#body}
  */
  readonly body?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#dynamic_metadata_values DataK8SGatewaySoloIoGatewayV1Manifest#dynamic_metadata_values}
  */
  readonly dynamicMetadataValues?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValues[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#escape_characters DataK8SGatewaySoloIoGatewayV1Manifest#escape_characters}
  */
  readonly escapeCharacters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#extractors DataK8SGatewaySoloIoGatewayV1Manifest#extractors}
  */
  readonly extractors?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers DataK8SGatewaySoloIoGatewayV1Manifest#headers}
  */
  readonly headers?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers_to_append DataK8SGatewaySoloIoGatewayV1Manifest#headers_to_append}
  */
  readonly headersToAppend?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppend[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#headers_to_remove DataK8SGatewaySoloIoGatewayV1Manifest#headers_to_remove}
  */
  readonly headersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#ignore_error_on_parse DataK8SGatewaySoloIoGatewayV1Manifest#ignore_error_on_parse}
  */
  readonly ignoreErrorOnParse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#merge_extractors_to_body DataK8SGatewaySoloIoGatewayV1Manifest#merge_extractors_to_body}
  */
  readonly mergeExtractorsToBody?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#merge_json_keys DataK8SGatewaySoloIoGatewayV1Manifest#merge_json_keys}
  */
  readonly mergeJsonKeys?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeys;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#parse_body_behavior DataK8SGatewaySoloIoGatewayV1Manifest#parse_body_behavior}
  */
  readonly parseBodyBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#passthrough DataK8SGatewaySoloIoGatewayV1Manifest#passthrough}
  */
  readonly passthrough?: { [key: string]: string };
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_templates: cdktf.booleanToTerraform(struct!.advancedTemplates),
    body: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBodyToTerraform(struct!.body),
    dynamic_metadata_values: cdktf.listMapper(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesToTerraform, false)(struct!.dynamicMetadataValues),
    escape_characters: cdktf.booleanToTerraform(struct!.escapeCharacters),
    extractors: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractorsToTerraform(struct!.extractors),
    headers: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToTerraform(struct!.headers),
    headers_to_append: cdktf.listMapper(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendToTerraform, false)(struct!.headersToAppend),
    headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToRemove),
    ignore_error_on_parse: cdktf.booleanToTerraform(struct!.ignoreErrorOnParse),
    merge_extractors_to_body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.mergeExtractorsToBody),
    merge_json_keys: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysToTerraform(struct!.mergeJsonKeys),
    parse_body_behavior: cdktf.stringToTerraform(struct!.parseBodyBehavior),
    passthrough: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.passthrough),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformation | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBody",
    },
    dynamic_metadata_values: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesToHclTerraform, false)(struct!.dynamicMetadataValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesList",
    },
    escape_characters: {
      value: cdktf.booleanToHclTerraform(struct!.escapeCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extractors: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractorsToHclTerraform(struct!.extractors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractors",
    },
    headers: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeaders",
    },
    headers_to_append: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendToHclTerraform, false)(struct!.headersToAppend),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendList",
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
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysToHclTerraform(struct!.mergeJsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeys",
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformation | cdktf.IResolvable | undefined) {
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
  private _body = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationBody) {
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
  private _dynamicMetadataValues = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesList(this, "dynamic_metadata_values", false);
  public get dynamicMetadataValues() {
    return this._dynamicMetadataValues;
  }
  public putDynamicMetadataValues(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationDynamicMetadataValues[] | cdktf.IResolvable) {
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
  private _extractors = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractorsOutputReference(this, "extractors");
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationExtractors) {
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
  private _headers = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeaders) {
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
  private _headersToAppend = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppendList(this, "headers_to_append", false);
  public get headersToAppend() {
    return this._headersToAppend;
  }
  public putHeadersToAppend(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationHeadersToAppend[] | cdktf.IResolvable) {
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
  private _mergeJsonKeys = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeysOutputReference(this, "merge_json_keys");
  public get mergeJsonKeys() {
    return this._mergeJsonKeys;
  }
  public putMergeJsonKeys(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationMergeJsonKeys) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#function_name DataK8SGatewaySoloIoGatewayV1Manifest#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#parameters DataK8SGatewaySoloIoGatewayV1Manifest#parameters}
  */
  readonly parameters?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#response_transformation DataK8SGatewaySoloIoGatewayV1Manifest#response_transformation}
  */
  readonly responseTransformation?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformation;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    parameters: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParametersToTerraform(struct!.parameters),
    response_transformation: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationToTerraform(struct!.responseTransformation),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParameters",
    },
    response_transformation: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationToHclTerraform(struct!.responseTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._responseTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTransformation = this._responseTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._parameters.internalValue = undefined;
      this._responseTransformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._parameters.internalValue = value.parameters;
      this._responseTransformation.internalValue = value.responseTransformation;
    }
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // response_transformation - computed: false, optional: true, required: false
  private _responseTransformation = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformationOutputReference(this, "response_transformation");
  public get responseTransformation() {
    return this._responseTransformation;
  }
  public putResponseTransformation(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestResponseTransformation) {
    this._responseTransformation.internalValue = value;
  }
  public resetResponseTransformation() {
    this._responseTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTransformationInput() {
    return this._responseTransformation.internalValue;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#aws DataK8SGatewaySoloIoGatewayV1Manifest#aws}
  */
  readonly aws?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAws;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#azure DataK8SGatewaySoloIoGatewayV1Manifest#azure}
  */
  readonly azure?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#grpc DataK8SGatewaySoloIoGatewayV1Manifest#grpc}
  */
  readonly grpc?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#rest DataK8SGatewaySoloIoGatewayV1Manifest#rest}
  */
  readonly rest?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRest;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAwsToTerraform(struct!.aws),
    azure: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzureToTerraform(struct!.azure),
    grpc: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcToTerraform(struct!.grpc),
    rest: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestToTerraform(struct!.rest),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAws",
    },
    azure: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzure",
    },
    grpc: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpc",
    },
    rest: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestToHclTerraform(struct!.rest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._rest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rest = this._rest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._rest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._grpc.internalValue = value.grpc;
      this._rest.internalValue = value.rest;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // rest - computed: false, optional: true, required: false
  private _rest = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRestOutputReference(this, "rest");
  public get rest() {
    return this._rest;
  }
  public putRest(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecRest) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#name DataK8SGatewaySoloIoGatewayV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#namespace DataK8SGatewaySoloIoGatewayV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRefToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRefToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRef | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKube {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#port DataK8SGatewaySoloIoGatewayV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#ref DataK8SGatewaySoloIoGatewayV1Manifest#ref}
  */
  readonly ref?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRef;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKube | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    ref: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRefToTerraform(struct!.ref),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKube | cdktf.IResolvable): any {
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
    ref: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKube | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKube | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._ref.internalValue = value.ref;
    }
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

  // ref - computed: false, optional: true, required: false
  private _ref = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeRef) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#values DataK8SGatewaySoloIoGatewayV1Manifest#values}
  */
  readonly values?: { [key: string]: string };
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubsetToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubsetToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#name DataK8SGatewaySoloIoGatewayV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#namespace DataK8SGatewaySoloIoGatewayV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstreamToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstreamToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstream | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstream | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstream | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#consul DataK8SGatewaySoloIoGatewayV1Manifest#consul}
  */
  readonly consul?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsul;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#destination_spec DataK8SGatewaySoloIoGatewayV1Manifest#destination_spec}
  */
  readonly destinationSpec?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#kube DataK8SGatewaySoloIoGatewayV1Manifest#kube}
  */
  readonly kube?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKube;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#subset DataK8SGatewaySoloIoGatewayV1Manifest#subset}
  */
  readonly subset?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#upstream DataK8SGatewaySoloIoGatewayV1Manifest#upstream}
  */
  readonly upstream?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstream;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consul: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsulToTerraform(struct!.consul),
    destination_spec: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecToTerraform(struct!.destinationSpec),
    kube: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeToTerraform(struct!.kube),
    subset: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubsetToTerraform(struct!.subset),
    upstream: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstreamToTerraform(struct!.upstream),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consul: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsulToHclTerraform(struct!.consul),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsul",
    },
    destination_spec: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecToHclTerraform(struct!.destinationSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpec",
    },
    kube: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeToHclTerraform(struct!.kube),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKube",
    },
    subset: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubsetToHclTerraform(struct!.subset),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubset",
    },
    upstream: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstreamToHclTerraform(struct!.upstream),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstream",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consul?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consul = this._consul?.internalValue;
    }
    if (this._destinationSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSpec = this._destinationSpec?.internalValue;
    }
    if (this._kube?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kube = this._kube?.internalValue;
    }
    if (this._subset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subset = this._subset?.internalValue;
    }
    if (this._upstream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consul.internalValue = undefined;
      this._destinationSpec.internalValue = undefined;
      this._kube.internalValue = undefined;
      this._subset.internalValue = undefined;
      this._upstream.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consul.internalValue = value.consul;
      this._destinationSpec.internalValue = value.destinationSpec;
      this._kube.internalValue = value.kube;
      this._subset.internalValue = value.subset;
      this._upstream.internalValue = value.upstream;
    }
  }

  // consul - computed: false, optional: true, required: false
  private _consul = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsulOutputReference(this, "consul");
  public get consul() {
    return this._consul;
  }
  public putConsul(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleConsul) {
    this._consul.internalValue = value;
  }
  public resetConsul() {
    this._consul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulInput() {
    return this._consul.internalValue;
  }

  // destination_spec - computed: false, optional: true, required: false
  private _destinationSpec = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpecOutputReference(this, "destination_spec");
  public get destinationSpec() {
    return this._destinationSpec;
  }
  public putDestinationSpec(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleDestinationSpec) {
    this._destinationSpec.internalValue = value;
  }
  public resetDestinationSpec() {
    this._destinationSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSpecInput() {
    return this._destinationSpec.internalValue;
  }

  // kube - computed: false, optional: true, required: false
  private _kube = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKubeOutputReference(this, "kube");
  public get kube() {
    return this._kube;
  }
  public putKube(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleKube) {
    this._kube.internalValue = value;
  }
  public resetKube() {
    this._kube.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeInput() {
    return this._kube.internalValue;
  }

  // subset - computed: false, optional: true, required: false
  private _subset = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubsetOutputReference(this, "subset");
  public get subset() {
    return this._subset;
  }
  public putSubset(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleSubset) {
    this._subset.internalValue = value;
  }
  public resetSubset() {
    this._subset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetInput() {
    return this._subset.internalValue;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstreamOutputReference(this, "upstream");
  public get upstream() {
    return this._upstream;
  }
  public putUpstream(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleUpstream) {
    this._upstream.internalValue = value;
  }
  public resetUpstream() {
    this._upstream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream.internalValue;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#name DataK8SGatewaySoloIoGatewayV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#namespace DataK8SGatewaySoloIoGatewayV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroupToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroupToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroup | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroup | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#forward_sni_cluster_name DataK8SGatewaySoloIoGatewayV1Manifest#forward_sni_cluster_name}
  */
  readonly forwardSniClusterName?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#multi DataK8SGatewaySoloIoGatewayV1Manifest#multi}
  */
  readonly multi?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMulti;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#single DataK8SGatewaySoloIoGatewayV1Manifest#single}
  */
  readonly single?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#upstream_group DataK8SGatewaySoloIoGatewayV1Manifest#upstream_group}
  */
  readonly upstreamGroup?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroup;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_sni_cluster_name: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.forwardSniClusterName),
    multi: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiToTerraform(struct!.multi),
    single: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleToTerraform(struct!.single),
    upstream_group: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroupToTerraform(struct!.upstreamGroup),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_sni_cluster_name: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.forwardSniClusterName),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    multi: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiToHclTerraform(struct!.multi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMulti",
    },
    single: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleToHclTerraform(struct!.single),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingle",
    },
    upstream_group: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroupToHclTerraform(struct!.upstreamGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardSniClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardSniClusterName = this._forwardSniClusterName;
    }
    if (this._multi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multi = this._multi?.internalValue;
    }
    if (this._single?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.single = this._single?.internalValue;
    }
    if (this._upstreamGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamGroup = this._upstreamGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardSniClusterName = undefined;
      this._multi.internalValue = undefined;
      this._single.internalValue = undefined;
      this._upstreamGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardSniClusterName = value.forwardSniClusterName;
      this._multi.internalValue = value.multi;
      this._single.internalValue = value.single;
      this._upstreamGroup.internalValue = value.upstreamGroup;
    }
  }

  // forward_sni_cluster_name - computed: false, optional: true, required: false
  private _forwardSniClusterName?: { [key: string]: string }; 
  public get forwardSniClusterName() {
    return this.getStringMapAttribute('forward_sni_cluster_name');
  }
  public set forwardSniClusterName(value: { [key: string]: string }) {
    this._forwardSniClusterName = value;
  }
  public resetForwardSniClusterName() {
    this._forwardSniClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSniClusterNameInput() {
    return this._forwardSniClusterName;
  }

  // multi - computed: false, optional: true, required: false
  private _multi = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMultiOutputReference(this, "multi");
  public get multi() {
    return this._multi;
  }
  public putMulti(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationMulti) {
    this._multi.internalValue = value;
  }
  public resetMulti() {
    this._multi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiInput() {
    return this._multi.internalValue;
  }

  // single - computed: false, optional: true, required: false
  private _single = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingleOutputReference(this, "single");
  public get single() {
    return this._single;
  }
  public putSingle(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationSingle) {
    this._single.internalValue = value;
  }
  public resetSingle() {
    this._single.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleInput() {
    return this._single.internalValue;
  }

  // upstream_group - computed: false, optional: true, required: false
  private _upstreamGroup = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroupOutputReference(this, "upstream_group");
  public get upstreamGroup() {
    return this._upstreamGroup;
  }
  public putUpstreamGroup(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationUpstreamGroup) {
    this._upstreamGroup.internalValue = value;
  }
  public resetUpstreamGroup() {
    this._upstreamGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamGroupInput() {
    return this._upstreamGroup.internalValue;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#cipher_suites DataK8SGatewaySoloIoGatewayV1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#ecdh_curves DataK8SGatewaySoloIoGatewayV1Manifest#ecdh_curves}
  */
  readonly ecdhCurves?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#maximum_protocol_version DataK8SGatewaySoloIoGatewayV1Manifest#maximum_protocol_version}
  */
  readonly maximumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#minimum_protocol_version DataK8SGatewaySoloIoGatewayV1Manifest#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParametersToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParameters | cdktf.IResolvable): any {
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


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParametersToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParameters | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParameters | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#header DataK8SGatewaySoloIoGatewayV1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#token_file_name DataK8SGatewaySoloIoGatewayV1Manifest#token_file_name}
  */
  readonly tokenFileName?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSourceToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    token_file_name: cdktf.stringToTerraform(struct!.tokenFileName),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSourceToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSource | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#file_credential_source DataK8SGatewaySoloIoGatewayV1Manifest#file_credential_source}
  */
  readonly fileCredentialSource?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSource;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_credential_source: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSourceToTerraform(struct!.fileCredentialSource),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_credential_source: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSourceToHclTerraform(struct!.fileCredentialSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentials | cdktf.IResolvable | undefined) {
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
  private _fileCredentialSource = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSourceOutputReference(this, "file_credential_source");
  public get fileCredentialSource() {
    return this._fileCredentialSource;
  }
  public putFileCredentialSource(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsFileCredentialSource) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#call_credentials DataK8SGatewaySoloIoGatewayV1Manifest#call_credentials}
  */
  readonly callCredentials?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#certificates_secret_name DataK8SGatewaySoloIoGatewayV1Manifest#certificates_secret_name}
  */
  readonly certificatesSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#cluster_name DataK8SGatewaySoloIoGatewayV1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#target_uri DataK8SGatewaySoloIoGatewayV1Manifest#target_uri}
  */
  readonly targetUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#validation_context_name DataK8SGatewaySoloIoGatewayV1Manifest#validation_context_name}
  */
  readonly validationContextName?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call_credentials: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsToTerraform(struct!.callCredentials),
    certificates_secret_name: cdktf.stringToTerraform(struct!.certificatesSecretName),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
    validation_context_name: cdktf.stringToTerraform(struct!.validationContextName),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call_credentials: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsToHclTerraform(struct!.callCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentials",
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSds | cdktf.IResolvable | undefined) {
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
  private _callCredentials = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentialsOutputReference(this, "call_credentials");
  public get callCredentials() {
    return this._callCredentials;
  }
  public putCallCredentials(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsCallCredentials) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#name DataK8SGatewaySoloIoGatewayV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#namespace DataK8SGatewaySoloIoGatewayV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRefToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRefToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRef | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#ocsp_staple DataK8SGatewaySoloIoGatewayV1Manifest#ocsp_staple}
  */
  readonly ocspStaple?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#root_ca DataK8SGatewaySoloIoGatewayV1Manifest#root_ca}
  */
  readonly rootCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#tls_cert DataK8SGatewaySoloIoGatewayV1Manifest#tls_cert}
  */
  readonly tlsCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#tls_key DataK8SGatewaySoloIoGatewayV1Manifest#tls_key}
  */
  readonly tlsKey?: string;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFilesToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFiles | cdktf.IResolvable): any {
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


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFilesToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFiles | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFiles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFiles | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#alpn_protocols DataK8SGatewaySoloIoGatewayV1Manifest#alpn_protocols}
  */
  readonly alpnProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#disable_tls_session_resumption DataK8SGatewaySoloIoGatewayV1Manifest#disable_tls_session_resumption}
  */
  readonly disableTlsSessionResumption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#ocsp_staple_policy DataK8SGatewaySoloIoGatewayV1Manifest#ocsp_staple_policy}
  */
  readonly ocspStaplePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#one_way_tls DataK8SGatewaySoloIoGatewayV1Manifest#one_way_tls}
  */
  readonly oneWayTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#parameters DataK8SGatewaySoloIoGatewayV1Manifest#parameters}
  */
  readonly parameters?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#sds DataK8SGatewaySoloIoGatewayV1Manifest#sds}
  */
  readonly sds?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSds;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#secret_ref DataK8SGatewaySoloIoGatewayV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#sni_domains DataK8SGatewaySoloIoGatewayV1Manifest#sni_domains}
  */
  readonly sniDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#ssl_files DataK8SGatewaySoloIoGatewayV1Manifest#ssl_files}
  */
  readonly sslFiles?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFiles;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#transport_socket_connect_timeout DataK8SGatewaySoloIoGatewayV1Manifest#transport_socket_connect_timeout}
  */
  readonly transportSocketConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#verify_subject_alt_name DataK8SGatewaySoloIoGatewayV1Manifest#verify_subject_alt_name}
  */
  readonly verifySubjectAltName?: string[];
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alpn_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alpnProtocols),
    disable_tls_session_resumption: cdktf.booleanToTerraform(struct!.disableTlsSessionResumption),
    ocsp_staple_policy: cdktf.stringToTerraform(struct!.ocspStaplePolicy),
    one_way_tls: cdktf.booleanToTerraform(struct!.oneWayTls),
    parameters: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParametersToTerraform(struct!.parameters),
    sds: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsToTerraform(struct!.sds),
    secret_ref: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRefToTerraform(struct!.secretRef),
    sni_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sniDomains),
    ssl_files: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFilesToTerraform(struct!.sslFiles),
    transport_socket_connect_timeout: cdktf.stringToTerraform(struct!.transportSocketConnectTimeout),
    verify_subject_alt_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifySubjectAltName),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alpn_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alpnProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_tls_session_resumption: {
      value: cdktf.booleanToHclTerraform(struct!.disableTlsSessionResumption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ocsp_staple_policy: {
      value: cdktf.stringToHclTerraform(struct!.ocspStaplePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    one_way_tls: {
      value: cdktf.booleanToHclTerraform(struct!.oneWayTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParameters",
    },
    sds: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSds",
    },
    secret_ref: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRef",
    },
    sni_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sniDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_files: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFilesToHclTerraform(struct!.sslFiles),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFiles",
    },
    transport_socket_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.transportSocketConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alpnProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.alpnProtocols = this._alpnProtocols;
    }
    if (this._disableTlsSessionResumption !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTlsSessionResumption = this._disableTlsSessionResumption;
    }
    if (this._ocspStaplePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStaplePolicy = this._ocspStaplePolicy;
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
    if (this._sniDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniDomains = this._sniDomains;
    }
    if (this._sslFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslFiles = this._sslFiles?.internalValue;
    }
    if (this._transportSocketConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportSocketConnectTimeout = this._transportSocketConnectTimeout;
    }
    if (this._verifySubjectAltName !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySubjectAltName = this._verifySubjectAltName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alpnProtocols = undefined;
      this._disableTlsSessionResumption = undefined;
      this._ocspStaplePolicy = undefined;
      this._oneWayTls = undefined;
      this._parameters.internalValue = undefined;
      this._sds.internalValue = undefined;
      this._secretRef.internalValue = undefined;
      this._sniDomains = undefined;
      this._sslFiles.internalValue = undefined;
      this._transportSocketConnectTimeout = undefined;
      this._verifySubjectAltName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alpnProtocols = value.alpnProtocols;
      this._disableTlsSessionResumption = value.disableTlsSessionResumption;
      this._ocspStaplePolicy = value.ocspStaplePolicy;
      this._oneWayTls = value.oneWayTls;
      this._parameters.internalValue = value.parameters;
      this._sds.internalValue = value.sds;
      this._secretRef.internalValue = value.secretRef;
      this._sniDomains = value.sniDomains;
      this._sslFiles.internalValue = value.sslFiles;
      this._transportSocketConnectTimeout = value.transportSocketConnectTimeout;
      this._verifySubjectAltName = value.verifySubjectAltName;
    }
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

  // disable_tls_session_resumption - computed: false, optional: true, required: false
  private _disableTlsSessionResumption?: boolean | cdktf.IResolvable; 
  public get disableTlsSessionResumption() {
    return this.getBooleanAttribute('disable_tls_session_resumption');
  }
  public set disableTlsSessionResumption(value: boolean | cdktf.IResolvable) {
    this._disableTlsSessionResumption = value;
  }
  public resetDisableTlsSessionResumption() {
    this._disableTlsSessionResumption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTlsSessionResumptionInput() {
    return this._disableTlsSessionResumption;
  }

  // ocsp_staple_policy - computed: false, optional: true, required: false
  private _ocspStaplePolicy?: string; 
  public get ocspStaplePolicy() {
    return this.getStringAttribute('ocsp_staple_policy');
  }
  public set ocspStaplePolicy(value: string) {
    this._ocspStaplePolicy = value;
  }
  public resetOcspStaplePolicy() {
    this._ocspStaplePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplePolicyInput() {
    return this._ocspStaplePolicy;
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
  private _parameters = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigParameters) {
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
  private _sds = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSds) {
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
  private _secretRef = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // sni_domains - computed: false, optional: true, required: false
  private _sniDomains?: string[]; 
  public get sniDomains() {
    return this.getListAttribute('sni_domains');
  }
  public set sniDomains(value: string[]) {
    this._sniDomains = value;
  }
  public resetSniDomains() {
    this._sniDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniDomainsInput() {
    return this._sniDomains;
  }

  // ssl_files - computed: false, optional: true, required: false
  private _sslFiles = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFilesOutputReference(this, "ssl_files");
  public get sslFiles() {
    return this._sslFiles;
  }
  public putSslFiles(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigSslFiles) {
    this._sslFiles.internalValue = value;
  }
  public resetSslFiles() {
    this._sslFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslFilesInput() {
    return this._sslFiles.internalValue;
  }

  // transport_socket_connect_timeout - computed: false, optional: true, required: false
  private _transportSocketConnectTimeout?: string; 
  public get transportSocketConnectTimeout() {
    return this.getStringAttribute('transport_socket_connect_timeout');
  }
  public set transportSocketConnectTimeout(value: string) {
    this._transportSocketConnectTimeout = value;
  }
  public resetTransportSocketConnectTimeout() {
    this._transportSocketConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportSocketConnectTimeoutInput() {
    return this._transportSocketConnectTimeout;
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
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#destination DataK8SGatewaySoloIoGatewayV1Manifest#destination}
  */
  readonly destination?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#name DataK8SGatewaySoloIoGatewayV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#ssl_config DataK8SGatewaySoloIoGatewayV1Manifest#ssl_config}
  */
  readonly sslConfig?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfig;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationToTerraform(struct!.destination),
    name: cdktf.stringToTerraform(struct!.name),
    ssl_config: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigToTerraform(struct!.sslConfig),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestination",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_config: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._name = undefined;
      this._sslConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._name = value.name;
      this._sslConfig.internalValue = value.sslConfig;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
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

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHosts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsOutputReference {
    return new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#options DataK8SGatewaySoloIoGatewayV1Manifest#options}
  */
  readonly options?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#tcp_hosts DataK8SGatewaySoloIoGatewayV1Manifest#tcp_hosts}
  */
  readonly tcpHosts?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHosts[] | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOptionsToTerraform(struct!.options),
    tcp_hosts: cdktf.listMapper(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsToTerraform, false)(struct!.tcpHosts),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOptions",
    },
    tcp_hosts: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsToHclTerraform, false)(struct!.tcpHosts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._tcpHosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHosts = this._tcpHosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options.internalValue = undefined;
      this._tcpHosts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options.internalValue = value.options;
      this._tcpHosts.internalValue = value.tcpHosts;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // tcp_hosts - computed: false, optional: true, required: false
  private _tcpHosts = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHostsList(this, "tcp_hosts", false);
  public get tcpHosts() {
    return this._tcpHosts;
  }
  public putTcpHosts(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayTcpHosts[] | cdktf.IResolvable) {
    this._tcpHosts.internalValue = value;
  }
  public resetTcpHosts() {
    this._tcpHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHostsInput() {
    return this._tcpHosts.internalValue;
  }
}
export interface DataK8SGatewaySoloIoGatewayV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#bind_address DataK8SGatewaySoloIoGatewayV1Manifest#bind_address}
  */
  readonly bindAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#bind_port DataK8SGatewaySoloIoGatewayV1Manifest#bind_port}
  */
  readonly bindPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#http_gateway DataK8SGatewaySoloIoGatewayV1Manifest#http_gateway}
  */
  readonly httpGateway?: DataK8SGatewaySoloIoGatewayV1ManifestSpecHttpGateway;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#hybrid_gateway DataK8SGatewaySoloIoGatewayV1Manifest#hybrid_gateway}
  */
  readonly hybridGateway?: DataK8SGatewaySoloIoGatewayV1ManifestSpecHybridGateway;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#namespaced_statuses DataK8SGatewaySoloIoGatewayV1Manifest#namespaced_statuses}
  */
  readonly namespacedStatuses?: DataK8SGatewaySoloIoGatewayV1ManifestSpecNamespacedStatuses;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#options DataK8SGatewaySoloIoGatewayV1Manifest#options}
  */
  readonly options?: DataK8SGatewaySoloIoGatewayV1ManifestSpecOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#proxy_names DataK8SGatewaySoloIoGatewayV1Manifest#proxy_names}
  */
  readonly proxyNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#route_options DataK8SGatewaySoloIoGatewayV1Manifest#route_options}
  */
  readonly routeOptions?: DataK8SGatewaySoloIoGatewayV1ManifestSpecRouteOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#ssl DataK8SGatewaySoloIoGatewayV1Manifest#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#tcp_gateway DataK8SGatewaySoloIoGatewayV1Manifest#tcp_gateway}
  */
  readonly tcpGateway?: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGateway;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_solo_io_gateway_v1_manifest#use_proxy_proto DataK8SGatewaySoloIoGatewayV1Manifest#use_proxy_proto}
  */
  readonly useProxyProto?: boolean | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoGatewayV1ManifestSpecToTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_address: cdktf.stringToTerraform(struct!.bindAddress),
    bind_port: cdktf.numberToTerraform(struct!.bindPort),
    http_gateway: dataK8SGatewaySoloIoGatewayV1ManifestSpecHttpGatewayToTerraform(struct!.httpGateway),
    hybrid_gateway: dataK8SGatewaySoloIoGatewayV1ManifestSpecHybridGatewayToTerraform(struct!.hybridGateway),
    namespaced_statuses: dataK8SGatewaySoloIoGatewayV1ManifestSpecNamespacedStatusesToTerraform(struct!.namespacedStatuses),
    options: dataK8SGatewaySoloIoGatewayV1ManifestSpecOptionsToTerraform(struct!.options),
    proxy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyNames),
    route_options: dataK8SGatewaySoloIoGatewayV1ManifestSpecRouteOptionsToTerraform(struct!.routeOptions),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    tcp_gateway: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayToTerraform(struct!.tcpGateway),
    use_proxy_proto: cdktf.booleanToTerraform(struct!.useProxyProto),
  }
}


export function dataK8SGatewaySoloIoGatewayV1ManifestSpecToHclTerraform(struct?: DataK8SGatewaySoloIoGatewayV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_address: {
      value: cdktf.stringToHclTerraform(struct!.bindAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_port: {
      value: cdktf.numberToHclTerraform(struct!.bindPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_gateway: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecHttpGatewayToHclTerraform(struct!.httpGateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecHttpGateway",
    },
    hybrid_gateway: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecHybridGatewayToHclTerraform(struct!.hybridGateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecHybridGateway",
    },
    namespaced_statuses: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecNamespacedStatusesToHclTerraform(struct!.namespacedStatuses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecNamespacedStatuses",
    },
    options: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecOptions",
    },
    proxy_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    route_options: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecRouteOptionsToHclTerraform(struct!.routeOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecRouteOptions",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_gateway: {
      value: dataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayToHclTerraform(struct!.tcpGateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGateway",
    },
    use_proxy_proto: {
      value: cdktf.booleanToHclTerraform(struct!.useProxyProto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoGatewayV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoGatewayV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindAddress = this._bindAddress;
    }
    if (this._bindPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindPort = this._bindPort;
    }
    if (this._httpGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGateway = this._httpGateway?.internalValue;
    }
    if (this._hybridGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridGateway = this._hybridGateway?.internalValue;
    }
    if (this._namespacedStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedStatuses = this._namespacedStatuses?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._proxyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyNames = this._proxyNames;
    }
    if (this._routeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeOptions = this._routeOptions?.internalValue;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._tcpGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpGateway = this._tcpGateway?.internalValue;
    }
    if (this._useProxyProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxyProto = this._useProxyProto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoGatewayV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindAddress = undefined;
      this._bindPort = undefined;
      this._httpGateway.internalValue = undefined;
      this._hybridGateway.internalValue = undefined;
      this._namespacedStatuses.internalValue = undefined;
      this._options.internalValue = undefined;
      this._proxyNames = undefined;
      this._routeOptions.internalValue = undefined;
      this._ssl = undefined;
      this._tcpGateway.internalValue = undefined;
      this._useProxyProto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindAddress = value.bindAddress;
      this._bindPort = value.bindPort;
      this._httpGateway.internalValue = value.httpGateway;
      this._hybridGateway.internalValue = value.hybridGateway;
      this._namespacedStatuses.internalValue = value.namespacedStatuses;
      this._options.internalValue = value.options;
      this._proxyNames = value.proxyNames;
      this._routeOptions.internalValue = value.routeOptions;
      this._ssl = value.ssl;
      this._tcpGateway.internalValue = value.tcpGateway;
      this._useProxyProto = value.useProxyProto;
    }
  }

  // bind_address - computed: false, optional: true, required: false
  private _bindAddress?: string; 
  public get bindAddress() {
    return this.getStringAttribute('bind_address');
  }
  public set bindAddress(value: string) {
    this._bindAddress = value;
  }
  public resetBindAddress() {
    this._bindAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAddressInput() {
    return this._bindAddress;
  }

  // bind_port - computed: false, optional: true, required: false
  private _bindPort?: number; 
  public get bindPort() {
    return this.getNumberAttribute('bind_port');
  }
  public set bindPort(value: number) {
    this._bindPort = value;
  }
  public resetBindPort() {
    this._bindPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPortInput() {
    return this._bindPort;
  }

  // http_gateway - computed: false, optional: true, required: false
  private _httpGateway = new DataK8SGatewaySoloIoGatewayV1ManifestSpecHttpGatewayOutputReference(this, "http_gateway");
  public get httpGateway() {
    return this._httpGateway;
  }
  public putHttpGateway(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecHttpGateway) {
    this._httpGateway.internalValue = value;
  }
  public resetHttpGateway() {
    this._httpGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGatewayInput() {
    return this._httpGateway.internalValue;
  }

  // hybrid_gateway - computed: false, optional: true, required: false
  private _hybridGateway = new DataK8SGatewaySoloIoGatewayV1ManifestSpecHybridGatewayOutputReference(this, "hybrid_gateway");
  public get hybridGateway() {
    return this._hybridGateway;
  }
  public putHybridGateway(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecHybridGateway) {
    this._hybridGateway.internalValue = value;
  }
  public resetHybridGateway() {
    this._hybridGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridGatewayInput() {
    return this._hybridGateway.internalValue;
  }

  // namespaced_statuses - computed: false, optional: true, required: false
  private _namespacedStatuses = new DataK8SGatewaySoloIoGatewayV1ManifestSpecNamespacedStatusesOutputReference(this, "namespaced_statuses");
  public get namespacedStatuses() {
    return this._namespacedStatuses;
  }
  public putNamespacedStatuses(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecNamespacedStatuses) {
    this._namespacedStatuses.internalValue = value;
  }
  public resetNamespacedStatuses() {
    this._namespacedStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedStatusesInput() {
    return this._namespacedStatuses.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SGatewaySoloIoGatewayV1ManifestSpecOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // proxy_names - computed: false, optional: true, required: false
  private _proxyNames?: string[]; 
  public get proxyNames() {
    return this.getListAttribute('proxy_names');
  }
  public set proxyNames(value: string[]) {
    this._proxyNames = value;
  }
  public resetProxyNames() {
    this._proxyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNamesInput() {
    return this._proxyNames;
  }

  // route_options - computed: false, optional: true, required: false
  private _routeOptions = new DataK8SGatewaySoloIoGatewayV1ManifestSpecRouteOptionsOutputReference(this, "route_options");
  public get routeOptions() {
    return this._routeOptions;
  }
  public putRouteOptions(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecRouteOptions) {
    this._routeOptions.internalValue = value;
  }
  public resetRouteOptions() {
    this._routeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOptionsInput() {
    return this._routeOptions.internalValue;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // tcp_gateway - computed: false, optional: true, required: false
  private _tcpGateway = new DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGatewayOutputReference(this, "tcp_gateway");
  public get tcpGateway() {
    return this._tcpGateway;
  }
  public putTcpGateway(value: DataK8SGatewaySoloIoGatewayV1ManifestSpecTcpGateway) {
    this._tcpGateway.internalValue = value;
  }
  public resetTcpGateway() {
    this._tcpGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpGatewayInput() {
    return this._tcpGateway.internalValue;
  }

  // use_proxy_proto - computed: false, optional: true, required: false
  private _useProxyProto?: boolean | cdktf.IResolvable; 
  public get useProxyProto() {
    return this.getBooleanAttribute('use_proxy_proto');
  }
  public set useProxyProto(value: boolean | cdktf.IResolvable) {
    this._useProxyProto = value;
  }
  public resetUseProxyProto() {
    this._useProxyProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyProtoInput() {
    return this._useProxyProto;
  }
}
