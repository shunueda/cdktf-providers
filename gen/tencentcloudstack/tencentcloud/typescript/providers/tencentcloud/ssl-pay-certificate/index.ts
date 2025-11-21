// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslPayCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Remark name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#alias SslPayCertificate#alias}
  */
  readonly alias?: string;
  /**
  * The base64-encoded certificate confirmation file should be in jpg, jpeg, png, pdf, and the size should be between 1kb and 1.4M. Note: it only works when product_id is set to 8, 9 or 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#confirm_letter SslPayCertificate#confirm_letter}
  */
  readonly confirmLetter?: string;
  /**
  * Number of domain names included in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#domain_num SslPayCertificate#domain_num}
  */
  readonly domainNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#id SslPayCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Certificate commodity ID. Valid value ranges: (3~42). `3` means SecureSite enhanced Enterprise Edition (EV Pro), `4` means SecureSite enhanced (EV), `5` means SecureSite Enterprise Professional Edition (OV Pro), `6` means SecureSite Enterprise (OV), `7` means SecureSite Enterprise Type (OV) wildcard, `8` means Geotrust enhanced (EV), `9` means Geotrust enterprise (OV), `10` means Geotrust enterprise (OV) wildcard, `11` means TrustAsia domain type multi-domain SSL certificate, `12` means TrustAsia domain type ( DV) wildcard, `13` means TrustAsia enterprise wildcard (OV) SSL certificate (D3), `14` means TrustAsia enterprise (OV) SSL certificate (D3), `15` means TrustAsia enterprise multi-domain (OV) SSL certificate (D3), `16` means TrustAsia Enhanced (EV) SSL Certificate (D3), `17` means TrustAsia Enhanced Multiple Domain (EV) SSL Certificate (D3), `18` means GlobalSign Enterprise (OV) SSL Certificate, `19` means GlobalSign Enterprise Wildcard (OV) SSL Certificate, `20` means GlobalSign Enhanced (EV) SSL Certificate, `21` means TrustAsia Enterprise Wildcard Multiple Domain (OV) SSL Certificate (D3), `22` means GlobalSign Enterprise Multiple Domain (OV) SSL Certificate, `23` means GlobalSign Enterprise Multiple Wildcard Domain name (OV) SSL certificate, `24` means GlobalSign enhanced multi-domain (EV) SSL certificate, `25` means Wotrus domain type certificate, `26` means Wotrus domain type multi-domain certificate, `27` means Wotrus domain type wildcard certificate, `28` means Wotrus enterprise type certificate, `29` means Wotrus enterprise multi-domain certificate, `30` means Wotrus enterprise wildcard certificate, `31` means Wotrus enhanced certificate, `32` means Wotrus enhanced multi-domain certificate, `33` means WoTrus National Secret Domain name Certificate, `34` means WoTrus National Secret Domain name Certificate (multiple domain names), `35` WoTrus National Secret Domain name Certificate (wildcard), `37` means WoTrus State Secret Enterprise Certificate, `38` means WoTrus State Secret Enterprise Certificate (multiple domain names), `39` means WoTrus State Secret Enterprise Certificate (wildcard), `40` means WoTrus National secret enhanced certificate, `41` means WoTrus National Secret enhanced Certificate (multiple domain names), `42` means TrustAsia- Domain name Certificate (wildcard multiple domain names), `43` means DNSPod Enterprise (OV) SSL Certificate, `44` means DNSPod- Enterprise (OV) wildcard SSL certificate, `45` means DNSPod Enterprise (OV) Multi-domain name SSL Certificate, `46` means DNSPod enhanced (EV) SSL certificate, `47` means DNSPod enhanced (EV) multi-domain name SSL certificate, `48` means DNSPod Domain name Type (DV) SSL Certificate, `49` means DNSPod Domain name Type (DV) wildcard SSL certificate, `50` means DNSPod domain name type (DV) multi-domain name SSL certificate, `51` means DNSPod (State Secret) Enterprise (OV) SSL certificate, `52` DNSPod (National Secret) Enterprise (OV) wildcard SSL certificate, `53` means DNSPod (National Secret) Enterprise (OV) multi-domain SSL certificate, `54` means DNSPod (National Secret) Domain Name (DV) SSL certificate, `55` means DNSPod (National Secret) Domain Name Type (DV) wildcard SSL certificate, `56` means DNSPod (National Secret) Domain Name Type (DV) multi-domain SSL certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#product_id SslPayCertificate#product_id}
  */
  readonly productId: number;
  /**
  * The ID of project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#project_id SslPayCertificate#project_id}
  */
  readonly projectId?: number;
  /**
  * Certificate period, currently only supports 1 year certificate purchase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#time_span SslPayCertificate#time_span}
  */
  readonly timeSpan?: number;
  /**
  * dv_auths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#dv_auths SslPayCertificate#dv_auths}
  */
  readonly dvAuths?: SslPayCertificateDvAuths[] | cdktf.IResolvable;
  /**
  * information block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#information SslPayCertificate#information}
  */
  readonly information: SslPayCertificateInformation;
}
export interface SslPayCertificateDvAuths {
}

