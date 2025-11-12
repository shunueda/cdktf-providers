// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_elk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationElkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Elastic Search URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_elk#es_url IntegrationElk#es_url}
  */
  readonly esUrl: string;
  /**
  * Kibana URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_elk#kibana_url IntegrationElk#kibana_url}
  */
  readonly kibanaUrl: string;
  /**
  * Integration name that will be used internally in the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_elk#name IntegrationElk#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_elk cyral_integration_elk}
*/
export class IntegrationElk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_integration_elk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationElk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationElk to import
  * @param importFromId The id of the existing IntegrationElk that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_elk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationElk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_integration_elk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_elk cyral_integration_elk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationElkConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationElkConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_integration_elk',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._esUrl = config.esUrl;
    this._kibanaUrl = config.kibanaUrl;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // es_url - computed: false, optional: false, required: true
  private _esUrl?: string; 
  public get esUrl() {
    return this.getStringAttribute('es_url');
  }
  public set esUrl(value: string) {
    this._esUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get esUrlInput() {
    return this._esUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kibana_url - computed: false, optional: false, required: true
  private _kibanaUrl?: string; 
  public get kibanaUrl() {
    return this.getStringAttribute('kibana_url');
  }
  public set kibanaUrl(value: string) {
    this._kibanaUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaUrlInput() {
    return this._kibanaUrl;
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
      es_url: cdktf.stringToTerraform(this._esUrl),
      kibana_url: cdktf.stringToTerraform(this._kibanaUrl),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      es_url: {
        value: cdktf.stringToHclTerraform(this._esUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kibana_url: {
        value: cdktf.stringToHclTerraform(this._kibanaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
