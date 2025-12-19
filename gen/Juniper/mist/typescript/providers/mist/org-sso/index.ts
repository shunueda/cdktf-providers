// https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgSsoConfig extends cdktf.TerraformMetaArguments {
  /**
  * a URL we will redirect the user after user logout from Mist (for some IdP which supports a custom logout URL that is different from SP-initiated SLO process)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#custom_logout_url OrgSso#custom_logout_url}
  */
  readonly customLogoutUrl?: string;
  /**
  * default role to assign if there’s no match. By default, an assertion is treated as invalid when there’s no role matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#default_role OrgSso#default_role}
  */
  readonly defaultRole?: string;
  /**
  * IDP Cert (used to verify the signed response)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#idp_cert OrgSso#idp_cert}
  */
  readonly idpCert: string;
  /**
  * Signing algorithm for SAML Assertion. enum `sha1`, `sha256`, `sha384`, `sha512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#idp_sign_algo OrgSso#idp_sign_algo}
  */
  readonly idpSignAlgo: string;
  /**
  * IDP Single-Sign-On URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#idp_sso_url OrgSso#idp_sso_url}
  */
  readonly idpSsoUrl: string;
  /**
  * ignore any unmatched roles provided in assertion. By default, an assertion is treated as invalid for any unmatched role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#ignore_unmatched_roles OrgSso#ignore_unmatched_roles}
  */
  readonly ignoreUnmatchedRoles?: boolean | cdktf.IResolvable;
  /**
  * IDP issuer URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#issuer OrgSso#issuer}
  */
  readonly issuer: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#name OrgSso#name}
  */
  readonly name: string;
  /**
  * enum: `email`, `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#nameid_format OrgSso#nameid_format}
  */
  readonly nameidFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#org_id OrgSso#org_id}
  */
  readonly orgId: string;
  /**
  * custom role attribute parsing scheme. Supported Role Parsing Schemes <table><tr><th>Name</th><th>Scheme</th></tr><tr><td>`cn`</td><td><ul><li>The expected role attribute format in SAML Assertion is “CN=cn,OU=ou1,OU=ou2,…”</li><li>CN (the key) is case insensitive and exactly 1 CN is expected (or the entire entry will be ignored)</li></ul>E.g. if role attribute is “CN=cn,OU=ou1,OU=ou2” then parsed role value is “cn”</td></tr></table>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#role_attr_extraction OrgSso#role_attr_extraction}
  */
  readonly roleAttrExtraction?: string;
  /**
  * name of the attribute in SAML Assertion to extract role from. Default: `Role`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#role_attr_from OrgSso#role_attr_from}
  */
  readonly roleAttrFrom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso mist_org_sso}
