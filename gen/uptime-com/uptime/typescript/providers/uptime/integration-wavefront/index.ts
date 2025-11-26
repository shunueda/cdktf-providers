// https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_wavefront
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationWavefrontConfig extends cdktf.TerraformMetaArguments {
  /**
  * Wavefront API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_wavefront#api_token IntegrationWavefront#api_token}
  */
  readonly apiToken: string;
  /**
  * List of contact group names to receive notifications. 
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations) 
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_wavefront#contact_groups IntegrationWavefront#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_wavefront#name IntegrationWavefront#name}
  */
  readonly name: string;
  /**
  * Wavefront instance URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_wavefront#wavefront_url IntegrationWavefront#wavefront_url}
  */
  readonly wavefrontUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_wavefront uptime_integration_wavefront}
*/
export class IntegrationWavefront extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_integration_wavefront";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationWavefront resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationWavefront to import
  * @param importFromId The id of the existing IntegrationWavefront that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_wavefront#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationWavefront to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_integration_wavefront", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/integration_wavefront uptime_integration_wavefront} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationWavefrontConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationWavefrontConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_integration_wavefront',
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
    this._apiToken = config.apiToken;
    this._contactGroups = config.contactGroups;
    this._name = config.name;
    this._wavefrontUrl = config.wavefrontUrl;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // wavefront_url - computed: false, optional: false, required: true
  private _wavefrontUrl?: string; 
  public get wavefrontUrl() {
    return this.getStringAttribute('wavefront_url');
  }
  public set wavefrontUrl(value: string) {
    this._wavefrontUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wavefrontUrlInput() {
    return this._wavefrontUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      name: cdktf.stringToTerraform(this._name),
      wavefront_url: cdktf.stringToTerraform(this._wavefrontUrl),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wavefront_url: {
        value: cdktf.stringToHclTerraform(this._wavefrontUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
