// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionHoneypotPresetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#honeypot_image_name ThreatDetectionHoneypotPreset#honeypot_image_name}
  */
  readonly honeypotImageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#id ThreatDetectionHoneypotPreset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#node_id ThreatDetectionHoneypotPreset#node_id}
  */
  readonly nodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#preset_name ThreatDetectionHoneypotPreset#preset_name}
  */
  readonly presetName: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#meta ThreatDetectionHoneypotPreset#meta}
  */
  readonly meta: ThreatDetectionHoneypotPresetMeta;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#timeouts ThreatDetectionHoneypotPreset#timeouts}
  */
  readonly timeouts?: ThreatDetectionHoneypotPresetTimeouts;
}
export interface ThreatDetectionHoneypotPresetMeta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#burp ThreatDetectionHoneypotPreset#burp}
  */
  readonly burp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#portrait_option ThreatDetectionHoneypotPreset#portrait_option}
  */
  readonly portraitOption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#trojan_git ThreatDetectionHoneypotPreset#trojan_git}
  */
  readonly trojanGit?: string;
}

export function threatDetectionHoneypotPresetMetaToTerraform(struct?: ThreatDetectionHoneypotPresetMetaOutputReference | ThreatDetectionHoneypotPresetMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burp: cdktf.stringToTerraform(struct!.burp),
    portrait_option: cdktf.booleanToTerraform(struct!.portraitOption),
    trojan_git: cdktf.stringToTerraform(struct!.trojanGit),
  }
}


export function threatDetectionHoneypotPresetMetaToHclTerraform(struct?: ThreatDetectionHoneypotPresetMetaOutputReference | ThreatDetectionHoneypotPresetMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burp: {
      value: cdktf.stringToHclTerraform(struct!.burp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portrait_option: {
      value: cdktf.booleanToHclTerraform(struct!.portraitOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trojan_git: {
      value: cdktf.stringToHclTerraform(struct!.trojanGit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionHoneypotPresetMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThreatDetectionHoneypotPresetMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burp !== undefined) {
      hasAnyValues = true;
      internalValueResult.burp = this._burp;
    }
    if (this._portraitOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.portraitOption = this._portraitOption;
    }
    if (this._trojanGit !== undefined) {
      hasAnyValues = true;
      internalValueResult.trojanGit = this._trojanGit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionHoneypotPresetMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burp = undefined;
      this._portraitOption = undefined;
      this._trojanGit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burp = value.burp;
      this._portraitOption = value.portraitOption;
      this._trojanGit = value.trojanGit;
    }
  }

  // burp - computed: false, optional: false, required: true
  private _burp?: string; 
  public get burp() {
    return this.getStringAttribute('burp');
  }
  public set burp(value: string) {
    this._burp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get burpInput() {
    return this._burp;
  }

  // portrait_option - computed: false, optional: true, required: false
  private _portraitOption?: boolean | cdktf.IResolvable; 
  public get portraitOption() {
    return this.getBooleanAttribute('portrait_option');
  }
  public set portraitOption(value: boolean | cdktf.IResolvable) {
    this._portraitOption = value;
  }
  public resetPortraitOption() {
    this._portraitOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portraitOptionInput() {
    return this._portraitOption;
  }

  // trojan_git - computed: false, optional: true, required: false
  private _trojanGit?: string; 
  public get trojanGit() {
    return this.getStringAttribute('trojan_git');
  }
  public set trojanGit(value: string) {
    this._trojanGit = value;
  }
  public resetTrojanGit() {
    this._trojanGit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trojanGitInput() {
    return this._trojanGit;
  }
}
export interface ThreatDetectionHoneypotPresetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#create ThreatDetectionHoneypotPreset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#delete ThreatDetectionHoneypotPreset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#update ThreatDetectionHoneypotPreset#update}
  */
  readonly update?: string;
}

export function threatDetectionHoneypotPresetTimeoutsToTerraform(struct?: ThreatDetectionHoneypotPresetTimeouts | cdktf.IResolvable): any {
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


export function threatDetectionHoneypotPresetTimeoutsToHclTerraform(struct?: ThreatDetectionHoneypotPresetTimeouts | cdktf.IResolvable): any {
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

export class ThreatDetectionHoneypotPresetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionHoneypotPresetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThreatDetectionHoneypotPresetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset alicloud_threat_detection_honeypot_preset}
*/
export class ThreatDetectionHoneypotPreset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_honeypot_preset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionHoneypotPreset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionHoneypotPreset to import
  * @param importFromId The id of the existing ThreatDetectionHoneypotPreset that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionHoneypotPreset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_honeypot_preset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_preset alicloud_threat_detection_honeypot_preset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionHoneypotPresetConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionHoneypotPresetConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_honeypot_preset',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._honeypotImageName = config.honeypotImageName;
    this._id = config.id;
    this._nodeId = config.nodeId;
    this._presetName = config.presetName;
    this._meta.internalValue = config.meta;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // honeypot_image_name - computed: false, optional: false, required: true
  private _honeypotImageName?: string; 
  public get honeypotImageName() {
    return this.getStringAttribute('honeypot_image_name');
  }
  public set honeypotImageName(value: string) {
    this._honeypotImageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get honeypotImageNameInput() {
    return this._honeypotImageName;
  }

  // honeypot_preset_id - computed: true, optional: false, required: false
  public get honeypotPresetId() {
    return this.getStringAttribute('honeypot_preset_id');
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

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // preset_name - computed: false, optional: false, required: true
  private _presetName?: string; 
  public get presetName() {
    return this.getStringAttribute('preset_name');
  }
  public set presetName(value: string) {
    this._presetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presetNameInput() {
    return this._presetName;
  }

  // meta - computed: false, optional: false, required: true
  private _meta = new ThreatDetectionHoneypotPresetMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: ThreatDetectionHoneypotPresetMeta) {
    this._meta.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionHoneypotPresetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionHoneypotPresetTimeouts) {
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
      honeypot_image_name: cdktf.stringToTerraform(this._honeypotImageName),
      id: cdktf.stringToTerraform(this._id),
      node_id: cdktf.stringToTerraform(this._nodeId),
      preset_name: cdktf.stringToTerraform(this._presetName),
      meta: threatDetectionHoneypotPresetMetaToTerraform(this._meta.internalValue),
      timeouts: threatDetectionHoneypotPresetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      honeypot_image_name: {
        value: cdktf.stringToHclTerraform(this._honeypotImageName),
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
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preset_name: {
        value: cdktf.stringToHclTerraform(this._presetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: threatDetectionHoneypotPresetMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ThreatDetectionHoneypotPresetMetaList",
      },
      timeouts: {
        value: threatDetectionHoneypotPresetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionHoneypotPresetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
