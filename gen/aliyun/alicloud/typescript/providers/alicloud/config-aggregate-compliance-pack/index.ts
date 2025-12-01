// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigAggregateCompliancePackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#aggregate_compliance_pack_name ConfigAggregateCompliancePack#aggregate_compliance_pack_name}
  */
  readonly aggregateCompliancePackName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#aggregator_id ConfigAggregateCompliancePack#aggregator_id}
  */
  readonly aggregatorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#compliance_pack_template_id ConfigAggregateCompliancePack#compliance_pack_template_id}
  */
  readonly compliancePackTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#description ConfigAggregateCompliancePack#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#id ConfigAggregateCompliancePack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#risk_level ConfigAggregateCompliancePack#risk_level}
  */
  readonly riskLevel: number;
  /**
  * config_rule_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#config_rule_ids ConfigAggregateCompliancePack#config_rule_ids}
  */
  readonly configRuleIds?: ConfigAggregateCompliancePackConfigRuleIds[] | cdktf.IResolvable;
  /**
  * config_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#config_rules ConfigAggregateCompliancePack#config_rules}
  */
  readonly configRules?: ConfigAggregateCompliancePackConfigRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#timeouts ConfigAggregateCompliancePack#timeouts}
  */
  readonly timeouts?: ConfigAggregateCompliancePackTimeouts;
}
export interface ConfigAggregateCompliancePackConfigRuleIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#config_rule_id ConfigAggregateCompliancePack#config_rule_id}
  */
  readonly configRuleId?: string;
}

export function configAggregateCompliancePackConfigRuleIdsToTerraform(struct?: ConfigAggregateCompliancePackConfigRuleIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_rule_id: cdktf.stringToTerraform(struct!.configRuleId),
  }
}


export function configAggregateCompliancePackConfigRuleIdsToHclTerraform(struct?: ConfigAggregateCompliancePackConfigRuleIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.configRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigAggregateCompliancePackConfigRuleIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigAggregateCompliancePackConfigRuleIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRuleId = this._configRuleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigAggregateCompliancePackConfigRuleIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configRuleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configRuleId = value.configRuleId;
    }
  }

  // config_rule_id - computed: false, optional: true, required: false
  private _configRuleId?: string; 
  public get configRuleId() {
    return this.getStringAttribute('config_rule_id');
  }
  public set configRuleId(value: string) {
    this._configRuleId = value;
  }
  public resetConfigRuleId() {
    this._configRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRuleIdInput() {
    return this._configRuleId;
  }
}

