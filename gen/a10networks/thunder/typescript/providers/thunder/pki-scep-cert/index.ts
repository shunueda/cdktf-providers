// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiScepCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Validity of self-signed certificate (default 1825)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#days PkiScepCert#days}
  */
  readonly days?: number;
  /**
  * Specify the Distinguished-Name to use while enrolling the certificate (Format: "cn=user, dc=example, dc=com")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#dn PkiScepCert#dn}
  */
  readonly dn?: string;
  /**
  * End date of self-signed certificate in YYMMDDHHMMSS format specified in UTC time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#end_date PkiScepCert#end_date}
  */
  readonly endDate?: string;
  /**
  * Initiates enrollment of device with the CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#enroll PkiScepCert#enroll}
  */
  readonly enroll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#id PkiScepCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval time in seconds to poll when SCEP response is PENDING (default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#interval PkiScepCert#interval}
  */
  readonly interval?: number;
  /**
  * '1024': Key size 1024 bits; '2048': Key size 2048 bits(default); '4096': Key size 4096 bits; '8192': Key size 8192 bits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#key_length PkiScepCert#key_length}
  */
  readonly keyLength?: string;
  /**
  * level for logging output of scepclient commands(default 1 and detailed 4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#log_level PkiScepCert#log_level}
  */
  readonly logLevel?: number;
  /**
  * Maximum time in seconds to poll when SCEP response is PENDING (default 180)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#max_polltime PkiScepCert#max_polltime}
  */
  readonly maxPolltime?: number;
  /**
  * 'GET': GET request; 'POST': POST request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#method PkiScepCert#method}
  */
  readonly method?: string;
  /**
  * Periodic interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#minute PkiScepCert#minute}
  */
  readonly minute?: number;
  /**
  * Specify Certificate name to be enrolled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#name PkiScepCert#name}
  */
  readonly name: string;
  /**
  * Specify the password used to enroll the device's certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#password PkiScepCert#password}
  */
  readonly password?: number;
  /**
  * Specify interval before certificate expiry to renew the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#renew_before PkiScepCert#renew_before}
  */
  readonly renewBefore?: number;
  /**
  * 'hour': Number of hours before cert expiry; 'day': Number of days before cert expiry; 'week': Number of weeks before cert expiry; 'month': Number of months before cert expiry(1 month=30 days);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#renew_before_type PkiScepCert#renew_before_type}
  */
  readonly renewBeforeType?: string;
  /**
  * Value of renewal period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#renew_before_value PkiScepCert#renew_before_value}
  */
  readonly renewBeforeValue?: number;
  /**
  * Specify periodic interval in which to renew the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#renew_every PkiScepCert#renew_every}
  */
  readonly renewEvery?: number;
  /**
  * 'hour': Periodic interval in hours; 'day': Periodic interval in days; 'week': Periodic interval in weeks; 'month': Periodic interval in months(1 month=30 days);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#renew_every_type PkiScepCert#renew_every_type}
  */
  readonly renewEveryType?: string;
  /**
  * Value of renewal period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#renew_every_value PkiScepCert#renew_every_value}
  */
  readonly renewEveryValue?: number;
  /**
  * secret password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#secret_string PkiScepCert#secret_string}
  */
  readonly secretString?: string;
  /**
  * Start date of self-signed certificate in YYMMDDHHMMSS format specified in UTC time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#start_date PkiScepCert#start_date}
  */
  readonly startDate?: string;
  /**
  * Specify the Enrollment Agent's absolute URL (Format: http://host/path)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#url PkiScepCert#url}
  */
  readonly url?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#user_tag PkiScepCert#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#uuid PkiScepCert#uuid}
  */
  readonly uuid?: string;
  /**
  * subject_alternate_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#subject_alternate_name PkiScepCert#subject_alternate_name}
  */
  readonly subjectAlternateName?: PkiScepCertSubjectAlternateName;
}
export interface PkiScepCertSubjectAlternateName {
  /**
  * 'email': Enter e-mail address of the subject; 'dns': Enter hostname of the subject; 'ip': Enter IP address of the subject;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#san_type PkiScepCert#san_type}
  */
  readonly sanType?: string;
  /**
  * Value of subject-alternate-name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#san_value PkiScepCert#san_value}
  */
  readonly sanValue?: string;
}

