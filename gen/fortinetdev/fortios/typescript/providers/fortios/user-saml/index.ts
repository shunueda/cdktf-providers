// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#adfs_claim UserSaml#adfs_claim}
  */
  readonly adfsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#auth_url UserSaml#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#cert UserSaml#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#clock_tolerance UserSaml#clock_tolerance}
  */
  readonly clockTolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#digest_method UserSaml#digest_method}
  */
  readonly digestMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#entity_id UserSaml#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#group_claim_type UserSaml#group_claim_type}
  */
  readonly groupClaimType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#group_name UserSaml#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#id UserSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#idp_cert UserSaml#idp_cert}
  */
  readonly idpCert: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#idp_entity_id UserSaml#idp_entity_id}
  */
  readonly idpEntityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#idp_single_logout_url UserSaml#idp_single_logout_url}
  */
  readonly idpSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#idp_single_sign_on_url UserSaml#idp_single_sign_on_url}
  */
  readonly idpSingleSignOnUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#limit_relaystate UserSaml#limit_relaystate}
  */
  readonly limitRelaystate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#name UserSaml#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#reauth UserSaml#reauth}
  */
  readonly reauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#scim_client UserSaml#scim_client}
  */
  readonly scimClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#scim_group_attr_type UserSaml#scim_group_attr_type}
  */
  readonly scimGroupAttrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#scim_user_attr_type UserSaml#scim_user_attr_type}
  */
  readonly scimUserAttrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#single_logout_url UserSaml#single_logout_url}
  */
  readonly singleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#single_sign_on_url UserSaml#single_sign_on_url}
  */
  readonly singleSignOnUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#user_claim_type UserSaml#user_claim_type}
  */
  readonly userClaimType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#user_name UserSaml#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#vdomparam UserSaml#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml fortios_user_saml}
