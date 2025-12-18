// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * A PEM encoded string containing the signing certificate chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority#certificate_chain CertificateAuthority#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * The name of the certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority#certificate_chain_filename CertificateAuthority#certificate_chain_filename}
  */
  readonly certificateChainFilename: string;
  /**
  * A PEM encoded string containing the CRL for this certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority#crl_chain CertificateAuthority#crl_chain}
  */
  readonly crlChain?: string;
  /**
  * The url from which to fetch the CRL for the certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority#crl_url CertificateAuthority#crl_url}
  */
  readonly crlUrl?: string;
  /**
  * A description of the Certificate Authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority#description CertificateAuthority#description}
  */
  readonly description: string;
  /**
  * A name for the Certificate Authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority#display_name CertificateAuthority#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority#id CertificateAuthority#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority confluent_certificate_authority}
*/
export class CertificateAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_certificate_authority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateAuthority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateAuthority to import
  * @param importFromId The id of the existing CertificateAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateAuthority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_certificate_authority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/certificate_authority confluent_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.57.0',
        providerVersionConstraint: '2.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateChain = config.certificateChain;
    this._certificateChainFilename = config.certificateChainFilename;
    this._crlChain = config.crlChain;
    this._crlUrl = config.crlUrl;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // certificate_chain_filename - computed: false, optional: false, required: true
  private _certificateChainFilename?: string; 
  public get certificateChainFilename() {
    return this.getStringAttribute('certificate_chain_filename');
  }
  public set certificateChainFilename(value: string) {
    this._certificateChainFilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainFilenameInput() {
    return this._certificateChainFilename;
  }

  // crl_chain - computed: false, optional: true, required: false
  private _crlChain?: string; 
  public get crlChain() {
    return this.getStringAttribute('crl_chain');
  }
  public set crlChain(value: string) {
    this._crlChain = value;
  }
  public resetCrlChain() {
    this._crlChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlChainInput() {
    return this._crlChain;
  }

  // crl_source - computed: true, optional: false, required: false
  public get crlSource() {
    return this.getStringAttribute('crl_source');
  }

  // crl_updated_at - computed: true, optional: false, required: false
  public get crlUpdatedAt() {
    return this.getStringAttribute('crl_updated_at');
  }

  // crl_url - computed: false, optional: true, required: false
  private _crlUrl?: string; 
  public get crlUrl() {
    return this.getStringAttribute('crl_url');
  }
  public set crlUrl(value: string) {
    this._crlUrl = value;
  }
  public resetCrlUrl() {
    this._crlUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlUrlInput() {
    return this._crlUrl;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // expiration_dates - computed: true, optional: false, required: false
  public get expirationDates() {
    return cdktf.Fn.tolist(this.getListAttribute('expiration_dates'));
  }

  // fingerprints - computed: true, optional: false, required: false
  public get fingerprints() {
    return cdktf.Fn.tolist(this.getListAttribute('fingerprints'));
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

  // serial_numbers - computed: true, optional: false, required: false
  public get serialNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('serial_numbers'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      certificate_chain_filename: cdktf.stringToTerraform(this._certificateChainFilename),
      crl_chain: cdktf.stringToTerraform(this._crlChain),
      crl_url: cdktf.stringToTerraform(this._crlUrl),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_chain: {
        value: cdktf.stringToHclTerraform(this._certificateChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_chain_filename: {
        value: cdktf.stringToHclTerraform(this._certificateChainFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_chain: {
        value: cdktf.stringToHclTerraform(this._crlChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_url: {
        value: cdktf.stringToHclTerraform(this._crlUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
