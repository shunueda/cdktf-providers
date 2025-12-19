// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiCmpCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accept missing or invalid protection of negative responses(CA likes EJCBA tends to not protect negative responses)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#allow_unprotected_errors PkiCmpCert#allow_unprotected_errors}
  */
  readonly allowUnprotectedErrors?: number;
  /**
  * Specify the type of certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#cert_type PkiCmpCert#cert_type}
  */
  readonly certType?: number;
  /**
  * The specific CA to trust while verifying signature of CMP response message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#cmp_trusted_ca PkiCmpCert#cmp_trusted_ca}
  */
  readonly cmpTrustedCa?: string;
  /**
  * The specific CMP server certificate to use and directly trust when verifying signature of CMP response message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#cmp_trusted_cert PkiCmpCert#cmp_trusted_cert}
  */
  readonly cmpTrustedCert?: string;
  /**
  * '256': Key size 256 bits; '384': Key size 384 bits(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#ec_key_length PkiCmpCert#ec_key_length}
  */
  readonly ecKeyLength?: string;
  /**
  * ECDSA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#ecdsa_type PkiCmpCert#ecdsa_type}
  */
  readonly ecdsaType?: number;
  /**
  * Initiates enrollment of device with the CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#enroll PkiCmpCert#enroll}
  */
  readonly enroll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#id PkiCmpCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Level for logging output of CMP commands(default 1 and detailed 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#log_level PkiCmpCert#log_level}
  */
  readonly logLevel?: number;
  /**
  * Maximum time in seconds a(n) enrollment/key update may take (default 120)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#max_polltime PkiCmpCert#max_polltime}
  */
  readonly maxPolltime?: number;
  /**
  * Periodic interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#minute PkiCmpCert#minute}
  */
  readonly minute?: number;
  /**
  * Specify Certificate name to be enrolled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#name PkiCmpCert#name}
  */
  readonly name: string;
  /**
  * Distinguished Name of the CMP message recipient, i.e., the CMP server (usually a CA or RA entity)) (DN OIDis case sensitive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#recipient_dn PkiCmpCert#recipient_dn}
  */
  readonly recipientDn?: string;
  /**
  * Specify interval before certificate expiry to renew the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#renew_before PkiCmpCert#renew_before}
  */
  readonly renewBefore?: number;
  /**
  * 'hour': Number of hours before cert expiry; 'day': Number of days before cert expiry; 'week': Number of weeks before cert expiry; 'month': Number of months before cert expiry(1 month=30 days);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#renew_before_type PkiCmpCert#renew_before_type}
  */
  readonly renewBeforeType?: string;
  /**
  * Value of renewal period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#renew_before_value PkiCmpCert#renew_before_value}
  */
  readonly renewBeforeValue?: number;
  /**
  * Specify periodic interval in which to renew the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#renew_every PkiCmpCert#renew_every}
  */
  readonly renewEvery?: number;
  /**
  * 'hour': Periodic interval in hours; 'day': Periodic interval in days; 'week': Periodic interval in weeks; 'month': Periodic interval in months(1 month=30 days);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#renew_every_type PkiCmpCert#renew_every_type}
  */
  readonly renewEveryType?: string;
  /**
  * Value of renewal period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#renew_every_value PkiCmpCert#renew_every_value}
  */
  readonly renewEveryValue?: number;
  /**
  * '1024': Key size 1024 bits; '2048': Key size 2048 bits(default); '4096': Key size 4096 bits; '8192': Key size 8192 bits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#rsa_key_length PkiCmpCert#rsa_key_length}
  */
  readonly rsaKeyLength?: string;
  /**
  * RSA certificate (default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#rsa_type PkiCmpCert#rsa_type}
  */
  readonly rsaType?: number;
  /**
  * Specify the pre-shared secret used to enroll the device's certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#secret PkiCmpCert#secret}
  */
  readonly secret?: number;
  /**
  * pre-shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#secret_string PkiCmpCert#secret_string}
  */
  readonly secretString?: string;
  /**
  * Distinguished Name to use while enrolling the certificate(For EJBCA CA, this is the subject DN of an End Entity) (DN OID is case sensitive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#subject_dn PkiCmpCert#subject_dn}
  */
  readonly subjectDn?: string;
  /**
  * CMP server's absolute URL(http(s)://host:[port]/path), path is the location to use for the CMP server(aka CMP alias)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#url PkiCmpCert#url}
  */
  readonly url?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#user_tag PkiCmpCert#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#uuid PkiCmpCert#uuid}
  */
  readonly uuid?: string;
  /**
  * subject_alternate_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#subject_alternate_name PkiCmpCert#subject_alternate_name}
  */
  readonly subjectAlternateName?: PkiCmpCertSubjectAlternateName;
}
export interface PkiCmpCertSubjectAlternateName {
  /**
  * 'email': Enter e-mail address of the subject; 'dn': Enter hostname of the subject; 'ip': Enter IP address of the subject;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#san_type PkiCmpCert#san_type}
  */
  readonly sanType?: string;
  /**
  * Value of subject-alternate-name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#san_value PkiCmpCert#san_value}
  */
  readonly sanValue?: string;
}

