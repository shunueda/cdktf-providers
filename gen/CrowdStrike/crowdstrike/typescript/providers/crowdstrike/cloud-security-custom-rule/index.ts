// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudSecurityCustomRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of the alert logic and detection criteria for rule violations. Do not include numbering within this list. The Falcon console will automatically add numbering.When `alert_info` is not defined and `parent_rule_id` is defined, this field will inherit the parent rule's `alert_info`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#alert_info CloudSecurityCustomRule#alert_info}
  */
  readonly alertInfo?: string[];
  /**
  * Specific attack types associated with the rule. If `parent_rule_id` is defined, `attack_types` will be inherited from the parent rule and cannot be specified using this field. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#attack_types CloudSecurityCustomRule#attack_types}
  */
  readonly attackTypes?: string[];
  /**
  * Cloud provider for the policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#cloud_provider CloudSecurityCustomRule#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Security framework and compliance rule information. Utilize the `crowdstrike_cloud_compliance_framework_controls` data source to obtain this information. When `controls` is not defined and `parent_rule_id` is defined, this field will inherit the parent rule's `controls`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#controls CloudSecurityCustomRule#controls}
  */
  readonly controls?: CloudSecurityCustomRuleControls[] | cdktf.IResolvable;
  /**
  * Description of the policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#description CloudSecurityCustomRule#description}
  */
  readonly description: string;
  /**
  * Rego logic for the rule. Either `logic` or `parent_rule_id` must be defined. When `parent_rule_id` is set, the rule inherits the Rego logic from the parent rule. Note: The API does not return Rego logic for rules created from a parent rule, so this field will not appear in state when using `parent_rule_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#logic CloudSecurityCustomRule#logic}
  */
  readonly logic?: string;
  /**
  * Name of the policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#name CloudSecurityCustomRule#name}
  */
  readonly name: string;
  /**
  * Id of the parent rule to inherit properties from. The `crowdstrike_cloud_security_rules` data source can be used to query Falcon for parent rule information to use in this field. Required if `logic` is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#parent_rule_id CloudSecurityCustomRule#parent_rule_id}
  */
  readonly parentRuleId?: string;
  /**
  * Information about how to remediate issues detected by this rule. Do not include numbering within this list. The Falcon console will automatically add numbering. When `remediation_info` is not defined and `parent_rule_id` is defined, this field will inherit the parent rule's `remediation_info`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#remediation_info CloudSecurityCustomRule#remediation_info}
  */
  readonly remediationInfo?: string[];
  /**
  * The full resource type. Examples: `AWS::IAM::CredentialReport`, `Microsoft.Compute/virtualMachines`, `container.googleapis.com/Cluster`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#resource_type CloudSecurityCustomRule#resource_type}
  */
  readonly resourceType: string;
  /**
  * Severity of the rule. Valid values are `critical`, `high`, `medium`, `informational`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#severity CloudSecurityCustomRule#severity}
  */
  readonly severity?: string;
}
export interface CloudSecurityCustomRuleControls {
  /**
  * The compliance framework
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#authority CloudSecurityCustomRule#authority}
  */
  readonly authority?: string;
  /**
  * The compliance framework rule code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#code CloudSecurityCustomRule#code}
  */
  readonly code?: string;
}

export function cloudSecurityCustomRuleControlsToTerraform(struct?: CloudSecurityCustomRuleControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    code: cdktf.stringToTerraform(struct!.code),
  }
}


export function cloudSecurityCustomRuleControlsToHclTerraform(struct?: CloudSecurityCustomRuleControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: cdktf.stringToHclTerraform(struct!.authority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSecurityCustomRuleControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudSecurityCustomRuleControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSecurityCustomRuleControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._code = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._code = value.code;
    }
  }

  // authority - computed: true, optional: true, required: false
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // code - computed: true, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }
}

