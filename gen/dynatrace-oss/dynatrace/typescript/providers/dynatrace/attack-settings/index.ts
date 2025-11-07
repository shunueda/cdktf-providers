// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttackSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_settings#enabled AttackSettings#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_settings#id AttackSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * default_attack_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_settings#default_attack_handling AttackSettings#default_attack_handling}
  */
  readonly defaultAttackHandling: AttackSettingsDefaultAttackHandling;
}
export interface AttackSettingsDefaultAttackHandling {
  /**
  * (v1.290) Possible Values: `BLOCK`, `MONITOR`, `OFF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_settings#blocking_strategy_dot_net AttackSettings#blocking_strategy_dot_net}
  */
  readonly blockingStrategyDotNet?: string;
  /**
  * Possible Values: `BLOCK`, `MONITOR`, `OFF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_settings#blocking_strategy_go AttackSettings#blocking_strategy_go}
  */
  readonly blockingStrategyGo?: string;
  /**
  * Possible Values: `BLOCK`, `MONITOR`, `OFF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_settings#blocking_strategy_java AttackSettings#blocking_strategy_java}
  */
  readonly blockingStrategyJava: string;
}

export function attackSettingsDefaultAttackHandlingToTerraform(struct?: AttackSettingsDefaultAttackHandlingOutputReference | AttackSettingsDefaultAttackHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocking_strategy_dot_net: cdktf.stringToTerraform(struct!.blockingStrategyDotNet),
    blocking_strategy_go: cdktf.stringToTerraform(struct!.blockingStrategyGo),
    blocking_strategy_java: cdktf.stringToTerraform(struct!.blockingStrategyJava),
  }
}


export function attackSettingsDefaultAttackHandlingToHclTerraform(struct?: AttackSettingsDefaultAttackHandlingOutputReference | AttackSettingsDefaultAttackHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocking_strategy_dot_net: {
      value: cdktf.stringToHclTerraform(struct!.blockingStrategyDotNet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocking_strategy_go: {
      value: cdktf.stringToHclTerraform(struct!.blockingStrategyGo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocking_strategy_java: {
      value: cdktf.stringToHclTerraform(struct!.blockingStrategyJava),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackSettingsDefaultAttackHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackSettingsDefaultAttackHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockingStrategyDotNet !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingStrategyDotNet = this._blockingStrategyDotNet;
    }
    if (this._blockingStrategyGo !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingStrategyGo = this._blockingStrategyGo;
    }
    if (this._blockingStrategyJava !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingStrategyJava = this._blockingStrategyJava;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackSettingsDefaultAttackHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockingStrategyDotNet = undefined;
      this._blockingStrategyGo = undefined;
      this._blockingStrategyJava = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockingStrategyDotNet = value.blockingStrategyDotNet;
      this._blockingStrategyGo = value.blockingStrategyGo;
      this._blockingStrategyJava = value.blockingStrategyJava;
    }
  }

  // blocking_strategy_dot_net - computed: false, optional: true, required: false
  private _blockingStrategyDotNet?: string; 
  public get blockingStrategyDotNet() {
    return this.getStringAttribute('blocking_strategy_dot_net');
  }
  public set blockingStrategyDotNet(value: string) {
    this._blockingStrategyDotNet = value;
  }
  public resetBlockingStrategyDotNet() {
    this._blockingStrategyDotNet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingStrategyDotNetInput() {
    return this._blockingStrategyDotNet;
  }

  // blocking_strategy_go - computed: false, optional: true, required: false
  private _blockingStrategyGo?: string; 
  public get blockingStrategyGo() {
    return this.getStringAttribute('blocking_strategy_go');
  }
  public set blockingStrategyGo(value: string) {
    this._blockingStrategyGo = value;
  }
  public resetBlockingStrategyGo() {
    this._blockingStrategyGo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingStrategyGoInput() {
    return this._blockingStrategyGo;
  }

  // blocking_strategy_java - computed: false, optional: false, required: true
  private _blockingStrategyJava?: string; 
  public get blockingStrategyJava() {
    return this.getStringAttribute('blocking_strategy_java');
  }
  public set blockingStrategyJava(value: string) {
    this._blockingStrategyJava = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingStrategyJavaInput() {
    return this._blockingStrategyJava;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_settings dynatrace_attack_settings}
*/
export class AttackSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_attack_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AttackSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AttackSettings to import
  * @param importFromId The id of the existing AttackSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AttackSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_attack_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_settings dynatrace_attack_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AttackSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AttackSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_attack_settings',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._defaultAttackHandling.internalValue = config.defaultAttackHandling;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // default_attack_handling - computed: false, optional: false, required: true
  private _defaultAttackHandling = new AttackSettingsDefaultAttackHandlingOutputReference(this, "default_attack_handling");
  public get defaultAttackHandling() {
    return this._defaultAttackHandling;
  }
  public putDefaultAttackHandling(value: AttackSettingsDefaultAttackHandling) {
    this._defaultAttackHandling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAttackHandlingInput() {
    return this._defaultAttackHandling.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      default_attack_handling: attackSettingsDefaultAttackHandlingToTerraform(this._defaultAttackHandling.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      default_attack_handling: {
        value: attackSettingsDefaultAttackHandlingToHclTerraform(this._defaultAttackHandling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackSettingsDefaultAttackHandlingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
