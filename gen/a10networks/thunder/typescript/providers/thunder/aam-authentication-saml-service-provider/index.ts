// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationSamlServiceProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * After user authenticated, bypass requests with assertion-consuming-service location URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#acs_uri_bypass AamAuthenticationSamlServiceProvider#acs_uri_bypass}
  */
  readonly acsUriBypass?: number;
  /**
  * Specify URL to redirect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#bad_request_redirect_url AamAuthenticationSamlServiceProvider#bad_request_redirect_url}
  */
  readonly badRequestRedirectUrl?: string;
  /**
  * SAML service provider certificate file (PFX format is required.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#certificate AamAuthenticationSamlServiceProvider#certificate}
  */
  readonly certificate?: string;
  /**
  * SAML service provider entity ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#entity_id AamAuthenticationSamlServiceProvider#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#id AamAuthenticationSamlServiceProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify SAML authentication service provider name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#name AamAuthenticationSamlServiceProvider#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#packet_capture_template AamAuthenticationSamlServiceProvider#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * SAML service provider service URL (ex. https://www.a10networks.com/saml.sso)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#service_url AamAuthenticationSamlServiceProvider#service_url}
  */
  readonly serviceUrl?: string;
  /**
  * 'SHA1': use SHA1 as signature algorithm (default); 'SHA256': use SHA256 as signature algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#signature_algorithm AamAuthenticationSamlServiceProvider#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#user_tag AamAuthenticationSamlServiceProvider#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#uuid AamAuthenticationSamlServiceProvider#uuid}
  */
  readonly uuid?: string;
  /**
  * adfs_ws_federation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#adfs_ws_federation AamAuthenticationSamlServiceProvider#adfs_ws_federation}
  */
  readonly adfsWsFederation?: AamAuthenticationSamlServiceProviderAdfsWsFederation;
  /**
  * artifact_resolution_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#artifact_resolution_service AamAuthenticationSamlServiceProvider#artifact_resolution_service}
  */
  readonly artifactResolutionService?: AamAuthenticationSamlServiceProviderArtifactResolutionService[] | cdktf.IResolvable;
  /**
  * assertion_consuming_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#assertion_consuming_service AamAuthenticationSamlServiceProvider#assertion_consuming_service}
  */
  readonly assertionConsumingService?: AamAuthenticationSamlServiceProviderAssertionConsumingService[] | cdktf.IResolvable;
  /**
  * metadata_export_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#metadata_export_service AamAuthenticationSamlServiceProvider#metadata_export_service}
  */
  readonly metadataExportService?: AamAuthenticationSamlServiceProviderMetadataExportService;
  /**
  * require_assertion_signed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#require_assertion_signed AamAuthenticationSamlServiceProvider#require_assertion_signed}
  */
  readonly requireAssertionSigned?: AamAuthenticationSamlServiceProviderRequireAssertionSigned;
  /**
  * saml_request_signed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#saml_request_signed AamAuthenticationSamlServiceProvider#saml_request_signed}
  */
  readonly samlRequestSigned?: AamAuthenticationSamlServiceProviderSamlRequestSigned;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#sampling_enable AamAuthenticationSamlServiceProvider#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationSamlServiceProviderSamplingEnable[] | cdktf.IResolvable;
  /**
  * single_logout_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#single_logout_service AamAuthenticationSamlServiceProvider#single_logout_service}
  */
  readonly singleLogoutService?: AamAuthenticationSamlServiceProviderSingleLogoutService[] | cdktf.IResolvable;
  /**
  * soap_tls_certificate_validate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#soap_tls_certificate_validate AamAuthenticationSamlServiceProvider#soap_tls_certificate_validate}
  */
  readonly soapTlsCertificateValidate?: AamAuthenticationSamlServiceProviderSoapTlsCertificateValidate;
  /**
  * sp_initiated_single_logout_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#sp_initiated_single_logout_service AamAuthenticationSamlServiceProvider#sp_initiated_single_logout_service}
  */
  readonly spInitiatedSingleLogoutService?: AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutService[] | cdktf.IResolvable;
}
export interface AamAuthenticationSamlServiceProviderAdfsWsFederation {
  /**
  * Enable ADFS WS-Federation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#ws_federation_enable AamAuthenticationSamlServiceProvider#ws_federation_enable}
  */
  readonly wsFederationEnable?: number;
}

export function aamAuthenticationSamlServiceProviderAdfsWsFederationToTerraform(struct?: AamAuthenticationSamlServiceProviderAdfsWsFederationOutputReference | AamAuthenticationSamlServiceProviderAdfsWsFederation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ws_federation_enable: cdktf.numberToTerraform(struct!.wsFederationEnable),
  }
}


