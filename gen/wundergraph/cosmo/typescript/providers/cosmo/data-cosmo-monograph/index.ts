// https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/monograph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCosmoMonographConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the monograph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/monograph#name DataCosmoMonograph#name}
  */
  readonly name: string;
  /**
  * The namespace in which the monograph is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/monograph#namespace DataCosmoMonograph#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/monograph cosmo_monograph}
*/
export class DataCosmoMonograph extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosmo_monograph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCosmoMonograph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCosmoMonograph to import
  * @param importFromId The id of the existing DataCosmoMonograph that should be imported. Refer to the {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/monograph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCosmoMonograph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosmo_monograph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/monograph cosmo_monograph} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCosmoMonographConfig
  */
  public constructor(scope: Construct, id: string, config: DataCosmoMonographConfig) {
    super(scope, id, {
      terraformResourceType: 'cosmo_monograph',
      terraformGeneratorMetadata: {
        providerName: 'cosmo',
        providerVersion: '0.5.2',
        providerVersionConstraint: '0.5.2'
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
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admission_webhook_secret - computed: true, optional: false, required: false
  public get admissionWebhookSecret() {
    return this.getStringAttribute('admission_webhook_secret');
  }

  // admission_webhook_url - computed: true, optional: false, required: false
  public get admissionWebhookUrl() {
    return this.getStringAttribute('admission_webhook_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_matchers - computed: true, optional: false, required: false
  public get labelMatchers() {
    return this.getListAttribute('label_matchers');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // readme - computed: true, optional: false, required: false
  public get readme() {
    return this.getStringAttribute('readme');
  }

  // routing_url - computed: true, optional: false, required: false
  public get routingUrl() {
    return this.getStringAttribute('routing_url');
  }

  // subscription_protocol - computed: true, optional: false, required: false
  public get subscriptionProtocol() {
    return this.getStringAttribute('subscription_protocol');
  }

  // websocket_subprotocol - computed: true, optional: false, required: false
  public get websocketSubprotocol() {
    return this.getStringAttribute('websocket_subprotocol');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
