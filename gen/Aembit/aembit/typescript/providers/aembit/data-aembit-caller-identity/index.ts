// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/caller_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitCallerIdentityConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/caller_identity aembit_caller_identity}
*/
export class DataAembitCallerIdentity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_caller_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitCallerIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitCallerIdentity to import
  * @param importFromId The id of the existing DataAembitCallerIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/caller_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitCallerIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_caller_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/caller_identity aembit_caller_identity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitCallerIdentityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitCallerIdentityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_caller_identity',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
