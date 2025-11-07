// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionClientFileProtectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#alert_level ThreatDetectionClientFileProtect#alert_level}
  */
  readonly alertLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#file_ops ThreatDetectionClientFileProtect#file_ops}
  */
  readonly fileOps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#file_paths ThreatDetectionClientFileProtect#file_paths}
  */
  readonly filePaths: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#id ThreatDetectionClientFileProtect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#proc_paths ThreatDetectionClientFileProtect#proc_paths}
  */
  readonly procPaths: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#rule_action ThreatDetectionClientFileProtect#rule_action}
  */
  readonly ruleAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#rule_name ThreatDetectionClientFileProtect#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#status ThreatDetectionClientFileProtect#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#switch_id ThreatDetectionClientFileProtect#switch_id}
  */
  readonly switchId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#timeouts ThreatDetectionClientFileProtect#timeouts}
  */
  readonly timeouts?: ThreatDetectionClientFileProtectTimeouts;
}
export interface ThreatDetectionClientFileProtectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#create ThreatDetectionClientFileProtect#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#delete ThreatDetectionClientFileProtect#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#update ThreatDetectionClientFileProtect#update}
  */
  readonly update?: string;
}

export function threatDetectionClientFileProtectTimeoutsToTerraform(struct?: ThreatDetectionClientFileProtectTimeouts | cdktf.IResolvable): any {
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


export function threatDetectionClientFileProtectTimeoutsToHclTerraform(struct?: ThreatDetectionClientFileProtectTimeouts | cdktf.IResolvable): any {
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

export class ThreatDetectionClientFileProtectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionClientFileProtectTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThreatDetectionClientFileProtectTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect alicloud_threat_detection_client_file_protect}
*/
export class ThreatDetectionClientFileProtect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_client_file_protect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionClientFileProtect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionClientFileProtect to import
  * @param importFromId The id of the existing ThreatDetectionClientFileProtect that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionClientFileProtect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_client_file_protect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_client_file_protect alicloud_threat_detection_client_file_protect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionClientFileProtectConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionClientFileProtectConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_client_file_protect',
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
    this._alertLevel = config.alertLevel;
    this._fileOps = config.fileOps;
    this._filePaths = config.filePaths;
    this._id = config.id;
    this._procPaths = config.procPaths;
    this._ruleAction = config.ruleAction;
    this._ruleName = config.ruleName;
    this._status = config.status;
    this._switchId = config.switchId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_level - computed: false, optional: true, required: false
  private _alertLevel?: number; 
  public get alertLevel() {
    return this.getNumberAttribute('alert_level');
  }
  public set alertLevel(value: number) {
    this._alertLevel = value;
  }
  public resetAlertLevel() {
    this._alertLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertLevelInput() {
    return this._alertLevel;
  }

  // file_ops - computed: false, optional: false, required: true
  private _fileOps?: string[]; 
  public get fileOps() {
    return this.getListAttribute('file_ops');
  }
  public set fileOps(value: string[]) {
    this._fileOps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileOpsInput() {
    return this._fileOps;
  }

  // file_paths - computed: false, optional: false, required: true
  private _filePaths?: string[]; 
  public get filePaths() {
    return this.getListAttribute('file_paths');
  }
  public set filePaths(value: string[]) {
    this._filePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths;
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

  // proc_paths - computed: false, optional: false, required: true
  private _procPaths?: string[]; 
  public get procPaths() {
    return this.getListAttribute('proc_paths');
  }
  public set procPaths(value: string[]) {
    this._procPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get procPathsInput() {
    return this._procPaths;
  }

  // rule_action - computed: false, optional: false, required: true
  private _ruleAction?: string; 
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // switch_id - computed: false, optional: true, required: false
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionClientFileProtectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionClientFileProtectTimeouts) {
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
      alert_level: cdktf.numberToTerraform(this._alertLevel),
      file_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileOps),
      file_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filePaths),
      id: cdktf.stringToTerraform(this._id),
      proc_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._procPaths),
      rule_action: cdktf.stringToTerraform(this._ruleAction),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      status: cdktf.numberToTerraform(this._status),
      switch_id: cdktf.stringToTerraform(this._switchId),
      timeouts: threatDetectionClientFileProtectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_level: {
        value: cdktf.numberToHclTerraform(this._alertLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_ops: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileOps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      file_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filePaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proc_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._procPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rule_action: {
        value: cdktf.stringToHclTerraform(this._ruleAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_id: {
        value: cdktf.stringToHclTerraform(this._switchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: threatDetectionClientFileProtectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionClientFileProtectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
