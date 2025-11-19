// https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/named_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftNamedWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/named_webhook#id DataSpaceliftNamedWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/named_webhook#webhook_id DataSpaceliftNamedWebhook#webhook_id}
  */
  readonly webhookId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/named_webhook spacelift_named_webhook}
*/
export class DataSpaceliftNamedWebhook extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_named_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftNamedWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftNamedWebhook to import
  * @param importFromId The id of the existing DataSpaceliftNamedWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/named_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftNamedWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_named_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/named_webhook spacelift_named_webhook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftNamedWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftNamedWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_named_webhook',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
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
    this._webhookId = config.webhookId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // retry_on_failure - computed: true, optional: false, required: false
  public get retryOnFailure() {
    return this.getBooleanAttribute('retry_on_failure');
  }

  // secret_header_keys - computed: true, optional: false, required: false
  public get secretHeaderKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('secret_header_keys'));
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // webhook_id - computed: false, optional: false, required: true
  private _webhookId?: string; 
  public get webhookId() {
    return this.getStringAttribute('webhook_id');
  }
  public set webhookId(value: string) {
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
      id: cdktf.stringToTerraform(this._id),
      webhook_id: cdktf.stringToTerraform(this._webhookId),
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
      webhook_id: {
        value: cdktf.stringToHclTerraform(this._webhookId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
