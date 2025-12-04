// https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/cognito_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVyCognitoInfoConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/cognito_info vy_cognito_info}
*/
export class DataVyCognitoInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vy_cognito_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVyCognitoInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVyCognitoInfo to import
  * @param importFromId The id of the existing DataVyCognitoInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/cognito_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVyCognitoInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vy_cognito_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/cognito_info vy_cognito_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVyCognitoInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVyCognitoInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vy_cognito_info',
      terraformGeneratorMetadata: {
        providerName: 'vy',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
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

  // auth_url - computed: true, optional: false, required: false
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // jwks_url - computed: true, optional: false, required: false
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }

  // open_id_url - computed: true, optional: false, required: false
  public get openIdUrl() {
    return this.getStringAttribute('open_id_url');
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
