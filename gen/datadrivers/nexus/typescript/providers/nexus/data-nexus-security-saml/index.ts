// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNexusSecuritySamlConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_saml nexus_security_saml}
*/
export class DataNexusSecuritySaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNexusSecuritySaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNexusSecuritySaml to import
  * @param importFromId The id of the existing DataNexusSecuritySaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNexusSecuritySaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_saml nexus_security_saml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNexusSecuritySamlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNexusSecuritySamlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_saml',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
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

  // email_attribute - computed: true, optional: false, required: false
  public get emailAttribute() {
    return this.getStringAttribute('email_attribute');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // first_name_attribute - computed: true, optional: false, required: false
  public get firstNameAttribute() {
    return this.getStringAttribute('first_name_attribute');
  }

  // groups_attribute - computed: true, optional: false, required: false
  public get groupsAttribute() {
    return this.getStringAttribute('groups_attribute');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_metadata - computed: true, optional: false, required: false
  public get idpMetadata() {
    return this.getStringAttribute('idp_metadata');
  }

  // last_name_attribute - computed: true, optional: false, required: false
  public get lastNameAttribute() {
    return this.getStringAttribute('last_name_attribute');
  }

  // username_attribute - computed: true, optional: false, required: false
  public get usernameAttribute() {
    return this.getStringAttribute('username_attribute');
  }

  // validate_assertion_signature - computed: true, optional: false, required: false
  public get validateAssertionSignature() {
    return this.getBooleanAttribute('validate_assertion_signature');
  }

  // validate_response_signature - computed: true, optional: false, required: false
  public get validateResponseSignature() {
    return this.getBooleanAttribute('validate_response_signature');
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
