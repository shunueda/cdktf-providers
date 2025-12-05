// generated from terraform resource schema

import { DataKeyhubClientapplicationAccessprofileclientsList, 
DataKeyhubClientapplicationAuditOutputReference, 
DataKeyhubClientapplicationGroupclientsList, 
DataKeyhubClientapplicationGroupsList, 
DataKeyhubClientapplicationLdapClientOutputReference, 
DataKeyhubClientapplicationLinksList, 
DataKeyhubClientapplicationOauth2ClientOutputReference, 
DataKeyhubClientapplicationOrganizationalUnitsList, 
DataKeyhubClientapplicationOwnerOutputReference, 
DataKeyhubClientapplicationPermissionsList, 
DataKeyhubClientapplicationSaml2ClientOutputReference, 
DataKeyhubClientapplicationSecretOutputReference, 
DataKeyhubClientapplicationTechnicalAdministratorOutputReference, 
DataKeyhubClientapplicationTileOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataKeyhubClientapplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/data-sources/clientapplication#additional DataKeyhubClientapplication#additional}
  */
  readonly additional?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/data-sources/clientapplication#uuid DataKeyhubClientapplication#uuid}
  */
  readonly uuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/data-sources/clientapplication keyhub_clientapplication}
*/
export class DataKeyhubClientapplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyhub_clientapplication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyhubClientapplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyhubClientapplication to import
  * @param importFromId The id of the existing DataKeyhubClientapplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/data-sources/clientapplication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyhubClientapplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyhub_clientapplication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/data-sources/clientapplication keyhub_clientapplication} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyhubClientapplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyhubClientapplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'keyhub_clientapplication',
      terraformGeneratorMetadata: {
        providerName: 'keyhub',
        providerVersion: '2.45.0',
        providerVersionConstraint: '2.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additional = config.additional;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessprofileclients - computed: true, optional: false, required: false
  private _accessprofileclients = new DataKeyhubClientapplicationAccessprofileclientsList(this, "accessprofileclients", false);
  public get accessprofileclients() {
    return this._accessprofileclients;
  }

  // additional - computed: false, optional: true, required: false
  private _additional?: string[]; 
  public get additional() {
    return this.getListAttribute('additional');
  }
  public set additional(value: string[]) {
    this._additional = value;
  }
  public resetAdditional() {
    this._additional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInput() {
    return this._additional;
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new DataKeyhubClientapplicationAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // groupclients - computed: true, optional: false, required: false
  private _groupclients = new DataKeyhubClientapplicationGroupclientsList(this, "groupclients", false);
  public get groupclients() {
    return this._groupclients;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataKeyhubClientapplicationGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // ldap_client - computed: true, optional: false, required: false
  private _ldapClient = new DataKeyhubClientapplicationLdapClientOutputReference(this, "ldap_client");
  public get ldapClient() {
    return this._ldapClient;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubClientapplicationLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth2_client - computed: true, optional: false, required: false
  private _oauth2Client = new DataKeyhubClientapplicationOauth2ClientOutputReference(this, "oauth2_client");
  public get oauth2Client() {
    return this._oauth2Client;
  }

  // organizational_units - computed: true, optional: false, required: false
  private _organizationalUnits = new DataKeyhubClientapplicationOrganizationalUnitsList(this, "organizational_units", false);
  public get organizationalUnits() {
    return this._organizationalUnits;
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataKeyhubClientapplicationOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubClientapplicationPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // saml2_client - computed: true, optional: false, required: false
  private _saml2Client = new DataKeyhubClientapplicationSaml2ClientOutputReference(this, "saml2_client");
  public get saml2Client() {
    return this._saml2Client;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataKeyhubClientapplicationSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }

  // sso_application - computed: true, optional: false, required: false
  public get ssoApplication() {
    return this.getBooleanAttribute('sso_application');
  }

  // technical_administrator - computed: true, optional: false, required: false
  private _technicalAdministrator = new DataKeyhubClientapplicationTechnicalAdministratorOutputReference(this, "technical_administrator");
  public get technicalAdministrator() {
    return this._technicalAdministrator;
  }

  // tile - computed: true, optional: false, required: false
  private _tile = new DataKeyhubClientapplicationTileOutputReference(this, "tile");
  public get tile() {
    return this._tile;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vault_record_count - computed: true, optional: false, required: false
  public get vaultRecordCount() {
    return this.getNumberAttribute('vault_record_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additional),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additional),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
