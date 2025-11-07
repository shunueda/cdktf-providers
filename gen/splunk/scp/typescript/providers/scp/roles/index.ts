// https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The capabilities attached to the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#capabilities Roles#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Maximum number of concurrently running real-time searches that all members of this role can have. The value must be a non-negative number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#cumulative_rt_srch_jobs_quota Roles#cumulative_rt_srch_jobs_quota}
  */
  readonly cumulativeRtSrchJobsQuota?: number;
  /**
  * Maximum number of concurrently running historical searches that all members of this role can have. The value must be a non-negative number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#cumulative_srch_jobs_quota Roles#cumulative_srch_jobs_quota}
  */
  readonly cumulativeSrchJobsQuota?: number;
  /**
  * Set the default app for this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#default_app Roles#default_app}
  */
  readonly defaultApp?: string;
  /**
  * If 'imported_roles' or 'capabilities' contains the 'fsh_manage' capability, you must set this attribute to a value of "Y". This header acknowledges that a role with the 'fsh_manage' capability can send search results outside the compliant environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#federated_search_manage_ack Roles#federated_search_manage_ack}
  */
  readonly federatedSearchManageAck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#id Roles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of other roles and their associated capabilities that should be imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#imported_roles Roles#imported_roles}
  */
  readonly importedRoles?: string[];
  /**
  * The name of the role to create. Can not be updated after creation, if changed in config file terraform will propose a replacement (delete old role and recreate with new name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#name Roles#name}
  */
  readonly name: string;
  /**
  * Maximum number of concurrently running real-time searches a member of this role can have. The value must be a non-negative number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#rt_srch_jobs_quota Roles#rt_srch_jobs_quota}
  */
  readonly rtSrchJobsQuota?: number;
  /**
  * Maximum amount of disk space (MB) that can be used by search jobs of a user that belongs to this role. The value must be a non-negative number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#srch_disk_quota Roles#srch_disk_quota}
  */
  readonly srchDiskQuota?: number;
  /**
  * List of search filters for this Role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#srch_filter Roles#srch_filter}
  */
  readonly srchFilter?: string;
  /**
  * List of indexes this role is allowed to search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#srch_indexes_allowed Roles#srch_indexes_allowed}
  */
  readonly srchIndexesAllowed?: string[];
  /**
  * List of indexes to search when no index is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#srch_indexes_default Roles#srch_indexes_default}
  */
  readonly srchIndexesDefault?: string[];
  /**
  * Maximum number of concurrently running historical searches a member of this role can have. The value must be a non-negative number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#srch_jobs_quota Roles#srch_jobs_quota}
  */
  readonly srchJobsQuota?: number;
  /**
  * Maximum amount of time that searches of users from this role will be allowed to run. A value of -1 means unset, 0 means infinite. Any other value is the amount of time in seconds, for example, 300 would mean 300s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#srch_time_earliest Roles#srch_time_earliest}
  */
  readonly srchTimeEarliest?: number;
  /**
  * Maximum time span of a search, in seconds. A value of -1 means unset, 0 means infinite. Any other value is the amount of time in seconds, for example, 300 would mean 300s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#srch_time_win Roles#srch_time_win}
  */
  readonly srchTimeWin?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles scp_roles}
