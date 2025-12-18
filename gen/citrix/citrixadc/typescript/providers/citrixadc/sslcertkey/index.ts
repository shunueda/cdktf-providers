// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcertkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Parse the certificate chain as a single file after linking the server certificate to its issuer's certificate within the file. Possible values: YES, NO. The following fields cannot be changed after creation: certkey, bundle, hsmkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#bundle Sslcertkey#bundle}
  */
  readonly bundle?: string;
  /**
  * Name of and, optionally, path to the X509 certificate file that is used to form the certificate-key pair. The certificate file should be present on the appliance's hard-disk drive or solid-state drive. Storing a certificate in any location other than the default might cause inconsistency in a high availability setup. /nsconfig/ssl/ is the default path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#cert Sslcertkey#cert}
  */
  readonly cert: string;
  /**
  * Name for the certificate and private-key pair. Must begin with an ASCII alphanumeric or underscore (_) character, and must contain only ASCII alphanumeric, underscore, hash (#), period (.), space, colon (:), at (@), equals (=), and hyphen (-) characters. The following fields cannot be changed after creation: certkey, bundle, hsmkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#certkey Sslcertkey#certkey}
  */
  readonly certkey: string;
  /**
  * Delete certificate and key files when the certificate is removed. Possible values: YES, NO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#deletecertkeyfilesonremoval Sslcertkey#deletecertkeyfilesonremoval}
  */
  readonly deletecertkeyfilesonremoval?: string;
  /**
  * Delete cert/key file from file system. Possible values: true, false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#deletefromdevice Sslcertkey#deletefromdevice}
  */
  readonly deletefromdevice?: boolean | cdktf.IResolvable;
  /**
  * Issue an alert when the certificate is about to expire. Possible values: ENABLED, DISABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#expirymonitor Sslcertkey#expirymonitor}
  */
  readonly expirymonitor?: string;
  /**
  * Name of the FIPS key that was created inside the Hardware Security Module (HSM) of a FIPS appliance, or a key that was imported into the HSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#fipskey Sslcertkey#fipskey}
  */
  readonly fipskey?: string;
  /**
  * Name of the HSM key that was created in the External Hardware Security Module (HSM) of a FIPS appliance. The following fields cannot be changed after creation: certkey, bundle, hsmkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#hsmkey Sslcertkey#hsmkey}
  */
  readonly hsmkey?: string;
  /**
  * Input format of the certificate and the private-key files. The three formats supported by the appliance are: PEM - Privacy Enhanced Mail, DER - Distinguished Encoding Rule, PFX - Personal Information Exchange. Default: PEM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#inform Sslcertkey#inform}
  */
  readonly inform?: string;
  /**
  * Name of and, optionally, path to the private-key file that is used to form the certificate-key pair. The certificate file should be present on the appliance's hard-disk drive or solid-state drive. Storing a certificate in any location other than the default might cause inconsistency in a high availability setup. /nsconfig/ssl/ is the default path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#key Sslcertkey#key}
  */
  readonly key?: string;
  /**
  * Name of the Certificate Authority certificate-key pair to which to link a certificate-key pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#linkcertkeyname Sslcertkey#linkcertkeyname}
  */
  readonly linkcertkeyname?: string;
  /**
  * Override the check for matching domain names during a certificate update operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#nodomaincheck Sslcertkey#nodomaincheck}
  */
  readonly nodomaincheck?: boolean | cdktf.IResolvable;
  /**
  * Time, in number of days, before certificate expiration, at which to generate an alert that the certificate is about to expire. Minimum value: 10, Maximum value: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#notificationperiod Sslcertkey#notificationperiod}
  */
  readonly notificationperiod?: number;
  /**
  * Clear cached ocspStapling response in case of an update operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#ocspstaplingcache Sslcertkey#ocspstaplingcache}
  */
  readonly ocspstaplingcache?: boolean | cdktf.IResolvable;
  /**
  * Pass phrase used to encrypt the private-key. Required when adding an encrypted private-key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#passplain Sslcertkey#passplain}
  */
  readonly passplain?: string;
  /**
  * Pass phrase used to encrypt the private-key. Required when adding an encrypted private-key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#passplain_wo Sslcertkey#passplain_wo}
  */
  readonly passplainWo?: string;
  /**
  * Increment this version to signal a passplain_wo update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#passplain_wo_version Sslcertkey#passplain_wo_version}
  */
  readonly passplainWoVersion?: number;
  /**
  * Passphrase that was used to encrypt the private-key. Use this option to load encrypted private-keys in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#password Sslcertkey#password}
  */
  readonly password?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey citrixadc_sslcertkey}
