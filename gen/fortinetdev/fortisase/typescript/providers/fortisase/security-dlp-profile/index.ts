// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityDlpProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The direction of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#direction SecurityDlpProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#dlp_rules SecurityDlpProfile#dlp_rules}
  */
  readonly dlpRules?: SecurityDlpProfileDlpRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#primary_key SecurityDlpProfile#primary_key}
  */
  readonly primaryKey: string;
}
export interface SecurityDlpProfileDlpRulesDlpFilePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#datasource SecurityDlpProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#primary_key SecurityDlpProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securityDlpProfileDlpRulesDlpFilePatternToTerraform(struct?: SecurityDlpProfileDlpRulesDlpFilePattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securityDlpProfileDlpRulesDlpFilePatternToHclTerraform(struct?: SecurityDlpProfileDlpRulesDlpFilePattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityDlpProfileDlpRulesDlpFilePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityDlpProfileDlpRulesDlpFilePattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityDlpProfileDlpRulesDlpFilePattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface SecurityDlpProfileDlpRulesDlpSensors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#datasource SecurityDlpProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#primary_key SecurityDlpProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securityDlpProfileDlpRulesDlpSensorsToTerraform(struct?: SecurityDlpProfileDlpRulesDlpSensors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securityDlpProfileDlpRulesDlpSensorsToHclTerraform(struct?: SecurityDlpProfileDlpRulesDlpSensors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityDlpProfileDlpRulesDlpSensorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityDlpProfileDlpRulesDlpSensors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityDlpProfileDlpRulesDlpSensors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class SecurityDlpProfileDlpRulesDlpSensorsList extends cdktf.ComplexList {
  public internalValue? : SecurityDlpProfileDlpRulesDlpSensors[] | cdktf.IResolvable

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
  public get(index: number): SecurityDlpProfileDlpRulesDlpSensorsOutputReference {
    return new SecurityDlpProfileDlpRulesDlpSensorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityDlpProfileDlpRulesSensitivityLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#datasource SecurityDlpProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#primary_key SecurityDlpProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securityDlpProfileDlpRulesSensitivityLabelToTerraform(struct?: SecurityDlpProfileDlpRulesSensitivityLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securityDlpProfileDlpRulesSensitivityLabelToHclTerraform(struct?: SecurityDlpProfileDlpRulesSensitivityLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityDlpProfileDlpRulesSensitivityLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityDlpProfileDlpRulesSensitivityLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityDlpProfileDlpRulesSensitivityLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface SecurityDlpProfileDlpRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#action SecurityDlpProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#datasource_type SecurityDlpProfile#datasource_type}
  */
  readonly datasourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#dlp_file_pattern SecurityDlpProfile#dlp_file_pattern}
  */
  readonly dlpFilePattern?: SecurityDlpProfileDlpRulesDlpFilePattern;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#dlp_rule_type SecurityDlpProfile#dlp_rule_type}
  */
  readonly dlpRuleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#dlp_sensors SecurityDlpProfile#dlp_sensors}
  */
  readonly dlpSensors?: SecurityDlpProfileDlpRulesDlpSensors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#file_type SecurityDlpProfile#file_type}
  */
  readonly fileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#primary_key SecurityDlpProfile#primary_key}
  */
  readonly primaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#protocols SecurityDlpProfile#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#sensitivities SecurityDlpProfile#sensitivities}
  */
  readonly sensitivities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#sensitivity_label SecurityDlpProfile#sensitivity_label}
  */
  readonly sensitivityLabel?: SecurityDlpProfileDlpRulesSensitivityLabel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#severity SecurityDlpProfile#severity}
  */
  readonly severity?: string;
}

