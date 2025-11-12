// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NpaPublisherTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * publisher id. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_token#publisher_id NpaPublisherToken#publisher_id}
  */
  readonly publisherId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_token netskope_npa_publisher_token}
*/
export class NpaPublisherToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publisher_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NpaPublisherToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NpaPublisherToken to import
  * @param importFromId The id of the existing NpaPublisherToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NpaPublisherToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publisher_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_token netskope_npa_publisher_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NpaPublisherTokenConfig
  */
  public constructor(scope: Construct, id: string, config: NpaPublisherTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publisher_token',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._publisherId = config.publisherId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // publisher_id - computed: false, optional: false, required: true
  private _publisherId?: number; 
  public get publisherId() {
    return this.getNumberAttribute('publisher_id');
  }
  public set publisherId(value: number) {
    this._publisherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherIdInput() {
    return this._publisherId;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      publisher_id: cdktf.numberToTerraform(this._publisherId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      publisher_id: {
        value: cdktf.numberToHclTerraform(this._publisherId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
