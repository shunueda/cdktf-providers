// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosCertificateProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to block a session if certificate status is expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#block_expired_certificate DataPanosCertificateProfile#block_expired_certificate}
  */
  readonly blockExpiredCertificate?: boolean | cdktf.IResolvable;
  /**
  * Whether to block a session if cert. status can't be retrieved within timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#block_timeout_certificate DataPanosCertificateProfile#block_timeout_certificate}
  */
  readonly blockTimeoutCertificate?: boolean | cdktf.IResolvable;
  /**
  * Whether to block session if the certificate was not issued to the authenticating device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#block_unauthenticated_certificate DataPanosCertificateProfile#block_unauthenticated_certificate}
  */
  readonly blockUnauthenticatedCertificate?: boolean | cdktf.IResolvable;
  /**
  * Whether to block a session if cert. status is unknown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#block_unknown_certificate DataPanosCertificateProfile#block_unknown_certificate}
  */
  readonly blockUnknownCertificate?: boolean | cdktf.IResolvable;
  /**
  * CA Certificate to assign to the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#certificate DataPanosCertificateProfile#certificate}
  */
  readonly certificate?: DataPanosCertificateProfileCertificate[] | cdktf.IResolvable;
  /**
  * Certificate status query timeout value in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#certificate_status_timeout DataPanosCertificateProfile#certificate_status_timeout}
  */
  readonly certificateStatusTimeout?: number;
  /**
  * CRL receive timeout value in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#crl_receive_timeout DataPanosCertificateProfile#crl_receive_timeout}
  */
  readonly crlReceiveTimeout?: number;
  /**
  * NetBIOS domain so the PAN-OS software can map users through User-ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#domain DataPanosCertificateProfile#domain}
  */
  readonly domain?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#location DataPanosCertificateProfile#location}
  */
  readonly location: DataPanosCertificateProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#name DataPanosCertificateProfile#name}
  */
  readonly name: string;
  /**
  * Whether to exclude nonce extension for OCSP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#ocsp_exclude_nonce DataPanosCertificateProfile#ocsp_exclude_nonce}
  */
  readonly ocspExcludeNonce?: boolean | cdktf.IResolvable;
  /**
  * OCSP receive timeout value in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#ocsp_receive_timeout DataPanosCertificateProfile#ocsp_receive_timeout}
  */
  readonly ocspReceiveTimeout?: number;
  /**
  * Enable use of CRL to verify the revocation status of certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#use_crl DataPanosCertificateProfile#use_crl}
  */
  readonly useCrl?: boolean | cdktf.IResolvable;
  /**
  * Enable use of OCSP to verify the revocation status of certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#use_ocsp DataPanosCertificateProfile#use_ocsp}
  */
  readonly useOcsp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#username_field DataPanosCertificateProfile#username_field}
  */
  readonly usernameField?: DataPanosCertificateProfileUsernameField;
}
export interface DataPanosCertificateProfileCertificate {
  /**
  * Default URL for ocsp verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#default_ocsp_url DataPanosCertificateProfile#default_ocsp_url}
  */
  readonly defaultOcspUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#name DataPanosCertificateProfile#name}
  */
  readonly name: string;
  /**
  * Certificate to verify signature in OCSP response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#ocsp_verify_certificate DataPanosCertificateProfile#ocsp_verify_certificate}
  */
  readonly ocspVerifyCertificate?: string;
  /**
  * Certificate Template Name / OID for the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#template_name DataPanosCertificateProfile#template_name}
  */
  readonly templateName?: string;
}