export function aamAuthenticationSamlServiceProviderAdfsWsFederationToHclTerraform(struct?: AamAuthenticationSamlServiceProviderAdfsWsFederationOutputReference | AamAuthenticationSamlServiceProviderAdfsWsFederation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ws_federation_enable: {
      value: cdktf.numberToHclTerraform(struct!.wsFederationEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationSamlServiceProviderAdfsWsFederationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationSamlServiceProviderAdfsWsFederation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wsFederationEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsFederationEnable = this._wsFederationEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationSamlServiceProviderAdfsWsFederation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wsFederationEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wsFederationEnable = value.wsFederationEnable;
    }
  }

  // ws_federation_enable - computed: false, optional: true, required: false
  private _wsFederationEnable?: number; 
  public get wsFederationEnable() {
    return this.getNumberAttribute('ws_federation_enable');
  }
  public set wsFederationEnable(value: number) {
    this._wsFederationEnable = value;
  }
  public resetWsFederationEnable() {
    this._wsFederationEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsFederationEnableInput() {
    return this._wsFederationEnable;
  }
}
export interface AamAuthenticationSamlServiceProviderArtifactResolutionService {
  /**
  * 'soap': SOAP binding of artifact resolution service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#artifact_binding AamAuthenticationSamlServiceProvider#artifact_binding}
  */
  readonly artifactBinding?: string;
  /**
  * The index of artifact resolution service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#artifact_index AamAuthenticationSamlServiceProvider#artifact_index}
  */
  readonly artifactIndex?: number;
  /**
  * The location of artifact resolution service. (ex. /SAML/POST)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#artifact_location AamAuthenticationSamlServiceProvider#artifact_location}
  */
  readonly artifactLocation?: string;
}

export function aamAuthenticationSamlServiceProviderArtifactResolutionServiceToTerraform(struct?: AamAuthenticationSamlServiceProviderArtifactResolutionService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_binding: cdktf.stringToTerraform(struct!.artifactBinding),
    artifact_index: cdktf.numberToTerraform(struct!.artifactIndex),
    artifact_location: cdktf.stringToTerraform(struct!.artifactLocation),
  }
}


