// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/data-sources/x509
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRouterosX509Config extends cdktf.TerraformMetaArguments {
  /**
  * X509 certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/data-sources/x509#data DataRouterosX509#data}
  */
  readonly data: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/data-sources/x509 routeros_x509}
*/
export class DataRouterosX509 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_x509";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRouterosX509 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRouterosX509 to import
  * @param importFromId The id of the existing DataRouterosX509 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/data-sources/x509#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRouterosX509 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_x509", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/data-sources/x509 routeros_x509} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRouterosX509Config
  */
  public constructor(scope: Construct, id: string, config: DataRouterosX509Config) {
    super(scope, id, {
      terraformResourceType: 'routeros_x509',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._data = config.data;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // akid - computed: true, optional: false, required: false
  public get akid() {
    return this.getStringAttribute('akid');
  }

  // authority - computed: true, optional: false, required: false
  public get authority() {
    return this.getBooleanAttribute('authority');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // digest_algorithm - computed: true, optional: false, required: false
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invalid_after - computed: true, optional: false, required: false
  public get invalidAfter() {
    return this.getStringAttribute('invalid_after');
  }

  // invalid_before - computed: true, optional: false, required: false
  public get invalidBefore() {
    return this.getStringAttribute('invalid_before');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // pem - computed: true, optional: false, required: false
  public get pem() {
    return this.getStringAttribute('pem');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // skid - computed: true, optional: false, required: false
  public get skid() {
    return this.getStringAttribute('skid');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subject_alt_name - computed: true, optional: false, required: false
  public get subjectAltName() {
    return this.getStringAttribute('subject_alt_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data: cdktf.stringToTerraform(this._data),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