export class CloudSecurityCustomRuleControlsList extends cdktf.ComplexList {
  public internalValue? : CloudSecurityCustomRuleControls[] | cdktf.IResolvable

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
  public get(index: number): CloudSecurityCustomRuleControlsOutputReference {
    return new CloudSecurityCustomRuleControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule crowdstrike_cloud_security_custom_rule}
*/
export class CloudSecurityCustomRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_security_custom_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudSecurityCustomRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudSecurityCustomRule to import
  * @param importFromId The id of the existing CloudSecurityCustomRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudSecurityCustomRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_security_custom_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/cloud_security_custom_rule crowdstrike_cloud_security_custom_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudSecurityCustomRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudSecurityCustomRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_security_custom_rule',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.49',
        providerVersionConstraint: '0.0.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertInfo = config.alertInfo;
    this._attackTypes = config.attackTypes;
    this._cloudProvider = config.cloudProvider;
    this._controls.internalValue = config.controls;
    this._description = config.description;
    this._logic = config.logic;
    this._name = config.name;
    this._parentRuleId = config.parentRuleId;
    this._remediationInfo = config.remediationInfo;
    this._resourceType = config.resourceType;
    this._severity = config.severity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_info - computed: true, optional: true, required: false
  private _alertInfo?: string[]; 
  public get alertInfo() {
    return this.getListAttribute('alert_info');
  }
  public set alertInfo(value: string[]) {
    this._alertInfo = value;
  }
  public resetAlertInfo() {
    this._alertInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInfoInput() {
    return this._alertInfo;
  }

  // attack_types - computed: true, optional: true, required: false
  private _attackTypes?: string[]; 
  public get attackTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('attack_types'));
  }
  public set attackTypes(value: string[]) {
    this._attackTypes = value;
  }
  public resetAttackTypes() {
    this._attackTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypesInput() {
    return this._attackTypes;
  }

  // cloud_platform - computed: true, optional: false, required: false
  public get cloudPlatform() {
    return this.getStringAttribute('cloud_platform');
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // controls - computed: true, optional: true, required: false
  private _controls = new CloudSecurityCustomRuleControlsList(this, "controls", true);
  public get controls() {
    return this._controls;
  }
  public putControls(value: CloudSecurityCustomRuleControls[] | cdktf.IResolvable) {
    this._controls.internalValue = value;
  }
  public resetControls() {
    this._controls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlsInput() {
    return this._controls.internalValue;
  }

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

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // parent_rule_id - computed: false, optional: true, required: false
  private _parentRuleId?: string; 
  public get parentRuleId() {
    return this.getStringAttribute('parent_rule_id');
  }
  public set parentRuleId(value: string) {
    this._parentRuleId = value;
  }
  public resetParentRuleId() {
    this._parentRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRuleIdInput() {
    return this._parentRuleId;
  }

  // remediation_info - computed: true, optional: true, required: false
  private _remediationInfo?: string[]; 
  public get remediationInfo() {
    return this.getListAttribute('remediation_info');
  }
  public set remediationInfo(value: string[]) {
    this._remediationInfo = value;
  }
  public resetRemediationInfo() {
    this._remediationInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInfoInput() {
    return this._remediationInfo;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // severity - computed: true, optional: true, required: false
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

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_info: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertInfo),
      attack_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attackTypes),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      controls: cdktf.listMapper(cloudSecurityCustomRuleControlsToTerraform, false)(this._controls.internalValue),
      description: cdktf.stringToTerraform(this._description),
      logic: cdktf.stringToTerraform(this._logic),
      name: cdktf.stringToTerraform(this._name),
      parent_rule_id: cdktf.stringToTerraform(this._parentRuleId),
      remediation_info: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remediationInfo),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      severity: cdktf.stringToTerraform(this._severity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_info: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertInfo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attack_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attackTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controls: {
        value: cdktf.listMapperHcl(cloudSecurityCustomRuleControlsToHclTerraform, false)(this._controls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudSecurityCustomRuleControlsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logic: {
        value: cdktf.stringToHclTerraform(this._logic),
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
      parent_rule_id: {
        value: cdktf.stringToHclTerraform(this._parentRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remediation_info: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remediationInfo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
