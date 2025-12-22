// https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomSonarAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert category. Valid values are `Access control`, `Authentication`, `Best practices`, `Data at risk`, `Data protection`, `IAM misconfigurations`, `Lateral movement`, `Logging and monitoring`, `Malicious activity`, `Malware`, `Neglected assets`, `Network misconfigurations`, `Source code vulnerabilities`, `Suspicious activity`, `System integrity`, `Vendor services misconfigurations`, `Vulnerabilities`, and `Workload misconfigurations`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#category CustomSonarAlert#category}
  */
  readonly category: string;
  /**
  * The custom compliance framework(s) that this alert relates to. In the context of a compliance framework, alerts correspond to controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#compliance_frameworks CustomSonarAlert#compliance_frameworks}
  */
  readonly complianceFrameworks?: CustomSonarAlertComplianceFrameworks[] | cdktf.IResolvable;
  /**
  * Allow Orca to adjust the score using asset context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#context_score CustomSonarAlert#context_score}
  */
  readonly contextScore: boolean | cdktf.IResolvable;
  /**
  * Custom alert description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#description CustomSonarAlert#description}
  */
  readonly description?: string;
  /**
  * Custom alert name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#name CustomSonarAlert#name}
  */
  readonly name: string;
  /**
  * Alert score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#orca_score CustomSonarAlert#orca_score}
  */
  readonly orcaScore: number;
  /**
  * A container for the remediation instructions that will appear on the 'Remediation' tab for the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#remediation_text CustomSonarAlert#remediation_text}
  */
  readonly remediationText?: CustomSonarAlertRemediationText;
  /**
  * Sonar query that defines the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#rule CustomSonarAlert#rule}
  */
  readonly rule: string;
}
export interface CustomSonarAlertComplianceFrameworks {
  /**
  * Custom framework name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#name CustomSonarAlert#name}
  */
  readonly name: string;
  /**
  * Custom framework control priority. Valid values are `high`, `medium`, and `low`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#priority CustomSonarAlert#priority}
  */
  readonly priority: string;
  /**
  * Custom framework section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#section CustomSonarAlert#section}
  */
  readonly section: string;
}

export function customSonarAlertComplianceFrameworksToTerraform(struct?: CustomSonarAlertComplianceFrameworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.stringToTerraform(struct!.priority),
    section: cdktf.stringToTerraform(struct!.section),
  }
}


export function customSonarAlertComplianceFrameworksToHclTerraform(struct?: CustomSonarAlertComplianceFrameworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    section: {
      value: cdktf.stringToHclTerraform(struct!.section),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomSonarAlertComplianceFrameworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomSonarAlertComplianceFrameworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._section !== undefined) {
      hasAnyValues = true;
      internalValueResult.section = this._section;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomSonarAlertComplianceFrameworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._section = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
      this._section = value.section;
    }
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

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // section - computed: false, optional: false, required: true
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
  }
}

export class CustomSonarAlertComplianceFrameworksList extends cdktf.ComplexList {
  public internalValue? : CustomSonarAlertComplianceFrameworks[] | cdktf.IResolvable

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
  public get(index: number): CustomSonarAlertComplianceFrameworksOutputReference {
    return new CustomSonarAlertComplianceFrameworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomSonarAlertRemediationText {
  /**
  * Whether or not all users are able to see the remediation instructions for this alert. To enable all users to see them, set this to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#enable CustomSonarAlert#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Remediation description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#text CustomSonarAlert#text}
  */
  readonly text: string;
}

export function customSonarAlertRemediationTextToTerraform(struct?: CustomSonarAlertRemediationText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function customSonarAlertRemediationTextToHclTerraform(struct?: CustomSonarAlertRemediationText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomSonarAlertRemediationTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomSonarAlertRemediationText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomSonarAlertRemediationText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._text = value.text;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert orcasecurity_custom_sonar_alert}
*/
export class CustomSonarAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "orcasecurity_custom_sonar_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomSonarAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomSonarAlert to import
  * @param importFromId The id of the existing CustomSonarAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomSonarAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "orcasecurity_custom_sonar_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_sonar_alert orcasecurity_custom_sonar_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomSonarAlertConfig
  */
  public constructor(scope: Construct, id: string, config: CustomSonarAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'orcasecurity_custom_sonar_alert',
      terraformGeneratorMetadata: {
        providerName: 'orcasecurity',
        providerVersion: '0.0.27',
        providerVersionConstraint: '0.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._complianceFrameworks.internalValue = config.complianceFrameworks;
    this._contextScore = config.contextScore;
    this._description = config.description;
    this._name = config.name;
    this._orcaScore = config.orcaScore;
    this._remediationText.internalValue = config.remediationText;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // compliance_frameworks - computed: false, optional: true, required: false
  private _complianceFrameworks = new CustomSonarAlertComplianceFrameworksList(this, "compliance_frameworks", false);
  public get complianceFrameworks() {
    return this._complianceFrameworks;
  }
  public putComplianceFrameworks(value: CustomSonarAlertComplianceFrameworks[] | cdktf.IResolvable) {
    this._complianceFrameworks.internalValue = value;
  }
  public resetComplianceFrameworks() {
    this._complianceFrameworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceFrameworksInput() {
    return this._complianceFrameworks.internalValue;
  }

  // context_score - computed: false, optional: false, required: true
  private _contextScore?: boolean | cdktf.IResolvable; 
  public get contextScore() {
    return this.getBooleanAttribute('context_score');
  }
  public set contextScore(value: boolean | cdktf.IResolvable) {
    this._contextScore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextScoreInput() {
    return this._contextScore;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // orca_score - computed: false, optional: false, required: true
  private _orcaScore?: number; 
  public get orcaScore() {
    return this.getNumberAttribute('orca_score');
  }
  public set orcaScore(value: number) {
    this._orcaScore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orcaScoreInput() {
    return this._orcaScore;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // remediation_text - computed: false, optional: true, required: false
  private _remediationText = new CustomSonarAlertRemediationTextOutputReference(this, "remediation_text");
  public get remediationText() {
    return this._remediationText;
  }
  public putRemediationText(value: CustomSonarAlertRemediationText) {
    this._remediationText.internalValue = value;
  }
  public resetRemediationText() {
    this._remediationText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTextInput() {
    return this._remediationText.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      compliance_frameworks: cdktf.listMapper(customSonarAlertComplianceFrameworksToTerraform, false)(this._complianceFrameworks.internalValue),
      context_score: cdktf.booleanToTerraform(this._contextScore),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      orca_score: cdktf.numberToTerraform(this._orcaScore),
      remediation_text: customSonarAlertRemediationTextToTerraform(this._remediationText.internalValue),
      rule: cdktf.stringToTerraform(this._rule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_frameworks: {
        value: cdktf.listMapperHcl(customSonarAlertComplianceFrameworksToHclTerraform, false)(this._complianceFrameworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomSonarAlertComplianceFrameworksList",
      },
      context_score: {
        value: cdktf.booleanToHclTerraform(this._contextScore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      orca_score: {
        value: cdktf.numberToHclTerraform(this._orcaScore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remediation_text: {
        value: customSonarAlertRemediationTextToHclTerraform(this._remediationText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomSonarAlertRemediationText",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