export function pkiScepCertSubjectAlternateNameToTerraform(struct?: PkiScepCertSubjectAlternateNameOutputReference | PkiScepCertSubjectAlternateName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    san_type: cdktf.stringToTerraform(struct!.sanType),
    san_value: cdktf.stringToTerraform(struct!.sanValue),
  }
}


export function pkiScepCertSubjectAlternateNameToHclTerraform(struct?: PkiScepCertSubjectAlternateNameOutputReference | PkiScepCertSubjectAlternateName): any {
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

export class PkiScepCertSubjectAlternateNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PkiScepCertSubjectAlternateName | undefined {
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

  public set internalValue(value: PkiScepCertSubjectAlternateName | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert thunder_pki_scep_cert}
*/
export class PkiScepCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_pki_scep_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiScepCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiScepCert to import
  * @param importFromId The id of the existing PkiScepCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiScepCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_pki_scep_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_scep_cert thunder_pki_scep_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiScepCertConfig
  */
  public constructor(scope: Construct, id: string, config: PkiScepCertConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_pki_scep_cert',
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
    this._days = config.days;
    this._dn = config.dn;
    this._endDate = config.endDate;
    this._enroll = config.enroll;
    this._id = config.id;
    this._interval = config.interval;
    this._keyLength = config.keyLength;
    this._logLevel = config.logLevel;
    this._maxPolltime = config.maxPolltime;
    this._method = config.method;
    this._minute = config.minute;
    this._name = config.name;
    this._password = config.password;
    this._renewBefore = config.renewBefore;
    this._renewBeforeType = config.renewBeforeType;
    this._renewBeforeValue = config.renewBeforeValue;
    this._renewEvery = config.renewEvery;
    this._renewEveryType = config.renewEveryType;
    this._renewEveryValue = config.renewEveryValue;
    this._secretString = config.secretString;
    this._startDate = config.startDate;
    this._url = config.url;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._subjectAlternateName.internalValue = config.subjectAlternateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // dn - computed: false, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // key_length - computed: false, optional: true, required: false
  private _keyLength?: string; 
  public get keyLength() {
    return this.getStringAttribute('key_length');
  }
  public set keyLength(value: string) {
    this._keyLength = value;
  }
  public resetKeyLength() {
    this._keyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLengthInput() {
    return this._keyLength;
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

  // password - computed: false, optional: true, required: false
  private _password?: number; 
  public get password() {
    return this.getNumberAttribute('password');
  }
  public set password(value: number) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
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
  private _subjectAlternateName = new PkiScepCertSubjectAlternateNameOutputReference(this, "subject_alternate_name");
  public get subjectAlternateName() {
    return this._subjectAlternateName;
  }
  public putSubjectAlternateName(value: PkiScepCertSubjectAlternateName) {
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
      days: cdktf.numberToTerraform(this._days),
      dn: cdktf.stringToTerraform(this._dn),
      end_date: cdktf.stringToTerraform(this._endDate),
      enroll: cdktf.numberToTerraform(this._enroll),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      key_length: cdktf.stringToTerraform(this._keyLength),
      log_level: cdktf.numberToTerraform(this._logLevel),
      max_polltime: cdktf.numberToTerraform(this._maxPolltime),
      method: cdktf.stringToTerraform(this._method),
      minute: cdktf.numberToTerraform(this._minute),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.numberToTerraform(this._password),
      renew_before: cdktf.numberToTerraform(this._renewBefore),
      renew_before_type: cdktf.stringToTerraform(this._renewBeforeType),
      renew_before_value: cdktf.numberToTerraform(this._renewBeforeValue),
      renew_every: cdktf.numberToTerraform(this._renewEvery),
      renew_every_type: cdktf.stringToTerraform(this._renewEveryType),
      renew_every_value: cdktf.numberToTerraform(this._renewEveryValue),
      secret_string: cdktf.stringToTerraform(this._secretString),
      start_date: cdktf.stringToTerraform(this._startDate),
      url: cdktf.stringToTerraform(this._url),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      subject_alternate_name: pkiScepCertSubjectAlternateNameToTerraform(this._subjectAlternateName.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      days: {
        value: cdktf.numberToHclTerraform(this._days),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_length: {
        value: cdktf.stringToHclTerraform(this._keyLength),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      password: {
        value: cdktf.numberToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
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
        value: pkiScepCertSubjectAlternateNameToHclTerraform(this._subjectAlternateName.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PkiScepCertSubjectAlternateNameList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
