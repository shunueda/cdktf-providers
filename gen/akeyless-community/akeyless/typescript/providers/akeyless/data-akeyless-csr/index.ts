// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkeylessCsrConfig extends cdktf.TerraformMetaArguments {
  /**
  * The algorithm (RSA/Elliptic-curve) to use for generating the new key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#alg DataAkeylessCsr#alg}
  */
  readonly alg?: string;
  /**
  * A comma-separated list of dns alternative names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#alt_names DataAkeylessCsr#alt_names}
  */
  readonly altNames?: string;
  /**
  * The certificate type to be included in the CSR certificate (ssl-client/ssl-server/certificate-signing)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#certificate_type DataAkeylessCsr#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * The city to be included in the CSR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#city DataAkeylessCsr#city}
  */
  readonly city?: string;
  /**
  * The common name to be included in the CSR certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#common_name DataAkeylessCsr#common_name}
  */
  readonly commonName: string;
  /**
  * The country to be included in the CSR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#country DataAkeylessCsr#country}
  */
  readonly country?: string;
  /**
  * Add critical to the key usage extension (will be false if not added)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#critical DataAkeylessCsr#critical}
  */
  readonly critical?: boolean | cdktf.IResolvable;
  /**
  * The department to be included in the CSR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#dep DataAkeylessCsr#dep}
  */
  readonly dep?: string;
  /**
  * A comma-separated list of email addresses alternative names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#email_addresses DataAkeylessCsr#email_addresses}
  */
  readonly emailAddresses?: string;
  /**
  * Generate a new classic key for the csr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#generate_key DataAkeylessCsr#generate_key}
  */
  readonly generateKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#id DataAkeylessCsr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A comma-separated list of ip addresses alternative names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#ip_addresses DataAkeylessCsr#ip_addresses}
  */
  readonly ipAddresses?: string;
  /**
  * The type of the key to generate (classic-key/dfc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#key_type DataAkeylessCsr#key_type}
  */
  readonly keyType?: string;
  /**
  * The classic key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#name DataAkeylessCsr#name}
  */
  readonly name: string;
  /**
  * The organization to be included in the CSR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#org DataAkeylessCsr#org}
  */
  readonly org?: string;
  /**
  * The number of fragments that the item will be split into (not includes customer fragment, relevant only for dfc keys)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#split_level DataAkeylessCsr#split_level}
  */
  readonly splitLevel?: number;
  /**
  * The state to be included in the CSR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#state DataAkeylessCsr#state}
  */
  readonly state?: string;
  /**
  * A comma-separated list of uri alternative names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#uri_sans DataAkeylessCsr#uri_sans}
  */
  readonly uriSans?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr akeyless_csr}
*/
export class DataAkeylessCsr extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_csr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkeylessCsr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkeylessCsr to import
  * @param importFromId The id of the existing DataAkeylessCsr that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkeylessCsr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_csr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/csr akeyless_csr} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkeylessCsrConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkeylessCsrConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_csr',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alg = config.alg;
    this._altNames = config.altNames;
    this._certificateType = config.certificateType;
    this._city = config.city;
    this._commonName = config.commonName;
    this._country = config.country;
    this._critical = config.critical;
    this._dep = config.dep;
    this._emailAddresses = config.emailAddresses;
    this._generateKey = config.generateKey;
    this._id = config.id;
    this._ipAddresses = config.ipAddresses;
    this._keyType = config.keyType;
    this._name = config.name;
    this._org = config.org;
    this._splitLevel = config.splitLevel;
    this._state = config.state;
    this._uriSans = config.uriSans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alg - computed: false, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // alt_names - computed: false, optional: true, required: false
  private _altNames?: string; 
  public get altNames() {
    return this.getStringAttribute('alt_names');
  }
  public set altNames(value: string) {
    this._altNames = value;
  }
  public resetAltNames() {
    this._altNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNamesInput() {
    return this._altNames;
  }

  // certificate_type - computed: false, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
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

  // critical - computed: false, optional: true, required: false
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // dep - computed: false, optional: true, required: false
  private _dep?: string; 
  public get dep() {
    return this.getStringAttribute('dep');
  }
  public set dep(value: string) {
    this._dep = value;
  }
  public resetDep() {
    this._dep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depInput() {
    return this._dep;
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string; 
  public get emailAddresses() {
    return this.getStringAttribute('email_addresses');
  }
  public set emailAddresses(value: string) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // generate_key - computed: false, optional: true, required: false
  private _generateKey?: boolean | cdktf.IResolvable; 
  public get generateKey() {
    return this.getBooleanAttribute('generate_key');
  }
  public set generateKey(value: boolean | cdktf.IResolvable) {
    this._generateKey = value;
  }
  public resetGenerateKey() {
    this._generateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateKeyInput() {
    return this._generateKey;
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

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string; 
  public get ipAddresses() {
    return this.getStringAttribute('ip_addresses');
  }
  public set ipAddresses(value: string) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // split_level - computed: false, optional: true, required: false
  private _splitLevel?: number; 
  public get splitLevel() {
    return this.getNumberAttribute('split_level');
  }
  public set splitLevel(value: number) {
    this._splitLevel = value;
  }
  public resetSplitLevel() {
    this._splitLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitLevelInput() {
    return this._splitLevel;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // uri_sans - computed: false, optional: true, required: false
  private _uriSans?: string; 
  public get uriSans() {
    return this.getStringAttribute('uri_sans');
  }
  public set uriSans(value: string) {
    this._uriSans = value;
  }
  public resetUriSans() {
    this._uriSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriSansInput() {
    return this._uriSans;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alg: cdktf.stringToTerraform(this._alg),
      alt_names: cdktf.stringToTerraform(this._altNames),
      certificate_type: cdktf.stringToTerraform(this._certificateType),
      city: cdktf.stringToTerraform(this._city),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.stringToTerraform(this._country),
      critical: cdktf.booleanToTerraform(this._critical),
      dep: cdktf.stringToTerraform(this._dep),
      email_addresses: cdktf.stringToTerraform(this._emailAddresses),
      generate_key: cdktf.booleanToTerraform(this._generateKey),
      id: cdktf.stringToTerraform(this._id),
      ip_addresses: cdktf.stringToTerraform(this._ipAddresses),
      key_type: cdktf.stringToTerraform(this._keyType),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      split_level: cdktf.numberToTerraform(this._splitLevel),
      state: cdktf.stringToTerraform(this._state),
      uri_sans: cdktf.stringToTerraform(this._uriSans),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alg: {
        value: cdktf.stringToHclTerraform(this._alg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alt_names: {
        value: cdktf.stringToHclTerraform(this._altNames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_type: {
        value: cdktf.stringToHclTerraform(this._certificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
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
      critical: {
        value: cdktf.booleanToHclTerraform(this._critical),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dep: {
        value: cdktf.stringToHclTerraform(this._dep),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_addresses: {
        value: cdktf.stringToHclTerraform(this._emailAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_key: {
        value: cdktf.booleanToHclTerraform(this._generateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addresses: {
        value: cdktf.stringToHclTerraform(this._ipAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_level: {
        value: cdktf.numberToHclTerraform(this._splitLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri_sans: {
        value: cdktf.stringToHclTerraform(this._uriSans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
