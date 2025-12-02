// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/sws_waf_rule_set_descriptor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexSwsWafRuleSetDescriptorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/sws_waf_rule_set_descriptor#id DataYandexSwsWafRuleSetDescriptor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/sws_waf_rule_set_descriptor#name DataYandexSwsWafRuleSetDescriptor#name}
  */
  readonly name?: string;
  /**
  * ID of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/sws_waf_rule_set_descriptor#rule_set_descriptor_id DataYandexSwsWafRuleSetDescriptor#rule_set_descriptor_id}
  */
  readonly ruleSetDescriptorId?: string;
  /**
  * Version of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/sws_waf_rule_set_descriptor#version DataYandexSwsWafRuleSetDescriptor#version}
  */
  readonly version: string;
}
export interface DataYandexSwsWafRuleSetDescriptorRules {
}

export function dataYandexSwsWafRuleSetDescriptorRulesToTerraform(struct?: DataYandexSwsWafRuleSetDescriptorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafRuleSetDescriptorRulesToHclTerraform(struct?: DataYandexSwsWafRuleSetDescriptorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafRuleSetDescriptorRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexSwsWafRuleSetDescriptorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafRuleSetDescriptorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anomaly_score - computed: true, optional: false, required: false
  public get anomalyScore() {
    return this.getNumberAttribute('anomaly_score');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // paranoia_level - computed: true, optional: false, required: false
  public get paranoiaLevel() {
    return this.getNumberAttribute('paranoia_level');
  }
}

export class DataYandexSwsWafRuleSetDescriptorRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafRuleSetDescriptorRulesOutputReference {
    return new DataYandexSwsWafRuleSetDescriptorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/sws_waf_rule_set_descriptor yandex_sws_waf_rule_set_descriptor}
*/
export class DataYandexSwsWafRuleSetDescriptor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_sws_waf_rule_set_descriptor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexSwsWafRuleSetDescriptor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexSwsWafRuleSetDescriptor to import
  * @param importFromId The id of the existing DataYandexSwsWafRuleSetDescriptor that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/sws_waf_rule_set_descriptor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexSwsWafRuleSetDescriptor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_sws_waf_rule_set_descriptor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/sws_waf_rule_set_descriptor yandex_sws_waf_rule_set_descriptor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexSwsWafRuleSetDescriptorConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexSwsWafRuleSetDescriptorConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_sws_waf_rule_set_descriptor',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
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
    this._name = config.name;
    this._ruleSetDescriptorId = config.ruleSetDescriptorId;
    this._version = config.version;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rule_set_descriptor_id - computed: false, optional: true, required: false
  private _ruleSetDescriptorId?: string; 
  public get ruleSetDescriptorId() {
    return this.getStringAttribute('rule_set_descriptor_id');
  }
  public set ruleSetDescriptorId(value: string) {
    this._ruleSetDescriptorId = value;
  }
  public resetRuleSetDescriptorId() {
    this._ruleSetDescriptorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetDescriptorIdInput() {
    return this._ruleSetDescriptorId;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataYandexSwsWafRuleSetDescriptorRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rule_set_descriptor_id: cdktf.stringToTerraform(this._ruleSetDescriptorId),
      version: cdktf.stringToTerraform(this._version),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_set_descriptor_id: {
        value: cdktf.stringToHclTerraform(this._ruleSetDescriptorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