*/
export class Roles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scp_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Roles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Roles to import
  * @param importFromId The id of the existing Roles that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Roles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scp_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/roles scp_roles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RolesConfig
  */
  public constructor(scope: Construct, id: string, config: RolesConfig) {
    super(scope, id, {
      terraformResourceType: 'scp_roles',
      terraformGeneratorMetadata: {
        providerName: 'scp',
        providerVersion: '1.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capabilities = config.capabilities;
    this._cumulativeRtSrchJobsQuota = config.cumulativeRtSrchJobsQuota;
    this._cumulativeSrchJobsQuota = config.cumulativeSrchJobsQuota;
    this._defaultApp = config.defaultApp;
    this._federatedSearchManageAck = config.federatedSearchManageAck;
    this._id = config.id;
    this._importedRoles = config.importedRoles;
    this._name = config.name;
    this._rtSrchJobsQuota = config.rtSrchJobsQuota;
    this._srchDiskQuota = config.srchDiskQuota;
    this._srchFilter = config.srchFilter;
    this._srchIndexesAllowed = config.srchIndexesAllowed;
    this._srchIndexesDefault = config.srchIndexesDefault;
    this._srchJobsQuota = config.srchJobsQuota;
    this._srchTimeEarliest = config.srchTimeEarliest;
    this._srchTimeWin = config.srchTimeWin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // cumulative_rt_srch_jobs_quota - computed: true, optional: true, required: false
  private _cumulativeRtSrchJobsQuota?: number; 
  public get cumulativeRtSrchJobsQuota() {
    return this.getNumberAttribute('cumulative_rt_srch_jobs_quota');
  }
  public set cumulativeRtSrchJobsQuota(value: number) {
    this._cumulativeRtSrchJobsQuota = value;
  }
  public resetCumulativeRtSrchJobsQuota() {
    this._cumulativeRtSrchJobsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cumulativeRtSrchJobsQuotaInput() {
    return this._cumulativeRtSrchJobsQuota;
  }

  // cumulative_srch_jobs_quota - computed: true, optional: true, required: false
  private _cumulativeSrchJobsQuota?: number; 
  public get cumulativeSrchJobsQuota() {
    return this.getNumberAttribute('cumulative_srch_jobs_quota');
  }
  public set cumulativeSrchJobsQuota(value: number) {
    this._cumulativeSrchJobsQuota = value;
  }
  public resetCumulativeSrchJobsQuota() {
    this._cumulativeSrchJobsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cumulativeSrchJobsQuotaInput() {
    return this._cumulativeSrchJobsQuota;
  }

  // default_app - computed: true, optional: true, required: false
  private _defaultApp?: string; 
  public get defaultApp() {
    return this.getStringAttribute('default_app');
  }
  public set defaultApp(value: string) {
    this._defaultApp = value;
  }
  public resetDefaultApp() {
    this._defaultApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAppInput() {
    return this._defaultApp;
  }

  // federated_search_manage_ack - computed: false, optional: true, required: false
  private _federatedSearchManageAck?: string; 
  public get federatedSearchManageAck() {
    return this.getStringAttribute('federated_search_manage_ack');
  }
  public set federatedSearchManageAck(value: string) {
    this._federatedSearchManageAck = value;
  }
  public resetFederatedSearchManageAck() {
    this._federatedSearchManageAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedSearchManageAckInput() {
    return this._federatedSearchManageAck;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // imported_roles - computed: true, optional: true, required: false
  private _importedRoles?: string[]; 
  public get importedRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('imported_roles'));
  }
  public set importedRoles(value: string[]) {
    this._importedRoles = value;
  }
  public resetImportedRoles() {
    this._importedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedRolesInput() {
    return this._importedRoles;
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

  // rt_srch_jobs_quota - computed: true, optional: true, required: false
  private _rtSrchJobsQuota?: number; 
  public get rtSrchJobsQuota() {
    return this.getNumberAttribute('rt_srch_jobs_quota');
  }
  public set rtSrchJobsQuota(value: number) {
    this._rtSrchJobsQuota = value;
  }
  public resetRtSrchJobsQuota() {
    this._rtSrchJobsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtSrchJobsQuotaInput() {
    return this._rtSrchJobsQuota;
  }

  // srch_disk_quota - computed: true, optional: true, required: false
  private _srchDiskQuota?: number; 
  public get srchDiskQuota() {
    return this.getNumberAttribute('srch_disk_quota');
  }
  public set srchDiskQuota(value: number) {
    this._srchDiskQuota = value;
  }
  public resetSrchDiskQuota() {
    this._srchDiskQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srchDiskQuotaInput() {
    return this._srchDiskQuota;
  }

  // srch_filter - computed: true, optional: true, required: false
  private _srchFilter?: string; 
  public get srchFilter() {
    return this.getStringAttribute('srch_filter');
  }
  public set srchFilter(value: string) {
    this._srchFilter = value;
  }
  public resetSrchFilter() {
    this._srchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srchFilterInput() {
    return this._srchFilter;
  }

  // srch_indexes_allowed - computed: true, optional: true, required: false
  private _srchIndexesAllowed?: string[]; 
  public get srchIndexesAllowed() {
    return cdktf.Fn.tolist(this.getListAttribute('srch_indexes_allowed'));
  }
  public set srchIndexesAllowed(value: string[]) {
    this._srchIndexesAllowed = value;
  }
  public resetSrchIndexesAllowed() {
    this._srchIndexesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srchIndexesAllowedInput() {
    return this._srchIndexesAllowed;
  }

  // srch_indexes_default - computed: true, optional: true, required: false
  private _srchIndexesDefault?: string[]; 
  public get srchIndexesDefault() {
    return cdktf.Fn.tolist(this.getListAttribute('srch_indexes_default'));
  }
  public set srchIndexesDefault(value: string[]) {
    this._srchIndexesDefault = value;
  }
  public resetSrchIndexesDefault() {
    this._srchIndexesDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srchIndexesDefaultInput() {
    return this._srchIndexesDefault;
  }

  // srch_jobs_quota - computed: true, optional: true, required: false
  private _srchJobsQuota?: number; 
  public get srchJobsQuota() {
    return this.getNumberAttribute('srch_jobs_quota');
  }
  public set srchJobsQuota(value: number) {
    this._srchJobsQuota = value;
  }
  public resetSrchJobsQuota() {
    this._srchJobsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srchJobsQuotaInput() {
    return this._srchJobsQuota;
  }

  // srch_time_earliest - computed: true, optional: true, required: false
  private _srchTimeEarliest?: number; 
  public get srchTimeEarliest() {
    return this.getNumberAttribute('srch_time_earliest');
  }
  public set srchTimeEarliest(value: number) {
    this._srchTimeEarliest = value;
  }
  public resetSrchTimeEarliest() {
    this._srchTimeEarliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srchTimeEarliestInput() {
    return this._srchTimeEarliest;
  }

  // srch_time_win - computed: true, optional: true, required: false
  private _srchTimeWin?: number; 
  public get srchTimeWin() {
    return this.getNumberAttribute('srch_time_win');
  }
  public set srchTimeWin(value: number) {
    this._srchTimeWin = value;
  }
  public resetSrchTimeWin() {
    this._srchTimeWin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srchTimeWinInput() {
    return this._srchTimeWin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      cumulative_rt_srch_jobs_quota: cdktf.numberToTerraform(this._cumulativeRtSrchJobsQuota),
      cumulative_srch_jobs_quota: cdktf.numberToTerraform(this._cumulativeSrchJobsQuota),
      default_app: cdktf.stringToTerraform(this._defaultApp),
      federated_search_manage_ack: cdktf.stringToTerraform(this._federatedSearchManageAck),
      id: cdktf.stringToTerraform(this._id),
      imported_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importedRoles),
      name: cdktf.stringToTerraform(this._name),
      rt_srch_jobs_quota: cdktf.numberToTerraform(this._rtSrchJobsQuota),
      srch_disk_quota: cdktf.numberToTerraform(this._srchDiskQuota),
      srch_filter: cdktf.stringToTerraform(this._srchFilter),
      srch_indexes_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srchIndexesAllowed),
      srch_indexes_default: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srchIndexesDefault),
      srch_jobs_quota: cdktf.numberToTerraform(this._srchJobsQuota),
      srch_time_earliest: cdktf.numberToTerraform(this._srchTimeEarliest),
      srch_time_win: cdktf.numberToTerraform(this._srchTimeWin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cumulative_rt_srch_jobs_quota: {
        value: cdktf.numberToHclTerraform(this._cumulativeRtSrchJobsQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cumulative_srch_jobs_quota: {
        value: cdktf.numberToHclTerraform(this._cumulativeSrchJobsQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_app: {
        value: cdktf.stringToHclTerraform(this._defaultApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federated_search_manage_ack: {
        value: cdktf.stringToHclTerraform(this._federatedSearchManageAck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imported_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importedRoles),
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
      rt_srch_jobs_quota: {
        value: cdktf.numberToHclTerraform(this._rtSrchJobsQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srch_disk_quota: {
        value: cdktf.numberToHclTerraform(this._srchDiskQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srch_filter: {
        value: cdktf.stringToHclTerraform(this._srchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srch_indexes_allowed: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srchIndexesAllowed),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srch_indexes_default: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srchIndexesDefault),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srch_jobs_quota: {
        value: cdktf.numberToHclTerraform(this._srchJobsQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srch_time_earliest: {
        value: cdktf.numberToHclTerraform(this._srchTimeEarliest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srch_time_win: {
        value: cdktf.numberToHclTerraform(this._srchTimeWin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
