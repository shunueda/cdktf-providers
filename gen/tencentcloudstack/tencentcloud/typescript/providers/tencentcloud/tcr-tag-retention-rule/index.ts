// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcrTagRetentionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Execution cycle, currently only available selections are: manual; daily; weekly; monthly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule#cron_setting TcrTagRetentionRule#cron_setting}
  */
  readonly cronSetting: string;
  /**
  * Whether to disable the rule, with the default value of false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule#disabled TcrTagRetentionRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule#id TcrTagRetentionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Name of the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule#namespace_name TcrTagRetentionRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * The main instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule#registry_id TcrTagRetentionRule#registry_id}
  */
  readonly registryId: string;
  /**
  * retention_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule#retention_rule TcrTagRetentionRule#retention_rule}
  */
  readonly retentionRule: TcrTagRetentionRuleRetentionRule;
}
export interface TcrTagRetentionRuleRetentionRule {
  /**
  * The supported policies are latestPushedK (retain the latest `k` pushed versions) and nDaysSinceLastPush (retain pushed versions within the last `n` days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule#key TcrTagRetentionRule#key}
  */
  readonly key: string;
  /**
  * corresponding values for rule settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule#value TcrTagRetentionRule#value}
  */
  readonly value: number;
}

export function tcrTagRetentionRuleRetentionRuleToTerraform(struct?: TcrTagRetentionRuleRetentionRuleOutputReference | TcrTagRetentionRuleRetentionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function tcrTagRetentionRuleRetentionRuleToHclTerraform(struct?: TcrTagRetentionRuleRetentionRuleOutputReference | TcrTagRetentionRuleRetentionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcrTagRetentionRuleRetentionRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcrTagRetentionRuleRetentionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcrTagRetentionRuleRetentionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule tencentcloud_tcr_tag_retention_rule}
*/
export class TcrTagRetentionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_tag_retention_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcrTagRetentionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcrTagRetentionRule to import
  * @param importFromId The id of the existing TcrTagRetentionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcrTagRetentionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_tag_retention_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_tag_retention_rule tencentcloud_tcr_tag_retention_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcrTagRetentionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TcrTagRetentionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_tag_retention_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronSetting = config.cronSetting;
    this._disabled = config.disabled;
    this._id = config.id;
    this._namespaceName = config.namespaceName;
    this._registryId = config.registryId;
    this._retentionRule.internalValue = config.retentionRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_setting - computed: false, optional: false, required: true
  private _cronSetting?: string; 
  public get cronSetting() {
    return this.getStringAttribute('cron_setting');
  }
  public set cronSetting(value: string) {
    this._cronSetting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronSettingInput() {
    return this._cronSetting;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // retention_id - computed: true, optional: false, required: false
  public get retentionId() {
    return this.getNumberAttribute('retention_id');
  }

  // retention_rule - computed: false, optional: false, required: true
  private _retentionRule = new TcrTagRetentionRuleRetentionRuleOutputReference(this, "retention_rule");
  public get retentionRule() {
    return this._retentionRule;
  }
  public putRetentionRule(value: TcrTagRetentionRuleRetentionRule) {
    this._retentionRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionRuleInput() {
    return this._retentionRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_setting: cdktf.stringToTerraform(this._cronSetting),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      registry_id: cdktf.stringToTerraform(this._registryId),
      retention_rule: tcrTagRetentionRuleRetentionRuleToTerraform(this._retentionRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_setting: {
        value: cdktf.stringToHclTerraform(this._cronSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_rule: {
        value: tcrTagRetentionRuleRetentionRuleToHclTerraform(this._retentionRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcrTagRetentionRuleRetentionRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
