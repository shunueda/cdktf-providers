// https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/meta
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBuildkiteMetaConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/meta buildkite_meta}
*/
export class DataBuildkiteMeta extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_meta";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBuildkiteMeta resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBuildkiteMeta to import
  * @param importFromId The id of the existing DataBuildkiteMeta that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/meta#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBuildkiteMeta to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_meta", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/meta buildkite_meta} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBuildkiteMetaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBuildkiteMetaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'buildkite_meta',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.1',
        providerVersionConstraint: '1.27.1'
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

  // webhook_ips - computed: true, optional: false, required: false
  public get webhookIps() {
    return this.getListAttribute('webhook_ips');
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
