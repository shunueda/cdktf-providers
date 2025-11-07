// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatalabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the data label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel#description Datalabel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel#id Datalabel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the data label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel#name Datalabel#name}
  */
  readonly name: string;
  /**
  * Tags that can be used to categorize data labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel#tags Datalabel#tags}
  */
  readonly tags?: string[];
  /**
  * classification_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel#classification_rule Datalabel#classification_rule}
  */
  readonly classificationRule?: DatalabelClassificationRule;
}
export interface DatalabelClassificationRule {
  /**
  * Actual code of the classification rule. For example, this attribute may contain REGO code for `REGO`-type classification rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel#rule_code Datalabel#rule_code}
  */
  readonly ruleCode?: string;
  /**
  * Status of the classification rule. List of supported values: 
  *   - `ENABLED`
  *   - `DISABLED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel#rule_status Datalabel#rule_status}
  */
  readonly ruleStatus?: string;
  /**
  * Type of the classification rule. List of supported values: 
  *   - `UNKNOWN`
  *   - `REGO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel#rule_type Datalabel#rule_type}
  */
  readonly ruleType?: string;
}

export function datalabelClassificationRuleToTerraform(struct?: DatalabelClassificationRuleOutputReference | DatalabelClassificationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_code: cdktf.stringToTerraform(struct!.ruleCode),
    rule_status: cdktf.stringToTerraform(struct!.ruleStatus),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function datalabelClassificationRuleToHclTerraform(struct?: DatalabelClassificationRuleOutputReference | DatalabelClassificationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_code: {
      value: cdktf.stringToHclTerraform(struct!.ruleCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_status: {
      value: cdktf.stringToHclTerraform(struct!.ruleStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatalabelClassificationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatalabelClassificationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleCode = this._ruleCode;
    }
    if (this._ruleStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleStatus = this._ruleStatus;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatalabelClassificationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleCode = undefined;
      this._ruleStatus = undefined;
      this._ruleType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleCode = value.ruleCode;
      this._ruleStatus = value.ruleStatus;
      this._ruleType = value.ruleType;
    }
  }

  // rule_code - computed: false, optional: true, required: false
  private _ruleCode?: string; 
  public get ruleCode() {
    return this.getStringAttribute('rule_code');
  }
  public set ruleCode(value: string) {
    this._ruleCode = value;
  }
  public resetRuleCode() {
    this._ruleCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleCodeInput() {
    return this._ruleCode;
  }

  // rule_status - computed: false, optional: true, required: false
  private _ruleStatus?: string; 
  public get ruleStatus() {
    return this.getStringAttribute('rule_status');
  }
  public set ruleStatus(value: string) {
    this._ruleStatus = value;
  }
  public resetRuleStatus() {
    this._ruleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatusInput() {
    return this._ruleStatus;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel cyral_datalabel}
*/
export class Datalabel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_datalabel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Datalabel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Datalabel to import
  * @param importFromId The id of the existing Datalabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Datalabel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_datalabel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/datalabel cyral_datalabel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatalabelConfig
  */
  public constructor(scope: Construct, id: string, config: DatalabelConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_datalabel',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._classificationRule.internalValue = config.classificationRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // classification_rule - computed: false, optional: true, required: false
  private _classificationRule = new DatalabelClassificationRuleOutputReference(this, "classification_rule");
  public get classificationRule() {
    return this._classificationRule;
  }
  public putClassificationRule(value: DatalabelClassificationRule) {
    this._classificationRule.internalValue = value;
  }
  public resetClassificationRule() {
    this._classificationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationRuleInput() {
    return this._classificationRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      classification_rule: datalabelClassificationRuleToTerraform(this._classificationRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      classification_rule: {
        value: datalabelClassificationRuleToHclTerraform(this._classificationRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatalabelClassificationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
