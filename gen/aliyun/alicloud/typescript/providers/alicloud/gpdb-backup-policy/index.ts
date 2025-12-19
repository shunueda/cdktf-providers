// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpdbBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#backup_retention_period GpdbBackupPolicy#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#db_instance_id GpdbBackupPolicy#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#enable_recovery_point GpdbBackupPolicy#enable_recovery_point}
  */
  readonly enableRecoveryPoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#id GpdbBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#preferred_backup_period GpdbBackupPolicy#preferred_backup_period}
  */
  readonly preferredBackupPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#preferred_backup_time GpdbBackupPolicy#preferred_backup_time}
  */
  readonly preferredBackupTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#recovery_point_period GpdbBackupPolicy#recovery_point_period}
  */
  readonly recoveryPointPeriod?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#timeouts GpdbBackupPolicy#timeouts}
  */
  readonly timeouts?: GpdbBackupPolicyTimeouts;
}
export interface GpdbBackupPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#create GpdbBackupPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#delete GpdbBackupPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#update GpdbBackupPolicy#update}
  */
  readonly update?: string;
}

export function gpdbBackupPolicyTimeoutsToTerraform(struct?: GpdbBackupPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gpdbBackupPolicyTimeoutsToHclTerraform(struct?: GpdbBackupPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbBackupPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GpdbBackupPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbBackupPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy alicloud_gpdb_backup_policy}
*/
export class GpdbBackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_gpdb_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpdbBackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpdbBackupPolicy to import
  * @param importFromId The id of the existing GpdbBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpdbBackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_gpdb_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_backup_policy alicloud_gpdb_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpdbBackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GpdbBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_gpdb_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._dbInstanceId = config.dbInstanceId;
    this._enableRecoveryPoint = config.enableRecoveryPoint;
    this._id = config.id;
    this._preferredBackupPeriod = config.preferredBackupPeriod;
    this._preferredBackupTime = config.preferredBackupTime;
    this._recoveryPointPeriod = config.recoveryPointPeriod;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_retention_period - computed: true, optional: true, required: false
  private _backupRetentionPeriod?: number; 
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
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

  // enable_recovery_point - computed: true, optional: true, required: false
  private _enableRecoveryPoint?: boolean | cdktf.IResolvable; 
  public get enableRecoveryPoint() {
    return this.getBooleanAttribute('enable_recovery_point');
  }
  public set enableRecoveryPoint(value: boolean | cdktf.IResolvable) {
    this._enableRecoveryPoint = value;
  }
  public resetEnableRecoveryPoint() {
    this._enableRecoveryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRecoveryPointInput() {
    return this._enableRecoveryPoint;
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

  // preferred_backup_period - computed: false, optional: false, required: true
  private _preferredBackupPeriod?: string; 
  public get preferredBackupPeriod() {
    return this.getStringAttribute('preferred_backup_period');
  }
  public set preferredBackupPeriod(value: string) {
    this._preferredBackupPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupPeriodInput() {
    return this._preferredBackupPeriod;
  }

  // preferred_backup_time - computed: false, optional: false, required: true
  private _preferredBackupTime?: string; 
  public get preferredBackupTime() {
    return this.getStringAttribute('preferred_backup_time');
  }
  public set preferredBackupTime(value: string) {
    this._preferredBackupTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupTimeInput() {
    return this._preferredBackupTime;
  }

  // recovery_point_period - computed: true, optional: true, required: false
  private _recoveryPointPeriod?: string; 
  public get recoveryPointPeriod() {
    return this.getStringAttribute('recovery_point_period');
  }
  public set recoveryPointPeriod(value: string) {
    this._recoveryPointPeriod = value;
  }
  public resetRecoveryPointPeriod() {
    this._recoveryPointPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointPeriodInput() {
    return this._recoveryPointPeriod;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GpdbBackupPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GpdbBackupPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      enable_recovery_point: cdktf.booleanToTerraform(this._enableRecoveryPoint),
      id: cdktf.stringToTerraform(this._id),
      preferred_backup_period: cdktf.stringToTerraform(this._preferredBackupPeriod),
      preferred_backup_time: cdktf.stringToTerraform(this._preferredBackupTime),
      recovery_point_period: cdktf.stringToTerraform(this._recoveryPointPeriod),
      timeouts: gpdbBackupPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_recovery_point: {
        value: cdktf.booleanToHclTerraform(this._enableRecoveryPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_backup_period: {
        value: cdktf.stringToHclTerraform(this._preferredBackupPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_backup_time: {
        value: cdktf.stringToHclTerraform(this._preferredBackupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_point_period: {
        value: cdktf.stringToHclTerraform(this._recoveryPointPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: gpdbBackupPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GpdbBackupPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