*/
export class UserSaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserSaml to import
  * @param importFromId The id of the existing UserSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_saml fortios_user_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserSamlConfig
  */
  public constructor(scope: Construct, id: string, config: UserSamlConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_saml',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adfsClaim = config.adfsClaim;
    this._authUrl = config.authUrl;
    this._cert = config.cert;
    this._clockTolerance = config.clockTolerance;
    this._digestMethod = config.digestMethod;
    this._entityId = config.entityId;
    this._groupClaimType = config.groupClaimType;
    this._groupName = config.groupName;
    this._id = config.id;
    this._idpCert = config.idpCert;
    this._idpEntityId = config.idpEntityId;
    this._idpSingleLogoutUrl = config.idpSingleLogoutUrl;
    this._idpSingleSignOnUrl = config.idpSingleSignOnUrl;
    this._limitRelaystate = config.limitRelaystate;
    this._name = config.name;
    this._reauth = config.reauth;
    this._scimClient = config.scimClient;
    this._scimGroupAttrType = config.scimGroupAttrType;
    this._scimUserAttrType = config.scimUserAttrType;
    this._singleLogoutUrl = config.singleLogoutUrl;
    this._singleSignOnUrl = config.singleSignOnUrl;
    this._userClaimType = config.userClaimType;
    this._userName = config.userName;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adfs_claim - computed: true, optional: true, required: false
  private _adfsClaim?: string; 
  public get adfsClaim() {
    return this.getStringAttribute('adfs_claim');
  }
  public set adfsClaim(value: string) {
    this._adfsClaim = value;
  }
  public resetAdfsClaim() {
    this._adfsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsClaimInput() {
    return this._adfsClaim;
  }

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // clock_tolerance - computed: true, optional: true, required: false
  private _clockTolerance?: number; 
  public get clockTolerance() {
    return this.getNumberAttribute('clock_tolerance');
  }
  public set clockTolerance(value: number) {
    this._clockTolerance = value;
  }
  public resetClockTolerance() {
    this._clockTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockToleranceInput() {
    return this._clockTolerance;
  }

  // digest_method - computed: true, optional: true, required: false
  private _digestMethod?: string; 
  public get digestMethod() {
    return this.getStringAttribute('digest_method');
  }
  public set digestMethod(value: string) {
    this._digestMethod = value;
  }
  public resetDigestMethod() {
    this._digestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestMethodInput() {
    return this._digestMethod;
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // group_claim_type - computed: true, optional: true, required: false
  private _groupClaimType?: string; 
  public get groupClaimType() {
    return this.getStringAttribute('group_claim_type');
  }
  public set groupClaimType(value: string) {
    this._groupClaimType = value;
  }
  public resetGroupClaimType() {
    this._groupClaimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupClaimTypeInput() {
    return this._groupClaimType;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // idp_cert - computed: false, optional: false, required: true
  private _idpCert?: string; 
  public get idpCert() {
    return this.getStringAttribute('idp_cert');
  }
  public set idpCert(value: string) {
    this._idpCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertInput() {
    return this._idpCert;
  }

  // idp_entity_id - computed: false, optional: false, required: true
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_single_logout_url - computed: false, optional: true, required: false
  private _idpSingleLogoutUrl?: string; 
  public get idpSingleLogoutUrl() {
    return this.getStringAttribute('idp_single_logout_url');
  }
  public set idpSingleLogoutUrl(value: string) {
    this._idpSingleLogoutUrl = value;
  }
  public resetIdpSingleLogoutUrl() {
    this._idpSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleLogoutUrlInput() {
    return this._idpSingleLogoutUrl;
  }

  // idp_single_sign_on_url - computed: false, optional: false, required: true
  private _idpSingleSignOnUrl?: string; 
  public get idpSingleSignOnUrl() {
    return this.getStringAttribute('idp_single_sign_on_url');
  }
  public set idpSingleSignOnUrl(value: string) {
    this._idpSingleSignOnUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleSignOnUrlInput() {
    return this._idpSingleSignOnUrl;
  }

  // limit_relaystate - computed: true, optional: true, required: false
  private _limitRelaystate?: string; 
  public get limitRelaystate() {
    return this.getStringAttribute('limit_relaystate');
  }
  public set limitRelaystate(value: string) {
    this._limitRelaystate = value;
  }
  public resetLimitRelaystate() {
    this._limitRelaystate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitRelaystateInput() {
    return this._limitRelaystate;
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

  // reauth - computed: true, optional: true, required: false
  private _reauth?: string; 
  public get reauth() {
    return this.getStringAttribute('reauth');
  }
  public set reauth(value: string) {
    this._reauth = value;
  }
  public resetReauth() {
    this._reauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthInput() {
    return this._reauth;
  }

  // scim_client - computed: false, optional: true, required: false
  private _scimClient?: string; 
  public get scimClient() {
    return this.getStringAttribute('scim_client');
  }
  public set scimClient(value: string) {
    this._scimClient = value;
  }
  public resetScimClient() {
    this._scimClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimClientInput() {
    return this._scimClient;
  }

  // scim_group_attr_type - computed: true, optional: true, required: false
  private _scimGroupAttrType?: string; 
  public get scimGroupAttrType() {
    return this.getStringAttribute('scim_group_attr_type');
  }
  public set scimGroupAttrType(value: string) {
    this._scimGroupAttrType = value;
  }
  public resetScimGroupAttrType() {
    this._scimGroupAttrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimGroupAttrTypeInput() {
    return this._scimGroupAttrType;
  }

  // scim_user_attr_type - computed: true, optional: true, required: false
  private _scimUserAttrType?: string; 
  public get scimUserAttrType() {
    return this.getStringAttribute('scim_user_attr_type');
  }
  public set scimUserAttrType(value: string) {
    this._scimUserAttrType = value;
  }
  public resetScimUserAttrType() {
    this._scimUserAttrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimUserAttrTypeInput() {
    return this._scimUserAttrType;
  }

  // single_logout_url - computed: false, optional: true, required: false
  private _singleLogoutUrl?: string; 
  public get singleLogoutUrl() {
    return this.getStringAttribute('single_logout_url');
  }
  public set singleLogoutUrl(value: string) {
    this._singleLogoutUrl = value;
  }
  public resetSingleLogoutUrl() {
    this._singleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutUrlInput() {
    return this._singleLogoutUrl;
  }

  // single_sign_on_url - computed: false, optional: false, required: true
  private _singleSignOnUrl?: string; 
  public get singleSignOnUrl() {
    return this.getStringAttribute('single_sign_on_url');
  }
  public set singleSignOnUrl(value: string) {
    this._singleSignOnUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUrlInput() {
    return this._singleSignOnUrl;
  }

  // user_claim_type - computed: true, optional: true, required: false
  private _userClaimType?: string; 
  public get userClaimType() {
    return this.getStringAttribute('user_claim_type');
  }
  public set userClaimType(value: string) {
    this._userClaimType = value;
  }
  public resetUserClaimType() {
    this._userClaimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userClaimTypeInput() {
    return this._userClaimType;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adfs_claim: cdktf.stringToTerraform(this._adfsClaim),
      auth_url: cdktf.stringToTerraform(this._authUrl),
      cert: cdktf.stringToTerraform(this._cert),
      clock_tolerance: cdktf.numberToTerraform(this._clockTolerance),
      digest_method: cdktf.stringToTerraform(this._digestMethod),
      entity_id: cdktf.stringToTerraform(this._entityId),
      group_claim_type: cdktf.stringToTerraform(this._groupClaimType),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      idp_cert: cdktf.stringToTerraform(this._idpCert),
      idp_entity_id: cdktf.stringToTerraform(this._idpEntityId),
      idp_single_logout_url: cdktf.stringToTerraform(this._idpSingleLogoutUrl),
      idp_single_sign_on_url: cdktf.stringToTerraform(this._idpSingleSignOnUrl),
      limit_relaystate: cdktf.stringToTerraform(this._limitRelaystate),
      name: cdktf.stringToTerraform(this._name),
      reauth: cdktf.stringToTerraform(this._reauth),
      scim_client: cdktf.stringToTerraform(this._scimClient),
      scim_group_attr_type: cdktf.stringToTerraform(this._scimGroupAttrType),
      scim_user_attr_type: cdktf.stringToTerraform(this._scimUserAttrType),
      single_logout_url: cdktf.stringToTerraform(this._singleLogoutUrl),
      single_sign_on_url: cdktf.stringToTerraform(this._singleSignOnUrl),
      user_claim_type: cdktf.stringToTerraform(this._userClaimType),
      user_name: cdktf.stringToTerraform(this._userName),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adfs_claim: {
        value: cdktf.stringToHclTerraform(this._adfsClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_url: {
        value: cdktf.stringToHclTerraform(this._authUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clock_tolerance: {
        value: cdktf.numberToHclTerraform(this._clockTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      digest_method: {
        value: cdktf.stringToHclTerraform(this._digestMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_claim_type: {
        value: cdktf.stringToHclTerraform(this._groupClaimType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_cert: {
        value: cdktf.stringToHclTerraform(this._idpCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_entity_id: {
        value: cdktf.stringToHclTerraform(this._idpEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_single_logout_url: {
        value: cdktf.stringToHclTerraform(this._idpSingleLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_single_sign_on_url: {
        value: cdktf.stringToHclTerraform(this._idpSingleSignOnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_relaystate: {
        value: cdktf.stringToHclTerraform(this._limitRelaystate),
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
      reauth: {
        value: cdktf.stringToHclTerraform(this._reauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_client: {
        value: cdktf.stringToHclTerraform(this._scimClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_group_attr_type: {
        value: cdktf.stringToHclTerraform(this._scimGroupAttrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_user_attr_type: {
        value: cdktf.stringToHclTerraform(this._scimUserAttrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_logout_url: {
        value: cdktf.stringToHclTerraform(this._singleLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_url: {
        value: cdktf.stringToHclTerraform(this._singleSignOnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_claim_type: {
        value: cdktf.stringToHclTerraform(this._userClaimType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
