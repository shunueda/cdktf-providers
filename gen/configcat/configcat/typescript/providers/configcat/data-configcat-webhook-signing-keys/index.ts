// https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/webhook_signing_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfigcatWebhookSigningKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/webhook_signing_keys#webhook_id DataConfigcatWebhookSigningKeys#webhook_id}
  */
  readonly webhookId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/webhook_signing_keys configcat_webhook_signing_keys}
*/
export class DataConfigcatWebhookSigningKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "configcat_webhook_signing_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfigcatWebhookSigningKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfigcatWebhookSigningKeys to import
  * @param importFromId The id of the existing DataConfigcatWebhookSigningKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/webhook_signing_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfigcatWebhookSigningKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "configcat_webhook_signing_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/webhook_signing_keys configcat_webhook_signing_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfigcatWebhookSigningKeysConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfigcatWebhookSigningKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'configcat_webhook_signing_keys',
      terraformGeneratorMetadata: {
        providerName: 'configcat',
        providerVersion: '5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._webhookId = config.webhookId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key1 - computed: true, optional: false, required: false
  public get key1() {
    return this.getStringAttribute('key1');
  }

  // key2 - computed: true, optional: false, required: false
  public get key2() {
    return this.getStringAttribute('key2');
  }

  // webhook_id - computed: false, optional: false, required: true
  private _webhookId?: number; 
  public get webhookId() {
    return this.getNumberAttribute('webhook_id');
  }
  public set webhookId(value: number) {
    this._webhookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookIdInput() {
    return this._webhookId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      webhook_id: cdktf.numberToTerraform(this._webhookId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      webhook_id: {
        value: cdktf.numberToHclTerraform(this._webhookId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
