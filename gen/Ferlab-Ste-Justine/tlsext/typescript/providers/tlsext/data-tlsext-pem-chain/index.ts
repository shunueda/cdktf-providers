// https://registry.terraform.io/providers/ferlab-ste-justine/tlsext/0.2.0/docs/data-sources/pem_chain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTlsextPemChainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/tlsext/0.2.0/docs/data-sources/pem_chain#id DataTlsextPemChain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Concatenated pem chain to parse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/tlsext/0.2.0/docs/data-sources/pem_chain#pem_chain DataTlsextPemChain#pem_chain}
  */
  readonly pemChain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/tlsext/0.2.0/docs/data-sources/pem_chain tlsext_pem_chain}
*/
export class DataTlsextPemChain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tlsext_pem_chain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTlsextPemChain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTlsextPemChain to import
  * @param importFromId The id of the existing DataTlsextPemChain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/tlsext/0.2.0/docs/data-sources/pem_chain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTlsextPemChain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tlsext_pem_chain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/tlsext/0.2.0/docs/data-sources/pem_chain tlsext_pem_chain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTlsextPemChainConfig
  */
  public constructor(scope: Construct, id: string, config: DataTlsextPemChainConfig) {
    super(scope, id, {
      terraformResourceType: 'tlsext_pem_chain',
      terraformGeneratorMetadata: {
        providerName: 'tlsext',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._pemChain = config.pemChain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // first_pem - computed: true, optional: false, required: false
  public get firstPem() {
    return this.getStringAttribute('first_pem');
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

  // last_pem - computed: true, optional: false, required: false
  public get lastPem() {
    return this.getStringAttribute('last_pem');
  }

  // pem_chain - computed: false, optional: false, required: true
  private _pemChain?: string; 
  public get pemChain() {
    return this.getStringAttribute('pem_chain');
  }
  public set pemChain(value: string) {
    this._pemChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemChainInput() {
    return this._pemChain;
  }

  // pem_list - computed: true, optional: false, required: false
  public get pemList() {
    return this.getListAttribute('pem_list');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pem_chain: cdktf.stringToTerraform(this._pemChain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pem_chain: {
        value: cdktf.stringToHclTerraform(this._pemChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
