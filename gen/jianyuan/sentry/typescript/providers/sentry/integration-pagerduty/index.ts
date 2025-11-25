// https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/integration_pagerduty
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationPagerdutyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the PagerDuty integration. Source from the URL `https://<organization>.sentry.io/settings/integrations/pagerduty/<integration-id>/` or use the `sentry_organization_integration` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/integration_pagerduty#integration_id IntegrationPagerduty#integration_id}
  */
  readonly integrationId: string;
  /**
  * The integration key of the PagerDuty service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/integration_pagerduty#integration_key IntegrationPagerduty#integration_key}
  */
  readonly integrationKey: string;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/integration_pagerduty#organization IntegrationPagerduty#organization}
  */
  readonly organization: string;
  /**
  * The name of the PagerDuty service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/integration_pagerduty#service IntegrationPagerduty#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/integration_pagerduty sentry_integration_pagerduty}
*/
export class IntegrationPagerduty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_integration_pagerduty";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationPagerduty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationPagerduty to import
  * @param importFromId The id of the existing IntegrationPagerduty that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/integration_pagerduty#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationPagerduty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_integration_pagerduty", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/integration_pagerduty sentry_integration_pagerduty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationPagerdutyConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationPagerdutyConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_integration_pagerduty',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.7',
        providerVersionConstraint: '0.14.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._integrationId = config.integrationId;
    this._integrationKey = config.integrationKey;
    this._organization = config.organization;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_id: cdktf.stringToTerraform(this._integrationId),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      organization: cdktf.stringToTerraform(this._organization),
      service: cdktf.stringToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
