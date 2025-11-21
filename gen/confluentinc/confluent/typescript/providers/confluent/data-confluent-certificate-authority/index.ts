// https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/data-sources/certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluentCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/data-sources/certificate_authority#crl_source DataConfluentCertificateAuthority#crl_source}
  */
  readonly crlSource?: string;
  /**
  * The timestamp for when CRL was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/data-sources/certificate_authority#crl_updated_at DataConfluentCertificateAuthority#crl_updated_at}
  */
  readonly crlUpdatedAt?: string;
  /**
  * The url from which to fetch the CRL for the certificate authority if crl_source is URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/data-sources/certificate_authority#crl_url DataConfluentCertificateAuthority#crl_url}
  */
  readonly crlUrl?: string;
  /**
  * The ID of the Certificate Authority, for example, `op-abc123`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/data-sources/certificate_authority#id DataConfluentCertificateAuthority#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/data-sources/certificate_authority confluent_certificate_authority}
*/
export class DataConfluentCertificateAuthority extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_certificate_authority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluentCertificateAuthority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluentCertificateAuthority to import
  * @param importFromId The id of the existing DataConfluentCertificateAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/data-sources/certificate_authority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluentCertificateAuthority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_certificate_authority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/data-sources/certificate_authority confluent_certificate_authority} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluentCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfluentCertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.54.0',
        providerVersionConstraint: '2.54.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crlSource = config.crlSource;
    this._crlUpdatedAt = config.crlUpdatedAt;
    this._crlUrl = config.crlUrl;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_chain_filename - computed: true, optional: false, required: false
  public get certificateChainFilename() {
    return this.getStringAttribute('certificate_chain_filename');
  }

  // crl_source - computed: true, optional: true, required: false
  private _crlSource?: string; 
  public get crlSource() {
    return this.getStringAttribute('crl_source');
  }
  public set crlSource(value: string) {
    this._crlSource = value;
  }
  public resetCrlSource() {
    this._crlSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSourceInput() {
    return this._crlSource;
  }

  // crl_updated_at - computed: true, optional: true, required: false
  private _crlUpdatedAt?: string; 
  public get crlUpdatedAt() {
    return this.getStringAttribute('crl_updated_at');
  }
  public set crlUpdatedAt(value: string) {
    this._crlUpdatedAt = value;
  }
  public resetCrlUpdatedAt() {
    this._crlUpdatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlUpdatedAtInput() {
    return this._crlUpdatedAt;
  }

  // crl_url - computed: true, optional: true, required: false
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // expiration_dates - computed: true, optional: false, required: false
  public get expirationDates() {
    return cdktf.Fn.tolist(this.getListAttribute('expiration_dates'));
  }

  // fingerprints - computed: true, optional: false, required: false
  public get fingerprints() {
    return cdktf.Fn.tolist(this.getListAttribute('fingerprints'));
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
      crl_source: cdktf.stringToTerraform(this._crlSource),
      crl_updated_at: cdktf.stringToTerraform(this._crlUpdatedAt),
      crl_url: cdktf.stringToTerraform(this._crlUrl),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crl_source: {
        value: cdktf.stringToHclTerraform(this._crlSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_updated_at: {
        value: cdktf.stringToHclTerraform(this._crlUpdatedAt),
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
