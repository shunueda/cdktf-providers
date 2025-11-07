// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdCertificateRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Common Name or FQDN associated with the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#common_name AdCertificateRequest#common_name}
  */
  readonly commonName: string;
  /**
  * The human-readable name of the resource. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#display_name AdCertificateRequest#display_name}
  */
  readonly displayName: string;
  /**
  * Specifies the type of certificate request - Certificate Signing Request (CSR)/ Self Signed Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#type AdCertificateRequest#type}
  */
  readonly type: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#details AdCertificateRequest#details}
  */
  readonly details: AdCertificateRequestDetails;
}
export interface AdCertificateRequestDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#country AdCertificateRequest#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#locality AdCertificateRequest#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#organization AdCertificateRequest#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#organizational_unit AdCertificateRequest#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#province AdCertificateRequest#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#ttl_days AdCertificateRequest#ttl_days}
  */
  readonly ttlDays?: number;
}

export function adCertificateRequestDetailsToTerraform(struct?: AdCertificateRequestDetailsOutputReference | AdCertificateRequestDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    province: cdktf.stringToTerraform(struct!.province),
    ttl_days: cdktf.numberToTerraform(struct!.ttlDays),
  }
}


export function adCertificateRequestDetailsToHclTerraform(struct?: AdCertificateRequestDetailsOutputReference | AdCertificateRequestDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
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
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl_days: {
      value: cdktf.numberToHclTerraform(struct!.ttlDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdCertificateRequestDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdCertificateRequestDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._ttlDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlDays = this._ttlDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdCertificateRequestDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._country = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._province = undefined;
      this._ttlDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._country = value.country;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._province = value.province;
      this._ttlDays = value.ttlDays;
    }
  }

  // country - computed: false, optional: true, required: false
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

  // locality - computed: false, optional: true, required: false
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

  // organization - computed: false, optional: true, required: false
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

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // ttl_days - computed: false, optional: true, required: false
  private _ttlDays?: number; 
  public get ttlDays() {
    return this.getNumberAttribute('ttl_days');
  }
  public set ttlDays(value: number) {
    this._ttlDays = value;
  }
  public resetTtlDays() {
    this._ttlDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlDaysInput() {
    return this._ttlDays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request oktapam_ad_certificate_request}
*/
export class AdCertificateRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_ad_certificate_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdCertificateRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdCertificateRequest to import
  * @param importFromId The id of the existing AdCertificateRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdCertificateRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_ad_certificate_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_certificate_request oktapam_ad_certificate_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdCertificateRequestConfig
  */
  public constructor(scope: Construct, id: string, config: AdCertificateRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_ad_certificate_request',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commonName = config.commonName;
    this._displayName = config.displayName;
    this._type = config.type;
    this._details.internalValue = config.details;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enterprise_signed - computed: true, optional: false, required: false
  public get enterpriseSigned() {
    return this.getBooleanAttribute('enterprise_signed');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // details - computed: false, optional: false, required: true
  private _details = new AdCertificateRequestDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: AdCertificateRequestDetails) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      common_name: cdktf.stringToTerraform(this._commonName),
      display_name: cdktf.stringToTerraform(this._displayName),
      type: cdktf.stringToTerraform(this._type),
      details: adCertificateRequestDetailsToTerraform(this._details.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      details: {
        value: adCertificateRequestDetailsToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdCertificateRequestDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
