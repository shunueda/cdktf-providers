// https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdvancedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#id AdvancedSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Britive resource id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#resource_id AdvancedSettings#resource_id}
  */
  readonly resourceId: string;
  /**
  * Britive resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#resource_type AdvancedSettings#resource_type}
  */
  readonly resourceType: string;
  /**
  * im block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#im AdvancedSettings#im}
  */
  readonly im?: AdvancedSettingsIm;
  /**
  * itsm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#itsm AdvancedSettings#itsm}
  */
  readonly itsm?: AdvancedSettingsItsm;
  /**
  * justification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#justification_settings AdvancedSettings#justification_settings}
  */
  readonly justificationSettings?: AdvancedSettingsJustificationSettings;
}
export interface AdvancedSettingsIm {
  /**
  * IM Connection id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#connection_id AdvancedSettings#connection_id}
  */
  readonly connectionId: string;
  /**
  * IM Connection type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#connection_type AdvancedSettings#connection_type}
  */
  readonly connectionType: string;
  /**
  * IM Escalation Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#escalation_policies AdvancedSettings#escalation_policies}
  */
  readonly escalationPolicies: string[];
  /**
  * IM auto approval toggle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#is_auto_approval_enabled AdvancedSettings#is_auto_approval_enabled}
  */
  readonly isAutoApprovalEnabled: boolean | cdktf.IResolvable;
}

export function advancedSettingsImToTerraform(struct?: AdvancedSettingsImOutputReference | AdvancedSettingsIm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    escalation_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.escalationPolicies),
    is_auto_approval_enabled: cdktf.booleanToTerraform(struct!.isAutoApprovalEnabled),
  }
}


export function advancedSettingsImToHclTerraform(struct?: AdvancedSettingsImOutputReference | AdvancedSettingsIm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escalation_policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.escalationPolicies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    is_auto_approval_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoApprovalEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedSettingsImOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedSettingsIm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._escalationPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationPolicies = this._escalationPolicies;
    }
    if (this._isAutoApprovalEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoApprovalEnabled = this._isAutoApprovalEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedSettingsIm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionId = undefined;
      this._connectionType = undefined;
      this._escalationPolicies = undefined;
      this._isAutoApprovalEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionId = value.connectionId;
      this._connectionType = value.connectionType;
      this._escalationPolicies = value.escalationPolicies;
      this._isAutoApprovalEnabled = value.isAutoApprovalEnabled;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // escalation_policies - computed: false, optional: false, required: true
  private _escalationPolicies?: string[]; 
  public get escalationPolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('escalation_policies'));
  }
  public set escalationPolicies(value: string[]) {
    this._escalationPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPoliciesInput() {
    return this._escalationPolicies;
  }

  // im_id - computed: true, optional: false, required: false
  public get imId() {
    return this.getStringAttribute('im_id');
  }

  // is_auto_approval_enabled - computed: false, optional: false, required: true
  private _isAutoApprovalEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoApprovalEnabled() {
    return this.getBooleanAttribute('is_auto_approval_enabled');
  }
  public set isAutoApprovalEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoApprovalEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoApprovalEnabledInput() {
    return this._isAutoApprovalEnabled;
  }
}
export interface AdvancedSettingsItsmItsmFilterCriteria {
  /**
  * filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#filter AdvancedSettings#filter}
  */
  readonly filter: string;
  /**
  * supported ticket type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#supported_ticket_type AdvancedSettings#supported_ticket_type}
  */
  readonly supportedTicketType: string;
}

export function advancedSettingsItsmItsmFilterCriteriaToTerraform(struct?: AdvancedSettingsItsmItsmFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    supported_ticket_type: cdktf.stringToTerraform(struct!.supportedTicketType),
  }
}


