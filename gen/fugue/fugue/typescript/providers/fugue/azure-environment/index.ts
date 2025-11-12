// https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Azure Active Directory application ID used for Fugue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment#application_id AzureEnvironment#application_id}
  */
  readonly applicationId: string;
  /**
  * The Azure secret generated for the Active Directory application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment#client_secret AzureEnvironment#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The set of compliance families to enable in this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment#compliance_families AzureEnvironment#compliance_families}
  */
  readonly complianceFamilies?: string[];
  /**
  * The name for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment#name AzureEnvironment#name}
  */
  readonly name: string;
  /**
  * Controls the time in seconds between scheduled scans of this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment#scan_interval AzureEnvironment#scan_interval}
  */
  readonly scanInterval?: number;
  /**
  * Controls whether this environment is scanned on a schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment#scan_schedule_enabled AzureEnvironment#scan_schedule_enabled}
  */
  readonly scanScheduleEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Azure subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment#subscription_id AzureEnvironment#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Survey resource groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment#survey_resource_groups AzureEnvironment#survey_resource_groups}
  */
  readonly surveyResourceGroups: string[];
  /**
  * The Azure Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment#tenant_id AzureEnvironment#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment fugue_azure_environment}
*/
export class AzureEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fugue_azure_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureEnvironment to import
  * @param importFromId The id of the existing AzureEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fugue_azure_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/azure_environment fugue_azure_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: AzureEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'fugue_azure_environment',
      terraformGeneratorMetadata: {
        providerName: 'fugue',
        providerVersion: '0.0.11',
        providerVersionConstraint: '0.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._clientSecret = config.clientSecret;
    this._complianceFamilies = config.complianceFamilies;
    this._name = config.name;
    this._scanInterval = config.scanInterval;
    this._scanScheduleEnabled = config.scanScheduleEnabled;
    this._subscriptionId = config.subscriptionId;
    this._surveyResourceGroups = config.surveyResourceGroups;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // compliance_families - computed: false, optional: true, required: false
  private _complianceFamilies?: string[]; 
  public get complianceFamilies() {
    return cdktf.Fn.tolist(this.getListAttribute('compliance_families'));
  }
  public set complianceFamilies(value: string[]) {
    this._complianceFamilies = value;
  }
  public resetComplianceFamilies() {
    this._complianceFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceFamiliesInput() {
    return this._complianceFamilies;
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

  // scan_interval - computed: false, optional: true, required: false
  private _scanInterval?: number; 
  public get scanInterval() {
    return this.getNumberAttribute('scan_interval');
  }
  public set scanInterval(value: number) {
    this._scanInterval = value;
  }
  public resetScanInterval() {
    this._scanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanIntervalInput() {
    return this._scanInterval;
  }

  // scan_schedule_enabled - computed: false, optional: true, required: false
  private _scanScheduleEnabled?: boolean | cdktf.IResolvable; 
  public get scanScheduleEnabled() {
    return this.getBooleanAttribute('scan_schedule_enabled');
  }
  public set scanScheduleEnabled(value: boolean | cdktf.IResolvable) {
    this._scanScheduleEnabled = value;
  }
  public resetScanScheduleEnabled() {
    this._scanScheduleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanScheduleEnabledInput() {
    return this._scanScheduleEnabled;
  }

  // scan_status - computed: true, optional: false, required: false
  public get scanStatus() {
    return this.getStringAttribute('scan_status');
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // survey_resource_groups - computed: false, optional: false, required: true
  private _surveyResourceGroups?: string[]; 
  public get surveyResourceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('survey_resource_groups'));
  }
  public set surveyResourceGroups(value: string[]) {
    this._surveyResourceGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyResourceGroupsInput() {
    return this._surveyResourceGroups;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      compliance_families: cdktf.listMapper(cdktf.stringToTerraform, false)(this._complianceFamilies),
      name: cdktf.stringToTerraform(this._name),
      scan_interval: cdktf.numberToTerraform(this._scanInterval),
      scan_schedule_enabled: cdktf.booleanToTerraform(this._scanScheduleEnabled),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      survey_resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._surveyResourceGroups),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_families: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._complianceFamilies),
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
      scan_interval: {
        value: cdktf.numberToHclTerraform(this._scanInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_schedule_enabled: {
        value: cdktf.booleanToHclTerraform(this._scanScheduleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      survey_resource_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._surveyResourceGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
