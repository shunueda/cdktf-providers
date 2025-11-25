// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSnapshotPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup strategy type, `operate`: operate backup, `time`: schedule backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#backup_type VpcSnapshotPolicy#backup_type}
  */
  readonly backupType: string;
  /**
  * cos bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#cos_bucket VpcSnapshotPolicy#cos_bucket}
  */
  readonly cosBucket: string;
  /**
  * The region where the cos bucket is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#cos_region VpcSnapshotPolicy#cos_region}
  */
  readonly cosRegion: string;
  /**
  * Whether to create a new cos bucket, the default is False.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#create_new_cos VpcSnapshotPolicy#create_new_cos}
  */
  readonly createNewCos: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#id VpcSnapshotPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The retention time supports 1 to 365 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#keep_time VpcSnapshotPolicy#keep_time}
  */
  readonly keepTime: number;
  /**
  * Snapshot policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#snapshot_policy_name VpcSnapshotPolicy#snapshot_policy_name}
  */
  readonly snapshotPolicyName: string;
  /**
  * backup_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#backup_policies VpcSnapshotPolicy#backup_policies}
  */
  readonly backupPolicies?: VpcSnapshotPolicyBackupPolicies[] | cdktf.IResolvable;
}
export interface VpcSnapshotPolicyBackupPolicies {
  /**
  * Backup cycle time, the value can be monday, tuesday, wednesday, thursday, friday, saturday, sunday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#backup_day VpcSnapshotPolicy#backup_day}
  */
  readonly backupDay: string;
  /**
  * Backup time point, format:HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#backup_time VpcSnapshotPolicy#backup_time}
  */
  readonly backupTime: string;
}

export function vpcSnapshotPolicyBackupPoliciesToTerraform(struct?: VpcSnapshotPolicyBackupPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_day: cdktf.stringToTerraform(struct!.backupDay),
    backup_time: cdktf.stringToTerraform(struct!.backupTime),
  }
}


export function vpcSnapshotPolicyBackupPoliciesToHclTerraform(struct?: VpcSnapshotPolicyBackupPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_day: {
      value: cdktf.stringToHclTerraform(struct!.backupDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_time: {
      value: cdktf.stringToHclTerraform(struct!.backupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSnapshotPolicyBackupPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VpcSnapshotPolicyBackupPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDay = this._backupDay;
    }
    if (this._backupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTime = this._backupTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSnapshotPolicyBackupPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupDay = undefined;
      this._backupTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupDay = value.backupDay;
      this._backupTime = value.backupTime;
    }
  }

  // backup_day - computed: false, optional: false, required: true
  private _backupDay?: string; 
  public get backupDay() {
    return this.getStringAttribute('backup_day');
  }
  public set backupDay(value: string) {
    this._backupDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDayInput() {
    return this._backupDay;
  }

  // backup_time - computed: false, optional: false, required: true
  private _backupTime?: string; 
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }
  public set backupTime(value: string) {
    this._backupTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
  }
}

export class VpcSnapshotPolicyBackupPoliciesList extends cdktf.ComplexList {
  public internalValue? : VpcSnapshotPolicyBackupPolicies[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VpcSnapshotPolicyBackupPoliciesOutputReference {
    return new VpcSnapshotPolicyBackupPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy tencentcloud_vpc_snapshot_policy}
*/
export class VpcSnapshotPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_snapshot_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcSnapshotPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcSnapshotPolicy to import
  * @param importFromId The id of the existing VpcSnapshotPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcSnapshotPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_snapshot_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vpc_snapshot_policy tencentcloud_vpc_snapshot_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcSnapshotPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VpcSnapshotPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_snapshot_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupType = config.backupType;
    this._cosBucket = config.cosBucket;
    this._cosRegion = config.cosRegion;
    this._createNewCos = config.createNewCos;
    this._id = config.id;
    this._keepTime = config.keepTime;
    this._snapshotPolicyName = config.snapshotPolicyName;
    this._backupPolicies.internalValue = config.backupPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cos_bucket - computed: false, optional: false, required: true
  private _cosBucket?: string; 
  public get cosBucket() {
    return this.getStringAttribute('cos_bucket');
  }
  public set cosBucket(value: string) {
    this._cosBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketInput() {
    return this._cosBucket;
  }

  // cos_region - computed: false, optional: false, required: true
  private _cosRegion?: string; 
  public get cosRegion() {
    return this.getStringAttribute('cos_region');
  }
  public set cosRegion(value: string) {
    this._cosRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosRegionInput() {
    return this._cosRegion;
  }

  // create_new_cos - computed: false, optional: false, required: true
  private _createNewCos?: boolean | cdktf.IResolvable; 
  public get createNewCos() {
    return this.getBooleanAttribute('create_new_cos');
  }
  public set createNewCos(value: boolean | cdktf.IResolvable) {
    this._createNewCos = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewCosInput() {
    return this._createNewCos;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
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

  // keep_time - computed: false, optional: false, required: true
  private _keepTime?: number; 
  public get keepTime() {
    return this.getNumberAttribute('keep_time');
  }
  public set keepTime(value: number) {
    this._keepTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeInput() {
    return this._keepTime;
  }

  // snapshot_policy_id - computed: true, optional: false, required: false
  public get snapshotPolicyId() {
    return this.getStringAttribute('snapshot_policy_id');
  }

  // snapshot_policy_name - computed: false, optional: false, required: true
  private _snapshotPolicyName?: string; 
  public get snapshotPolicyName() {
    return this.getStringAttribute('snapshot_policy_name');
  }
  public set snapshotPolicyName(value: string) {
    this._snapshotPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyNameInput() {
    return this._snapshotPolicyName;
  }

  // backup_policies - computed: false, optional: true, required: false
  private _backupPolicies = new VpcSnapshotPolicyBackupPoliciesList(this, "backup_policies", false);
  public get backupPolicies() {
    return this._backupPolicies;
  }
  public putBackupPolicies(value: VpcSnapshotPolicyBackupPolicies[] | cdktf.IResolvable) {
    this._backupPolicies.internalValue = value;
  }
  public resetBackupPolicies() {
    this._backupPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPoliciesInput() {
    return this._backupPolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_type: cdktf.stringToTerraform(this._backupType),
      cos_bucket: cdktf.stringToTerraform(this._cosBucket),
      cos_region: cdktf.stringToTerraform(this._cosRegion),
      create_new_cos: cdktf.booleanToTerraform(this._createNewCos),
      id: cdktf.stringToTerraform(this._id),
      keep_time: cdktf.numberToTerraform(this._keepTime),
      snapshot_policy_name: cdktf.stringToTerraform(this._snapshotPolicyName),
      backup_policies: cdktf.listMapper(vpcSnapshotPolicyBackupPoliciesToTerraform, true)(this._backupPolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_type: {
        value: cdktf.stringToHclTerraform(this._backupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_bucket: {
        value: cdktf.stringToHclTerraform(this._cosBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_region: {
        value: cdktf.stringToHclTerraform(this._cosRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_new_cos: {
        value: cdktf.booleanToHclTerraform(this._createNewCos),
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
      keep_time: {
        value: cdktf.numberToHclTerraform(this._keepTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_policy_name: {
        value: cdktf.stringToHclTerraform(this._snapshotPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_policies: {
        value: cdktf.listMapperHcl(vpcSnapshotPolicyBackupPoliciesToHclTerraform, true)(this._backupPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcSnapshotPolicyBackupPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
