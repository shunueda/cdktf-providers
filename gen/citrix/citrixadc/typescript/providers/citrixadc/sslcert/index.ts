// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#cacert Sslcert#cacert}
  */
  readonly cacert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#cacertform Sslcert#cacertform}
  */
  readonly cacertform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#cakey Sslcert#cakey}
  */
  readonly cakey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#cakeyform Sslcert#cakeyform}
  */
  readonly cakeyform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#caserial Sslcert#caserial}
  */
  readonly caserial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#certfile Sslcert#certfile}
  */
  readonly certfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#certform Sslcert#certform}
  */
  readonly certform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#certtype Sslcert#certtype}
  */
  readonly certtype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#days Sslcert#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#id Sslcert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#keyfile Sslcert#keyfile}
  */
  readonly keyfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#keyform Sslcert#keyform}
  */
  readonly keyform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#pempassphrase Sslcert#pempassphrase}
  */
  readonly pempassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#reqfile Sslcert#reqfile}
  */
  readonly reqfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#subjectaltname Sslcert#subjectaltname}
  */
  readonly subjectaltname?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert citrixadc_sslcert}
*/
export class Sslcert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslcert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslcert to import
  * @param importFromId The id of the existing Sslcert that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslcert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcert citrixadc_sslcert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcertConfig
  */
  public constructor(scope: Construct, id: string, config: SslcertConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcert',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacert = config.cacert;
    this._cacertform = config.cacertform;
    this._cakey = config.cakey;
    this._cakeyform = config.cakeyform;
    this._caserial = config.caserial;
    this._certfile = config.certfile;
    this._certform = config.certform;
    this._certtype = config.certtype;
    this._days = config.days;
    this._id = config.id;
    this._keyfile = config.keyfile;
    this._keyform = config.keyform;
    this._pempassphrase = config.pempassphrase;
    this._reqfile = config.reqfile;
    this._subjectaltname = config.subjectaltname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacert - computed: true, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this.getStringAttribute('cacert');
  }
  public set cacert(value: string) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // cacertform - computed: true, optional: true, required: false
  private _cacertform?: string; 
  public get cacertform() {
    return this.getStringAttribute('cacertform');
  }
  public set cacertform(value: string) {
    this._cacertform = value;
  }
  public resetCacertform() {
    this._cacertform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertformInput() {
    return this._cacertform;
  }

  // cakey - computed: true, optional: true, required: false
  private _cakey?: string; 
  public get cakey() {
    return this.getStringAttribute('cakey');
  }
  public set cakey(value: string) {
    this._cakey = value;
  }
  public resetCakey() {
    this._cakey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeyInput() {
    return this._cakey;
  }

  // cakeyform - computed: true, optional: true, required: false
  private _cakeyform?: string; 
  public get cakeyform() {
    return this.getStringAttribute('cakeyform');
  }
  public set cakeyform(value: string) {
    this._cakeyform = value;
  }
  public resetCakeyform() {
    this._cakeyform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeyformInput() {
    return this._cakeyform;
  }

  // caserial - computed: true, optional: true, required: false
  private _caserial?: string; 
  public get caserial() {
    return this.getStringAttribute('caserial');
  }
  public set caserial(value: string) {
    this._caserial = value;
  }
  public resetCaserial() {
    this._caserial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caserialInput() {
    return this._caserial;
  }

  // certfile - computed: false, optional: false, required: true
  private _certfile?: string; 
  public get certfile() {
    return this.getStringAttribute('certfile');
  }
  public set certfile(value: string) {
    this._certfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certfileInput() {
    return this._certfile;
  }

  // certform - computed: true, optional: true, required: false
  private _certform?: string; 
  public get certform() {
    return this.getStringAttribute('certform');
  }
  public set certform(value: string) {
    this._certform = value;
  }
  public resetCertform() {
    this._certform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certformInput() {
    return this._certform;
  }

  // certtype - computed: false, optional: false, required: true
  private _certtype?: string; 
  public get certtype() {
    return this.getStringAttribute('certtype');
  }
  public set certtype(value: string) {
    this._certtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certtypeInput() {
    return this._certtype;
  }

  // days - computed: true, optional: true, required: false
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
      cacert: cdktf.stringToTerraform(this._cacert),
      cacertform: cdktf.stringToTerraform(this._cacertform),
      cakey: cdktf.stringToTerraform(this._cakey),
      cakeyform: cdktf.stringToTerraform(this._cakeyform),
      caserial: cdktf.stringToTerraform(this._caserial),
      certfile: cdktf.stringToTerraform(this._certfile),
      certform: cdktf.stringToTerraform(this._certform),
      certtype: cdktf.stringToTerraform(this._certtype),
      days: cdktf.numberToTerraform(this._days),
      id: cdktf.stringToTerraform(this._id),
      keyfile: cdktf.stringToTerraform(this._keyfile),
      keyform: cdktf.stringToTerraform(this._keyform),
      pempassphrase: cdktf.stringToTerraform(this._pempassphrase),
      reqfile: cdktf.stringToTerraform(this._reqfile),
      subjectaltname: cdktf.stringToTerraform(this._subjectaltname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacert: {
        value: cdktf.stringToHclTerraform(this._cacert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacertform: {
        value: cdktf.stringToHclTerraform(this._cacertform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cakey: {
        value: cdktf.stringToHclTerraform(this._cakey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cakeyform: {
        value: cdktf.stringToHclTerraform(this._cakeyform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caserial: {
        value: cdktf.stringToHclTerraform(this._caserial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certfile: {
        value: cdktf.stringToHclTerraform(this._certfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certform: {
        value: cdktf.stringToHclTerraform(this._certform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certtype: {
        value: cdktf.stringToHclTerraform(this._certtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      days: {
        value: cdktf.numberToHclTerraform(this._days),
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
