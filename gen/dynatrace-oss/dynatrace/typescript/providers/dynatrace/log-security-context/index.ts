// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogSecurityContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context#id LogSecurityContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context#insert_after LogSecurityContext#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * security_context_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context#security_context_rule LogSecurityContext#security_context_rule}
  */
  readonly securityContextRule: LogSecurityContextSecurityContextRule;
}
export interface LogSecurityContextSecurityContextRule {
  /**
  * Matcher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context#query LogSecurityContext#query}
  */
  readonly query: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context#rule_name LogSecurityContext#rule_name}
  */
  readonly ruleName: string;
  /**
  * Literal value to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context#value LogSecurityContext#value}
  */
  readonly value?: string;
  /**
  * Possible Values: `FIELD`, `LITERAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context#value_source LogSecurityContext#value_source}
  */
  readonly valueSource: string;
  /**
  * Name of field used to copy value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context#value_source_field LogSecurityContext#value_source_field}
  */
  readonly valueSourceField?: string;
}

export function logSecurityContextSecurityContextRuleToTerraform(struct?: LogSecurityContextSecurityContextRuleOutputReference | LogSecurityContextSecurityContextRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    value: cdktf.stringToTerraform(struct!.value),
    value_source: cdktf.stringToTerraform(struct!.valueSource),
    value_source_field: cdktf.stringToTerraform(struct!.valueSourceField),
  }
}


export function logSecurityContextSecurityContextRuleToHclTerraform(struct?: LogSecurityContextSecurityContextRuleOutputReference | LogSecurityContextSecurityContextRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_source: {
      value: cdktf.stringToHclTerraform(struct!.valueSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_source_field: {
      value: cdktf.stringToHclTerraform(struct!.valueSourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSecurityContextSecurityContextRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSecurityContextSecurityContextRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSource = this._valueSource;
    }
    if (this._valueSourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSourceField = this._valueSourceField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSecurityContextSecurityContextRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
      this._ruleName = undefined;
      this._value = undefined;
      this._valueSource = undefined;
      this._valueSourceField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
      this._ruleName = value.ruleName;
      this._value = value.value;
      this._valueSource = value.valueSource;
      this._valueSourceField = value.valueSourceField;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_source - computed: false, optional: false, required: true
  private _valueSource?: string; 
  public get valueSource() {
    return this.getStringAttribute('value_source');
  }
  public set valueSource(value: string) {
    this._valueSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSourceInput() {
    return this._valueSource;
  }

  // value_source_field - computed: false, optional: true, required: false
  private _valueSourceField?: string; 
  public get valueSourceField() {
    return this.getStringAttribute('value_source_field');
  }
  public set valueSourceField(value: string) {
    this._valueSourceField = value;
  }
  public resetValueSourceField() {
    this._valueSourceField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSourceFieldInput() {
    return this._valueSourceField;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context dynatrace_log_security_context}
*/
export class LogSecurityContext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_log_security_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogSecurityContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogSecurityContext to import
  * @param importFromId The id of the existing LogSecurityContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogSecurityContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_log_security_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_security_context dynatrace_log_security_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogSecurityContextConfig
  */
  public constructor(scope: Construct, id: string, config: LogSecurityContextConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_log_security_context',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._insertAfter = config.insertAfter;
    this._securityContextRule.internalValue = config.securityContextRule;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // security_context_rule - computed: false, optional: false, required: true
  private _securityContextRule = new LogSecurityContextSecurityContextRuleOutputReference(this, "security_context_rule");
  public get securityContextRule() {
    return this._securityContextRule;
  }
  public putSecurityContextRule(value: LogSecurityContextSecurityContextRule) {
    this._securityContextRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextRuleInput() {
    return this._securityContextRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      security_context_rule: logSecurityContextSecurityContextRuleToTerraform(this._securityContextRule.internalValue),
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_context_rule: {
        value: logSecurityContextSecurityContextRuleToHclTerraform(this._securityContextRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogSecurityContextSecurityContextRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
