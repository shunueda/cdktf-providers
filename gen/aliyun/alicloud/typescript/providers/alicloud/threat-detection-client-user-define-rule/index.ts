// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionClientUserDefineRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#action_type ThreatDetectionClientUserDefineRule#action_type}
  */
  readonly actionType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#client_user_define_rule_name ThreatDetectionClientUserDefineRule#client_user_define_rule_name}
  */
  readonly clientUserDefineRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#cmdline ThreatDetectionClientUserDefineRule#cmdline}
  */
  readonly cmdline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#file_path ThreatDetectionClientUserDefineRule#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#hash ThreatDetectionClientUserDefineRule#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#id ThreatDetectionClientUserDefineRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#ip ThreatDetectionClientUserDefineRule#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#new_file_path ThreatDetectionClientUserDefineRule#new_file_path}
  */
  readonly newFilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#parent_cmdline ThreatDetectionClientUserDefineRule#parent_cmdline}
  */
  readonly parentCmdline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#parent_proc_path ThreatDetectionClientUserDefineRule#parent_proc_path}
  */
  readonly parentProcPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#platform ThreatDetectionClientUserDefineRule#platform}
  */
  readonly platform: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#port_str ThreatDetectionClientUserDefineRule#port_str}
  */
  readonly portStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#proc_path ThreatDetectionClientUserDefineRule#proc_path}
  */
  readonly procPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#registry_content ThreatDetectionClientUserDefineRule#registry_content}
  */
  readonly registryContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#registry_key ThreatDetectionClientUserDefineRule#registry_key}
  */
  readonly registryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#type ThreatDetectionClientUserDefineRule#type}
  */
  readonly type: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#timeouts ThreatDetectionClientUserDefineRule#timeouts}
  */
  readonly timeouts?: ThreatDetectionClientUserDefineRuleTimeouts;
}
export interface ThreatDetectionClientUserDefineRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#create ThreatDetectionClientUserDefineRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#delete ThreatDetectionClientUserDefineRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#update ThreatDetectionClientUserDefineRule#update}
  */
  readonly update?: string;
}

