// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudPostgresqlBackupDownloadUrlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique backup ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#backup_id DataTencentcloudPostgresqlBackupDownloadUrls#backup_id}
  */
  readonly backupId: string;
  /**
  * Backup type. Valid values: `LogBackup`, `BaseBackup`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#backup_type DataTencentcloudPostgresqlBackupDownloadUrls#backup_type}
  */
  readonly backupType: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#db_instance_id DataTencentcloudPostgresqlBackupDownloadUrls#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#id DataTencentcloudPostgresqlBackupDownloadUrls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#result_output_file DataTencentcloudPostgresqlBackupDownloadUrls#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Validity period of a URL, which is 12 hours by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#url_expire_time DataTencentcloudPostgresqlBackupDownloadUrls#url_expire_time}
  */
  readonly urlExpireTime?: number;
  /**
  * backup_download_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#backup_download_restriction DataTencentcloudPostgresqlBackupDownloadUrls#backup_download_restriction}
  */
  readonly backupDownloadRestriction?: DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestriction;
}
export interface DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestriction {
  /**
  * Whether IP is allowed. Valid values: `ALLOW` (allow), `DENY` (deny).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#ip_restriction_effect DataTencentcloudPostgresqlBackupDownloadUrls#ip_restriction_effect}
  */
  readonly ipRestrictionEffect?: string;
  /**
  * Whether it is allowed to download IP list of the backup files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#ip_set DataTencentcloudPostgresqlBackupDownloadUrls#ip_set}
  */
  readonly ipSet?: string[];
  /**
  * Type of the network restrictions for downloading backup files. Valid values: `NONE` (backups can be downloaded over both private and public networks), `INTRANET` (backups can only be downloaded over the private network), `CUSTOMIZE` (backups can be downloaded over specified VPCs or at specified IPs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#restriction_type DataTencentcloudPostgresqlBackupDownloadUrls#restriction_type}
  */
  readonly restrictionType?: string;
  /**
  * Whether it is allowed to download the VPC ID list of the backup files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#vpc_id_set DataTencentcloudPostgresqlBackupDownloadUrls#vpc_id_set}
  */
  readonly vpcIdSet?: string[];
  /**
  * Whether VPC is allowed. Valid values: `ALLOW` (allow), `DENY` (deny).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#vpc_restriction_effect DataTencentcloudPostgresqlBackupDownloadUrls#vpc_restriction_effect}
  */
  readonly vpcRestrictionEffect?: string;
}

export function dataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestrictionToTerraform(struct?: DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestrictionOutputReference | DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_restriction_effect: cdktf.stringToTerraform(struct!.ipRestrictionEffect),
    ip_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipSet),
    restriction_type: cdktf.stringToTerraform(struct!.restrictionType),
    vpc_id_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcIdSet),
    vpc_restriction_effect: cdktf.stringToTerraform(struct!.vpcRestrictionEffect),
  }
}


