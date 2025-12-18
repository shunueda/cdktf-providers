// https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/data-sources/webhook_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpslevelWebhookActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id or alias of the Webhook Action to find.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/data-sources/webhook_action#identifier DataOpslevelWebhookAction#identifier}
  */
  readonly identifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/data-sources/webhook_action opslevel_webhook_action}
*/
export class DataOpslevelWebhookAction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_webhook_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpslevelWebhookAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpslevelWebhookAction to import
  * @param importFromId The id of the existing DataOpslevelWebhookAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/data-sources/webhook_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpslevelWebhookAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_webhook_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/data-sources/webhook_action opslevel_webhook_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpslevelWebhookActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpslevelWebhookActionConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_webhook_action',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.1',
        providerVersionConstraint: '1.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._identifier = config.identifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: cdktf.stringToTerraform(this._identifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
