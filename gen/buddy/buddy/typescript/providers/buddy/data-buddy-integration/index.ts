// https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBuddyIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/integration#domain DataBuddyIntegration#domain}
  */
  readonly domain: string;
  /**
  * The integration's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/integration#integration_id DataBuddyIntegration#integration_id}
  */
  readonly integrationId?: string;
  /**
  * The integration's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/integration#name DataBuddyIntegration#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/integration buddy_integration}
*/
export class DataBuddyIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBuddyIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBuddyIntegration to import
  * @param importFromId The id of the existing DataBuddyIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBuddyIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/integration buddy_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBuddyIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataBuddyIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_integration',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.37.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._integrationId = config.integrationId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // integration_id - computed: true, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
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
