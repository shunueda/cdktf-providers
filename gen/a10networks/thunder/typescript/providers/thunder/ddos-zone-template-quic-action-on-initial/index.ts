// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateQuicActionOnInitialAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial#id DdosZoneTemplateQuicActionOnInitialA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * QuicTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial#quic_tmpl_name DdosZoneTemplateQuicActionOnInitialA#quic_tmpl_name}
  */
  readonly quicTmplName: string;
  /**
  * 'cid-hash': Dynamic retry token based on Destination and Source CID;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial#retry_token_authentication_dynamic DdosZoneTemplateQuicActionOnInitialA#retry_token_authentication_dynamic}
  */
  readonly retryTokenAuthenticationDynamic?: string;
  /**
  * Static retry token (Maximum of 4 bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial#retry_token_authentication_static DdosZoneTemplateQuicActionOnInitialA#retry_token_authentication_static}
  */
  readonly retryTokenAuthenticationStatic?: string;
  /**
  * Decrypt incoming initial packets for unauthenticated clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial#retry_unauthenticated_initial_decrypt DdosZoneTemplateQuicActionOnInitialA#retry_unauthenticated_initial_decrypt}
  */
  readonly retryUnauthenticatedInitialDecrypt?: number;
  /**
  * Set Max SCID length for SCID generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial#scid_length DdosZoneTemplateQuicActionOnInitialA#scid_length}
  */
  readonly scidLength?: number;
  /**
  * 'drop': Drop short header packet;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial#unauth_short_hdr_action DdosZoneTemplateQuicActionOnInitialA#unauth_short_hdr_action}
  */
  readonly unauthShortHdrAction?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial#uuid DdosZoneTemplateQuicActionOnInitialA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial thunder_ddos_zone_template_quic_action_on_initial}
*/
export class DdosZoneTemplateQuicActionOnInitialA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_quic_action_on_initial";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateQuicActionOnInitialA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateQuicActionOnInitialA to import
  * @param importFromId The id of the existing DdosZoneTemplateQuicActionOnInitialA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateQuicActionOnInitialA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_quic_action_on_initial", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_action_on_initial thunder_ddos_zone_template_quic_action_on_initial} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateQuicActionOnInitialAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateQuicActionOnInitialAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_quic_action_on_initial',
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
    this._id = config.id;
    this._quicTmplName = config.quicTmplName;
    this._retryTokenAuthenticationDynamic = config.retryTokenAuthenticationDynamic;
    this._retryTokenAuthenticationStatic = config.retryTokenAuthenticationStatic;
    this._retryUnauthenticatedInitialDecrypt = config.retryUnauthenticatedInitialDecrypt;
    this._scidLength = config.scidLength;
    this._unauthShortHdrAction = config.unauthShortHdrAction;
    this._uuid = config.uuid;
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

  // quic_tmpl_name - computed: false, optional: false, required: true
  private _quicTmplName?: string; 
  public get quicTmplName() {
    return this.getStringAttribute('quic_tmpl_name');
  }
  public set quicTmplName(value: string) {
    this._quicTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quicTmplNameInput() {
    return this._quicTmplName;
  }

  // retry_token_authentication_dynamic - computed: false, optional: true, required: false
  private _retryTokenAuthenticationDynamic?: string; 
  public get retryTokenAuthenticationDynamic() {
    return this.getStringAttribute('retry_token_authentication_dynamic');
  }
  public set retryTokenAuthenticationDynamic(value: string) {
    this._retryTokenAuthenticationDynamic = value;
  }
  public resetRetryTokenAuthenticationDynamic() {
    this._retryTokenAuthenticationDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTokenAuthenticationDynamicInput() {
    return this._retryTokenAuthenticationDynamic;
  }

  // retry_token_authentication_static - computed: false, optional: true, required: false
  private _retryTokenAuthenticationStatic?: string; 
  public get retryTokenAuthenticationStatic() {
    return this.getStringAttribute('retry_token_authentication_static');
  }
  public set retryTokenAuthenticationStatic(value: string) {
    this._retryTokenAuthenticationStatic = value;
  }
  public resetRetryTokenAuthenticationStatic() {
    this._retryTokenAuthenticationStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTokenAuthenticationStaticInput() {
    return this._retryTokenAuthenticationStatic;
  }

  // retry_unauthenticated_initial_decrypt - computed: false, optional: true, required: false
  private _retryUnauthenticatedInitialDecrypt?: number; 
  public get retryUnauthenticatedInitialDecrypt() {
    return this.getNumberAttribute('retry_unauthenticated_initial_decrypt');
  }
  public set retryUnauthenticatedInitialDecrypt(value: number) {
    this._retryUnauthenticatedInitialDecrypt = value;
  }
  public resetRetryUnauthenticatedInitialDecrypt() {
    this._retryUnauthenticatedInitialDecrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryUnauthenticatedInitialDecryptInput() {
    return this._retryUnauthenticatedInitialDecrypt;
  }

  // scid_length - computed: false, optional: true, required: false
  private _scidLength?: number; 
  public get scidLength() {
    return this.getNumberAttribute('scid_length');
  }
  public set scidLength(value: number) {
    this._scidLength = value;
  }
  public resetScidLength() {
    this._scidLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scidLengthInput() {
    return this._scidLength;
  }

  // unauth_short_hdr_action - computed: false, optional: true, required: false
  private _unauthShortHdrAction?: string; 
  public get unauthShortHdrAction() {
    return this.getStringAttribute('unauth_short_hdr_action');
  }
  public set unauthShortHdrAction(value: string) {
    this._unauthShortHdrAction = value;
  }
  public resetUnauthShortHdrAction() {
    this._unauthShortHdrAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthShortHdrActionInput() {
    return this._unauthShortHdrAction;
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
      id: cdktf.stringToTerraform(this._id),
      quic_tmpl_name: cdktf.stringToTerraform(this._quicTmplName),
      retry_token_authentication_dynamic: cdktf.stringToTerraform(this._retryTokenAuthenticationDynamic),
      retry_token_authentication_static: cdktf.stringToTerraform(this._retryTokenAuthenticationStatic),
      retry_unauthenticated_initial_decrypt: cdktf.numberToTerraform(this._retryUnauthenticatedInitialDecrypt),
      scid_length: cdktf.numberToTerraform(this._scidLength),
      unauth_short_hdr_action: cdktf.stringToTerraform(this._unauthShortHdrAction),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      quic_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._quicTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_token_authentication_dynamic: {
        value: cdktf.stringToHclTerraform(this._retryTokenAuthenticationDynamic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_token_authentication_static: {
        value: cdktf.stringToHclTerraform(this._retryTokenAuthenticationStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_unauthenticated_initial_decrypt: {
        value: cdktf.numberToHclTerraform(this._retryUnauthenticatedInitialDecrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scid_length: {
        value: cdktf.numberToHclTerraform(this._scidLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unauth_short_hdr_action: {
        value: cdktf.stringToHclTerraform(this._unauthShortHdrAction),
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
