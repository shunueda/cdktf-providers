// https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyCapabilitiesRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  *   This is for providing the rule action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#action PolicyCapabilitiesRule#action}
  */
  readonly action?: string;
  /**
  * This is the description of the access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#description PolicyCapabilitiesRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#microtenant_id PolicyCapabilitiesRule#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * This is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#name PolicyCapabilitiesRule#name}
  */
  readonly name: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#conditions PolicyCapabilitiesRule#conditions}
  */
  readonly conditions?: PolicyCapabilitiesRuleConditions[] | cdktf.IResolvable;
  /**
  * privileged_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#privileged_capabilities PolicyCapabilitiesRule#privileged_capabilities}
  */
  readonly privilegedCapabilities?: PolicyCapabilitiesRulePrivilegedCapabilities;
}
export interface PolicyCapabilitiesRuleConditionsOperandsEntryValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#lhs PolicyCapabilitiesRule#lhs}
  */
  readonly lhs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#rhs PolicyCapabilitiesRule#rhs}
  */
  readonly rhs?: string;
}

export function policyCapabilitiesRuleConditionsOperandsEntryValuesToTerraform(struct?: PolicyCapabilitiesRuleConditionsOperandsEntryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lhs: cdktf.stringToTerraform(struct!.lhs),
    rhs: cdktf.stringToTerraform(struct!.rhs),
  }
}


