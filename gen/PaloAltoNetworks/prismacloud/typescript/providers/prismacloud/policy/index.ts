// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud type (Required for config policies)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#cloud_type Policy#cloud_type}
  */
  readonly cloudType?: string;
  /**
  * Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#deleted Policy#deleted}
  */
  readonly deleted?: boolean | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#description Policy#description}
  */
  readonly description?: string;
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#enabled Policy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#id Policy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#labels Policy#labels}
  */
  readonly labels?: string[];
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#name Policy#name}
  */
  readonly name: string;
  /**
  * Overridden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#overridden Policy#overridden}
  */
  readonly overridden?: boolean | cdktf.IResolvable;
  /**
  * Policy subtypes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#policy_subtypes Policy#policy_subtypes}
  */
  readonly policySubtypes?: string[];
  /**
  * Policy type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#policy_type Policy#policy_type}
  */
  readonly policyType: string;
  /**
  * Remediation recommendation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#recommendation Policy#recommendation}
  */
  readonly recommendation?: string;
  /**
  * Restrict alert dismissal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#restrict_alert_dismissal Policy#restrict_alert_dismissal}
  */
  readonly restrictAlertDismissal?: boolean | cdktf.IResolvable;
  /**
  * Severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#severity Policy#severity}
  */
  readonly severity?: string;
  /**
  * compliance_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#compliance_metadata Policy#compliance_metadata}
  */
  readonly complianceMetadata?: PolicyComplianceMetadata[] | cdktf.IResolvable;
  /**
  * remediation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#remediation Policy#remediation}
  */
  readonly remediation?: PolicyRemediation;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#rule Policy#rule}
  */
  readonly rule: PolicyRule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#timeouts Policy#timeouts}
  */
  readonly timeouts?: PolicyTimeouts;
}
export interface PolicyComplianceMetadata {
  /**
  * Compliance Section UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#compliance_id Policy#compliance_id}
  */
  readonly complianceId: string;
}

export function policyComplianceMetadataToTerraform(struct?: PolicyComplianceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_id: cdktf.stringToTerraform(struct!.complianceId),
  }
}


