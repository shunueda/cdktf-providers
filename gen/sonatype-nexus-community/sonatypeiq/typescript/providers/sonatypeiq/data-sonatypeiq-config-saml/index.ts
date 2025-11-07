// https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/config_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonatypeiqConfigSamlConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/config_saml sonatypeiq_config_saml}
*/
export class DataSonatypeiqConfigSaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonatypeiq_config_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonatypeiqConfigSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonatypeiqConfigSaml to import
  * @param importFromId The id of the existing DataSonatypeiqConfigSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/config_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonatypeiqConfigSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonatypeiq_config_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/config_saml sonatypeiq_config_saml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonatypeiqConfigSamlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonatypeiqConfigSamlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonatypeiq_config_saml',
      terraformGeneratorMetadata: {
        providerName: 'sonatypeiq',
        providerVersion: '0.12.1'
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

  // saml_metadata - computed: true, optional: false, required: false
  public get samlMetadata() {
    return this.getStringAttribute('saml_metadata');
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
