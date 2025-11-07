// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#backup_policy_name ThreatDetectionBackupPolicy#backup_policy_name}
  */
  readonly backupPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#id ThreatDetectionBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#policy ThreatDetectionBackupPolicy#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#policy_region_id ThreatDetectionBackupPolicy#policy_region_id}
  */
  readonly policyRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#policy_version ThreatDetectionBackupPolicy#policy_version}
  */
  readonly policyVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#uuid_list ThreatDetectionBackupPolicy#uuid_list}
  */
  readonly uuidList: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#timeouts ThreatDetectionBackupPolicy#timeouts}
  */
  readonly timeouts?: ThreatDetectionBackupPolicyTimeouts;
}
export interface ThreatDetectionBackupPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#create ThreatDetectionBackupPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#delete ThreatDetectionBackupPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#update ThreatDetectionBackupPolicy#update}
  */
  readonly update?: string;
}

export function threatDetectionBackupPolicyTimeoutsToTerraform(struct?: ThreatDetectionBackupPolicyTimeouts | cdktf.IResolvable): any {
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


export function threatDetectionBackupPolicyTimeoutsToHclTerraform(struct?: ThreatDetectionBackupPolicyTimeouts | cdktf.IResolvable): any {
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

export class ThreatDetectionBackupPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionBackupPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThreatDetectionBackupPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy alicloud_threat_detection_backup_policy}
*/
export class ThreatDetectionBackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionBackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionBackupPolicy to import
  * @param importFromId The id of the existing ThreatDetectionBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionBackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_backup_policy alicloud_threat_detection_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionBackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupPolicyName = config.backupPolicyName;
    this._id = config.id;
    this._policy = config.policy;
    this._policyRegionId = config.policyRegionId;
    this._policyVersion = config.policyVersion;
    this._uuidList = config.uuidList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_policy_name - computed: false, optional: false, required: true
  private _backupPolicyName?: string; 
  public get backupPolicyName() {
    return this.getStringAttribute('backup_policy_name');
  }
  public set backupPolicyName(value: string) {
    this._backupPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyNameInput() {
    return this._backupPolicyName;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // policy_region_id - computed: false, optional: true, required: false
  private _policyRegionId?: string; 
  public get policyRegionId() {
    return this.getStringAttribute('policy_region_id');
  }
  public set policyRegionId(value: string) {
    this._policyRegionId = value;
  }
  public resetPolicyRegionId() {
    this._policyRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRegionIdInput() {
    return this._policyRegionId;
  }

  // policy_version - computed: false, optional: false, required: true
  private _policyVersion?: string; 
  public get policyVersion() {
    return this.getStringAttribute('policy_version');
  }
  public set policyVersion(value: string) {
    this._policyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyVersionInput() {
    return this._policyVersion;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid_list - computed: false, optional: false, required: true
  private _uuidList?: string[]; 
  public get uuidList() {
    return this.getListAttribute('uuid_list');
  }
  public set uuidList(value: string[]) {
    this._uuidList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidListInput() {
    return this._uuidList;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionBackupPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionBackupPolicyTimeouts) {
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
      backup_policy_name: cdktf.stringToTerraform(this._backupPolicyName),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
      policy_region_id: cdktf.stringToTerraform(this._policyRegionId),
      policy_version: cdktf.stringToTerraform(this._policyVersion),
      uuid_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uuidList),
      timeouts: threatDetectionBackupPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_policy_name: {
        value: cdktf.stringToHclTerraform(this._backupPolicyName),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_region_id: {
        value: cdktf.stringToHclTerraform(this._policyRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_version: {
        value: cdktf.stringToHclTerraform(this._policyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uuidList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: threatDetectionBackupPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionBackupPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