export function policyComplianceMetadataToHclTerraform(struct?: PolicyComplianceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compliance_id: {
      value: cdktf.stringToHclTerraform(struct!.complianceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyComplianceMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyComplianceMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complianceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceId = this._complianceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyComplianceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._complianceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._complianceId = value.complianceId;
    }
  }

  // compliance_id - computed: false, optional: false, required: true
  private _complianceId?: string; 
  public get complianceId() {
    return this.getStringAttribute('compliance_id');
  }
  public set complianceId(value: string) {
    this._complianceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceIdInput() {
    return this._complianceId;
  }

  // custom_assigned - computed: true, optional: false, required: false
  public get customAssigned() {
    return this.getBooleanAttribute('custom_assigned');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // requirement_description - computed: true, optional: false, required: false
  public get requirementDescription() {
    return this.getStringAttribute('requirement_description');
  }

  // requirement_id - computed: true, optional: false, required: false
  public get requirementId() {
    return this.getStringAttribute('requirement_id');
  }

  // requirement_name - computed: true, optional: false, required: false
  public get requirementName() {
    return this.getStringAttribute('requirement_name');
  }

  // section_description - computed: true, optional: false, required: false
  public get sectionDescription() {
    return this.getStringAttribute('section_description');
  }

  // section_id - computed: true, optional: false, required: false
  public get sectionId() {
    return this.getStringAttribute('section_id');
  }

  // section_label - computed: true, optional: false, required: false
  public get sectionLabel() {
    return this.getStringAttribute('section_label');
  }

  // standard_description - computed: true, optional: false, required: false
  public get standardDescription() {
    return this.getStringAttribute('standard_description');
  }

  // standard_name - computed: true, optional: false, required: false
  public get standardName() {
    return this.getStringAttribute('standard_name');
  }
}

export class PolicyComplianceMetadataList extends cdktf.ComplexList {
  public internalValue? : PolicyComplianceMetadata[] | cdktf.IResolvable

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
  public get(index: number): PolicyComplianceMetadataOutputReference {
    return new PolicyComplianceMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRemediationActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#operation Policy#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#payload Policy#payload}
  */
  readonly payload?: string;
}

export function policyRemediationActionsToTerraform(struct?: PolicyRemediationActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    payload: cdktf.stringToTerraform(struct!.payload),
  }
}


export function policyRemediationActionsToHclTerraform(struct?: PolicyRemediationActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRemediationActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRemediationActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRemediationActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._payload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._payload = value.payload;
    }
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}

export class PolicyRemediationActionsList extends cdktf.ComplexList {
  public internalValue? : PolicyRemediationActions[] | cdktf.IResolvable

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
  public get(index: number): PolicyRemediationActionsOutputReference {
    return new PolicyRemediationActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRemediation {
  /**
  * CLI script JSON schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#cli_script_json_schema_string Policy#cli_script_json_schema_string}
  */
  readonly cliScriptJsonSchemaString?: string;
  /**
  * CLI script template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#cli_script_template Policy#cli_script_template}
  */
  readonly cliScriptTemplate?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#description Policy#description}
  */
  readonly description?: string;
  /**
  * Template type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#template_type Policy#template_type}
  */
  readonly templateType?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#actions Policy#actions}
  */
  readonly actions?: PolicyRemediationActions[] | cdktf.IResolvable;
}

export function policyRemediationToTerraform(struct?: PolicyRemediationOutputReference | PolicyRemediation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_script_json_schema_string: cdktf.stringToTerraform(struct!.cliScriptJsonSchemaString),
    cli_script_template: cdktf.stringToTerraform(struct!.cliScriptTemplate),
    description: cdktf.stringToTerraform(struct!.description),
    template_type: cdktf.stringToTerraform(struct!.templateType),
    actions: cdktf.listMapper(policyRemediationActionsToTerraform, true)(struct!.actions),
  }
}


export function policyRemediationToHclTerraform(struct?: PolicyRemediationOutputReference | PolicyRemediation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_script_json_schema_string: {
      value: cdktf.stringToHclTerraform(struct!.cliScriptJsonSchemaString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_script_template: {
      value: cdktf.stringToHclTerraform(struct!.cliScriptTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_type: {
      value: cdktf.stringToHclTerraform(struct!.templateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actions: {
      value: cdktf.listMapperHcl(policyRemediationActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyRemediationActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRemediationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyRemediation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliScriptJsonSchemaString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliScriptJsonSchemaString = this._cliScriptJsonSchemaString;
    }
    if (this._cliScriptTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliScriptTemplate = this._cliScriptTemplate;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._templateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateType = this._templateType;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRemediation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cliScriptJsonSchemaString = undefined;
      this._cliScriptTemplate = undefined;
      this._description = undefined;
      this._templateType = undefined;
      this._actions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cliScriptJsonSchemaString = value.cliScriptJsonSchemaString;
      this._cliScriptTemplate = value.cliScriptTemplate;
      this._description = value.description;
      this._templateType = value.templateType;
      this._actions.internalValue = value.actions;
    }
  }

  // cli_script_json_schema_string - computed: false, optional: true, required: false
  private _cliScriptJsonSchemaString?: string; 
  public get cliScriptJsonSchemaString() {
    return this.getStringAttribute('cli_script_json_schema_string');
  }
  public set cliScriptJsonSchemaString(value: string) {
    this._cliScriptJsonSchemaString = value;
  }
  public resetCliScriptJsonSchemaString() {
    this._cliScriptJsonSchemaString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliScriptJsonSchemaStringInput() {
    return this._cliScriptJsonSchemaString;
  }

  // cli_script_template - computed: false, optional: true, required: false
  private _cliScriptTemplate?: string; 
  public get cliScriptTemplate() {
    return this.getStringAttribute('cli_script_template');
  }
  public set cliScriptTemplate(value: string) {
    this._cliScriptTemplate = value;
  }
  public resetCliScriptTemplate() {
    this._cliScriptTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliScriptTemplateInput() {
    return this._cliScriptTemplate;
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

  // template_type - computed: false, optional: true, required: false
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  public resetTemplateType() {
    this._templateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new PolicyRemediationActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: PolicyRemediationActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}
export interface PolicyRuleChildren {
  /**
  * Criteria for build policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#criteria Policy#criteria}
  */
  readonly criteria?: string;
  /**
  * YAML string for code build policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#metadata Policy#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Recommendation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#recommendation Policy#recommendation}
  */
  readonly recommendation?: string;
  /**
  * Type of build policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#type Policy#type}
  */
  readonly type?: string;
}

export function policyRuleChildrenToTerraform(struct?: PolicyRuleChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    recommendation: cdktf.stringToTerraform(struct!.recommendation),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policyRuleChildrenToHclTerraform(struct?: PolicyRuleChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    recommendation: {
      value: cdktf.stringToHclTerraform(struct!.recommendation),
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

export class PolicyRuleChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleChildren | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._recommendation !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendation = this._recommendation;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleChildren | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria = undefined;
      this._metadata = undefined;
      this._recommendation = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria = value.criteria;
      this._metadata = value.metadata;
      this._recommendation = value.recommendation;
      this._type = value.type;
    }
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  public resetCriteria() {
    this._criteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // recommendation - computed: false, optional: true, required: false
  private _recommendation?: string; 
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }
  public set recommendation(value: string) {
    this._recommendation = value;
  }
  public resetRecommendation() {
    this._recommendation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationInput() {
    return this._recommendation;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PolicyRuleChildrenList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleChildren[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleChildrenOutputReference {
    return new PolicyRuleChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleDataCriteria {
  /**
  * Data Profile name required for DLP rule criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#classification_result Policy#classification_result}
  */
  readonly classificationResult: string;
  /**
  * File exposure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#exposure Policy#exposure}
  */
  readonly exposure?: string;
  /**
  * File extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#extension Policy#extension}
  */
  readonly extension?: string[];
}

export function policyRuleDataCriteriaToTerraform(struct?: PolicyRuleDataCriteriaOutputReference | PolicyRuleDataCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification_result: cdktf.stringToTerraform(struct!.classificationResult),
    exposure: cdktf.stringToTerraform(struct!.exposure),
    extension: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extension),
  }
}


export function policyRuleDataCriteriaToHclTerraform(struct?: PolicyRuleDataCriteriaOutputReference | PolicyRuleDataCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classification_result: {
      value: cdktf.stringToHclTerraform(struct!.classificationResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exposure: {
      value: cdktf.stringToHclTerraform(struct!.exposure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extension),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleDataCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyRuleDataCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classificationResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationResult = this._classificationResult;
    }
    if (this._exposure !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposure = this._exposure;
    }
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleDataCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classificationResult = undefined;
      this._exposure = undefined;
      this._extension = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classificationResult = value.classificationResult;
      this._exposure = value.exposure;
      this._extension = value.extension;
    }
  }

  // classification_result - computed: false, optional: false, required: true
  private _classificationResult?: string; 
  public get classificationResult() {
    return this.getStringAttribute('classification_result');
  }
  public set classificationResult(value: string) {
    this._classificationResult = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationResultInput() {
    return this._classificationResult;
  }

  // exposure - computed: false, optional: true, required: false
  private _exposure?: string; 
  public get exposure() {
    return this.getStringAttribute('exposure');
  }
  public set exposure(value: string) {
    this._exposure = value;
  }
  public resetExposure() {
    this._exposure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposureInput() {
    return this._exposure;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: string[]; 
  public get extension() {
    return cdktf.Fn.tolist(this.getListAttribute('extension'));
  }
  public set extension(value: string[]) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }
}
export interface PolicyRule {
  /**
  * API name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#api_name Policy#api_name}
  */
  readonly apiName?: string;
  /**
  * Cloud account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#cloud_account Policy#cloud_account}
  */
  readonly cloudAccount?: string;
  /**
  * Cloud type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#cloud_type Policy#cloud_type}
  */
  readonly cloudType?: string;
  /**
  * Saved search ID that defines the rule criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#criteria Policy#criteria}
  */
  readonly criteria?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#name Policy#name}
  */
  readonly name: string;
  /**
  * Parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#parameters Policy#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Resource ID path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#resource_id_path Policy#resource_id_path}
  */
  readonly resourceIdPath?: string;
  /**
  * Resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#resource_type Policy#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Type of rule or RQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#rule_type Policy#rule_type}
  */
  readonly ruleType: string;
  /**
  * children block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#children Policy#children}
  */
  readonly children?: PolicyRuleChildren[] | cdktf.IResolvable;
  /**
  * data_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#data_criteria Policy#data_criteria}
  */
  readonly dataCriteria?: PolicyRuleDataCriteria;
}

export function policyRuleToTerraform(struct?: PolicyRuleOutputReference | PolicyRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_name: cdktf.stringToTerraform(struct!.apiName),
    cloud_account: cdktf.stringToTerraform(struct!.cloudAccount),
    cloud_type: cdktf.stringToTerraform(struct!.cloudType),
    criteria: cdktf.stringToTerraform(struct!.criteria),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    resource_id_path: cdktf.stringToTerraform(struct!.resourceIdPath),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    children: cdktf.listMapper(policyRuleChildrenToTerraform, true)(struct!.children),
    data_criteria: policyRuleDataCriteriaToTerraform(struct!.dataCriteria),
  }
}


export function policyRuleToHclTerraform(struct?: PolicyRuleOutputReference | PolicyRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_name: {
      value: cdktf.stringToHclTerraform(struct!.apiName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_account: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_type: {
      value: cdktf.stringToHclTerraform(struct!.cloudType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_id_path: {
      value: cdktf.stringToHclTerraform(struct!.resourceIdPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
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
    children: {
      value: cdktf.listMapperHcl(policyRuleChildrenToHclTerraform, true)(struct!.children),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyRuleChildrenList",
    },
    data_criteria: {
      value: policyRuleDataCriteriaToHclTerraform(struct!.dataCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyRuleDataCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiName = this._apiName;
    }
    if (this._cloudAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccount = this._cloudAccount;
    }
    if (this._cloudType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType;
    }
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._resourceIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIdPath = this._resourceIdPath;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._children?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.children = this._children?.internalValue;
    }
    if (this._dataCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCriteria = this._dataCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiName = undefined;
      this._cloudAccount = undefined;
      this._cloudType = undefined;
      this._criteria = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._resourceIdPath = undefined;
      this._resourceType = undefined;
      this._ruleType = undefined;
      this._children.internalValue = undefined;
      this._dataCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiName = value.apiName;
      this._cloudAccount = value.cloudAccount;
      this._cloudType = value.cloudType;
      this._criteria = value.criteria;
      this._name = value.name;
      this._parameters = value.parameters;
      this._resourceIdPath = value.resourceIdPath;
      this._resourceType = value.resourceType;
      this._ruleType = value.ruleType;
      this._children.internalValue = value.children;
      this._dataCriteria.internalValue = value.dataCriteria;
    }
  }

  // api_name - computed: false, optional: true, required: false
  private _apiName?: string; 
  public get apiName() {
    return this.getStringAttribute('api_name');
  }
  public set apiName(value: string) {
    this._apiName = value;
  }
  public resetApiName() {
    this._apiName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNameInput() {
    return this._apiName;
  }

  // cloud_account - computed: false, optional: true, required: false
  private _cloudAccount?: string; 
  public get cloudAccount() {
    return this.getStringAttribute('cloud_account');
  }
  public set cloudAccount(value: string) {
    this._cloudAccount = value;
  }
  public resetCloudAccount() {
    this._cloudAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountInput() {
    return this._cloudAccount;
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  public resetCriteria() {
    this._criteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // resource_id_path - computed: false, optional: true, required: false
  private _resourceIdPath?: string; 
  public get resourceIdPath() {
    return this.getStringAttribute('resource_id_path');
  }
  public set resourceIdPath(value: string) {
    this._resourceIdPath = value;
  }
  public resetResourceIdPath() {
    this._resourceIdPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdPathInput() {
    return this._resourceIdPath;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // children - computed: false, optional: true, required: false
  private _children = new PolicyRuleChildrenList(this, "children", false);
  public get children() {
    return this._children;
  }
  public putChildren(value: PolicyRuleChildren[] | cdktf.IResolvable) {
    this._children.internalValue = value;
  }
  public resetChildren() {
    this._children.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenInput() {
    return this._children.internalValue;
  }

  // data_criteria - computed: false, optional: true, required: false
  private _dataCriteria = new PolicyRuleDataCriteriaOutputReference(this, "data_criteria");
  public get dataCriteria() {
    return this._dataCriteria;
  }
  public putDataCriteria(value: PolicyRuleDataCriteria) {
    this._dataCriteria.internalValue = value;
  }
  public resetDataCriteria() {
    this._dataCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCriteriaInput() {
    return this._dataCriteria.internalValue;
  }
}
export interface PolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#create Policy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#delete Policy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#update Policy#update}
  */
  readonly update?: string;
}

export function policyTimeoutsToTerraform(struct?: PolicyTimeouts | cdktf.IResolvable): any {
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


export function policyTimeoutsToHclTerraform(struct?: PolicyTimeouts | cdktf.IResolvable): any {
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

export class PolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy prismacloud_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/policy prismacloud_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_policy',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudType = config.cloudType;
    this._deleted = config.deleted;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._overridden = config.overridden;
    this._policySubtypes = config.policySubtypes;
    this._policyType = config.policyType;
    this._recommendation = config.recommendation;
    this._restrictAlertDismissal = config.restrictAlertDismissal;
    this._severity = config.severity;
    this._complianceMetadata.internalValue = config.complianceMetadata;
    this._remediation.internalValue = config.remediation;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getNumberAttribute('created_on');
  }

  // deleted - computed: false, optional: true, required: false
  private _deleted?: boolean | cdktf.IResolvable; 
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }
  public set deleted(value: boolean | cdktf.IResolvable) {
    this._deleted = value;
  }
  public resetDeleted() {
    this._deleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_on - computed: true, optional: false, required: false
  public get lastModifiedOn() {
    return this.getNumberAttribute('last_modified_on');
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

  // open_alerts_count - computed: true, optional: false, required: false
  public get openAlertsCount() {
    return this.getNumberAttribute('open_alerts_count');
  }

  // overridden - computed: false, optional: true, required: false
  private _overridden?: boolean | cdktf.IResolvable; 
  public get overridden() {
    return this.getBooleanAttribute('overridden');
  }
  public set overridden(value: boolean | cdktf.IResolvable) {
    this._overridden = value;
  }
  public resetOverridden() {
    this._overridden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overriddenInput() {
    return this._overridden;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policy_category - computed: true, optional: false, required: false
  public get policyCategory() {
    return this.getStringAttribute('policy_category');
  }

  // policy_class - computed: true, optional: false, required: false
  public get policyClass() {
    return this.getStringAttribute('policy_class');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_mode - computed: true, optional: false, required: false
  public get policyMode() {
    return this.getStringAttribute('policy_mode');
  }

  // policy_subtypes - computed: true, optional: true, required: false
  private _policySubtypes?: string[]; 
  public get policySubtypes() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_subtypes'));
  }
  public set policySubtypes(value: string[]) {
    this._policySubtypes = value;
  }
  public resetPolicySubtypes() {
    this._policySubtypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySubtypesInput() {
    return this._policySubtypes;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // recommendation - computed: false, optional: true, required: false
  private _recommendation?: string; 
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }
  public set recommendation(value: string) {
    this._recommendation = value;
  }
  public resetRecommendation() {
    this._recommendation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationInput() {
    return this._recommendation;
  }

  // remediable - computed: true, optional: false, required: false
  public get remediable() {
    return this.getBooleanAttribute('remediable');
  }

  // restrict_alert_dismissal - computed: false, optional: true, required: false
  private _restrictAlertDismissal?: boolean | cdktf.IResolvable; 
  public get restrictAlertDismissal() {
    return this.getBooleanAttribute('restrict_alert_dismissal');
  }
  public set restrictAlertDismissal(value: boolean | cdktf.IResolvable) {
    this._restrictAlertDismissal = value;
  }
  public resetRestrictAlertDismissal() {
    this._restrictAlertDismissal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAlertDismissalInput() {
    return this._restrictAlertDismissal;
  }

  // rule_last_modified_on - computed: true, optional: false, required: false
  public get ruleLastModifiedOn() {
    return this.getNumberAttribute('rule_last_modified_on');
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

  // system_default - computed: true, optional: false, required: false
  public get systemDefault() {
    return this.getBooleanAttribute('system_default');
  }

  // compliance_metadata - computed: false, optional: true, required: false
  private _complianceMetadata = new PolicyComplianceMetadataList(this, "compliance_metadata", true);
  public get complianceMetadata() {
    return this._complianceMetadata;
  }
  public putComplianceMetadata(value: PolicyComplianceMetadata[] | cdktf.IResolvable) {
    this._complianceMetadata.internalValue = value;
  }
  public resetComplianceMetadata() {
    this._complianceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceMetadataInput() {
    return this._complianceMetadata.internalValue;
  }

  // remediation - computed: false, optional: true, required: false
  private _remediation = new PolicyRemediationOutputReference(this, "remediation");
  public get remediation() {
    return this._remediation;
  }
  public putRemediation(value: PolicyRemediation) {
    this._remediation.internalValue = value;
  }
  public resetRemediation() {
    this._remediation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new PolicyRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: PolicyRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PolicyTimeouts) {
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
      cloud_type: cdktf.stringToTerraform(this._cloudType),
      deleted: cdktf.booleanToTerraform(this._deleted),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      overridden: cdktf.booleanToTerraform(this._overridden),
      policy_subtypes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policySubtypes),
      policy_type: cdktf.stringToTerraform(this._policyType),
      recommendation: cdktf.stringToTerraform(this._recommendation),
      restrict_alert_dismissal: cdktf.booleanToTerraform(this._restrictAlertDismissal),
      severity: cdktf.stringToTerraform(this._severity),
      compliance_metadata: cdktf.listMapper(policyComplianceMetadataToTerraform, true)(this._complianceMetadata.internalValue),
      remediation: policyRemediationToTerraform(this._remediation.internalValue),
      rule: policyRuleToTerraform(this._rule.internalValue),
      timeouts: policyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_type: {
        value: cdktf.stringToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deleted: {
        value: cdktf.booleanToHclTerraform(this._deleted),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overridden: {
        value: cdktf.booleanToHclTerraform(this._overridden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_subtypes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policySubtypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommendation: {
        value: cdktf.stringToHclTerraform(this._recommendation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_alert_dismissal: {
        value: cdktf.booleanToHclTerraform(this._restrictAlertDismissal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_metadata: {
        value: cdktf.listMapperHcl(policyComplianceMetadataToHclTerraform, true)(this._complianceMetadata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyComplianceMetadataList",
      },
      remediation: {
        value: policyRemediationToHclTerraform(this._remediation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyRemediationList",
      },
      rule: {
        value: policyRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyRuleList",
      },
      timeouts: {
        value: policyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