export class ConfigAggregateCompliancePackConfigRuleIdsList extends cdktf.ComplexList {
  public internalValue? : ConfigAggregateCompliancePackConfigRuleIds[] | cdktf.IResolvable

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
  public get(index: number): ConfigAggregateCompliancePackConfigRuleIdsOutputReference {
    return new ConfigAggregateCompliancePackConfigRuleIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigAggregateCompliancePackConfigRulesConfigRuleParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#parameter_name ConfigAggregateCompliancePack#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#parameter_value ConfigAggregateCompliancePack#parameter_value}
  */
  readonly parameterValue?: string;
}

export function configAggregateCompliancePackConfigRulesConfigRuleParametersToTerraform(struct?: ConfigAggregateCompliancePackConfigRulesConfigRuleParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function configAggregateCompliancePackConfigRulesConfigRuleParametersToHclTerraform(struct?: ConfigAggregateCompliancePackConfigRulesConfigRuleParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigAggregateCompliancePackConfigRulesConfigRuleParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigAggregateCompliancePackConfigRulesConfigRuleParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigAggregateCompliancePackConfigRulesConfigRuleParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class ConfigAggregateCompliancePackConfigRulesConfigRuleParametersList extends cdktf.ComplexList {
  public internalValue? : ConfigAggregateCompliancePackConfigRulesConfigRuleParameters[] | cdktf.IResolvable

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
  public get(index: number): ConfigAggregateCompliancePackConfigRulesConfigRuleParametersOutputReference {
    return new ConfigAggregateCompliancePackConfigRulesConfigRuleParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigAggregateCompliancePackConfigRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#managed_rule_identifier ConfigAggregateCompliancePack#managed_rule_identifier}
  */
  readonly managedRuleIdentifier: string;
  /**
  * config_rule_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#config_rule_parameters ConfigAggregateCompliancePack#config_rule_parameters}
  */
  readonly configRuleParameters?: ConfigAggregateCompliancePackConfigRulesConfigRuleParameters[] | cdktf.IResolvable;
}

export function configAggregateCompliancePackConfigRulesToTerraform(struct?: ConfigAggregateCompliancePackConfigRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_rule_identifier: cdktf.stringToTerraform(struct!.managedRuleIdentifier),
    config_rule_parameters: cdktf.listMapper(configAggregateCompliancePackConfigRulesConfigRuleParametersToTerraform, true)(struct!.configRuleParameters),
  }
}


export function configAggregateCompliancePackConfigRulesToHclTerraform(struct?: ConfigAggregateCompliancePackConfigRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_rule_identifier: {
      value: cdktf.stringToHclTerraform(struct!.managedRuleIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_rule_parameters: {
      value: cdktf.listMapperHcl(configAggregateCompliancePackConfigRulesConfigRuleParametersToHclTerraform, true)(struct!.configRuleParameters),
      isBlock: true,
      type: "set",
      storageClassType: "ConfigAggregateCompliancePackConfigRulesConfigRuleParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigAggregateCompliancePackConfigRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigAggregateCompliancePackConfigRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedRuleIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRuleIdentifier = this._managedRuleIdentifier;
    }
    if (this._configRuleParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRuleParameters = this._configRuleParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigAggregateCompliancePackConfigRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedRuleIdentifier = undefined;
      this._configRuleParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedRuleIdentifier = value.managedRuleIdentifier;
      this._configRuleParameters.internalValue = value.configRuleParameters;
    }
  }

  // managed_rule_identifier - computed: false, optional: false, required: true
  private _managedRuleIdentifier?: string; 
  public get managedRuleIdentifier() {
    return this.getStringAttribute('managed_rule_identifier');
  }
  public set managedRuleIdentifier(value: string) {
    this._managedRuleIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleIdentifierInput() {
    return this._managedRuleIdentifier;
  }

  // config_rule_parameters - computed: false, optional: true, required: false
  private _configRuleParameters = new ConfigAggregateCompliancePackConfigRulesConfigRuleParametersList(this, "config_rule_parameters", true);
  public get configRuleParameters() {
    return this._configRuleParameters;
  }
  public putConfigRuleParameters(value: ConfigAggregateCompliancePackConfigRulesConfigRuleParameters[] | cdktf.IResolvable) {
    this._configRuleParameters.internalValue = value;
  }
  public resetConfigRuleParameters() {
    this._configRuleParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRuleParametersInput() {
    return this._configRuleParameters.internalValue;
  }
}

export class ConfigAggregateCompliancePackConfigRulesList extends cdktf.ComplexList {
  public internalValue? : ConfigAggregateCompliancePackConfigRules[] | cdktf.IResolvable

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
  public get(index: number): ConfigAggregateCompliancePackConfigRulesOutputReference {
    return new ConfigAggregateCompliancePackConfigRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigAggregateCompliancePackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#create ConfigAggregateCompliancePack#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#delete ConfigAggregateCompliancePack#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#update ConfigAggregateCompliancePack#update}
  */
  readonly update?: string;
}

export function configAggregateCompliancePackTimeoutsToTerraform(struct?: ConfigAggregateCompliancePackTimeouts | cdktf.IResolvable): any {
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


export function configAggregateCompliancePackTimeoutsToHclTerraform(struct?: ConfigAggregateCompliancePackTimeouts | cdktf.IResolvable): any {
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

export class ConfigAggregateCompliancePackTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigAggregateCompliancePackTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigAggregateCompliancePackTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack alicloud_config_aggregate_compliance_pack}
*/
export class ConfigAggregateCompliancePack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_config_aggregate_compliance_pack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigAggregateCompliancePack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigAggregateCompliancePack to import
  * @param importFromId The id of the existing ConfigAggregateCompliancePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigAggregateCompliancePack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_config_aggregate_compliance_pack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/config_aggregate_compliance_pack alicloud_config_aggregate_compliance_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigAggregateCompliancePackConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigAggregateCompliancePackConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_config_aggregate_compliance_pack',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregateCompliancePackName = config.aggregateCompliancePackName;
    this._aggregatorId = config.aggregatorId;
    this._compliancePackTemplateId = config.compliancePackTemplateId;
    this._description = config.description;
    this._id = config.id;
    this._riskLevel = config.riskLevel;
    this._configRuleIds.internalValue = config.configRuleIds;
    this._configRules.internalValue = config.configRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_compliance_pack_name - computed: false, optional: false, required: true
  private _aggregateCompliancePackName?: string; 
  public get aggregateCompliancePackName() {
    return this.getStringAttribute('aggregate_compliance_pack_name');
  }
  public set aggregateCompliancePackName(value: string) {
    this._aggregateCompliancePackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateCompliancePackNameInput() {
    return this._aggregateCompliancePackName;
  }

  // aggregator_compliance_pack_id - computed: true, optional: false, required: false
  public get aggregatorCompliancePackId() {
    return this.getStringAttribute('aggregator_compliance_pack_id');
  }

  // aggregator_id - computed: false, optional: false, required: true
  private _aggregatorId?: string; 
  public get aggregatorId() {
    return this.getStringAttribute('aggregator_id');
  }
  public set aggregatorId(value: string) {
    this._aggregatorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorIdInput() {
    return this._aggregatorId;
  }

  // compliance_pack_template_id - computed: false, optional: true, required: false
  private _compliancePackTemplateId?: string; 
  public get compliancePackTemplateId() {
    return this.getStringAttribute('compliance_pack_template_id');
  }
  public set compliancePackTemplateId(value: string) {
    this._compliancePackTemplateId = value;
  }
  public resetCompliancePackTemplateId() {
    this._compliancePackTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compliancePackTemplateIdInput() {
    return this._compliancePackTemplateId;
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

  // risk_level - computed: false, optional: false, required: true
  private _riskLevel?: number; 
  public get riskLevel() {
    return this.getNumberAttribute('risk_level');
  }
  public set riskLevel(value: number) {
    this._riskLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // config_rule_ids - computed: false, optional: true, required: false
  private _configRuleIds = new ConfigAggregateCompliancePackConfigRuleIdsList(this, "config_rule_ids", true);
  public get configRuleIds() {
    return this._configRuleIds;
  }
  public putConfigRuleIds(value: ConfigAggregateCompliancePackConfigRuleIds[] | cdktf.IResolvable) {
    this._configRuleIds.internalValue = value;
  }
  public resetConfigRuleIds() {
    this._configRuleIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRuleIdsInput() {
    return this._configRuleIds.internalValue;
  }

  // config_rules - computed: false, optional: true, required: false
  private _configRules = new ConfigAggregateCompliancePackConfigRulesList(this, "config_rules", true);
  public get configRules() {
    return this._configRules;
  }
  public putConfigRules(value: ConfigAggregateCompliancePackConfigRules[] | cdktf.IResolvable) {
    this._configRules.internalValue = value;
  }
  public resetConfigRules() {
    this._configRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRulesInput() {
    return this._configRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConfigAggregateCompliancePackTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConfigAggregateCompliancePackTimeouts) {
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
      aggregate_compliance_pack_name: cdktf.stringToTerraform(this._aggregateCompliancePackName),
      aggregator_id: cdktf.stringToTerraform(this._aggregatorId),
      compliance_pack_template_id: cdktf.stringToTerraform(this._compliancePackTemplateId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      risk_level: cdktf.numberToTerraform(this._riskLevel),
      config_rule_ids: cdktf.listMapper(configAggregateCompliancePackConfigRuleIdsToTerraform, true)(this._configRuleIds.internalValue),
      config_rules: cdktf.listMapper(configAggregateCompliancePackConfigRulesToTerraform, true)(this._configRules.internalValue),
      timeouts: configAggregateCompliancePackTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate_compliance_pack_name: {
        value: cdktf.stringToHclTerraform(this._aggregateCompliancePackName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregator_id: {
        value: cdktf.stringToHclTerraform(this._aggregatorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_pack_template_id: {
        value: cdktf.stringToHclTerraform(this._compliancePackTemplateId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk_level: {
        value: cdktf.numberToHclTerraform(this._riskLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_rule_ids: {
        value: cdktf.listMapperHcl(configAggregateCompliancePackConfigRuleIdsToHclTerraform, true)(this._configRuleIds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConfigAggregateCompliancePackConfigRuleIdsList",
      },
      config_rules: {
        value: cdktf.listMapperHcl(configAggregateCompliancePackConfigRulesToHclTerraform, true)(this._configRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConfigAggregateCompliancePackConfigRulesList",
      },
      timeouts: {
        value: configAggregateCompliancePackTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigAggregateCompliancePackTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
