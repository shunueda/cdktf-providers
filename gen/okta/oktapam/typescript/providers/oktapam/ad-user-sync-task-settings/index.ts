// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdUserSyncTaskSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the domain to search for user accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#base_dn AdUserSyncTaskSettings#base_dn}
  */
  readonly baseDn: string;
  /**
  * The UUID of an associated AD connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#connection_id AdUserSyncTaskSettings#connection_id}
  */
  readonly connectionId: string;
  /**
  * Indicates how often the user sync job runs. Possible values: `1`, `6`, `12`, `24`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#frequency AdUserSyncTaskSettings#frequency}
  */
  readonly frequency?: number;
  /**
  * If `true`, enables the user sync job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#is_active AdUserSyncTaskSettings#is_active}
  */
  readonly isActive: boolean | cdktf.IResolvable;
  /**
  * The criteria used to filter user accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#ldap_query_filter AdUserSyncTaskSettings#ldap_query_filter}
  */
  readonly ldapQueryFilter: string;
  /**
  * The human-readable name of the resource. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#name AdUserSyncTaskSettings#name}
  */
  readonly name: string;
  /**
  * If `true`, performs a test run for the user sync job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#run_test AdUserSyncTaskSettings#run_test}
  */
  readonly runTest?: boolean | cdktf.IResolvable;
  /**
  * The AD attribute that defines the security identifier (SID) for accounts. Most AD tenants use `objectSID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#sid_field AdUserSyncTaskSettings#sid_field}
  */
  readonly sidField?: string;
  /**
  * A UTC timestamp that indicates the hour range when the user sync job runs. Only used if `frequency`is set to 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#start_hour_utc AdUserSyncTaskSettings#start_hour_utc}
  */
  readonly startHourUtc?: number;
  /**
  * The AD attribute that defines the User Principal Name (UPN) for accounts. Most AD tenants use `userPrincipalName`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#upn_field AdUserSyncTaskSettings#upn_field}
  */
  readonly upnField?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings oktapam_ad_user_sync_task_settings}
*/
export class AdUserSyncTaskSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_ad_user_sync_task_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdUserSyncTaskSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdUserSyncTaskSettings to import
  * @param importFromId The id of the existing AdUserSyncTaskSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdUserSyncTaskSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_ad_user_sync_task_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_user_sync_task_settings oktapam_ad_user_sync_task_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdUserSyncTaskSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AdUserSyncTaskSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_ad_user_sync_task_settings',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseDn = config.baseDn;
    this._connectionId = config.connectionId;
    this._frequency = config.frequency;
    this._isActive = config.isActive;
    this._ldapQueryFilter = config.ldapQueryFilter;
    this._name = config.name;
    this._runTest = config.runTest;
    this._sidField = config.sidField;
    this._startHourUtc = config.startHourUtc;
    this._upnField = config.upnField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: false, optional: false, required: true
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // ldap_query_filter - computed: false, optional: false, required: true
  private _ldapQueryFilter?: string; 
  public get ldapQueryFilter() {
    return this.getStringAttribute('ldap_query_filter');
  }
  public set ldapQueryFilter(value: string) {
    this._ldapQueryFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapQueryFilterInput() {
    return this._ldapQueryFilter;
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

  // run_test - computed: false, optional: true, required: false
  private _runTest?: boolean | cdktf.IResolvable; 
  public get runTest() {
    return this.getBooleanAttribute('run_test');
  }
  public set runTest(value: boolean | cdktf.IResolvable) {
    this._runTest = value;
  }
  public resetRunTest() {
    this._runTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTestInput() {
    return this._runTest;
  }

  // sid_field - computed: false, optional: true, required: false
  private _sidField?: string; 
  public get sidField() {
    return this.getStringAttribute('sid_field');
  }
  public set sidField(value: string) {
    this._sidField = value;
  }
  public resetSidField() {
    this._sidField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidFieldInput() {
    return this._sidField;
  }

  // start_hour_utc - computed: false, optional: true, required: false
  private _startHourUtc?: number; 
  public get startHourUtc() {
    return this.getNumberAttribute('start_hour_utc');
  }
  public set startHourUtc(value: number) {
    this._startHourUtc = value;
  }
  public resetStartHourUtc() {
    this._startHourUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourUtcInput() {
    return this._startHourUtc;
  }

  // upn_field - computed: false, optional: true, required: false
  private _upnField?: string; 
  public get upnField() {
    return this.getStringAttribute('upn_field');
  }
  public set upnField(value: string) {
    this._upnField = value;
  }
  public resetUpnField() {
    this._upnField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upnFieldInput() {
    return this._upnField;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_dn: cdktf.stringToTerraform(this._baseDn),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      frequency: cdktf.numberToTerraform(this._frequency),
      is_active: cdktf.booleanToTerraform(this._isActive),
      ldap_query_filter: cdktf.stringToTerraform(this._ldapQueryFilter),
      name: cdktf.stringToTerraform(this._name),
      run_test: cdktf.booleanToTerraform(this._runTest),
      sid_field: cdktf.stringToTerraform(this._sidField),
      start_hour_utc: cdktf.numberToTerraform(this._startHourUtc),
      upn_field: cdktf.stringToTerraform(this._upnField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_dn: {
        value: cdktf.stringToHclTerraform(this._baseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_query_filter: {
        value: cdktf.stringToHclTerraform(this._ldapQueryFilter),
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
      run_test: {
        value: cdktf.booleanToHclTerraform(this._runTest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sid_field: {
        value: cdktf.stringToHclTerraform(this._sidField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_hour_utc: {
        value: cdktf.numberToHclTerraform(this._startHourUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upn_field: {
        value: cdktf.stringToHclTerraform(this._upnField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
