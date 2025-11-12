// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiEdgeworkerActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the EdgeWorker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker_activation#edgeworker_id DataAkamaiEdgeworkerActivation#edgeworker_id}
  */
  readonly edgeworkerId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker_activation#id DataAkamaiEdgeworkerActivation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The network from which the activation will be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker_activation#network DataAkamaiEdgeworkerActivation#network}
  */
  readonly network: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker_activation akamai_edgeworker_activation}
*/
export class DataAkamaiEdgeworkerActivation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_edgeworker_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiEdgeworkerActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiEdgeworkerActivation to import
  * @param importFromId The id of the existing DataAkamaiEdgeworkerActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiEdgeworkerActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_edgeworker_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker_activation akamai_edgeworker_activation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiEdgeworkerActivationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiEdgeworkerActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_edgeworker_activation',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeworkerId = config.edgeworkerId;
    this._id = config.id;
    this._network = config.network;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_id - computed: true, optional: false, required: false
  public get activationId() {
    return this.getNumberAttribute('activation_id');
  }

  // edgeworker_id - computed: false, optional: false, required: true
  private _edgeworkerId?: number; 
  public get edgeworkerId() {
    return this.getNumberAttribute('edgeworker_id');
  }
  public set edgeworkerId(value: number) {
    this._edgeworkerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeworkerIdInput() {
    return this._edgeworkerId;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edgeworker_id: cdktf.numberToTerraform(this._edgeworkerId),
      id: cdktf.stringToTerraform(this._id),
      network: cdktf.stringToTerraform(this._network),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edgeworker_id: {
        value: cdktf.numberToHclTerraform(this._edgeworkerId),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
