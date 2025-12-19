// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiAcmeCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'agent-v1': Set agent-v1 as the ACME client (default); 'agent-v2': Set agent-v2 as the ACME client;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#acme_client PkiAcmeCert#acme_client}
  */
  readonly acmeClient?: string;
  /**
  * Specify the type of certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#cert_type PkiAcmeCert#cert_type}
  */
  readonly certType?: number;
  /**
  * Main domain you want to issue the cert for. CA will verify whether you control this domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#domain PkiAcmeCert#domain}
  */
  readonly domain?: string;
  /**
  * The HMAC key for ACME External Account Binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#eab_hmac_key PkiAcmeCert#eab_hmac_key}
  */
  readonly eabHmacKey?: number;
  /**
  * The key identifier for ACME External Account Binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#eab_key_id PkiAcmeCert#eab_key_id}
  */
  readonly eabKeyId?: string;
  /**
  * '256': Key size 256 bits; '384': Key size 384 bits(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#ec_key_length PkiAcmeCert#ec_key_length}
  */
  readonly ecKeyLength?: string;
  /**
  * ECDSA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#ecdsa_type PkiAcmeCert#ecdsa_type}
  */
  readonly ecdsaType?: number;
  /**
  * A valid email address for your ACME account. CA uses this email to send you expiration or other notices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#email PkiAcmeCert#email}
  */
  readonly email?: string;
  /**
  * Initiates enrollment with CA. Due to CA rate limit, A10 strongly recommend you set "run-with-staging-server" during test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#enroll PkiAcmeCert#enroll}
  */
  readonly enroll?: number;
  /**
  * Ignore the next renewal time and force to renew cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#force PkiAcmeCert#force}
  */
  readonly force?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#id PkiAcmeCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Level for logging output of ACME commands(default 1 and detailed 2, including debug messages)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#log_level PkiAcmeCert#log_level}
  */
  readonly logLevel?: number;
  /**
  * Periodic interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#minute PkiAcmeCert#minute}
  */
  readonly minute?: number;
  /**
  * Specify Certificate name to be enrolled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#name PkiAcmeCert#name}
  */
  readonly name: string;
  /**
  * Specify interval before certificate expiry to renew the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#renew_before PkiAcmeCert#renew_before}
  */
  readonly renewBefore?: number;
  /**
  * 'hour': Number of hours before cert expiry; 'day': Number of days before cert expiry; 'week': Number of weeks before cert expiry; 'month': Number of months before cert expiry(1 month=30 days);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#renew_before_type PkiAcmeCert#renew_before_type}
  */
  readonly renewBeforeType?: string;
  /**
  * Value of renewal period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#renew_before_value PkiAcmeCert#renew_before_value}
  */
  readonly renewBeforeValue?: number;
  /**
  * Specify periodic interval in which to renew the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#renew_every PkiAcmeCert#renew_every}
  */
  readonly renewEvery?: number;
  /**
  * 'hour': Periodic interval in hours; 'day': Periodic interval in days; 'week': Periodic interval in weeks; 'month': Periodic interval in months(1 month=30 days);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#renew_every_type PkiAcmeCert#renew_every_type}
  */
  readonly renewEveryType?: string;
  /**
  * Value of renewal period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#renew_every_value PkiAcmeCert#renew_every_value}
  */
  readonly renewEveryValue?: number;
  /**
  * '2048': Key size 2048 bits(default); '3072': Key size 3072 bits; '4096': Key size 4096 bits; '8192': Key size 8192 bits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#rsa_key_length PkiAcmeCert#rsa_key_length}
  */
  readonly rsaKeyLength?: string;
  /**
  * RSA certificate (default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#rsa_type PkiAcmeCert#rsa_type}
  */
  readonly rsaType?: number;
  /**
  * Subject-alternate-name dns(s) for your cert, sperated by /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#san_domain PkiAcmeCert#san_domain}
  */
  readonly sanDomain?: string;
  /**
  * The HMAC key for ACME External Account Binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#secret_string PkiAcmeCert#secret_string}
  */
  readonly secretString?: string;
  /**
  * Run ACME operation with staging server. Due to CA rate limit, A10 strongly recommends you set this during test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#staging PkiAcmeCert#staging}
  */
  readonly staging?: number;
  /**
  * ACME staging directory URL. By default, use Let's encrypt as CA server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#staging_url PkiAcmeCert#staging_url}
  */
  readonly stagingUrl?: string;
  /**
  * ACME directory URL. By default, use Let's encrypt as CA server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#url PkiAcmeCert#url}
  */
  readonly url?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#user_tag PkiAcmeCert#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#uuid PkiAcmeCert#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify ha VRRP-A vrid. It is used to sync http-01 challenge token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#vrid PkiAcmeCert#vrid}
  */
  readonly vrid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert thunder_pki_acme_cert}
