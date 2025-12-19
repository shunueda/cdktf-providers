// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/mobile_app_request_errors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileAppRequestErrorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/mobile_app_request_errors#id MobileAppRequestErrors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (MOBILE_APPLICATION, CUSTOM_APPLICATION)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/mobile_app_request_errors#scope MobileAppRequestErrors#scope}
  */
  readonly scope: string;
  /**
  * error_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/mobile_app_request_errors#error_rules MobileAppRequestErrors#error_rules}
  */
  readonly errorRules?: MobileAppRequestErrorsErrorRules;
}
export interface MobileAppRequestErrorsErrorRulesErrorRule {
  /**
  * Exclude response codes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/mobile_app_request_errors#error_codes MobileAppRequestErrors#error_codes}
  */
  readonly errorCodes: string;
}

export function mobileAppRequestErrorsErrorRulesErrorRuleToTerraform(struct?: MobileAppRequestErrorsErrorRulesErrorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_codes: cdktf.stringToTerraform(struct!.errorCodes),
  }
}


export function mobileAppRequestErrorsErrorRulesErrorRuleToHclTerraform(struct?: MobileAppRequestErrorsErrorRulesErrorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_codes: {
      value: cdktf.stringToHclTerraform(struct!.errorCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileAppRequestErrorsErrorRulesErrorRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MobileAppRequestErrorsErrorRulesErrorRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCodes = this._errorCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileAppRequestErrorsErrorRulesErrorRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorCodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorCodes = value.errorCodes;
    }
  }

  // error_codes - computed: false, optional: false, required: true
  private _errorCodes?: string; 
  public get errorCodes() {
    return this.getStringAttribute('error_codes');
  }
  public set errorCodes(value: string) {
    this._errorCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodesInput() {
    return this._errorCodes;
  }
}

export class MobileAppRequestErrorsErrorRulesErrorRuleList extends cdktf.ComplexList {
  public internalValue? : MobileAppRequestErrorsErrorRulesErrorRule[] | cdktf.IResolvable

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
  public get(index: number): MobileAppRequestErrorsErrorRulesErrorRuleOutputReference {
    return new MobileAppRequestErrorsErrorRulesErrorRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MobileAppRequestErrorsErrorRules {
  /**
  * error_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/mobile_app_request_errors#error_rule MobileAppRequestErrors#error_rule}
  */
  readonly errorRule: MobileAppRequestErrorsErrorRulesErrorRule[] | cdktf.IResolvable;
}

export function mobileAppRequestErrorsErrorRulesToTerraform(struct?: MobileAppRequestErrorsErrorRulesOutputReference | MobileAppRequestErrorsErrorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_rule: cdktf.listMapper(mobileAppRequestErrorsErrorRulesErrorRuleToTerraform, true)(struct!.errorRule),
  }
}


export function mobileAppRequestErrorsErrorRulesToHclTerraform(struct?: MobileAppRequestErrorsErrorRulesOutputReference | MobileAppRequestErrorsErrorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_rule: {
      value: cdktf.listMapperHcl(mobileAppRequestErrorsErrorRulesErrorRuleToHclTerraform, true)(struct!.errorRule),
      isBlock: true,
      type: "set",
      storageClassType: "MobileAppRequestErrorsErrorRulesErrorRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileAppRequestErrorsErrorRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileAppRequestErrorsErrorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRule = this._errorRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileAppRequestErrorsErrorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorRule.internalValue = value.errorRule;
    }
  }

  // error_rule - computed: false, optional: false, required: true
  private _errorRule = new MobileAppRequestErrorsErrorRulesErrorRuleList(this, "error_rule", true);
  public get errorRule() {
    return this._errorRule;
  }
  public putErrorRule(value: MobileAppRequestErrorsErrorRulesErrorRule[] | cdktf.IResolvable) {
    this._errorRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRuleInput() {
    return this._errorRule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/mobile_app_request_errors dynatrace_mobile_app_request_errors}
*/
export class MobileAppRequestErrors extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_mobile_app_request_errors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileAppRequestErrors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileAppRequestErrors to import
  * @param importFromId The id of the existing MobileAppRequestErrors that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/mobile_app_request_errors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileAppRequestErrors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_mobile_app_request_errors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/mobile_app_request_errors dynatrace_mobile_app_request_errors} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileAppRequestErrorsConfig
  */
  public constructor(scope: Construct, id: string, config: MobileAppRequestErrorsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_mobile_app_request_errors',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
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
    this._scope = config.scope;
    this._errorRules.internalValue = config.errorRules;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // error_rules - computed: false, optional: true, required: false
  private _errorRules = new MobileAppRequestErrorsErrorRulesOutputReference(this, "error_rules");
  public get errorRules() {
    return this._errorRules;
  }
  public putErrorRules(value: MobileAppRequestErrorsErrorRules) {
    this._errorRules.internalValue = value;
  }
  public resetErrorRules() {
    this._errorRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRulesInput() {
    return this._errorRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      error_rules: mobileAppRequestErrorsErrorRulesToTerraform(this._errorRules.internalValue),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_rules: {
        value: mobileAppRequestErrorsErrorRulesToHclTerraform(this._errorRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileAppRequestErrorsErrorRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
