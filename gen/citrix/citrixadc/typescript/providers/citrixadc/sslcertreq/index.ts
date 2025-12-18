// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcertreqConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#challengepassword Sslcertreq#challengepassword}
  */
  readonly challengepassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#commonname Sslcertreq#commonname}
  */
  readonly commonname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#companyname Sslcertreq#companyname}
  */
  readonly companyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#countryname Sslcertreq#countryname}
  */
  readonly countryname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#digestmethod Sslcertreq#digestmethod}
  */
  readonly digestmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#emailaddress Sslcertreq#emailaddress}
  */
  readonly emailaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#fipskeyname Sslcertreq#fipskeyname}
  */
  readonly fipskeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#id Sslcertreq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#keyfile Sslcertreq#keyfile}
  */
  readonly keyfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#keyform Sslcertreq#keyform}
  */
  readonly keyform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#localityname Sslcertreq#localityname}
  */
  readonly localityname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#organizationname Sslcertreq#organizationname}
  */
  readonly organizationname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#organizationunitname Sslcertreq#organizationunitname}
  */
  readonly organizationunitname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#pempassphrase Sslcertreq#pempassphrase}
  */
  readonly pempassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#reqfile Sslcertreq#reqfile}
  */
  readonly reqfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#statename Sslcertreq#statename}
  */
  readonly statename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#subjectaltname Sslcertreq#subjectaltname}
  */
  readonly subjectaltname?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq citrixadc_sslcertreq}
