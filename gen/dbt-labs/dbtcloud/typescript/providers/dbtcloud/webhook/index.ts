// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Webhooks active flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/webhook#active Webhook#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Webhooks Client URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/webhook#client_url Webhook#client_url}
  */
  readonly clientUrl: string;
  /**
  * Webhooks Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/webhook#description Webhook#description}
  */
  readonly description?: string;
  /**
  * Webhooks Event Types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/webhook#event_types Webhook#event_types}
  */
  readonly eventTypes: string[];
  /**
  * List of job IDs to trigger the webhook. When null or empty, the webhook will trigger on all jobs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/webhook#job_ids Webhook#job_ids}
  */
  readonly jobIds?: number[];
  /**
  * Webhooks Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/webhook#name Webhook#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/webhook dbtcloud_webhook}
*/
export class Webhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Webhook to import
  * @param importFromId The id of the existing Webhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Webhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/webhook dbtcloud_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_webhook',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._clientUrl = config.clientUrl;
    this._description = config.description;
    this._eventTypes = config.eventTypes;
    this._jobIds = config.jobIds;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_identifier - computed: true, optional: false, required: false
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // client_url - computed: false, optional: false, required: true
  private _clientUrl?: string; 
  public get clientUrl() {
    return this.getStringAttribute('client_url');
  }
  public set clientUrl(value: string) {
    this._clientUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUrlInput() {
    return this._clientUrl;
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

  // event_types - computed: false, optional: false, required: true
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return this.getListAttribute('event_types');
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // hmac_secret - computed: true, optional: false, required: false
  public get hmacSecret() {
    return this.getStringAttribute('hmac_secret');
  }

  // http_status_code - computed: true, optional: false, required: false
  public get httpStatusCode() {
    return this.getStringAttribute('http_status_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_ids - computed: false, optional: true, required: false
  private _jobIds?: number[]; 
  public get jobIds() {
    return this.getNumberListAttribute('job_ids');
  }
  public set jobIds(value: number[]) {
    this._jobIds = value;
  }
  public resetJobIds() {
    this._jobIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdsInput() {
    return this._jobIds;
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

  // webhook_id - computed: true, optional: false, required: false
  public get webhookId() {
    return this.getStringAttribute('webhook_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      client_url: cdktf.stringToTerraform(this._clientUrl),
      description: cdktf.stringToTerraform(this._description),
      event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypes),
      job_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._jobIds),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_url: {
        value: cdktf.stringToHclTerraform(this._clientUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      job_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._jobIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
