// https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/user_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAdguardUserRulesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/user_rules adguard_user_rules}
*/
export class DataAdguardUserRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adguard_user_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAdguardUserRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAdguardUserRules to import
  * @param importFromId The id of the existing DataAdguardUserRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/user_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAdguardUserRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adguard_user_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/user_rules adguard_user_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAdguardUserRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAdguardUserRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'adguard_user_rules',
      terraformGeneratorMetadata: {
        providerName: 'adguard',
        providerVersion: '1.6.2'
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

  // rules - computed: true, optional: false, required: false
  public get rules() {
    return this.getListAttribute('rules');
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
