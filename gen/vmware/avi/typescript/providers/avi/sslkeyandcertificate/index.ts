// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslkeyandcertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#certificate_base64 Sslkeyandcertificate#certificate_base64}
  */
  readonly certificateBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#certificate_management_profile_ref Sslkeyandcertificate#certificate_management_profile_ref}
  */
  readonly certificateManagementProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#created_by Sslkeyandcertificate#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#enable_ocsp_stapling Sslkeyandcertificate#enable_ocsp_stapling}
  */
  readonly enableOcspStapling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#enckey_base64 Sslkeyandcertificate#enckey_base64}
  */
  readonly enckeyBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#enckey_name Sslkeyandcertificate#enckey_name}
  */
  readonly enckeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#format Sslkeyandcertificate#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#hardwaresecuritymodulegroup_ref Sslkeyandcertificate#hardwaresecuritymodulegroup_ref}
  */
  readonly hardwaresecuritymodulegroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#id Sslkeyandcertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#import_key_to_hsm Sslkeyandcertificate#import_key_to_hsm}
  */
  readonly importKeyToHsm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#is_federated Sslkeyandcertificate#is_federated}
  */
  readonly isFederated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#key Sslkeyandcertificate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#key_base64 Sslkeyandcertificate#key_base64}
  */
  readonly keyBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#key_passphrase Sslkeyandcertificate#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#name Sslkeyandcertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ocsp_error_status Sslkeyandcertificate#ocsp_error_status}
  */
  readonly ocspErrorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ocsp_responder_url_list_from_certs Sslkeyandcertificate#ocsp_responder_url_list_from_certs}
  */
  readonly ocspResponderUrlListFromCerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#status Sslkeyandcertificate#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#tenant_ref Sslkeyandcertificate#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#type Sslkeyandcertificate#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#uuid Sslkeyandcertificate#uuid}
  */
  readonly uuid?: string;
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ca_certs Sslkeyandcertificate#ca_certs}
  */
  readonly caCerts?: SslkeyandcertificateCaCerts[] | cdktf.IResolvable;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#certificate Sslkeyandcertificate#certificate}
  */
  readonly certificate: SslkeyandcertificateCertificate[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#configpb_attributes Sslkeyandcertificate#configpb_attributes}
  */
  readonly configpbAttributes?: SslkeyandcertificateConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * dynamic_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#dynamic_params Sslkeyandcertificate#dynamic_params}
  */
  readonly dynamicParams?: SslkeyandcertificateDynamicParams[] | cdktf.IResolvable;
  /**
  * key_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#key_params Sslkeyandcertificate#key_params}
  */
  readonly keyParams?: SslkeyandcertificateKeyParams[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#markers Sslkeyandcertificate#markers}
  */
  readonly markers?: SslkeyandcertificateMarkers[] | cdktf.IResolvable;
  /**
  * ocsp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ocsp_config Sslkeyandcertificate#ocsp_config}
  */
  readonly ocspConfig?: SslkeyandcertificateOcspConfig[] | cdktf.IResolvable;
  /**
  * ocsp_response_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ocsp_response_info Sslkeyandcertificate#ocsp_response_info}
  */
  readonly ocspResponseInfo?: SslkeyandcertificateOcspResponseInfo[] | cdktf.IResolvable;
}
export interface SslkeyandcertificateCaCerts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ca_ref Sslkeyandcertificate#ca_ref}
  */
  readonly caRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#name Sslkeyandcertificate#name}
  */
  readonly name?: string;
}

