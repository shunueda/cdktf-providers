// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileCsrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#cert_type FileCsr#cert_type}
  */
  readonly certType?: string;
  /**
  * Common name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#common_name FileCsr#common_name}
  */
  readonly commonName: string;
  /**
  * Country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#country FileCsr#country}
  */
  readonly country: string;
  /**
  * Digest type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#digest FileCsr#digest}
  */
  readonly digest?: string;
  /**
  * Division
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#division FileCsr#division}
  */
  readonly division?: string;
  /**
  * Email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#email FileCsr#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#id FileCsr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#key_size FileCsr#key_size}
  */
  readonly keySize?: string;
  /**
  * Locality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#locality FileCsr#locality}
  */
  readonly locality?: string;
  /**
  * Local file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#name FileCsr#name}
  */
  readonly name: string;
  /**
  * Organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#organization FileCsr#organization}
  */
  readonly organization?: string;
  /**
  * Mark key as non-exportable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#secured FileCsr#secured}
  */
  readonly secured?: number;
  /**
  * State province
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#state_province FileCsr#state_province}
  */
  readonly stateProvince?: string;
  /**
  * Valid days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#valid_days FileCsr#valid_days}
  */
  readonly validDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr thunder_file_csr}
*/
export class FileCsr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_file_csr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileCsr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileCsr to import
  * @param importFromId The id of the existing FileCsr that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileCsr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_file_csr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_csr thunder_file_csr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileCsrConfig
  */
  public constructor(scope: Construct, id: string, config: FileCsrConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_file_csr',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certType = config.certType;
    this._commonName = config.commonName;
    this._country = config.country;
    this._digest = config.digest;
    this._division = config.division;
    this._email = config.email;
    this._id = config.id;
    this._keySize = config.keySize;
    this._locality = config.locality;
    this._name = config.name;
    this._organization = config.organization;
    this._secured = config.secured;
    this._stateProvince = config.stateProvince;
    this._validDays = config.validDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
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

  // key_size - computed: false, optional: true, required: false
  private _keySize?: string; 
  public get keySize() {
    return this.getStringAttribute('key_size');
  }
  public set keySize(value: string) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
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
      cert_type: cdktf.stringToTerraform(this._certType),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.stringToTerraform(this._country),
      digest: cdktf.stringToTerraform(this._digest),
      division: cdktf.stringToTerraform(this._division),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      key_size: cdktf.stringToTerraform(this._keySize),
      locality: cdktf.stringToTerraform(this._locality),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      secured: cdktf.numberToTerraform(this._secured),
      state_province: cdktf.stringToTerraform(this._stateProvince),
      valid_days: cdktf.numberToTerraform(this._validDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_size: {
        value: cdktf.stringToHclTerraform(this._keySize),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