*/
export class OrgSso extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_sso";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgSso resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgSso to import
  * @param importFromId The id of the existing OrgSso that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgSso to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_sso", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_sso mist_org_sso} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgSsoConfig
  */
  public constructor(scope: Construct, id: string, config: OrgSsoConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_sso',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customLogoutUrl = config.customLogoutUrl;
    this._defaultRole = config.defaultRole;
    this._idpCert = config.idpCert;
    this._idpSignAlgo = config.idpSignAlgo;
    this._idpSsoUrl = config.idpSsoUrl;
    this._ignoreUnmatchedRoles = config.ignoreUnmatchedRoles;
    this._issuer = config.issuer;
    this._name = config.name;
    this._nameidFormat = config.nameidFormat;
    this._orgId = config.orgId;
    this._roleAttrExtraction = config.roleAttrExtraction;
    this._roleAttrFrom = config.roleAttrFrom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_logout_url - computed: false, optional: true, required: false
  private _customLogoutUrl?: string; 
  public get customLogoutUrl() {
    return this.getStringAttribute('custom_logout_url');
  }
  public set customLogoutUrl(value: string) {
    this._customLogoutUrl = value;
  }
  public resetCustomLogoutUrl() {
    this._customLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogoutUrlInput() {
    return this._customLogoutUrl;
  }

  // default_role - computed: false, optional: true, required: false
  private _defaultRole?: string; 
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }
  public set defaultRole(value: string) {
    this._defaultRole = value;
  }
  public resetDefaultRole() {
    this._defaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // idp_sign_algo - computed: false, optional: false, required: true
  private _idpSignAlgo?: string; 
  public get idpSignAlgo() {
    return this.getStringAttribute('idp_sign_algo');
  }
  public set idpSignAlgo(value: string) {
    this._idpSignAlgo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSignAlgoInput() {
    return this._idpSignAlgo;
  }

  // idp_sso_url - computed: false, optional: false, required: true
  private _idpSsoUrl?: string; 
  public get idpSsoUrl() {
    return this.getStringAttribute('idp_sso_url');
  }
  public set idpSsoUrl(value: string) {
    this._idpSsoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSsoUrlInput() {
    return this._idpSsoUrl;
  }

  // ignore_unmatched_roles - computed: false, optional: true, required: false
  private _ignoreUnmatchedRoles?: boolean | cdktf.IResolvable; 
  public get ignoreUnmatchedRoles() {
    return this.getBooleanAttribute('ignore_unmatched_roles');
  }
  public set ignoreUnmatchedRoles(value: boolean | cdktf.IResolvable) {
    this._ignoreUnmatchedRoles = value;
  }
  public resetIgnoreUnmatchedRoles() {
    this._ignoreUnmatchedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnmatchedRolesInput() {
    return this._ignoreUnmatchedRoles;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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

  // nameid_format - computed: true, optional: true, required: false
  private _nameidFormat?: string; 
  public get nameidFormat() {
    return this.getStringAttribute('nameid_format');
  }
  public set nameidFormat(value: string) {
    this._nameidFormat = value;
  }
  public resetNameidFormat() {
    this._nameidFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameidFormatInput() {
    return this._nameidFormat;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // role_attr_extraction - computed: false, optional: true, required: false
  private _roleAttrExtraction?: string; 
  public get roleAttrExtraction() {
    return this.getStringAttribute('role_attr_extraction');
  }
  public set roleAttrExtraction(value: string) {
    this._roleAttrExtraction = value;
  }
  public resetRoleAttrExtraction() {
    this._roleAttrExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAttrExtractionInput() {
    return this._roleAttrExtraction;
  }

  // role_attr_from - computed: true, optional: true, required: false
  private _roleAttrFrom?: string; 
  public get roleAttrFrom() {
    return this.getStringAttribute('role_attr_from');
  }
  public set roleAttrFrom(value: string) {
    this._roleAttrFrom = value;
  }
  public resetRoleAttrFrom() {
    this._roleAttrFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAttrFromInput() {
    return this._roleAttrFrom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_logout_url: cdktf.stringToTerraform(this._customLogoutUrl),
      default_role: cdktf.stringToTerraform(this._defaultRole),
      idp_cert: cdktf.stringToTerraform(this._idpCert),
      idp_sign_algo: cdktf.stringToTerraform(this._idpSignAlgo),
      idp_sso_url: cdktf.stringToTerraform(this._idpSsoUrl),
      ignore_unmatched_roles: cdktf.booleanToTerraform(this._ignoreUnmatchedRoles),
      issuer: cdktf.stringToTerraform(this._issuer),
      name: cdktf.stringToTerraform(this._name),
      nameid_format: cdktf.stringToTerraform(this._nameidFormat),
      org_id: cdktf.stringToTerraform(this._orgId),
      role_attr_extraction: cdktf.stringToTerraform(this._roleAttrExtraction),
      role_attr_from: cdktf.stringToTerraform(this._roleAttrFrom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_logout_url: {
        value: cdktf.stringToHclTerraform(this._customLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_role: {
        value: cdktf.stringToHclTerraform(this._defaultRole),
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
      idp_sign_algo: {
        value: cdktf.stringToHclTerraform(this._idpSignAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_sso_url: {
        value: cdktf.stringToHclTerraform(this._idpSsoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_unmatched_roles: {
        value: cdktf.booleanToHclTerraform(this._ignoreUnmatchedRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      nameid_format: {
        value: cdktf.stringToHclTerraform(this._nameidFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_attr_extraction: {
        value: cdktf.stringToHclTerraform(this._roleAttrExtraction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_attr_from: {
        value: cdktf.stringToHclTerraform(this._roleAttrFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
