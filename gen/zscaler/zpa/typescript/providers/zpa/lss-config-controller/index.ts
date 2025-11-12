// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LssConfigControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#config LssConfigController#config}
  */
  readonly config?: LssConfigControllerConfigA;
  /**
  * connector_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#connector_groups LssConfigController#connector_groups}
  */
  readonly connectorGroups?: LssConfigControllerConnectorGroups[] | cdktf.IResolvable;
  /**
  * policy_rule_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#policy_rule_resource LssConfigController#policy_rule_resource}
  */
  readonly policyRuleResource?: LssConfigControllerPolicyRuleResource;
}
export interface LssConfigControllerConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#audit_message LssConfigController#audit_message}
  */
  readonly auditMessage?: string;
  /**
  * Description of the LSS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#description LssConfigController#description}
  */
  readonly description?: string;
  /**
  * Whether this LSS configuration is enabled or not. Supported values: true, false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#enabled LssConfigController#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Filter for the LSS configuration. Format given by the following API to get status codes: /mgmtconfig/v2/admin/lssConfig/statusCodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#filter LssConfigController#filter}
  */
  readonly filter?: string[];
  /**
  * Format of the log type. Format given by the following API to get formats: /mgmtconfig/v2/admin/lssConfig/logType/formats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#format LssConfigController#format}
  */
  readonly format: string;
  /**
  * Host of the LSS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#lss_host LssConfigController#lss_host}
  */
  readonly lssHost: string;
  /**
  * Port of the LSS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#lss_port LssConfigController#lss_port}
  */
  readonly lssPort: string;
  /**
  * Name of the LSS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#name LssConfigController#name}
  */
  readonly name: string;
  /**
  * Log type of the LSS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#source_log_type LssConfigController#source_log_type}
  */
  readonly sourceLogType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#use_tls LssConfigController#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

