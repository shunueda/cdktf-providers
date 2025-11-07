// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CicdScanPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Scan Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#description CicdScanPolicy#description}
  */
  readonly description?: string;
  /**
  * Name of the Scan Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#name CicdScanPolicy#name}
  */
  readonly name: string;
  /**
  * disk_secrets_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#disk_secrets_params CicdScanPolicy#disk_secrets_params}
  */
  readonly diskSecretsParams?: CicdScanPolicyDiskSecretsParams;
  /**
  * disk_vulnerabilities_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#disk_vulnerabilities_params CicdScanPolicy#disk_vulnerabilities_params}
  */
  readonly diskVulnerabilitiesParams?: CicdScanPolicyDiskVulnerabilitiesParams;
  /**
  * iac_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#iac_params CicdScanPolicy#iac_params}
  */
  readonly iacParams?: CicdScanPolicyIacParams;
}
export interface CicdScanPolicyDiskSecretsParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}
  */
  readonly countThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}
  */
  readonly pathAllowList?: string[];
}

export function cicdScanPolicyDiskSecretsParamsToTerraform(struct?: CicdScanPolicyDiskSecretsParamsOutputReference | CicdScanPolicyDiskSecretsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count_threshold: cdktf.numberToTerraform(struct!.countThreshold),
    path_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pathAllowList),
  }
}


export function cicdScanPolicyDiskSecretsParamsToHclTerraform(struct?: CicdScanPolicyDiskSecretsParamsOutputReference | CicdScanPolicyDiskSecretsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count_threshold: {
      value: cdktf.numberToHclTerraform(struct!.countThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path_allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pathAllowList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CicdScanPolicyDiskSecretsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CicdScanPolicyDiskSecretsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.countThreshold = this._countThreshold;
    }
    if (this._pathAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathAllowList = this._pathAllowList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CicdScanPolicyDiskSecretsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countThreshold = undefined;
      this._pathAllowList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countThreshold = value.countThreshold;
      this._pathAllowList = value.pathAllowList;
    }
  }

  // count_threshold - computed: false, optional: false, required: true
  private _countThreshold?: number; 
  public get countThreshold() {
    return this.getNumberAttribute('count_threshold');
  }
  public set countThreshold(value: number) {
    this._countThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countThresholdInput() {
    return this._countThreshold;
  }

  // path_allow_list - computed: false, optional: true, required: false
  private _pathAllowList?: string[]; 
  public get pathAllowList() {
    return this.getListAttribute('path_allow_list');
  }
  public set pathAllowList(value: string[]) {
    this._pathAllowList = value;
  }
  public resetPathAllowList() {
    this._pathAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathAllowListInput() {
    return this._pathAllowList;
  }
}
export interface CicdScanPolicyDiskVulnerabilitiesParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}
  */
  readonly ignoreUnfixed: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}
  */
  readonly packageAllowList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}
  */
  readonly packageCountThreshold: number;
  /**
  * Severity.
  *     - Allowed values: 
  *         - INFORMATIONAL
  *         - LOW
  *         - MEDIUM
  *         - HIGH
  *         - CRITICAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#severity CicdScanPolicy#severity}
  */
  readonly severity: string;
}

