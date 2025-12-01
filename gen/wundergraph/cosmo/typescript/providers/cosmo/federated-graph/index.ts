// https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FederatedGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * The secret token used to authenticate the admission webhook requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph#admission_webhook_secret FederatedGraph#admission_webhook_secret}
  */
  readonly admissionWebhookSecret?: string;
  /**
  * The URL for the admission webhook that will be triggered during graph operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph#admission_webhook_url FederatedGraph#admission_webhook_url}
  */
  readonly admissionWebhookUrl?: string;
  /**
  * A list of label matchers used to select the services that will form the federated graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph#label_matchers FederatedGraph#label_matchers}
  */
  readonly labelMatchers?: string[];
  /**
  * The name of the federated graph. This is used to identify the graph and must be unique within the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph#name FederatedGraph#name}
  */
  readonly name: string;
  /**
  * The namespace in which the federated graph is located. Defaults to 'default' if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph#namespace FederatedGraph#namespace}
  */
  readonly namespace?: string;
  /**
  * Readme content for the federated graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph#readme FederatedGraph#readme}
  */
  readonly readme?: string;
  /**
  * The URL of the service that routes requests to the federated graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph#routing_url FederatedGraph#routing_url}
  */
  readonly routingUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph cosmo_federated_graph}
*/
export class FederatedGraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosmo_federated_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FederatedGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FederatedGraph to import
  * @param importFromId The id of the existing FederatedGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FederatedGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosmo_federated_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/federated_graph cosmo_federated_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FederatedGraphConfig
  */
  public constructor(scope: Construct, id: string, config: FederatedGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'cosmo_federated_graph',
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
    this._admissionWebhookSecret = config.admissionWebhookSecret;
    this._admissionWebhookUrl = config.admissionWebhookUrl;
    this._labelMatchers = config.labelMatchers;
    this._name = config.name;
    this._namespace = config.namespace;
    this._readme = config.readme;
    this._routingUrl = config.routingUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admission_webhook_secret - computed: false, optional: true, required: false
  private _admissionWebhookSecret?: string; 
  public get admissionWebhookSecret() {
    return this.getStringAttribute('admission_webhook_secret');
  }
  public set admissionWebhookSecret(value: string) {
    this._admissionWebhookSecret = value;
  }
  public resetAdmissionWebhookSecret() {
    this._admissionWebhookSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionWebhookSecretInput() {
    return this._admissionWebhookSecret;
  }

  // admission_webhook_url - computed: false, optional: true, required: false
  private _admissionWebhookUrl?: string; 
  public get admissionWebhookUrl() {
    return this.getStringAttribute('admission_webhook_url');
  }
  public set admissionWebhookUrl(value: string) {
    this._admissionWebhookUrl = value;
  }
  public resetAdmissionWebhookUrl() {
    this._admissionWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionWebhookUrlInput() {
    return this._admissionWebhookUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_matchers - computed: true, optional: true, required: false
  private _labelMatchers?: string[]; 
  public get labelMatchers() {
    return this.getListAttribute('label_matchers');
  }
  public set labelMatchers(value: string[]) {
    this._labelMatchers = value;
  }
  public resetLabelMatchers() {
    this._labelMatchers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchersInput() {
    return this._labelMatchers;
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

  // namespace - computed: true, optional: true, required: false
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

  // readme - computed: false, optional: true, required: false
  private _readme?: string; 
  public get readme() {
    return this.getStringAttribute('readme');
  }
  public set readme(value: string) {
    this._readme = value;
  }
  public resetReadme() {
    this._readme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeInput() {
    return this._readme;
  }

  // routing_url - computed: false, optional: false, required: true
  private _routingUrl?: string; 
  public get routingUrl() {
    return this.getStringAttribute('routing_url');
  }
  public set routingUrl(value: string) {
    this._routingUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingUrlInput() {
    return this._routingUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admission_webhook_secret: cdktf.stringToTerraform(this._admissionWebhookSecret),
      admission_webhook_url: cdktf.stringToTerraform(this._admissionWebhookUrl),
      label_matchers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labelMatchers),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      readme: cdktf.stringToTerraform(this._readme),
      routing_url: cdktf.stringToTerraform(this._routingUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admission_webhook_secret: {
        value: cdktf.stringToHclTerraform(this._admissionWebhookSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admission_webhook_url: {
        value: cdktf.stringToHclTerraform(this._admissionWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_matchers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labelMatchers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      readme: {
        value: cdktf.stringToHclTerraform(this._readme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_url: {
        value: cdktf.stringToHclTerraform(this._routingUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
