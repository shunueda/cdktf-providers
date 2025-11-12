// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DvmdbAdomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#create_time DvmdbAdom#create_time}
  */
  readonly createTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#desc DvmdbAdom#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#flags DvmdbAdom#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#id DvmdbAdom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#lock_override DvmdbAdom#lock_override}
  */
  readonly lockOverride?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#log_db_retention_hours DvmdbAdom#log_db_retention_hours}
  */
  readonly logDbRetentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#log_disk_quota DvmdbAdom#log_disk_quota}
  */
  readonly logDiskQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#log_disk_quota_alert_thres DvmdbAdom#log_disk_quota_alert_thres}
  */
  readonly logDiskQuotaAlertThres?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#log_disk_quota_split_ratio DvmdbAdom#log_disk_quota_split_ratio}
  */
  readonly logDiskQuotaSplitRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#log_file_retention_hours DvmdbAdom#log_file_retention_hours}
  */
  readonly logFileRetentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#metafields DvmdbAdom#metafields}
  */
  readonly metafields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#mig_mr DvmdbAdom#mig_mr}
  */
  readonly migMr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#mig_os_ver DvmdbAdom#mig_os_ver}
  */
  readonly migOsVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#mode DvmdbAdom#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#mr DvmdbAdom#mr}
  */
  readonly mr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#name DvmdbAdom#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#os_ver DvmdbAdom#os_ver}
  */
  readonly osVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#primary_dns_ip4 DvmdbAdom#primary_dns_ip4}
  */
  readonly primaryDnsIp4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#primary_dns_ip6_1 DvmdbAdom#primary_dns_ip6_1}
  */
  readonly primaryDnsIp61?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#primary_dns_ip6_2 DvmdbAdom#primary_dns_ip6_2}
  */
  readonly primaryDnsIp62?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#primary_dns_ip6_3 DvmdbAdom#primary_dns_ip6_3}
  */
  readonly primaryDnsIp63?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#primary_dns_ip6_4 DvmdbAdom#primary_dns_ip6_4}
  */
  readonly primaryDnsIp64?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#restricted_prds DvmdbAdom#restricted_prds}
  */
  readonly restrictedPrds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#secondary_dns_ip4 DvmdbAdom#secondary_dns_ip4}
  */
  readonly secondaryDnsIp4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#secondary_dns_ip6_1 DvmdbAdom#secondary_dns_ip6_1}
  */
  readonly secondaryDnsIp61?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#secondary_dns_ip6_2 DvmdbAdom#secondary_dns_ip6_2}
  */
  readonly secondaryDnsIp62?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#secondary_dns_ip6_3 DvmdbAdom#secondary_dns_ip6_3}
  */
  readonly secondaryDnsIp63?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#secondary_dns_ip6_4 DvmdbAdom#secondary_dns_ip6_4}
  */
  readonly secondaryDnsIp64?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#state DvmdbAdom#state}
  */
  readonly state?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#tz DvmdbAdom#tz}
  */
  readonly tz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#uuid DvmdbAdom#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#workspace_mode DvmdbAdom#workspace_mode}
  */
  readonly workspaceMode?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom fortimanager_dvmdb_adom}