export function cicdScanPolicyDiskVulnerabilitiesParamsToTerraform(struct?: CicdScanPolicyDiskVulnerabilitiesParamsOutputReference | CicdScanPolicyDiskVulnerabilitiesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_unfixed: cdktf.booleanToTerraform(struct!.ignoreUnfixed),
    package_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageAllowList),
    package_count_threshold: cdktf.numberToTerraform(struct!.packageCountThreshold),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function cicdScanPolicyDiskVulnerabilitiesParamsToHclTerraform(struct?: CicdScanPolicyDiskVulnerabilitiesParamsOutputReference | CicdScanPolicyDiskVulnerabilitiesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_unfixed: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUnfixed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    package_allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageAllowList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    package_count_threshold: {
      value: cdktf.numberToHclTerraform(struct!.packageCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CicdScanPolicyDiskVulnerabilitiesParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CicdScanPolicyDiskVulnerabilitiesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreUnfixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnfixed = this._ignoreUnfixed;
    }
    if (this._packageAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageAllowList = this._packageAllowList;
    }
    if (this._packageCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageCountThreshold = this._packageCountThreshold;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CicdScanPolicyDiskVulnerabilitiesParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreUnfixed = undefined;
      this._packageAllowList = undefined;
      this._packageCountThreshold = undefined;
      this._severity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreUnfixed = value.ignoreUnfixed;
      this._packageAllowList = value.packageAllowList;
      this._packageCountThreshold = value.packageCountThreshold;
      this._severity = value.severity;
    }
  }

  // ignore_unfixed - computed: false, optional: false, required: true
  private _ignoreUnfixed?: boolean | cdktf.IResolvable; 
  public get ignoreUnfixed() {
    return this.getBooleanAttribute('ignore_unfixed');
  }
  public set ignoreUnfixed(value: boolean | cdktf.IResolvable) {
    this._ignoreUnfixed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnfixedInput() {
    return this._ignoreUnfixed;
  }

  // package_allow_list - computed: false, optional: false, required: true
  private _packageAllowList?: string[]; 
  public get packageAllowList() {
    return this.getListAttribute('package_allow_list');
  }
  public set packageAllowList(value: string[]) {
    this._packageAllowList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageAllowListInput() {
    return this._packageAllowList;
  }

  // package_count_threshold - computed: false, optional: false, required: true
  private _packageCountThreshold?: number; 
  public get packageCountThreshold() {
    return this.getNumberAttribute('package_count_threshold');
  }
  public set packageCountThreshold(value: number) {
    this._packageCountThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageCountThresholdInput() {
    return this._packageCountThreshold;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface CicdScanPolicyIacParamsCustomIgnoreTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}
  */
  readonly ignoreAllRules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}
  */
  readonly ruleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}
  */
  readonly value: string;
}

export function cicdScanPolicyIacParamsCustomIgnoreTagsToTerraform(struct?: CicdScanPolicyIacParamsCustomIgnoreTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_all_rules: cdktf.booleanToTerraform(struct!.ignoreAllRules),
    key: cdktf.stringToTerraform(struct!.key),
    rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ruleIds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cicdScanPolicyIacParamsCustomIgnoreTagsToHclTerraform(struct?: CicdScanPolicyIacParamsCustomIgnoreTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreAllRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ruleIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CicdScanPolicyIacParamsCustomIgnoreTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreAllRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreAllRules = this._ignoreAllRules;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._ruleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIds = this._ruleIds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CicdScanPolicyIacParamsCustomIgnoreTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreAllRules = undefined;
      this._key = undefined;
      this._ruleIds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreAllRules = value.ignoreAllRules;
      this._key = value.key;
      this._ruleIds = value.ruleIds;
      this._value = value.value;
    }
  }

  // ignore_all_rules - computed: false, optional: true, required: false
  private _ignoreAllRules?: boolean | cdktf.IResolvable; 
  public get ignoreAllRules() {
    return this.getBooleanAttribute('ignore_all_rules');
  }
  public set ignoreAllRules(value: boolean | cdktf.IResolvable) {
    this._ignoreAllRules = value;
  }
  public resetIgnoreAllRules() {
    this._ignoreAllRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAllRulesInput() {
    return this._ignoreAllRules;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // rule_ids - computed: false, optional: true, required: false
  private _ruleIds?: string[]; 
  public get ruleIds() {
    return this.getListAttribute('rule_ids');
  }
  public set ruleIds(value: string[]) {
    this._ruleIds = value;
  }
  public resetRuleIds() {
    this._ruleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CicdScanPolicyIacParamsCustomIgnoreTagsList extends cdktf.ComplexList {
  public internalValue? : CicdScanPolicyIacParamsCustomIgnoreTags[] | cdktf.IResolvable

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
  public get(index: number): CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference {
    return new CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CicdScanPolicyIacParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}
  */
  readonly builtinIgnoreTagsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}
  */
  readonly countThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}
  */
  readonly ignoredRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}
  */
  readonly securityFrameworks?: string[];
  /**
  * Severity threshold.
  *     - Allowed values: 
  *         - INFORMATIONAL
  *         - LOW
  *         - MEDIUM
  *         - HIGH
  *         - CRITICAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#severity_threshold CicdScanPolicy#severity_threshold}
  */
  readonly severityThreshold: string;
  /**
  * custom_ignore_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#custom_ignore_tags CicdScanPolicy#custom_ignore_tags}
  */
  readonly customIgnoreTags?: CicdScanPolicyIacParamsCustomIgnoreTags[] | cdktf.IResolvable;
}

export function cicdScanPolicyIacParamsToTerraform(struct?: CicdScanPolicyIacParamsOutputReference | CicdScanPolicyIacParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builtin_ignore_tags_enabled: cdktf.booleanToTerraform(struct!.builtinIgnoreTagsEnabled),
    count_threshold: cdktf.numberToTerraform(struct!.countThreshold),
    ignored_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredRules),
    security_frameworks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityFrameworks),
    severity_threshold: cdktf.stringToTerraform(struct!.severityThreshold),
    custom_ignore_tags: cdktf.listMapper(cicdScanPolicyIacParamsCustomIgnoreTagsToTerraform, true)(struct!.customIgnoreTags),
  }
}


