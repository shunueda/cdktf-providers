// https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_statuspage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationStatuspageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Statuspage.io API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_statuspage#api_key IntegrationStatuspage#api_key}
  */
  readonly apiKey: string;
  /**
  * Component ID to update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_statuspage#component IntegrationStatuspage#component}
  */
  readonly component?: string;
  /**
  * List of contact group names to receive notifications.
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations)
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  * Set to an empty list to disable notifications at this level and rely on parent check group notifications instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_statuspage#contact_groups IntegrationStatuspage#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Metric ID to update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_statuspage#metric IntegrationStatuspage#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_statuspage#name IntegrationStatuspage#name}
  */
  readonly name: string;
  /**
  * Statuspage.io page ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_statuspage#page IntegrationStatuspage#page}
  */
  readonly page: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_statuspage uptime_integration_statuspage}
*/
export class IntegrationStatuspage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_integration_statuspage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationStatuspage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationStatuspage to import
  * @param importFromId The id of the existing IntegrationStatuspage that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_statuspage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationStatuspage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_integration_statuspage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_statuspage uptime_integration_statuspage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationStatuspageConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationStatuspageConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_integration_statuspage',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.22.0',
        providerVersionConstraint: '2.22.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._component = config.component;
    this._contactGroups = config.contactGroups;
    this._metric = config.metric;
    this._name = config.name;
    this._page = config.page;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // component - computed: true, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // contact_groups - computed: true, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_groups'));
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // page - computed: false, optional: false, required: true
  private _page?: string; 
  public get page() {
    return this.getStringAttribute('page');
  }
  public set page(value: string) {
    this._page = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      component: cdktf.stringToTerraform(this._component),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      page: cdktf.stringToTerraform(this._page),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component: {
        value: cdktf.stringToHclTerraform(this._component),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
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
      page: {
        value: cdktf.stringToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
