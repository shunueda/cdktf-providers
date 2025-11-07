// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/access_token_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCyralAccessTokenSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/access_token_settings cyral_access_token_settings}
*/
export class DataCyralAccessTokenSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_access_token_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCyralAccessTokenSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCyralAccessTokenSettings to import
  * @param importFromId The id of the existing DataCyralAccessTokenSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/access_token_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCyralAccessTokenSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_access_token_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/access_token_settings cyral_access_token_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCyralAccessTokenSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCyralAccessTokenSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cyral_access_token_settings',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
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

  // default_validity - computed: true, optional: false, required: false
  public get defaultValidity() {
    return this.getStringAttribute('default_validity');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_number_of_tokens_per_user - computed: true, optional: false, required: false
  public get maxNumberOfTokensPerUser() {
    return this.getNumberAttribute('max_number_of_tokens_per_user');
  }

  // max_validity - computed: true, optional: false, required: false
  public get maxValidity() {
    return this.getStringAttribute('max_validity');
  }

  // offline_token_validation - computed: true, optional: false, required: false
  public get offlineTokenValidation() {
    return this.getBooleanAttribute('offline_token_validation');
  }

  // token_length - computed: true, optional: false, required: false
  public get tokenLength() {
    return this.getNumberAttribute('token_length');
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