export function policyCapabilitiesRuleConditionsOperandsEntryValuesToHclTerraform(struct?: PolicyCapabilitiesRuleConditionsOperandsEntryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lhs: {
      value: cdktf.stringToHclTerraform(struct!.lhs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rhs: {
      value: cdktf.stringToHclTerraform(struct!.rhs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyCapabilitiesRuleConditionsOperandsEntryValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyCapabilitiesRuleConditionsOperandsEntryValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lhs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lhs = this._lhs;
    }
    if (this._rhs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rhs = this._rhs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyCapabilitiesRuleConditionsOperandsEntryValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lhs = undefined;
      this._rhs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lhs = value.lhs;
      this._rhs = value.rhs;
    }
  }

  // lhs - computed: false, optional: true, required: false
  private _lhs?: string; 
  public get lhs() {
    return this.getStringAttribute('lhs');
  }
  public set lhs(value: string) {
    this._lhs = value;
  }
  public resetLhs() {
    this._lhs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lhsInput() {
    return this._lhs;
  }

  // rhs - computed: false, optional: true, required: false
  private _rhs?: string; 
  public get rhs() {
    return this.getStringAttribute('rhs');
  }
  public set rhs(value: string) {
    this._rhs = value;
  }
  public resetRhs() {
    this._rhs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rhsInput() {
    return this._rhs;
  }
}

export class PolicyCapabilitiesRuleConditionsOperandsEntryValuesList extends cdktf.ComplexList {
  public internalValue? : PolicyCapabilitiesRuleConditionsOperandsEntryValues[] | cdktf.IResolvable

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
  public get(index: number): PolicyCapabilitiesRuleConditionsOperandsEntryValuesOutputReference {
    return new PolicyCapabilitiesRuleConditionsOperandsEntryValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyCapabilitiesRuleConditionsOperands {
  /**
  *   This is for specifying the policy critiera.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#object_type PolicyCapabilitiesRule#object_type}
  */
  readonly objectType?: string;
  /**
  * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#values PolicyCapabilitiesRule#values}
  */
  readonly values?: string[];
  /**
  * entry_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#entry_values PolicyCapabilitiesRule#entry_values}
  */
  readonly entryValues?: PolicyCapabilitiesRuleConditionsOperandsEntryValues[] | cdktf.IResolvable;
}

export function policyCapabilitiesRuleConditionsOperandsToTerraform(struct?: PolicyCapabilitiesRuleConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_type: cdktf.stringToTerraform(struct!.objectType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    entry_values: cdktf.listMapper(policyCapabilitiesRuleConditionsOperandsEntryValuesToTerraform, true)(struct!.entryValues),
  }
}


export function policyCapabilitiesRuleConditionsOperandsToHclTerraform(struct?: PolicyCapabilitiesRuleConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    entry_values: {
      value: cdktf.listMapperHcl(policyCapabilitiesRuleConditionsOperandsEntryValuesToHclTerraform, true)(struct!.entryValues),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyCapabilitiesRuleConditionsOperandsEntryValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyCapabilitiesRuleConditionsOperandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyCapabilitiesRuleConditionsOperands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._entryValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryValues = this._entryValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyCapabilitiesRuleConditionsOperands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectType = undefined;
      this._values = undefined;
      this._entryValues.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectType = value.objectType;
      this._values = value.values;
      this._entryValues.internalValue = value.entryValues;
    }
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // entry_values - computed: false, optional: true, required: false
  private _entryValues = new PolicyCapabilitiesRuleConditionsOperandsEntryValuesList(this, "entry_values", true);
  public get entryValues() {
    return this._entryValues;
  }
  public putEntryValues(value: PolicyCapabilitiesRuleConditionsOperandsEntryValues[] | cdktf.IResolvable) {
    this._entryValues.internalValue = value;
  }
  public resetEntryValues() {
    this._entryValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryValuesInput() {
    return this._entryValues.internalValue;
  }
}

export class PolicyCapabilitiesRuleConditionsOperandsList extends cdktf.ComplexList {
  public internalValue? : PolicyCapabilitiesRuleConditionsOperands[] | cdktf.IResolvable

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
  public get(index: number): PolicyCapabilitiesRuleConditionsOperandsOutputReference {
    return new PolicyCapabilitiesRuleConditionsOperandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyCapabilitiesRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#operator PolicyCapabilitiesRule#operator}
  */
  readonly operator?: string;
  /**
  * operands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#operands PolicyCapabilitiesRule#operands}
  */
  readonly operands?: PolicyCapabilitiesRuleConditionsOperands[] | cdktf.IResolvable;
}

export function policyCapabilitiesRuleConditionsToTerraform(struct?: PolicyCapabilitiesRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    operands: cdktf.listMapper(policyCapabilitiesRuleConditionsOperandsToTerraform, true)(struct!.operands),
  }
}


export function policyCapabilitiesRuleConditionsToHclTerraform(struct?: PolicyCapabilitiesRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operands: {
      value: cdktf.listMapperHcl(policyCapabilitiesRuleConditionsOperandsToHclTerraform, true)(struct!.operands),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyCapabilitiesRuleConditionsOperandsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyCapabilitiesRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyCapabilitiesRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._operands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operands = this._operands?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyCapabilitiesRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._operands.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._operands.internalValue = value.operands;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // operands - computed: false, optional: true, required: false
  private _operands = new PolicyCapabilitiesRuleConditionsOperandsList(this, "operands", true);
  public get operands() {
    return this._operands;
  }
  public putOperands(value: PolicyCapabilitiesRuleConditionsOperands[] | cdktf.IResolvable) {
    this._operands.internalValue = value;
  }
  public resetOperands() {
    this._operands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandsInput() {
    return this._operands.internalValue;
  }
}

export class PolicyCapabilitiesRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyCapabilitiesRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyCapabilitiesRuleConditionsOutputReference {
    return new PolicyCapabilitiesRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyCapabilitiesRulePrivilegedCapabilities {
  /**
  * Indicates the PRA Clipboard Copy function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#clipboard_copy PolicyCapabilitiesRule#clipboard_copy}
  */
  readonly clipboardCopy?: boolean | cdktf.IResolvable;
  /**
  * Indicates the PRA Clipboard Paste function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#clipboard_paste PolicyCapabilitiesRule#clipboard_paste}
  */
  readonly clipboardPaste?: boolean | cdktf.IResolvable;
  /**
  * Indicates the PRA File Transfer capabilities that enables the File Download function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#file_download PolicyCapabilitiesRule#file_download}
  */
  readonly fileDownload?: boolean | cdktf.IResolvable;
  /**
  * Indicates the PRA File Transfer capabilities that enables the File Upload function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#file_upload PolicyCapabilitiesRule#file_upload}
  */
  readonly fileUpload?: boolean | cdktf.IResolvable;
  /**
  * Inspects the file via ZIA sandbox (if you have set up the ZIA cloud and the Integrations settings) and downloads the file following the inspection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#inspect_file_download PolicyCapabilitiesRule#inspect_file_download}
  */
  readonly inspectFileDownload?: boolean | cdktf.IResolvable;
  /**
  * Inspects the file via ZIA sandbox (if you have set up the ZIA cloud and the Integrations settings) and uploads the file following the inspection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#inspect_file_upload PolicyCapabilitiesRule#inspect_file_upload}
  */
  readonly inspectFileUpload?: boolean | cdktf.IResolvable;
  /**
  * Indicates the PRA Monitoring Capabilities to enable the PRA Session Monitoring function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#monitor_session PolicyCapabilitiesRule#monitor_session}
  */
  readonly monitorSession?: boolean | cdktf.IResolvable;
  /**
  * Indicates the PRA Session Recording capabilities to enable PRA Session Recording
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#record_session PolicyCapabilitiesRule#record_session}
  */
  readonly recordSession?: boolean | cdktf.IResolvable;
  /**
  * Indicates the PRA Session Control and Monitoring capabilities to enable PRA Session Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#share_session PolicyCapabilitiesRule#share_session}
  */
  readonly shareSession?: boolean | cdktf.IResolvable;
}

export function policyCapabilitiesRulePrivilegedCapabilitiesToTerraform(struct?: PolicyCapabilitiesRulePrivilegedCapabilitiesOutputReference | PolicyCapabilitiesRulePrivilegedCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clipboard_copy: cdktf.booleanToTerraform(struct!.clipboardCopy),
    clipboard_paste: cdktf.booleanToTerraform(struct!.clipboardPaste),
    file_download: cdktf.booleanToTerraform(struct!.fileDownload),
    file_upload: cdktf.booleanToTerraform(struct!.fileUpload),
    inspect_file_download: cdktf.booleanToTerraform(struct!.inspectFileDownload),
    inspect_file_upload: cdktf.booleanToTerraform(struct!.inspectFileUpload),
    monitor_session: cdktf.booleanToTerraform(struct!.monitorSession),
    record_session: cdktf.booleanToTerraform(struct!.recordSession),
    share_session: cdktf.booleanToTerraform(struct!.shareSession),
  }
}


export function policyCapabilitiesRulePrivilegedCapabilitiesToHclTerraform(struct?: PolicyCapabilitiesRulePrivilegedCapabilitiesOutputReference | PolicyCapabilitiesRulePrivilegedCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clipboard_copy: {
      value: cdktf.booleanToHclTerraform(struct!.clipboardCopy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clipboard_paste: {
      value: cdktf.booleanToHclTerraform(struct!.clipboardPaste),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_download: {
      value: cdktf.booleanToHclTerraform(struct!.fileDownload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_upload: {
      value: cdktf.booleanToHclTerraform(struct!.fileUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inspect_file_download: {
      value: cdktf.booleanToHclTerraform(struct!.inspectFileDownload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inspect_file_upload: {
      value: cdktf.booleanToHclTerraform(struct!.inspectFileUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_session: {
      value: cdktf.booleanToHclTerraform(struct!.monitorSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_session: {
      value: cdktf.booleanToHclTerraform(struct!.recordSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    share_session: {
      value: cdktf.booleanToHclTerraform(struct!.shareSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyCapabilitiesRulePrivilegedCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyCapabilitiesRulePrivilegedCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clipboardCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipboardCopy = this._clipboardCopy;
    }
    if (this._clipboardPaste !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipboardPaste = this._clipboardPaste;
    }
    if (this._fileDownload !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileDownload = this._fileDownload;
    }
    if (this._fileUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUpload = this._fileUpload;
    }
    if (this._inspectFileDownload !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectFileDownload = this._inspectFileDownload;
    }
    if (this._inspectFileUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectFileUpload = this._inspectFileUpload;
    }
    if (this._monitorSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorSession = this._monitorSession;
    }
    if (this._recordSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSession = this._recordSession;
    }
    if (this._shareSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareSession = this._shareSession;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyCapabilitiesRulePrivilegedCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clipboardCopy = undefined;
      this._clipboardPaste = undefined;
      this._fileDownload = undefined;
      this._fileUpload = undefined;
      this._inspectFileDownload = undefined;
      this._inspectFileUpload = undefined;
      this._monitorSession = undefined;
      this._recordSession = undefined;
      this._shareSession = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clipboardCopy = value.clipboardCopy;
      this._clipboardPaste = value.clipboardPaste;
      this._fileDownload = value.fileDownload;
      this._fileUpload = value.fileUpload;
      this._inspectFileDownload = value.inspectFileDownload;
      this._inspectFileUpload = value.inspectFileUpload;
      this._monitorSession = value.monitorSession;
      this._recordSession = value.recordSession;
      this._shareSession = value.shareSession;
    }
  }

  // clipboard_copy - computed: false, optional: true, required: false
  private _clipboardCopy?: boolean | cdktf.IResolvable; 
  public get clipboardCopy() {
    return this.getBooleanAttribute('clipboard_copy');
  }
  public set clipboardCopy(value: boolean | cdktf.IResolvable) {
    this._clipboardCopy = value;
  }
  public resetClipboardCopy() {
    this._clipboardCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardCopyInput() {
    return this._clipboardCopy;
  }

  // clipboard_paste - computed: false, optional: true, required: false
  private _clipboardPaste?: boolean | cdktf.IResolvable; 
  public get clipboardPaste() {
    return this.getBooleanAttribute('clipboard_paste');
  }
  public set clipboardPaste(value: boolean | cdktf.IResolvable) {
    this._clipboardPaste = value;
  }
  public resetClipboardPaste() {
    this._clipboardPaste = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardPasteInput() {
    return this._clipboardPaste;
  }

  // file_download - computed: false, optional: true, required: false
  private _fileDownload?: boolean | cdktf.IResolvable; 
  public get fileDownload() {
    return this.getBooleanAttribute('file_download');
  }
  public set fileDownload(value: boolean | cdktf.IResolvable) {
    this._fileDownload = value;
  }
  public resetFileDownload() {
    this._fileDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDownloadInput() {
    return this._fileDownload;
  }

  // file_upload - computed: false, optional: true, required: false
  private _fileUpload?: boolean | cdktf.IResolvable; 
  public get fileUpload() {
    return this.getBooleanAttribute('file_upload');
  }
  public set fileUpload(value: boolean | cdktf.IResolvable) {
    this._fileUpload = value;
  }
  public resetFileUpload() {
    this._fileUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUploadInput() {
    return this._fileUpload;
  }

  // inspect_file_download - computed: false, optional: true, required: false
  private _inspectFileDownload?: boolean | cdktf.IResolvable; 
  public get inspectFileDownload() {
    return this.getBooleanAttribute('inspect_file_download');
  }
  public set inspectFileDownload(value: boolean | cdktf.IResolvable) {
    this._inspectFileDownload = value;
  }
  public resetInspectFileDownload() {
    this._inspectFileDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectFileDownloadInput() {
    return this._inspectFileDownload;
  }

  // inspect_file_upload - computed: false, optional: true, required: false
  private _inspectFileUpload?: boolean | cdktf.IResolvable; 
  public get inspectFileUpload() {
    return this.getBooleanAttribute('inspect_file_upload');
  }
  public set inspectFileUpload(value: boolean | cdktf.IResolvable) {
    this._inspectFileUpload = value;
  }
  public resetInspectFileUpload() {
    this._inspectFileUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectFileUploadInput() {
    return this._inspectFileUpload;
  }

  // monitor_session - computed: false, optional: true, required: false
  private _monitorSession?: boolean | cdktf.IResolvable; 
  public get monitorSession() {
    return this.getBooleanAttribute('monitor_session');
  }
  public set monitorSession(value: boolean | cdktf.IResolvable) {
    this._monitorSession = value;
  }
  public resetMonitorSession() {
    this._monitorSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorSessionInput() {
    return this._monitorSession;
  }

  // record_session - computed: false, optional: true, required: false
  private _recordSession?: boolean | cdktf.IResolvable; 
  public get recordSession() {
    return this.getBooleanAttribute('record_session');
  }
  public set recordSession(value: boolean | cdktf.IResolvable) {
    this._recordSession = value;
  }
  public resetRecordSession() {
    this._recordSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSessionInput() {
    return this._recordSession;
  }

  // share_session - computed: false, optional: true, required: false
  private _shareSession?: boolean | cdktf.IResolvable; 
  public get shareSession() {
    return this.getBooleanAttribute('share_session');
  }
  public set shareSession(value: boolean | cdktf.IResolvable) {
    this._shareSession = value;
  }
  public resetShareSession() {
    this._shareSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareSessionInput() {
    return this._shareSession;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule zpa_policy_capabilities_rule}
*/
export class PolicyCapabilitiesRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_policy_capabilities_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyCapabilitiesRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyCapabilitiesRule to import
  * @param importFromId The id of the existing PolicyCapabilitiesRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyCapabilitiesRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_policy_capabilities_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/policy_capabilities_rule zpa_policy_capabilities_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyCapabilitiesRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyCapabilitiesRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_policy_capabilities_rule',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.4',
        providerVersionConstraint: '4.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._conditions.internalValue = config.conditions;
    this._privilegedCapabilities.internalValue = config.privilegedCapabilities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // policy_set_id - computed: true, optional: false, required: false
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new PolicyCapabilitiesRuleConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyCapabilitiesRuleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // privileged_capabilities - computed: false, optional: true, required: false
  private _privilegedCapabilities = new PolicyCapabilitiesRulePrivilegedCapabilitiesOutputReference(this, "privileged_capabilities");
  public get privilegedCapabilities() {
    return this._privilegedCapabilities;
  }
  public putPrivilegedCapabilities(value: PolicyCapabilitiesRulePrivilegedCapabilities) {
    this._privilegedCapabilities.internalValue = value;
  }
  public resetPrivilegedCapabilities() {
    this._privilegedCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedCapabilitiesInput() {
    return this._privilegedCapabilities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      conditions: cdktf.listMapper(policyCapabilitiesRuleConditionsToTerraform, true)(this._conditions.internalValue),
      privileged_capabilities: policyCapabilitiesRulePrivilegedCapabilitiesToTerraform(this._privilegedCapabilities.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      conditions: {
        value: cdktf.listMapperHcl(policyCapabilitiesRuleConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyCapabilitiesRuleConditionsList",
      },
      privileged_capabilities: {
        value: policyCapabilitiesRulePrivilegedCapabilitiesToHclTerraform(this._privilegedCapabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyCapabilitiesRulePrivilegedCapabilitiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
