// https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pagerduty
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationPagerdutyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically resolve incident once the check is back up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pagerduty#auto_resolve IntegrationPagerduty#auto_resolve}
  */
  readonly autoResolve?: boolean | cdktf.IResolvable;
  /**
  * List of contact group names to receive notifications.
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations)
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  * Set to an empty list to disable notifications at this level and rely on parent check group notifications instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pagerduty#contact_groups IntegrationPagerduty#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pagerduty#name IntegrationPagerduty#name}
  */
  readonly name: string;
  /**
  * PagerDuty service integration key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pagerduty#service_key IntegrationPagerduty#service_key}
  */
  readonly serviceKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pagerduty uptime_integration_pagerduty}
*/
export class IntegrationPagerduty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_integration_pagerduty";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationPagerduty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationPagerduty to import
  * @param importFromId The id of the existing IntegrationPagerduty that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pagerduty#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationPagerduty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_integration_pagerduty", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pagerduty uptime_integration_pagerduty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationPagerdutyConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationPagerdutyConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_integration_pagerduty',
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
    this._autoResolve = config.autoResolve;
    this._contactGroups = config.contactGroups;
    this._name = config.name;
    this._serviceKey = config.serviceKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_resolve - computed: true, optional: true, required: false
  private _autoResolve?: boolean | cdktf.IResolvable; 
  public get autoResolve() {
    return this.getBooleanAttribute('auto_resolve');
  }
  public set autoResolve(value: boolean | cdktf.IResolvable) {
    this._autoResolve = value;
  }
  public resetAutoResolve() {
    this._autoResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResolveInput() {
    return this._autoResolve;
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

  // service_key - computed: false, optional: false, required: true
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
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
      auto_resolve: cdktf.booleanToTerraform(this._autoResolve),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      name: cdktf.stringToTerraform(this._name),
      service_key: cdktf.stringToTerraform(this._serviceKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_resolve: {
        value: cdktf.booleanToHclTerraform(this._autoResolve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_key: {
        value: cdktf.stringToHclTerraform(this._serviceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
