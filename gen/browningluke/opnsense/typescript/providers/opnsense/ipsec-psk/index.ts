// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_psk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecPskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description for the PSK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_psk#description IpsecPsk#description}
  */
  readonly description?: string;
  /**
  * Local identity for the PSK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_psk#identity_local IpsecPsk#identity_local}
  */
  readonly identityLocal: string;
  /**
  * Remote identity for the PSK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_psk#identity_remote IpsecPsk#identity_remote}
  */
  readonly identityRemote: string;
  /**
  * The pre-shared key used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_psk#pre_shared_key IpsecPsk#pre_shared_key}
  */
  readonly preSharedKey: string;
  /**
  * Type of the pre-shared key. Valid values are 'PSK' (traditional pre-shared key) or 'EAP' (for EAP-MSCHAPv2 authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_psk#type IpsecPsk#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_psk opnsense_ipsec_psk}
*/
export class IpsecPsk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_ipsec_psk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecPsk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecPsk to import
  * @param importFromId The id of the existing IpsecPsk that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_psk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecPsk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_ipsec_psk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_psk opnsense_ipsec_psk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecPskConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecPskConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_ipsec_psk',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._identityLocal = config.identityLocal;
    this._identityRemote = config.identityRemote;
    this._preSharedKey = config.preSharedKey;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_local - computed: false, optional: false, required: true
  private _identityLocal?: string; 
  public get identityLocal() {
    return this.getStringAttribute('identity_local');
  }
  public set identityLocal(value: string) {
    this._identityLocal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityLocalInput() {
    return this._identityLocal;
  }

  // identity_remote - computed: false, optional: false, required: true
  private _identityRemote?: string; 
  public get identityRemote() {
    return this.getStringAttribute('identity_remote');
  }
  public set identityRemote(value: string) {
    this._identityRemote = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityRemoteInput() {
    return this._identityRemote;
  }

  // pre_shared_key - computed: false, optional: false, required: true
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      identity_local: cdktf.stringToTerraform(this._identityLocal),
      identity_remote: cdktf.stringToTerraform(this._identityRemote),
      pre_shared_key: cdktf.stringToTerraform(this._preSharedKey),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_local: {
        value: cdktf.stringToHclTerraform(this._identityLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_remote: {
        value: cdktf.stringToHclTerraform(this._identityRemote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._preSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
