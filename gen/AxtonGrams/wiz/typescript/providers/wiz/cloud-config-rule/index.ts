// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudConfigRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Detailed description for this rule. There is a defect in the API that makes this required; the description field cannot be nullified after one is defined, so we make it required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#description CloudConfigRule#description}
  */
  readonly description: string;
  /**
  * Enable/disable this rule.
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#enabled CloudConfigRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Make this rule function as a Control that creates Issues for new findings. By default only findings are created. If enabled=false, an error will be returned if this is set to true.
  *     - Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#function_as_control CloudConfigRule#function_as_control}
  */
  readonly functionAsControl?: boolean | cdktf.IResolvable;
  /**
  * Name of this rule, as appeared in the UI in the portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#name CloudConfigRule#name}
  */
  readonly name: string;
  /**
  * OPA rego policy that defines this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#opa_policy CloudConfigRule#opa_policy}
  */
  readonly opaPolicy?: string;
  /**
  * Steps to mitigate the issue that match this rule. If possible, include sample commands to execute in your cloud provider's console. Markdown formatting is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#remediation_instructions CloudConfigRule#remediation_instructions}
  */
  readonly remediationInstructions: string;
  /**
  * Set the rule scope of cloud account IDs. Select only subscriptions matching to the rule cloud provider. To change scope to 'all relevant resources' set to empty array. This must be the Wiz internal identifier for the account(uuid format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#scope_account_ids CloudConfigRule#scope_account_ids}
  */
  readonly scopeAccountIds?: string[];
  /**
  * Severity that will be set for findings of this rule.
  *     - Allowed values: 
  *         - INFORMATIONAL
  *         - LOW
  *         - MEDIUM
  *         - HIGH
  *         - CRITICAL
  * 
  *     - Defaults to `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#severity CloudConfigRule#severity}
  */
  readonly severity?: string;
  /**
  * The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#target_native_types CloudConfigRule#target_native_types}
  */
  readonly targetNativeTypes: string[];
  /**
  * iac_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#iac_matchers CloudConfigRule#iac_matchers}
  */
  readonly iacMatchers?: CloudConfigRuleIacMatchers[] | cdktf.IResolvable;
}
export interface CloudConfigRuleIacMatchers {
  /**
  * Write code in the Rego query language. This code will be evaluated against the JSON representation of each resource of the selected Native Type to determine if it passes or fails the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#rego_code CloudConfigRule#rego_code}
  */
  readonly regoCode: string;
  /**
  * The type of resource that will be evaluated by the Rego Code.
  *     - Allowed values: 
  *         - TERRAFORM
  *         - CLOUD_FORMATION
  *         - KUBERNETES
  *         - AZURE_RESOURCE_MANAGER
  *         - DOCKER_FILE
  *         - ADMISSION_CONTROLLER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#type CloudConfigRule#type}
  */
  readonly type: string;
}

