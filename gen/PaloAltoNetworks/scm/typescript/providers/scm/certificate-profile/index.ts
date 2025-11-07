// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Block sessions with expired certificates?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#block_expired_cert CertificateProfile#block_expired_cert}
  */
  readonly blockExpiredCert?: boolean | cdktf.IResolvable;
  /**
  * Block session if certificate status cannot be retrieved within timeout?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#block_timeout_cert CertificateProfile#block_timeout_cert}
  */
  readonly blockTimeoutCert?: boolean | cdktf.IResolvable;
  /**
  * Block session if the certificate was not issued to the authenticating device?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#block_unauthenticated_cert CertificateProfile#block_unauthenticated_cert}
  */
  readonly blockUnauthenticatedCert?: boolean | cdktf.IResolvable;
  /**
  * Block session if certificate status is unknown?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#block_unknown_cert CertificateProfile#block_unknown_cert}
  */
  readonly blockUnknownCert?: boolean | cdktf.IResolvable;
  /**
  * An ordered list of CA certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#ca_certificates CertificateProfile#ca_certificates}
  */
  readonly caCertificates: CertificateProfileCaCertificates[] | cdktf.IResolvable;
  /**
  * Certificate status timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#cert_status_timeout CertificateProfile#cert_status_timeout}
  */
  readonly certStatusTimeout?: string;
  /**
  * CRL receive timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#crl_receive_timeout CertificateProfile#crl_receive_timeout}
  */
  readonly crlReceiveTimeout?: string;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#device CertificateProfile#device}
  */
  readonly device?: string;
  /**
  * User domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#domain CertificateProfile#domain}
  */
  readonly domain?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#folder CertificateProfile#folder}
  */
  readonly folder?: string;
  /**
  * The name of the certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#name CertificateProfile#name}
  */
  readonly name: string;
  /**
  * OCSP receive timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#ocsp_receive_timeout CertificateProfile#ocsp_receive_timeout}
  */
  readonly ocspReceiveTimeout?: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#snippet CertificateProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * Use CRL?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#use_crl CertificateProfile#use_crl}
  */
  readonly useCrl?: boolean | cdktf.IResolvable;
  /**
  * Use OCSP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#use_ocsp CertificateProfile#use_ocsp}
  */
  readonly useOcsp?: boolean | cdktf.IResolvable;
  /**
  * Certificate username field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#username_field CertificateProfile#username_field}
  */
  readonly usernameField?: CertificateProfileUsernameField;
}
export interface CertificateProfileCaCertificates {
  /**
  * Default OCSP URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#default_ocsp_url CertificateProfile#default_ocsp_url}
  */
  readonly defaultOcspUrl?: string;
  /**
  * CA certificate name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#name CertificateProfile#name}
  */
  readonly name: string;
  /**
  * OCSP verify certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#ocsp_verify_cert CertificateProfile#ocsp_verify_cert}
  */
  readonly ocspVerifyCert?: string;
  /**
  * Template name/OID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#template_name CertificateProfile#template_name}
  */
  readonly templateName?: string;
}

