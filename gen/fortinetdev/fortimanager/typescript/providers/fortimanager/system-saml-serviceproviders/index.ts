// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSamlServiceprovidersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#id SystemSamlServiceproviders#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#idp_entity_id SystemSamlServiceproviders#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#idp_single_logout_url SystemSamlServiceproviders#idp_single_logout_url}
  */
  readonly idpSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#idp_single_sign_on_url SystemSamlServiceproviders#idp_single_sign_on_url}
  */
  readonly idpSingleSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#name SystemSamlServiceproviders#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#prefix SystemSamlServiceproviders#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#sp_adom SystemSamlServiceproviders#sp_adom}
  */
  readonly spAdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#sp_cert SystemSamlServiceproviders#sp_cert}
  */
  readonly spCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#sp_entity_id SystemSamlServiceproviders#sp_entity_id}
  */
  readonly spEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#sp_profile SystemSamlServiceproviders#sp_profile}
  */
  readonly spProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#sp_single_logout_url SystemSamlServiceproviders#sp_single_logout_url}
  */
  readonly spSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#sp_single_sign_on_url SystemSamlServiceproviders#sp_single_sign_on_url}
  */
  readonly spSingleSignOnUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders fortimanager_system_saml_serviceproviders}
*/
export class SystemSamlServiceproviders extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_saml_serviceproviders";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSamlServiceproviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSamlServiceproviders to import
  * @param importFromId The id of the existing SystemSamlServiceproviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSamlServiceproviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_saml_serviceproviders", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_saml_serviceproviders fortimanager_system_saml_serviceproviders} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSamlServiceprovidersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSamlServiceprovidersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_saml_serviceproviders',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._idpEntityId = config.idpEntityId;
    this._idpSingleLogoutUrl = config.idpSingleLogoutUrl;
    this._idpSingleSignOnUrl = config.idpSingleSignOnUrl;
    this._name = config.name;
    this._prefix = config.prefix;
    this._spAdom = config.spAdom;
    this._spCert = config.spCert;
    this._spEntityId = config.spEntityId;
    this._spProfile = config.spProfile;
    this._spSingleLogoutUrl = config.spSingleLogoutUrl;
    this._spSingleSignOnUrl = config.spSingleSignOnUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // idp_entity_id - computed: false, optional: true, required: false
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  public resetIdpEntityId() {
    this._idpEntityId = undefined;
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

  // idp_single_sign_on_url - computed: false, optional: true, required: false
  private _idpSingleSignOnUrl?: string; 
  public get idpSingleSignOnUrl() {
    return this.getStringAttribute('idp_single_sign_on_url');
  }
  public set idpSingleSignOnUrl(value: string) {
    this._idpSingleSignOnUrl = value;
  }
  public resetIdpSingleSignOnUrl() {
    this._idpSingleSignOnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleSignOnUrlInput() {
    return this._idpSingleSignOnUrl;
  }

  // name - computed: false, optional: true, required: false
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // sp_adom - computed: false, optional: true, required: false
  private _spAdom?: string; 
  public get spAdom() {
    return this.getStringAttribute('sp_adom');
  }
  public set spAdom(value: string) {
    this._spAdom = value;
  }
  public resetSpAdom() {
    this._spAdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spAdomInput() {
    return this._spAdom;
  }

  // sp_cert - computed: false, optional: true, required: false
  private _spCert?: string; 
  public get spCert() {
    return this.getStringAttribute('sp_cert');
  }
  public set spCert(value: string) {
    this._spCert = value;
  }
  public resetSpCert() {
    this._spCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spCertInput() {
    return this._spCert;
  }

  // sp_entity_id - computed: false, optional: true, required: false
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  public resetSpEntityId() {
    this._spEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }

  // sp_profile - computed: false, optional: true, required: false
  private _spProfile?: string; 
  public get spProfile() {
    return this.getStringAttribute('sp_profile');
  }
  public set spProfile(value: string) {
    this._spProfile = value;
  }
  public resetSpProfile() {
    this._spProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spProfileInput() {
    return this._spProfile;
  }

  // sp_single_logout_url - computed: false, optional: true, required: false
  private _spSingleLogoutUrl?: string; 
  public get spSingleLogoutUrl() {
    return this.getStringAttribute('sp_single_logout_url');
  }
  public set spSingleLogoutUrl(value: string) {
    this._spSingleLogoutUrl = value;
  }
  public resetSpSingleLogoutUrl() {
    this._spSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSingleLogoutUrlInput() {
    return this._spSingleLogoutUrl;
  }

  // sp_single_sign_on_url - computed: false, optional: true, required: false
  private _spSingleSignOnUrl?: string; 
  public get spSingleSignOnUrl() {
    return this.getStringAttribute('sp_single_sign_on_url');
  }
  public set spSingleSignOnUrl(value: string) {
    this._spSingleSignOnUrl = value;
  }
  public resetSpSingleSignOnUrl() {
    this._spSingleSignOnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSingleSignOnUrlInput() {
    return this._spSingleSignOnUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      idp_entity_id: cdktf.stringToTerraform(this._idpEntityId),
      idp_single_logout_url: cdktf.stringToTerraform(this._idpSingleLogoutUrl),
      idp_single_sign_on_url: cdktf.stringToTerraform(this._idpSingleSignOnUrl),
      name: cdktf.stringToTerraform(this._name),
      prefix: cdktf.stringToTerraform(this._prefix),
      sp_adom: cdktf.stringToTerraform(this._spAdom),
      sp_cert: cdktf.stringToTerraform(this._spCert),
      sp_entity_id: cdktf.stringToTerraform(this._spEntityId),
      sp_profile: cdktf.stringToTerraform(this._spProfile),
      sp_single_logout_url: cdktf.stringToTerraform(this._spSingleLogoutUrl),
      sp_single_sign_on_url: cdktf.stringToTerraform(this._spSingleSignOnUrl),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_adom: {
        value: cdktf.stringToHclTerraform(this._spAdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_cert: {
        value: cdktf.stringToHclTerraform(this._spCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_entity_id: {
        value: cdktf.stringToHclTerraform(this._spEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_profile: {
        value: cdktf.stringToHclTerraform(this._spProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_single_logout_url: {
        value: cdktf.stringToHclTerraform(this._spSingleLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_single_sign_on_url: {
        value: cdktf.stringToHclTerraform(this._spSingleSignOnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
