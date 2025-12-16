// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/postgresql_backup_download_restriction_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlBackupDownloadRestrictionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/postgresql_backup_download_restriction_config#id PostgresqlBackupDownloadRestrictionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ip limit Strategy: ALLOW, DENY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/postgresql_backup_download_restriction_config#ip_restriction_effect PostgresqlBackupDownloadRestrictionConfig#ip_restriction_effect}
  */
  readonly ipRestrictionEffect?: string;
  /**
  * The list of ips that are allowed or denied to download backup files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/postgresql_backup_download_restriction_config#ip_set PostgresqlBackupDownloadRestrictionConfig#ip_set}
  */
  readonly ipSet?: string[];
  /**
  * Backup file download restriction type: NONE:Unlimited, both internal and external networks can be downloaded. INTRANET:Only intranet downloads are allowed. CUSTOMIZE:Customize the vpc or ip that limits downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/postgresql_backup_download_restriction_config#restriction_type PostgresqlBackupDownloadRestrictionConfig#restriction_type}
  */
  readonly restrictionType: string;
  /**
  * The list of vpcIds that allow or deny downloading of backup files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/postgresql_backup_download_restriction_config#vpc_id_set PostgresqlBackupDownloadRestrictionConfig#vpc_id_set}
  */
  readonly vpcIdSet?: string[];
  /**
  * vpc limit Strategy: ALLOW, DENY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/postgresql_backup_download_restriction_config#vpc_restriction_effect PostgresqlBackupDownloadRestrictionConfig#vpc_restriction_effect}
  */
  readonly vpcRestrictionEffect?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/postgresql_backup_download_restriction_config tencentcloud_postgresql_backup_download_restriction_config}
*/
export class PostgresqlBackupDownloadRestrictionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_backup_download_restriction_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlBackupDownloadRestrictionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlBackupDownloadRestrictionConfig to import
  * @param importFromId The id of the existing PostgresqlBackupDownloadRestrictionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/postgresql_backup_download_restriction_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlBackupDownloadRestrictionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_backup_download_restriction_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/postgresql_backup_download_restriction_config tencentcloud_postgresql_backup_download_restriction_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlBackupDownloadRestrictionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlBackupDownloadRestrictionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_backup_download_restriction_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipRestrictionEffect = config.ipRestrictionEffect;
    this._ipSet = config.ipSet;
    this._restrictionType = config.restrictionType;
    this._vpcIdSet = config.vpcIdSet;
    this._vpcRestrictionEffect = config.vpcRestrictionEffect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // restriction_type - computed: false, optional: false, required: true
  private _restrictionType?: string; 
  public get restrictionType() {
    return this.getStringAttribute('restriction_type');
  }
  public set restrictionType(value: string) {
    this._restrictionType = value;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_restriction_effect: cdktf.stringToTerraform(this._ipRestrictionEffect),
      ip_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSet),
      restriction_type: cdktf.stringToTerraform(this._restrictionType),
      vpc_id_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcIdSet),
      vpc_restriction_effect: cdktf.stringToTerraform(this._vpcRestrictionEffect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_restriction_effect: {
        value: cdktf.stringToHclTerraform(this._ipRestrictionEffect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      restriction_type: {
        value: cdktf.stringToHclTerraform(this._restrictionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_restriction_effect: {
        value: cdktf.stringToHclTerraform(this._vpcRestrictionEffect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