*/
export class Sslcertkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcertkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslcertkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslcertkey to import
  * @param importFromId The id of the existing Sslcertkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslcertkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcertkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertkey citrixadc_sslcertkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcertkeyConfig
  */
  public constructor(scope: Construct, id: string, config: SslcertkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcertkey',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundle = config.bundle;
    this._cert = config.cert;
    this._certkey = config.certkey;
    this._deletecertkeyfilesonremoval = config.deletecertkeyfilesonremoval;
    this._deletefromdevice = config.deletefromdevice;
    this._expirymonitor = config.expirymonitor;
    this._fipskey = config.fipskey;
    this._hsmkey = config.hsmkey;
    this._inform = config.inform;
    this._key = config.key;
    this._linkcertkeyname = config.linkcertkeyname;
    this._nodomaincheck = config.nodomaincheck;
    this._notificationperiod = config.notificationperiod;
    this._ocspstaplingcache = config.ocspstaplingcache;
    this._passplain = config.passplain;
    this._passplainWo = config.passplainWo;
    this._passplainWoVersion = config.passplainWoVersion;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle - computed: false, optional: true, required: false
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  public resetBundle() {
    this._bundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // certkey - computed: false, optional: false, required: true
  private _certkey?: string; 
  public get certkey() {
    return this.getStringAttribute('certkey');
  }
  public set certkey(value: string) {
    this._certkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certkeyInput() {
    return this._certkey;
  }

  // deletecertkeyfilesonremoval - computed: true, optional: true, required: false
  private _deletecertkeyfilesonremoval?: string; 
  public get deletecertkeyfilesonremoval() {
    return this.getStringAttribute('deletecertkeyfilesonremoval');
  }
  public set deletecertkeyfilesonremoval(value: string) {
    this._deletecertkeyfilesonremoval = value;
  }
  public resetDeletecertkeyfilesonremoval() {
    this._deletecertkeyfilesonremoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletecertkeyfilesonremovalInput() {
    return this._deletecertkeyfilesonremoval;
  }

  // deletefromdevice - computed: false, optional: true, required: false
  private _deletefromdevice?: boolean | cdktf.IResolvable; 
  public get deletefromdevice() {
    return this.getBooleanAttribute('deletefromdevice');
  }
  public set deletefromdevice(value: boolean | cdktf.IResolvable) {
    this._deletefromdevice = value;
  }
  public resetDeletefromdevice() {
    this._deletefromdevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletefromdeviceInput() {
    return this._deletefromdevice;
  }

  // expirymonitor - computed: true, optional: true, required: false
  private _expirymonitor?: string; 
  public get expirymonitor() {
    return this.getStringAttribute('expirymonitor');
  }
  public set expirymonitor(value: string) {
    this._expirymonitor = value;
  }
  public resetExpirymonitor() {
    this._expirymonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirymonitorInput() {
    return this._expirymonitor;
  }

  // fipskey - computed: false, optional: true, required: false
  private _fipskey?: string; 
  public get fipskey() {
    return this.getStringAttribute('fipskey');
  }
  public set fipskey(value: string) {
    this._fipskey = value;
  }
  public resetFipskey() {
    this._fipskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipskeyInput() {
    return this._fipskey;
  }

  // hsmkey - computed: false, optional: true, required: false
  private _hsmkey?: string; 
  public get hsmkey() {
    return this.getStringAttribute('hsmkey');
  }
  public set hsmkey(value: string) {
    this._hsmkey = value;
  }
  public resetHsmkey() {
    this._hsmkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmkeyInput() {
    return this._hsmkey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inform - computed: true, optional: true, required: false
  private _inform?: string; 
  public get inform() {
    return this.getStringAttribute('inform');
  }
  public set inform(value: string) {
    this._inform = value;
  }
  public resetInform() {
    this._inform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informInput() {
    return this._inform;
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

  // linkcertkeyname - computed: false, optional: true, required: false
  private _linkcertkeyname?: string; 
  public get linkcertkeyname() {
    return this.getStringAttribute('linkcertkeyname');
  }
  public set linkcertkeyname(value: string) {
    this._linkcertkeyname = value;
  }
  public resetLinkcertkeyname() {
    this._linkcertkeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkcertkeynameInput() {
    return this._linkcertkeyname;
  }

  // nodomaincheck - computed: false, optional: true, required: false
  private _nodomaincheck?: boolean | cdktf.IResolvable; 
  public get nodomaincheck() {
    return this.getBooleanAttribute('nodomaincheck');
  }
  public set nodomaincheck(value: boolean | cdktf.IResolvable) {
    this._nodomaincheck = value;
  }
  public resetNodomaincheck() {
    this._nodomaincheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodomaincheckInput() {
    return this._nodomaincheck;
  }

  // notificationperiod - computed: true, optional: true, required: false
  private _notificationperiod?: number; 
  public get notificationperiod() {
    return this.getNumberAttribute('notificationperiod');
  }
  public set notificationperiod(value: number) {
    this._notificationperiod = value;
  }
  public resetNotificationperiod() {
    this._notificationperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationperiodInput() {
    return this._notificationperiod;
  }

  // ocspstaplingcache - computed: false, optional: true, required: false
  private _ocspstaplingcache?: boolean | cdktf.IResolvable; 
  public get ocspstaplingcache() {
    return this.getBooleanAttribute('ocspstaplingcache');
  }
  public set ocspstaplingcache(value: boolean | cdktf.IResolvable) {
    this._ocspstaplingcache = value;
  }
  public resetOcspstaplingcache() {
    this._ocspstaplingcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstaplingcacheInput() {
    return this._ocspstaplingcache;
  }

  // passplain - computed: false, optional: true, required: false
  private _passplain?: string; 
  public get passplain() {
    return this.getStringAttribute('passplain');
  }
  public set passplain(value: string) {
    this._passplain = value;
  }
  public resetPassplain() {
    this._passplain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passplainInput() {
    return this._passplain;
  }

  // passplain_wo - computed: false, optional: true, required: false
  private _passplainWo?: string; 
  public get passplainWo() {
    return this.getStringAttribute('passplain_wo');
  }
  public set passplainWo(value: string) {
    this._passplainWo = value;
  }
  public resetPassplainWo() {
    this._passplainWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passplainWoInput() {
    return this._passplainWo;
  }

  // passplain_wo_version - computed: true, optional: true, required: false
  private _passplainWoVersion?: number; 
  public get passplainWoVersion() {
    return this.getNumberAttribute('passplain_wo_version');
  }
  public set passplainWoVersion(value: number) {
    this._passplainWoVersion = value;
  }
  public resetPassplainWoVersion() {
    this._passplainWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passplainWoVersionInput() {
    return this._passplainWoVersion;
  }

  // password - computed: false, optional: true, required: false
  private _password?: boolean | cdktf.IResolvable; 
  public get password() {
    return this.getBooleanAttribute('password');
  }
  public set password(value: boolean | cdktf.IResolvable) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle: cdktf.stringToTerraform(this._bundle),
      cert: cdktf.stringToTerraform(this._cert),
      certkey: cdktf.stringToTerraform(this._certkey),
      deletecertkeyfilesonremoval: cdktf.stringToTerraform(this._deletecertkeyfilesonremoval),
      deletefromdevice: cdktf.booleanToTerraform(this._deletefromdevice),
      expirymonitor: cdktf.stringToTerraform(this._expirymonitor),
      fipskey: cdktf.stringToTerraform(this._fipskey),
      hsmkey: cdktf.stringToTerraform(this._hsmkey),
      inform: cdktf.stringToTerraform(this._inform),
      key: cdktf.stringToTerraform(this._key),
      linkcertkeyname: cdktf.stringToTerraform(this._linkcertkeyname),
      nodomaincheck: cdktf.booleanToTerraform(this._nodomaincheck),
      notificationperiod: cdktf.numberToTerraform(this._notificationperiod),
      ocspstaplingcache: cdktf.booleanToTerraform(this._ocspstaplingcache),
      passplain: cdktf.stringToTerraform(this._passplain),
      passplain_wo: cdktf.stringToTerraform(this._passplainWo),
      passplain_wo_version: cdktf.numberToTerraform(this._passplainWoVersion),
      password: cdktf.booleanToTerraform(this._password),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle: {
        value: cdktf.stringToHclTerraform(this._bundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certkey: {
        value: cdktf.stringToHclTerraform(this._certkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletecertkeyfilesonremoval: {
        value: cdktf.stringToHclTerraform(this._deletecertkeyfilesonremoval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletefromdevice: {
        value: cdktf.booleanToHclTerraform(this._deletefromdevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expirymonitor: {
        value: cdktf.stringToHclTerraform(this._expirymonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fipskey: {
        value: cdktf.stringToHclTerraform(this._fipskey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsmkey: {
        value: cdktf.stringToHclTerraform(this._hsmkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inform: {
        value: cdktf.stringToHclTerraform(this._inform),
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
      linkcertkeyname: {
        value: cdktf.stringToHclTerraform(this._linkcertkeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodomaincheck: {
        value: cdktf.booleanToHclTerraform(this._nodomaincheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notificationperiod: {
        value: cdktf.numberToHclTerraform(this._notificationperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspstaplingcache: {
        value: cdktf.booleanToHclTerraform(this._ocspstaplingcache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passplain: {
        value: cdktf.stringToHclTerraform(this._passplain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passplain_wo: {
        value: cdktf.stringToHclTerraform(this._passplainWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passplain_wo_version: {
        value: cdktf.numberToHclTerraform(this._passplainWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.booleanToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