*/
export class DvmdbAdom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_dvmdb_adom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DvmdbAdom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DvmdbAdom to import
  * @param importFromId The id of the existing DvmdbAdom that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DvmdbAdom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_dvmdb_adom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_adom fortimanager_dvmdb_adom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DvmdbAdomConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DvmdbAdomConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_dvmdb_adom',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createTime = config.createTime;
    this._desc = config.desc;
    this._flags = config.flags;
    this._id = config.id;
    this._lockOverride = config.lockOverride;
    this._logDbRetentionHours = config.logDbRetentionHours;
    this._logDiskQuota = config.logDiskQuota;
    this._logDiskQuotaAlertThres = config.logDiskQuotaAlertThres;
    this._logDiskQuotaSplitRatio = config.logDiskQuotaSplitRatio;
    this._logFileRetentionHours = config.logFileRetentionHours;
    this._metafields = config.metafields;
    this._migMr = config.migMr;
    this._migOsVer = config.migOsVer;
    this._mode = config.mode;
    this._mr = config.mr;
    this._name = config.name;
    this._osVer = config.osVer;
    this._primaryDnsIp4 = config.primaryDnsIp4;
    this._primaryDnsIp61 = config.primaryDnsIp61;
    this._primaryDnsIp62 = config.primaryDnsIp62;
    this._primaryDnsIp63 = config.primaryDnsIp63;
    this._primaryDnsIp64 = config.primaryDnsIp64;
    this._restrictedPrds = config.restrictedPrds;
    this._secondaryDnsIp4 = config.secondaryDnsIp4;
    this._secondaryDnsIp61 = config.secondaryDnsIp61;
    this._secondaryDnsIp62 = config.secondaryDnsIp62;
    this._secondaryDnsIp63 = config.secondaryDnsIp63;
    this._secondaryDnsIp64 = config.secondaryDnsIp64;
    this._state = config.state;
    this._tz = config.tz;
    this._uuid = config.uuid;
    this._workspaceMode = config.workspaceMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: true, required: false
  private _createTime?: number; 
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }
  public set createTime(value: number) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return cdktf.Fn.tolist(this.getListAttribute('flags'));
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
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

  // lock_override - computed: false, optional: true, required: false
  private _lockOverride?: number; 
  public get lockOverride() {
    return this.getNumberAttribute('lock_override');
  }
  public set lockOverride(value: number) {
    this._lockOverride = value;
  }
  public resetLockOverride() {
    this._lockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockOverrideInput() {
    return this._lockOverride;
  }

  // log_db_retention_hours - computed: true, optional: true, required: false
  private _logDbRetentionHours?: number; 
  public get logDbRetentionHours() {
    return this.getNumberAttribute('log_db_retention_hours');
  }
  public set logDbRetentionHours(value: number) {
    this._logDbRetentionHours = value;
  }
  public resetLogDbRetentionHours() {
    this._logDbRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDbRetentionHoursInput() {
    return this._logDbRetentionHours;
  }

  // log_disk_quota - computed: false, optional: true, required: false
  private _logDiskQuota?: number; 
  public get logDiskQuota() {
    return this.getNumberAttribute('log_disk_quota');
  }
  public set logDiskQuota(value: number) {
    this._logDiskQuota = value;
  }
  public resetLogDiskQuota() {
    this._logDiskQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskQuotaInput() {
    return this._logDiskQuota;
  }

  // log_disk_quota_alert_thres - computed: true, optional: true, required: false
  private _logDiskQuotaAlertThres?: number; 
  public get logDiskQuotaAlertThres() {
    return this.getNumberAttribute('log_disk_quota_alert_thres');
  }
  public set logDiskQuotaAlertThres(value: number) {
    this._logDiskQuotaAlertThres = value;
  }
  public resetLogDiskQuotaAlertThres() {
    this._logDiskQuotaAlertThres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskQuotaAlertThresInput() {
    return this._logDiskQuotaAlertThres;
  }

  // log_disk_quota_split_ratio - computed: true, optional: true, required: false
  private _logDiskQuotaSplitRatio?: number; 
  public get logDiskQuotaSplitRatio() {
    return this.getNumberAttribute('log_disk_quota_split_ratio');
  }
  public set logDiskQuotaSplitRatio(value: number) {
    this._logDiskQuotaSplitRatio = value;
  }
  public resetLogDiskQuotaSplitRatio() {
    this._logDiskQuotaSplitRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskQuotaSplitRatioInput() {
    return this._logDiskQuotaSplitRatio;
  }

  // log_file_retention_hours - computed: true, optional: true, required: false
  private _logFileRetentionHours?: number; 
  public get logFileRetentionHours() {
    return this.getNumberAttribute('log_file_retention_hours');
  }
  public set logFileRetentionHours(value: number) {
    this._logFileRetentionHours = value;
  }
  public resetLogFileRetentionHours() {
    this._logFileRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileRetentionHoursInput() {
    return this._logFileRetentionHours;
  }

  // metafields - computed: false, optional: true, required: false
  private _metafields?: string; 
  public get metafields() {
    return this.getStringAttribute('metafields');
  }
  public set metafields(value: string) {
    this._metafields = value;
  }
  public resetMetafields() {
    this._metafields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metafieldsInput() {
    return this._metafields;
  }

  // mig_mr - computed: true, optional: true, required: false
  private _migMr?: number; 
  public get migMr() {
    return this.getNumberAttribute('mig_mr');
  }
  public set migMr(value: number) {
    this._migMr = value;
  }
  public resetMigMr() {
    this._migMr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migMrInput() {
    return this._migMr;
  }

  // mig_os_ver - computed: true, optional: true, required: false
  private _migOsVer?: string; 
  public get migOsVer() {
    return this.getStringAttribute('mig_os_ver');
  }
  public set migOsVer(value: string) {
    this._migOsVer = value;
  }
  public resetMigOsVer() {
    this._migOsVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migOsVerInput() {
    return this._migOsVer;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mr - computed: true, optional: true, required: false
  private _mr?: number; 
  public get mr() {
    return this.getNumberAttribute('mr');
  }
  public set mr(value: number) {
    this._mr = value;
  }
  public resetMr() {
    this._mr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mrInput() {
    return this._mr;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os_ver - computed: true, optional: true, required: false
  private _osVer?: string; 
  public get osVer() {
    return this.getStringAttribute('os_ver');
  }
  public set osVer(value: string) {
    this._osVer = value;
  }
  public resetOsVer() {
    this._osVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVerInput() {
    return this._osVer;
  }

  // primary_dns_ip4 - computed: true, optional: true, required: false
  private _primaryDnsIp4?: string; 
  public get primaryDnsIp4() {
    return this.getStringAttribute('primary_dns_ip4');
  }
  public set primaryDnsIp4(value: string) {
    this._primaryDnsIp4 = value;
  }
  public resetPrimaryDnsIp4() {
    this._primaryDnsIp4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsIp4Input() {
    return this._primaryDnsIp4;
  }

  // primary_dns_ip6_1 - computed: false, optional: true, required: false
  private _primaryDnsIp61?: number; 
  public get primaryDnsIp61() {
    return this.getNumberAttribute('primary_dns_ip6_1');
  }
  public set primaryDnsIp61(value: number) {
    this._primaryDnsIp61 = value;
  }
  public resetPrimaryDnsIp61() {
    this._primaryDnsIp61 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsIp61Input() {
    return this._primaryDnsIp61;
  }

  // primary_dns_ip6_2 - computed: false, optional: true, required: false
  private _primaryDnsIp62?: number; 
  public get primaryDnsIp62() {
    return this.getNumberAttribute('primary_dns_ip6_2');
  }
  public set primaryDnsIp62(value: number) {
    this._primaryDnsIp62 = value;
  }
  public resetPrimaryDnsIp62() {
    this._primaryDnsIp62 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsIp62Input() {
    return this._primaryDnsIp62;
  }

  // primary_dns_ip6_3 - computed: false, optional: true, required: false
  private _primaryDnsIp63?: number; 
  public get primaryDnsIp63() {
    return this.getNumberAttribute('primary_dns_ip6_3');
  }
  public set primaryDnsIp63(value: number) {
    this._primaryDnsIp63 = value;
  }
  public resetPrimaryDnsIp63() {
    this._primaryDnsIp63 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsIp63Input() {
    return this._primaryDnsIp63;
  }

  // primary_dns_ip6_4 - computed: false, optional: true, required: false
  private _primaryDnsIp64?: number; 
  public get primaryDnsIp64() {
    return this.getNumberAttribute('primary_dns_ip6_4');
  }
  public set primaryDnsIp64(value: number) {
    this._primaryDnsIp64 = value;
  }
  public resetPrimaryDnsIp64() {
    this._primaryDnsIp64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsIp64Input() {
    return this._primaryDnsIp64;
  }

  // restricted_prds - computed: true, optional: true, required: false
  private _restrictedPrds?: string[]; 
  public get restrictedPrds() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_prds'));
  }
  public set restrictedPrds(value: string[]) {
    this._restrictedPrds = value;
  }
  public resetRestrictedPrds() {
    this._restrictedPrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedPrdsInput() {
    return this._restrictedPrds;
  }

  // secondary_dns_ip4 - computed: true, optional: true, required: false
  private _secondaryDnsIp4?: string; 
  public get secondaryDnsIp4() {
    return this.getStringAttribute('secondary_dns_ip4');
  }
  public set secondaryDnsIp4(value: string) {
    this._secondaryDnsIp4 = value;
  }
  public resetSecondaryDnsIp4() {
    this._secondaryDnsIp4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsIp4Input() {
    return this._secondaryDnsIp4;
  }

  // secondary_dns_ip6_1 - computed: false, optional: true, required: false
  private _secondaryDnsIp61?: number; 
  public get secondaryDnsIp61() {
    return this.getNumberAttribute('secondary_dns_ip6_1');
  }
  public set secondaryDnsIp61(value: number) {
    this._secondaryDnsIp61 = value;
  }
  public resetSecondaryDnsIp61() {
    this._secondaryDnsIp61 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsIp61Input() {
    return this._secondaryDnsIp61;
  }

  // secondary_dns_ip6_2 - computed: false, optional: true, required: false
  private _secondaryDnsIp62?: number; 
  public get secondaryDnsIp62() {
    return this.getNumberAttribute('secondary_dns_ip6_2');
  }
  public set secondaryDnsIp62(value: number) {
    this._secondaryDnsIp62 = value;
  }
  public resetSecondaryDnsIp62() {
    this._secondaryDnsIp62 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsIp62Input() {
    return this._secondaryDnsIp62;
  }

  // secondary_dns_ip6_3 - computed: false, optional: true, required: false
  private _secondaryDnsIp63?: number; 
  public get secondaryDnsIp63() {
    return this.getNumberAttribute('secondary_dns_ip6_3');
  }
  public set secondaryDnsIp63(value: number) {
    this._secondaryDnsIp63 = value;
  }
  public resetSecondaryDnsIp63() {
    this._secondaryDnsIp63 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsIp63Input() {
    return this._secondaryDnsIp63;
  }

  // secondary_dns_ip6_4 - computed: false, optional: true, required: false
  private _secondaryDnsIp64?: number; 
  public get secondaryDnsIp64() {
    return this.getNumberAttribute('secondary_dns_ip6_4');
  }
  public set secondaryDnsIp64(value: number) {
    this._secondaryDnsIp64 = value;
  }
  public resetSecondaryDnsIp64() {
    this._secondaryDnsIp64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsIp64Input() {
    return this._secondaryDnsIp64;
  }

  // state - computed: true, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tz - computed: true, optional: true, required: false
  private _tz?: number; 
  public get tz() {
    return this.getNumberAttribute('tz');
  }
  public set tz(value: number) {
    this._tz = value;
  }
  public resetTz() {
    this._tz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tzInput() {
    return this._tz;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // workspace_mode - computed: true, optional: true, required: false
  private _workspaceMode?: number; 
  public get workspaceMode() {
    return this.getNumberAttribute('workspace_mode');
  }
  public set workspaceMode(value: number) {
    this._workspaceMode = value;
  }
  public resetWorkspaceMode() {
    this._workspaceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceModeInput() {
    return this._workspaceMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_time: cdktf.numberToTerraform(this._createTime),
      desc: cdktf.stringToTerraform(this._desc),
      flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._flags),
      id: cdktf.stringToTerraform(this._id),
      lock_override: cdktf.numberToTerraform(this._lockOverride),
      log_db_retention_hours: cdktf.numberToTerraform(this._logDbRetentionHours),
      log_disk_quota: cdktf.numberToTerraform(this._logDiskQuota),
      log_disk_quota_alert_thres: cdktf.numberToTerraform(this._logDiskQuotaAlertThres),
      log_disk_quota_split_ratio: cdktf.numberToTerraform(this._logDiskQuotaSplitRatio),
      log_file_retention_hours: cdktf.numberToTerraform(this._logFileRetentionHours),
      metafields: cdktf.stringToTerraform(this._metafields),
      mig_mr: cdktf.numberToTerraform(this._migMr),
      mig_os_ver: cdktf.stringToTerraform(this._migOsVer),
      mode: cdktf.stringToTerraform(this._mode),
      mr: cdktf.numberToTerraform(this._mr),
      name: cdktf.stringToTerraform(this._name),
      os_ver: cdktf.stringToTerraform(this._osVer),
      primary_dns_ip4: cdktf.stringToTerraform(this._primaryDnsIp4),
      primary_dns_ip6_1: cdktf.numberToTerraform(this._primaryDnsIp61),
      primary_dns_ip6_2: cdktf.numberToTerraform(this._primaryDnsIp62),
      primary_dns_ip6_3: cdktf.numberToTerraform(this._primaryDnsIp63),
      primary_dns_ip6_4: cdktf.numberToTerraform(this._primaryDnsIp64),
      restricted_prds: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictedPrds),
      secondary_dns_ip4: cdktf.stringToTerraform(this._secondaryDnsIp4),
      secondary_dns_ip6_1: cdktf.numberToTerraform(this._secondaryDnsIp61),
      secondary_dns_ip6_2: cdktf.numberToTerraform(this._secondaryDnsIp62),
      secondary_dns_ip6_3: cdktf.numberToTerraform(this._secondaryDnsIp63),
      secondary_dns_ip6_4: cdktf.numberToTerraform(this._secondaryDnsIp64),
      state: cdktf.numberToTerraform(this._state),
      tz: cdktf.numberToTerraform(this._tz),
      uuid: cdktf.stringToTerraform(this._uuid),
      workspace_mode: cdktf.numberToTerraform(this._workspaceMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_time: {
        value: cdktf.numberToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._flags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_override: {
        value: cdktf.numberToHclTerraform(this._lockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_db_retention_hours: {
        value: cdktf.numberToHclTerraform(this._logDbRetentionHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_disk_quota: {
        value: cdktf.numberToHclTerraform(this._logDiskQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_disk_quota_alert_thres: {
        value: cdktf.numberToHclTerraform(this._logDiskQuotaAlertThres),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_disk_quota_split_ratio: {
        value: cdktf.numberToHclTerraform(this._logDiskQuotaSplitRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_file_retention_hours: {
        value: cdktf.numberToHclTerraform(this._logFileRetentionHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metafields: {
        value: cdktf.stringToHclTerraform(this._metafields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mig_mr: {
        value: cdktf.numberToHclTerraform(this._migMr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mig_os_ver: {
        value: cdktf.stringToHclTerraform(this._migOsVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mr: {
        value: cdktf.numberToHclTerraform(this._mr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_ver: {
        value: cdktf.stringToHclTerraform(this._osVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_dns_ip4: {
        value: cdktf.stringToHclTerraform(this._primaryDnsIp4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_dns_ip6_1: {
        value: cdktf.numberToHclTerraform(this._primaryDnsIp61),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_dns_ip6_2: {
        value: cdktf.numberToHclTerraform(this._primaryDnsIp62),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_dns_ip6_3: {
        value: cdktf.numberToHclTerraform(this._primaryDnsIp63),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_dns_ip6_4: {
        value: cdktf.numberToHclTerraform(this._primaryDnsIp64),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restricted_prds: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictedPrds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secondary_dns_ip4: {
        value: cdktf.stringToHclTerraform(this._secondaryDnsIp4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_dns_ip6_1: {
        value: cdktf.numberToHclTerraform(this._secondaryDnsIp61),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_dns_ip6_2: {
        value: cdktf.numberToHclTerraform(this._secondaryDnsIp62),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_dns_ip6_3: {
        value: cdktf.numberToHclTerraform(this._secondaryDnsIp63),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_dns_ip6_4: {
        value: cdktf.numberToHclTerraform(this._secondaryDnsIp64),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.numberToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tz: {
        value: cdktf.numberToHclTerraform(this._tz),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_mode: {
        value: cdktf.numberToHclTerraform(this._workspaceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
