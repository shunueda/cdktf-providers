// https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOrcasecurityWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-friendly name that you've selected for the Webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/webhook#name DataOrcasecurityWebhook#name}
  */
  readonly name: string;
}
export interface DataOrcasecurityWebhookConfigA {
}

export function dataOrcasecurityWebhookConfigAToTerraform(struct?: DataOrcasecurityWebhookConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOrcasecurityWebhookConfigAToHclTerraform(struct?: DataOrcasecurityWebhookConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOrcasecurityWebhookConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOrcasecurityWebhookConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOrcasecurityWebhookConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_headers - computed: true, optional: false, required: false
  private _customHeaders = new cdktf.StringMap(this, "custom_headers");
  public get customHeaders() {
    return this._customHeaders;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/webhook orcasecurity_webhook}
*/
export class DataOrcasecurityWebhook extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "orcasecurity_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOrcasecurityWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOrcasecurityWebhook to import
  * @param importFromId The id of the existing DataOrcasecurityWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOrcasecurityWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "orcasecurity_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/webhook orcasecurity_webhook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOrcasecurityWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: DataOrcasecurityWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'orcasecurity_webhook',
      terraformGeneratorMetadata: {
        providerName: 'orcasecurity',
        providerVersion: '0.0.25',
        providerVersionConstraint: '0.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  private _config = new DataOrcasecurityWebhookConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
