// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCyralSidecarIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the sidecar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_id#sidecar_name DataCyralSidecarId#sidecar_name}
  */
  readonly sidecarName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_id cyral_sidecar_id}
*/
export class DataCyralSidecarId extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_sidecar_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCyralSidecarId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCyralSidecarId to import
  * @param importFromId The id of the existing DataCyralSidecarId that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCyralSidecarId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_sidecar_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_id cyral_sidecar_id} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCyralSidecarIdConfig
  */
  public constructor(scope: Construct, id: string, config: DataCyralSidecarIdConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_sidecar_id',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sidecarName = config.sidecarName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sidecar_name - computed: false, optional: false, required: true
  private _sidecarName?: string; 
  public get sidecarName() {
    return this.getStringAttribute('sidecar_name');
  }
  public set sidecarName(value: string) {
    this._sidecarName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarNameInput() {
    return this._sidecarName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sidecar_name: cdktf.stringToTerraform(this._sidecarName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sidecar_name: {
        value: cdktf.stringToHclTerraform(this._sidecarName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
