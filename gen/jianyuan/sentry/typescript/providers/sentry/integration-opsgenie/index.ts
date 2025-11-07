// https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/integration_opsgenie
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationOpsgenieConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Opsgenie integration. Source from the URL `https://<organization>.sentry.io/settings/integrations/opsgenie/<integration-id>/` or use the `sentry_organization_integration` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/integration_opsgenie#integration_id IntegrationOpsgenie#integration_id}
  */
  readonly integrationId: string;
  /**
  * The integration key of the Opsgenie service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/integration_opsgenie#integration_key IntegrationOpsgenie#integration_key}
  */
  readonly integrationKey: string;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/integration_opsgenie#organization IntegrationOpsgenie#organization}
  */
  readonly organization: string;
  /**
  * The name of the Opsgenie team. In Sentry, this is called Label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/integration_opsgenie#team IntegrationOpsgenie#team}
  */
  readonly team: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/integration_opsgenie sentry_integration_opsgenie}
*/
export class IntegrationOpsgenie extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_integration_opsgenie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationOpsgenie resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationOpsgenie to import
  * @param importFromId The id of the existing IntegrationOpsgenie that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/integration_opsgenie#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationOpsgenie to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_integration_opsgenie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/integration_opsgenie sentry_integration_opsgenie} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationOpsgenieConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationOpsgenieConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_integration_opsgenie',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.6'
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
    this._team = config.team;
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

  // team - computed: false, optional: false, required: true
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_id: cdktf.stringToTerraform(this._integrationId),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      organization: cdktf.stringToTerraform(this._organization),
      team: cdktf.stringToTerraform(this._team),
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
      team: {
        value: cdktf.stringToHclTerraform(this._team),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