export function threatDetectionClientUserDefineRuleTimeoutsToTerraform(struct?: ThreatDetectionClientUserDefineRuleTimeouts | cdktf.IResolvable): any {
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


export function threatDetectionClientUserDefineRuleTimeoutsToHclTerraform(struct?: ThreatDetectionClientUserDefineRuleTimeouts | cdktf.IResolvable): any {
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

export class ThreatDetectionClientUserDefineRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionClientUserDefineRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThreatDetectionClientUserDefineRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule alicloud_threat_detection_client_user_define_rule}
*/
export class ThreatDetectionClientUserDefineRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_client_user_define_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionClientUserDefineRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionClientUserDefineRule to import
  * @param importFromId The id of the existing ThreatDetectionClientUserDefineRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionClientUserDefineRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_client_user_define_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_client_user_define_rule alicloud_threat_detection_client_user_define_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionClientUserDefineRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionClientUserDefineRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_client_user_define_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionType = config.actionType;
    this._clientUserDefineRuleName = config.clientUserDefineRuleName;
    this._cmdline = config.cmdline;
    this._filePath = config.filePath;
    this._hash = config.hash;
    this._id = config.id;
    this._ip = config.ip;
    this._newFilePath = config.newFilePath;
    this._parentCmdline = config.parentCmdline;
    this._parentProcPath = config.parentProcPath;
    this._platform = config.platform;
    this._portStr = config.portStr;
    this._procPath = config.procPath;
    this._registryContent = config.registryContent;
    this._registryKey = config.registryKey;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: false, required: true
  private _actionType?: number; 
  public get actionType() {
    return this.getNumberAttribute('action_type');
  }
  public set actionType(value: number) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // client_user_define_rule_name - computed: false, optional: false, required: true
  private _clientUserDefineRuleName?: string; 
  public get clientUserDefineRuleName() {
    return this.getStringAttribute('client_user_define_rule_name');
  }
  public set clientUserDefineRuleName(value: string) {
    this._clientUserDefineRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUserDefineRuleNameInput() {
    return this._clientUserDefineRuleName;
  }

  // cmdline - computed: false, optional: true, required: false
  private _cmdline?: string; 
  public get cmdline() {
    return this.getStringAttribute('cmdline');
  }
  public set cmdline(value: string) {
    this._cmdline = value;
  }
  public resetCmdline() {
    this._cmdline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdlineInput() {
    return this._cmdline;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // new_file_path - computed: false, optional: true, required: false
  private _newFilePath?: string; 
  public get newFilePath() {
    return this.getStringAttribute('new_file_path');
  }
  public set newFilePath(value: string) {
    this._newFilePath = value;
  }
  public resetNewFilePath() {
    this._newFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFilePathInput() {
    return this._newFilePath;
  }

  // parent_cmdline - computed: false, optional: true, required: false
  private _parentCmdline?: string; 
  public get parentCmdline() {
    return this.getStringAttribute('parent_cmdline');
  }
  public set parentCmdline(value: string) {
    this._parentCmdline = value;
  }
  public resetParentCmdline() {
    this._parentCmdline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentCmdlineInput() {
    return this._parentCmdline;
  }

  // parent_proc_path - computed: false, optional: true, required: false
  private _parentProcPath?: string; 
  public get parentProcPath() {
    return this.getStringAttribute('parent_proc_path');
  }
  public set parentProcPath(value: string) {
    this._parentProcPath = value;
  }
  public resetParentProcPath() {
    this._parentProcPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProcPathInput() {
    return this._parentProcPath;
  }

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // port_str - computed: true, optional: true, required: false
  private _portStr?: string; 
  public get portStr() {
    return this.getStringAttribute('port_str');
  }
  public set portStr(value: string) {
    this._portStr = value;
  }
  public resetPortStr() {
    this._portStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStrInput() {
    return this._portStr;
  }

  // proc_path - computed: false, optional: true, required: false
  private _procPath?: string; 
  public get procPath() {
    return this.getStringAttribute('proc_path');
  }
  public set procPath(value: string) {
    this._procPath = value;
  }
  public resetProcPath() {
    this._procPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procPathInput() {
    return this._procPath;
  }

  // registry_content - computed: false, optional: true, required: false
  private _registryContent?: string; 
  public get registryContent() {
    return this.getStringAttribute('registry_content');
  }
  public set registryContent(value: string) {
    this._registryContent = value;
  }
  public resetRegistryContent() {
    this._registryContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryContentInput() {
    return this._registryContent;
  }

  // registry_key - computed: false, optional: true, required: false
  private _registryKey?: string; 
  public get registryKey() {
    return this.getStringAttribute('registry_key');
  }
  public set registryKey(value: string) {
    this._registryKey = value;
  }
  public resetRegistryKey() {
    this._registryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryKeyInput() {
    return this._registryKey;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionClientUserDefineRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionClientUserDefineRuleTimeouts) {
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
      action_type: cdktf.numberToTerraform(this._actionType),
      client_user_define_rule_name: cdktf.stringToTerraform(this._clientUserDefineRuleName),
      cmdline: cdktf.stringToTerraform(this._cmdline),
      file_path: cdktf.stringToTerraform(this._filePath),
      hash: cdktf.stringToTerraform(this._hash),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      new_file_path: cdktf.stringToTerraform(this._newFilePath),
      parent_cmdline: cdktf.stringToTerraform(this._parentCmdline),
      parent_proc_path: cdktf.stringToTerraform(this._parentProcPath),
      platform: cdktf.stringToTerraform(this._platform),
      port_str: cdktf.stringToTerraform(this._portStr),
      proc_path: cdktf.stringToTerraform(this._procPath),
      registry_content: cdktf.stringToTerraform(this._registryContent),
      registry_key: cdktf.stringToTerraform(this._registryKey),
      type: cdktf.numberToTerraform(this._type),
      timeouts: threatDetectionClientUserDefineRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.numberToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_user_define_rule_name: {
        value: cdktf.stringToHclTerraform(this._clientUserDefineRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmdline: {
        value: cdktf.stringToHclTerraform(this._cmdline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash: {
        value: cdktf.stringToHclTerraform(this._hash),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_file_path: {
        value: cdktf.stringToHclTerraform(this._newFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_cmdline: {
        value: cdktf.stringToHclTerraform(this._parentCmdline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_proc_path: {
        value: cdktf.stringToHclTerraform(this._parentProcPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_str: {
        value: cdktf.stringToHclTerraform(this._portStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proc_path: {
        value: cdktf.stringToHclTerraform(this._procPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_content: {
        value: cdktf.stringToHclTerraform(this._registryContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_key: {
        value: cdktf.stringToHclTerraform(this._registryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: threatDetectionClientUserDefineRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionClientUserDefineRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
