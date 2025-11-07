// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_user_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNexusSecurityUserTokenConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_user_token nexus_security_user_token}
*/
export class DataNexusSecurityUserToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_user_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNexusSecurityUserToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNexusSecurityUserToken to import
  * @param importFromId The id of the existing DataNexusSecurityUserToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_user_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNexusSecurityUserToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_user_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_user_token nexus_security_user_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNexusSecurityUserTokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNexusSecurityUserTokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_user_token',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expiration_days - computed: true, optional: false, required: false
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }

  // expiration_enabled - computed: true, optional: false, required: false
  public get expirationEnabled() {
    return this.getBooleanAttribute('expiration_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protect_content - computed: true, optional: false, required: false
  public get protectContent() {
    return this.getBooleanAttribute('protect_content');
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
