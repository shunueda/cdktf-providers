// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#cacertgrpname Sslaction#cacertgrpname}
  */
  readonly cacertgrpname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#certfingerprintdigest Sslaction#certfingerprintdigest}
  */
  readonly certfingerprintdigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#certfingerprintheader Sslaction#certfingerprintheader}
  */
  readonly certfingerprintheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#certhashheader Sslaction#certhashheader}
  */
  readonly certhashheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#certheader Sslaction#certheader}
  */
  readonly certheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#certissuerheader Sslaction#certissuerheader}
  */
  readonly certissuerheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#certnotafterheader Sslaction#certnotafterheader}
  */
  readonly certnotafterheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#certnotbeforeheader Sslaction#certnotbeforeheader}
  */
  readonly certnotbeforeheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#certserialheader Sslaction#certserialheader}
  */
  readonly certserialheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#certsubjectheader Sslaction#certsubjectheader}
  */
  readonly certsubjectheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#cipher Sslaction#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#cipherheader Sslaction#cipherheader}
  */
  readonly cipherheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#clientauth Sslaction#clientauth}
  */
  readonly clientauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#clientcert Sslaction#clientcert}
  */
  readonly clientcert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#clientcertfingerprint Sslaction#clientcertfingerprint}
  */
  readonly clientcertfingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#clientcerthash Sslaction#clientcerthash}
  */
  readonly clientcerthash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#clientcertissuer Sslaction#clientcertissuer}
  */
  readonly clientcertissuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#clientcertnotafter Sslaction#clientcertnotafter}
  */
  readonly clientcertnotafter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#clientcertnotbefore Sslaction#clientcertnotbefore}
  */
  readonly clientcertnotbefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#clientcertserialnumber Sslaction#clientcertserialnumber}
  */
  readonly clientcertserialnumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#clientcertsubject Sslaction#clientcertsubject}
  */
  readonly clientcertsubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#clientcertverification Sslaction#clientcertverification}
  */
  readonly clientcertverification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#forward Sslaction#forward}
  */
  readonly forward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#id Sslaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#name Sslaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#owasupport Sslaction#owasupport}
  */
  readonly owasupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#sessionid Sslaction#sessionid}
  */
  readonly sessionid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#sessionidheader Sslaction#sessionidheader}
  */
  readonly sessionidheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#ssllogprofile Sslaction#ssllogprofile}
  */
  readonly ssllogprofile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction citrixadc_sslaction}
