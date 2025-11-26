// https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_cachet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationCachetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL of your Cachet instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_cachet#cachet_url IntegrationCachet#cachet_url}
  */
  readonly cachetUrl: string;
  /**
  * Component ID to update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_cachet#component IntegrationCachet#component}
  */
  readonly component?: string;
  /**
  * List of contact group names to receive notifications. 
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations) 
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_cachet#contact_groups IntegrationCachet#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Metric ID to update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_cachet#metric IntegrationCachet#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_cachet#name IntegrationCachet#name}
  */
  readonly name: string;
  /**
  * Cachet API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_cachet#token IntegrationCachet#token}
  */
  readonly token: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_cachet uptime_integration_cachet}
*/
export class IntegrationCachet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_integration_cachet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationCachet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationCachet to import
  * @param importFromId The id of the existing IntegrationCachet that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_cachet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationCachet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_integration_cachet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_cachet uptime_integration_cachet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationCachetConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationCachetConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_integration_cachet',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cachetUrl = config.cachetUrl;
    this._component = config.component;
    this._contactGroups = config.contactGroups;
    this._metric = config.metric;
    this._name = config.name;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cachet_url - computed: false, optional: false, required: true
  private _cachetUrl?: string; 
  public get cachetUrl() {
    return this.getStringAttribute('cachet_url');
  }
  public set cachetUrl(value: string) {
    this._cachetUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachetUrlInput() {
    return this._cachetUrl;
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

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      cachet_url: cdktf.stringToTerraform(this._cachetUrl),
      component: cdktf.stringToTerraform(this._component),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cachet_url: {
        value: cdktf.stringToHclTerraform(this._cachetUrl),
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
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