export function sslPayCertificateDvAuthsToTerraform(struct?: SslPayCertificateDvAuths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sslPayCertificateDvAuthsToHclTerraform(struct?: SslPayCertificateDvAuths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SslPayCertificateDvAuthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslPayCertificateDvAuths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslPayCertificateDvAuths | cdktf.IResolvable | undefined) {
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

  // dv_auth_key - computed: true, optional: false, required: false
  public get dvAuthKey() {
    return this.getStringAttribute('dv_auth_key');
  }

  // dv_auth_value - computed: true, optional: false, required: false
  public get dvAuthValue() {
    return this.getStringAttribute('dv_auth_value');
  }

  // dv_auth_verify_type - computed: true, optional: false, required: false
  public get dvAuthVerifyType() {
    return this.getStringAttribute('dv_auth_verify_type');
  }
}

export class SslPayCertificateDvAuthsList extends cdktf.ComplexList {
  public internalValue? : SslPayCertificateDvAuths[] | cdktf.IResolvable

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
  public get(index: number): SslPayCertificateDvAuthsOutputReference {
    return new SslPayCertificateDvAuthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslPayCertificateInformation {
  /**
  * The administrator's email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#admin_email SslPayCertificate#admin_email}
  */
  readonly adminEmail: string;
  /**
  * The first name of the administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#admin_first_name SslPayCertificate#admin_first_name}
  */
  readonly adminFirstName: string;
  /**
  * The last name of the administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#admin_last_name SslPayCertificate#admin_last_name}
  */
  readonly adminLastName: string;
  /**
  * Manager mobile phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#admin_phone_num SslPayCertificate#admin_phone_num}
  */
  readonly adminPhoneNum: string;
  /**
  * Manager position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#admin_position SslPayCertificate#admin_position}
  */
  readonly adminPosition: string;
  /**
  * Domain name for binding certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#certificate_domain SslPayCertificate#certificate_domain}
  */
  readonly certificateDomain: string;
  /**
  * Contact email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#contact_email SslPayCertificate#contact_email}
  */
  readonly contactEmail: string;
  /**
  * Contact first name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#contact_first_name SslPayCertificate#contact_first_name}
  */
  readonly contactFirstName: string;
  /**
  * Contact last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#contact_last_name SslPayCertificate#contact_last_name}
  */
  readonly contactLastName: string;
  /**
  * Contact phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#contact_number SslPayCertificate#contact_number}
  */
  readonly contactNumber: string;
  /**
  * Contact position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#contact_position SslPayCertificate#contact_position}
  */
  readonly contactPosition: string;
  /**
  * CSR content uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#csr_content SslPayCertificate#csr_content}
  */
  readonly csrContent?: string;
  /**
  * CSR generation method. Valid values: `online`, `parse`. `online` means online generation, `parse` means manual upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#csr_type SslPayCertificate#csr_type}
  */
  readonly csrType?: string;
  /**
  * Array of uploaded domain names, multi-domain certificates can be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#domain_list SslPayCertificate#domain_list}
  */
  readonly domainList?: string[];
  /**
  * Private key password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#key_password SslPayCertificate#key_password}
  */
  readonly keyPassword?: string;
  /**
  * Company address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#organization_address SslPayCertificate#organization_address}
  */
  readonly organizationAddress: string;
  /**
  * Company city.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#organization_city SslPayCertificate#organization_city}
  */
  readonly organizationCity: string;
  /**
  * Country name, such as China: CN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#organization_country SslPayCertificate#organization_country}
  */
  readonly organizationCountry: string;
  /**
  * Department name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#organization_division SslPayCertificate#organization_division}
  */
  readonly organizationDivision: string;
  /**
  * Company name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#organization_name SslPayCertificate#organization_name}
  */
  readonly organizationName: string;
  /**
  * The province where the company is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#organization_region SslPayCertificate#organization_region}
  */
  readonly organizationRegion: string;
  /**
  * Company landline area code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#phone_area_code SslPayCertificate#phone_area_code}
  */
  readonly phoneAreaCode: string;
  /**
  * Company landline number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#phone_number SslPayCertificate#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * Company postal code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#postal_code SslPayCertificate#postal_code}
  */
  readonly postalCode: string;
  /**
  * Certificate verification method. Valid values: `DNS_AUTO`, `DNS`, `FILE`. `DNS_AUTO` means automatic DNS verification, this verification type is only supported for domain names resolved by Tencent Cloud and the resolution status is normal, `DNS` means manual DNS verification, `FILE` means file verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#verify_type SslPayCertificate#verify_type}
  */
  readonly verifyType: string;
}

export function sslPayCertificateInformationToTerraform(struct?: SslPayCertificateInformationOutputReference | SslPayCertificateInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    admin_first_name: cdktf.stringToTerraform(struct!.adminFirstName),
    admin_last_name: cdktf.stringToTerraform(struct!.adminLastName),
    admin_phone_num: cdktf.stringToTerraform(struct!.adminPhoneNum),
    admin_position: cdktf.stringToTerraform(struct!.adminPosition),
    certificate_domain: cdktf.stringToTerraform(struct!.certificateDomain),
    contact_email: cdktf.stringToTerraform(struct!.contactEmail),
    contact_first_name: cdktf.stringToTerraform(struct!.contactFirstName),
    contact_last_name: cdktf.stringToTerraform(struct!.contactLastName),
    contact_number: cdktf.stringToTerraform(struct!.contactNumber),
    contact_position: cdktf.stringToTerraform(struct!.contactPosition),
    csr_content: cdktf.stringToTerraform(struct!.csrContent),
    csr_type: cdktf.stringToTerraform(struct!.csrType),
    domain_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainList),
    key_password: cdktf.stringToTerraform(struct!.keyPassword),
    organization_address: cdktf.stringToTerraform(struct!.organizationAddress),
    organization_city: cdktf.stringToTerraform(struct!.organizationCity),
    organization_country: cdktf.stringToTerraform(struct!.organizationCountry),
    organization_division: cdktf.stringToTerraform(struct!.organizationDivision),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    organization_region: cdktf.stringToTerraform(struct!.organizationRegion),
    phone_area_code: cdktf.stringToTerraform(struct!.phoneAreaCode),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    verify_type: cdktf.stringToTerraform(struct!.verifyType),
  }
}


export function sslPayCertificateInformationToHclTerraform(struct?: SslPayCertificateInformationOutputReference | SslPayCertificateInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_first_name: {
      value: cdktf.stringToHclTerraform(struct!.adminFirstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_last_name: {
      value: cdktf.stringToHclTerraform(struct!.adminLastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_phone_num: {
      value: cdktf.stringToHclTerraform(struct!.adminPhoneNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_position: {
      value: cdktf.stringToHclTerraform(struct!.adminPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_domain: {
      value: cdktf.stringToHclTerraform(struct!.certificateDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_email: {
      value: cdktf.stringToHclTerraform(struct!.contactEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_first_name: {
      value: cdktf.stringToHclTerraform(struct!.contactFirstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_last_name: {
      value: cdktf.stringToHclTerraform(struct!.contactLastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_number: {
      value: cdktf.stringToHclTerraform(struct!.contactNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_position: {
      value: cdktf.stringToHclTerraform(struct!.contactPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csr_content: {
      value: cdktf.stringToHclTerraform(struct!.csrContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csr_type: {
      value: cdktf.stringToHclTerraform(struct!.csrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    key_password: {
      value: cdktf.stringToHclTerraform(struct!.keyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_address: {
      value: cdktf.stringToHclTerraform(struct!.organizationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_city: {
      value: cdktf.stringToHclTerraform(struct!.organizationCity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_country: {
      value: cdktf.stringToHclTerraform(struct!.organizationCountry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_division: {
      value: cdktf.stringToHclTerraform(struct!.organizationDivision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_region: {
      value: cdktf.stringToHclTerraform(struct!.organizationRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_area_code: {
      value: cdktf.stringToHclTerraform(struct!.phoneAreaCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_type: {
      value: cdktf.stringToHclTerraform(struct!.verifyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslPayCertificateInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslPayCertificateInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._adminFirstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminFirstName = this._adminFirstName;
    }
    if (this._adminLastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminLastName = this._adminLastName;
    }
    if (this._adminPhoneNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPhoneNum = this._adminPhoneNum;
    }
    if (this._adminPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPosition = this._adminPosition;
    }
    if (this._certificateDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateDomain = this._certificateDomain;
    }
    if (this._contactEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactEmail = this._contactEmail;
    }
    if (this._contactFirstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactFirstName = this._contactFirstName;
    }
    if (this._contactLastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactLastName = this._contactLastName;
    }
    if (this._contactNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactNumber = this._contactNumber;
    }
    if (this._contactPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactPosition = this._contactPosition;
    }
    if (this._csrContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.csrContent = this._csrContent;
    }
    if (this._csrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.csrType = this._csrType;
    }
    if (this._domainList !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainList = this._domainList;
    }
    if (this._keyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassword = this._keyPassword;
    }
    if (this._organizationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationAddress = this._organizationAddress;
    }
    if (this._organizationCity !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationCity = this._organizationCity;
    }
    if (this._organizationCountry !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationCountry = this._organizationCountry;
    }
    if (this._organizationDivision !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationDivision = this._organizationDivision;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._organizationRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationRegion = this._organizationRegion;
    }
    if (this._phoneAreaCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneAreaCode = this._phoneAreaCode;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._verifyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyType = this._verifyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslPayCertificateInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEmail = undefined;
      this._adminFirstName = undefined;
      this._adminLastName = undefined;
      this._adminPhoneNum = undefined;
      this._adminPosition = undefined;
      this._certificateDomain = undefined;
      this._contactEmail = undefined;
      this._contactFirstName = undefined;
      this._contactLastName = undefined;
      this._contactNumber = undefined;
      this._contactPosition = undefined;
      this._csrContent = undefined;
      this._csrType = undefined;
      this._domainList = undefined;
      this._keyPassword = undefined;
      this._organizationAddress = undefined;
      this._organizationCity = undefined;
      this._organizationCountry = undefined;
      this._organizationDivision = undefined;
      this._organizationName = undefined;
      this._organizationRegion = undefined;
      this._phoneAreaCode = undefined;
      this._phoneNumber = undefined;
      this._postalCode = undefined;
      this._verifyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEmail = value.adminEmail;
      this._adminFirstName = value.adminFirstName;
      this._adminLastName = value.adminLastName;
      this._adminPhoneNum = value.adminPhoneNum;
      this._adminPosition = value.adminPosition;
      this._certificateDomain = value.certificateDomain;
      this._contactEmail = value.contactEmail;
      this._contactFirstName = value.contactFirstName;
      this._contactLastName = value.contactLastName;
      this._contactNumber = value.contactNumber;
      this._contactPosition = value.contactPosition;
      this._csrContent = value.csrContent;
      this._csrType = value.csrType;
      this._domainList = value.domainList;
      this._keyPassword = value.keyPassword;
      this._organizationAddress = value.organizationAddress;
      this._organizationCity = value.organizationCity;
      this._organizationCountry = value.organizationCountry;
      this._organizationDivision = value.organizationDivision;
      this._organizationName = value.organizationName;
      this._organizationRegion = value.organizationRegion;
      this._phoneAreaCode = value.phoneAreaCode;
      this._phoneNumber = value.phoneNumber;
      this._postalCode = value.postalCode;
      this._verifyType = value.verifyType;
    }
  }

  // admin_email - computed: false, optional: false, required: true
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
  }

  // admin_first_name - computed: false, optional: false, required: true
  private _adminFirstName?: string; 
  public get adminFirstName() {
    return this.getStringAttribute('admin_first_name');
  }
  public set adminFirstName(value: string) {
    this._adminFirstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminFirstNameInput() {
    return this._adminFirstName;
  }

  // admin_last_name - computed: false, optional: false, required: true
  private _adminLastName?: string; 
  public get adminLastName() {
    return this.getStringAttribute('admin_last_name');
  }
  public set adminLastName(value: string) {
    this._adminLastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLastNameInput() {
    return this._adminLastName;
  }

  // admin_phone_num - computed: false, optional: false, required: true
  private _adminPhoneNum?: string; 
  public get adminPhoneNum() {
    return this.getStringAttribute('admin_phone_num');
  }
  public set adminPhoneNum(value: string) {
    this._adminPhoneNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPhoneNumInput() {
    return this._adminPhoneNum;
  }

  // admin_position - computed: false, optional: false, required: true
  private _adminPosition?: string; 
  public get adminPosition() {
    return this.getStringAttribute('admin_position');
  }
  public set adminPosition(value: string) {
    this._adminPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPositionInput() {
    return this._adminPosition;
  }

  // certificate_domain - computed: false, optional: false, required: true
  private _certificateDomain?: string; 
  public get certificateDomain() {
    return this.getStringAttribute('certificate_domain');
  }
  public set certificateDomain(value: string) {
    this._certificateDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDomainInput() {
    return this._certificateDomain;
  }

  // contact_email - computed: false, optional: false, required: true
  private _contactEmail?: string; 
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }
  public set contactEmail(value: string) {
    this._contactEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailInput() {
    return this._contactEmail;
  }

  // contact_first_name - computed: false, optional: false, required: true
  private _contactFirstName?: string; 
  public get contactFirstName() {
    return this.getStringAttribute('contact_first_name');
  }
  public set contactFirstName(value: string) {
    this._contactFirstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactFirstNameInput() {
    return this._contactFirstName;
  }

  // contact_last_name - computed: false, optional: false, required: true
  private _contactLastName?: string; 
  public get contactLastName() {
    return this.getStringAttribute('contact_last_name');
  }
  public set contactLastName(value: string) {
    this._contactLastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactLastNameInput() {
    return this._contactLastName;
  }

  // contact_number - computed: false, optional: false, required: true
  private _contactNumber?: string; 
  public get contactNumber() {
    return this.getStringAttribute('contact_number');
  }
  public set contactNumber(value: string) {
    this._contactNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactNumberInput() {
    return this._contactNumber;
  }

  // contact_position - computed: false, optional: false, required: true
  private _contactPosition?: string; 
  public get contactPosition() {
    return this.getStringAttribute('contact_position');
  }
  public set contactPosition(value: string) {
    this._contactPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPositionInput() {
    return this._contactPosition;
  }

  // csr_content - computed: false, optional: true, required: false
  private _csrContent?: string; 
  public get csrContent() {
    return this.getStringAttribute('csr_content');
  }
  public set csrContent(value: string) {
    this._csrContent = value;
  }
  public resetCsrContent() {
    this._csrContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrContentInput() {
    return this._csrContent;
  }

  // csr_type - computed: false, optional: true, required: false
  private _csrType?: string; 
  public get csrType() {
    return this.getStringAttribute('csr_type');
  }
  public set csrType(value: string) {
    this._csrType = value;
  }
  public resetCsrType() {
    this._csrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrTypeInput() {
    return this._csrType;
  }

  // domain_list - computed: false, optional: true, required: false
  private _domainList?: string[]; 
  public get domainList() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_list'));
  }
  public set domainList(value: string[]) {
    this._domainList = value;
  }
  public resetDomainList() {
    this._domainList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList;
  }

  // key_password - computed: false, optional: true, required: false
  private _keyPassword?: string; 
  public get keyPassword() {
    return this.getStringAttribute('key_password');
  }
  public set keyPassword(value: string) {
    this._keyPassword = value;
  }
  public resetKeyPassword() {
    this._keyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordInput() {
    return this._keyPassword;
  }

  // organization_address - computed: false, optional: false, required: true
  private _organizationAddress?: string; 
  public get organizationAddress() {
    return this.getStringAttribute('organization_address');
  }
  public set organizationAddress(value: string) {
    this._organizationAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationAddressInput() {
    return this._organizationAddress;
  }

  // organization_city - computed: false, optional: false, required: true
  private _organizationCity?: string; 
  public get organizationCity() {
    return this.getStringAttribute('organization_city');
  }
  public set organizationCity(value: string) {
    this._organizationCity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCityInput() {
    return this._organizationCity;
  }

  // organization_country - computed: false, optional: false, required: true
  private _organizationCountry?: string; 
  public get organizationCountry() {
    return this.getStringAttribute('organization_country');
  }
  public set organizationCountry(value: string) {
    this._organizationCountry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCountryInput() {
    return this._organizationCountry;
  }

  // organization_division - computed: false, optional: false, required: true
  private _organizationDivision?: string; 
  public get organizationDivision() {
    return this.getStringAttribute('organization_division');
  }
  public set organizationDivision(value: string) {
    this._organizationDivision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationDivisionInput() {
    return this._organizationDivision;
  }

  // organization_name - computed: false, optional: false, required: true
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // organization_region - computed: false, optional: false, required: true
  private _organizationRegion?: string; 
  public get organizationRegion() {
    return this.getStringAttribute('organization_region');
  }
  public set organizationRegion(value: string) {
    this._organizationRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRegionInput() {
    return this._organizationRegion;
  }

  // phone_area_code - computed: false, optional: false, required: true
  private _phoneAreaCode?: string; 
  public get phoneAreaCode() {
    return this.getStringAttribute('phone_area_code');
  }
  public set phoneAreaCode(value: string) {
    this._phoneAreaCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneAreaCodeInput() {
    return this._phoneAreaCode;
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // postal_code - computed: false, optional: false, required: true
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // verify_type - computed: false, optional: false, required: true
  private _verifyType?: string; 
  public get verifyType() {
    return this.getStringAttribute('verify_type');
  }
  public set verifyType(value: string) {
    this._verifyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTypeInput() {
    return this._verifyType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate tencentcloud_ssl_pay_certificate}
*/
export class SslPayCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_pay_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslPayCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslPayCertificate to import
  * @param importFromId The id of the existing SslPayCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslPayCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_pay_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_pay_certificate tencentcloud_ssl_pay_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslPayCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SslPayCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_pay_certificate',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._confirmLetter = config.confirmLetter;
    this._domainNum = config.domainNum;
    this._id = config.id;
    this._productId = config.productId;
    this._projectId = config.projectId;
    this._timeSpan = config.timeSpan;
    this._dvAuths.internalValue = config.dvAuths;
    this._information.internalValue = config.information;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // confirm_letter - computed: false, optional: true, required: false
  private _confirmLetter?: string; 
  public get confirmLetter() {
    return this.getStringAttribute('confirm_letter');
  }
  public set confirmLetter(value: string) {
    this._confirmLetter = value;
  }
  public resetConfirmLetter() {
    this._confirmLetter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmLetterInput() {
    return this._confirmLetter;
  }

  // domain_num - computed: false, optional: false, required: true
  private _domainNum?: number; 
  public get domainNum() {
    return this.getNumberAttribute('domain_num');
  }
  public set domainNum(value: number) {
    this._domainNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNumInput() {
    return this._domainNum;
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

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: number; 
  public get productId() {
    return this.getNumberAttribute('product_id');
  }
  public set productId(value: number) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // time_span - computed: false, optional: true, required: false
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  public resetTimeSpan() {
    this._timeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // dv_auths - computed: false, optional: true, required: false
  private _dvAuths = new SslPayCertificateDvAuthsList(this, "dv_auths", false);
  public get dvAuths() {
    return this._dvAuths;
  }
  public putDvAuths(value: SslPayCertificateDvAuths[] | cdktf.IResolvable) {
    this._dvAuths.internalValue = value;
  }
  public resetDvAuths() {
    this._dvAuths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvAuthsInput() {
    return this._dvAuths.internalValue;
  }

  // information - computed: false, optional: false, required: true
  private _information = new SslPayCertificateInformationOutputReference(this, "information");
  public get information() {
    return this._information;
  }
  public putInformation(value: SslPayCertificateInformation) {
    this._information.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get informationInput() {
    return this._information.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      confirm_letter: cdktf.stringToTerraform(this._confirmLetter),
      domain_num: cdktf.numberToTerraform(this._domainNum),
      id: cdktf.stringToTerraform(this._id),
      product_id: cdktf.numberToTerraform(this._productId),
      project_id: cdktf.numberToTerraform(this._projectId),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      dv_auths: cdktf.listMapper(sslPayCertificateDvAuthsToTerraform, true)(this._dvAuths.internalValue),
      information: sslPayCertificateInformationToTerraform(this._information.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confirm_letter: {
        value: cdktf.stringToHclTerraform(this._confirmLetter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_num: {
        value: cdktf.numberToHclTerraform(this._domainNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.numberToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dv_auths: {
        value: cdktf.listMapperHcl(sslPayCertificateDvAuthsToHclTerraform, true)(this._dvAuths.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslPayCertificateDvAuthsList",
      },
      information: {
        value: sslPayCertificateInformationToHclTerraform(this._information.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslPayCertificateInformationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
