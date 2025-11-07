// https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/google_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The set of compliance families to enable in this environment, e.g. ["CIS-Google_v1.1.0"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/google_environment#compliance_families GoogleEnvironment#compliance_families}
  */
  readonly complianceFamilies?: string[];
  /**
  * The name for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/google_environment#name GoogleEnvironment#name}
  */
  readonly name: string;
  /**
  * The Google project ID. If not specified, it defaults to the project containing the provided service account email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/google_environment#project_id GoogleEnvironment#project_id}
  */
  readonly projectId?: string;
  /**
  * Controls the time in seconds between scheduled scans of this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/google_environment#scan_interval GoogleEnvironment#scan_interval}
  */
  readonly scanInterval?: number;
  /**
  * Controls whether this environment is scanned on a schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/google_environment#scan_schedule_enabled GoogleEnvironment#scan_schedule_enabled}
  */
  readonly scanScheduleEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Google service account email used to provide Fugue secure access to the Google project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/google_environment#service_account_email GoogleEnvironment#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/google_environment fugue_google_environment}
*/
export class GoogleEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fugue_google_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleEnvironment to import
  * @param importFromId The id of the existing GoogleEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/google_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fugue_google_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/google_environment fugue_google_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'fugue_google_environment',
      terraformGeneratorMetadata: {
        providerName: 'fugue',
        providerVersion: '0.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._complianceFamilies = config.complianceFamilies;
    this._name = config.name;
    this._projectId = config.projectId;
    this._scanInterval = config.scanInterval;
    this._scanScheduleEnabled = config.scanScheduleEnabled;
    this._serviceAccountEmail = config.serviceAccountEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compliance_families: cdktf.listMapper(cdktf.stringToTerraform, false)(this._complianceFamilies),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      scan_interval: cdktf.numberToTerraform(this._scanInterval),
      scan_schedule_enabled: cdktf.booleanToTerraform(this._scanScheduleEnabled),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
