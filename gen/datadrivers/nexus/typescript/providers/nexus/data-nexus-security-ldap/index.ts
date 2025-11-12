// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNexusSecurityLdapConfig extends cdktf.TerraformMetaArguments {
}
export interface DataNexusSecurityLdapLdap {
}

export function dataNexusSecurityLdapLdapToTerraform(struct?: DataNexusSecurityLdapLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNexusSecurityLdapLdapToHclTerraform(struct?: DataNexusSecurityLdapLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNexusSecurityLdapLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNexusSecurityLdapLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNexusSecurityLdapLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_realm - computed: true, optional: false, required: false
  public get authRealm() {
    return this.getStringAttribute('auth_realm');
  }

  // auth_schema - computed: true, optional: false, required: false
  public get authSchema() {
    return this.getStringAttribute('auth_schema');
  }

  // auth_username - computed: true, optional: false, required: false
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }

  // connection_retry_delay_seconds - computed: true, optional: false, required: false
  public get connectionRetryDelaySeconds() {
    return this.getNumberAttribute('connection_retry_delay_seconds');
  }

  // connection_timeout_seconds - computed: true, optional: false, required: false
  public get connectionTimeoutSeconds() {
    return this.getNumberAttribute('connection_timeout_seconds');
  }

  // group_base_dn - computed: true, optional: false, required: false
  public get groupBaseDn() {
    return this.getStringAttribute('group_base_dn');
  }

  // group_id_attribute - computed: true, optional: false, required: false
  public get groupIdAttribute() {
    return this.getStringAttribute('group_id_attribute');
  }

  // group_member_attribute - computed: true, optional: false, required: false
  public get groupMemberAttribute() {
    return this.getStringAttribute('group_member_attribute');
  }

  // group_member_format - computed: true, optional: false, required: false
  public get groupMemberFormat() {
    return this.getStringAttribute('group_member_format');
  }

  // group_object_class - computed: true, optional: false, required: false
  public get groupObjectClass() {
    return this.getStringAttribute('group_object_class');
  }

  // group_subtree - computed: true, optional: false, required: false
  public get groupSubtree() {
    return this.getStringAttribute('group_subtree');
  }

  // group_type - computed: true, optional: false, required: false
  public get groupType() {
    return this.getStringAttribute('group_type');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_groups_as_roles - computed: true, optional: false, required: false
  public get ldapGroupsAsRoles() {
    return this.getBooleanAttribute('ldap_groups_as_roles');
  }

  // max_incident_count - computed: true, optional: false, required: false
  public get maxIncidentCount() {
    return this.getNumberAttribute('max_incident_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // search_base - computed: true, optional: false, required: false
  public get searchBase() {
    return this.getStringAttribute('search_base');
  }

  // use_trust_store - computed: true, optional: false, required: false
  public get useTrustStore() {
    return this.getBooleanAttribute('use_trust_store');
  }

  // user_base_dn - computed: true, optional: false, required: false
  public get userBaseDn() {
    return this.getStringAttribute('user_base_dn');
  }

  // user_email_address_attribute - computed: true, optional: false, required: false
  public get userEmailAddressAttribute() {
    return this.getStringAttribute('user_email_address_attribute');
  }

  // user_id_attribute - computed: true, optional: false, required: false
  public get userIdAttribute() {
    return this.getStringAttribute('user_id_attribute');
  }

  // user_ldap_filter - computed: true, optional: false, required: false
  public get userLdapFilter() {
    return this.getStringAttribute('user_ldap_filter');
  }

  // user_member_of_attribute - computed: true, optional: false, required: false
  public get userMemberOfAttribute() {
    return this.getStringAttribute('user_member_of_attribute');
  }

  // user_object_class - computed: true, optional: false, required: false
  public get userObjectClass() {
    return this.getStringAttribute('user_object_class');
  }

  // user_password_attribute - computed: true, optional: false, required: false
  public get userPasswordAttribute() {
    return this.getStringAttribute('user_password_attribute');
  }

  // user_real_name_attribute - computed: true, optional: false, required: false
  public get userRealNameAttribute() {
    return this.getStringAttribute('user_real_name_attribute');
  }

  // user_subtree - computed: true, optional: false, required: false
  public get userSubtree() {
    return this.getBooleanAttribute('user_subtree');
  }
}

export class DataNexusSecurityLdapLdapList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNexusSecurityLdapLdapOutputReference {
    return new DataNexusSecurityLdapLdapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_ldap nexus_security_ldap}
*/
export class DataNexusSecurityLdap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNexusSecurityLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNexusSecurityLdap to import
  * @param importFromId The id of the existing DataNexusSecurityLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNexusSecurityLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_ldap nexus_security_ldap} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNexusSecurityLdapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNexusSecurityLdapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_ldap',
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap - computed: true, optional: false, required: false
  private _ldap = new DataNexusSecurityLdapLdapList(this, "ldap", false);
  public get ldap() {
    return this._ldap;
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
