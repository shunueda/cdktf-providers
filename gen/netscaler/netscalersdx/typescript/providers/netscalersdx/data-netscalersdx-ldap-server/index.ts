// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ldap_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxLdapServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ldap_server#id DataNetscalersdxLdapServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of LDAP server. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ldap_server#name DataNetscalersdxLdapServer#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ldap_server netscalersdx_ldap_server}
*/
export class DataNetscalersdxLdapServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_ldap_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxLdapServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxLdapServer to import
  * @param importFromId The id of the existing DataNetscalersdxLdapServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ldap_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxLdapServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_ldap_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ldap_server netscalersdx_ldap_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxLdapServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxLdapServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_ldap_server',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_timeout - computed: true, optional: false, required: false
  public get authTimeout() {
    return this.getNumberAttribute('auth_timeout');
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // bind_passwd - computed: true, optional: false, required: false
  public get bindPasswd() {
    return this.getStringAttribute('bind_passwd');
  }

  // change_password - computed: true, optional: false, required: false
  public get changePassword() {
    return this.getBooleanAttribute('change_password');
  }

  // default_authentication_group - computed: true, optional: false, required: false
  public get defaultAuthenticationGroup() {
    return this.getStringAttribute('default_authentication_group');
  }

  // follow_referrals - computed: true, optional: false, required: false
  public get followReferrals() {
    return this.getBooleanAttribute('follow_referrals');
  }

  // group_attr_name - computed: true, optional: false, required: false
  public get groupAttrName() {
    return this.getStringAttribute('group_attr_name');
  }

  // group_name_identifier - computed: true, optional: false, required: false
  public get groupNameIdentifier() {
    return this.getStringAttribute('group_name_identifier');
  }

  // group_search_attribute - computed: true, optional: false, required: false
  public get groupSearchAttribute() {
    return this.getStringAttribute('group_search_attribute');
  }

  // group_search_filter - computed: true, optional: false, required: false
  public get groupSearchFilter() {
    return this.getStringAttribute('group_search_filter');
  }

  // group_search_subattribute - computed: true, optional: false, required: false
  public get groupSearchSubattribute() {
    return this.getStringAttribute('group_search_subattribute');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ldap_host_name - computed: true, optional: false, required: false
  public get ldapHostName() {
    return this.getStringAttribute('ldap_host_name');
  }

  // login_name - computed: true, optional: false, required: false
  public get loginName() {
    return this.getStringAttribute('login_name');
  }

  // max_ldap_referrals - computed: true, optional: false, required: false
  public get maxLdapReferrals() {
    return this.getNumberAttribute('max_ldap_referrals');
  }

  // max_nesting_level - computed: true, optional: false, required: false
  public get maxNestingLevel() {
    return this.getNumberAttribute('max_nesting_level');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nested_group_extraction - computed: true, optional: false, required: false
  public get nestedGroupExtraction() {
    return this.getBooleanAttribute('nested_group_extraction');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // search_filter - computed: true, optional: false, required: false
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }

  // sec_type - computed: true, optional: false, required: false
  public get secType() {
    return this.getStringAttribute('sec_type');
  }

  // ssh_public_key - computed: true, optional: false, required: false
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }

  // subattribute_name - computed: true, optional: false, required: false
  public get subattributeName() {
    return this.getStringAttribute('subattribute_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validate_ldap_server_certs - computed: true, optional: false, required: false
  public get validateLdapServerCerts() {
    return this.getBooleanAttribute('validate_ldap_server_certs');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
