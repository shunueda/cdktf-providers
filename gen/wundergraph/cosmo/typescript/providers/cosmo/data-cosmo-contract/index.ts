// https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/contract
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCosmoContractConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the federated graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/contract#name DataCosmoContract#name}
  */
  readonly name: string;
  /**
  * The namespace in which the federated graph is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/contract#namespace DataCosmoContract#namespace}
  */
  readonly namespace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/contract cosmo_contract}
*/
export class DataCosmoContract extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosmo_contract";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCosmoContract resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCosmoContract to import
  * @param importFromId The id of the existing DataCosmoContract that should be imported. Refer to the {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/contract#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCosmoContract to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosmo_contract", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/contract cosmo_contract} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCosmoContractConfig
  */
  public constructor(scope: Construct, id: string, config: DataCosmoContractConfig) {
    super(scope, id, {
      terraformResourceType: 'cosmo_contract',
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

  // exclude_tags - computed: true, optional: false, required: false
  public get excludeTags() {
    return this.getListAttribute('exclude_tags');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_tags - computed: true, optional: false, required: false
  public get includeTags() {
    return this.getListAttribute('include_tags');
  }

  // label_matchers - computed: true, optional: false, required: false
  private _labelMatchers = new cdktf.StringMap(this, "label_matchers");
  public get labelMatchers() {
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
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

  // supports_federation - computed: true, optional: false, required: false
  public get supportsFederation() {
    return this.getBooleanAttribute('supports_federation');
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
