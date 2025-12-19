// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateSslL4SslHandshakePolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop packets (Default); 'reset': Reset client connection; 'blacklist-src': Blacklist source IP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#action DdosZoneTemplateSslL4SslHandshakePolicyA#action}
  */
  readonly action?: string;
  /**
  * Set cipher suites limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#cipher_suites_limit DdosZoneTemplateSslL4SslHandshakePolicyA#cipher_suites_limit}
  */
  readonly cipherSuitesLimit?: number;
  /**
  * Set client extensions limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#client_extensions_limit DdosZoneTemplateSslL4SslHandshakePolicyA#client_extensions_limit}
  */
  readonly clientExtensionsLimit?: number;
  /**
  * Set maximum timeout seconds from ClientHello to App-Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#clienthello_to_appdata_timeout DdosZoneTemplateSslL4SslHandshakePolicyA#clienthello_to_appdata_timeout}
  */
  readonly clienthelloToAppdataTimeout?: number;
  /**
  * Set maximum timeout seconds from Handshake finished to App-Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#finished_to_appdata_timeout DdosZoneTemplateSslL4SslHandshakePolicyA#finished_to_appdata_timeout}
  */
  readonly finishedToAppdataTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#id DdosZoneTemplateSslL4SslHandshakePolicyA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set handshaking connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#src_handshaking_conn_limit DdosZoneTemplateSslL4SslHandshakePolicyA#src_handshaking_conn_limit}
  */
  readonly srcHandshakingConnLimit?: number;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#ssl_handshake_policy_action_list_name DdosZoneTemplateSslL4SslHandshakePolicyA#ssl_handshake_policy_action_list_name}
  */
  readonly sslHandshakePolicyActionListName?: string;
  /**
  * SslL4TmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#ssl_l4_tmpl_name DdosZoneTemplateSslL4SslHandshakePolicyA#ssl_l4_tmpl_name}
  */
  readonly sslL4TmplName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#uuid DdosZoneTemplateSslL4SslHandshakePolicyA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy thunder_ddos_zone_template_ssl_l4_ssl_handshake_policy}