export function cloudConfigRuleIacMatchersToTerraform(struct?: CloudConfigRuleIacMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rego_code: cdktf.stringToTerraform(struct!.regoCode),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudConfigRuleIacMatchersToHclTerraform(struct?: CloudConfigRuleIacMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rego_code: {
      value: cdktf.stringToHclTerraform(struct!.regoCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudConfigRuleIacMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudConfigRuleIacMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regoCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.regoCode = this._regoCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudConfigRuleIacMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regoCode = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regoCode = value.regoCode;
      this._type = value.type;
    }
  }

  // rego_code - computed: false, optional: false, required: true
  private _regoCode?: string; 
  public get regoCode() {
    return this.getStringAttribute('rego_code');
  }
  public set regoCode(value: string) {
    this._regoCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regoCodeInput() {
    return this._regoCode;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudConfigRuleIacMatchersList extends cdktf.ComplexList {
  public internalValue? : CloudConfigRuleIacMatchers[] | cdktf.IResolvable

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
  public get(index: number): CloudConfigRuleIacMatchersOutputReference {
    return new CloudConfigRuleIacMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule wiz_cloud_config_rule}
*/
export class CloudConfigRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_cloud_config_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudConfigRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudConfigRule to import
  * @param importFromId The id of the existing CloudConfigRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudConfigRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_cloud_config_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule wiz_cloud_config_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudConfigRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudConfigRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_cloud_config_rule',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5'
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
    this._enabled = config.enabled;
    this._functionAsControl = config.functionAsControl;
    this._name = config.name;
    this._opaPolicy = config.opaPolicy;
    this._remediationInstructions = config.remediationInstructions;
    this._scopeAccountIds = config.scopeAccountIds;
    this._severity = config.severity;
    this._targetNativeTypes = config.targetNativeTypes;
    this._iacMatchers.internalValue = config.iacMatchers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // function_as_control - computed: false, optional: true, required: false
  private _functionAsControl?: boolean | cdktf.IResolvable; 
  public get functionAsControl() {
    return this.getBooleanAttribute('function_as_control');
  }
  public set functionAsControl(value: boolean | cdktf.IResolvable) {
    this._functionAsControl = value;
  }
  public resetFunctionAsControl() {
    this._functionAsControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAsControlInput() {
    return this._functionAsControl;
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

  // opa_policy - computed: false, optional: true, required: false
  private _opaPolicy?: string; 
  public get opaPolicy() {
    return this.getStringAttribute('opa_policy');
  }
  public set opaPolicy(value: string) {
    this._opaPolicy = value;
  }
  public resetOpaPolicy() {
    this._opaPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaPolicyInput() {
    return this._opaPolicy;
  }

  // remediation_instructions - computed: false, optional: false, required: true
  private _remediationInstructions?: string; 
  public get remediationInstructions() {
    return this.getStringAttribute('remediation_instructions');
  }
  public set remediationInstructions(value: string) {
    this._remediationInstructions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInstructionsInput() {
    return this._remediationInstructions;
  }

  // scope_account_ids - computed: false, optional: true, required: false
  private _scopeAccountIds?: string[]; 
  public get scopeAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('scope_account_ids'));
  }
  public set scopeAccountIds(value: string[]) {
    this._scopeAccountIds = value;
  }
  public resetScopeAccountIds() {
    this._scopeAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeAccountIdsInput() {
    return this._scopeAccountIds;
  }

  // security_sub_categories - computed: true, optional: false, required: false
  public get securitySubCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('security_sub_categories'));
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // target_native_types - computed: false, optional: false, required: true
  private _targetNativeTypes?: string[]; 
  public get targetNativeTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('target_native_types'));
  }
  public set targetNativeTypes(value: string[]) {
    this._targetNativeTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNativeTypesInput() {
    return this._targetNativeTypes;
  }

  // iac_matchers - computed: false, optional: true, required: false
  private _iacMatchers = new CloudConfigRuleIacMatchersList(this, "iac_matchers", true);
  public get iacMatchers() {
    return this._iacMatchers;
  }
  public putIacMatchers(value: CloudConfigRuleIacMatchers[] | cdktf.IResolvable) {
    this._iacMatchers.internalValue = value;
  }
  public resetIacMatchers() {
    this._iacMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iacMatchersInput() {
    return this._iacMatchers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      function_as_control: cdktf.booleanToTerraform(this._functionAsControl),
      name: cdktf.stringToTerraform(this._name),
      opa_policy: cdktf.stringToTerraform(this._opaPolicy),
      remediation_instructions: cdktf.stringToTerraform(this._remediationInstructions),
      scope_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopeAccountIds),
      severity: cdktf.stringToTerraform(this._severity),
      target_native_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetNativeTypes),
      iac_matchers: cdktf.listMapper(cloudConfigRuleIacMatchersToTerraform, true)(this._iacMatchers.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      function_as_control: {
        value: cdktf.booleanToHclTerraform(this._functionAsControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opa_policy: {
        value: cdktf.stringToHclTerraform(this._opaPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remediation_instructions: {
        value: cdktf.stringToHclTerraform(this._remediationInstructions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopeAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_native_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetNativeTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      iac_matchers: {
        value: cdktf.listMapperHcl(cloudConfigRuleIacMatchersToHclTerraform, true)(this._iacMatchers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudConfigRuleIacMatchersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
