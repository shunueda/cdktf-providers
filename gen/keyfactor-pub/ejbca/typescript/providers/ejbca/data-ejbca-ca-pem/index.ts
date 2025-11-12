// https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/data-sources/ca_pem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEjbcaCaPemConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DN of the CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/data-sources/ca_pem#dn DataEjbcaCaPem#dn}
  */
  readonly dn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/data-sources/ca_pem ejbca_ca_pem}
*/
export class DataEjbcaCaPem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ejbca_ca_pem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEjbcaCaPem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEjbcaCaPem to import
  * @param importFromId The id of the existing DataEjbcaCaPem that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/data-sources/ca_pem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEjbcaCaPem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ejbca_ca_pem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/data-sources/ca_pem ejbca_ca_pem} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEjbcaCaPemConfig
  */
  public constructor(scope: Construct, id: string, config: DataEjbcaCaPemConfig) {
    super(scope, id, {
      terraformResourceType: 'ejbca_ca_pem',
      terraformGeneratorMetadata: {
        providerName: 'ejbca',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dn = config.dn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_pem - computed: true, optional: false, required: false
  public get caPem() {
    return this.getStringAttribute('ca_pem');
  }

  // dn - computed: false, optional: false, required: true
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dn: cdktf.stringToTerraform(this._dn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
