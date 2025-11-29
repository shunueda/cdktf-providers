// https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_librato
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationLibratoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Librato API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_librato#api_token IntegrationLibrato#api_token}
  */
  readonly apiToken: string;
  /**
  * List of contact group names to receive notifications. 
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations) 
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_librato#contact_groups IntegrationLibrato#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Librato account email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_librato#email IntegrationLibrato#email}
  */
  readonly email: string;
  /**
  * Name of the metric to send data to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_librato#metric_name IntegrationLibrato#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_librato#name IntegrationLibrato#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_librato uptime_integration_librato}
*/
export class IntegrationLibrato extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_integration_librato";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationLibrato resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationLibrato to import
  * @param importFromId The id of the existing IntegrationLibrato that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_librato#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationLibrato to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_integration_librato", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_librato uptime_integration_librato} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationLibratoConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationLibratoConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_integration_librato',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.1',
        providerVersionConstraint: '2.18.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiToken = config.apiToken;
    this._contactGroups = config.contactGroups;
    this._email = config.email;
    this._metricName = config.metricName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
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

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      email: cdktf.stringToTerraform(this._email),
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
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
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
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