*/
export class PkiAcmeCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_pki_acme_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiAcmeCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiAcmeCert to import
  * @param importFromId The id of the existing PkiAcmeCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiAcmeCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_pki_acme_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_acme_cert thunder_pki_acme_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiAcmeCertConfig
  */
  public constructor(scope: Construct, id: string, config: PkiAcmeCertConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_pki_acme_cert',
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
    this._acmeClient = config.acmeClient;
    this._certType = config.certType;
    this._domain = config.domain;
    this._eabHmacKey = config.eabHmacKey;
    this._eabKeyId = config.eabKeyId;
    this._ecKeyLength = config.ecKeyLength;
    this._ecdsaType = config.ecdsaType;
    this._email = config.email;
    this._enroll = config.enroll;
    this._force = config.force;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._minute = config.minute;
    this._name = config.name;
    this._renewBefore = config.renewBefore;
    this._renewBeforeType = config.renewBeforeType;
    this._renewBeforeValue = config.renewBeforeValue;
    this._renewEvery = config.renewEvery;
    this._renewEveryType = config.renewEveryType;
    this._renewEveryValue = config.renewEveryValue;
    this._rsaKeyLength = config.rsaKeyLength;
    this._rsaType = config.rsaType;
    this._sanDomain = config.sanDomain;
    this._secretString = config.secretString;
    this._staging = config.staging;
    this._stagingUrl = config.stagingUrl;
    this._url = config.url;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vrid = config.vrid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acme_client - computed: false, optional: true, required: false
  private _acmeClient?: string; 
  public get acmeClient() {
    return this.getStringAttribute('acme_client');
  }
  public set acmeClient(value: string) {
    this._acmeClient = value;
  }
  public resetAcmeClient() {
    this._acmeClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeClientInput() {
    return this._acmeClient;
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

  // eab_hmac_key - computed: false, optional: true, required: false
  private _eabHmacKey?: number; 
  public get eabHmacKey() {
    return this.getNumberAttribute('eab_hmac_key');
  }
  public set eabHmacKey(value: number) {
    this._eabHmacKey = value;
  }
  public resetEabHmacKey() {
    this._eabHmacKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabHmacKeyInput() {
    return this._eabHmacKey;
  }

  // eab_key_id - computed: false, optional: true, required: false
  private _eabKeyId?: string; 
  public get eabKeyId() {
    return this.getStringAttribute('eab_key_id');
  }
  public set eabKeyId(value: string) {
    this._eabKeyId = value;
  }
  public resetEabKeyId() {
    this._eabKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabKeyIdInput() {
    return this._eabKeyId;
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

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // force - computed: false, optional: true, required: false
  private _force?: number; 
  public get force() {
    return this.getNumberAttribute('force');
  }
  public set force(value: number) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // san_domain - computed: false, optional: true, required: false
  private _sanDomain?: string; 
  public get sanDomain() {
    return this.getStringAttribute('san_domain');
  }
  public set sanDomain(value: string) {
    this._sanDomain = value;
  }
  public resetSanDomain() {
    this._sanDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanDomainInput() {
    return this._sanDomain;
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

  // staging - computed: false, optional: true, required: false
  private _staging?: number; 
  public get staging() {
    return this.getNumberAttribute('staging');
  }
  public set staging(value: number) {
    this._staging = value;
  }
  public resetStaging() {
    this._staging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingInput() {
    return this._staging;
  }

  // staging_url - computed: false, optional: true, required: false
  private _stagingUrl?: string; 
  public get stagingUrl() {
    return this.getStringAttribute('staging_url');
  }
  public set stagingUrl(value: string) {
    this._stagingUrl = value;
  }
  public resetStagingUrl() {
    this._stagingUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingUrlInput() {
    return this._stagingUrl;
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

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acme_client: cdktf.stringToTerraform(this._acmeClient),
      cert_type: cdktf.numberToTerraform(this._certType),
      domain: cdktf.stringToTerraform(this._domain),
      eab_hmac_key: cdktf.numberToTerraform(this._eabHmacKey),
      eab_key_id: cdktf.stringToTerraform(this._eabKeyId),
      ec_key_length: cdktf.stringToTerraform(this._ecKeyLength),
      ecdsa_type: cdktf.numberToTerraform(this._ecdsaType),
      email: cdktf.stringToTerraform(this._email),
      enroll: cdktf.numberToTerraform(this._enroll),
      force: cdktf.numberToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.numberToTerraform(this._logLevel),
      minute: cdktf.numberToTerraform(this._minute),
      name: cdktf.stringToTerraform(this._name),
      renew_before: cdktf.numberToTerraform(this._renewBefore),
      renew_before_type: cdktf.stringToTerraform(this._renewBeforeType),
      renew_before_value: cdktf.numberToTerraform(this._renewBeforeValue),
      renew_every: cdktf.numberToTerraform(this._renewEvery),
      renew_every_type: cdktf.stringToTerraform(this._renewEveryType),
      renew_every_value: cdktf.numberToTerraform(this._renewEveryValue),
      rsa_key_length: cdktf.stringToTerraform(this._rsaKeyLength),
      rsa_type: cdktf.numberToTerraform(this._rsaType),
      san_domain: cdktf.stringToTerraform(this._sanDomain),
      secret_string: cdktf.stringToTerraform(this._secretString),
      staging: cdktf.numberToTerraform(this._staging),
      staging_url: cdktf.stringToTerraform(this._stagingUrl),
      url: cdktf.stringToTerraform(this._url),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid: cdktf.numberToTerraform(this._vrid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acme_client: {
        value: cdktf.stringToHclTerraform(this._acmeClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_type: {
        value: cdktf.numberToHclTerraform(this._certType),
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
      eab_hmac_key: {
        value: cdktf.numberToHclTerraform(this._eabHmacKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eab_key_id: {
        value: cdktf.stringToHclTerraform(this._eabKeyId),
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
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      force: {
        value: cdktf.numberToHclTerraform(this._force),
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
      san_domain: {
        value: cdktf.stringToHclTerraform(this._sanDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staging: {
        value: cdktf.numberToHclTerraform(this._staging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      staging_url: {
        value: cdktf.stringToHclTerraform(this._stagingUrl),
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
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