export function securityDlpProfileDlpRulesToTerraform(struct?: SecurityDlpProfileDlpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    datasource_type: cdktf.stringToTerraform(struct!.datasourceType),
    dlp_file_pattern: securityDlpProfileDlpRulesDlpFilePatternToTerraform(struct!.dlpFilePattern),
    dlp_rule_type: cdktf.stringToTerraform(struct!.dlpRuleType),
    dlp_sensors: cdktf.listMapper(securityDlpProfileDlpRulesDlpSensorsToTerraform, false)(struct!.dlpSensors),
    file_type: cdktf.stringToTerraform(struct!.fileType),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    sensitivities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sensitivities),
    sensitivity_label: securityDlpProfileDlpRulesSensitivityLabelToTerraform(struct!.sensitivityLabel),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function securityDlpProfileDlpRulesToHclTerraform(struct?: SecurityDlpProfileDlpRules | cdktf.IResolvable): any {
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
    datasource_type: {
      value: cdktf.stringToHclTerraform(struct!.datasourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlp_file_pattern: {
      value: securityDlpProfileDlpRulesDlpFilePatternToHclTerraform(struct!.dlpFilePattern),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityDlpProfileDlpRulesDlpFilePattern",
    },
    dlp_rule_type: {
      value: cdktf.stringToHclTerraform(struct!.dlpRuleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlp_sensors: {
      value: cdktf.listMapperHcl(securityDlpProfileDlpRulesDlpSensorsToHclTerraform, false)(struct!.dlpSensors),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityDlpProfileDlpRulesDlpSensorsList",
    },
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sensitivities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sensitivities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sensitivity_label: {
      value: securityDlpProfileDlpRulesSensitivityLabelToHclTerraform(struct!.sensitivityLabel),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityDlpProfileDlpRulesSensitivityLabel",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityDlpProfileDlpRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityDlpProfileDlpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._datasourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceType = this._datasourceType;
    }
    if (this._dlpFilePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlpFilePattern = this._dlpFilePattern?.internalValue;
    }
    if (this._dlpRuleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlpRuleType = this._dlpRuleType;
    }
    if (this._dlpSensors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlpSensors = this._dlpSensors?.internalValue;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sensitivities !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivities = this._sensitivities;
    }
    if (this._sensitivityLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityLabel = this._sensitivityLabel?.internalValue;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityDlpProfileDlpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._datasourceType = undefined;
      this._dlpFilePattern.internalValue = undefined;
      this._dlpRuleType = undefined;
      this._dlpSensors.internalValue = undefined;
      this._fileType = undefined;
      this._primaryKey = undefined;
      this._protocols = undefined;
      this._sensitivities = undefined;
      this._sensitivityLabel.internalValue = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._datasourceType = value.datasourceType;
      this._dlpFilePattern.internalValue = value.dlpFilePattern;
      this._dlpRuleType = value.dlpRuleType;
      this._dlpSensors.internalValue = value.dlpSensors;
      this._fileType = value.fileType;
      this._primaryKey = value.primaryKey;
      this._protocols = value.protocols;
      this._sensitivities = value.sensitivities;
      this._sensitivityLabel.internalValue = value.sensitivityLabel;
      this._severity = value.severity;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // datasource_type - computed: true, optional: true, required: false
  private _datasourceType?: string; 
  public get datasourceType() {
    return this.getStringAttribute('datasource_type');
  }
  public set datasourceType(value: string) {
    this._datasourceType = value;
  }
  public resetDatasourceType() {
    this._datasourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceTypeInput() {
    return this._datasourceType;
  }

  // dlp_file_pattern - computed: true, optional: true, required: false
  private _dlpFilePattern = new SecurityDlpProfileDlpRulesDlpFilePatternOutputReference(this, "dlp_file_pattern");
  public get dlpFilePattern() {
    return this._dlpFilePattern;
  }
  public putDlpFilePattern(value: SecurityDlpProfileDlpRulesDlpFilePattern) {
    this._dlpFilePattern.internalValue = value;
  }
  public resetDlpFilePattern() {
    this._dlpFilePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpFilePatternInput() {
    return this._dlpFilePattern.internalValue;
  }

  // dlp_rule_type - computed: true, optional: true, required: false
  private _dlpRuleType?: string; 
  public get dlpRuleType() {
    return this.getStringAttribute('dlp_rule_type');
  }
  public set dlpRuleType(value: string) {
    this._dlpRuleType = value;
  }
  public resetDlpRuleType() {
    this._dlpRuleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpRuleTypeInput() {
    return this._dlpRuleType;
  }

  // dlp_sensors - computed: true, optional: true, required: false
  private _dlpSensors = new SecurityDlpProfileDlpRulesDlpSensorsList(this, "dlp_sensors", false);
  public get dlpSensors() {
    return this._dlpSensors;
  }
  public putDlpSensors(value: SecurityDlpProfileDlpRulesDlpSensors[] | cdktf.IResolvable) {
    this._dlpSensors.internalValue = value;
  }
  public resetDlpSensors() {
    this._dlpSensors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpSensorsInput() {
    return this._dlpSensors.internalValue;
  }

  // file_type - computed: true, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // sensitivities - computed: true, optional: true, required: false
  private _sensitivities?: string[]; 
  public get sensitivities() {
    return cdktf.Fn.tolist(this.getListAttribute('sensitivities'));
  }
  public set sensitivities(value: string[]) {
    this._sensitivities = value;
  }
  public resetSensitivities() {
    this._sensitivities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivitiesInput() {
    return this._sensitivities;
  }

  // sensitivity_label - computed: true, optional: true, required: false
  private _sensitivityLabel = new SecurityDlpProfileDlpRulesSensitivityLabelOutputReference(this, "sensitivity_label");
  public get sensitivityLabel() {
    return this._sensitivityLabel;
  }
  public putSensitivityLabel(value: SecurityDlpProfileDlpRulesSensitivityLabel) {
    this._sensitivityLabel.internalValue = value;
  }
  public resetSensitivityLabel() {
    this._sensitivityLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityLabelInput() {
    return this._sensitivityLabel.internalValue;
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
}

export class SecurityDlpProfileDlpRulesList extends cdktf.ComplexList {
  public internalValue? : SecurityDlpProfileDlpRules[] | cdktf.IResolvable

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
  public get(index: number): SecurityDlpProfileDlpRulesOutputReference {
    return new SecurityDlpProfileDlpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile fortisase_security_dlp_profile}
*/
export class SecurityDlpProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_dlp_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityDlpProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityDlpProfile to import
  * @param importFromId The id of the existing SecurityDlpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityDlpProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_dlp_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_profile fortisase_security_dlp_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityDlpProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityDlpProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_dlp_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._direction = config.direction;
    this._dlpRules.internalValue = config.dlpRules;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // dlp_rules - computed: true, optional: true, required: false
  private _dlpRules = new SecurityDlpProfileDlpRulesList(this, "dlp_rules", false);
  public get dlpRules() {
    return this._dlpRules;
  }
  public putDlpRules(value: SecurityDlpProfileDlpRules[] | cdktf.IResolvable) {
    this._dlpRules.internalValue = value;
  }
  public resetDlpRules() {
    this._dlpRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpRulesInput() {
    return this._dlpRules.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: cdktf.stringToTerraform(this._direction),
      dlp_rules: cdktf.listMapper(securityDlpProfileDlpRulesToTerraform, false)(this._dlpRules.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_rules: {
        value: cdktf.listMapperHcl(securityDlpProfileDlpRulesToHclTerraform, false)(this._dlpRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityDlpProfileDlpRulesList",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