*/
export class DdosZoneTemplateSslL4SslHandshakePolicyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_ssl_l4_ssl_handshake_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateSslL4SslHandshakePolicyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateSslL4SslHandshakePolicyA to import
  * @param importFromId The id of the existing DdosZoneTemplateSslL4SslHandshakePolicyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateSslL4SslHandshakePolicyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_ssl_l4_ssl_handshake_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_handshake_policy thunder_ddos_zone_template_ssl_l4_ssl_handshake_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateSslL4SslHandshakePolicyAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateSslL4SslHandshakePolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_ssl_l4_ssl_handshake_policy',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._action = config.action;
    this._cipherSuitesLimit = config.cipherSuitesLimit;
    this._clientExtensionsLimit = config.clientExtensionsLimit;
    this._clienthelloToAppdataTimeout = config.clienthelloToAppdataTimeout;
    this._finishedToAppdataTimeout = config.finishedToAppdataTimeout;
    this._id = config.id;
    this._srcHandshakingConnLimit = config.srcHandshakingConnLimit;
    this._sslHandshakePolicyActionListName = config.sslHandshakePolicyActionListName;
    this._sslL4TmplName = config.sslL4TmplName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cipher_suites_limit - computed: false, optional: true, required: false
  private _cipherSuitesLimit?: number; 
  public get cipherSuitesLimit() {
    return this.getNumberAttribute('cipher_suites_limit');
  }
  public set cipherSuitesLimit(value: number) {
    this._cipherSuitesLimit = value;
  }
  public resetCipherSuitesLimit() {
    this._cipherSuitesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesLimitInput() {
    return this._cipherSuitesLimit;
  }

  // client_extensions_limit - computed: false, optional: true, required: false
  private _clientExtensionsLimit?: number; 
  public get clientExtensionsLimit() {
    return this.getNumberAttribute('client_extensions_limit');
  }
  public set clientExtensionsLimit(value: number) {
    this._clientExtensionsLimit = value;
  }
  public resetClientExtensionsLimit() {
    this._clientExtensionsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientExtensionsLimitInput() {
    return this._clientExtensionsLimit;
  }

  // clienthello_to_appdata_timeout - computed: false, optional: true, required: false
  private _clienthelloToAppdataTimeout?: number; 
  public get clienthelloToAppdataTimeout() {
    return this.getNumberAttribute('clienthello_to_appdata_timeout');
  }
  public set clienthelloToAppdataTimeout(value: number) {
    this._clienthelloToAppdataTimeout = value;
  }
  public resetClienthelloToAppdataTimeout() {
    this._clienthelloToAppdataTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clienthelloToAppdataTimeoutInput() {
    return this._clienthelloToAppdataTimeout;
  }

  // finished_to_appdata_timeout - computed: false, optional: true, required: false
  private _finishedToAppdataTimeout?: number; 
  public get finishedToAppdataTimeout() {
    return this.getNumberAttribute('finished_to_appdata_timeout');
  }
  public set finishedToAppdataTimeout(value: number) {
    this._finishedToAppdataTimeout = value;
  }
  public resetFinishedToAppdataTimeout() {
    this._finishedToAppdataTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedToAppdataTimeoutInput() {
    return this._finishedToAppdataTimeout;
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

  // src_handshaking_conn_limit - computed: false, optional: true, required: false
  private _srcHandshakingConnLimit?: number; 
  public get srcHandshakingConnLimit() {
    return this.getNumberAttribute('src_handshaking_conn_limit');
  }
  public set srcHandshakingConnLimit(value: number) {
    this._srcHandshakingConnLimit = value;
  }
  public resetSrcHandshakingConnLimit() {
    this._srcHandshakingConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHandshakingConnLimitInput() {
    return this._srcHandshakingConnLimit;
  }

  // ssl_handshake_policy_action_list_name - computed: false, optional: true, required: false
  private _sslHandshakePolicyActionListName?: string; 
  public get sslHandshakePolicyActionListName() {
    return this.getStringAttribute('ssl_handshake_policy_action_list_name');
  }
  public set sslHandshakePolicyActionListName(value: string) {
    this._sslHandshakePolicyActionListName = value;
  }
  public resetSslHandshakePolicyActionListName() {
    this._sslHandshakePolicyActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHandshakePolicyActionListNameInput() {
    return this._sslHandshakePolicyActionListName;
  }

  // ssl_l4_tmpl_name - computed: false, optional: false, required: true
  private _sslL4TmplName?: string; 
  public get sslL4TmplName() {
    return this.getStringAttribute('ssl_l4_tmpl_name');
  }
  public set sslL4TmplName(value: string) {
    this._sslL4TmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4TmplNameInput() {
    return this._sslL4TmplName;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      cipher_suites_limit: cdktf.numberToTerraform(this._cipherSuitesLimit),
      client_extensions_limit: cdktf.numberToTerraform(this._clientExtensionsLimit),
      clienthello_to_appdata_timeout: cdktf.numberToTerraform(this._clienthelloToAppdataTimeout),
      finished_to_appdata_timeout: cdktf.numberToTerraform(this._finishedToAppdataTimeout),
      id: cdktf.stringToTerraform(this._id),
      src_handshaking_conn_limit: cdktf.numberToTerraform(this._srcHandshakingConnLimit),
      ssl_handshake_policy_action_list_name: cdktf.stringToTerraform(this._sslHandshakePolicyActionListName),
      ssl_l4_tmpl_name: cdktf.stringToTerraform(this._sslL4TmplName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher_suites_limit: {
        value: cdktf.numberToHclTerraform(this._cipherSuitesLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_extensions_limit: {
        value: cdktf.numberToHclTerraform(this._clientExtensionsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clienthello_to_appdata_timeout: {
        value: cdktf.numberToHclTerraform(this._clienthelloToAppdataTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      finished_to_appdata_timeout: {
        value: cdktf.numberToHclTerraform(this._finishedToAppdataTimeout),
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
      src_handshaking_conn_limit: {
        value: cdktf.numberToHclTerraform(this._srcHandshakingConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_handshake_policy_action_list_name: {
        value: cdktf.stringToHclTerraform(this._sslHandshakePolicyActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_l4_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._sslL4TmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