export function lssConfigControllerConfigAToTerraform(struct?: LssConfigControllerConfigAOutputReference | LssConfigControllerConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_message: cdktf.stringToTerraform(struct!.auditMessage),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filter),
    format: cdktf.stringToTerraform(struct!.format),
    lss_host: cdktf.stringToTerraform(struct!.lssHost),
    lss_port: cdktf.stringToTerraform(struct!.lssPort),
    name: cdktf.stringToTerraform(struct!.name),
    source_log_type: cdktf.stringToTerraform(struct!.sourceLogType),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function lssConfigControllerConfigAToHclTerraform(struct?: LssConfigControllerConfigAOutputReference | LssConfigControllerConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_message: {
      value: cdktf.stringToHclTerraform(struct!.auditMessage),
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lss_host: {
      value: cdktf.stringToHclTerraform(struct!.lssHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lss_port: {
      value: cdktf.stringToHclTerraform(struct!.lssPort),
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
    source_log_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceLogType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LssConfigControllerConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LssConfigControllerConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditMessage = this._auditMessage;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._lssHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.lssHost = this._lssHost;
    }
    if (this._lssPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.lssPort = this._lssPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceLogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLogType = this._sourceLogType;
    }
    if (this._useTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LssConfigControllerConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditMessage = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._filter = undefined;
      this._format = undefined;
      this._lssHost = undefined;
      this._lssPort = undefined;
      this._name = undefined;
      this._sourceLogType = undefined;
      this._useTls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditMessage = value.auditMessage;
      this._description = value.description;
      this._enabled = value.enabled;
      this._filter = value.filter;
      this._format = value.format;
      this._lssHost = value.lssHost;
      this._lssPort = value.lssPort;
      this._name = value.name;
      this._sourceLogType = value.sourceLogType;
      this._useTls = value.useTls;
    }
  }

  // audit_message - computed: true, optional: true, required: false
  private _auditMessage?: string; 
  public get auditMessage() {
    return this.getStringAttribute('audit_message');
  }
  public set auditMessage(value: string) {
    this._auditMessage = value;
  }
  public resetAuditMessage() {
    this._auditMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditMessageInput() {
    return this._auditMessage;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string[]; 
  public get filter() {
    return cdktf.Fn.tolist(this.getListAttribute('filter'));
  }
  public set filter(value: string[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lss_host - computed: false, optional: false, required: true
  private _lssHost?: string; 
  public get lssHost() {
    return this.getStringAttribute('lss_host');
  }
  public set lssHost(value: string) {
    this._lssHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lssHostInput() {
    return this._lssHost;
  }

  // lss_port - computed: false, optional: false, required: true
  private _lssPort?: string; 
  public get lssPort() {
    return this.getStringAttribute('lss_port');
  }
  public set lssPort(value: string) {
    this._lssPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lssPortInput() {
    return this._lssPort;
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

  // source_log_type - computed: false, optional: false, required: true
  private _sourceLogType?: string; 
  public get sourceLogType() {
    return this.getStringAttribute('source_log_type');
  }
  public set sourceLogType(value: string) {
    this._sourceLogType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLogTypeInput() {
    return this._sourceLogType;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }
}
export interface LssConfigControllerConnectorGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#id LssConfigController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
}

export function lssConfigControllerConnectorGroupsToTerraform(struct?: LssConfigControllerConnectorGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function lssConfigControllerConnectorGroupsToHclTerraform(struct?: LssConfigControllerConnectorGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LssConfigControllerConnectorGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LssConfigControllerConnectorGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LssConfigControllerConnectorGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return this.getListAttribute('id');
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class LssConfigControllerConnectorGroupsList extends cdktf.ComplexList {
  public internalValue? : LssConfigControllerConnectorGroups[] | cdktf.IResolvable

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
  public get(index: number): LssConfigControllerConnectorGroupsOutputReference {
    return new LssConfigControllerConnectorGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#lhs LssConfigController#lhs}
  */
  readonly lhs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#rhs LssConfigController#rhs}
  */
  readonly rhs?: string;
}

export function lssConfigControllerPolicyRuleResourceConditionsOperandsEntryValuesToTerraform(struct?: LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lhs: cdktf.stringToTerraform(struct!.lhs),
    rhs: cdktf.stringToTerraform(struct!.rhs),
  }
}


export function lssConfigControllerPolicyRuleResourceConditionsOperandsEntryValuesToHclTerraform(struct?: LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValues | cdktf.IResolvable): any {
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

export class LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValues | cdktf.IResolvable | undefined) {
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

export class LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValuesList extends cdktf.ComplexList {
  public internalValue? : LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValues[] | cdktf.IResolvable

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
  public get(index: number): LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValuesOutputReference {
    return new LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LssConfigControllerPolicyRuleResourceConditionsOperands {
  /**
  *   This is for specifying the policy critiera.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#object_type LssConfigController#object_type}
  */
  readonly objectType: string;
  /**
  * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#values LssConfigController#values}
  */
  readonly values?: string[];
  /**
  * entry_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#entry_values LssConfigController#entry_values}
  */
  readonly entryValues?: LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValues[] | cdktf.IResolvable;
}

export function lssConfigControllerPolicyRuleResourceConditionsOperandsToTerraform(struct?: LssConfigControllerPolicyRuleResourceConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_type: cdktf.stringToTerraform(struct!.objectType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    entry_values: cdktf.listMapper(lssConfigControllerPolicyRuleResourceConditionsOperandsEntryValuesToTerraform, true)(struct!.entryValues),
  }
}


export function lssConfigControllerPolicyRuleResourceConditionsOperandsToHclTerraform(struct?: LssConfigControllerPolicyRuleResourceConditionsOperands | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(lssConfigControllerPolicyRuleResourceConditionsOperandsEntryValuesToHclTerraform, true)(struct!.entryValues),
      isBlock: true,
      type: "list",
      storageClassType: "LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LssConfigControllerPolicyRuleResourceConditionsOperandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LssConfigControllerPolicyRuleResourceConditionsOperands | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LssConfigControllerPolicyRuleResourceConditionsOperands | cdktf.IResolvable | undefined) {
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

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
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
  private _entryValues = new LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValuesList(this, "entry_values", false);
  public get entryValues() {
    return this._entryValues;
  }
  public putEntryValues(value: LssConfigControllerPolicyRuleResourceConditionsOperandsEntryValues[] | cdktf.IResolvable) {
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

export class LssConfigControllerPolicyRuleResourceConditionsOperandsList extends cdktf.ComplexList {
  public internalValue? : LssConfigControllerPolicyRuleResourceConditionsOperands[] | cdktf.IResolvable

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
  public get(index: number): LssConfigControllerPolicyRuleResourceConditionsOperandsOutputReference {
    return new LssConfigControllerPolicyRuleResourceConditionsOperandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LssConfigControllerPolicyRuleResourceConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#operator LssConfigController#operator}
  */
  readonly operator: string;
  /**
  * operands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#operands LssConfigController#operands}
  */
  readonly operands?: LssConfigControllerPolicyRuleResourceConditionsOperands[] | cdktf.IResolvable;
}

export function lssConfigControllerPolicyRuleResourceConditionsToTerraform(struct?: LssConfigControllerPolicyRuleResourceConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    operands: cdktf.listMapper(lssConfigControllerPolicyRuleResourceConditionsOperandsToTerraform, true)(struct!.operands),
  }
}


export function lssConfigControllerPolicyRuleResourceConditionsToHclTerraform(struct?: LssConfigControllerPolicyRuleResourceConditions | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(lssConfigControllerPolicyRuleResourceConditionsOperandsToHclTerraform, true)(struct!.operands),
      isBlock: true,
      type: "list",
      storageClassType: "LssConfigControllerPolicyRuleResourceConditionsOperandsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LssConfigControllerPolicyRuleResourceConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LssConfigControllerPolicyRuleResourceConditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LssConfigControllerPolicyRuleResourceConditions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // operands - computed: false, optional: true, required: false
  private _operands = new LssConfigControllerPolicyRuleResourceConditionsOperandsList(this, "operands", false);
  public get operands() {
    return this._operands;
  }
  public putOperands(value: LssConfigControllerPolicyRuleResourceConditionsOperands[] | cdktf.IResolvable) {
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

export class LssConfigControllerPolicyRuleResourceConditionsList extends cdktf.ComplexList {
  public internalValue? : LssConfigControllerPolicyRuleResourceConditions[] | cdktf.IResolvable

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
  public get(index: number): LssConfigControllerPolicyRuleResourceConditionsOutputReference {
    return new LssConfigControllerPolicyRuleResourceConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LssConfigControllerPolicyRuleResource {
  /**
  *   This is for providing the rule action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#action LssConfigController#action}
  */
  readonly action?: string;
  /**
  * This field defines the description of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#action_id LssConfigController#action_id}
  */
  readonly actionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#bypass_default_rule LssConfigController#bypass_default_rule}
  */
  readonly bypassDefaultRule?: boolean | cdktf.IResolvable;
  /**
  * This is for providing a customer message for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#custom_msg LssConfigController#custom_msg}
  */
  readonly customMsg?: string;
  /**
  * This is for providing a customer message for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#default_rule LssConfigController#default_rule}
  */
  readonly defaultRule?: boolean | cdktf.IResolvable;
  /**
  * This is the description of the access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#description LssConfigController#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#lss_default_rule LssConfigController#lss_default_rule}
  */
  readonly lssDefaultRule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#microtenant_id LssConfigController#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * This is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#name LssConfigController#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#operator LssConfigController#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#policy_set_id LssConfigController#policy_set_id}
  */
  readonly policySetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#policy_type LssConfigController#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#priority LssConfigController#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#reauth_default_rule LssConfigController#reauth_default_rule}
  */
  readonly reauthDefaultRule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#reauth_idle_timeout LssConfigController#reauth_idle_timeout}
  */
  readonly reauthIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#reauth_timeout LssConfigController#reauth_timeout}
  */
  readonly reauthTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#rule_order LssConfigController#rule_order}
  */
  readonly ruleOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#zpn_cbi_profile_id LssConfigController#zpn_cbi_profile_id}
  */
  readonly zpnCbiProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#zpn_inspection_profile_id LssConfigController#zpn_inspection_profile_id}
  */
  readonly zpnInspectionProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#zpn_isolation_profile_id LssConfigController#zpn_isolation_profile_id}
  */
  readonly zpnIsolationProfileId?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#conditions LssConfigController#conditions}
  */
  readonly conditions?: LssConfigControllerPolicyRuleResourceConditions[] | cdktf.IResolvable;
}

export function lssConfigControllerPolicyRuleResourceToTerraform(struct?: LssConfigControllerPolicyRuleResourceOutputReference | LssConfigControllerPolicyRuleResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_id: cdktf.stringToTerraform(struct!.actionId),
    bypass_default_rule: cdktf.booleanToTerraform(struct!.bypassDefaultRule),
    custom_msg: cdktf.stringToTerraform(struct!.customMsg),
    default_rule: cdktf.booleanToTerraform(struct!.defaultRule),
    description: cdktf.stringToTerraform(struct!.description),
    lss_default_rule: cdktf.booleanToTerraform(struct!.lssDefaultRule),
    microtenant_id: cdktf.stringToTerraform(struct!.microtenantId),
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    policy_set_id: cdktf.stringToTerraform(struct!.policySetId),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    priority: cdktf.stringToTerraform(struct!.priority),
    reauth_default_rule: cdktf.booleanToTerraform(struct!.reauthDefaultRule),
    reauth_idle_timeout: cdktf.stringToTerraform(struct!.reauthIdleTimeout),
    reauth_timeout: cdktf.stringToTerraform(struct!.reauthTimeout),
    rule_order: cdktf.stringToTerraform(struct!.ruleOrder),
    zpn_cbi_profile_id: cdktf.stringToTerraform(struct!.zpnCbiProfileId),
    zpn_inspection_profile_id: cdktf.stringToTerraform(struct!.zpnInspectionProfileId),
    zpn_isolation_profile_id: cdktf.stringToTerraform(struct!.zpnIsolationProfileId),
    conditions: cdktf.listMapper(lssConfigControllerPolicyRuleResourceConditionsToTerraform, true)(struct!.conditions),
  }
}


export function lssConfigControllerPolicyRuleResourceToHclTerraform(struct?: LssConfigControllerPolicyRuleResourceOutputReference | LssConfigControllerPolicyRuleResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_id: {
      value: cdktf.stringToHclTerraform(struct!.actionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_default_rule: {
      value: cdktf.booleanToHclTerraform(struct!.bypassDefaultRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_msg: {
      value: cdktf.stringToHclTerraform(struct!.customMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_rule: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lss_default_rule: {
      value: cdktf.booleanToHclTerraform(struct!.lssDefaultRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    microtenant_id: {
      value: cdktf.stringToHclTerraform(struct!.microtenantId),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_set_id: {
      value: cdktf.stringToHclTerraform(struct!.policySetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
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
    reauth_default_rule: {
      value: cdktf.booleanToHclTerraform(struct!.reauthDefaultRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reauth_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.reauthIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reauth_timeout: {
      value: cdktf.stringToHclTerraform(struct!.reauthTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_order: {
      value: cdktf.stringToHclTerraform(struct!.ruleOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zpn_cbi_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.zpnCbiProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zpn_inspection_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.zpnInspectionProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zpn_isolation_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.zpnIsolationProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(lssConfigControllerPolicyRuleResourceConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "LssConfigControllerPolicyRuleResourceConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LssConfigControllerPolicyRuleResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LssConfigControllerPolicyRuleResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionId = this._actionId;
    }
    if (this._bypassDefaultRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassDefaultRule = this._bypassDefaultRule;
    }
    if (this._customMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMsg = this._customMsg;
    }
    if (this._defaultRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRule = this._defaultRule;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._lssDefaultRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.lssDefaultRule = this._lssDefaultRule;
    }
    if (this._microtenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.microtenantId = this._microtenantId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._policySetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policySetId = this._policySetId;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._reauthDefaultRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthDefaultRule = this._reauthDefaultRule;
    }
    if (this._reauthIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthIdleTimeout = this._reauthIdleTimeout;
    }
    if (this._reauthTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthTimeout = this._reauthTimeout;
    }
    if (this._ruleOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOrder = this._ruleOrder;
    }
    if (this._zpnCbiProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zpnCbiProfileId = this._zpnCbiProfileId;
    }
    if (this._zpnInspectionProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zpnInspectionProfileId = this._zpnInspectionProfileId;
    }
    if (this._zpnIsolationProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zpnIsolationProfileId = this._zpnIsolationProfileId;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LssConfigControllerPolicyRuleResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._actionId = undefined;
      this._bypassDefaultRule = undefined;
      this._customMsg = undefined;
      this._defaultRule = undefined;
      this._description = undefined;
      this._lssDefaultRule = undefined;
      this._microtenantId = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._policySetId = undefined;
      this._policyType = undefined;
      this._priority = undefined;
      this._reauthDefaultRule = undefined;
      this._reauthIdleTimeout = undefined;
      this._reauthTimeout = undefined;
      this._ruleOrder = undefined;
      this._zpnCbiProfileId = undefined;
      this._zpnInspectionProfileId = undefined;
      this._zpnIsolationProfileId = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._actionId = value.actionId;
      this._bypassDefaultRule = value.bypassDefaultRule;
      this._customMsg = value.customMsg;
      this._defaultRule = value.defaultRule;
      this._description = value.description;
      this._lssDefaultRule = value.lssDefaultRule;
      this._microtenantId = value.microtenantId;
      this._name = value.name;
      this._operator = value.operator;
      this._policySetId = value.policySetId;
      this._policyType = value.policyType;
      this._priority = value.priority;
      this._reauthDefaultRule = value.reauthDefaultRule;
      this._reauthIdleTimeout = value.reauthIdleTimeout;
      this._reauthTimeout = value.reauthTimeout;
      this._ruleOrder = value.ruleOrder;
      this._zpnCbiProfileId = value.zpnCbiProfileId;
      this._zpnInspectionProfileId = value.zpnInspectionProfileId;
      this._zpnIsolationProfileId = value.zpnIsolationProfileId;
      this._conditions.internalValue = value.conditions;
    }
  }

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

  // action_id - computed: false, optional: true, required: false
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  public resetActionId() {
    this._actionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }

  // bypass_default_rule - computed: true, optional: true, required: false
  private _bypassDefaultRule?: boolean | cdktf.IResolvable; 
  public get bypassDefaultRule() {
    return this.getBooleanAttribute('bypass_default_rule');
  }
  public set bypassDefaultRule(value: boolean | cdktf.IResolvable) {
    this._bypassDefaultRule = value;
  }
  public resetBypassDefaultRule() {
    this._bypassDefaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassDefaultRuleInput() {
    return this._bypassDefaultRule;
  }

  // custom_msg - computed: true, optional: true, required: false
  private _customMsg?: string; 
  public get customMsg() {
    return this.getStringAttribute('custom_msg');
  }
  public set customMsg(value: string) {
    this._customMsg = value;
  }
  public resetCustomMsg() {
    this._customMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMsgInput() {
    return this._customMsg;
  }

  // default_rule - computed: true, optional: true, required: false
  private _defaultRule?: boolean | cdktf.IResolvable; 
  public get defaultRule() {
    return this.getBooleanAttribute('default_rule');
  }
  public set defaultRule(value: boolean | cdktf.IResolvable) {
    this._defaultRule = value;
  }
  public resetDefaultRule() {
    this._defaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuleInput() {
    return this._defaultRule;
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

  // lss_default_rule - computed: false, optional: true, required: false
  private _lssDefaultRule?: boolean | cdktf.IResolvable; 
  public get lssDefaultRule() {
    return this.getBooleanAttribute('lss_default_rule');
  }
  public set lssDefaultRule(value: boolean | cdktf.IResolvable) {
    this._lssDefaultRule = value;
  }
  public resetLssDefaultRule() {
    this._lssDefaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lssDefaultRuleInput() {
    return this._lssDefaultRule;
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

  // policy_set_id - computed: false, optional: true, required: false
  private _policySetId?: string; 
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }
  public set policySetId(value: string) {
    this._policySetId = value;
  }
  public resetPolicySetId() {
    this._policySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetIdInput() {
    return this._policySetId;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // reauth_default_rule - computed: true, optional: true, required: false
  private _reauthDefaultRule?: boolean | cdktf.IResolvable; 
  public get reauthDefaultRule() {
    return this.getBooleanAttribute('reauth_default_rule');
  }
  public set reauthDefaultRule(value: boolean | cdktf.IResolvable) {
    this._reauthDefaultRule = value;
  }
  public resetReauthDefaultRule() {
    this._reauthDefaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthDefaultRuleInput() {
    return this._reauthDefaultRule;
  }

  // reauth_idle_timeout - computed: false, optional: true, required: false
  private _reauthIdleTimeout?: string; 
  public get reauthIdleTimeout() {
    return this.getStringAttribute('reauth_idle_timeout');
  }
  public set reauthIdleTimeout(value: string) {
    this._reauthIdleTimeout = value;
  }
  public resetReauthIdleTimeout() {
    this._reauthIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthIdleTimeoutInput() {
    return this._reauthIdleTimeout;
  }

  // reauth_timeout - computed: false, optional: true, required: false
  private _reauthTimeout?: string; 
  public get reauthTimeout() {
    return this.getStringAttribute('reauth_timeout');
  }
  public set reauthTimeout(value: string) {
    this._reauthTimeout = value;
  }
  public resetReauthTimeout() {
    this._reauthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthTimeoutInput() {
    return this._reauthTimeout;
  }

  // rule_order - computed: true, optional: true, required: false
  private _ruleOrder?: string; 
  public get ruleOrder() {
    return this.getStringAttribute('rule_order');
  }
  public set ruleOrder(value: string) {
    this._ruleOrder = value;
  }
  public resetRuleOrder() {
    this._ruleOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }

  // zpn_cbi_profile_id - computed: true, optional: true, required: false
  private _zpnCbiProfileId?: string; 
  public get zpnCbiProfileId() {
    return this.getStringAttribute('zpn_cbi_profile_id');
  }
  public set zpnCbiProfileId(value: string) {
    this._zpnCbiProfileId = value;
  }
  public resetZpnCbiProfileId() {
    this._zpnCbiProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpnCbiProfileIdInput() {
    return this._zpnCbiProfileId;
  }

  // zpn_inspection_profile_id - computed: true, optional: true, required: false
  private _zpnInspectionProfileId?: string; 
  public get zpnInspectionProfileId() {
    return this.getStringAttribute('zpn_inspection_profile_id');
  }
  public set zpnInspectionProfileId(value: string) {
    this._zpnInspectionProfileId = value;
  }
  public resetZpnInspectionProfileId() {
    this._zpnInspectionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpnInspectionProfileIdInput() {
    return this._zpnInspectionProfileId;
  }

  // zpn_isolation_profile_id - computed: true, optional: true, required: false
  private _zpnIsolationProfileId?: string; 
  public get zpnIsolationProfileId() {
    return this.getStringAttribute('zpn_isolation_profile_id');
  }
  public set zpnIsolationProfileId(value: string) {
    this._zpnIsolationProfileId = value;
  }
  public resetZpnIsolationProfileId() {
    this._zpnIsolationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpnIsolationProfileIdInput() {
    return this._zpnIsolationProfileId;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new LssConfigControllerPolicyRuleResourceConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: LssConfigControllerPolicyRuleResourceConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller zpa_lss_config_controller}
*/
export class LssConfigController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_lss_config_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LssConfigController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LssConfigController to import
  * @param importFromId The id of the existing LssConfigController that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LssConfigController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_lss_config_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/lss_config_controller zpa_lss_config_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LssConfigControllerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LssConfigControllerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_lss_config_controller',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2',
        providerVersionConstraint: '4.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._connectorGroups.internalValue = config.connectorGroups;
    this._policyRuleResource.internalValue = config.policyRuleResource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_rule_id - computed: true, optional: false, required: false
  public get policyRuleId() {
    return this.getStringAttribute('policy_rule_id');
  }

  // config - computed: false, optional: true, required: false
  private _config = new LssConfigControllerConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: LssConfigControllerConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // connector_groups - computed: false, optional: true, required: false
  private _connectorGroups = new LssConfigControllerConnectorGroupsList(this, "connector_groups", true);
  public get connectorGroups() {
    return this._connectorGroups;
  }
  public putConnectorGroups(value: LssConfigControllerConnectorGroups[] | cdktf.IResolvable) {
    this._connectorGroups.internalValue = value;
  }
  public resetConnectorGroups() {
    this._connectorGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorGroupsInput() {
    return this._connectorGroups.internalValue;
  }

  // policy_rule_resource - computed: false, optional: true, required: false
  private _policyRuleResource = new LssConfigControllerPolicyRuleResourceOutputReference(this, "policy_rule_resource");
  public get policyRuleResource() {
    return this._policyRuleResource;
  }
  public putPolicyRuleResource(value: LssConfigControllerPolicyRuleResource) {
    this._policyRuleResource.internalValue = value;
  }
  public resetPolicyRuleResource() {
    this._policyRuleResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleResourceInput() {
    return this._policyRuleResource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: lssConfigControllerConfigAToTerraform(this._config.internalValue),
      connector_groups: cdktf.listMapper(lssConfigControllerConnectorGroupsToTerraform, true)(this._connectorGroups.internalValue),
      policy_rule_resource: lssConfigControllerPolicyRuleResourceToTerraform(this._policyRuleResource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: lssConfigControllerConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LssConfigControllerConfigAList",
      },
      connector_groups: {
        value: cdktf.listMapperHcl(lssConfigControllerConnectorGroupsToHclTerraform, true)(this._connectorGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LssConfigControllerConnectorGroupsList",
      },
      policy_rule_resource: {
        value: lssConfigControllerPolicyRuleResourceToHclTerraform(this._policyRuleResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LssConfigControllerPolicyRuleResourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