export function aamAuthenticationSamlServiceProviderArtifactResolutionServiceToHclTerraform(struct?: AamAuthenticationSamlServiceProviderArtifactResolutionService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_binding: {
      value: cdktf.stringToHclTerraform(struct!.artifactBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifact_index: {
      value: cdktf.numberToHclTerraform(struct!.artifactIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    artifact_location: {
      value: cdktf.stringToHclTerraform(struct!.artifactLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationSamlServiceProviderArtifactResolutionServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationSamlServiceProviderArtifactResolutionService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactBinding = this._artifactBinding;
    }
    if (this._artifactIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactIndex = this._artifactIndex;
    }
    if (this._artifactLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactLocation = this._artifactLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationSamlServiceProviderArtifactResolutionService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactBinding = undefined;
      this._artifactIndex = undefined;
      this._artifactLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactBinding = value.artifactBinding;
      this._artifactIndex = value.artifactIndex;
      this._artifactLocation = value.artifactLocation;
    }
  }

  // artifact_binding - computed: false, optional: true, required: false
  private _artifactBinding?: string; 
  public get artifactBinding() {
    return this.getStringAttribute('artifact_binding');
  }
  public set artifactBinding(value: string) {
    this._artifactBinding = value;
  }
  public resetArtifactBinding() {
    this._artifactBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactBindingInput() {
    return this._artifactBinding;
  }

  // artifact_index - computed: false, optional: true, required: false
  private _artifactIndex?: number; 
  public get artifactIndex() {
    return this.getNumberAttribute('artifact_index');
  }
  public set artifactIndex(value: number) {
    this._artifactIndex = value;
  }
  public resetArtifactIndex() {
    this._artifactIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIndexInput() {
    return this._artifactIndex;
  }

  // artifact_location - computed: false, optional: true, required: false
  private _artifactLocation?: string; 
  public get artifactLocation() {
    return this.getStringAttribute('artifact_location');
  }
  public set artifactLocation(value: string) {
    this._artifactLocation = value;
  }
  public resetArtifactLocation() {
    this._artifactLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactLocationInput() {
    return this._artifactLocation;
  }
}

export class AamAuthenticationSamlServiceProviderArtifactResolutionServiceList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationSamlServiceProviderArtifactResolutionService[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationSamlServiceProviderArtifactResolutionServiceOutputReference {
    return new AamAuthenticationSamlServiceProviderArtifactResolutionServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationSamlServiceProviderAssertionConsumingService {
  /**
  * 'artifact': Artifact binding of assertion consuming service; 'paos': PAOS binding of assertion consuming service; 'post': POST binding of assertion consuming service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#assertion_binding AamAuthenticationSamlServiceProvider#assertion_binding}
  */
  readonly assertionBinding?: string;
  /**
  * The index of assertion consuming service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#assertion_index AamAuthenticationSamlServiceProvider#assertion_index}
  */
  readonly assertionIndex?: number;
  /**
  * The location of assertion consuming service endpoint. (ex. /SAML/POST)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#assertion_location AamAuthenticationSamlServiceProvider#assertion_location}
  */
  readonly assertionLocation?: string;
}

export function aamAuthenticationSamlServiceProviderAssertionConsumingServiceToTerraform(struct?: AamAuthenticationSamlServiceProviderAssertionConsumingService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assertion_binding: cdktf.stringToTerraform(struct!.assertionBinding),
    assertion_index: cdktf.numberToTerraform(struct!.assertionIndex),
    assertion_location: cdktf.stringToTerraform(struct!.assertionLocation),
  }
}


export function aamAuthenticationSamlServiceProviderAssertionConsumingServiceToHclTerraform(struct?: AamAuthenticationSamlServiceProviderAssertionConsumingService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assertion_binding: {
      value: cdktf.stringToHclTerraform(struct!.assertionBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_index: {
      value: cdktf.numberToHclTerraform(struct!.assertionIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assertion_location: {
      value: cdktf.stringToHclTerraform(struct!.assertionLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationSamlServiceProviderAssertionConsumingServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationSamlServiceProviderAssertionConsumingService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assertionBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionBinding = this._assertionBinding;
    }
    if (this._assertionIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionIndex = this._assertionIndex;
    }
    if (this._assertionLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionLocation = this._assertionLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationSamlServiceProviderAssertionConsumingService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assertionBinding = undefined;
      this._assertionIndex = undefined;
      this._assertionLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assertionBinding = value.assertionBinding;
      this._assertionIndex = value.assertionIndex;
      this._assertionLocation = value.assertionLocation;
    }
  }

  // assertion_binding - computed: false, optional: true, required: false
  private _assertionBinding?: string; 
  public get assertionBinding() {
    return this.getStringAttribute('assertion_binding');
  }
  public set assertionBinding(value: string) {
    this._assertionBinding = value;
  }
  public resetAssertionBinding() {
    this._assertionBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionBindingInput() {
    return this._assertionBinding;
  }

  // assertion_index - computed: false, optional: true, required: false
  private _assertionIndex?: number; 
  public get assertionIndex() {
    return this.getNumberAttribute('assertion_index');
  }
  public set assertionIndex(value: number) {
    this._assertionIndex = value;
  }
  public resetAssertionIndex() {
    this._assertionIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionIndexInput() {
    return this._assertionIndex;
  }

  // assertion_location - computed: false, optional: true, required: false
  private _assertionLocation?: string; 
  public get assertionLocation() {
    return this.getStringAttribute('assertion_location');
  }
  public set assertionLocation(value: string) {
    this._assertionLocation = value;
  }
  public resetAssertionLocation() {
    this._assertionLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionLocationInput() {
    return this._assertionLocation;
  }
}

export class AamAuthenticationSamlServiceProviderAssertionConsumingServiceList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationSamlServiceProviderAssertionConsumingService[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationSamlServiceProviderAssertionConsumingServiceOutputReference {
    return new AamAuthenticationSamlServiceProviderAssertionConsumingServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationSamlServiceProviderMetadataExportService {
  /**
  * Specify the URI to export SP metadata (Export URI. Default is /A10SP_Metadata)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#md_export_location AamAuthenticationSamlServiceProvider#md_export_location}
  */
  readonly mdExportLocation?: string;
  /**
  * Sign exported SP metadata XML with SP's certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#sign_xml AamAuthenticationSamlServiceProvider#sign_xml}
  */
  readonly signXml?: number;
}

export function aamAuthenticationSamlServiceProviderMetadataExportServiceToTerraform(struct?: AamAuthenticationSamlServiceProviderMetadataExportServiceOutputReference | AamAuthenticationSamlServiceProviderMetadataExportService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md_export_location: cdktf.stringToTerraform(struct!.mdExportLocation),
    sign_xml: cdktf.numberToTerraform(struct!.signXml),
  }
}


export function aamAuthenticationSamlServiceProviderMetadataExportServiceToHclTerraform(struct?: AamAuthenticationSamlServiceProviderMetadataExportServiceOutputReference | AamAuthenticationSamlServiceProviderMetadataExportService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md_export_location: {
      value: cdktf.stringToHclTerraform(struct!.mdExportLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_xml: {
      value: cdktf.numberToHclTerraform(struct!.signXml),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationSamlServiceProviderMetadataExportServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationSamlServiceProviderMetadataExportService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdExportLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdExportLocation = this._mdExportLocation;
    }
    if (this._signXml !== undefined) {
      hasAnyValues = true;
      internalValueResult.signXml = this._signXml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationSamlServiceProviderMetadataExportService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mdExportLocation = undefined;
      this._signXml = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mdExportLocation = value.mdExportLocation;
      this._signXml = value.signXml;
    }
  }

  // md_export_location - computed: false, optional: true, required: false
  private _mdExportLocation?: string; 
  public get mdExportLocation() {
    return this.getStringAttribute('md_export_location');
  }
  public set mdExportLocation(value: string) {
    this._mdExportLocation = value;
  }
  public resetMdExportLocation() {
    this._mdExportLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdExportLocationInput() {
    return this._mdExportLocation;
  }

  // sign_xml - computed: false, optional: true, required: false
  private _signXml?: number; 
  public get signXml() {
    return this.getNumberAttribute('sign_xml');
  }
  public set signXml(value: number) {
    this._signXml = value;
  }
  public resetSignXml() {
    this._signXml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signXmlInput() {
    return this._signXml;
  }
}
export interface AamAuthenticationSamlServiceProviderRequireAssertionSigned {
  /**
  * Enable required signing of SAML assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#require_assertion_signed_enable AamAuthenticationSamlServiceProvider#require_assertion_signed_enable}
  */
  readonly requireAssertionSignedEnable?: number;
}

export function aamAuthenticationSamlServiceProviderRequireAssertionSignedToTerraform(struct?: AamAuthenticationSamlServiceProviderRequireAssertionSignedOutputReference | AamAuthenticationSamlServiceProviderRequireAssertionSigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_assertion_signed_enable: cdktf.numberToTerraform(struct!.requireAssertionSignedEnable),
  }
}


export function aamAuthenticationSamlServiceProviderRequireAssertionSignedToHclTerraform(struct?: AamAuthenticationSamlServiceProviderRequireAssertionSignedOutputReference | AamAuthenticationSamlServiceProviderRequireAssertionSigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_assertion_signed_enable: {
      value: cdktf.numberToHclTerraform(struct!.requireAssertionSignedEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationSamlServiceProviderRequireAssertionSignedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationSamlServiceProviderRequireAssertionSigned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireAssertionSignedEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAssertionSignedEnable = this._requireAssertionSignedEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationSamlServiceProviderRequireAssertionSigned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requireAssertionSignedEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requireAssertionSignedEnable = value.requireAssertionSignedEnable;
    }
  }

  // require_assertion_signed_enable - computed: false, optional: true, required: false
  private _requireAssertionSignedEnable?: number; 
  public get requireAssertionSignedEnable() {
    return this.getNumberAttribute('require_assertion_signed_enable');
  }
  public set requireAssertionSignedEnable(value: number) {
    this._requireAssertionSignedEnable = value;
  }
  public resetRequireAssertionSignedEnable() {
    this._requireAssertionSignedEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAssertionSignedEnableInput() {
    return this._requireAssertionSignedEnable;
  }
}
export interface AamAuthenticationSamlServiceProviderSamlRequestSigned {
  /**
  * Disable signing signature for SAML (Authn/Artifact Resolve) requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#saml_request_signed_disable AamAuthenticationSamlServiceProvider#saml_request_signed_disable}
  */
  readonly samlRequestSignedDisable?: number;
}

export function aamAuthenticationSamlServiceProviderSamlRequestSignedToTerraform(struct?: AamAuthenticationSamlServiceProviderSamlRequestSignedOutputReference | AamAuthenticationSamlServiceProviderSamlRequestSigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saml_request_signed_disable: cdktf.numberToTerraform(struct!.samlRequestSignedDisable),
  }
}


export function aamAuthenticationSamlServiceProviderSamlRequestSignedToHclTerraform(struct?: AamAuthenticationSamlServiceProviderSamlRequestSignedOutputReference | AamAuthenticationSamlServiceProviderSamlRequestSigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saml_request_signed_disable: {
      value: cdktf.numberToHclTerraform(struct!.samlRequestSignedDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationSamlServiceProviderSamlRequestSignedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationSamlServiceProviderSamlRequestSigned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samlRequestSignedDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlRequestSignedDisable = this._samlRequestSignedDisable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationSamlServiceProviderSamlRequestSigned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._samlRequestSignedDisable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._samlRequestSignedDisable = value.samlRequestSignedDisable;
    }
  }

  // saml_request_signed_disable - computed: false, optional: true, required: false
  private _samlRequestSignedDisable?: number; 
  public get samlRequestSignedDisable() {
    return this.getNumberAttribute('saml_request_signed_disable');
  }
  public set samlRequestSignedDisable(value: number) {
    this._samlRequestSignedDisable = value;
  }
  public resetSamlRequestSignedDisable() {
    this._samlRequestSignedDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlRequestSignedDisableInput() {
    return this._samlRequestSignedDisable;
  }
}
export interface AamAuthenticationSamlServiceProviderSamplingEnable {
  /**
  * 'all': all; 'sp-metadata-export-req': Metadata Export Request; 'sp-metadata-export-success': Metadata Export Success; 'login-auth-req': Login Authentication Request; 'login-auth-resp': Login Authentication Response; 'acs-req': SAML Single-Sign-On Request; 'acs-success': SAML Single-Sign-On Success; 'acs-authz-fail': SAML Single-Sign-On Authorization Fail; 'acs-error': SAML Single-Sign-On Error; 'slo-req': Single Logout Request; 'slo-success': Single Logout Success; 'slo-error': Single Logout Error; 'sp-slo-req': SP-initiated Single Logout Request; 'glo-slo-success': Total Global Logout Success; 'loc-slo-success': Total Local Logout Success; 'par-slo-success': Total Partial Logout Success; 'other-error': Other Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#counters1 AamAuthenticationSamlServiceProvider#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationSamlServiceProviderSamplingEnableToTerraform(struct?: AamAuthenticationSamlServiceProviderSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationSamlServiceProviderSamplingEnableToHclTerraform(struct?: AamAuthenticationSamlServiceProviderSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationSamlServiceProviderSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationSamlServiceProviderSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationSamlServiceProviderSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationSamlServiceProviderSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationSamlServiceProviderSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationSamlServiceProviderSamplingEnableOutputReference {
    return new AamAuthenticationSamlServiceProviderSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationSamlServiceProviderSingleLogoutService {
  /**
  * 'post': POST binding of single logout service; 'redirect': Redirect binding of single logout service; 'soap': SOAP binding of single logout service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#slo_binding AamAuthenticationSamlServiceProvider#slo_binding}
  */
  readonly sloBinding?: string;
  /**
  * The location of name-id management service. (ex. /SAML/POST)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#slo_location AamAuthenticationSamlServiceProvider#slo_location}
  */
  readonly sloLocation?: string;
}

export function aamAuthenticationSamlServiceProviderSingleLogoutServiceToTerraform(struct?: AamAuthenticationSamlServiceProviderSingleLogoutService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slo_binding: cdktf.stringToTerraform(struct!.sloBinding),
    slo_location: cdktf.stringToTerraform(struct!.sloLocation),
  }
}


export function aamAuthenticationSamlServiceProviderSingleLogoutServiceToHclTerraform(struct?: AamAuthenticationSamlServiceProviderSingleLogoutService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slo_binding: {
      value: cdktf.stringToHclTerraform(struct!.sloBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_location: {
      value: cdktf.stringToHclTerraform(struct!.sloLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationSamlServiceProviderSingleLogoutServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationSamlServiceProviderSingleLogoutService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sloBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloBinding = this._sloBinding;
    }
    if (this._sloLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloLocation = this._sloLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationSamlServiceProviderSingleLogoutService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sloBinding = undefined;
      this._sloLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sloBinding = value.sloBinding;
      this._sloLocation = value.sloLocation;
    }
  }

  // slo_binding - computed: false, optional: true, required: false
  private _sloBinding?: string; 
  public get sloBinding() {
    return this.getStringAttribute('slo_binding');
  }
  public set sloBinding(value: string) {
    this._sloBinding = value;
  }
  public resetSloBinding() {
    this._sloBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloBindingInput() {
    return this._sloBinding;
  }

  // slo_location - computed: false, optional: true, required: false
  private _sloLocation?: string; 
  public get sloLocation() {
    return this.getStringAttribute('slo_location');
  }
  public set sloLocation(value: string) {
    this._sloLocation = value;
  }
  public resetSloLocation() {
    this._sloLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloLocationInput() {
    return this._sloLocation;
  }
}

export class AamAuthenticationSamlServiceProviderSingleLogoutServiceList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationSamlServiceProviderSingleLogoutService[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationSamlServiceProviderSingleLogoutServiceOutputReference {
    return new AamAuthenticationSamlServiceProviderSingleLogoutServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationSamlServiceProviderSoapTlsCertificateValidate {
  /**
  * Disable verification for server certificate in TLS session when resolving artificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#soap_tls_certificate_validate_disable AamAuthenticationSamlServiceProvider#soap_tls_certificate_validate_disable}
  */
  readonly soapTlsCertificateValidateDisable?: number;
}

export function aamAuthenticationSamlServiceProviderSoapTlsCertificateValidateToTerraform(struct?: AamAuthenticationSamlServiceProviderSoapTlsCertificateValidateOutputReference | AamAuthenticationSamlServiceProviderSoapTlsCertificateValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    soap_tls_certificate_validate_disable: cdktf.numberToTerraform(struct!.soapTlsCertificateValidateDisable),
  }
}


export function aamAuthenticationSamlServiceProviderSoapTlsCertificateValidateToHclTerraform(struct?: AamAuthenticationSamlServiceProviderSoapTlsCertificateValidateOutputReference | AamAuthenticationSamlServiceProviderSoapTlsCertificateValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    soap_tls_certificate_validate_disable: {
      value: cdktf.numberToHclTerraform(struct!.soapTlsCertificateValidateDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationSamlServiceProviderSoapTlsCertificateValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationSamlServiceProviderSoapTlsCertificateValidate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._soapTlsCertificateValidateDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.soapTlsCertificateValidateDisable = this._soapTlsCertificateValidateDisable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationSamlServiceProviderSoapTlsCertificateValidate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._soapTlsCertificateValidateDisable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._soapTlsCertificateValidateDisable = value.soapTlsCertificateValidateDisable;
    }
  }

  // soap_tls_certificate_validate_disable - computed: false, optional: true, required: false
  private _soapTlsCertificateValidateDisable?: number; 
  public get soapTlsCertificateValidateDisable() {
    return this.getNumberAttribute('soap_tls_certificate_validate_disable');
  }
  public set soapTlsCertificateValidateDisable(value: number) {
    this._soapTlsCertificateValidateDisable = value;
  }
  public resetSoapTlsCertificateValidateDisable() {
    this._soapTlsCertificateValidateDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapTlsCertificateValidateDisableInput() {
    return this._soapTlsCertificateValidateDisable;
  }
}
export interface AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutService {
  /**
  * the IDP will not send a logout response to AX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#asynchronous AamAuthenticationSamlServiceProvider#asynchronous}
  */
  readonly asynchronous?: number;
  /**
  * The location of SP-initiated single logout service endpoint. (ex. /Logout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#sp_slo_location AamAuthenticationSamlServiceProvider#sp_slo_location}
  */
  readonly spSloLocation?: string;
}

export function aamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutServiceToTerraform(struct?: AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asynchronous: cdktf.numberToTerraform(struct!.asynchronous),
    sp_slo_location: cdktf.stringToTerraform(struct!.spSloLocation),
  }
}


export function aamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutServiceToHclTerraform(struct?: AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asynchronous: {
      value: cdktf.numberToHclTerraform(struct!.asynchronous),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp_slo_location: {
      value: cdktf.stringToHclTerraform(struct!.spSloLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asynchronous !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronous = this._asynchronous;
    }
    if (this._spSloLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.spSloLocation = this._spSloLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asynchronous = undefined;
      this._spSloLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asynchronous = value.asynchronous;
      this._spSloLocation = value.spSloLocation;
    }
  }

  // asynchronous - computed: false, optional: true, required: false
  private _asynchronous?: number; 
  public get asynchronous() {
    return this.getNumberAttribute('asynchronous');
  }
  public set asynchronous(value: number) {
    this._asynchronous = value;
  }
  public resetAsynchronous() {
    this._asynchronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInput() {
    return this._asynchronous;
  }

  // sp_slo_location - computed: false, optional: true, required: false
  private _spSloLocation?: string; 
  public get spSloLocation() {
    return this.getStringAttribute('sp_slo_location');
  }
  public set spSloLocation(value: string) {
    this._spSloLocation = value;
  }
  public resetSpSloLocation() {
    this._spSloLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSloLocationInput() {
    return this._spSloLocation;
  }
}

export class AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutServiceList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutService[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutServiceOutputReference {
    return new AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider thunder_aam_authentication_saml_service_provider}
*/
export class AamAuthenticationSamlServiceProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_saml_service_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationSamlServiceProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationSamlServiceProvider to import
  * @param importFromId The id of the existing AamAuthenticationSamlServiceProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationSamlServiceProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_saml_service_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_saml_service_provider thunder_aam_authentication_saml_service_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationSamlServiceProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationSamlServiceProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_saml_service_provider',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acsUriBypass = config.acsUriBypass;
    this._badRequestRedirectUrl = config.badRequestRedirectUrl;
    this._certificate = config.certificate;
    this._entityId = config.entityId;
    this._id = config.id;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._serviceUrl = config.serviceUrl;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._adfsWsFederation.internalValue = config.adfsWsFederation;
    this._artifactResolutionService.internalValue = config.artifactResolutionService;
    this._assertionConsumingService.internalValue = config.assertionConsumingService;
    this._metadataExportService.internalValue = config.metadataExportService;
    this._requireAssertionSigned.internalValue = config.requireAssertionSigned;
    this._samlRequestSigned.internalValue = config.samlRequestSigned;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._singleLogoutService.internalValue = config.singleLogoutService;
    this._soapTlsCertificateValidate.internalValue = config.soapTlsCertificateValidate;
    this._spInitiatedSingleLogoutService.internalValue = config.spInitiatedSingleLogoutService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_uri_bypass - computed: false, optional: true, required: false
  private _acsUriBypass?: number; 
  public get acsUriBypass() {
    return this.getNumberAttribute('acs_uri_bypass');
  }
  public set acsUriBypass(value: number) {
    this._acsUriBypass = value;
  }
  public resetAcsUriBypass() {
    this._acsUriBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsUriBypassInput() {
    return this._acsUriBypass;
  }

  // bad_request_redirect_url - computed: false, optional: true, required: false
  private _badRequestRedirectUrl?: string; 
  public get badRequestRedirectUrl() {
    return this.getStringAttribute('bad_request_redirect_url');
  }
  public set badRequestRedirectUrl(value: string) {
    this._badRequestRedirectUrl = value;
  }
  public resetBadRequestRedirectUrl() {
    this._badRequestRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRequestRedirectUrlInput() {
    return this._badRequestRedirectUrl;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // service_url - computed: false, optional: true, required: false
  private _serviceUrl?: string; 
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }
  public set serviceUrl(value: string) {
    this._serviceUrl = value;
  }
  public resetServiceUrl() {
    this._serviceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUrlInput() {
    return this._serviceUrl;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // adfs_ws_federation - computed: false, optional: true, required: false
  private _adfsWsFederation = new AamAuthenticationSamlServiceProviderAdfsWsFederationOutputReference(this, "adfs_ws_federation");
  public get adfsWsFederation() {
    return this._adfsWsFederation;
  }
  public putAdfsWsFederation(value: AamAuthenticationSamlServiceProviderAdfsWsFederation) {
    this._adfsWsFederation.internalValue = value;
  }
  public resetAdfsWsFederation() {
    this._adfsWsFederation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsWsFederationInput() {
    return this._adfsWsFederation.internalValue;
  }

  // artifact_resolution_service - computed: false, optional: true, required: false
  private _artifactResolutionService = new AamAuthenticationSamlServiceProviderArtifactResolutionServiceList(this, "artifact_resolution_service", false);
  public get artifactResolutionService() {
    return this._artifactResolutionService;
  }
  public putArtifactResolutionService(value: AamAuthenticationSamlServiceProviderArtifactResolutionService[] | cdktf.IResolvable) {
    this._artifactResolutionService.internalValue = value;
  }
  public resetArtifactResolutionService() {
    this._artifactResolutionService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactResolutionServiceInput() {
    return this._artifactResolutionService.internalValue;
  }

  // assertion_consuming_service - computed: false, optional: true, required: false
  private _assertionConsumingService = new AamAuthenticationSamlServiceProviderAssertionConsumingServiceList(this, "assertion_consuming_service", false);
  public get assertionConsumingService() {
    return this._assertionConsumingService;
  }
  public putAssertionConsumingService(value: AamAuthenticationSamlServiceProviderAssertionConsumingService[] | cdktf.IResolvable) {
    this._assertionConsumingService.internalValue = value;
  }
  public resetAssertionConsumingService() {
    this._assertionConsumingService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionConsumingServiceInput() {
    return this._assertionConsumingService.internalValue;
  }

  // metadata_export_service - computed: false, optional: true, required: false
  private _metadataExportService = new AamAuthenticationSamlServiceProviderMetadataExportServiceOutputReference(this, "metadata_export_service");
  public get metadataExportService() {
    return this._metadataExportService;
  }
  public putMetadataExportService(value: AamAuthenticationSamlServiceProviderMetadataExportService) {
    this._metadataExportService.internalValue = value;
  }
  public resetMetadataExportService() {
    this._metadataExportService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataExportServiceInput() {
    return this._metadataExportService.internalValue;
  }

  // require_assertion_signed - computed: false, optional: true, required: false
  private _requireAssertionSigned = new AamAuthenticationSamlServiceProviderRequireAssertionSignedOutputReference(this, "require_assertion_signed");
  public get requireAssertionSigned() {
    return this._requireAssertionSigned;
  }
  public putRequireAssertionSigned(value: AamAuthenticationSamlServiceProviderRequireAssertionSigned) {
    this._requireAssertionSigned.internalValue = value;
  }
  public resetRequireAssertionSigned() {
    this._requireAssertionSigned.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAssertionSignedInput() {
    return this._requireAssertionSigned.internalValue;
  }

  // saml_request_signed - computed: false, optional: true, required: false
  private _samlRequestSigned = new AamAuthenticationSamlServiceProviderSamlRequestSignedOutputReference(this, "saml_request_signed");
  public get samlRequestSigned() {
    return this._samlRequestSigned;
  }
  public putSamlRequestSigned(value: AamAuthenticationSamlServiceProviderSamlRequestSigned) {
    this._samlRequestSigned.internalValue = value;
  }
  public resetSamlRequestSigned() {
    this._samlRequestSigned.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlRequestSignedInput() {
    return this._samlRequestSigned.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationSamlServiceProviderSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationSamlServiceProviderSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // single_logout_service - computed: false, optional: true, required: false
  private _singleLogoutService = new AamAuthenticationSamlServiceProviderSingleLogoutServiceList(this, "single_logout_service", false);
  public get singleLogoutService() {
    return this._singleLogoutService;
  }
  public putSingleLogoutService(value: AamAuthenticationSamlServiceProviderSingleLogoutService[] | cdktf.IResolvable) {
    this._singleLogoutService.internalValue = value;
  }
  public resetSingleLogoutService() {
    this._singleLogoutService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutServiceInput() {
    return this._singleLogoutService.internalValue;
  }

  // soap_tls_certificate_validate - computed: false, optional: true, required: false
  private _soapTlsCertificateValidate = new AamAuthenticationSamlServiceProviderSoapTlsCertificateValidateOutputReference(this, "soap_tls_certificate_validate");
  public get soapTlsCertificateValidate() {
    return this._soapTlsCertificateValidate;
  }
  public putSoapTlsCertificateValidate(value: AamAuthenticationSamlServiceProviderSoapTlsCertificateValidate) {
    this._soapTlsCertificateValidate.internalValue = value;
  }
  public resetSoapTlsCertificateValidate() {
    this._soapTlsCertificateValidate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapTlsCertificateValidateInput() {
    return this._soapTlsCertificateValidate.internalValue;
  }

  // sp_initiated_single_logout_service - computed: false, optional: true, required: false
  private _spInitiatedSingleLogoutService = new AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutServiceList(this, "sp_initiated_single_logout_service", false);
  public get spInitiatedSingleLogoutService() {
    return this._spInitiatedSingleLogoutService;
  }
  public putSpInitiatedSingleLogoutService(value: AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutService[] | cdktf.IResolvable) {
    this._spInitiatedSingleLogoutService.internalValue = value;
  }
  public resetSpInitiatedSingleLogoutService() {
    this._spInitiatedSingleLogoutService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInitiatedSingleLogoutServiceInput() {
    return this._spInitiatedSingleLogoutService.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acs_uri_bypass: cdktf.numberToTerraform(this._acsUriBypass),
      bad_request_redirect_url: cdktf.stringToTerraform(this._badRequestRedirectUrl),
      certificate: cdktf.stringToTerraform(this._certificate),
      entity_id: cdktf.stringToTerraform(this._entityId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      service_url: cdktf.stringToTerraform(this._serviceUrl),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      adfs_ws_federation: aamAuthenticationSamlServiceProviderAdfsWsFederationToTerraform(this._adfsWsFederation.internalValue),
      artifact_resolution_service: cdktf.listMapper(aamAuthenticationSamlServiceProviderArtifactResolutionServiceToTerraform, true)(this._artifactResolutionService.internalValue),
      assertion_consuming_service: cdktf.listMapper(aamAuthenticationSamlServiceProviderAssertionConsumingServiceToTerraform, true)(this._assertionConsumingService.internalValue),
      metadata_export_service: aamAuthenticationSamlServiceProviderMetadataExportServiceToTerraform(this._metadataExportService.internalValue),
      require_assertion_signed: aamAuthenticationSamlServiceProviderRequireAssertionSignedToTerraform(this._requireAssertionSigned.internalValue),
      saml_request_signed: aamAuthenticationSamlServiceProviderSamlRequestSignedToTerraform(this._samlRequestSigned.internalValue),
      sampling_enable: cdktf.listMapper(aamAuthenticationSamlServiceProviderSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      single_logout_service: cdktf.listMapper(aamAuthenticationSamlServiceProviderSingleLogoutServiceToTerraform, true)(this._singleLogoutService.internalValue),
      soap_tls_certificate_validate: aamAuthenticationSamlServiceProviderSoapTlsCertificateValidateToTerraform(this._soapTlsCertificateValidate.internalValue),
      sp_initiated_single_logout_service: cdktf.listMapper(aamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutServiceToTerraform, true)(this._spInitiatedSingleLogoutService.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acs_uri_bypass: {
        value: cdktf.numberToHclTerraform(this._acsUriBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_request_redirect_url: {
        value: cdktf.stringToHclTerraform(this._badRequestRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_url: {
        value: cdktf.stringToHclTerraform(this._serviceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adfs_ws_federation: {
        value: aamAuthenticationSamlServiceProviderAdfsWsFederationToHclTerraform(this._adfsWsFederation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationSamlServiceProviderAdfsWsFederationList",
      },
      artifact_resolution_service: {
        value: cdktf.listMapperHcl(aamAuthenticationSamlServiceProviderArtifactResolutionServiceToHclTerraform, true)(this._artifactResolutionService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationSamlServiceProviderArtifactResolutionServiceList",
      },
      assertion_consuming_service: {
        value: cdktf.listMapperHcl(aamAuthenticationSamlServiceProviderAssertionConsumingServiceToHclTerraform, true)(this._assertionConsumingService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationSamlServiceProviderAssertionConsumingServiceList",
      },
      metadata_export_service: {
        value: aamAuthenticationSamlServiceProviderMetadataExportServiceToHclTerraform(this._metadataExportService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationSamlServiceProviderMetadataExportServiceList",
      },
      require_assertion_signed: {
        value: aamAuthenticationSamlServiceProviderRequireAssertionSignedToHclTerraform(this._requireAssertionSigned.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationSamlServiceProviderRequireAssertionSignedList",
      },
      saml_request_signed: {
        value: aamAuthenticationSamlServiceProviderSamlRequestSignedToHclTerraform(this._samlRequestSigned.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationSamlServiceProviderSamlRequestSignedList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationSamlServiceProviderSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationSamlServiceProviderSamplingEnableList",
      },
      single_logout_service: {
        value: cdktf.listMapperHcl(aamAuthenticationSamlServiceProviderSingleLogoutServiceToHclTerraform, true)(this._singleLogoutService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationSamlServiceProviderSingleLogoutServiceList",
      },
      soap_tls_certificate_validate: {
        value: aamAuthenticationSamlServiceProviderSoapTlsCertificateValidateToHclTerraform(this._soapTlsCertificateValidate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationSamlServiceProviderSoapTlsCertificateValidateList",
      },
      sp_initiated_single_logout_service: {
        value: cdktf.listMapperHcl(aamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutServiceToHclTerraform, true)(this._spInitiatedSingleLogoutService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationSamlServiceProviderSpInitiatedSingleLogoutServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
