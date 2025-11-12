// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/connector_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authentication parameters. Must be represented in `JSON` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/connector_aws#auth_params ConnectorAws#auth_params}
  */
  readonly authParams: string;
  /**
  * Whether the connector is enabled.
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/connector_aws#enabled ConnectorAws#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Extra configuration for the connector. Must be represented in `JSON` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/connector_aws#extra_config ConnectorAws#extra_config}
  */
  readonly extraConfig?: string;
  /**
  * The connector name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/connector_aws#name ConnectorAws#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/connector_aws wiz_connector_aws}
*/
export class ConnectorAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_connector_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorAws to import
  * @param importFromId The id of the existing ConnectorAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/connector_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_connector_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/connector_aws wiz_connector_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_connector_aws',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authParams = config.authParams;
    this._enabled = config.enabled;
    this._extraConfig = config.extraConfig;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_log_monitor_enabled - computed: true, optional: false, required: false
  public get auditLogMonitorEnabled() {
    return this.getBooleanAttribute('audit_log_monitor_enabled');
  }

  // auth_params - computed: false, optional: false, required: true
  private _authParams?: string; 
  public get authParams() {
    return this.getStringAttribute('auth_params');
  }
  public set authParams(value: string) {
    this._authParams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authParamsInput() {
    return this._authParams;
  }

  // customer_role_arn - computed: true, optional: false, required: false
  public get customerRoleArn() {
    return this.getStringAttribute('customer_role_arn');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // events_cloudtrail_bucket_name - computed: true, optional: false, required: false
  public get eventsCloudtrailBucketName() {
    return this.getStringAttribute('events_cloudtrail_bucket_name');
  }

  // events_cloudtrail_bucket_sub_account - computed: true, optional: false, required: false
  public get eventsCloudtrailBucketSubAccount() {
    return this.getStringAttribute('events_cloudtrail_bucket_sub_account');
  }

  // events_cloudtrail_organization - computed: true, optional: false, required: false
  public get eventsCloudtrailOrganization() {
    return this.getStringAttribute('events_cloudtrail_organization');
  }

  // excluded_accounts - computed: true, optional: false, required: false
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
  }

  // excluded_ous - computed: true, optional: false, required: false
  public get excludedOus() {
    return this.getListAttribute('excluded_ous');
  }

  // external_id_nonce - computed: true, optional: false, required: false
  public get externalIdNonce() {
    return this.getStringAttribute('external_id_nonce');
  }

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig?: string; 
  public get extraConfig() {
    return this.getStringAttribute('extra_config');
  }
  public set extraConfig(value: string) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // opted_in_regions - computed: true, optional: false, required: false
  public get optedInRegions() {
    return this.getListAttribute('opted_in_regions');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // skip_organization_scan - computed: true, optional: false, required: false
  public get skipOrganizationScan() {
    return this.getBooleanAttribute('skip_organization_scan');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_params: cdktf.stringToTerraform(this._authParams),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extra_config: cdktf.stringToTerraform(this._extraConfig),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_params: {
        value: cdktf.stringToHclTerraform(this._authParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_config: {
        value: cdktf.stringToHclTerraform(this._extraConfig),
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
