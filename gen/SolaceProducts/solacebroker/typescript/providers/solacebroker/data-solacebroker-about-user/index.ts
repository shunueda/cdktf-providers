// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/about_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerAboutUserConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/about_user solacebroker_about_user}
*/
export class DataSolacebrokerAboutUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_about_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerAboutUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerAboutUser to import
  * @param importFromId The id of the existing DataSolacebrokerAboutUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/about_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerAboutUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_about_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/about_user solacebroker_about_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerAboutUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerAboutUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_about_user',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
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

  // global_access_level - computed: true, optional: false, required: false
  public get globalAccessLevel() {
    return this.getStringAttribute('global_access_level');
  }

  // session_active - computed: true, optional: false, required: false
  public get sessionActive() {
    return this.getBooleanAttribute('session_active');
  }

  // session_create_time - computed: true, optional: false, required: false
  public get sessionCreateTime() {
    return this.getNumberAttribute('session_create_time');
  }

  // session_current_time - computed: true, optional: false, required: false
  public get sessionCurrentTime() {
    return this.getNumberAttribute('session_current_time');
  }

  // session_hard_expiry_time - computed: true, optional: false, required: false
  public get sessionHardExpiryTime() {
    return this.getNumberAttribute('session_hard_expiry_time');
  }

  // session_id - computed: true, optional: false, required: false
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }

  // session_idle_expiry_time - computed: true, optional: false, required: false
  public get sessionIdleExpiryTime() {
    return this.getNumberAttribute('session_idle_expiry_time');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
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
