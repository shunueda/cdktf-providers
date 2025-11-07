// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_defaults
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayDefaultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default Certificate access-id for UI login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_defaults#cert_access_id GatewayDefaults#cert_access_id}
  */
  readonly certAccessId?: string;
  /**
  * Trigger an event when Gateway status is changed [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_defaults#event_on_status_change GatewayDefaults#event_on_status_change}
  */
  readonly eventOnStatusChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_defaults#id GatewayDefaults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the gateway default encryption key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_defaults#key GatewayDefaults#key}
  */
  readonly key?: string;
  /**
  * Default OIDC access-id for UI login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_defaults#oidc_access_id GatewayDefaults#oidc_access_id}
  */
  readonly oidcAccessId?: string;
  /**
  * Default SAML access-id for UI login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_defaults#saml_access_id GatewayDefaults#saml_access_id}
  */
  readonly samlAccessId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_defaults akeyless_gateway_defaults}
*/
export class GatewayDefaults extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_gateway_defaults";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayDefaults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayDefaults to import
  * @param importFromId The id of the existing GatewayDefaults that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_defaults#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayDefaults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_gateway_defaults", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_defaults akeyless_gateway_defaults} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayDefaultsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GatewayDefaultsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless_gateway_defaults',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certAccessId = config.certAccessId;
    this._eventOnStatusChange = config.eventOnStatusChange;
    this._id = config.id;
    this._key = config.key;
    this._oidcAccessId = config.oidcAccessId;
    this._samlAccessId = config.samlAccessId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_access_id - computed: false, optional: true, required: false
  private _certAccessId?: string; 
  public get certAccessId() {
    return this.getStringAttribute('cert_access_id');
  }
  public set certAccessId(value: string) {
    this._certAccessId = value;
  }
  public resetCertAccessId() {
    this._certAccessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certAccessIdInput() {
    return this._certAccessId;
  }

  // event_on_status_change - computed: false, optional: true, required: false
  private _eventOnStatusChange?: string; 
  public get eventOnStatusChange() {
    return this.getStringAttribute('event_on_status_change');
  }
  public set eventOnStatusChange(value: string) {
    this._eventOnStatusChange = value;
  }
  public resetEventOnStatusChange() {
    this._eventOnStatusChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventOnStatusChangeInput() {
    return this._eventOnStatusChange;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // oidc_access_id - computed: false, optional: true, required: false
  private _oidcAccessId?: string; 
  public get oidcAccessId() {
    return this.getStringAttribute('oidc_access_id');
  }
  public set oidcAccessId(value: string) {
    this._oidcAccessId = value;
  }
  public resetOidcAccessId() {
    this._oidcAccessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAccessIdInput() {
    return this._oidcAccessId;
  }

  // saml_access_id - computed: false, optional: true, required: false
  private _samlAccessId?: string; 
  public get samlAccessId() {
    return this.getStringAttribute('saml_access_id');
  }
  public set samlAccessId(value: string) {
    this._samlAccessId = value;
  }
  public resetSamlAccessId() {
    this._samlAccessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAccessIdInput() {
    return this._samlAccessId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_access_id: cdktf.stringToTerraform(this._certAccessId),
      event_on_status_change: cdktf.stringToTerraform(this._eventOnStatusChange),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      oidc_access_id: cdktf.stringToTerraform(this._oidcAccessId),
      saml_access_id: cdktf.stringToTerraform(this._samlAccessId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_access_id: {
        value: cdktf.stringToHclTerraform(this._certAccessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_on_status_change: {
        value: cdktf.stringToHclTerraform(this._eventOnStatusChange),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_access_id: {
        value: cdktf.stringToHclTerraform(this._oidcAccessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_access_id: {
        value: cdktf.stringToHclTerraform(this._samlAccessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