export function certificateProfileCaCertificatesToTerraform(struct?: CertificateProfileCaCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ocsp_url: cdktf.stringToTerraform(struct!.defaultOcspUrl),
    name: cdktf.stringToTerraform(struct!.name),
    ocsp_verify_cert: cdktf.stringToTerraform(struct!.ocspVerifyCert),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function certificateProfileCaCertificatesToHclTerraform(struct?: CertificateProfileCaCertificates | cdktf.IResolvable): any {
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
    ocsp_verify_cert: {
      value: cdktf.stringToHclTerraform(struct!.ocspVerifyCert),
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

export class CertificateProfileCaCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateProfileCaCertificates | cdktf.IResolvable | undefined {
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
    if (this._ocspVerifyCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspVerifyCert = this._ocspVerifyCert;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateProfileCaCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultOcspUrl = undefined;
      this._name = undefined;
      this._ocspVerifyCert = undefined;
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
      this._ocspVerifyCert = value.ocspVerifyCert;
      this._templateName = value.templateName;
    }
  }

  // default_ocsp_url - computed: false, optional: true, required: false
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

  // ocsp_verify_cert - computed: false, optional: true, required: false
  private _ocspVerifyCert?: string; 
  public get ocspVerifyCert() {
    return this.getStringAttribute('ocsp_verify_cert');
  }
  public set ocspVerifyCert(value: string) {
    this._ocspVerifyCert = value;
  }
  public resetOcspVerifyCert() {
    this._ocspVerifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspVerifyCertInput() {
    return this._ocspVerifyCert;
  }

  // template_name - computed: false, optional: true, required: false
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

export class CertificateProfileCaCertificatesList extends cdktf.ComplexList {
  public internalValue? : CertificateProfileCaCertificates[] | cdktf.IResolvable

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
  public get(index: number): CertificateProfileCaCertificatesOutputReference {
    return new CertificateProfileCaCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateProfileUsernameField {
  /**
  * Common name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#subject CertificateProfile#subject}
  */
  readonly subject?: string;
  /**
  * Email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#subject_alt CertificateProfile#subject_alt}
  */
  readonly subjectAlt?: string;
}

export function certificateProfileUsernameFieldToTerraform(struct?: CertificateProfileUsernameField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_alt: cdktf.stringToTerraform(struct!.subjectAlt),
  }
}


export function certificateProfileUsernameFieldToHclTerraform(struct?: CertificateProfileUsernameField | cdktf.IResolvable): any {
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

export class CertificateProfileUsernameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateProfileUsernameField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateProfileUsernameField | cdktf.IResolvable | undefined) {
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

  // subject - computed: false, optional: true, required: false
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

  // subject_alt - computed: false, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile scm_certificate_profile}
*/
export class CertificateProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_certificate_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateProfile to import
  * @param importFromId The id of the existing CertificateProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_certificate_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/certificate_profile scm_certificate_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_certificate_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockExpiredCert = config.blockExpiredCert;
    this._blockTimeoutCert = config.blockTimeoutCert;
    this._blockUnauthenticatedCert = config.blockUnauthenticatedCert;
    this._blockUnknownCert = config.blockUnknownCert;
    this._caCertificates.internalValue = config.caCertificates;
    this._certStatusTimeout = config.certStatusTimeout;
    this._crlReceiveTimeout = config.crlReceiveTimeout;
    this._device = config.device;
    this._domain = config.domain;
    this._folder = config.folder;
    this._name = config.name;
    this._ocspReceiveTimeout = config.ocspReceiveTimeout;
    this._snippet = config.snippet;
    this._useCrl = config.useCrl;
    this._useOcsp = config.useOcsp;
    this._usernameField.internalValue = config.usernameField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_expired_cert - computed: false, optional: true, required: false
  private _blockExpiredCert?: boolean | cdktf.IResolvable; 
  public get blockExpiredCert() {
    return this.getBooleanAttribute('block_expired_cert');
  }
  public set blockExpiredCert(value: boolean | cdktf.IResolvable) {
    this._blockExpiredCert = value;
  }
  public resetBlockExpiredCert() {
    this._blockExpiredCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExpiredCertInput() {
    return this._blockExpiredCert;
  }

  // block_timeout_cert - computed: false, optional: true, required: false
  private _blockTimeoutCert?: boolean | cdktf.IResolvable; 
  public get blockTimeoutCert() {
    return this.getBooleanAttribute('block_timeout_cert');
  }
  public set blockTimeoutCert(value: boolean | cdktf.IResolvable) {
    this._blockTimeoutCert = value;
  }
  public resetBlockTimeoutCert() {
    this._blockTimeoutCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTimeoutCertInput() {
    return this._blockTimeoutCert;
  }

  // block_unauthenticated_cert - computed: false, optional: true, required: false
  private _blockUnauthenticatedCert?: boolean | cdktf.IResolvable; 
  public get blockUnauthenticatedCert() {
    return this.getBooleanAttribute('block_unauthenticated_cert');
  }
  public set blockUnauthenticatedCert(value: boolean | cdktf.IResolvable) {
    this._blockUnauthenticatedCert = value;
  }
  public resetBlockUnauthenticatedCert() {
    this._blockUnauthenticatedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnauthenticatedCertInput() {
    return this._blockUnauthenticatedCert;
  }

  // block_unknown_cert - computed: false, optional: true, required: false
  private _blockUnknownCert?: boolean | cdktf.IResolvable; 
  public get blockUnknownCert() {
    return this.getBooleanAttribute('block_unknown_cert');
  }
  public set blockUnknownCert(value: boolean | cdktf.IResolvable) {
    this._blockUnknownCert = value;
  }
  public resetBlockUnknownCert() {
    this._blockUnknownCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnknownCertInput() {
    return this._blockUnknownCert;
  }

  // ca_certificates - computed: false, optional: false, required: true
  private _caCertificates = new CertificateProfileCaCertificatesList(this, "ca_certificates", false);
  public get caCertificates() {
    return this._caCertificates;
  }
  public putCaCertificates(value: CertificateProfileCaCertificates[] | cdktf.IResolvable) {
    this._caCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates.internalValue;
  }

  // cert_status_timeout - computed: false, optional: true, required: false
  private _certStatusTimeout?: string; 
  public get certStatusTimeout() {
    return this.getStringAttribute('cert_status_timeout');
  }
  public set certStatusTimeout(value: string) {
    this._certStatusTimeout = value;
  }
  public resetCertStatusTimeout() {
    this._certStatusTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certStatusTimeoutInput() {
    return this._certStatusTimeout;
  }

  // crl_receive_timeout - computed: false, optional: true, required: false
  private _crlReceiveTimeout?: string; 
  public get crlReceiveTimeout() {
    return this.getStringAttribute('crl_receive_timeout');
  }
  public set crlReceiveTimeout(value: string) {
    this._crlReceiveTimeout = value;
  }
  public resetCrlReceiveTimeout() {
    this._crlReceiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlReceiveTimeoutInput() {
    return this._crlReceiveTimeout;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // domain - computed: false, optional: true, required: false
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

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ocsp_receive_timeout - computed: false, optional: true, required: false
  private _ocspReceiveTimeout?: string; 
  public get ocspReceiveTimeout() {
    return this.getStringAttribute('ocsp_receive_timeout');
  }
  public set ocspReceiveTimeout(value: string) {
    this._ocspReceiveTimeout = value;
  }
  public resetOcspReceiveTimeout() {
    this._ocspReceiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspReceiveTimeoutInput() {
    return this._ocspReceiveTimeout;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // use_crl - computed: false, optional: true, required: false
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

  // use_ocsp - computed: false, optional: true, required: false
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

  // username_field - computed: false, optional: true, required: false
  private _usernameField = new CertificateProfileUsernameFieldOutputReference(this, "username_field");
  public get usernameField() {
    return this._usernameField;
  }
  public putUsernameField(value: CertificateProfileUsernameField) {
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
      block_expired_cert: cdktf.booleanToTerraform(this._blockExpiredCert),
      block_timeout_cert: cdktf.booleanToTerraform(this._blockTimeoutCert),
      block_unauthenticated_cert: cdktf.booleanToTerraform(this._blockUnauthenticatedCert),
      block_unknown_cert: cdktf.booleanToTerraform(this._blockUnknownCert),
      ca_certificates: cdktf.listMapper(certificateProfileCaCertificatesToTerraform, false)(this._caCertificates.internalValue),
      cert_status_timeout: cdktf.stringToTerraform(this._certStatusTimeout),
      crl_receive_timeout: cdktf.stringToTerraform(this._crlReceiveTimeout),
      device: cdktf.stringToTerraform(this._device),
      domain: cdktf.stringToTerraform(this._domain),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      ocsp_receive_timeout: cdktf.stringToTerraform(this._ocspReceiveTimeout),
      snippet: cdktf.stringToTerraform(this._snippet),
      use_crl: cdktf.booleanToTerraform(this._useCrl),
      use_ocsp: cdktf.booleanToTerraform(this._useOcsp),
      username_field: certificateProfileUsernameFieldToTerraform(this._usernameField.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_expired_cert: {
        value: cdktf.booleanToHclTerraform(this._blockExpiredCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_timeout_cert: {
        value: cdktf.booleanToHclTerraform(this._blockTimeoutCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_unauthenticated_cert: {
        value: cdktf.booleanToHclTerraform(this._blockUnauthenticatedCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_unknown_cert: {
        value: cdktf.booleanToHclTerraform(this._blockUnknownCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca_certificates: {
        value: cdktf.listMapperHcl(certificateProfileCaCertificatesToHclTerraform, false)(this._caCertificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificateProfileCaCertificatesList",
      },
      cert_status_timeout: {
        value: cdktf.stringToHclTerraform(this._certStatusTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_receive_timeout: {
        value: cdktf.stringToHclTerraform(this._crlReceiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      ocsp_receive_timeout: {
        value: cdktf.stringToHclTerraform(this._ocspReceiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: certificateProfileUsernameFieldToHclTerraform(this._usernameField.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateProfileUsernameField",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
