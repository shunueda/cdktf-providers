// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost_provider_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutpostProviderAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost_provider_attachment#id OutpostProviderAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost_provider_attachment#outpost OutpostProviderAttachment#outpost}
  */
  readonly outpost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost_provider_attachment#protocol_provider OutpostProviderAttachment#protocol_provider}
  */
  readonly protocolProvider: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost_provider_attachment authentik_outpost_provider_attachment}
*/
export class OutpostProviderAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_outpost_provider_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutpostProviderAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutpostProviderAttachment to import
  * @param importFromId The id of the existing OutpostProviderAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost_provider_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutpostProviderAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_outpost_provider_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost_provider_attachment authentik_outpost_provider_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutpostProviderAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: OutpostProviderAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_outpost_provider_attachment',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
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
    this._outpost = config.outpost;
    this._protocolProvider = config.protocolProvider;
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

  // outpost - computed: false, optional: false, required: true
  private _outpost?: string; 
  public get outpost() {
    return this.getStringAttribute('outpost');
  }
  public set outpost(value: string) {
    this._outpost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostInput() {
    return this._outpost;
  }

  // protocol_provider - computed: false, optional: false, required: true
  private _protocolProvider?: number; 
  public get protocolProvider() {
    return this.getNumberAttribute('protocol_provider');
  }
  public set protocolProvider(value: number) {
    this._protocolProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolProviderInput() {
    return this._protocolProvider;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      outpost: cdktf.stringToTerraform(this._outpost),
      protocol_provider: cdktf.numberToTerraform(this._protocolProvider),
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
      outpost: {
        value: cdktf.stringToHclTerraform(this._outpost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_provider: {
        value: cdktf.numberToHclTerraform(this._protocolProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