export function pkiCmpCertSubjectAlternateNameToTerraform(struct?: PkiCmpCertSubjectAlternateNameOutputReference | PkiCmpCertSubjectAlternateName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    san_type: cdktf.stringToTerraform(struct!.sanType),
    san_value: cdktf.stringToTerraform(struct!.sanValue),
  }
}


export function pkiCmpCertSubjectAlternateNameToHclTerraform(struct?: PkiCmpCertSubjectAlternateNameOutputReference | PkiCmpCertSubjectAlternateName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    san_type: {
      value: cdktf.stringToHclTerraform(struct!.sanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    san_value: {
      value: cdktf.stringToHclTerraform(struct!.sanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PkiCmpCertSubjectAlternateNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PkiCmpCertSubjectAlternateName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanType = this._sanType;
    }
    if (this._sanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanValue = this._sanValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PkiCmpCertSubjectAlternateName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sanType = undefined;
      this._sanValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sanType = value.sanType;
      this._sanValue = value.sanValue;
    }
  }

  // san_type - computed: false, optional: true, required: false
  private _sanType?: string; 
  public get sanType() {
    return this.getStringAttribute('san_type');
  }
  public set sanType(value: string) {
    this._sanType = value;
  }
  public resetSanType() {
    this._sanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanTypeInput() {
    return this._sanType;
  }

  // san_value - computed: false, optional: true, required: false
  private _sanValue?: string; 
  public get sanValue() {
    return this.getStringAttribute('san_value');
  }
  public set sanValue(value: string) {
    this._sanValue = value;
  }
  public resetSanValue() {
    this._sanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanValueInput() {
    return this._sanValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert thunder_pki_cmp_cert}
*/
export class PkiCmpCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_pki_cmp_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiCmpCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiCmpCert to import
  * @param importFromId The id of the existing PkiCmpCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiCmpCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_pki_cmp_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_cmp_cert thunder_pki_cmp_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiCmpCertConfig
  */
  public constructor(scope: Construct, id: string, config: PkiCmpCertConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_pki_cmp_cert',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUnprotectedErrors = config.allowUnprotectedErrors;
    this._certType = config.certType;
    this._cmpTrustedCa = config.cmpTrustedCa;
    this._cmpTrustedCert = config.cmpTrustedCert;
    this._ecKeyLength = config.ecKeyLength;
    this._ecdsaType = config.ecdsaType;
    this._enroll = config.enroll;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._maxPolltime = config.maxPolltime;
    this._minute = config.minute;
    this._name = config.name;
    this._recipientDn = config.recipientDn;
    this._renewBefore = config.renewBefore;
    this._renewBeforeType = config.renewBeforeType;
    this._renewBeforeValue = config.renewBeforeValue;
    this._renewEvery = config.renewEvery;
    this._renewEveryType = config.renewEveryType;
    this._renewEveryValue = config.renewEveryValue;
    this._rsaKeyLength = config.rsaKeyLength;
    this._rsaType = config.rsaType;
    this._secret = config.secret;
    this._secretString = config.secretString;
    this._subjectDn = config.subjectDn;
    this._url = config.url;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._subjectAlternateName.internalValue = config.subjectAlternateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unprotected_errors - computed: false, optional: true, required: false
  private _allowUnprotectedErrors?: number; 
  public get allowUnprotectedErrors() {
    return this.getNumberAttribute('allow_unprotected_errors');
  }
  public set allowUnprotectedErrors(value: number) {
    this._allowUnprotectedErrors = value;
  }
  public resetAllowUnprotectedErrors() {
    this._allowUnprotectedErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnprotectedErrorsInput() {
    return this._allowUnprotectedErrors;
  }

  // cert_type - computed: false, optional: true, required: false
  private _certType?: number; 
  public get certType() {
    return this.getNumberAttribute('cert_type');
  }
  public set certType(value: number) {
    this._certType = value;
  }
  public resetCertType() {
    this._certType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // cmp_trusted_ca - computed: false, optional: true, required: false
  private _cmpTrustedCa?: string; 
  public get cmpTrustedCa() {
    return this.getStringAttribute('cmp_trusted_ca');
  }
  public set cmpTrustedCa(value: string) {
    this._cmpTrustedCa = value;
  }
  public resetCmpTrustedCa() {
    this._cmpTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpTrustedCaInput() {
    return this._cmpTrustedCa;
  }

  // cmp_trusted_cert - computed: false, optional: true, required: false
  private _cmpTrustedCert?: string; 
  public get cmpTrustedCert() {
    return this.getStringAttribute('cmp_trusted_cert');
  }
  public set cmpTrustedCert(value: string) {
    this._cmpTrustedCert = value;
  }
  public resetCmpTrustedCert() {
    this._cmpTrustedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpTrustedCertInput() {
    return this._cmpTrustedCert;
  }

  // ec_key_length - computed: false, optional: true, required: false
  private _ecKeyLength?: string; 
  public get ecKeyLength() {
    return this.getStringAttribute('ec_key_length');
  }
  public set ecKeyLength(value: string) {
    this._ecKeyLength = value;
  }
  public resetEcKeyLength() {
    this._ecKeyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecKeyLengthInput() {
    return this._ecKeyLength;
  }

  // ecdsa_type - computed: false, optional: true, required: false
  private _ecdsaType?: number; 
  public get ecdsaType() {
    return this.getNumberAttribute('ecdsa_type');
  }
  public set ecdsaType(value: number) {
    this._ecdsaType = value;
  }
  public resetEcdsaType() {
    this._ecdsaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdsaTypeInput() {
    return this._ecdsaType;
  }

  // enroll - computed: false, optional: true, required: false
  private _enroll?: number; 
  public get enroll() {
    return this.getNumberAttribute('enroll');
  }
  public set enroll(value: number) {
    this._enroll = value;
  }
  public resetEnroll() {
    this._enroll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollInput() {
    return this._enroll;
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

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: number; 
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }
  public set logLevel(value: number) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_polltime - computed: false, optional: true, required: false
  private _maxPolltime?: number; 
  public get maxPolltime() {
    return this.getNumberAttribute('max_polltime');
  }
  public set maxPolltime(value: number) {
    this._maxPolltime = value;
  }
  public resetMaxPolltime() {
    this._maxPolltime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPolltimeInput() {
    return this._maxPolltime;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
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

  // recipient_dn - computed: false, optional: true, required: false
  private _recipientDn?: string; 
  public get recipientDn() {
    return this.getStringAttribute('recipient_dn');
  }
  public set recipientDn(value: string) {
    this._recipientDn = value;
  }
  public resetRecipientDn() {
    this._recipientDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientDnInput() {
    return this._recipientDn;
  }

  // renew_before - computed: false, optional: true, required: false
  private _renewBefore?: number; 
  public get renewBefore() {
    return this.getNumberAttribute('renew_before');
  }
  public set renewBefore(value: number) {
    this._renewBefore = value;
  }
  public resetRenewBefore() {
    this._renewBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeInput() {
    return this._renewBefore;
  }

  // renew_before_type - computed: false, optional: true, required: false
  private _renewBeforeType?: string; 
  public get renewBeforeType() {
    return this.getStringAttribute('renew_before_type');
  }
  public set renewBeforeType(value: string) {
    this._renewBeforeType = value;
  }
  public resetRenewBeforeType() {
    this._renewBeforeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeTypeInput() {
    return this._renewBeforeType;
  }

  // renew_before_value - computed: false, optional: true, required: false
  private _renewBeforeValue?: number; 
  public get renewBeforeValue() {
    return this.getNumberAttribute('renew_before_value');
  }
  public set renewBeforeValue(value: number) {
    this._renewBeforeValue = value;
  }
  public resetRenewBeforeValue() {
    this._renewBeforeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeValueInput() {
    return this._renewBeforeValue;
  }

  // renew_every - computed: false, optional: true, required: false
  private _renewEvery?: number; 
  public get renewEvery() {
    return this.getNumberAttribute('renew_every');
  }
  public set renewEvery(value: number) {
    this._renewEvery = value;
  }
  public resetRenewEvery() {
    this._renewEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewEveryInput() {
    return this._renewEvery;
  }

  // renew_every_type - computed: false, optional: true, required: false
  private _renewEveryType?: string; 
  public get renewEveryType() {
    return this.getStringAttribute('renew_every_type');
  }
  public set renewEveryType(value: string) {
    this._renewEveryType = value;
  }
  public resetRenewEveryType() {
    this._renewEveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewEveryTypeInput() {
    return this._renewEveryType;
  }

  // renew_every_value - computed: false, optional: true, required: false
  private _renewEveryValue?: number; 
  public get renewEveryValue() {
    return this.getNumberAttribute('renew_every_value');
  }
  public set renewEveryValue(value: number) {
    this._renewEveryValue = value;
  }
  public resetRenewEveryValue() {
    this._renewEveryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewEveryValueInput() {
    return this._renewEveryValue;
  }

  // rsa_key_length - computed: false, optional: true, required: false
  private _rsaKeyLength?: string; 
  public get rsaKeyLength() {
    return this.getStringAttribute('rsa_key_length');
  }
  public set rsaKeyLength(value: string) {
    this._rsaKeyLength = value;
  }
  public resetRsaKeyLength() {
    this._rsaKeyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaKeyLengthInput() {
    return this._rsaKeyLength;
  }

  // rsa_type - computed: false, optional: true, required: false
  private _rsaType?: number; 
  public get rsaType() {
    return this.getNumberAttribute('rsa_type');
  }
  public set rsaType(value: number) {
    this._rsaType = value;
  }
  public resetRsaType() {
    this._rsaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaTypeInput() {
    return this._rsaType;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: number; 
  public get secret() {
    return this.getNumberAttribute('secret');
  }
  public set secret(value: number) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }

  // subject_dn - computed: false, optional: true, required: false
  private _subjectDn?: string; 
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }
  public set subjectDn(value: string) {
    this._subjectDn = value;
  }
  public resetSubjectDn() {
    this._subjectDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectDnInput() {
    return this._subjectDn;
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

  // subject_alternate_name - computed: false, optional: true, required: false
  private _subjectAlternateName = new PkiCmpCertSubjectAlternateNameOutputReference(this, "subject_alternate_name");
  public get subjectAlternateName() {
    return this._subjectAlternateName;
  }
  public putSubjectAlternateName(value: PkiCmpCertSubjectAlternateName) {
    this._subjectAlternateName.internalValue = value;
  }
  public resetSubjectAlternateName() {
    this._subjectAlternateName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternateNameInput() {
    return this._subjectAlternateName.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unprotected_errors: cdktf.numberToTerraform(this._allowUnprotectedErrors),
      cert_type: cdktf.numberToTerraform(this._certType),
      cmp_trusted_ca: cdktf.stringToTerraform(this._cmpTrustedCa),
      cmp_trusted_cert: cdktf.stringToTerraform(this._cmpTrustedCert),
      ec_key_length: cdktf.stringToTerraform(this._ecKeyLength),
      ecdsa_type: cdktf.numberToTerraform(this._ecdsaType),
      enroll: cdktf.numberToTerraform(this._enroll),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.numberToTerraform(this._logLevel),
      max_polltime: cdktf.numberToTerraform(this._maxPolltime),
      minute: cdktf.numberToTerraform(this._minute),
      name: cdktf.stringToTerraform(this._name),
      recipient_dn: cdktf.stringToTerraform(this._recipientDn),
      renew_before: cdktf.numberToTerraform(this._renewBefore),
      renew_before_type: cdktf.stringToTerraform(this._renewBeforeType),
      renew_before_value: cdktf.numberToTerraform(this._renewBeforeValue),
      renew_every: cdktf.numberToTerraform(this._renewEvery),
      renew_every_type: cdktf.stringToTerraform(this._renewEveryType),
      renew_every_value: cdktf.numberToTerraform(this._renewEveryValue),
      rsa_key_length: cdktf.stringToTerraform(this._rsaKeyLength),
      rsa_type: cdktf.numberToTerraform(this._rsaType),
      secret: cdktf.numberToTerraform(this._secret),
      secret_string: cdktf.stringToTerraform(this._secretString),
      subject_dn: cdktf.stringToTerraform(this._subjectDn),
      url: cdktf.stringToTerraform(this._url),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      subject_alternate_name: pkiCmpCertSubjectAlternateNameToTerraform(this._subjectAlternateName.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unprotected_errors: {
        value: cdktf.numberToHclTerraform(this._allowUnprotectedErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cert_type: {
        value: cdktf.numberToHclTerraform(this._certType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cmp_trusted_ca: {
        value: cdktf.stringToHclTerraform(this._cmpTrustedCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmp_trusted_cert: {
        value: cdktf.stringToHclTerraform(this._cmpTrustedCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec_key_length: {
        value: cdktf.stringToHclTerraform(this._ecKeyLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecdsa_type: {
        value: cdktf.numberToHclTerraform(this._ecdsaType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enroll: {
        value: cdktf.numberToHclTerraform(this._enroll),
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
      log_level: {
        value: cdktf.numberToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_polltime: {
        value: cdktf.numberToHclTerraform(this._maxPolltime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minute: {
        value: cdktf.numberToHclTerraform(this._minute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipient_dn: {
        value: cdktf.stringToHclTerraform(this._recipientDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_before: {
        value: cdktf.numberToHclTerraform(this._renewBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renew_before_type: {
        value: cdktf.stringToHclTerraform(this._renewBeforeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_before_value: {
        value: cdktf.numberToHclTerraform(this._renewBeforeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renew_every: {
        value: cdktf.numberToHclTerraform(this._renewEvery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renew_every_type: {
        value: cdktf.stringToHclTerraform(this._renewEveryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_every_value: {
        value: cdktf.numberToHclTerraform(this._renewEveryValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rsa_key_length: {
        value: cdktf.stringToHclTerraform(this._rsaKeyLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_type: {
        value: cdktf.numberToHclTerraform(this._rsaType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret: {
        value: cdktf.numberToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_dn: {
        value: cdktf.stringToHclTerraform(this._subjectDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
      subject_alternate_name: {
        value: pkiCmpCertSubjectAlternateNameToHclTerraform(this._subjectAlternateName.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PkiCmpCertSubjectAlternateNameList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
