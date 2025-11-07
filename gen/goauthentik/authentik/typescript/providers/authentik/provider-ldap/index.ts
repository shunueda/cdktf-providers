// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#base_dn ProviderLdap#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#bind_flow ProviderLdap#bind_flow}
  */
  readonly bindFlow: string;
  /**
  * Defaults to `direct`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#bind_mode ProviderLdap#bind_mode}
  */
  readonly bindMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#certificate ProviderLdap#certificate}
  */
  readonly certificate?: string;
  /**
  * Defaults to `4000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#gid_start_number ProviderLdap#gid_start_number}
  */
  readonly gidStartNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#id ProviderLdap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#mfa_support ProviderLdap#mfa_support}
  */
  readonly mfaSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#name ProviderLdap#name}
  */
  readonly name: string;
  /**
  * Defaults to `direct`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#search_mode ProviderLdap#search_mode}
  */
  readonly searchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#tls_server_name ProviderLdap#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Defaults to `2000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#uid_start_number ProviderLdap#uid_start_number}
  */
  readonly uidStartNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#unbind_flow ProviderLdap#unbind_flow}
  */
  readonly unbindFlow: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap authentik_provider_ldap}
*/
export class ProviderLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_provider_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderLdap to import
  * @param importFromId The id of the existing ProviderLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_provider_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_ldap authentik_provider_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderLdapConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_provider_ldap',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseDn = config.baseDn;
    this._bindFlow = config.bindFlow;
    this._bindMode = config.bindMode;
    this._certificate = config.certificate;
    this._gidStartNumber = config.gidStartNumber;
    this._id = config.id;
    this._mfaSupport = config.mfaSupport;
    this._name = config.name;
    this._searchMode = config.searchMode;
    this._tlsServerName = config.tlsServerName;
    this._uidStartNumber = config.uidStartNumber;
    this._unbindFlow = config.unbindFlow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bind_flow - computed: false, optional: false, required: true
  private _bindFlow?: string; 
  public get bindFlow() {
    return this.getStringAttribute('bind_flow');
  }
  public set bindFlow(value: string) {
    this._bindFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindFlowInput() {
    return this._bindFlow;
  }

  // bind_mode - computed: false, optional: true, required: false
  private _bindMode?: string; 
  public get bindMode() {
    return this.getStringAttribute('bind_mode');
  }
  public set bindMode(value: string) {
    this._bindMode = value;
  }
  public resetBindMode() {
    this._bindMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindModeInput() {
    return this._bindMode;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // gid_start_number - computed: false, optional: true, required: false
  private _gidStartNumber?: number; 
  public get gidStartNumber() {
    return this.getNumberAttribute('gid_start_number');
  }
  public set gidStartNumber(value: number) {
    this._gidStartNumber = value;
  }
  public resetGidStartNumber() {
    this._gidStartNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidStartNumberInput() {
    return this._gidStartNumber;
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

  // mfa_support - computed: false, optional: true, required: false
  private _mfaSupport?: boolean | cdktf.IResolvable; 
  public get mfaSupport() {
    return this.getBooleanAttribute('mfa_support');
  }
  public set mfaSupport(value: boolean | cdktf.IResolvable) {
    this._mfaSupport = value;
  }
  public resetMfaSupport() {
    this._mfaSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaSupportInput() {
    return this._mfaSupport;
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

  // search_mode - computed: false, optional: true, required: false
  private _searchMode?: string; 
  public get searchMode() {
    return this.getStringAttribute('search_mode');
  }
  public set searchMode(value: string) {
    this._searchMode = value;
  }
  public resetSearchMode() {
    this._searchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchModeInput() {
    return this._searchMode;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // uid_start_number - computed: false, optional: true, required: false
  private _uidStartNumber?: number; 
  public get uidStartNumber() {
    return this.getNumberAttribute('uid_start_number');
  }
  public set uidStartNumber(value: number) {
    this._uidStartNumber = value;
  }
  public resetUidStartNumber() {
    this._uidStartNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidStartNumberInput() {
    return this._uidStartNumber;
  }

  // unbind_flow - computed: false, optional: false, required: true
  private _unbindFlow?: string; 
  public get unbindFlow() {
    return this.getStringAttribute('unbind_flow');
  }
  public set unbindFlow(value: string) {
    this._unbindFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unbindFlowInput() {
    return this._unbindFlow;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_dn: cdktf.stringToTerraform(this._baseDn),
      bind_flow: cdktf.stringToTerraform(this._bindFlow),
      bind_mode: cdktf.stringToTerraform(this._bindMode),
      certificate: cdktf.stringToTerraform(this._certificate),
      gid_start_number: cdktf.numberToTerraform(this._gidStartNumber),
      id: cdktf.stringToTerraform(this._id),
      mfa_support: cdktf.booleanToTerraform(this._mfaSupport),
      name: cdktf.stringToTerraform(this._name),
      search_mode: cdktf.stringToTerraform(this._searchMode),
      tls_server_name: cdktf.stringToTerraform(this._tlsServerName),
      uid_start_number: cdktf.numberToTerraform(this._uidStartNumber),
      unbind_flow: cdktf.stringToTerraform(this._unbindFlow),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_dn: {
        value: cdktf.stringToHclTerraform(this._baseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_flow: {
        value: cdktf.stringToHclTerraform(this._bindFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_mode: {
        value: cdktf.stringToHclTerraform(this._bindMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gid_start_number: {
        value: cdktf.numberToHclTerraform(this._gidStartNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_support: {
        value: cdktf.booleanToHclTerraform(this._mfaSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_mode: {
        value: cdktf.stringToHclTerraform(this._searchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_server_name: {
        value: cdktf.stringToHclTerraform(this._tlsServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid_start_number: {
        value: cdktf.numberToHclTerraform(this._uidStartNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unbind_flow: {
        value: cdktf.stringToHclTerraform(this._unbindFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