export function dataPanosCertificateProfileCertificateToTerraform(struct?: DataPanosCertificateProfileCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ocsp_url: cdktf.stringToTerraform(struct!.defaultOcspUrl),
    name: cdktf.stringToTerraform(struct!.name),
    ocsp_verify_certificate: cdktf.stringToTerraform(struct!.ocspVerifyCertificate),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function dataPanosCertificateProfileCertificateToHclTerraform(struct?: DataPanosCertificateProfileCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ocsp_url: {
      value: cdktf.stringToHclTerraform(struct!.defaultOcspUrl),
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
    ocsp_verify_certificate: {
      value: cdktf.stringToHclTerraform(struct!.ocspVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosCertificateProfileCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosCertificateProfileCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultOcspUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOcspUrl = this._defaultOcspUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ocspVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspVerifyCertificate = this._ocspVerifyCertificate;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosCertificateProfileCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultOcspUrl = undefined;
      this._name = undefined;
      this._ocspVerifyCertificate = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultOcspUrl = value.defaultOcspUrl;
      this._name = value.name;
      this._ocspVerifyCertificate = value.ocspVerifyCertificate;
      this._templateName = value.templateName;
    }
  }

  // default_ocsp_url - computed: true, optional: true, required: false
  private _defaultOcspUrl?: string; 
  public get defaultOcspUrl() {
    return this.getStringAttribute('default_ocsp_url');
  }
  public set defaultOcspUrl(value: string) {
    this._defaultOcspUrl = value;
  }
  public resetDefaultOcspUrl() {
    this._defaultOcspUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOcspUrlInput() {
    return this._defaultOcspUrl;
  }

  // name - computed: true, optional: false, required: true
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

  // ocsp_verify_certificate - computed: true, optional: true, required: false
  private _ocspVerifyCertificate?: string; 
  public get ocspVerifyCertificate() {
    return this.getStringAttribute('ocsp_verify_certificate');
  }
  public set ocspVerifyCertificate(value: string) {
    this._ocspVerifyCertificate = value;
  }
  public resetOcspVerifyCertificate() {
    this._ocspVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspVerifyCertificateInput() {
    return this._ocspVerifyCertificate;
  }

  // template_name - computed: true, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class DataPanosCertificateProfileCertificateList extends cdktf.ComplexList {
  public internalValue? : DataPanosCertificateProfileCertificate[] | cdktf.IResolvable

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
  public get(index: number): DataPanosCertificateProfileCertificateOutputReference {
    return new DataPanosCertificateProfileCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosCertificateProfileLocationPanorama {
}

export function dataPanosCertificateProfileLocationPanoramaToTerraform(struct?: DataPanosCertificateProfileLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosCertificateProfileLocationPanoramaToHclTerraform(struct?: DataPanosCertificateProfileLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosCertificateProfileLocationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosCertificateProfileLocationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosCertificateProfileLocationPanorama | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosCertificateProfileLocationShared {
}

export function dataPanosCertificateProfileLocationSharedToTerraform(struct?: DataPanosCertificateProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosCertificateProfileLocationSharedToHclTerraform(struct?: DataPanosCertificateProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosCertificateProfileLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosCertificateProfileLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosCertificateProfileLocationShared | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosCertificateProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#name DataPanosCertificateProfile#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#panorama_device DataPanosCertificateProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosCertificateProfileLocationTemplateToTerraform(struct?: DataPanosCertificateProfileLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosCertificateProfileLocationTemplateToHclTerraform(struct?: DataPanosCertificateProfileLocationTemplate | cdktf.IResolvable): any {
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
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosCertificateProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosCertificateProfileLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosCertificateProfileLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosCertificateProfileLocationTemplateStack {
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#name DataPanosCertificateProfile#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#panorama_device DataPanosCertificateProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosCertificateProfileLocationTemplateStackToTerraform(struct?: DataPanosCertificateProfileLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosCertificateProfileLocationTemplateStackToHclTerraform(struct?: DataPanosCertificateProfileLocationTemplateStack | cdktf.IResolvable): any {
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
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosCertificateProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosCertificateProfileLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosCertificateProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosCertificateProfileLocationTemplateStackVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#ngfw_device DataPanosCertificateProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#panorama_device DataPanosCertificateProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#template_stack DataPanosCertificateProfile#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#vsys DataPanosCertificateProfile#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosCertificateProfileLocationTemplateStackVsysToTerraform(struct?: DataPanosCertificateProfileLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template_stack: cdktf.stringToTerraform(struct!.templateStack),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function dataPanosCertificateProfileLocationTemplateStackVsysToHclTerraform(struct?: DataPanosCertificateProfileLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_stack: {
      value: cdktf.stringToHclTerraform(struct!.templateStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosCertificateProfileLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosCertificateProfileLocationTemplateStackVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._templateStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosCertificateProfileLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._templateStack = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._templateStack = value.templateStack;
      this._vsys = value.vsys;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // template_stack - computed: true, optional: true, required: false
  private _templateStack?: string; 
  public get templateStack() {
    return this.getStringAttribute('template_stack');
  }
  public set templateStack(value: string) {
    this._templateStack = value;
  }
  public resetTemplateStack() {
    this._templateStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface DataPanosCertificateProfileLocationTemplateVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#ngfw_device DataPanosCertificateProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#panorama_device DataPanosCertificateProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#template DataPanosCertificateProfile#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#vsys DataPanosCertificateProfile#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosCertificateProfileLocationTemplateVsysToTerraform(struct?: DataPanosCertificateProfileLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template: cdktf.stringToTerraform(struct!.template),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function dataPanosCertificateProfileLocationTemplateVsysToHclTerraform(struct?: DataPanosCertificateProfileLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosCertificateProfileLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosCertificateProfileLocationTemplateVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosCertificateProfileLocationTemplateVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._template = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._template = value.template;
      this._vsys = value.vsys;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface DataPanosCertificateProfileLocation {
  /**
  * Located in a panorama.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#panorama DataPanosCertificateProfile#panorama}
  */
  readonly panorama?: DataPanosCertificateProfileLocationPanorama;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#shared DataPanosCertificateProfile#shared}
  */
  readonly shared?: DataPanosCertificateProfileLocationShared;
  /**
  * A shared resource located within a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#template DataPanosCertificateProfile#template}
  */
  readonly template?: DataPanosCertificateProfileLocationTemplate;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#template_stack DataPanosCertificateProfile#template_stack}
  */
  readonly templateStack?: DataPanosCertificateProfileLocationTemplateStack;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#template_stack_vsys DataPanosCertificateProfile#template_stack_vsys}
  */
  readonly templateStackVsys?: DataPanosCertificateProfileLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#template_vsys DataPanosCertificateProfile#template_vsys}
  */
  readonly templateVsys?: DataPanosCertificateProfileLocationTemplateVsys;
}

export function dataPanosCertificateProfileLocationToTerraform(struct?: DataPanosCertificateProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    panorama: dataPanosCertificateProfileLocationPanoramaToTerraform(struct!.panorama),
    shared: dataPanosCertificateProfileLocationSharedToTerraform(struct!.shared),
    template: dataPanosCertificateProfileLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosCertificateProfileLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: dataPanosCertificateProfileLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: dataPanosCertificateProfileLocationTemplateVsysToTerraform(struct!.templateVsys),
  }
}


export function dataPanosCertificateProfileLocationToHclTerraform(struct?: DataPanosCertificateProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    panorama: {
      value: dataPanosCertificateProfileLocationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosCertificateProfileLocationPanorama",
    },
    shared: {
      value: dataPanosCertificateProfileLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosCertificateProfileLocationShared",
    },
    template: {
      value: dataPanosCertificateProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosCertificateProfileLocationTemplate",
    },
    template_stack: {
      value: dataPanosCertificateProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosCertificateProfileLocationTemplateStack",
    },
    template_stack_vsys: {
      value: dataPanosCertificateProfileLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosCertificateProfileLocationTemplateStackVsys",
    },
    template_vsys: {
      value: dataPanosCertificateProfileLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosCertificateProfileLocationTemplateVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosCertificateProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosCertificateProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._panorama?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panorama = this._panorama?.internalValue;
    }
    if (this._shared?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    if (this._templateStackVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStackVsys = this._templateStackVsys?.internalValue;
    }
    if (this._templateVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVsys = this._templateVsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosCertificateProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._panorama.internalValue = undefined;
      this._shared.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._templateStackVsys.internalValue = undefined;
      this._templateVsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._panorama.internalValue = value.panorama;
      this._shared.internalValue = value.shared;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
      this._templateStackVsys.internalValue = value.templateStackVsys;
      this._templateVsys.internalValue = value.templateVsys;
    }
  }

  // panorama - computed: false, optional: true, required: false
  private _panorama = new DataPanosCertificateProfileLocationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: DataPanosCertificateProfileLocationPanorama) {
    this._panorama.internalValue = value;
  }
  public resetPanorama() {
    this._panorama.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaInput() {
    return this._panorama.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new DataPanosCertificateProfileLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosCertificateProfileLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosCertificateProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosCertificateProfileLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new DataPanosCertificateProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosCertificateProfileLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }

  // template_stack_vsys - computed: false, optional: true, required: false
  private _templateStackVsys = new DataPanosCertificateProfileLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: DataPanosCertificateProfileLocationTemplateStackVsys) {
    this._templateStackVsys.internalValue = value;
  }
  public resetTemplateStackVsys() {
    this._templateStackVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackVsysInput() {
    return this._templateStackVsys.internalValue;
  }

  // template_vsys - computed: false, optional: true, required: false
  private _templateVsys = new DataPanosCertificateProfileLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: DataPanosCertificateProfileLocationTemplateVsys) {
    this._templateVsys.internalValue = value;
  }
  public resetTemplateVsys() {
    this._templateVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVsysInput() {
    return this._templateVsys.internalValue;
  }
}
export interface DataPanosCertificateProfileUsernameField {
  /**
  * The common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#subject DataPanosCertificateProfile#subject}
  */
  readonly subject?: string;
  /**
  * The Email or Principal Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#subject_alt DataPanosCertificateProfile#subject_alt}
  */
  readonly subjectAlt?: string;
}

export function dataPanosCertificateProfileUsernameFieldToTerraform(struct?: DataPanosCertificateProfileUsernameField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_alt: cdktf.stringToTerraform(struct!.subjectAlt),
  }
}


export function dataPanosCertificateProfileUsernameFieldToHclTerraform(struct?: DataPanosCertificateProfileUsernameField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt: {
      value: cdktf.stringToHclTerraform(struct!.subjectAlt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosCertificateProfileUsernameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosCertificateProfileUsernameField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectAlt !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlt = this._subjectAlt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosCertificateProfileUsernameField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subject = undefined;
      this._subjectAlt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subject = value.subject;
      this._subjectAlt = value.subjectAlt;
    }
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_alt - computed: true, optional: true, required: false
  private _subjectAlt?: string; 
  public get subjectAlt() {
    return this.getStringAttribute('subject_alt');
  }
  public set subjectAlt(value: string) {
    this._subjectAlt = value;
  }
  public resetSubjectAlt() {
    this._subjectAlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltInput() {
    return this._subjectAlt;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile panos_certificate_profile}
*/
export class DataPanosCertificateProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_certificate_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosCertificateProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosCertificateProfile to import
  * @param importFromId The id of the existing DataPanosCertificateProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosCertificateProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_certificate_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/certificate_profile panos_certificate_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosCertificateProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosCertificateProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_certificate_profile',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.6',
        providerVersionConstraint: '2.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockExpiredCertificate = config.blockExpiredCertificate;
    this._blockTimeoutCertificate = config.blockTimeoutCertificate;
    this._blockUnauthenticatedCertificate = config.blockUnauthenticatedCertificate;
    this._blockUnknownCertificate = config.blockUnknownCertificate;
    this._certificate.internalValue = config.certificate;
    this._certificateStatusTimeout = config.certificateStatusTimeout;
    this._crlReceiveTimeout = config.crlReceiveTimeout;
    this._domain = config.domain;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._ocspExcludeNonce = config.ocspExcludeNonce;
    this._ocspReceiveTimeout = config.ocspReceiveTimeout;
    this._useCrl = config.useCrl;
    this._useOcsp = config.useOcsp;
    this._usernameField.internalValue = config.usernameField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_expired_certificate - computed: true, optional: true, required: false
  private _blockExpiredCertificate?: boolean | cdktf.IResolvable; 
  public get blockExpiredCertificate() {
    return this.getBooleanAttribute('block_expired_certificate');
  }
  public set blockExpiredCertificate(value: boolean | cdktf.IResolvable) {
    this._blockExpiredCertificate = value;
  }
  public resetBlockExpiredCertificate() {
    this._blockExpiredCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExpiredCertificateInput() {
    return this._blockExpiredCertificate;
  }

  // block_timeout_certificate - computed: true, optional: true, required: false
  private _blockTimeoutCertificate?: boolean | cdktf.IResolvable; 
  public get blockTimeoutCertificate() {
    return this.getBooleanAttribute('block_timeout_certificate');
  }
  public set blockTimeoutCertificate(value: boolean | cdktf.IResolvable) {
    this._blockTimeoutCertificate = value;
  }
  public resetBlockTimeoutCertificate() {
    this._blockTimeoutCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTimeoutCertificateInput() {
    return this._blockTimeoutCertificate;
  }

  // block_unauthenticated_certificate - computed: true, optional: true, required: false
  private _blockUnauthenticatedCertificate?: boolean | cdktf.IResolvable; 
  public get blockUnauthenticatedCertificate() {
    return this.getBooleanAttribute('block_unauthenticated_certificate');
  }
  public set blockUnauthenticatedCertificate(value: boolean | cdktf.IResolvable) {
    this._blockUnauthenticatedCertificate = value;
  }
  public resetBlockUnauthenticatedCertificate() {
    this._blockUnauthenticatedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnauthenticatedCertificateInput() {
    return this._blockUnauthenticatedCertificate;
  }

  // block_unknown_certificate - computed: true, optional: true, required: false
  private _blockUnknownCertificate?: boolean | cdktf.IResolvable; 
  public get blockUnknownCertificate() {
    return this.getBooleanAttribute('block_unknown_certificate');
  }
  public set blockUnknownCertificate(value: boolean | cdktf.IResolvable) {
    this._blockUnknownCertificate = value;
  }
  public resetBlockUnknownCertificate() {
    this._blockUnknownCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnknownCertificateInput() {
    return this._blockUnknownCertificate;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate = new DataPanosCertificateProfileCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataPanosCertificateProfileCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // certificate_status_timeout - computed: true, optional: true, required: false
  private _certificateStatusTimeout?: number; 
  public get certificateStatusTimeout() {
    return this.getNumberAttribute('certificate_status_timeout');
  }
  public set certificateStatusTimeout(value: number) {
    this._certificateStatusTimeout = value;
  }
  public resetCertificateStatusTimeout() {
    this._certificateStatusTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStatusTimeoutInput() {
    return this._certificateStatusTimeout;
  }

  // crl_receive_timeout - computed: true, optional: true, required: false
  private _crlReceiveTimeout?: number; 
  public get crlReceiveTimeout() {
    return this.getNumberAttribute('crl_receive_timeout');
  }
  public set crlReceiveTimeout(value: number) {
    this._crlReceiveTimeout = value;
  }
  public resetCrlReceiveTimeout() {
    this._crlReceiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlReceiveTimeoutInput() {
    return this._crlReceiveTimeout;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosCertificateProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosCertificateProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // ocsp_exclude_nonce - computed: true, optional: true, required: false
  private _ocspExcludeNonce?: boolean | cdktf.IResolvable; 
  public get ocspExcludeNonce() {
    return this.getBooleanAttribute('ocsp_exclude_nonce');
  }
  public set ocspExcludeNonce(value: boolean | cdktf.IResolvable) {
    this._ocspExcludeNonce = value;
  }
  public resetOcspExcludeNonce() {
    this._ocspExcludeNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspExcludeNonceInput() {
    return this._ocspExcludeNonce;
  }

  // ocsp_receive_timeout - computed: true, optional: true, required: false
  private _ocspReceiveTimeout?: number; 
  public get ocspReceiveTimeout() {
    return this.getNumberAttribute('ocsp_receive_timeout');
  }
  public set ocspReceiveTimeout(value: number) {
    this._ocspReceiveTimeout = value;
  }
  public resetOcspReceiveTimeout() {
    this._ocspReceiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspReceiveTimeoutInput() {
    return this._ocspReceiveTimeout;
  }

  // use_crl - computed: true, optional: true, required: false
  private _useCrl?: boolean | cdktf.IResolvable; 
  public get useCrl() {
    return this.getBooleanAttribute('use_crl');
  }
  public set useCrl(value: boolean | cdktf.IResolvable) {
    this._useCrl = value;
  }
  public resetUseCrl() {
    this._useCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCrlInput() {
    return this._useCrl;
  }

  // use_ocsp - computed: true, optional: true, required: false
  private _useOcsp?: boolean | cdktf.IResolvable; 
  public get useOcsp() {
    return this.getBooleanAttribute('use_ocsp');
  }
  public set useOcsp(value: boolean | cdktf.IResolvable) {
    this._useOcsp = value;
  }
  public resetUseOcsp() {
    this._useOcsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOcspInput() {
    return this._useOcsp;
  }

  // username_field - computed: true, optional: true, required: false
  private _usernameField = new DataPanosCertificateProfileUsernameFieldOutputReference(this, "username_field");
  public get usernameField() {
    return this._usernameField;
  }
  public putUsernameField(value: DataPanosCertificateProfileUsernameField) {
    this._usernameField.internalValue = value;
  }
  public resetUsernameField() {
    this._usernameField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFieldInput() {
    return this._usernameField.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_expired_certificate: cdktf.booleanToTerraform(this._blockExpiredCertificate),
      block_timeout_certificate: cdktf.booleanToTerraform(this._blockTimeoutCertificate),
      block_unauthenticated_certificate: cdktf.booleanToTerraform(this._blockUnauthenticatedCertificate),
      block_unknown_certificate: cdktf.booleanToTerraform(this._blockUnknownCertificate),
      certificate: cdktf.listMapper(dataPanosCertificateProfileCertificateToTerraform, false)(this._certificate.internalValue),
      certificate_status_timeout: cdktf.numberToTerraform(this._certificateStatusTimeout),
      crl_receive_timeout: cdktf.numberToTerraform(this._crlReceiveTimeout),
      domain: cdktf.stringToTerraform(this._domain),
      location: dataPanosCertificateProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      ocsp_exclude_nonce: cdktf.booleanToTerraform(this._ocspExcludeNonce),
      ocsp_receive_timeout: cdktf.numberToTerraform(this._ocspReceiveTimeout),
      use_crl: cdktf.booleanToTerraform(this._useCrl),
      use_ocsp: cdktf.booleanToTerraform(this._useOcsp),
      username_field: dataPanosCertificateProfileUsernameFieldToTerraform(this._usernameField.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_expired_certificate: {
        value: cdktf.booleanToHclTerraform(this._blockExpiredCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_timeout_certificate: {
        value: cdktf.booleanToHclTerraform(this._blockTimeoutCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_unauthenticated_certificate: {
        value: cdktf.booleanToHclTerraform(this._blockUnauthenticatedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_unknown_certificate: {
        value: cdktf.booleanToHclTerraform(this._blockUnknownCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate: {
        value: cdktf.listMapperHcl(dataPanosCertificateProfileCertificateToHclTerraform, false)(this._certificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosCertificateProfileCertificateList",
      },
      certificate_status_timeout: {
        value: cdktf.numberToHclTerraform(this._certificateStatusTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crl_receive_timeout: {
        value: cdktf.numberToHclTerraform(this._crlReceiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: dataPanosCertificateProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosCertificateProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_exclude_nonce: {
        value: cdktf.booleanToHclTerraform(this._ocspExcludeNonce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ocsp_receive_timeout: {
        value: cdktf.numberToHclTerraform(this._ocspReceiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_crl: {
        value: cdktf.booleanToHclTerraform(this._useCrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ocsp: {
        value: cdktf.booleanToHclTerraform(this._useOcsp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username_field: {
        value: dataPanosCertificateProfileUsernameFieldToHclTerraform(this._usernameField.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosCertificateProfileUsernameField",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