*/
export class Sslaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslaction to import
  * @param importFromId The id of the existing Sslaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslaction citrixadc_sslaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslactionConfig
  */
  public constructor(scope: Construct, id: string, config: SslactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslaction',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacertgrpname = config.cacertgrpname;
    this._certfingerprintdigest = config.certfingerprintdigest;
    this._certfingerprintheader = config.certfingerprintheader;
    this._certhashheader = config.certhashheader;
    this._certheader = config.certheader;
    this._certissuerheader = config.certissuerheader;
    this._certnotafterheader = config.certnotafterheader;
    this._certnotbeforeheader = config.certnotbeforeheader;
    this._certserialheader = config.certserialheader;
    this._certsubjectheader = config.certsubjectheader;
    this._cipher = config.cipher;
    this._cipherheader = config.cipherheader;
    this._clientauth = config.clientauth;
    this._clientcert = config.clientcert;
    this._clientcertfingerprint = config.clientcertfingerprint;
    this._clientcerthash = config.clientcerthash;
    this._clientcertissuer = config.clientcertissuer;
    this._clientcertnotafter = config.clientcertnotafter;
    this._clientcertnotbefore = config.clientcertnotbefore;
    this._clientcertserialnumber = config.clientcertserialnumber;
    this._clientcertsubject = config.clientcertsubject;
    this._clientcertverification = config.clientcertverification;
    this._forward = config.forward;
    this._id = config.id;
    this._name = config.name;
    this._owasupport = config.owasupport;
    this._sessionid = config.sessionid;
    this._sessionidheader = config.sessionidheader;
    this._ssllogprofile = config.ssllogprofile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacertgrpname - computed: true, optional: true, required: false
  private _cacertgrpname?: string; 
  public get cacertgrpname() {
    return this.getStringAttribute('cacertgrpname');
  }
  public set cacertgrpname(value: string) {
    this._cacertgrpname = value;
  }
  public resetCacertgrpname() {
    this._cacertgrpname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertgrpnameInput() {
    return this._cacertgrpname;
  }

  // certfingerprintdigest - computed: true, optional: true, required: false
  private _certfingerprintdigest?: string; 
  public get certfingerprintdigest() {
    return this.getStringAttribute('certfingerprintdigest');
  }
  public set certfingerprintdigest(value: string) {
    this._certfingerprintdigest = value;
  }
  public resetCertfingerprintdigest() {
    this._certfingerprintdigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certfingerprintdigestInput() {
    return this._certfingerprintdigest;
  }

  // certfingerprintheader - computed: true, optional: true, required: false
  private _certfingerprintheader?: string; 
  public get certfingerprintheader() {
    return this.getStringAttribute('certfingerprintheader');
  }
  public set certfingerprintheader(value: string) {
    this._certfingerprintheader = value;
  }
  public resetCertfingerprintheader() {
    this._certfingerprintheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certfingerprintheaderInput() {
    return this._certfingerprintheader;
  }

  // certhashheader - computed: true, optional: true, required: false
  private _certhashheader?: string; 
  public get certhashheader() {
    return this.getStringAttribute('certhashheader');
  }
  public set certhashheader(value: string) {
    this._certhashheader = value;
  }
  public resetCerthashheader() {
    this._certhashheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certhashheaderInput() {
    return this._certhashheader;
  }

  // certheader - computed: true, optional: true, required: false
  private _certheader?: string; 
  public get certheader() {
    return this.getStringAttribute('certheader');
  }
  public set certheader(value: string) {
    this._certheader = value;
  }
  public resetCertheader() {
    this._certheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certheaderInput() {
    return this._certheader;
  }

  // certissuerheader - computed: true, optional: true, required: false
  private _certissuerheader?: string; 
  public get certissuerheader() {
    return this.getStringAttribute('certissuerheader');
  }
  public set certissuerheader(value: string) {
    this._certissuerheader = value;
  }
  public resetCertissuerheader() {
    this._certissuerheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certissuerheaderInput() {
    return this._certissuerheader;
  }

  // certnotafterheader - computed: true, optional: true, required: false
  private _certnotafterheader?: string; 
  public get certnotafterheader() {
    return this.getStringAttribute('certnotafterheader');
  }
  public set certnotafterheader(value: string) {
    this._certnotafterheader = value;
  }
  public resetCertnotafterheader() {
    this._certnotafterheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certnotafterheaderInput() {
    return this._certnotafterheader;
  }

  // certnotbeforeheader - computed: true, optional: true, required: false
  private _certnotbeforeheader?: string; 
  public get certnotbeforeheader() {
    return this.getStringAttribute('certnotbeforeheader');
  }
  public set certnotbeforeheader(value: string) {
    this._certnotbeforeheader = value;
  }
  public resetCertnotbeforeheader() {
    this._certnotbeforeheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certnotbeforeheaderInput() {
    return this._certnotbeforeheader;
  }

  // certserialheader - computed: true, optional: true, required: false
  private _certserialheader?: string; 
  public get certserialheader() {
    return this.getStringAttribute('certserialheader');
  }
  public set certserialheader(value: string) {
    this._certserialheader = value;
  }
  public resetCertserialheader() {
    this._certserialheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certserialheaderInput() {
    return this._certserialheader;
  }

  // certsubjectheader - computed: true, optional: true, required: false
  private _certsubjectheader?: string; 
  public get certsubjectheader() {
    return this.getStringAttribute('certsubjectheader');
  }
  public set certsubjectheader(value: string) {
    this._certsubjectheader = value;
  }
  public resetCertsubjectheader() {
    this._certsubjectheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certsubjectheaderInput() {
    return this._certsubjectheader;
  }

  // cipher - computed: true, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // cipherheader - computed: true, optional: true, required: false
  private _cipherheader?: string; 
  public get cipherheader() {
    return this.getStringAttribute('cipherheader');
  }
  public set cipherheader(value: string) {
    this._cipherheader = value;
  }
  public resetCipherheader() {
    this._cipherheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherheaderInput() {
    return this._cipherheader;
  }

  // clientauth - computed: true, optional: true, required: false
  private _clientauth?: string; 
  public get clientauth() {
    return this.getStringAttribute('clientauth');
  }
  public set clientauth(value: string) {
    this._clientauth = value;
  }
  public resetClientauth() {
    this._clientauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientauthInput() {
    return this._clientauth;
  }

  // clientcert - computed: true, optional: true, required: false
  private _clientcert?: string; 
  public get clientcert() {
    return this.getStringAttribute('clientcert');
  }
  public set clientcert(value: string) {
    this._clientcert = value;
  }
  public resetClientcert() {
    this._clientcert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertInput() {
    return this._clientcert;
  }

  // clientcertfingerprint - computed: true, optional: true, required: false
  private _clientcertfingerprint?: string; 
  public get clientcertfingerprint() {
    return this.getStringAttribute('clientcertfingerprint');
  }
  public set clientcertfingerprint(value: string) {
    this._clientcertfingerprint = value;
  }
  public resetClientcertfingerprint() {
    this._clientcertfingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertfingerprintInput() {
    return this._clientcertfingerprint;
  }

  // clientcerthash - computed: true, optional: true, required: false
  private _clientcerthash?: string; 
  public get clientcerthash() {
    return this.getStringAttribute('clientcerthash');
  }
  public set clientcerthash(value: string) {
    this._clientcerthash = value;
  }
  public resetClientcerthash() {
    this._clientcerthash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcerthashInput() {
    return this._clientcerthash;
  }

  // clientcertissuer - computed: true, optional: true, required: false
  private _clientcertissuer?: string; 
  public get clientcertissuer() {
    return this.getStringAttribute('clientcertissuer');
  }
  public set clientcertissuer(value: string) {
    this._clientcertissuer = value;
  }
  public resetClientcertissuer() {
    this._clientcertissuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertissuerInput() {
    return this._clientcertissuer;
  }

  // clientcertnotafter - computed: true, optional: true, required: false
  private _clientcertnotafter?: string; 
  public get clientcertnotafter() {
    return this.getStringAttribute('clientcertnotafter');
  }
  public set clientcertnotafter(value: string) {
    this._clientcertnotafter = value;
  }
  public resetClientcertnotafter() {
    this._clientcertnotafter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertnotafterInput() {
    return this._clientcertnotafter;
  }

  // clientcertnotbefore - computed: true, optional: true, required: false
  private _clientcertnotbefore?: string; 
  public get clientcertnotbefore() {
    return this.getStringAttribute('clientcertnotbefore');
  }
  public set clientcertnotbefore(value: string) {
    this._clientcertnotbefore = value;
  }
  public resetClientcertnotbefore() {
    this._clientcertnotbefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertnotbeforeInput() {
    return this._clientcertnotbefore;
  }

  // clientcertserialnumber - computed: true, optional: true, required: false
  private _clientcertserialnumber?: string; 
  public get clientcertserialnumber() {
    return this.getStringAttribute('clientcertserialnumber');
  }
  public set clientcertserialnumber(value: string) {
    this._clientcertserialnumber = value;
  }
  public resetClientcertserialnumber() {
    this._clientcertserialnumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertserialnumberInput() {
    return this._clientcertserialnumber;
  }

  // clientcertsubject - computed: true, optional: true, required: false
  private _clientcertsubject?: string; 
  public get clientcertsubject() {
    return this.getStringAttribute('clientcertsubject');
  }
  public set clientcertsubject(value: string) {
    this._clientcertsubject = value;
  }
  public resetClientcertsubject() {
    this._clientcertsubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertsubjectInput() {
    return this._clientcertsubject;
  }

  // clientcertverification - computed: true, optional: true, required: false
  private _clientcertverification?: string; 
  public get clientcertverification() {
    return this.getStringAttribute('clientcertverification');
  }
  public set clientcertverification(value: string) {
    this._clientcertverification = value;
  }
  public resetClientcertverification() {
    this._clientcertverification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertverificationInput() {
    return this._clientcertverification;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
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

  // owasupport - computed: true, optional: true, required: false
  private _owasupport?: string; 
  public get owasupport() {
    return this.getStringAttribute('owasupport');
  }
  public set owasupport(value: string) {
    this._owasupport = value;
  }
  public resetOwasupport() {
    this._owasupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get owasupportInput() {
    return this._owasupport;
  }

  // sessionid - computed: true, optional: true, required: false
  private _sessionid?: string; 
  public get sessionid() {
    return this.getStringAttribute('sessionid');
  }
  public set sessionid(value: string) {
    this._sessionid = value;
  }
  public resetSessionid() {
    this._sessionid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionidInput() {
    return this._sessionid;
  }

  // sessionidheader - computed: true, optional: true, required: false
  private _sessionidheader?: string; 
  public get sessionidheader() {
    return this.getStringAttribute('sessionidheader');
  }
  public set sessionidheader(value: string) {
    this._sessionidheader = value;
  }
  public resetSessionidheader() {
    this._sessionidheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionidheaderInput() {
    return this._sessionidheader;
  }

  // ssllogprofile - computed: true, optional: true, required: false
  private _ssllogprofile?: string; 
  public get ssllogprofile() {
    return this.getStringAttribute('ssllogprofile');
  }
  public set ssllogprofile(value: string) {
    this._ssllogprofile = value;
  }
  public resetSsllogprofile() {
    this._ssllogprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssllogprofileInput() {
    return this._ssllogprofile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cacertgrpname: cdktf.stringToTerraform(this._cacertgrpname),
      certfingerprintdigest: cdktf.stringToTerraform(this._certfingerprintdigest),
      certfingerprintheader: cdktf.stringToTerraform(this._certfingerprintheader),
      certhashheader: cdktf.stringToTerraform(this._certhashheader),
      certheader: cdktf.stringToTerraform(this._certheader),
      certissuerheader: cdktf.stringToTerraform(this._certissuerheader),
      certnotafterheader: cdktf.stringToTerraform(this._certnotafterheader),
      certnotbeforeheader: cdktf.stringToTerraform(this._certnotbeforeheader),
      certserialheader: cdktf.stringToTerraform(this._certserialheader),
      certsubjectheader: cdktf.stringToTerraform(this._certsubjectheader),
      cipher: cdktf.stringToTerraform(this._cipher),
      cipherheader: cdktf.stringToTerraform(this._cipherheader),
      clientauth: cdktf.stringToTerraform(this._clientauth),
      clientcert: cdktf.stringToTerraform(this._clientcert),
      clientcertfingerprint: cdktf.stringToTerraform(this._clientcertfingerprint),
      clientcerthash: cdktf.stringToTerraform(this._clientcerthash),
      clientcertissuer: cdktf.stringToTerraform(this._clientcertissuer),
      clientcertnotafter: cdktf.stringToTerraform(this._clientcertnotafter),
      clientcertnotbefore: cdktf.stringToTerraform(this._clientcertnotbefore),
      clientcertserialnumber: cdktf.stringToTerraform(this._clientcertserialnumber),
      clientcertsubject: cdktf.stringToTerraform(this._clientcertsubject),
      clientcertverification: cdktf.stringToTerraform(this._clientcertverification),
      forward: cdktf.stringToTerraform(this._forward),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owasupport: cdktf.stringToTerraform(this._owasupport),
      sessionid: cdktf.stringToTerraform(this._sessionid),
      sessionidheader: cdktf.stringToTerraform(this._sessionidheader),
      ssllogprofile: cdktf.stringToTerraform(this._ssllogprofile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacertgrpname: {
        value: cdktf.stringToHclTerraform(this._cacertgrpname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certfingerprintdigest: {
        value: cdktf.stringToHclTerraform(this._certfingerprintdigest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certfingerprintheader: {
        value: cdktf.stringToHclTerraform(this._certfingerprintheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certhashheader: {
        value: cdktf.stringToHclTerraform(this._certhashheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certheader: {
        value: cdktf.stringToHclTerraform(this._certheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certissuerheader: {
        value: cdktf.stringToHclTerraform(this._certissuerheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certnotafterheader: {
        value: cdktf.stringToHclTerraform(this._certnotafterheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certnotbeforeheader: {
        value: cdktf.stringToHclTerraform(this._certnotbeforeheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certserialheader: {
        value: cdktf.stringToHclTerraform(this._certserialheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certsubjectheader: {
        value: cdktf.stringToHclTerraform(this._certsubjectheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher: {
        value: cdktf.stringToHclTerraform(this._cipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipherheader: {
        value: cdktf.stringToHclTerraform(this._cipherheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientauth: {
        value: cdktf.stringToHclTerraform(this._clientauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcert: {
        value: cdktf.stringToHclTerraform(this._clientcert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcertfingerprint: {
        value: cdktf.stringToHclTerraform(this._clientcertfingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcerthash: {
        value: cdktf.stringToHclTerraform(this._clientcerthash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcertissuer: {
        value: cdktf.stringToHclTerraform(this._clientcertissuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcertnotafter: {
        value: cdktf.stringToHclTerraform(this._clientcertnotafter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcertnotbefore: {
        value: cdktf.stringToHclTerraform(this._clientcertnotbefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcertserialnumber: {
        value: cdktf.stringToHclTerraform(this._clientcertserialnumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcertsubject: {
        value: cdktf.stringToHclTerraform(this._clientcertsubject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcertverification: {
        value: cdktf.stringToHclTerraform(this._clientcertverification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward: {
        value: cdktf.stringToHclTerraform(this._forward),
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
      owasupport: {
        value: cdktf.stringToHclTerraform(this._owasupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionid: {
        value: cdktf.stringToHclTerraform(this._sessionid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionidheader: {
        value: cdktf.stringToHclTerraform(this._sessionidheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssllogprofile: {
        value: cdktf.stringToHclTerraform(this._ssllogprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