export function dataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestrictionToHclTerraform(struct?: DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestrictionOutputReference | DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_restriction_effect: {
      value: cdktf.stringToHclTerraform(struct!.ipRestrictionEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    restriction_type: {
      value: cdktf.stringToHclTerraform(struct!.restrictionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcIdSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_restriction_effect: {
      value: cdktf.stringToHclTerraform(struct!.vpcRestrictionEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRestrictionEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRestrictionEffect = this._ipRestrictionEffect;
    }
    if (this._ipSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSet = this._ipSet;
    }
    if (this._restrictionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionType = this._restrictionType;
    }
    if (this._vpcIdSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIdSet = this._vpcIdSet;
    }
    if (this._vpcRestrictionEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcRestrictionEffect = this._vpcRestrictionEffect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipRestrictionEffect = undefined;
      this._ipSet = undefined;
      this._restrictionType = undefined;
      this._vpcIdSet = undefined;
      this._vpcRestrictionEffect = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipRestrictionEffect = value.ipRestrictionEffect;
      this._ipSet = value.ipSet;
      this._restrictionType = value.restrictionType;
      this._vpcIdSet = value.vpcIdSet;
      this._vpcRestrictionEffect = value.vpcRestrictionEffect;
    }
  }

  // ip_restriction_effect - computed: false, optional: true, required: false
  private _ipRestrictionEffect?: string; 
  public get ipRestrictionEffect() {
    return this.getStringAttribute('ip_restriction_effect');
  }
  public set ipRestrictionEffect(value: string) {
    this._ipRestrictionEffect = value;
  }
  public resetIpRestrictionEffect() {
    this._ipRestrictionEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionEffectInput() {
    return this._ipRestrictionEffect;
  }

  // ip_set - computed: false, optional: true, required: false
  private _ipSet?: string[]; 
  public get ipSet() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_set'));
  }
  public set ipSet(value: string[]) {
    this._ipSet = value;
  }
  public resetIpSet() {
    this._ipSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetInput() {
    return this._ipSet;
  }

  // restriction_type - computed: false, optional: true, required: false
  private _restrictionType?: string; 
  public get restrictionType() {
    return this.getStringAttribute('restriction_type');
  }
  public set restrictionType(value: string) {
    this._restrictionType = value;
  }
  public resetRestrictionType() {
    this._restrictionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionTypeInput() {
    return this._restrictionType;
  }

  // vpc_id_set - computed: false, optional: true, required: false
  private _vpcIdSet?: string[]; 
  public get vpcIdSet() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_id_set'));
  }
  public set vpcIdSet(value: string[]) {
    this._vpcIdSet = value;
  }
  public resetVpcIdSet() {
    this._vpcIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdSetInput() {
    return this._vpcIdSet;
  }

  // vpc_restriction_effect - computed: false, optional: true, required: false
  private _vpcRestrictionEffect?: string; 
  public get vpcRestrictionEffect() {
    return this.getStringAttribute('vpc_restriction_effect');
  }
  public set vpcRestrictionEffect(value: string) {
    this._vpcRestrictionEffect = value;
  }
  public resetVpcRestrictionEffect() {
    this._vpcRestrictionEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcRestrictionEffectInput() {
    return this._vpcRestrictionEffect;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls tencentcloud_postgresql_backup_download_urls}
*/
export class DataTencentcloudPostgresqlBackupDownloadUrls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_backup_download_urls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudPostgresqlBackupDownloadUrls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudPostgresqlBackupDownloadUrls to import
  * @param importFromId The id of the existing DataTencentcloudPostgresqlBackupDownloadUrls that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudPostgresqlBackupDownloadUrls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_backup_download_urls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/postgresql_backup_download_urls tencentcloud_postgresql_backup_download_urls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudPostgresqlBackupDownloadUrlsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudPostgresqlBackupDownloadUrlsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_backup_download_urls',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupId = config.backupId;
    this._backupType = config.backupType;
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._urlExpireTime = config.urlExpireTime;
    this._backupDownloadRestriction.internalValue = config.backupDownloadRestriction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_download_url - computed: true, optional: false, required: false
  public get backupDownloadUrl() {
    return this.getStringAttribute('backup_download_url');
  }

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backup_type - computed: false, optional: false, required: true
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // url_expire_time - computed: false, optional: true, required: false
  private _urlExpireTime?: number; 
  public get urlExpireTime() {
    return this.getNumberAttribute('url_expire_time');
  }
  public set urlExpireTime(value: number) {
    this._urlExpireTime = value;
  }
  public resetUrlExpireTime() {
    this._urlExpireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlExpireTimeInput() {
    return this._urlExpireTime;
  }

  // backup_download_restriction - computed: false, optional: true, required: false
  private _backupDownloadRestriction = new DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestrictionOutputReference(this, "backup_download_restriction");
  public get backupDownloadRestriction() {
    return this._backupDownloadRestriction;
  }
  public putBackupDownloadRestriction(value: DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestriction) {
    this._backupDownloadRestriction.internalValue = value;
  }
  public resetBackupDownloadRestriction() {
    this._backupDownloadRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDownloadRestrictionInput() {
    return this._backupDownloadRestriction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_id: cdktf.stringToTerraform(this._backupId),
      backup_type: cdktf.stringToTerraform(this._backupType),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      url_expire_time: cdktf.numberToTerraform(this._urlExpireTime),
      backup_download_restriction: dataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestrictionToTerraform(this._backupDownloadRestriction.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_type: {
        value: cdktf.stringToHclTerraform(this._backupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_expire_time: {
        value: cdktf.numberToHclTerraform(this._urlExpireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_download_restriction: {
        value: dataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestrictionToHclTerraform(this._backupDownloadRestriction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudPostgresqlBackupDownloadUrlsBackupDownloadRestrictionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