export function advancedSettingsItsmItsmFilterCriteriaToHclTerraform(struct?: AdvancedSettingsItsmItsmFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_ticket_type: {
      value: cdktf.stringToHclTerraform(struct!.supportedTicketType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedSettingsItsmItsmFilterCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedSettingsItsmItsmFilterCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._supportedTicketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedTicketType = this._supportedTicketType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedSettingsItsmItsmFilterCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._supportedTicketType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._supportedTicketType = value.supportedTicketType;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // supported_ticket_type - computed: false, optional: false, required: true
  private _supportedTicketType?: string; 
  public get supportedTicketType() {
    return this.getStringAttribute('supported_ticket_type');
  }
  public set supportedTicketType(value: string) {
    this._supportedTicketType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTicketTypeInput() {
    return this._supportedTicketType;
  }
}

export class AdvancedSettingsItsmItsmFilterCriteriaList extends cdktf.ComplexList {
  public internalValue? : AdvancedSettingsItsmItsmFilterCriteria[] | cdktf.IResolvable

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
  public get(index: number): AdvancedSettingsItsmItsmFilterCriteriaOutputReference {
    return new AdvancedSettingsItsmItsmFilterCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedSettingsItsm {
  /**
  * ITSM Connection id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#connection_id AdvancedSettings#connection_id}
  */
  readonly connectionId: string;
  /**
  * ITSM Connection type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#connection_type AdvancedSettings#connection_type}
  */
  readonly connectionType: string;
  /**
  * itsm comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#is_itsm_enabled AdvancedSettings#is_itsm_enabled}
  */
  readonly isItsmEnabled: boolean | cdktf.IResolvable;
  /**
  * itsm_filter_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#itsm_filter_criteria AdvancedSettings#itsm_filter_criteria}
  */
  readonly itsmFilterCriteria: AdvancedSettingsItsmItsmFilterCriteria[] | cdktf.IResolvable;
}

export function advancedSettingsItsmToTerraform(struct?: AdvancedSettingsItsmOutputReference | AdvancedSettingsItsm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    is_itsm_enabled: cdktf.booleanToTerraform(struct!.isItsmEnabled),
    itsm_filter_criteria: cdktf.listMapper(advancedSettingsItsmItsmFilterCriteriaToTerraform, true)(struct!.itsmFilterCriteria),
  }
}


export function advancedSettingsItsmToHclTerraform(struct?: AdvancedSettingsItsmOutputReference | AdvancedSettingsItsm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_itsm_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isItsmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    itsm_filter_criteria: {
      value: cdktf.listMapperHcl(advancedSettingsItsmItsmFilterCriteriaToHclTerraform, true)(struct!.itsmFilterCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "AdvancedSettingsItsmItsmFilterCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedSettingsItsmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedSettingsItsm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._isItsmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isItsmEnabled = this._isItsmEnabled;
    }
    if (this._itsmFilterCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.itsmFilterCriteria = this._itsmFilterCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedSettingsItsm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionId = undefined;
      this._connectionType = undefined;
      this._isItsmEnabled = undefined;
      this._itsmFilterCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionId = value.connectionId;
      this._connectionType = value.connectionType;
      this._isItsmEnabled = value.isItsmEnabled;
      this._itsmFilterCriteria.internalValue = value.itsmFilterCriteria;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // is_itsm_enabled - computed: false, optional: false, required: true
  private _isItsmEnabled?: boolean | cdktf.IResolvable; 
  public get isItsmEnabled() {
    return this.getBooleanAttribute('is_itsm_enabled');
  }
  public set isItsmEnabled(value: boolean | cdktf.IResolvable) {
    this._isItsmEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isItsmEnabledInput() {
    return this._isItsmEnabled;
  }

  // itsm_id - computed: true, optional: false, required: false
  public get itsmId() {
    return this.getStringAttribute('itsm_id');
  }

  // itsm_filter_criteria - computed: false, optional: false, required: true
  private _itsmFilterCriteria = new AdvancedSettingsItsmItsmFilterCriteriaList(this, "itsm_filter_criteria", true);
  public get itsmFilterCriteria() {
    return this._itsmFilterCriteria;
  }
  public putItsmFilterCriteria(value: AdvancedSettingsItsmItsmFilterCriteria[] | cdktf.IResolvable) {
    this._itsmFilterCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itsmFilterCriteriaInput() {
    return this._itsmFilterCriteria.internalValue;
  }
}
export interface AdvancedSettingsJustificationSettings {
  /**
  * Resource justification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#is_justification_required AdvancedSettings#is_justification_required}
  */
  readonly isJustificationRequired: boolean | cdktf.IResolvable;
  /**
  * Resource justification Regular Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#justification_regex AdvancedSettings#justification_regex}
  */
  readonly justificationRegex?: string;
}

export function advancedSettingsJustificationSettingsToTerraform(struct?: AdvancedSettingsJustificationSettingsOutputReference | AdvancedSettingsJustificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_justification_required: cdktf.booleanToTerraform(struct!.isJustificationRequired),
    justification_regex: cdktf.stringToTerraform(struct!.justificationRegex),
  }
}


export function advancedSettingsJustificationSettingsToHclTerraform(struct?: AdvancedSettingsJustificationSettingsOutputReference | AdvancedSettingsJustificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_justification_required: {
      value: cdktf.booleanToHclTerraform(struct!.isJustificationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    justification_regex: {
      value: cdktf.stringToHclTerraform(struct!.justificationRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedSettingsJustificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedSettingsJustificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isJustificationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isJustificationRequired = this._isJustificationRequired;
    }
    if (this._justificationRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.justificationRegex = this._justificationRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedSettingsJustificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isJustificationRequired = undefined;
      this._justificationRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isJustificationRequired = value.isJustificationRequired;
      this._justificationRegex = value.justificationRegex;
    }
  }

  // is_justification_required - computed: false, optional: false, required: true
  private _isJustificationRequired?: boolean | cdktf.IResolvable; 
  public get isJustificationRequired() {
    return this.getBooleanAttribute('is_justification_required');
  }
  public set isJustificationRequired(value: boolean | cdktf.IResolvable) {
    this._isJustificationRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isJustificationRequiredInput() {
    return this._isJustificationRequired;
  }

  // justification_id - computed: true, optional: false, required: false
  public get justificationId() {
    return this.getStringAttribute('justification_id');
  }

  // justification_regex - computed: false, optional: true, required: false
  private _justificationRegex?: string; 
  public get justificationRegex() {
    return this.getStringAttribute('justification_regex');
  }
  public set justificationRegex(value: string) {
    this._justificationRegex = value;
  }
  public resetJustificationRegex() {
    this._justificationRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationRegexInput() {
    return this._justificationRegex;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings britive_advanced_settings}
*/
export class AdvancedSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_advanced_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdvancedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdvancedSettings to import
  * @param importFromId The id of the existing AdvancedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdvancedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_advanced_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/advanced_settings britive_advanced_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdvancedSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AdvancedSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_advanced_settings',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.6',
        providerVersionConstraint: '2.2.6'
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
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._im.internalValue = config.im;
    this._itsm.internalValue = config.itsm;
    this._justificationSettings.internalValue = config.justificationSettings;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
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

  // im - computed: false, optional: true, required: false
  private _im = new AdvancedSettingsImOutputReference(this, "im");
  public get im() {
    return this._im;
  }
  public putIm(value: AdvancedSettingsIm) {
    this._im.internalValue = value;
  }
  public resetIm() {
    this._im.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imInput() {
    return this._im.internalValue;
  }

  // itsm - computed: false, optional: true, required: false
  private _itsm = new AdvancedSettingsItsmOutputReference(this, "itsm");
  public get itsm() {
    return this._itsm;
  }
  public putItsm(value: AdvancedSettingsItsm) {
    this._itsm.internalValue = value;
  }
  public resetItsm() {
    this._itsm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itsmInput() {
    return this._itsm.internalValue;
  }

  // justification_settings - computed: false, optional: true, required: false
  private _justificationSettings = new AdvancedSettingsJustificationSettingsOutputReference(this, "justification_settings");
  public get justificationSettings() {
    return this._justificationSettings;
  }
  public putJustificationSettings(value: AdvancedSettingsJustificationSettings) {
    this._justificationSettings.internalValue = value;
  }
  public resetJustificationSettings() {
    this._justificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationSettingsInput() {
    return this._justificationSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      im: advancedSettingsImToTerraform(this._im.internalValue),
      itsm: advancedSettingsItsmToTerraform(this._itsm.internalValue),
      justification_settings: advancedSettingsJustificationSettingsToTerraform(this._justificationSettings.internalValue),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      im: {
        value: advancedSettingsImToHclTerraform(this._im.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvancedSettingsImList",
      },
      itsm: {
        value: advancedSettingsItsmToHclTerraform(this._itsm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvancedSettingsItsmList",
      },
      justification_settings: {
        value: advancedSettingsJustificationSettingsToHclTerraform(this._justificationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvancedSettingsJustificationSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