*/
export class Sslcertreq extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcertreq";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslcertreq resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslcertreq to import
  * @param importFromId The id of the existing Sslcertreq that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslcertreq to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcertreq", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcertreq citrixadc_sslcertreq} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcertreqConfig
  */
  public constructor(scope: Construct, id: string, config: SslcertreqConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcertreq',
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
    this._challengepassword = config.challengepassword;
    this._commonname = config.commonname;
    this._companyname = config.companyname;
    this._countryname = config.countryname;
    this._digestmethod = config.digestmethod;
    this._emailaddress = config.emailaddress;
    this._fipskeyname = config.fipskeyname;
    this._id = config.id;
    this._keyfile = config.keyfile;
    this._keyform = config.keyform;
    this._localityname = config.localityname;
    this._organizationname = config.organizationname;
    this._organizationunitname = config.organizationunitname;
    this._pempassphrase = config.pempassphrase;
    this._reqfile = config.reqfile;
    this._statename = config.statename;
    this._subjectaltname = config.subjectaltname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // challengepassword - computed: true, optional: true, required: false
  private _challengepassword?: string; 
  public get challengepassword() {
    return this.getStringAttribute('challengepassword');
  }
  public set challengepassword(value: string) {
    this._challengepassword = value;
  }
  public resetChallengepassword() {
    this._challengepassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengepasswordInput() {
    return this._challengepassword;
  }

  // commonname - computed: true, optional: true, required: false
  private _commonname?: string; 
  public get commonname() {
    return this.getStringAttribute('commonname');
  }
  public set commonname(value: string) {
    this._commonname = value;
  }
  public resetCommonname() {
    this._commonname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonnameInput() {
    return this._commonname;
  }

  // companyname - computed: true, optional: true, required: false
  private _companyname?: string; 
  public get companyname() {
    return this.getStringAttribute('companyname');
  }
  public set companyname(value: string) {
    this._companyname = value;
  }
  public resetCompanyname() {
    this._companyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companynameInput() {
    return this._companyname;
  }

  // countryname - computed: false, optional: false, required: true
  private _countryname?: string; 
  public get countryname() {
    return this.getStringAttribute('countryname');
  }
  public set countryname(value: string) {
    this._countryname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countrynameInput() {
    return this._countryname;
  }

  // digestmethod - computed: true, optional: true, required: false
  private _digestmethod?: string; 
  public get digestmethod() {
    return this.getStringAttribute('digestmethod');
  }
  public set digestmethod(value: string) {
    this._digestmethod = value;
  }
  public resetDigestmethod() {
    this._digestmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestmethodInput() {
    return this._digestmethod;
  }

  // emailaddress - computed: true, optional: true, required: false
  private _emailaddress?: string; 
  public get emailaddress() {
    return this.getStringAttribute('emailaddress');
  }
  public set emailaddress(value: string) {
    this._emailaddress = value;
  }
  public resetEmailaddress() {
    this._emailaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailaddressInput() {
    return this._emailaddress;
  }

  // fipskeyname - computed: true, optional: true, required: false
  private _fipskeyname?: string; 
  public get fipskeyname() {
    return this.getStringAttribute('fipskeyname');
  }
  public set fipskeyname(value: string) {
    this._fipskeyname = value;
  }
  public resetFipskeyname() {
    this._fipskeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipskeynameInput() {
    return this._fipskeyname;
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

  // keyfile - computed: true, optional: true, required: false
  private _keyfile?: string; 
  public get keyfile() {
    return this.getStringAttribute('keyfile');
  }
  public set keyfile(value: string) {
    this._keyfile = value;
  }
  public resetKeyfile() {
    this._keyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyfileInput() {
    return this._keyfile;
  }

  // keyform - computed: true, optional: true, required: false
  private _keyform?: string; 
  public get keyform() {
    return this.getStringAttribute('keyform');
  }
  public set keyform(value: string) {
    this._keyform = value;
  }
  public resetKeyform() {
    this._keyform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyformInput() {
    return this._keyform;
  }

  // localityname - computed: true, optional: true, required: false
  private _localityname?: string; 
  public get localityname() {
    return this.getStringAttribute('localityname');
  }
  public set localityname(value: string) {
    this._localityname = value;
  }
  public resetLocalityname() {
    this._localityname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localitynameInput() {
    return this._localityname;
  }

  // organizationname - computed: false, optional: false, required: true
  private _organizationname?: string; 
  public get organizationname() {
    return this.getStringAttribute('organizationname');
  }
  public set organizationname(value: string) {
    this._organizationname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationnameInput() {
    return this._organizationname;
  }

  // organizationunitname - computed: true, optional: true, required: false
  private _organizationunitname?: string; 
  public get organizationunitname() {
    return this.getStringAttribute('organizationunitname');
  }
  public set organizationunitname(value: string) {
    this._organizationunitname = value;
  }
  public resetOrganizationunitname() {
    this._organizationunitname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationunitnameInput() {
    return this._organizationunitname;
  }

  // pempassphrase - computed: true, optional: true, required: false
  private _pempassphrase?: string; 
  public get pempassphrase() {
    return this.getStringAttribute('pempassphrase');
  }
  public set pempassphrase(value: string) {
    this._pempassphrase = value;
  }
  public resetPempassphrase() {
    this._pempassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pempassphraseInput() {
    return this._pempassphrase;
  }

  // reqfile - computed: false, optional: false, required: true
  private _reqfile?: string; 
  public get reqfile() {
    return this.getStringAttribute('reqfile');
  }
  public set reqfile(value: string) {
    this._reqfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reqfileInput() {
    return this._reqfile;
  }

  // statename - computed: false, optional: false, required: true
  private _statename?: string; 
  public get statename() {
    return this.getStringAttribute('statename');
  }
  public set statename(value: string) {
    this._statename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statenameInput() {
    return this._statename;
  }

  // subjectaltname - computed: true, optional: true, required: false
  private _subjectaltname?: string; 
  public get subjectaltname() {
    return this.getStringAttribute('subjectaltname');
  }
  public set subjectaltname(value: string) {
    this._subjectaltname = value;
  }
  public resetSubjectaltname() {
    this._subjectaltname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectaltnameInput() {
    return this._subjectaltname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      challengepassword: cdktf.stringToTerraform(this._challengepassword),
      commonname: cdktf.stringToTerraform(this._commonname),
      companyname: cdktf.stringToTerraform(this._companyname),
      countryname: cdktf.stringToTerraform(this._countryname),
      digestmethod: cdktf.stringToTerraform(this._digestmethod),
      emailaddress: cdktf.stringToTerraform(this._emailaddress),
      fipskeyname: cdktf.stringToTerraform(this._fipskeyname),
      id: cdktf.stringToTerraform(this._id),
      keyfile: cdktf.stringToTerraform(this._keyfile),
      keyform: cdktf.stringToTerraform(this._keyform),
      localityname: cdktf.stringToTerraform(this._localityname),
      organizationname: cdktf.stringToTerraform(this._organizationname),
      organizationunitname: cdktf.stringToTerraform(this._organizationunitname),
      pempassphrase: cdktf.stringToTerraform(this._pempassphrase),
      reqfile: cdktf.stringToTerraform(this._reqfile),
      statename: cdktf.stringToTerraform(this._statename),
      subjectaltname: cdktf.stringToTerraform(this._subjectaltname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      challengepassword: {
        value: cdktf.stringToHclTerraform(this._challengepassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commonname: {
        value: cdktf.stringToHclTerraform(this._commonname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      companyname: {
        value: cdktf.stringToHclTerraform(this._companyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      countryname: {
        value: cdktf.stringToHclTerraform(this._countryname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digestmethod: {
        value: cdktf.stringToHclTerraform(this._digestmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emailaddress: {
        value: cdktf.stringToHclTerraform(this._emailaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fipskeyname: {
        value: cdktf.stringToHclTerraform(this._fipskeyname),
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
      keyfile: {
        value: cdktf.stringToHclTerraform(this._keyfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyform: {
        value: cdktf.stringToHclTerraform(this._keyform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      localityname: {
        value: cdktf.stringToHclTerraform(this._localityname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizationname: {
        value: cdktf.stringToHclTerraform(this._organizationname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizationunitname: {
        value: cdktf.stringToHclTerraform(this._organizationunitname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pempassphrase: {
        value: cdktf.stringToHclTerraform(this._pempassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reqfile: {
        value: cdktf.stringToHclTerraform(this._reqfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statename: {
        value: cdktf.stringToHclTerraform(this._statename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subjectaltname: {
        value: cdktf.stringToHclTerraform(this._subjectaltname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
