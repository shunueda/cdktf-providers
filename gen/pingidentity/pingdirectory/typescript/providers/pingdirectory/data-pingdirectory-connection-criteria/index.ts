// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/connection_criteria
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryConnectionCriteriaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/connection_criteria#name DataPingdirectoryConnectionCriteria#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/connection_criteria pingdirectory_connection_criteria}
*/
export class DataPingdirectoryConnectionCriteria extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_connection_criteria";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryConnectionCriteria resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryConnectionCriteria to import
  * @param importFromId The id of the existing DataPingdirectoryConnectionCriteria that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/connection_criteria#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryConnectionCriteria to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_connection_criteria", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/connection_criteria pingdirectory_connection_criteria} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryConnectionCriteriaConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryConnectionCriteriaConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_connection_criteria',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_included_connection_criteria - computed: true, optional: false, required: false
  public get allIncludedConnectionCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_connection_criteria'));
  }

  // all_included_user_filter - computed: true, optional: false, required: false
  public get allIncludedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_user_filter'));
  }

  // all_included_user_group_dn - computed: true, optional: false, required: false
  public get allIncludedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_user_group_dn'));
  }

  // all_included_user_privilege - computed: true, optional: false, required: false
  public get allIncludedUserPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_user_privilege'));
  }

  // any_included_connection_criteria - computed: true, optional: false, required: false
  public get anyIncludedConnectionCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_connection_criteria'));
  }

  // any_included_user_filter - computed: true, optional: false, required: false
  public get anyIncludedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_user_filter'));
  }

  // any_included_user_group_dn - computed: true, optional: false, required: false
  public get anyIncludedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_user_group_dn'));
  }

  // any_included_user_privilege - computed: true, optional: false, required: false
  public get anyIncludedUserPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_user_privilege'));
  }

  // authentication_security_level - computed: true, optional: false, required: false
  public get authenticationSecurityLevel() {
    return this.getStringAttribute('authentication_security_level');
  }

  // communication_security_level - computed: true, optional: false, required: false
  public get communicationSecurityLevel() {
    return this.getStringAttribute('communication_security_level');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // excluded_client_address - computed: true, optional: false, required: false
  public get excludedClientAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_client_address'));
  }

  // excluded_connection_handler - computed: true, optional: false, required: false
  public get excludedConnectionHandler() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_connection_handler'));
  }

  // excluded_protocol - computed: true, optional: false, required: false
  public get excludedProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_protocol'));
  }

  // excluded_user_base_dn - computed: true, optional: false, required: false
  public get excludedUserBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_user_base_dn'));
  }

  // excluded_user_sasl_mechanism - computed: true, optional: false, required: false
  public get excludedUserSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_user_sasl_mechanism'));
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_client_address - computed: true, optional: false, required: false
  public get includedClientAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('included_client_address'));
  }

  // included_connection_handler - computed: true, optional: false, required: false
  public get includedConnectionHandler() {
    return cdktf.Fn.tolist(this.getListAttribute('included_connection_handler'));
  }

  // included_protocol - computed: true, optional: false, required: false
  public get includedProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('included_protocol'));
  }

  // included_user_base_dn - computed: true, optional: false, required: false
  public get includedUserBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_user_base_dn'));
  }

  // included_user_sasl_mechanism - computed: true, optional: false, required: false
  public get includedUserSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('included_user_sasl_mechanism'));
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // none_included_connection_criteria - computed: true, optional: false, required: false
  public get noneIncludedConnectionCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_connection_criteria'));
  }

  // none_included_user_filter - computed: true, optional: false, required: false
  public get noneIncludedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_user_filter'));
  }

  // none_included_user_group_dn - computed: true, optional: false, required: false
  public get noneIncludedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_user_group_dn'));
  }

  // none_included_user_privilege - computed: true, optional: false, required: false
  public get noneIncludedUserPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_user_privilege'));
  }

  // not_all_included_connection_criteria - computed: true, optional: false, required: false
  public get notAllIncludedConnectionCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_connection_criteria'));
  }

  // not_all_included_user_filter - computed: true, optional: false, required: false
  public get notAllIncludedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_user_filter'));
  }

  // not_all_included_user_group_dn - computed: true, optional: false, required: false
  public get notAllIncludedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_user_group_dn'));
  }

  // not_all_included_user_privilege - computed: true, optional: false, required: false
  public get notAllIncludedUserPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_user_privilege'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_auth_type - computed: true, optional: false, required: false
  public get userAuthType() {
    return cdktf.Fn.tolist(this.getListAttribute('user_auth_type'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