export function sslkeyandcertificateCaCertsToTerraform(struct?: SslkeyandcertificateCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_ref: cdktf.stringToTerraform(struct!.caRef),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sslkeyandcertificateCaCertsToHclTerraform(struct?: SslkeyandcertificateCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_ref: {
      value: cdktf.stringToHclTerraform(struct!.caRef),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateCaCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.caRef = this._caRef;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateCaCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caRef = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caRef = value.caRef;
      this._name = value.name;
    }
  }

  // ca_ref - computed: true, optional: true, required: false
  private _caRef?: string; 
  public get caRef() {
    return this.getStringAttribute('ca_ref');
  }
  public set caRef(value: string) {
    this._caRef = value;
  }
  public resetCaRef() {
    this._caRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caRefInput() {
    return this._caRef;
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
}

export class SslkeyandcertificateCaCertsList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateCaCerts[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateCaCertsOutputReference {
    return new SslkeyandcertificateCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateCertificateIssuer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#common_name Sslkeyandcertificate#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#country Sslkeyandcertificate#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#distinguished_name Sslkeyandcertificate#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#email_address Sslkeyandcertificate#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#locality Sslkeyandcertificate#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#organization Sslkeyandcertificate#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#organization_unit Sslkeyandcertificate#organization_unit}
  */
  readonly organizationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#state Sslkeyandcertificate#state}
  */
  readonly state?: string;
}

export function sslkeyandcertificateCertificateIssuerToTerraform(struct?: SslkeyandcertificateCertificateIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organization_unit: cdktf.stringToTerraform(struct!.organizationUnit),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function sslkeyandcertificateCertificateIssuerToHclTerraform(struct?: SslkeyandcertificateCertificateIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateCertificateIssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateCertificateIssuer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationUnit = this._organizationUnit;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateCertificateIssuer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._distinguishedName = undefined;
      this._emailAddress = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationUnit = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._distinguishedName = value.distinguishedName;
      this._emailAddress = value.emailAddress;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationUnit = value.organizationUnit;
      this._state = value.state;
    }
  }

  // common_name - computed: true, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // distinguished_name - computed: true, optional: true, required: false
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // locality - computed: true, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organization_unit - computed: true, optional: true, required: false
  private _organizationUnit?: string; 
  public get organizationUnit() {
    return this.getStringAttribute('organization_unit');
  }
  public set organizationUnit(value: string) {
    this._organizationUnit = value;
  }
  public resetOrganizationUnit() {
    this._organizationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUnitInput() {
    return this._organizationUnit;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class SslkeyandcertificateCertificateIssuerList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateCertificateIssuer[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateCertificateIssuerOutputReference {
    return new SslkeyandcertificateCertificateIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateCertificateKeyParamsEcParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#curve Sslkeyandcertificate#curve}
  */
  readonly curve?: string;
}

export function sslkeyandcertificateCertificateKeyParamsEcParamsToTerraform(struct?: SslkeyandcertificateCertificateKeyParamsEcParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curve: cdktf.stringToTerraform(struct!.curve),
  }
}


export function sslkeyandcertificateCertificateKeyParamsEcParamsToHclTerraform(struct?: SslkeyandcertificateCertificateKeyParamsEcParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curve: {
      value: cdktf.stringToHclTerraform(struct!.curve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateCertificateKeyParamsEcParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateCertificateKeyParamsEcParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curve !== undefined) {
      hasAnyValues = true;
      internalValueResult.curve = this._curve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateCertificateKeyParamsEcParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curve = value.curve;
    }
  }

  // curve - computed: false, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }
}

export class SslkeyandcertificateCertificateKeyParamsEcParamsList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateCertificateKeyParamsEcParams[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateCertificateKeyParamsEcParamsOutputReference {
    return new SslkeyandcertificateCertificateKeyParamsEcParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateCertificateKeyParamsRsaParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#exponent Sslkeyandcertificate#exponent}
  */
  readonly exponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#key_size Sslkeyandcertificate#key_size}
  */
  readonly keySize?: string;
}

export function sslkeyandcertificateCertificateKeyParamsRsaParamsToTerraform(struct?: SslkeyandcertificateCertificateKeyParamsRsaParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exponent: cdktf.stringToTerraform(struct!.exponent),
    key_size: cdktf.stringToTerraform(struct!.keySize),
  }
}


export function sslkeyandcertificateCertificateKeyParamsRsaParamsToHclTerraform(struct?: SslkeyandcertificateCertificateKeyParamsRsaParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exponent: {
      value: cdktf.stringToHclTerraform(struct!.exponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_size: {
      value: cdktf.stringToHclTerraform(struct!.keySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateCertificateKeyParamsRsaParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateCertificateKeyParamsRsaParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.exponent = this._exponent;
    }
    if (this._keySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySize = this._keySize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateCertificateKeyParamsRsaParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exponent = undefined;
      this._keySize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exponent = value.exponent;
      this._keySize = value.keySize;
    }
  }

  // exponent - computed: false, optional: true, required: false
  private _exponent?: string; 
  public get exponent() {
    return this.getStringAttribute('exponent');
  }
  public set exponent(value: string) {
    this._exponent = value;
  }
  public resetExponent() {
    this._exponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentInput() {
    return this._exponent;
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: string; 
  public get keySize() {
    return this.getStringAttribute('key_size');
  }
  public set keySize(value: string) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }
}

export class SslkeyandcertificateCertificateKeyParamsRsaParamsList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateCertificateKeyParamsRsaParams[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateCertificateKeyParamsRsaParamsOutputReference {
    return new SslkeyandcertificateCertificateKeyParamsRsaParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateCertificateKeyParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#algorithm Sslkeyandcertificate#algorithm}
  */
  readonly algorithm: string;
  /**
  * ec_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ec_params Sslkeyandcertificate#ec_params}
  */
  readonly ecParams?: SslkeyandcertificateCertificateKeyParamsEcParams[] | cdktf.IResolvable;
  /**
  * rsa_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#rsa_params Sslkeyandcertificate#rsa_params}
  */
  readonly rsaParams?: SslkeyandcertificateCertificateKeyParamsRsaParams[] | cdktf.IResolvable;
}

export function sslkeyandcertificateCertificateKeyParamsToTerraform(struct?: SslkeyandcertificateCertificateKeyParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    ec_params: cdktf.listMapper(sslkeyandcertificateCertificateKeyParamsEcParamsToTerraform, true)(struct!.ecParams),
    rsa_params: cdktf.listMapper(sslkeyandcertificateCertificateKeyParamsRsaParamsToTerraform, true)(struct!.rsaParams),
  }
}


export function sslkeyandcertificateCertificateKeyParamsToHclTerraform(struct?: SslkeyandcertificateCertificateKeyParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec_params: {
      value: cdktf.listMapperHcl(sslkeyandcertificateCertificateKeyParamsEcParamsToHclTerraform, true)(struct!.ecParams),
      isBlock: true,
      type: "set",
      storageClassType: "SslkeyandcertificateCertificateKeyParamsEcParamsList",
    },
    rsa_params: {
      value: cdktf.listMapperHcl(sslkeyandcertificateCertificateKeyParamsRsaParamsToHclTerraform, true)(struct!.rsaParams),
      isBlock: true,
      type: "set",
      storageClassType: "SslkeyandcertificateCertificateKeyParamsRsaParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateCertificateKeyParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateCertificateKeyParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._ecParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecParams = this._ecParams?.internalValue;
    }
    if (this._rsaParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaParams = this._rsaParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateCertificateKeyParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._ecParams.internalValue = undefined;
      this._rsaParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._ecParams.internalValue = value.ecParams;
      this._rsaParams.internalValue = value.rsaParams;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // ec_params - computed: false, optional: true, required: false
  private _ecParams = new SslkeyandcertificateCertificateKeyParamsEcParamsList(this, "ec_params", true);
  public get ecParams() {
    return this._ecParams;
  }
  public putEcParams(value: SslkeyandcertificateCertificateKeyParamsEcParams[] | cdktf.IResolvable) {
    this._ecParams.internalValue = value;
  }
  public resetEcParams() {
    this._ecParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecParamsInput() {
    return this._ecParams.internalValue;
  }

  // rsa_params - computed: false, optional: true, required: false
  private _rsaParams = new SslkeyandcertificateCertificateKeyParamsRsaParamsList(this, "rsa_params", true);
  public get rsaParams() {
    return this._rsaParams;
  }
  public putRsaParams(value: SslkeyandcertificateCertificateKeyParamsRsaParams[] | cdktf.IResolvable) {
    this._rsaParams.internalValue = value;
  }
  public resetRsaParams() {
    this._rsaParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaParamsInput() {
    return this._rsaParams.internalValue;
  }
}

export class SslkeyandcertificateCertificateKeyParamsList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateCertificateKeyParams[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateCertificateKeyParamsOutputReference {
    return new SslkeyandcertificateCertificateKeyParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateCertificateSubject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#common_name Sslkeyandcertificate#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#country Sslkeyandcertificate#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#distinguished_name Sslkeyandcertificate#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#email_address Sslkeyandcertificate#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#locality Sslkeyandcertificate#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#organization Sslkeyandcertificate#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#organization_unit Sslkeyandcertificate#organization_unit}
  */
  readonly organizationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#state Sslkeyandcertificate#state}
  */
  readonly state?: string;
}

export function sslkeyandcertificateCertificateSubjectToTerraform(struct?: SslkeyandcertificateCertificateSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organization_unit: cdktf.stringToTerraform(struct!.organizationUnit),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function sslkeyandcertificateCertificateSubjectToHclTerraform(struct?: SslkeyandcertificateCertificateSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateCertificateSubjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateCertificateSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationUnit = this._organizationUnit;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateCertificateSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._distinguishedName = undefined;
      this._emailAddress = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationUnit = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._distinguishedName = value.distinguishedName;
      this._emailAddress = value.emailAddress;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationUnit = value.organizationUnit;
      this._state = value.state;
    }
  }

  // common_name - computed: true, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // distinguished_name - computed: true, optional: true, required: false
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // locality - computed: true, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organization_unit - computed: true, optional: true, required: false
  private _organizationUnit?: string; 
  public get organizationUnit() {
    return this.getStringAttribute('organization_unit');
  }
  public set organizationUnit(value: string) {
    this._organizationUnit = value;
  }
  public resetOrganizationUnit() {
    this._organizationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUnitInput() {
    return this._organizationUnit;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class SslkeyandcertificateCertificateSubjectList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateCertificateSubject[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateCertificateSubjectOutputReference {
    return new SslkeyandcertificateCertificateSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#certificate Sslkeyandcertificate#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#certificate_signing_request Sslkeyandcertificate#certificate_signing_request}
  */
  readonly certificateSigningRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#chain_verified Sslkeyandcertificate#chain_verified}
  */
  readonly chainVerified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#days_until_expire Sslkeyandcertificate#days_until_expire}
  */
  readonly daysUntilExpire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#expiry_status Sslkeyandcertificate#expiry_status}
  */
  readonly expiryStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#fingerprint Sslkeyandcertificate#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#not_after Sslkeyandcertificate#not_after}
  */
  readonly notAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#not_before Sslkeyandcertificate#not_before}
  */
  readonly notBefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#public_key Sslkeyandcertificate#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#self_signed Sslkeyandcertificate#self_signed}
  */
  readonly selfSigned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#serial_number Sslkeyandcertificate#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#signature Sslkeyandcertificate#signature}
  */
  readonly signature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#signature_algorithm Sslkeyandcertificate#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#subject_alt_names Sslkeyandcertificate#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#text Sslkeyandcertificate#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#version Sslkeyandcertificate#version}
  */
  readonly version?: string;
  /**
  * issuer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#issuer Sslkeyandcertificate#issuer}
  */
  readonly issuer?: SslkeyandcertificateCertificateIssuer[] | cdktf.IResolvable;
  /**
  * key_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#key_params Sslkeyandcertificate#key_params}
  */
  readonly keyParams?: SslkeyandcertificateCertificateKeyParams[] | cdktf.IResolvable;
  /**
  * subject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#subject Sslkeyandcertificate#subject}
  */
  readonly subject?: SslkeyandcertificateCertificateSubject[] | cdktf.IResolvable;
}

export function sslkeyandcertificateCertificateToTerraform(struct?: SslkeyandcertificateCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_signing_request: cdktf.stringToTerraform(struct!.certificateSigningRequest),
    chain_verified: cdktf.stringToTerraform(struct!.chainVerified),
    days_until_expire: cdktf.stringToTerraform(struct!.daysUntilExpire),
    expiry_status: cdktf.stringToTerraform(struct!.expiryStatus),
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    not_after: cdktf.stringToTerraform(struct!.notAfter),
    not_before: cdktf.stringToTerraform(struct!.notBefore),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    self_signed: cdktf.stringToTerraform(struct!.selfSigned),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    signature: cdktf.stringToTerraform(struct!.signature),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
    text: cdktf.stringToTerraform(struct!.text),
    version: cdktf.stringToTerraform(struct!.version),
    issuer: cdktf.listMapper(sslkeyandcertificateCertificateIssuerToTerraform, true)(struct!.issuer),
    key_params: cdktf.listMapper(sslkeyandcertificateCertificateKeyParamsToTerraform, true)(struct!.keyParams),
    subject: cdktf.listMapper(sslkeyandcertificateCertificateSubjectToTerraform, true)(struct!.subject),
  }
}


export function sslkeyandcertificateCertificateToHclTerraform(struct?: SslkeyandcertificateCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_signing_request: {
      value: cdktf.stringToHclTerraform(struct!.certificateSigningRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chain_verified: {
      value: cdktf.stringToHclTerraform(struct!.chainVerified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days_until_expire: {
      value: cdktf.stringToHclTerraform(struct!.daysUntilExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry_status: {
      value: cdktf.stringToHclTerraform(struct!.expiryStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_after: {
      value: cdktf.stringToHclTerraform(struct!.notAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_before: {
      value: cdktf.stringToHclTerraform(struct!.notBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_signed: {
      value: cdktf.stringToHclTerraform(struct!.selfSigned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature: {
      value: cdktf.stringToHclTerraform(struct!.signature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.listMapperHcl(sslkeyandcertificateCertificateIssuerToHclTerraform, true)(struct!.issuer),
      isBlock: true,
      type: "set",
      storageClassType: "SslkeyandcertificateCertificateIssuerList",
    },
    key_params: {
      value: cdktf.listMapperHcl(sslkeyandcertificateCertificateKeyParamsToHclTerraform, true)(struct!.keyParams),
      isBlock: true,
      type: "set",
      storageClassType: "SslkeyandcertificateCertificateKeyParamsList",
    },
    subject: {
      value: cdktf.listMapperHcl(sslkeyandcertificateCertificateSubjectToHclTerraform, true)(struct!.subject),
      isBlock: true,
      type: "set",
      storageClassType: "SslkeyandcertificateCertificateSubjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificateSigningRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSigningRequest = this._certificateSigningRequest;
    }
    if (this._chainVerified !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainVerified = this._chainVerified;
    }
    if (this._daysUntilExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysUntilExpire = this._daysUntilExpire;
    }
    if (this._expiryStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryStatus = this._expiryStatus;
    }
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._notAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAfter = this._notAfter;
    }
    if (this._notBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.notBefore = this._notBefore;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._selfSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfSigned = this._selfSigned;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._issuer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer?.internalValue;
    }
    if (this._keyParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyParams = this._keyParams?.internalValue;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificateSigningRequest = undefined;
      this._chainVerified = undefined;
      this._daysUntilExpire = undefined;
      this._expiryStatus = undefined;
      this._fingerprint = undefined;
      this._notAfter = undefined;
      this._notBefore = undefined;
      this._publicKey = undefined;
      this._selfSigned = undefined;
      this._serialNumber = undefined;
      this._signature = undefined;
      this._signatureAlgorithm = undefined;
      this._subjectAltNames = undefined;
      this._text = undefined;
      this._version = undefined;
      this._issuer.internalValue = undefined;
      this._keyParams.internalValue = undefined;
      this._subject.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificateSigningRequest = value.certificateSigningRequest;
      this._chainVerified = value.chainVerified;
      this._daysUntilExpire = value.daysUntilExpire;
      this._expiryStatus = value.expiryStatus;
      this._fingerprint = value.fingerprint;
      this._notAfter = value.notAfter;
      this._notBefore = value.notBefore;
      this._publicKey = value.publicKey;
      this._selfSigned = value.selfSigned;
      this._serialNumber = value.serialNumber;
      this._signature = value.signature;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._subjectAltNames = value.subjectAltNames;
      this._text = value.text;
      this._version = value.version;
      this._issuer.internalValue = value.issuer;
      this._keyParams.internalValue = value.keyParams;
      this._subject.internalValue = value.subject;
    }
  }

  // certificate - computed: true, optional: true, required: false
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

  // certificate_signing_request - computed: true, optional: true, required: false
  private _certificateSigningRequest?: string; 
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }
  public set certificateSigningRequest(value: string) {
    this._certificateSigningRequest = value;
  }
  public resetCertificateSigningRequest() {
    this._certificateSigningRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSigningRequestInput() {
    return this._certificateSigningRequest;
  }

  // chain_verified - computed: true, optional: true, required: false
  private _chainVerified?: string; 
  public get chainVerified() {
    return this.getStringAttribute('chain_verified');
  }
  public set chainVerified(value: string) {
    this._chainVerified = value;
  }
  public resetChainVerified() {
    this._chainVerified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainVerifiedInput() {
    return this._chainVerified;
  }

  // days_until_expire - computed: false, optional: true, required: false
  private _daysUntilExpire?: string; 
  public get daysUntilExpire() {
    return this.getStringAttribute('days_until_expire');
  }
  public set daysUntilExpire(value: string) {
    this._daysUntilExpire = value;
  }
  public resetDaysUntilExpire() {
    this._daysUntilExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysUntilExpireInput() {
    return this._daysUntilExpire;
  }

  // expiry_status - computed: false, optional: true, required: false
  private _expiryStatus?: string; 
  public get expiryStatus() {
    return this.getStringAttribute('expiry_status');
  }
  public set expiryStatus(value: string) {
    this._expiryStatus = value;
  }
  public resetExpiryStatus() {
    this._expiryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryStatusInput() {
    return this._expiryStatus;
  }

  // fingerprint - computed: true, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // not_after - computed: true, optional: true, required: false
  private _notAfter?: string; 
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }
  public set notAfter(value: string) {
    this._notAfter = value;
  }
  public resetNotAfter() {
    this._notAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // not_before - computed: true, optional: true, required: false
  private _notBefore?: string; 
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
  public set notBefore(value: string) {
    this._notBefore = value;
  }
  public resetNotBefore() {
    this._notBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // self_signed - computed: true, optional: true, required: false
  private _selfSigned?: string; 
  public get selfSigned() {
    return this.getStringAttribute('self_signed');
  }
  public set selfSigned(value: string) {
    this._selfSigned = value;
  }
  public resetSelfSigned() {
    this._selfSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfSignedInput() {
    return this._selfSigned;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // signature - computed: true, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // signature_algorithm - computed: true, optional: true, required: false
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

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }

  // text - computed: true, optional: true, required: false
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer = new SslkeyandcertificateCertificateIssuerList(this, "issuer", true);
  public get issuer() {
    return this._issuer;
  }
  public putIssuer(value: SslkeyandcertificateCertificateIssuer[] | cdktf.IResolvable) {
    this._issuer.internalValue = value;
  }
  public resetIssuer() {
    this._issuer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer.internalValue;
  }

  // key_params - computed: false, optional: true, required: false
  private _keyParams = new SslkeyandcertificateCertificateKeyParamsList(this, "key_params", true);
  public get keyParams() {
    return this._keyParams;
  }
  public putKeyParams(value: SslkeyandcertificateCertificateKeyParams[] | cdktf.IResolvable) {
    this._keyParams.internalValue = value;
  }
  public resetKeyParams() {
    this._keyParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyParamsInput() {
    return this._keyParams.internalValue;
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new SslkeyandcertificateCertificateSubjectList(this, "subject", true);
  public get subject() {
    return this._subject;
  }
  public putSubject(value: SslkeyandcertificateCertificateSubject[] | cdktf.IResolvable) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }
}

export class SslkeyandcertificateCertificateList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateCertificate[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateCertificateOutputReference {
    return new SslkeyandcertificateCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#version Sslkeyandcertificate#version}
  */
  readonly version?: string;
}

export function sslkeyandcertificateConfigpbAttributesToTerraform(struct?: SslkeyandcertificateConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function sslkeyandcertificateConfigpbAttributesToHclTerraform(struct?: SslkeyandcertificateConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class SslkeyandcertificateConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateConfigpbAttributesOutputReference {
    return new SslkeyandcertificateConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateDynamicParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#is_dynamic Sslkeyandcertificate#is_dynamic}
  */
  readonly isDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#is_sensitive Sslkeyandcertificate#is_sensitive}
  */
  readonly isSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#name Sslkeyandcertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#value Sslkeyandcertificate#value}
  */
  readonly value?: string;
}

export function sslkeyandcertificateDynamicParamsToTerraform(struct?: SslkeyandcertificateDynamicParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_dynamic: cdktf.stringToTerraform(struct!.isDynamic),
    is_sensitive: cdktf.stringToTerraform(struct!.isSensitive),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sslkeyandcertificateDynamicParamsToHclTerraform(struct?: SslkeyandcertificateDynamicParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_dynamic: {
      value: cdktf.stringToHclTerraform(struct!.isDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.isSensitive),
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

export class SslkeyandcertificateDynamicParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateDynamicParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDynamic = this._isDynamic;
    }
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
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

  public set internalValue(value: SslkeyandcertificateDynamicParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDynamic = undefined;
      this._isSensitive = undefined;
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
      this._isDynamic = value.isDynamic;
      this._isSensitive = value.isSensitive;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // is_dynamic - computed: false, optional: true, required: false
  private _isDynamic?: string; 
  public get isDynamic() {
    return this.getStringAttribute('is_dynamic');
  }
  public set isDynamic(value: string) {
    this._isDynamic = value;
  }
  public resetIsDynamic() {
    this._isDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDynamicInput() {
    return this._isDynamic;
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: string; 
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }
  public set isSensitive(value: string) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SslkeyandcertificateDynamicParamsList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateDynamicParams[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateDynamicParamsOutputReference {
    return new SslkeyandcertificateDynamicParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateKeyParamsEcParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#curve Sslkeyandcertificate#curve}
  */
  readonly curve?: string;
}

export function sslkeyandcertificateKeyParamsEcParamsToTerraform(struct?: SslkeyandcertificateKeyParamsEcParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curve: cdktf.stringToTerraform(struct!.curve),
  }
}


export function sslkeyandcertificateKeyParamsEcParamsToHclTerraform(struct?: SslkeyandcertificateKeyParamsEcParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curve: {
      value: cdktf.stringToHclTerraform(struct!.curve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateKeyParamsEcParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateKeyParamsEcParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curve !== undefined) {
      hasAnyValues = true;
      internalValueResult.curve = this._curve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateKeyParamsEcParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curve = value.curve;
    }
  }

  // curve - computed: false, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }
}

export class SslkeyandcertificateKeyParamsEcParamsList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateKeyParamsEcParams[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateKeyParamsEcParamsOutputReference {
    return new SslkeyandcertificateKeyParamsEcParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateKeyParamsRsaParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#exponent Sslkeyandcertificate#exponent}
  */
  readonly exponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#key_size Sslkeyandcertificate#key_size}
  */
  readonly keySize?: string;
}

export function sslkeyandcertificateKeyParamsRsaParamsToTerraform(struct?: SslkeyandcertificateKeyParamsRsaParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exponent: cdktf.stringToTerraform(struct!.exponent),
    key_size: cdktf.stringToTerraform(struct!.keySize),
  }
}


export function sslkeyandcertificateKeyParamsRsaParamsToHclTerraform(struct?: SslkeyandcertificateKeyParamsRsaParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exponent: {
      value: cdktf.stringToHclTerraform(struct!.exponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_size: {
      value: cdktf.stringToHclTerraform(struct!.keySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateKeyParamsRsaParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateKeyParamsRsaParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.exponent = this._exponent;
    }
    if (this._keySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySize = this._keySize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateKeyParamsRsaParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exponent = undefined;
      this._keySize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exponent = value.exponent;
      this._keySize = value.keySize;
    }
  }

  // exponent - computed: false, optional: true, required: false
  private _exponent?: string; 
  public get exponent() {
    return this.getStringAttribute('exponent');
  }
  public set exponent(value: string) {
    this._exponent = value;
  }
  public resetExponent() {
    this._exponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentInput() {
    return this._exponent;
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: string; 
  public get keySize() {
    return this.getStringAttribute('key_size');
  }
  public set keySize(value: string) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }
}

export class SslkeyandcertificateKeyParamsRsaParamsList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateKeyParamsRsaParams[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateKeyParamsRsaParamsOutputReference {
    return new SslkeyandcertificateKeyParamsRsaParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateKeyParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#algorithm Sslkeyandcertificate#algorithm}
  */
  readonly algorithm: string;
  /**
  * ec_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ec_params Sslkeyandcertificate#ec_params}
  */
  readonly ecParams?: SslkeyandcertificateKeyParamsEcParams[] | cdktf.IResolvable;
  /**
  * rsa_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#rsa_params Sslkeyandcertificate#rsa_params}
  */
  readonly rsaParams?: SslkeyandcertificateKeyParamsRsaParams[] | cdktf.IResolvable;
}

export function sslkeyandcertificateKeyParamsToTerraform(struct?: SslkeyandcertificateKeyParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    ec_params: cdktf.listMapper(sslkeyandcertificateKeyParamsEcParamsToTerraform, true)(struct!.ecParams),
    rsa_params: cdktf.listMapper(sslkeyandcertificateKeyParamsRsaParamsToTerraform, true)(struct!.rsaParams),
  }
}


export function sslkeyandcertificateKeyParamsToHclTerraform(struct?: SslkeyandcertificateKeyParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec_params: {
      value: cdktf.listMapperHcl(sslkeyandcertificateKeyParamsEcParamsToHclTerraform, true)(struct!.ecParams),
      isBlock: true,
      type: "set",
      storageClassType: "SslkeyandcertificateKeyParamsEcParamsList",
    },
    rsa_params: {
      value: cdktf.listMapperHcl(sslkeyandcertificateKeyParamsRsaParamsToHclTerraform, true)(struct!.rsaParams),
      isBlock: true,
      type: "set",
      storageClassType: "SslkeyandcertificateKeyParamsRsaParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateKeyParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateKeyParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._ecParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecParams = this._ecParams?.internalValue;
    }
    if (this._rsaParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaParams = this._rsaParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateKeyParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._ecParams.internalValue = undefined;
      this._rsaParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._ecParams.internalValue = value.ecParams;
      this._rsaParams.internalValue = value.rsaParams;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // ec_params - computed: false, optional: true, required: false
  private _ecParams = new SslkeyandcertificateKeyParamsEcParamsList(this, "ec_params", true);
  public get ecParams() {
    return this._ecParams;
  }
  public putEcParams(value: SslkeyandcertificateKeyParamsEcParams[] | cdktf.IResolvable) {
    this._ecParams.internalValue = value;
  }
  public resetEcParams() {
    this._ecParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecParamsInput() {
    return this._ecParams.internalValue;
  }

  // rsa_params - computed: false, optional: true, required: false
  private _rsaParams = new SslkeyandcertificateKeyParamsRsaParamsList(this, "rsa_params", true);
  public get rsaParams() {
    return this._rsaParams;
  }
  public putRsaParams(value: SslkeyandcertificateKeyParamsRsaParams[] | cdktf.IResolvable) {
    this._rsaParams.internalValue = value;
  }
  public resetRsaParams() {
    this._rsaParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaParamsInput() {
    return this._rsaParams.internalValue;
  }
}

export class SslkeyandcertificateKeyParamsList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateKeyParams[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateKeyParamsOutputReference {
    return new SslkeyandcertificateKeyParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#key Sslkeyandcertificate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#values Sslkeyandcertificate#values}
  */
  readonly values?: string[];
}

export function sslkeyandcertificateMarkersToTerraform(struct?: SslkeyandcertificateMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sslkeyandcertificateMarkersToHclTerraform(struct?: SslkeyandcertificateMarkers | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
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

export class SslkeyandcertificateMarkersList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateMarkers[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateMarkersOutputReference {
    return new SslkeyandcertificateMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateOcspConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#failed_ocsp_jobs_retry_interval Sslkeyandcertificate#failed_ocsp_jobs_retry_interval}
  */
  readonly failedOcspJobsRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#max_tries Sslkeyandcertificate#max_tries}
  */
  readonly maxTries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ocsp_req_interval Sslkeyandcertificate#ocsp_req_interval}
  */
  readonly ocspReqInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ocsp_resp_timeout Sslkeyandcertificate#ocsp_resp_timeout}
  */
  readonly ocspRespTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#responder_url_lists Sslkeyandcertificate#responder_url_lists}
  */
  readonly responderUrlLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#url_action Sslkeyandcertificate#url_action}
  */
  readonly urlAction?: string;
}

export function sslkeyandcertificateOcspConfigToTerraform(struct?: SslkeyandcertificateOcspConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_ocsp_jobs_retry_interval: cdktf.stringToTerraform(struct!.failedOcspJobsRetryInterval),
    max_tries: cdktf.stringToTerraform(struct!.maxTries),
    ocsp_req_interval: cdktf.stringToTerraform(struct!.ocspReqInterval),
    ocsp_resp_timeout: cdktf.stringToTerraform(struct!.ocspRespTimeout),
    responder_url_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responderUrlLists),
    url_action: cdktf.stringToTerraform(struct!.urlAction),
  }
}


export function sslkeyandcertificateOcspConfigToHclTerraform(struct?: SslkeyandcertificateOcspConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_ocsp_jobs_retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.failedOcspJobsRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tries: {
      value: cdktf.stringToHclTerraform(struct!.maxTries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_req_interval: {
      value: cdktf.stringToHclTerraform(struct!.ocspReqInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_resp_timeout: {
      value: cdktf.stringToHclTerraform(struct!.ocspRespTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responder_url_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responderUrlLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url_action: {
      value: cdktf.stringToHclTerraform(struct!.urlAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateOcspConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateOcspConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedOcspJobsRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedOcspJobsRetryInterval = this._failedOcspJobsRetryInterval;
    }
    if (this._maxTries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTries = this._maxTries;
    }
    if (this._ocspReqInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspReqInterval = this._ocspReqInterval;
    }
    if (this._ocspRespTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspRespTimeout = this._ocspRespTimeout;
    }
    if (this._responderUrlLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderUrlLists = this._responderUrlLists;
    }
    if (this._urlAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlAction = this._urlAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateOcspConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failedOcspJobsRetryInterval = undefined;
      this._maxTries = undefined;
      this._ocspReqInterval = undefined;
      this._ocspRespTimeout = undefined;
      this._responderUrlLists = undefined;
      this._urlAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failedOcspJobsRetryInterval = value.failedOcspJobsRetryInterval;
      this._maxTries = value.maxTries;
      this._ocspReqInterval = value.ocspReqInterval;
      this._ocspRespTimeout = value.ocspRespTimeout;
      this._responderUrlLists = value.responderUrlLists;
      this._urlAction = value.urlAction;
    }
  }

  // failed_ocsp_jobs_retry_interval - computed: false, optional: true, required: false
  private _failedOcspJobsRetryInterval?: string; 
  public get failedOcspJobsRetryInterval() {
    return this.getStringAttribute('failed_ocsp_jobs_retry_interval');
  }
  public set failedOcspJobsRetryInterval(value: string) {
    this._failedOcspJobsRetryInterval = value;
  }
  public resetFailedOcspJobsRetryInterval() {
    this._failedOcspJobsRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedOcspJobsRetryIntervalInput() {
    return this._failedOcspJobsRetryInterval;
  }

  // max_tries - computed: false, optional: true, required: false
  private _maxTries?: string; 
  public get maxTries() {
    return this.getStringAttribute('max_tries');
  }
  public set maxTries(value: string) {
    this._maxTries = value;
  }
  public resetMaxTries() {
    this._maxTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTriesInput() {
    return this._maxTries;
  }

  // ocsp_req_interval - computed: false, optional: true, required: false
  private _ocspReqInterval?: string; 
  public get ocspReqInterval() {
    return this.getStringAttribute('ocsp_req_interval');
  }
  public set ocspReqInterval(value: string) {
    this._ocspReqInterval = value;
  }
  public resetOcspReqInterval() {
    this._ocspReqInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspReqIntervalInput() {
    return this._ocspReqInterval;
  }

  // ocsp_resp_timeout - computed: true, optional: true, required: false
  private _ocspRespTimeout?: string; 
  public get ocspRespTimeout() {
    return this.getStringAttribute('ocsp_resp_timeout');
  }
  public set ocspRespTimeout(value: string) {
    this._ocspRespTimeout = value;
  }
  public resetOcspRespTimeout() {
    this._ocspRespTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspRespTimeoutInput() {
    return this._ocspRespTimeout;
  }

  // responder_url_lists - computed: false, optional: true, required: false
  private _responderUrlLists?: string[]; 
  public get responderUrlLists() {
    return this.getListAttribute('responder_url_lists');
  }
  public set responderUrlLists(value: string[]) {
    this._responderUrlLists = value;
  }
  public resetResponderUrlLists() {
    this._responderUrlLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderUrlListsInput() {
    return this._responderUrlLists;
  }

  // url_action - computed: false, optional: true, required: false
  private _urlAction?: string; 
  public get urlAction() {
    return this.getStringAttribute('url_action');
  }
  public set urlAction(value: string) {
    this._urlAction = value;
  }
  public resetUrlAction() {
    this._urlAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlActionInput() {
    return this._urlAction;
  }
}

export class SslkeyandcertificateOcspConfigList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateOcspConfig[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateOcspConfigOutputReference {
    return new SslkeyandcertificateOcspConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslkeyandcertificateOcspResponseInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#cert_status Sslkeyandcertificate#cert_status}
  */
  readonly certStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#next_update Sslkeyandcertificate#next_update}
  */
  readonly nextUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ocsp_resp_from_responder_url Sslkeyandcertificate#ocsp_resp_from_responder_url}
  */
  readonly ocspRespFromResponderUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#ocsp_response Sslkeyandcertificate#ocsp_response}
  */
  readonly ocspResponse: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#revocation_reason Sslkeyandcertificate#revocation_reason}
  */
  readonly revocationReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#revocation_time Sslkeyandcertificate#revocation_time}
  */
  readonly revocationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#this_update Sslkeyandcertificate#this_update}
  */
  readonly thisUpdate?: string;
}

export function sslkeyandcertificateOcspResponseInfoToTerraform(struct?: SslkeyandcertificateOcspResponseInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_status: cdktf.stringToTerraform(struct!.certStatus),
    next_update: cdktf.stringToTerraform(struct!.nextUpdate),
    ocsp_resp_from_responder_url: cdktf.stringToTerraform(struct!.ocspRespFromResponderUrl),
    ocsp_response: cdktf.stringToTerraform(struct!.ocspResponse),
    revocation_reason: cdktf.stringToTerraform(struct!.revocationReason),
    revocation_time: cdktf.stringToTerraform(struct!.revocationTime),
    this_update: cdktf.stringToTerraform(struct!.thisUpdate),
  }
}


export function sslkeyandcertificateOcspResponseInfoToHclTerraform(struct?: SslkeyandcertificateOcspResponseInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_status: {
      value: cdktf.stringToHclTerraform(struct!.certStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_update: {
      value: cdktf.stringToHclTerraform(struct!.nextUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_resp_from_responder_url: {
      value: cdktf.stringToHclTerraform(struct!.ocspRespFromResponderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_response: {
      value: cdktf.stringToHclTerraform(struct!.ocspResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revocation_reason: {
      value: cdktf.stringToHclTerraform(struct!.revocationReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revocation_time: {
      value: cdktf.stringToHclTerraform(struct!.revocationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    this_update: {
      value: cdktf.stringToHclTerraform(struct!.thisUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslkeyandcertificateOcspResponseInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslkeyandcertificateOcspResponseInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.certStatus = this._certStatus;
    }
    if (this._nextUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpdate = this._nextUpdate;
    }
    if (this._ocspRespFromResponderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspRespFromResponderUrl = this._ocspRespFromResponderUrl;
    }
    if (this._ocspResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponse = this._ocspResponse;
    }
    if (this._revocationReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationReason = this._revocationReason;
    }
    if (this._revocationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationTime = this._revocationTime;
    }
    if (this._thisUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.thisUpdate = this._thisUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslkeyandcertificateOcspResponseInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certStatus = undefined;
      this._nextUpdate = undefined;
      this._ocspRespFromResponderUrl = undefined;
      this._ocspResponse = undefined;
      this._revocationReason = undefined;
      this._revocationTime = undefined;
      this._thisUpdate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certStatus = value.certStatus;
      this._nextUpdate = value.nextUpdate;
      this._ocspRespFromResponderUrl = value.ocspRespFromResponderUrl;
      this._ocspResponse = value.ocspResponse;
      this._revocationReason = value.revocationReason;
      this._revocationTime = value.revocationTime;
      this._thisUpdate = value.thisUpdate;
    }
  }

  // cert_status - computed: false, optional: false, required: true
  private _certStatus?: string; 
  public get certStatus() {
    return this.getStringAttribute('cert_status');
  }
  public set certStatus(value: string) {
    this._certStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certStatusInput() {
    return this._certStatus;
  }

  // next_update - computed: true, optional: true, required: false
  private _nextUpdate?: string; 
  public get nextUpdate() {
    return this.getStringAttribute('next_update');
  }
  public set nextUpdate(value: string) {
    this._nextUpdate = value;
  }
  public resetNextUpdate() {
    this._nextUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpdateInput() {
    return this._nextUpdate;
  }

  // ocsp_resp_from_responder_url - computed: false, optional: false, required: true
  private _ocspRespFromResponderUrl?: string; 
  public get ocspRespFromResponderUrl() {
    return this.getStringAttribute('ocsp_resp_from_responder_url');
  }
  public set ocspRespFromResponderUrl(value: string) {
    this._ocspRespFromResponderUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspRespFromResponderUrlInput() {
    return this._ocspRespFromResponderUrl;
  }

  // ocsp_response - computed: false, optional: false, required: true
  private _ocspResponse?: string; 
  public get ocspResponse() {
    return this.getStringAttribute('ocsp_response');
  }
  public set ocspResponse(value: string) {
    this._ocspResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseInput() {
    return this._ocspResponse;
  }

  // revocation_reason - computed: true, optional: true, required: false
  private _revocationReason?: string; 
  public get revocationReason() {
    return this.getStringAttribute('revocation_reason');
  }
  public set revocationReason(value: string) {
    this._revocationReason = value;
  }
  public resetRevocationReason() {
    this._revocationReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationReasonInput() {
    return this._revocationReason;
  }

  // revocation_time - computed: true, optional: true, required: false
  private _revocationTime?: string; 
  public get revocationTime() {
    return this.getStringAttribute('revocation_time');
  }
  public set revocationTime(value: string) {
    this._revocationTime = value;
  }
  public resetRevocationTime() {
    this._revocationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationTimeInput() {
    return this._revocationTime;
  }

  // this_update - computed: true, optional: true, required: false
  private _thisUpdate?: string; 
  public get thisUpdate() {
    return this.getStringAttribute('this_update');
  }
  public set thisUpdate(value: string) {
    this._thisUpdate = value;
  }
  public resetThisUpdate() {
    this._thisUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thisUpdateInput() {
    return this._thisUpdate;
  }
}

export class SslkeyandcertificateOcspResponseInfoList extends cdktf.ComplexList {
  public internalValue? : SslkeyandcertificateOcspResponseInfo[] | cdktf.IResolvable

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
  public get(index: number): SslkeyandcertificateOcspResponseInfoOutputReference {
    return new SslkeyandcertificateOcspResponseInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate avi_sslkeyandcertificate}
*/
export class Sslkeyandcertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_sslkeyandcertificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslkeyandcertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslkeyandcertificate to import
  * @param importFromId The id of the existing Sslkeyandcertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslkeyandcertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_sslkeyandcertificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/sslkeyandcertificate avi_sslkeyandcertificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslkeyandcertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SslkeyandcertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_sslkeyandcertificate',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateBase64 = config.certificateBase64;
    this._certificateManagementProfileRef = config.certificateManagementProfileRef;
    this._createdBy = config.createdBy;
    this._enableOcspStapling = config.enableOcspStapling;
    this._enckeyBase64 = config.enckeyBase64;
    this._enckeyName = config.enckeyName;
    this._format = config.format;
    this._hardwaresecuritymodulegroupRef = config.hardwaresecuritymodulegroupRef;
    this._id = config.id;
    this._importKeyToHsm = config.importKeyToHsm;
    this._isFederated = config.isFederated;
    this._key = config.key;
    this._keyBase64 = config.keyBase64;
    this._keyPassphrase = config.keyPassphrase;
    this._name = config.name;
    this._ocspErrorStatus = config.ocspErrorStatus;
    this._ocspResponderUrlListFromCerts = config.ocspResponderUrlListFromCerts;
    this._status = config.status;
    this._tenantRef = config.tenantRef;
    this._type = config.type;
    this._uuid = config.uuid;
    this._caCerts.internalValue = config.caCerts;
    this._certificate.internalValue = config.certificate;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._dynamicParams.internalValue = config.dynamicParams;
    this._keyParams.internalValue = config.keyParams;
    this._markers.internalValue = config.markers;
    this._ocspConfig.internalValue = config.ocspConfig;
    this._ocspResponseInfo.internalValue = config.ocspResponseInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_base64 - computed: false, optional: true, required: false
  private _certificateBase64?: string; 
  public get certificateBase64() {
    return this.getStringAttribute('certificate_base64');
  }
  public set certificateBase64(value: string) {
    this._certificateBase64 = value;
  }
  public resetCertificateBase64() {
    this._certificateBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBase64Input() {
    return this._certificateBase64;
  }

  // certificate_management_profile_ref - computed: true, optional: true, required: false
  private _certificateManagementProfileRef?: string; 
  public get certificateManagementProfileRef() {
    return this.getStringAttribute('certificate_management_profile_ref');
  }
  public set certificateManagementProfileRef(value: string) {
    this._certificateManagementProfileRef = value;
  }
  public resetCertificateManagementProfileRef() {
    this._certificateManagementProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagementProfileRefInput() {
    return this._certificateManagementProfileRef;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // enable_ocsp_stapling - computed: false, optional: true, required: false
  private _enableOcspStapling?: string; 
  public get enableOcspStapling() {
    return this.getStringAttribute('enable_ocsp_stapling');
  }
  public set enableOcspStapling(value: string) {
    this._enableOcspStapling = value;
  }
  public resetEnableOcspStapling() {
    this._enableOcspStapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOcspStaplingInput() {
    return this._enableOcspStapling;
  }

  // enckey_base64 - computed: true, optional: true, required: false
  private _enckeyBase64?: string; 
  public get enckeyBase64() {
    return this.getStringAttribute('enckey_base64');
  }
  public set enckeyBase64(value: string) {
    this._enckeyBase64 = value;
  }
  public resetEnckeyBase64() {
    this._enckeyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enckeyBase64Input() {
    return this._enckeyBase64;
  }

  // enckey_name - computed: true, optional: true, required: false
  private _enckeyName?: string; 
  public get enckeyName() {
    return this.getStringAttribute('enckey_name');
  }
  public set enckeyName(value: string) {
    this._enckeyName = value;
  }
  public resetEnckeyName() {
    this._enckeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enckeyNameInput() {
    return this._enckeyName;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // hardwaresecuritymodulegroup_ref - computed: true, optional: true, required: false
  private _hardwaresecuritymodulegroupRef?: string; 
  public get hardwaresecuritymodulegroupRef() {
    return this.getStringAttribute('hardwaresecuritymodulegroup_ref');
  }
  public set hardwaresecuritymodulegroupRef(value: string) {
    this._hardwaresecuritymodulegroupRef = value;
  }
  public resetHardwaresecuritymodulegroupRef() {
    this._hardwaresecuritymodulegroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwaresecuritymodulegroupRefInput() {
    return this._hardwaresecuritymodulegroupRef;
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

  // import_key_to_hsm - computed: false, optional: true, required: false
  private _importKeyToHsm?: string; 
  public get importKeyToHsm() {
    return this.getStringAttribute('import_key_to_hsm');
  }
  public set importKeyToHsm(value: string) {
    this._importKeyToHsm = value;
  }
  public resetImportKeyToHsm() {
    this._importKeyToHsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importKeyToHsmInput() {
    return this._importKeyToHsm;
  }

  // is_federated - computed: false, optional: true, required: false
  private _isFederated?: string; 
  public get isFederated() {
    return this.getStringAttribute('is_federated');
  }
  public set isFederated(value: string) {
    this._isFederated = value;
  }
  public resetIsFederated() {
    this._isFederated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFederatedInput() {
    return this._isFederated;
  }

  // key - computed: true, optional: true, required: false
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

  // key_base64 - computed: false, optional: true, required: false
  private _keyBase64?: string; 
  public get keyBase64() {
    return this.getStringAttribute('key_base64');
  }
  public set keyBase64(value: string) {
    this._keyBase64 = value;
  }
  public resetKeyBase64() {
    this._keyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBase64Input() {
    return this._keyBase64;
  }

  // key_passphrase - computed: true, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
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

  // ocsp_error_status - computed: true, optional: true, required: false
  private _ocspErrorStatus?: string; 
  public get ocspErrorStatus() {
    return this.getStringAttribute('ocsp_error_status');
  }
  public set ocspErrorStatus(value: string) {
    this._ocspErrorStatus = value;
  }
  public resetOcspErrorStatus() {
    this._ocspErrorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspErrorStatusInput() {
    return this._ocspErrorStatus;
  }

  // ocsp_responder_url_list_from_certs - computed: false, optional: true, required: false
  private _ocspResponderUrlListFromCerts?: string[]; 
  public get ocspResponderUrlListFromCerts() {
    return this.getListAttribute('ocsp_responder_url_list_from_certs');
  }
  public set ocspResponderUrlListFromCerts(value: string[]) {
    this._ocspResponderUrlListFromCerts = value;
  }
  public resetOcspResponderUrlListFromCerts() {
    this._ocspResponderUrlListFromCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponderUrlListFromCertsInput() {
    return this._ocspResponderUrlListFromCerts;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // ca_certs - computed: false, optional: true, required: false
  private _caCerts = new SslkeyandcertificateCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: SslkeyandcertificateCaCerts[] | cdktf.IResolvable) {
    this._caCerts.internalValue = value;
  }
  public resetCaCerts() {
    this._caCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new SslkeyandcertificateCertificateList(this, "certificate", true);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: SslkeyandcertificateCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new SslkeyandcertificateConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: SslkeyandcertificateConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // dynamic_params - computed: false, optional: true, required: false
  private _dynamicParams = new SslkeyandcertificateDynamicParamsList(this, "dynamic_params", false);
  public get dynamicParams() {
    return this._dynamicParams;
  }
  public putDynamicParams(value: SslkeyandcertificateDynamicParams[] | cdktf.IResolvable) {
    this._dynamicParams.internalValue = value;
  }
  public resetDynamicParams() {
    this._dynamicParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParamsInput() {
    return this._dynamicParams.internalValue;
  }

  // key_params - computed: false, optional: true, required: false
  private _keyParams = new SslkeyandcertificateKeyParamsList(this, "key_params", true);
  public get keyParams() {
    return this._keyParams;
  }
  public putKeyParams(value: SslkeyandcertificateKeyParams[] | cdktf.IResolvable) {
    this._keyParams.internalValue = value;
  }
  public resetKeyParams() {
    this._keyParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyParamsInput() {
    return this._keyParams.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new SslkeyandcertificateMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: SslkeyandcertificateMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // ocsp_config - computed: false, optional: true, required: false
  private _ocspConfig = new SslkeyandcertificateOcspConfigList(this, "ocsp_config", true);
  public get ocspConfig() {
    return this._ocspConfig;
  }
  public putOcspConfig(value: SslkeyandcertificateOcspConfig[] | cdktf.IResolvable) {
    this._ocspConfig.internalValue = value;
  }
  public resetOcspConfig() {
    this._ocspConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspConfigInput() {
    return this._ocspConfig.internalValue;
  }

  // ocsp_response_info - computed: false, optional: true, required: false
  private _ocspResponseInfo = new SslkeyandcertificateOcspResponseInfoList(this, "ocsp_response_info", true);
  public get ocspResponseInfo() {
    return this._ocspResponseInfo;
  }
  public putOcspResponseInfo(value: SslkeyandcertificateOcspResponseInfo[] | cdktf.IResolvable) {
    this._ocspResponseInfo.internalValue = value;
  }
  public resetOcspResponseInfo() {
    this._ocspResponseInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseInfoInput() {
    return this._ocspResponseInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_base64: cdktf.stringToTerraform(this._certificateBase64),
      certificate_management_profile_ref: cdktf.stringToTerraform(this._certificateManagementProfileRef),
      created_by: cdktf.stringToTerraform(this._createdBy),
      enable_ocsp_stapling: cdktf.stringToTerraform(this._enableOcspStapling),
      enckey_base64: cdktf.stringToTerraform(this._enckeyBase64),
      enckey_name: cdktf.stringToTerraform(this._enckeyName),
      format: cdktf.stringToTerraform(this._format),
      hardwaresecuritymodulegroup_ref: cdktf.stringToTerraform(this._hardwaresecuritymodulegroupRef),
      id: cdktf.stringToTerraform(this._id),
      import_key_to_hsm: cdktf.stringToTerraform(this._importKeyToHsm),
      is_federated: cdktf.stringToTerraform(this._isFederated),
      key: cdktf.stringToTerraform(this._key),
      key_base64: cdktf.stringToTerraform(this._keyBase64),
      key_passphrase: cdktf.stringToTerraform(this._keyPassphrase),
      name: cdktf.stringToTerraform(this._name),
      ocsp_error_status: cdktf.stringToTerraform(this._ocspErrorStatus),
      ocsp_responder_url_list_from_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ocspResponderUrlListFromCerts),
      status: cdktf.stringToTerraform(this._status),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      ca_certs: cdktf.listMapper(sslkeyandcertificateCaCertsToTerraform, true)(this._caCerts.internalValue),
      certificate: cdktf.listMapper(sslkeyandcertificateCertificateToTerraform, true)(this._certificate.internalValue),
      configpb_attributes: cdktf.listMapper(sslkeyandcertificateConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      dynamic_params: cdktf.listMapper(sslkeyandcertificateDynamicParamsToTerraform, true)(this._dynamicParams.internalValue),
      key_params: cdktf.listMapper(sslkeyandcertificateKeyParamsToTerraform, true)(this._keyParams.internalValue),
      markers: cdktf.listMapper(sslkeyandcertificateMarkersToTerraform, true)(this._markers.internalValue),
      ocsp_config: cdktf.listMapper(sslkeyandcertificateOcspConfigToTerraform, true)(this._ocspConfig.internalValue),
      ocsp_response_info: cdktf.listMapper(sslkeyandcertificateOcspResponseInfoToTerraform, true)(this._ocspResponseInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_base64: {
        value: cdktf.stringToHclTerraform(this._certificateBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_management_profile_ref: {
        value: cdktf.stringToHclTerraform(this._certificateManagementProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ocsp_stapling: {
        value: cdktf.stringToHclTerraform(this._enableOcspStapling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enckey_base64: {
        value: cdktf.stringToHclTerraform(this._enckeyBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enckey_name: {
        value: cdktf.stringToHclTerraform(this._enckeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardwaresecuritymodulegroup_ref: {
        value: cdktf.stringToHclTerraform(this._hardwaresecuritymodulegroupRef),
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
      import_key_to_hsm: {
        value: cdktf.stringToHclTerraform(this._importKeyToHsm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_federated: {
        value: cdktf.stringToHclTerraform(this._isFederated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_base64: {
        value: cdktf.stringToHclTerraform(this._keyBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_passphrase: {
        value: cdktf.stringToHclTerraform(this._keyPassphrase),
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
      ocsp_error_status: {
        value: cdktf.stringToHclTerraform(this._ocspErrorStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_responder_url_list_from_certs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ocspResponderUrlListFromCerts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      ca_certs: {
        value: cdktf.listMapperHcl(sslkeyandcertificateCaCertsToHclTerraform, true)(this._caCerts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslkeyandcertificateCaCertsList",
      },
      certificate: {
        value: cdktf.listMapperHcl(sslkeyandcertificateCertificateToHclTerraform, true)(this._certificate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslkeyandcertificateCertificateList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(sslkeyandcertificateConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslkeyandcertificateConfigpbAttributesList",
      },
      dynamic_params: {
        value: cdktf.listMapperHcl(sslkeyandcertificateDynamicParamsToHclTerraform, true)(this._dynamicParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslkeyandcertificateDynamicParamsList",
      },
      key_params: {
        value: cdktf.listMapperHcl(sslkeyandcertificateKeyParamsToHclTerraform, true)(this._keyParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslkeyandcertificateKeyParamsList",
      },
      markers: {
        value: cdktf.listMapperHcl(sslkeyandcertificateMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslkeyandcertificateMarkersList",
      },
      ocsp_config: {
        value: cdktf.listMapperHcl(sslkeyandcertificateOcspConfigToHclTerraform, true)(this._ocspConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslkeyandcertificateOcspConfigList",
      },
      ocsp_response_info: {
        value: cdktf.listMapperHcl(sslkeyandcertificateOcspResponseInfoToHclTerraform, true)(this._ocspResponseInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslkeyandcertificateOcspResponseInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
