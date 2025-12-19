// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderPkiCreateOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * '256': 256; '384': 384; '1024': 1024; '2048': 2048; '4096': 4096;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#bits DataThunderPkiCreateOper#bits}
  */
  readonly bits?: string;
  /**
  * 'rsa': rsa; 'ecdsa': ecdsa;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#cert_type DataThunderPkiCreateOper#cert_type}
  */
  readonly certType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#common_name DataThunderPkiCreateOper#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#country DataThunderPkiCreateOper#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#csr_generate DataThunderPkiCreateOper#csr_generate}
  */
  readonly csrGenerate?: number;
  /**
  * 'sha1': sha1; 'sha256': sha256; 'sha384': sha384; 'sha512': sha512;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#digest DataThunderPkiCreateOper#digest}
  */
  readonly digest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#division DataThunderPkiCreateOper#division}
  */
  readonly division?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#email DataThunderPkiCreateOper#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#filename DataThunderPkiCreateOper#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#id DataThunderPkiCreateOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#locality DataThunderPkiCreateOper#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#organization DataThunderPkiCreateOper#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#rootca DataThunderPkiCreateOper#rootca}
  */
  readonly rootca?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#secured DataThunderPkiCreateOper#secured}
  */
  readonly secured?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#state_province DataThunderPkiCreateOper#state_province}
  */
  readonly stateProvince?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#v3_request DataThunderPkiCreateOper#v3_request}
  */
  readonly v3Request?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#valid_days DataThunderPkiCreateOper#valid_days}
  */
  readonly validDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper thunder_pki_create_oper}
*/
export class DataThunderPkiCreateOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_pki_create_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderPkiCreateOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderPkiCreateOper to import
  * @param importFromId The id of the existing DataThunderPkiCreateOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderPkiCreateOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_pki_create_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/pki_create_oper thunder_pki_create_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderPkiCreateOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderPkiCreateOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_pki_create_oper',
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
    this._bits = config.bits;
    this._certType = config.certType;
    this._commonName = config.commonName;
    this._country = config.country;
    this._csrGenerate = config.csrGenerate;
    this._digest = config.digest;
    this._division = config.division;
    this._email = config.email;
    this._filename = config.filename;
    this._id = config.id;
    this._locality = config.locality;
    this._organization = config.organization;
    this._rootca = config.rootca;
    this._secured = config.secured;
    this._stateProvince = config.stateProvince;
    this._v3Request = config.v3Request;
    this._validDays = config.validDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bits - computed: false, optional: true, required: false
  private _bits?: string; 
  public get bits() {
    return this.getStringAttribute('bits');
  }
  public set bits(value: string) {
    this._bits = value;
  }
  public resetBits() {
    this._bits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitsInput() {
    return this._bits;
  }

  // cert_type - computed: false, optional: true, required: false
  private _certType?: string; 
  public get certType() {
    return this.getStringAttribute('cert_type');
  }
  public set certType(value: string) {
    this._certType = value;
  }
  public resetCertType() {
    this._certType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // common_name - computed: false, optional: true, required: false
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

  // csr_generate - computed: false, optional: true, required: false
  private _csrGenerate?: number; 
  public get csrGenerate() {
    return this.getNumberAttribute('csr_generate');
  }
  public set csrGenerate(value: number) {
    this._csrGenerate = value;
  }
  public resetCsrGenerate() {
    this._csrGenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrGenerateInput() {
    return this._csrGenerate;
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // division - computed: false, optional: true, required: false
  private _division?: string; 
  public get division() {
    return this.getStringAttribute('division');
  }
  public set division(value: string) {
    this._division = value;
  }
  public resetDivision() {
    this._division = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionInput() {
    return this._division;
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

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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

  // rootca - computed: false, optional: true, required: false
  private _rootca?: number; 
  public get rootca() {
    return this.getNumberAttribute('rootca');
  }
  public set rootca(value: number) {
    this._rootca = value;
  }
  public resetRootca() {
    this._rootca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootcaInput() {
    return this._rootca;
  }

  // secured - computed: false, optional: true, required: false
  private _secured?: number; 
  public get secured() {
    return this.getNumberAttribute('secured');
  }
  public set secured(value: number) {
    this._secured = value;
  }
  public resetSecured() {
    this._secured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securedInput() {
    return this._secured;
  }

  // state_province - computed: false, optional: true, required: false
  private _stateProvince?: string; 
  public get stateProvince() {
    return this.getStringAttribute('state_province');
  }
  public set stateProvince(value: string) {
    this._stateProvince = value;
  }
  public resetStateProvince() {
    this._stateProvince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateProvinceInput() {
    return this._stateProvince;
  }

  // v3_request - computed: false, optional: true, required: false
  private _v3Request?: number; 
  public get v3Request() {
    return this.getNumberAttribute('v3_request');
  }
  public set v3Request(value: number) {
    this._v3Request = value;
  }
  public resetV3Request() {
    this._v3Request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3RequestInput() {
    return this._v3Request;
  }

  // valid_days - computed: false, optional: true, required: false
  private _validDays?: number; 
  public get validDays() {
    return this.getNumberAttribute('valid_days');
  }
  public set validDays(value: number) {
    this._validDays = value;
  }
  public resetValidDays() {
    this._validDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validDaysInput() {
    return this._validDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bits: cdktf.stringToTerraform(this._bits),
      cert_type: cdktf.stringToTerraform(this._certType),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.stringToTerraform(this._country),
      csr_generate: cdktf.numberToTerraform(this._csrGenerate),
      digest: cdktf.stringToTerraform(this._digest),
      division: cdktf.stringToTerraform(this._division),
      email: cdktf.stringToTerraform(this._email),
      filename: cdktf.stringToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
      locality: cdktf.stringToTerraform(this._locality),
      organization: cdktf.stringToTerraform(this._organization),
      rootca: cdktf.numberToTerraform(this._rootca),
      secured: cdktf.numberToTerraform(this._secured),
      state_province: cdktf.stringToTerraform(this._stateProvince),
      v3_request: cdktf.numberToTerraform(this._v3Request),
      valid_days: cdktf.numberToTerraform(this._validDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bits: {
        value: cdktf.stringToHclTerraform(this._bits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_type: {
        value: cdktf.stringToHclTerraform(this._certType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_generate: {
        value: cdktf.numberToHclTerraform(this._csrGenerate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      digest: {
        value: cdktf.stringToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division: {
        value: cdktf.stringToHclTerraform(this._division),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
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
      locality: {
        value: cdktf.stringToHclTerraform(this._locality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rootca: {
        value: cdktf.numberToHclTerraform(this._rootca),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secured: {
        value: cdktf.numberToHclTerraform(this._secured),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state_province: {
        value: cdktf.stringToHclTerraform(this._stateProvince),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v3_request: {
        value: cdktf.numberToHclTerraform(this._v3Request),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      valid_days: {
        value: cdktf.numberToHclTerraform(this._validDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
