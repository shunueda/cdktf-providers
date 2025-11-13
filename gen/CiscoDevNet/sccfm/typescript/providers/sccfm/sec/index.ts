// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/resources/sec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/resources/sec sccfm_sec}
*/
export class Sec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_sec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sec to import
  * @param importFromId The id of the existing Sec that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/resources/sec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_sec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/resources/sec sccfm_sec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sccfm_sec',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
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

  // cdo_bootstrap_data - computed: true, optional: false, required: false
  public get cdoBootstrapData() {
    return this.getStringAttribute('cdo_bootstrap_data');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sec_bootstrap_data - computed: true, optional: false, required: false
  public get secBootstrapData() {
    return this.getStringAttribute('sec_bootstrap_data');
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
