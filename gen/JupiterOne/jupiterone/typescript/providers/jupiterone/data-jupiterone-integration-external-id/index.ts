// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/data-sources/integration_external_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJupiteroneIntegrationExternalIdConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/data-sources/integration_external_id jupiterone_integration_external_id}
*/
export class DataJupiteroneIntegrationExternalId extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_integration_external_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJupiteroneIntegrationExternalId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJupiteroneIntegrationExternalId to import
  * @param importFromId The id of the existing DataJupiteroneIntegrationExternalId that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/data-sources/integration_external_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJupiteroneIntegrationExternalId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_integration_external_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/data-sources/integration_external_id jupiterone_integration_external_id} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJupiteroneIntegrationExternalIdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataJupiteroneIntegrationExternalIdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_integration_external_id',
      terraformGeneratorMetadata: {
        providerName: 'jupiterone',
        providerVersion: '1.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
