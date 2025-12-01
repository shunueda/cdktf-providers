import * as cdktf from 'cdktf';
import { DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationHeaderBodyTransform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationHeaderBodyTransformToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationHeaderBodyTransformToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationHeaderBodyTransformOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationTransformationTemplate,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationTransformationTemplateToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationTransformationTemplateToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationTransformationTemplateOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRetries,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRetriesToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRetriesToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRetriesOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStagedTransformations,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStagedTransformationsToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStagedTransformationsToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStagedTransformationsOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStats,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStatsToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStatsToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStatsOutputReference } from './structs400'
import { DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsBufferPerRoute,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsBufferPerRouteToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsBufferPerRouteToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsBufferPerRouteOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCors,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsPolicyMergeSettings,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsPolicyMergeSettingsToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsPolicyMergeSettingsToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsPolicyMergeSettingsOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCsrf,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCsrfToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCsrfToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCsrfOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsDlp,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsDlpToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsDlpToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsDlpOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtProc,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtProcToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtProcToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtProcOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtauth,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtauthToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtauthToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtauthOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtensions,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtensionsToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtensionsToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtensionsOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsHeaderManipulation,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsHeaderManipulationToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsHeaderManipulationToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsHeaderManipulationOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwt,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtStaged,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtStagedToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtStagedToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtStagedOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitConfigs,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitConfigsToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitConfigsToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitConfigsOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitEarlyConfigs,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitEarlyConfigsToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitEarlyConfigsToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitEarlyConfigsOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitRegularConfigs,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitRegularConfigsToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitRegularConfigsToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitRegularConfigsOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimit,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitBasic,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitBasicToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitBasicToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitBasicOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitEarly,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitEarlyToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitEarlyToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitEarlyOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitRegular,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitRegularToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitRegularToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitRegularOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRbac,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRbacToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRbacToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRbacOutputReference,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecNamespacedStatuses,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecNamespacedStatusesToTerraform,
dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecNamespacedStatusesToHclTerraform,
DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecNamespacedStatusesOutputReference } from './structs0'
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#non_xml_transform DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#non_xml_transform}
  */
  readonly nonXmlTransform?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#set_content_type DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#set_content_type}
  */
  readonly setContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#xslt DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#xslt}
  */
  readonly xslt?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformationToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformation | cdktf.IResolvable): any {
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


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformationToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformation | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformation | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#header_body_transform DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#header_body_transform}
  */
  readonly headerBodyTransform?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationHeaderBodyTransform;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#log_request_response_info DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#log_request_response_info}
  */
  readonly logRequestResponseInfo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#transformation_template DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#transformation_template}
  */
  readonly transformationTemplate?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationTransformationTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#xslt_transformation DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#xslt_transformation}
  */
  readonly xsltTransformation?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformation;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_body_transform: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationHeaderBodyTransformToTerraform(struct!.headerBodyTransform),
    log_request_response_info: cdktf.booleanToTerraform(struct!.logRequestResponseInfo),
    transformation_template: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationTransformationTemplateToTerraform(struct!.transformationTemplate),
    xslt_transformation: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformationToTerraform(struct!.xsltTransformation),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_body_transform: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationHeaderBodyTransformToHclTerraform(struct!.headerBodyTransform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationHeaderBodyTransform",
    },
    log_request_response_info: {
      value: cdktf.booleanToHclTerraform(struct!.logRequestResponseInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transformation_template: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationTransformationTemplateToHclTerraform(struct!.transformationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationTransformationTemplate",
    },
    xslt_transformation: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformationToHclTerraform(struct!.xsltTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformation | cdktf.IResolvable | undefined) {
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
  private _headerBodyTransform = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationHeaderBodyTransformOutputReference(this, "header_body_transform");
  public get headerBodyTransform() {
    return this._headerBodyTransform;
  }
  public putHeaderBodyTransform(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationHeaderBodyTransform) {
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
  private _transformationTemplate = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationTransformationTemplateOutputReference(this, "transformation_template");
  public get transformationTemplate() {
    return this._transformationTemplate;
  }
  public putTransformationTemplate(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationTransformationTemplate) {
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
  private _xsltTransformation = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformationOutputReference(this, "xslt_transformation");
  public get xsltTransformation() {
    return this._xsltTransformation;
  }
  public putXsltTransformation(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationXsltTransformation) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransform {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#add_request_metadata DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#add_request_metadata}
  */
  readonly addRequestMetadata?: boolean | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransformToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_request_metadata: cdktf.booleanToTerraform(struct!.addRequestMetadata),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransformToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransform | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransform | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransform | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#text DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBodyToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBodyToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBody | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBody | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBody | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#text DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#json_to_proto DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#json_to_proto}
  */
  readonly jsonToProto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#key DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#metadata_namespace DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#metadata_namespace}
  */
  readonly metadataNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#value DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#value}
  */
  readonly value?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_to_proto: cdktf.booleanToTerraform(struct!.jsonToProto),
    key: cdktf.stringToTerraform(struct!.key),
    metadata_namespace: cdktf.stringToTerraform(struct!.metadataNamespace),
    value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueToTerraform(struct!.value),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues | cdktf.IResolvable | undefined) {
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
  private _value = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesValue) {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesOutputReference {
    return new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#body DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#body}
  */
  readonly body?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#header DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#mode DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#regex DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#replacement_text DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#replacement_text}
  */
  readonly replacementText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#subgroup DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#subgroup}
  */
  readonly subgroup?: number;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractorsToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractors | cdktf.IResolvable): any {
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


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractorsToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractors | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractors | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#text DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeaders | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeaders | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#text DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#key DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#value DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#value}
  */
  readonly value?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueToTerraform(struct!.value),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend | cdktf.IResolvable | undefined) {
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
  private _value = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendValue) {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendOutputReference {
    return new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#text DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#override_empty DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#override_empty}
  */
  readonly overrideEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#tmpl DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#tmpl}
  */
  readonly tmpl?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_empty: cdktf.booleanToTerraform(struct!.overrideEmpty),
    tmpl: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplToTerraform(struct!.tmpl),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplToHclTerraform(struct!.tmpl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined) {
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
  private _tmpl = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmplOutputReference(this, "tmpl");
  public get tmpl() {
    return this._tmpl;
  }
  public putTmpl(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysTmpl) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#json_keys DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#json_keys}
  */
  readonly jsonKeys?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_keys: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysToTerraform(struct!.jsonKeys),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_keys: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysToHclTerraform(struct!.jsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys | cdktf.IResolvable | undefined) {
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
  private _jsonKeys = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeysOutputReference(this, "json_keys");
  public get jsonKeys() {
    return this._jsonKeys;
  }
  public putJsonKeys(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysJsonKeys) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#advanced_templates DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#advanced_templates}
  */
  readonly advancedTemplates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#body DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#body}
  */
  readonly body?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#dynamic_metadata_values DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#dynamic_metadata_values}
  */
  readonly dynamicMetadataValues?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#escape_characters DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#escape_characters}
  */
  readonly escapeCharacters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#extractors DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#extractors}
  */
  readonly extractors?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#headers DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#headers}
  */
  readonly headers?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#headers_to_append DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#headers_to_append}
  */
  readonly headersToAppend?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#headers_to_remove DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#headers_to_remove}
  */
  readonly headersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#ignore_error_on_parse DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#ignore_error_on_parse}
  */
  readonly ignoreErrorOnParse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#merge_extractors_to_body DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#merge_extractors_to_body}
  */
  readonly mergeExtractorsToBody?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#merge_json_keys DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#merge_json_keys}
  */
  readonly mergeJsonKeys?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#parse_body_behavior DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#parse_body_behavior}
  */
  readonly parseBodyBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#passthrough DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#passthrough}
  */
  readonly passthrough?: { [key: string]: string };
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_templates: cdktf.booleanToTerraform(struct!.advancedTemplates),
    body: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBodyToTerraform(struct!.body),
    dynamic_metadata_values: cdktf.listMapper(dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesToTerraform, false)(struct!.dynamicMetadataValues),
    escape_characters: cdktf.booleanToTerraform(struct!.escapeCharacters),
    extractors: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractorsToTerraform(struct!.extractors),
    headers: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToTerraform(struct!.headers),
    headers_to_append: cdktf.listMapper(dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendToTerraform, false)(struct!.headersToAppend),
    headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToRemove),
    ignore_error_on_parse: cdktf.booleanToTerraform(struct!.ignoreErrorOnParse),
    merge_extractors_to_body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.mergeExtractorsToBody),
    merge_json_keys: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysToTerraform(struct!.mergeJsonKeys),
    parse_body_behavior: cdktf.stringToTerraform(struct!.parseBodyBehavior),
    passthrough: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.passthrough),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplate | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBody",
    },
    dynamic_metadata_values: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesToHclTerraform, false)(struct!.dynamicMetadataValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesList",
    },
    escape_characters: {
      value: cdktf.booleanToHclTerraform(struct!.escapeCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extractors: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractorsToHclTerraform(struct!.extractors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractors",
    },
    headers: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeaders",
    },
    headers_to_append: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendToHclTerraform, false)(struct!.headersToAppend),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendList",
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
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysToHclTerraform(struct!.mergeJsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys",
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplate | cdktf.IResolvable | undefined) {
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
  private _body = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateBody) {
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
  private _dynamicMetadataValues = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValuesList(this, "dynamic_metadata_values", false);
  public get dynamicMetadataValues() {
    return this._dynamicMetadataValues;
  }
  public putDynamicMetadataValues(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateDynamicMetadataValues[] | cdktf.IResolvable) {
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
  private _extractors = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractorsOutputReference(this, "extractors");
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateExtractors) {
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
  private _headers = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeaders) {
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
  private _headersToAppend = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppendList(this, "headers_to_append", false);
  public get headersToAppend() {
    return this._headersToAppend;
  }
  public putHeadersToAppend(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateHeadersToAppend[] | cdktf.IResolvable) {
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
  private _mergeJsonKeys = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeysOutputReference(this, "merge_json_keys");
  public get mergeJsonKeys() {
    return this._mergeJsonKeys;
  }
  public putMergeJsonKeys(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateMergeJsonKeys) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#non_xml_transform DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#non_xml_transform}
  */
  readonly nonXmlTransform?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#set_content_type DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#set_content_type}
  */
  readonly setContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#xslt DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#xslt}
  */
  readonly xslt?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformationToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformation | cdktf.IResolvable): any {
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


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformationToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformation | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformation | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#header_body_transform DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#header_body_transform}
  */
  readonly headerBodyTransform?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransform;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#log_request_response_info DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#log_request_response_info}
  */
  readonly logRequestResponseInfo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#transformation_template DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#transformation_template}
  */
  readonly transformationTemplate?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#xslt_transformation DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#xslt_transformation}
  */
  readonly xsltTransformation?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformation;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_body_transform: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransformToTerraform(struct!.headerBodyTransform),
    log_request_response_info: cdktf.booleanToTerraform(struct!.logRequestResponseInfo),
    transformation_template: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateToTerraform(struct!.transformationTemplate),
    xslt_transformation: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformationToTerraform(struct!.xsltTransformation),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_body_transform: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransformToHclTerraform(struct!.headerBodyTransform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransform",
    },
    log_request_response_info: {
      value: cdktf.booleanToHclTerraform(struct!.logRequestResponseInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transformation_template: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateToHclTerraform(struct!.transformationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplate",
    },
    xslt_transformation: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformationToHclTerraform(struct!.xsltTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformation | cdktf.IResolvable | undefined) {
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
  private _headerBodyTransform = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransformOutputReference(this, "header_body_transform");
  public get headerBodyTransform() {
    return this._headerBodyTransform;
  }
  public putHeaderBodyTransform(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationHeaderBodyTransform) {
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
  private _transformationTemplate = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplateOutputReference(this, "transformation_template");
  public get transformationTemplate() {
    return this._transformationTemplate;
  }
  public putTransformationTemplate(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationTransformationTemplate) {
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
  private _xsltTransformation = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformationOutputReference(this, "xslt_transformation");
  public get xsltTransformation() {
    return this._xsltTransformation;
  }
  public putXsltTransformation(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationXsltTransformation) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#clear_route_cache DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#clear_route_cache}
  */
  readonly clearRouteCache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#request_transformation DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#request_transformation}
  */
  readonly requestTransformation?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#response_transformation DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#response_transformation}
  */
  readonly responseTransformation?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformation;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_route_cache: cdktf.booleanToTerraform(struct!.clearRouteCache),
    request_transformation: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationToTerraform(struct!.requestTransformation),
    response_transformation: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationToTerraform(struct!.responseTransformation),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformations | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationToHclTerraform(struct!.requestTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformation",
    },
    response_transformation: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationToHclTerraform(struct!.responseTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformations | cdktf.IResolvable | undefined) {
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
  private _requestTransformation = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformationOutputReference(this, "request_transformation");
  public get requestTransformation() {
    return this._requestTransformation;
  }
  public putRequestTransformation(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsRequestTransformation) {
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
  private _responseTransformation = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformationOutputReference(this, "response_transformation");
  public get responseTransformation() {
    return this._responseTransformation;
  }
  public putResponseTransformation(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsResponseTransformation) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#action DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#location DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#location}
  */
  readonly location?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLoggingToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLoggingToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._location = value.location;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#name DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#namespace DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRefToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRefToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRef | cdktf.IResolvable): any {
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

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#config_map_ref DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#data_map_keys DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#data_map_keys}
  */
  readonly dataMapKeys?: string[];
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRefToTerraform(struct!.configMapRef),
    data_map_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataMapKeys),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRef",
    },
    data_map_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataMapKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._dataMapKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataMapKeys = this._dataMapKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = undefined;
      this._dataMapKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = value.configMapRef;
      this._dataMapKeys = value.dataMapKeys;
    }
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // data_map_keys - computed: false, optional: true, required: false
  private _dataMapKeys?: string[]; 
  public get dataMapKeys() {
    return this.getListAttribute('data_map_keys');
  }
  public set dataMapKeys(value: string[]) {
    this._dataMapKeys = value;
  }
  public resetDataMapKeys() {
    this._dataMapKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMapKeysInput() {
    return this._dataMapKeys;
  }
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsOutputReference {
    return new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#custom_settings_file DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#custom_settings_file}
  */
  readonly customSettingsFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#custom_settings_string DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#custom_settings_string}
  */
  readonly customSettingsString?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSetToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_settings_file: cdktf.stringToTerraform(struct!.customSettingsFile),
    custom_settings_string: cdktf.stringToTerraform(struct!.customSettingsString),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSetToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_settings_file: {
      value: cdktf.stringToHclTerraform(struct!.customSettingsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_settings_string: {
      value: cdktf.stringToHclTerraform(struct!.customSettingsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSettingsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSettingsFile = this._customSettingsFile;
    }
    if (this._customSettingsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSettingsString = this._customSettingsString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customSettingsFile = undefined;
      this._customSettingsString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customSettingsFile = value.customSettingsFile;
      this._customSettingsString = value.customSettingsString;
    }
  }

  // custom_settings_file - computed: false, optional: true, required: false
  private _customSettingsFile?: string; 
  public get customSettingsFile() {
    return this.getStringAttribute('custom_settings_file');
  }
  public set customSettingsFile(value: string) {
    this._customSettingsFile = value;
  }
  public resetCustomSettingsFile() {
    this._customSettingsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSettingsFileInput() {
    return this._customSettingsFile;
  }

  // custom_settings_string - computed: false, optional: true, required: false
  private _customSettingsString?: string; 
  public get customSettingsString() {
    return this.getStringAttribute('custom_settings_string');
  }
  public set customSettingsString(value: string) {
    this._customSettingsString = value;
  }
  public resetCustomSettingsString() {
    this._customSettingsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSettingsStringInput() {
    return this._customSettingsString;
  }
}
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#directory DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#files DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#files}
  */
  readonly files?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#rule_str DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#rule_str}
  */
  readonly ruleStr?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSetsToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.files),
    rule_str: cdktf.stringToTerraform(struct!.ruleStr),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSetsToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.files),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_str: {
      value: cdktf.stringToHclTerraform(struct!.ruleStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._ruleStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleStr = this._ruleStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
      this._files = undefined;
      this._ruleStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
      this._files = value.files;
      this._ruleStr = value.ruleStr;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // files - computed: false, optional: true, required: false
  private _files?: string[]; 
  public get files() {
    return this.getListAttribute('files');
  }
  public set files(value: string[]) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // rule_str - computed: false, optional: true, required: false
  private _ruleStr?: string; 
  public get ruleStr() {
    return this.getStringAttribute('rule_str');
  }
  public set ruleStr(value: string) {
    this._ruleStr = value;
  }
  public resetRuleStr() {
    this._ruleStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStrInput() {
    return this._ruleStr;
  }
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSetsOutputReference {
    return new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWaf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#audit_logging DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#audit_logging}
  */
  readonly auditLogging?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLogging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#config_map_rule_sets DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#config_map_rule_sets}
  */
  readonly configMapRuleSets?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#core_rule_set DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#core_rule_set}
  */
  readonly coreRuleSet?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#custom_intervention_message DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#custom_intervention_message}
  */
  readonly customInterventionMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#disabled DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#request_headers_only DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#request_headers_only}
  */
  readonly requestHeadersOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#response_headers_only DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#response_headers_only}
  */
  readonly responseHeadersOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#rule_sets DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#rule_sets}
  */
  readonly ruleSets?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSets[] | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWaf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_logging: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLoggingToTerraform(struct!.auditLogging),
    config_map_rule_sets: cdktf.listMapper(dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsToTerraform, false)(struct!.configMapRuleSets),
    core_rule_set: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSetToTerraform(struct!.coreRuleSet),
    custom_intervention_message: cdktf.stringToTerraform(struct!.customInterventionMessage),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    request_headers_only: cdktf.booleanToTerraform(struct!.requestHeadersOnly),
    response_headers_only: cdktf.booleanToTerraform(struct!.responseHeadersOnly),
    rule_sets: cdktf.listMapper(dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSetsToTerraform, false)(struct!.ruleSets),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWaf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_logging: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLoggingToHclTerraform(struct!.auditLogging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLogging",
    },
    config_map_rule_sets: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsToHclTerraform, false)(struct!.configMapRuleSets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsList",
    },
    core_rule_set: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSetToHclTerraform(struct!.coreRuleSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSet",
    },
    custom_intervention_message: {
      value: cdktf.stringToHclTerraform(struct!.customInterventionMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_headers_only: {
      value: cdktf.booleanToHclTerraform(struct!.requestHeadersOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_headers_only: {
      value: cdktf.booleanToHclTerraform(struct!.responseHeadersOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_sets: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSetsToHclTerraform, false)(struct!.ruleSets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWaf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogging = this._auditLogging?.internalValue;
    }
    if (this._configMapRuleSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRuleSets = this._configMapRuleSets?.internalValue;
    }
    if (this._coreRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreRuleSet = this._coreRuleSet?.internalValue;
    }
    if (this._customInterventionMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customInterventionMessage = this._customInterventionMessage;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._requestHeadersOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersOnly = this._requestHeadersOnly;
    }
    if (this._responseHeadersOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersOnly = this._responseHeadersOnly;
    }
    if (this._ruleSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSets = this._ruleSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWaf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditLogging.internalValue = undefined;
      this._configMapRuleSets.internalValue = undefined;
      this._coreRuleSet.internalValue = undefined;
      this._customInterventionMessage = undefined;
      this._disabled = undefined;
      this._requestHeadersOnly = undefined;
      this._responseHeadersOnly = undefined;
      this._ruleSets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditLogging.internalValue = value.auditLogging;
      this._configMapRuleSets.internalValue = value.configMapRuleSets;
      this._coreRuleSet.internalValue = value.coreRuleSet;
      this._customInterventionMessage = value.customInterventionMessage;
      this._disabled = value.disabled;
      this._requestHeadersOnly = value.requestHeadersOnly;
      this._responseHeadersOnly = value.responseHeadersOnly;
      this._ruleSets.internalValue = value.ruleSets;
    }
  }

  // audit_logging - computed: false, optional: true, required: false
  private _auditLogging = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLoggingOutputReference(this, "audit_logging");
  public get auditLogging() {
    return this._auditLogging;
  }
  public putAuditLogging(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafAuditLogging) {
    this._auditLogging.internalValue = value;
  }
  public resetAuditLogging() {
    this._auditLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLoggingInput() {
    return this._auditLogging.internalValue;
  }

  // config_map_rule_sets - computed: false, optional: true, required: false
  private _configMapRuleSets = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSetsList(this, "config_map_rule_sets", false);
  public get configMapRuleSets() {
    return this._configMapRuleSets;
  }
  public putConfigMapRuleSets(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafConfigMapRuleSets[] | cdktf.IResolvable) {
    this._configMapRuleSets.internalValue = value;
  }
  public resetConfigMapRuleSets() {
    this._configMapRuleSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRuleSetsInput() {
    return this._configMapRuleSets.internalValue;
  }

  // core_rule_set - computed: false, optional: true, required: false
  private _coreRuleSet = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSetOutputReference(this, "core_rule_set");
  public get coreRuleSet() {
    return this._coreRuleSet;
  }
  public putCoreRuleSet(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafCoreRuleSet) {
    this._coreRuleSet.internalValue = value;
  }
  public resetCoreRuleSet() {
    this._coreRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreRuleSetInput() {
    return this._coreRuleSet.internalValue;
  }

  // custom_intervention_message - computed: false, optional: true, required: false
  private _customInterventionMessage?: string; 
  public get customInterventionMessage() {
    return this.getStringAttribute('custom_intervention_message');
  }
  public set customInterventionMessage(value: string) {
    this._customInterventionMessage = value;
  }
  public resetCustomInterventionMessage() {
    this._customInterventionMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInterventionMessageInput() {
    return this._customInterventionMessage;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // request_headers_only - computed: false, optional: true, required: false
  private _requestHeadersOnly?: boolean | cdktf.IResolvable; 
  public get requestHeadersOnly() {
    return this.getBooleanAttribute('request_headers_only');
  }
  public set requestHeadersOnly(value: boolean | cdktf.IResolvable) {
    this._requestHeadersOnly = value;
  }
  public resetRequestHeadersOnly() {
    this._requestHeadersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersOnlyInput() {
    return this._requestHeadersOnly;
  }

  // response_headers_only - computed: false, optional: true, required: false
  private _responseHeadersOnly?: boolean | cdktf.IResolvable; 
  public get responseHeadersOnly() {
    return this.getBooleanAttribute('response_headers_only');
  }
  public set responseHeadersOnly(value: boolean | cdktf.IResolvable) {
    this._responseHeadersOnly = value;
  }
  public resetResponseHeadersOnly() {
    this._responseHeadersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersOnlyInput() {
    return this._responseHeadersOnly;
  }

  // rule_sets - computed: false, optional: true, required: false
  private _ruleSets = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSetsList(this, "rule_sets", false);
  public get ruleSets() {
    return this._ruleSets;
  }
  public putRuleSets(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafRuleSets[] | cdktf.IResolvable) {
    this._ruleSets.internalValue = value;
  }
  public resetRuleSets() {
    this._ruleSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetsInput() {
    return this._ruleSets.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#buffer_per_route DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#buffer_per_route}
  */
  readonly bufferPerRoute?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsBufferPerRoute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#cors DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#cors}
  */
  readonly cors?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#cors_policy_merge_settings DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#cors_policy_merge_settings}
  */
  readonly corsPolicyMergeSettings?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsPolicyMergeSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#csrf DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#csrf}
  */
  readonly csrf?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCsrf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#dlp DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#dlp}
  */
  readonly dlp?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsDlp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#ext_proc DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#ext_proc}
  */
  readonly extProc?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtProc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#extauth DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#extauth}
  */
  readonly extauth?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtauth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#extensions DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#extensions}
  */
  readonly extensions?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtensions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#header_manipulation DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#header_manipulation}
  */
  readonly headerManipulation?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsHeaderManipulation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#include_attempt_count_in_response DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#include_attempt_count_in_response}
  */
  readonly includeAttemptCountInResponse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#include_request_attempt_count DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#include_request_attempt_count}
  */
  readonly includeRequestAttemptCount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#jwt DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#jwt}
  */
  readonly jwt?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwt;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#jwt_staged DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#jwt_staged}
  */
  readonly jwtStaged?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtStaged;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#rate_limit_configs DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#rate_limit_configs}
  */
  readonly rateLimitConfigs?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitConfigs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#rate_limit_early_configs DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#rate_limit_early_configs}
  */
  readonly rateLimitEarlyConfigs?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitEarlyConfigs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#rate_limit_regular_configs DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#rate_limit_regular_configs}
  */
  readonly rateLimitRegularConfigs?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitRegularConfigs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#ratelimit DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#ratelimit}
  */
  readonly ratelimit?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#ratelimit_basic DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#ratelimit_basic}
  */
  readonly ratelimitBasic?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitBasic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#ratelimit_early DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#ratelimit_early}
  */
  readonly ratelimitEarly?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitEarly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#ratelimit_regular DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#ratelimit_regular}
  */
  readonly ratelimitRegular?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitRegular;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#rbac DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#rbac}
  */
  readonly rbac?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRbac;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#retries DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#retries}
  */
  readonly retries?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRetries;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#staged_transformations DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#staged_transformations}
  */
  readonly stagedTransformations?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStagedTransformations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#stats DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#stats}
  */
  readonly stats?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStats;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#transformations DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#transformations}
  */
  readonly transformations?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#waf DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#waf}
  */
  readonly waf?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWaf;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_per_route: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsBufferPerRouteToTerraform(struct!.bufferPerRoute),
    cors: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsToTerraform(struct!.cors),
    cors_policy_merge_settings: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsPolicyMergeSettingsToTerraform(struct!.corsPolicyMergeSettings),
    csrf: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCsrfToTerraform(struct!.csrf),
    dlp: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsDlpToTerraform(struct!.dlp),
    ext_proc: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtProcToTerraform(struct!.extProc),
    extauth: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtauthToTerraform(struct!.extauth),
    extensions: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtensionsToTerraform(struct!.extensions),
    header_manipulation: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsHeaderManipulationToTerraform(struct!.headerManipulation),
    include_attempt_count_in_response: cdktf.booleanToTerraform(struct!.includeAttemptCountInResponse),
    include_request_attempt_count: cdktf.booleanToTerraform(struct!.includeRequestAttemptCount),
    jwt: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtToTerraform(struct!.jwt),
    jwt_staged: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtStagedToTerraform(struct!.jwtStaged),
    rate_limit_configs: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitConfigsToTerraform(struct!.rateLimitConfigs),
    rate_limit_early_configs: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitEarlyConfigsToTerraform(struct!.rateLimitEarlyConfigs),
    rate_limit_regular_configs: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitRegularConfigsToTerraform(struct!.rateLimitRegularConfigs),
    ratelimit: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitToTerraform(struct!.ratelimit),
    ratelimit_basic: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitBasicToTerraform(struct!.ratelimitBasic),
    ratelimit_early: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitEarlyToTerraform(struct!.ratelimitEarly),
    ratelimit_regular: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitRegularToTerraform(struct!.ratelimitRegular),
    rbac: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRbacToTerraform(struct!.rbac),
    retries: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRetriesToTerraform(struct!.retries),
    staged_transformations: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStagedTransformationsToTerraform(struct!.stagedTransformations),
    stats: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStatsToTerraform(struct!.stats),
    transformations: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsToTerraform(struct!.transformations),
    waf: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafToTerraform(struct!.waf),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_per_route: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsBufferPerRouteToHclTerraform(struct!.bufferPerRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsBufferPerRoute",
    },
    cors: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCors",
    },
    cors_policy_merge_settings: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsPolicyMergeSettingsToHclTerraform(struct!.corsPolicyMergeSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsPolicyMergeSettings",
    },
    csrf: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCsrfToHclTerraform(struct!.csrf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCsrf",
    },
    dlp: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsDlpToHclTerraform(struct!.dlp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsDlp",
    },
    ext_proc: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtProcToHclTerraform(struct!.extProc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtProc",
    },
    extauth: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtauthToHclTerraform(struct!.extauth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtauth",
    },
    extensions: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtensionsToHclTerraform(struct!.extensions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtensions",
    },
    header_manipulation: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsHeaderManipulationToHclTerraform(struct!.headerManipulation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsHeaderManipulation",
    },
    include_attempt_count_in_response: {
      value: cdktf.booleanToHclTerraform(struct!.includeAttemptCountInResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_request_attempt_count: {
      value: cdktf.booleanToHclTerraform(struct!.includeRequestAttemptCount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jwt: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtToHclTerraform(struct!.jwt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwt",
    },
    jwt_staged: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtStagedToHclTerraform(struct!.jwtStaged),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtStaged",
    },
    rate_limit_configs: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitConfigsToHclTerraform(struct!.rateLimitConfigs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitConfigs",
    },
    rate_limit_early_configs: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitEarlyConfigsToHclTerraform(struct!.rateLimitEarlyConfigs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitEarlyConfigs",
    },
    rate_limit_regular_configs: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitRegularConfigsToHclTerraform(struct!.rateLimitRegularConfigs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitRegularConfigs",
    },
    ratelimit: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitToHclTerraform(struct!.ratelimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimit",
    },
    ratelimit_basic: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitBasicToHclTerraform(struct!.ratelimitBasic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitBasic",
    },
    ratelimit_early: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitEarlyToHclTerraform(struct!.ratelimitEarly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitEarly",
    },
    ratelimit_regular: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitRegularToHclTerraform(struct!.ratelimitRegular),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitRegular",
    },
    rbac: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRbacToHclTerraform(struct!.rbac),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRbac",
    },
    retries: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRetriesToHclTerraform(struct!.retries),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRetries",
    },
    staged_transformations: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStagedTransformationsToHclTerraform(struct!.stagedTransformations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStagedTransformations",
    },
    stats: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStats",
    },
    transformations: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformations",
    },
    waf: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafToHclTerraform(struct!.waf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWaf",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferPerRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferPerRoute = this._bufferPerRoute?.internalValue;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._corsPolicyMergeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicyMergeSettings = this._corsPolicyMergeSettings?.internalValue;
    }
    if (this._csrf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csrf = this._csrf?.internalValue;
    }
    if (this._dlp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlp = this._dlp?.internalValue;
    }
    if (this._extProc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extProc = this._extProc?.internalValue;
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
    if (this._includeAttemptCountInResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAttemptCountInResponse = this._includeAttemptCountInResponse;
    }
    if (this._includeRequestAttemptCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRequestAttemptCount = this._includeRequestAttemptCount;
    }
    if (this._jwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt?.internalValue;
    }
    if (this._jwtStaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtStaged = this._jwtStaged?.internalValue;
    }
    if (this._rateLimitConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitConfigs = this._rateLimitConfigs?.internalValue;
    }
    if (this._rateLimitEarlyConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitEarlyConfigs = this._rateLimitEarlyConfigs?.internalValue;
    }
    if (this._rateLimitRegularConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitRegularConfigs = this._rateLimitRegularConfigs?.internalValue;
    }
    if (this._ratelimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimit = this._ratelimit?.internalValue;
    }
    if (this._ratelimitBasic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitBasic = this._ratelimitBasic?.internalValue;
    }
    if (this._ratelimitEarly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEarly = this._ratelimitEarly?.internalValue;
    }
    if (this._ratelimitRegular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitRegular = this._ratelimitRegular?.internalValue;
    }
    if (this._rbac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbac = this._rbac?.internalValue;
    }
    if (this._retries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries?.internalValue;
    }
    if (this._stagedTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagedTransformations = this._stagedTransformations?.internalValue;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    if (this._waf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waf = this._waf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferPerRoute.internalValue = undefined;
      this._cors.internalValue = undefined;
      this._corsPolicyMergeSettings.internalValue = undefined;
      this._csrf.internalValue = undefined;
      this._dlp.internalValue = undefined;
      this._extProc.internalValue = undefined;
      this._extauth.internalValue = undefined;
      this._extensions.internalValue = undefined;
      this._headerManipulation.internalValue = undefined;
      this._includeAttemptCountInResponse = undefined;
      this._includeRequestAttemptCount = undefined;
      this._jwt.internalValue = undefined;
      this._jwtStaged.internalValue = undefined;
      this._rateLimitConfigs.internalValue = undefined;
      this._rateLimitEarlyConfigs.internalValue = undefined;
      this._rateLimitRegularConfigs.internalValue = undefined;
      this._ratelimit.internalValue = undefined;
      this._ratelimitBasic.internalValue = undefined;
      this._ratelimitEarly.internalValue = undefined;
      this._ratelimitRegular.internalValue = undefined;
      this._rbac.internalValue = undefined;
      this._retries.internalValue = undefined;
      this._stagedTransformations.internalValue = undefined;
      this._stats.internalValue = undefined;
      this._transformations.internalValue = undefined;
      this._waf.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferPerRoute.internalValue = value.bufferPerRoute;
      this._cors.internalValue = value.cors;
      this._corsPolicyMergeSettings.internalValue = value.corsPolicyMergeSettings;
      this._csrf.internalValue = value.csrf;
      this._dlp.internalValue = value.dlp;
      this._extProc.internalValue = value.extProc;
      this._extauth.internalValue = value.extauth;
      this._extensions.internalValue = value.extensions;
      this._headerManipulation.internalValue = value.headerManipulation;
      this._includeAttemptCountInResponse = value.includeAttemptCountInResponse;
      this._includeRequestAttemptCount = value.includeRequestAttemptCount;
      this._jwt.internalValue = value.jwt;
      this._jwtStaged.internalValue = value.jwtStaged;
      this._rateLimitConfigs.internalValue = value.rateLimitConfigs;
      this._rateLimitEarlyConfigs.internalValue = value.rateLimitEarlyConfigs;
      this._rateLimitRegularConfigs.internalValue = value.rateLimitRegularConfigs;
      this._ratelimit.internalValue = value.ratelimit;
      this._ratelimitBasic.internalValue = value.ratelimitBasic;
      this._ratelimitEarly.internalValue = value.ratelimitEarly;
      this._ratelimitRegular.internalValue = value.ratelimitRegular;
      this._rbac.internalValue = value.rbac;
      this._retries.internalValue = value.retries;
      this._stagedTransformations.internalValue = value.stagedTransformations;
      this._stats.internalValue = value.stats;
      this._transformations.internalValue = value.transformations;
      this._waf.internalValue = value.waf;
    }
  }

  // buffer_per_route - computed: false, optional: true, required: false
  private _bufferPerRoute = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsBufferPerRouteOutputReference(this, "buffer_per_route");
  public get bufferPerRoute() {
    return this._bufferPerRoute;
  }
  public putBufferPerRoute(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsBufferPerRoute) {
    this._bufferPerRoute.internalValue = value;
  }
  public resetBufferPerRoute() {
    this._bufferPerRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferPerRouteInput() {
    return this._bufferPerRoute.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // cors_policy_merge_settings - computed: false, optional: true, required: false
  private _corsPolicyMergeSettings = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsPolicyMergeSettingsOutputReference(this, "cors_policy_merge_settings");
  public get corsPolicyMergeSettings() {
    return this._corsPolicyMergeSettings;
  }
  public putCorsPolicyMergeSettings(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCorsPolicyMergeSettings) {
    this._corsPolicyMergeSettings.internalValue = value;
  }
  public resetCorsPolicyMergeSettings() {
    this._corsPolicyMergeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyMergeSettingsInput() {
    return this._corsPolicyMergeSettings.internalValue;
  }

  // csrf - computed: false, optional: true, required: false
  private _csrf = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCsrfOutputReference(this, "csrf");
  public get csrf() {
    return this._csrf;
  }
  public putCsrf(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsCsrf) {
    this._csrf.internalValue = value;
  }
  public resetCsrf() {
    this._csrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfInput() {
    return this._csrf.internalValue;
  }

  // dlp - computed: false, optional: true, required: false
  private _dlp = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsDlpOutputReference(this, "dlp");
  public get dlp() {
    return this._dlp;
  }
  public putDlp(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsDlp) {
    this._dlp.internalValue = value;
  }
  public resetDlp() {
    this._dlp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpInput() {
    return this._dlp.internalValue;
  }

  // ext_proc - computed: false, optional: true, required: false
  private _extProc = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtProcOutputReference(this, "ext_proc");
  public get extProc() {
    return this._extProc;
  }
  public putExtProc(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtProc) {
    this._extProc.internalValue = value;
  }
  public resetExtProc() {
    this._extProc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extProcInput() {
    return this._extProc.internalValue;
  }

  // extauth - computed: false, optional: true, required: false
  private _extauth = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtauthOutputReference(this, "extauth");
  public get extauth() {
    return this._extauth;
  }
  public putExtauth(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtauth) {
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
  private _extensions = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsExtensions) {
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
  private _headerManipulation = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsHeaderManipulationOutputReference(this, "header_manipulation");
  public get headerManipulation() {
    return this._headerManipulation;
  }
  public putHeaderManipulation(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsHeaderManipulation) {
    this._headerManipulation.internalValue = value;
  }
  public resetHeaderManipulation() {
    this._headerManipulation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerManipulationInput() {
    return this._headerManipulation.internalValue;
  }

  // include_attempt_count_in_response - computed: false, optional: true, required: false
  private _includeAttemptCountInResponse?: boolean | cdktf.IResolvable; 
  public get includeAttemptCountInResponse() {
    return this.getBooleanAttribute('include_attempt_count_in_response');
  }
  public set includeAttemptCountInResponse(value: boolean | cdktf.IResolvable) {
    this._includeAttemptCountInResponse = value;
  }
  public resetIncludeAttemptCountInResponse() {
    this._includeAttemptCountInResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAttemptCountInResponseInput() {
    return this._includeAttemptCountInResponse;
  }

  // include_request_attempt_count - computed: false, optional: true, required: false
  private _includeRequestAttemptCount?: boolean | cdktf.IResolvable; 
  public get includeRequestAttemptCount() {
    return this.getBooleanAttribute('include_request_attempt_count');
  }
  public set includeRequestAttemptCount(value: boolean | cdktf.IResolvable) {
    this._includeRequestAttemptCount = value;
  }
  public resetIncludeRequestAttemptCount() {
    this._includeRequestAttemptCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequestAttemptCountInput() {
    return this._includeRequestAttemptCount;
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtOutputReference(this, "jwt");
  public get jwt() {
    return this._jwt;
  }
  public putJwt(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwt) {
    this._jwt.internalValue = value;
  }
  public resetJwt() {
    this._jwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt.internalValue;
  }

  // jwt_staged - computed: false, optional: true, required: false
  private _jwtStaged = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtStagedOutputReference(this, "jwt_staged");
  public get jwtStaged() {
    return this._jwtStaged;
  }
  public putJwtStaged(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsJwtStaged) {
    this._jwtStaged.internalValue = value;
  }
  public resetJwtStaged() {
    this._jwtStaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtStagedInput() {
    return this._jwtStaged.internalValue;
  }

  // rate_limit_configs - computed: false, optional: true, required: false
  private _rateLimitConfigs = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitConfigsOutputReference(this, "rate_limit_configs");
  public get rateLimitConfigs() {
    return this._rateLimitConfigs;
  }
  public putRateLimitConfigs(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitConfigs) {
    this._rateLimitConfigs.internalValue = value;
  }
  public resetRateLimitConfigs() {
    this._rateLimitConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitConfigsInput() {
    return this._rateLimitConfigs.internalValue;
  }

  // rate_limit_early_configs - computed: false, optional: true, required: false
  private _rateLimitEarlyConfigs = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitEarlyConfigsOutputReference(this, "rate_limit_early_configs");
  public get rateLimitEarlyConfigs() {
    return this._rateLimitEarlyConfigs;
  }
  public putRateLimitEarlyConfigs(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitEarlyConfigs) {
    this._rateLimitEarlyConfigs.internalValue = value;
  }
  public resetRateLimitEarlyConfigs() {
    this._rateLimitEarlyConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitEarlyConfigsInput() {
    return this._rateLimitEarlyConfigs.internalValue;
  }

  // rate_limit_regular_configs - computed: false, optional: true, required: false
  private _rateLimitRegularConfigs = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitRegularConfigsOutputReference(this, "rate_limit_regular_configs");
  public get rateLimitRegularConfigs() {
    return this._rateLimitRegularConfigs;
  }
  public putRateLimitRegularConfigs(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRateLimitRegularConfigs) {
    this._rateLimitRegularConfigs.internalValue = value;
  }
  public resetRateLimitRegularConfigs() {
    this._rateLimitRegularConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitRegularConfigsInput() {
    return this._rateLimitRegularConfigs.internalValue;
  }

  // ratelimit - computed: false, optional: true, required: false
  private _ratelimit = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitOutputReference(this, "ratelimit");
  public get ratelimit() {
    return this._ratelimit;
  }
  public putRatelimit(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimit) {
    this._ratelimit.internalValue = value;
  }
  public resetRatelimit() {
    this._ratelimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitInput() {
    return this._ratelimit.internalValue;
  }

  // ratelimit_basic - computed: false, optional: true, required: false
  private _ratelimitBasic = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitBasicOutputReference(this, "ratelimit_basic");
  public get ratelimitBasic() {
    return this._ratelimitBasic;
  }
  public putRatelimitBasic(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitBasic) {
    this._ratelimitBasic.internalValue = value;
  }
  public resetRatelimitBasic() {
    this._ratelimitBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitBasicInput() {
    return this._ratelimitBasic.internalValue;
  }

  // ratelimit_early - computed: false, optional: true, required: false
  private _ratelimitEarly = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitEarlyOutputReference(this, "ratelimit_early");
  public get ratelimitEarly() {
    return this._ratelimitEarly;
  }
  public putRatelimitEarly(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitEarly) {
    this._ratelimitEarly.internalValue = value;
  }
  public resetRatelimitEarly() {
    this._ratelimitEarly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEarlyInput() {
    return this._ratelimitEarly.internalValue;
  }

  // ratelimit_regular - computed: false, optional: true, required: false
  private _ratelimitRegular = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitRegularOutputReference(this, "ratelimit_regular");
  public get ratelimitRegular() {
    return this._ratelimitRegular;
  }
  public putRatelimitRegular(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRatelimitRegular) {
    this._ratelimitRegular.internalValue = value;
  }
  public resetRatelimitRegular() {
    this._ratelimitRegular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitRegularInput() {
    return this._ratelimitRegular.internalValue;
  }

  // rbac - computed: false, optional: true, required: false
  private _rbac = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRbacOutputReference(this, "rbac");
  public get rbac() {
    return this._rbac;
  }
  public putRbac(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRbac) {
    this._rbac.internalValue = value;
  }
  public resetRbac() {
    this._rbac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacInput() {
    return this._rbac.internalValue;
  }

  // retries - computed: false, optional: true, required: false
  private _retries = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRetriesOutputReference(this, "retries");
  public get retries() {
    return this._retries;
  }
  public putRetries(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsRetries) {
    this._retries.internalValue = value;
  }
  public resetRetries() {
    this._retries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries.internalValue;
  }

  // staged_transformations - computed: false, optional: true, required: false
  private _stagedTransformations = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStagedTransformationsOutputReference(this, "staged_transformations");
  public get stagedTransformations() {
    return this._stagedTransformations;
  }
  public putStagedTransformations(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStagedTransformations) {
    this._stagedTransformations.internalValue = value;
  }
  public resetStagedTransformations() {
    this._stagedTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagedTransformationsInput() {
    return this._stagedTransformations.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // transformations - computed: false, optional: true, required: false
  private _transformations = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsTransformations) {
    this._transformations.internalValue = value;
  }
  public resetTransformations() {
    this._transformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }

  // waf - computed: false, optional: true, required: false
  private _waf = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWafOutputReference(this, "waf");
  public get waf() {
    return this._waf;
  }
  public putWaf(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsWaf) {
    this._waf.internalValue = value;
  }
  public resetWaf() {
    this._waf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#group DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#kind DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#name DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#namespace DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#section_name DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#section_name}
  */
  readonly sectionName?: string;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefsToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefsToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._sectionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._sectionName = value.sectionName;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefsOutputReference {
    return new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#namespaced_statuses DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#namespaced_statuses}
  */
  readonly namespacedStatuses?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecNamespacedStatuses;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#options DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#options}
  */
  readonly options?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_solo_io_virtual_host_option_v1_manifest#target_refs DataK8SGatewaySoloIoVirtualHostOptionV1Manifest#target_refs}
  */
  readonly targetRefs?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefs[] | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecToTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaced_statuses: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecNamespacedStatusesToTerraform(struct!.namespacedStatuses),
    options: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsToTerraform(struct!.options),
    target_refs: cdktf.listMapper(dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefsToTerraform, false)(struct!.targetRefs),
  }
}


export function dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaced_statuses: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecNamespacedStatusesToHclTerraform(struct!.namespacedStatuses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecNamespacedStatuses",
    },
    options: {
      value: dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptions",
    },
    target_refs: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefsToHclTerraform, false)(struct!.targetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespacedStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedStatuses = this._namespacedStatuses?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._targetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefs = this._targetRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespacedStatuses.internalValue = undefined;
      this._options.internalValue = undefined;
      this._targetRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespacedStatuses.internalValue = value.namespacedStatuses;
      this._options.internalValue = value.options;
      this._targetRefs.internalValue = value.targetRefs;
    }
  }

  // namespaced_statuses - computed: false, optional: true, required: false
  private _namespacedStatuses = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecNamespacedStatusesOutputReference(this, "namespaced_statuses");
  public get namespacedStatuses() {
    return this._namespacedStatuses;
  }
  public putNamespacedStatuses(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecNamespacedStatuses) {
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
  private _options = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // target_refs - computed: false, optional: true, required: false
  private _targetRefs = new DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefsList(this, "target_refs", false);
  public get targetRefs() {
    return this._targetRefs;
  }
  public putTargetRefs(value: DataK8SGatewaySoloIoVirtualHostOptionV1ManifestSpecTargetRefs[] | cdktf.IResolvable) {
    this._targetRefs.internalValue = value;
  }
  public resetTargetRefs() {
    this._targetRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefsInput() {
    return this._targetRefs.internalValue;
  }
}