export function cicdScanPolicyIacParamsToHclTerraform(struct?: CicdScanPolicyIacParamsOutputReference | CicdScanPolicyIacParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builtin_ignore_tags_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.builtinIgnoreTagsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    count_threshold: {
      value: cdktf.numberToHclTerraform(struct!.countThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignored_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_frameworks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityFrameworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severity_threshold: {
      value: cdktf.stringToHclTerraform(struct!.severityThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_ignore_tags: {
      value: cdktf.listMapperHcl(cicdScanPolicyIacParamsCustomIgnoreTagsToHclTerraform, true)(struct!.customIgnoreTags),
      isBlock: true,
      type: "set",
      storageClassType: "CicdScanPolicyIacParamsCustomIgnoreTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CicdScanPolicyIacParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CicdScanPolicyIacParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtinIgnoreTagsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtinIgnoreTagsEnabled = this._builtinIgnoreTagsEnabled;
    }
    if (this._countThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.countThreshold = this._countThreshold;
    }
    if (this._ignoredRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredRules = this._ignoredRules;
    }
    if (this._securityFrameworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityFrameworks = this._securityFrameworks;
    }
    if (this._severityThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityThreshold = this._severityThreshold;
    }
    if (this._customIgnoreTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIgnoreTags = this._customIgnoreTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CicdScanPolicyIacParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._builtinIgnoreTagsEnabled = undefined;
      this._countThreshold = undefined;
      this._ignoredRules = undefined;
      this._securityFrameworks = undefined;
      this._severityThreshold = undefined;
      this._customIgnoreTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._builtinIgnoreTagsEnabled = value.builtinIgnoreTagsEnabled;
      this._countThreshold = value.countThreshold;
      this._ignoredRules = value.ignoredRules;
      this._securityFrameworks = value.securityFrameworks;
      this._severityThreshold = value.severityThreshold;
      this._customIgnoreTags.internalValue = value.customIgnoreTags;
    }
  }

  // builtin_ignore_tags_enabled - computed: false, optional: true, required: false
  private _builtinIgnoreTagsEnabled?: boolean | cdktf.IResolvable; 
  public get builtinIgnoreTagsEnabled() {
    return this.getBooleanAttribute('builtin_ignore_tags_enabled');
  }
  public set builtinIgnoreTagsEnabled(value: boolean | cdktf.IResolvable) {
    this._builtinIgnoreTagsEnabled = value;
  }
  public resetBuiltinIgnoreTagsEnabled() {
    this._builtinIgnoreTagsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinIgnoreTagsEnabledInput() {
    return this._builtinIgnoreTagsEnabled;
  }

  // count_threshold - computed: false, optional: false, required: true
  private _countThreshold?: number; 
  public get countThreshold() {
    return this.getNumberAttribute('count_threshold');
  }
  public set countThreshold(value: number) {
    this._countThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countThresholdInput() {
    return this._countThreshold;
  }

  // ignored_rules - computed: false, optional: true, required: false
  private _ignoredRules?: string[]; 
  public get ignoredRules() {
    return this.getListAttribute('ignored_rules');
  }
  public set ignoredRules(value: string[]) {
    this._ignoredRules = value;
  }
  public resetIgnoredRules() {
    this._ignoredRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredRulesInput() {
    return this._ignoredRules;
  }

  // security_frameworks - computed: false, optional: true, required: false
  private _securityFrameworks?: string[]; 
  public get securityFrameworks() {
    return this.getListAttribute('security_frameworks');
  }
  public set securityFrameworks(value: string[]) {
    this._securityFrameworks = value;
  }
  public resetSecurityFrameworks() {
    this._securityFrameworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityFrameworksInput() {
    return this._securityFrameworks;
  }

  // severity_threshold - computed: false, optional: false, required: true
  private _severityThreshold?: string; 
  public get severityThreshold() {
    return this.getStringAttribute('severity_threshold');
  }
  public set severityThreshold(value: string) {
    this._severityThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityThresholdInput() {
    return this._severityThreshold;
  }

  // custom_ignore_tags - computed: false, optional: true, required: false
  private _customIgnoreTags = new CicdScanPolicyIacParamsCustomIgnoreTagsList(this, "custom_ignore_tags", true);
  public get customIgnoreTags() {
    return this._customIgnoreTags;
  }
  public putCustomIgnoreTags(value: CicdScanPolicyIacParamsCustomIgnoreTags[] | cdktf.IResolvable) {
    this._customIgnoreTags.internalValue = value;
  }
  public resetCustomIgnoreTags() {
    this._customIgnoreTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIgnoreTagsInput() {
    return this._customIgnoreTags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy wiz_cicd_scan_policy}
*/
export class CicdScanPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_cicd_scan_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CicdScanPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CicdScanPolicy to import
  * @param importFromId The id of the existing CicdScanPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CicdScanPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_cicd_scan_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy wiz_cicd_scan_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CicdScanPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CicdScanPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_cicd_scan_policy',
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
    this._name = config.name;
    this._diskSecretsParams.internalValue = config.diskSecretsParams;
    this._diskVulnerabilitiesParams.internalValue = config.diskVulnerabilitiesParams;
    this._iacParams.internalValue = config.iacParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // builtin - computed: true, optional: false, required: false
  public get builtin() {
    return this.getBooleanAttribute('builtin');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // disk_secrets_params - computed: false, optional: true, required: false
  private _diskSecretsParams = new CicdScanPolicyDiskSecretsParamsOutputReference(this, "disk_secrets_params");
  public get diskSecretsParams() {
    return this._diskSecretsParams;
  }
  public putDiskSecretsParams(value: CicdScanPolicyDiskSecretsParams) {
    this._diskSecretsParams.internalValue = value;
  }
  public resetDiskSecretsParams() {
    this._diskSecretsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSecretsParamsInput() {
    return this._diskSecretsParams.internalValue;
  }

  // disk_vulnerabilities_params - computed: false, optional: true, required: false
  private _diskVulnerabilitiesParams = new CicdScanPolicyDiskVulnerabilitiesParamsOutputReference(this, "disk_vulnerabilities_params");
  public get diskVulnerabilitiesParams() {
    return this._diskVulnerabilitiesParams;
  }
  public putDiskVulnerabilitiesParams(value: CicdScanPolicyDiskVulnerabilitiesParams) {
    this._diskVulnerabilitiesParams.internalValue = value;
  }
  public resetDiskVulnerabilitiesParams() {
    this._diskVulnerabilitiesParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskVulnerabilitiesParamsInput() {
    return this._diskVulnerabilitiesParams.internalValue;
  }

  // iac_params - computed: false, optional: true, required: false
  private _iacParams = new CicdScanPolicyIacParamsOutputReference(this, "iac_params");
  public get iacParams() {
    return this._iacParams;
  }
  public putIacParams(value: CicdScanPolicyIacParams) {
    this._iacParams.internalValue = value;
  }
  public resetIacParams() {
    this._iacParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iacParamsInput() {
    return this._iacParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      disk_secrets_params: cicdScanPolicyDiskSecretsParamsToTerraform(this._diskSecretsParams.internalValue),
      disk_vulnerabilities_params: cicdScanPolicyDiskVulnerabilitiesParamsToTerraform(this._diskVulnerabilitiesParams.internalValue),
      iac_params: cicdScanPolicyIacParamsToTerraform(this._iacParams.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_secrets_params: {
        value: cicdScanPolicyDiskSecretsParamsToHclTerraform(this._diskSecretsParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CicdScanPolicyDiskSecretsParamsList",
      },
      disk_vulnerabilities_params: {
        value: cicdScanPolicyDiskVulnerabilitiesParamsToHclTerraform(this._diskVulnerabilitiesParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CicdScanPolicyDiskVulnerabilitiesParamsList",
      },
      iac_params: {
        value: cicdScanPolicyIacParamsToHclTerraform(this._iacParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CicdScanPolicyIacParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
