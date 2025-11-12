// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecAuthRemoteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication ID for the AuthRemote Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote#auth_id IpsecAuthRemote#auth_id}
  */
  readonly authId?: string;
  /**
  * Authentication method for the AuthRemote Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote#authentication IpsecAuthRemote#authentication}
  */
  readonly authentication: string;
  /**
  * List of certificates for the AuthRemote Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote#certificates IpsecAuthRemote#certificates}
  */
  readonly certificates?: string[];
  /**
  * Optional description for the AuthRemote Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote#description IpsecAuthRemote#description}
  */
  readonly description?: string;
  /**
  * EAP ID for the AuthRemote Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote#eap_id IpsecAuthRemote#eap_id}
  */
  readonly eapId?: string;
  /**
  * Enable or disable the AuthRemote Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote#enabled IpsecAuthRemote#enabled}
  */
  readonly enabled?: string;
  /**
  * The parent connection UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote#ipsec_connection IpsecAuthRemote#ipsec_connection}
  */
  readonly ipsecConnection: string;
  /**
  * List of public keys for the AuthRemote Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote#public_keys IpsecAuthRemote#public_keys}
  */
  readonly publicKeys?: string[];
  /**
  * Authentication round for the AuthRemote Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote#round IpsecAuthRemote#round}
  */
  readonly round?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote opnsense_ipsec_auth_remote}
*/
export class IpsecAuthRemote extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_ipsec_auth_remote";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecAuthRemote resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecAuthRemote to import
  * @param importFromId The id of the existing IpsecAuthRemote that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecAuthRemote to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_ipsec_auth_remote", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_auth_remote opnsense_ipsec_auth_remote} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecAuthRemoteConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecAuthRemoteConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_ipsec_auth_remote',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authId = config.authId;
    this._authentication = config.authentication;
    this._certificates = config.certificates;
    this._description = config.description;
    this._eapId = config.eapId;
    this._enabled = config.enabled;
    this._ipsecConnection = config.ipsecConnection;
    this._publicKeys = config.publicKeys;
    this._round = config.round;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_id - computed: false, optional: true, required: false
  private _authId?: string; 
  public get authId() {
    return this.getStringAttribute('auth_id');
  }
  public set authId(value: string) {
    this._authId = value;
  }
  public resetAuthId() {
    this._authId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authIdInput() {
    return this._authId;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates?: string[]; 
  public get certificates() {
    return cdktf.Fn.tolist(this.getListAttribute('certificates'));
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // eap_id - computed: false, optional: true, required: false
  private _eapId?: string; 
  public get eapId() {
    return this.getStringAttribute('eap_id');
  }
  public set eapId(value: string) {
    this._eapId = value;
  }
  public resetEapId() {
    this._eapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapIdInput() {
    return this._eapId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipsec_connection - computed: false, optional: false, required: true
  private _ipsecConnection?: string; 
  public get ipsecConnection() {
    return this.getStringAttribute('ipsec_connection');
  }
  public set ipsecConnection(value: string) {
    this._ipsecConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecConnectionInput() {
    return this._ipsecConnection;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys?: string[]; 
  public get publicKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('public_keys'));
  }
  public set publicKeys(value: string[]) {
    this._publicKeys = value;
  }
  public resetPublicKeys() {
    this._publicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys;
  }

  // round - computed: true, optional: true, required: false
  private _round?: string; 
  public get round() {
    return this.getStringAttribute('round');
  }
  public set round(value: string) {
    this._round = value;
  }
  public resetRound() {
    this._round = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundInput() {
    return this._round;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_id: cdktf.stringToTerraform(this._authId),
      authentication: cdktf.stringToTerraform(this._authentication),
      certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificates),
      description: cdktf.stringToTerraform(this._description),
      eap_id: cdktf.stringToTerraform(this._eapId),
      enabled: cdktf.stringToTerraform(this._enabled),
      ipsec_connection: cdktf.stringToTerraform(this._ipsecConnection),
      public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicKeys),
      round: cdktf.stringToTerraform(this._round),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_id: {
        value: cdktf.stringToHclTerraform(this._authId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_id: {
        value: cdktf.stringToHclTerraform(this._eapId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_connection: {
        value: cdktf.stringToHclTerraform(this._ipsecConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      round: {
        value: cdktf.stringToHclTerraform(this._round),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
