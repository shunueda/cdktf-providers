// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityIpsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#botnet_scanning SecurityIpsProfile#botnet_scanning}
  */
  readonly botnetScanning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#comment SecurityIpsProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#custom_rule_groups SecurityIpsProfile#custom_rule_groups}
  */
  readonly customRuleGroups?: SecurityIpsProfileCustomRuleGroups[] | cdktf.IResolvable;
  /**
  * The direction of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#direction SecurityIpsProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#entries SecurityIpsProfile#entries}
  */
  readonly entries?: SecurityIpsProfileEntries[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#is_blocking_malicious_url SecurityIpsProfile#is_blocking_malicious_url}
  */
  readonly isBlockingMaliciousUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#is_extended_log_enabled SecurityIpsProfile#is_extended_log_enabled}
  */
  readonly isExtendedLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#primary_key SecurityIpsProfile#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#profile_type SecurityIpsProfile#profile_type}
  */
  readonly profileType?: string;
}
export interface SecurityIpsProfileCustomRuleGroupsSignatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#datasource SecurityIpsProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#primary_key SecurityIpsProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securityIpsProfileCustomRuleGroupsSignaturesToTerraform(struct?: SecurityIpsProfileCustomRuleGroupsSignatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securityIpsProfileCustomRuleGroupsSignaturesToHclTerraform(struct?: SecurityIpsProfileCustomRuleGroupsSignatures | cdktf.IResolvable): any {
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

export class SecurityIpsProfileCustomRuleGroupsSignaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityIpsProfileCustomRuleGroupsSignatures | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityIpsProfileCustomRuleGroupsSignatures | cdktf.IResolvable | undefined) {
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

export class SecurityIpsProfileCustomRuleGroupsSignaturesList extends cdktf.ComplexList {
  public internalValue? : SecurityIpsProfileCustomRuleGroupsSignatures[] | cdktf.IResolvable

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
  public get(index: number): SecurityIpsProfileCustomRuleGroupsSignaturesOutputReference {
    return new SecurityIpsProfileCustomRuleGroupsSignaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityIpsProfileCustomRuleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#action SecurityIpsProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#signatures SecurityIpsProfile#signatures}
  */
  readonly signatures?: SecurityIpsProfileCustomRuleGroupsSignatures[] | cdktf.IResolvable;
}

export function securityIpsProfileCustomRuleGroupsToTerraform(struct?: SecurityIpsProfileCustomRuleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    signatures: cdktf.listMapper(securityIpsProfileCustomRuleGroupsSignaturesToTerraform, false)(struct!.signatures),
  }
}


export function securityIpsProfileCustomRuleGroupsToHclTerraform(struct?: SecurityIpsProfileCustomRuleGroups | cdktf.IResolvable): any {
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
    signatures: {
      value: cdktf.listMapperHcl(securityIpsProfileCustomRuleGroupsSignaturesToHclTerraform, false)(struct!.signatures),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityIpsProfileCustomRuleGroupsSignaturesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIpsProfileCustomRuleGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityIpsProfileCustomRuleGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._signatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatures = this._signatures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIpsProfileCustomRuleGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._signatures.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._signatures.internalValue = value.signatures;
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

  // signatures - computed: true, optional: true, required: false
  private _signatures = new SecurityIpsProfileCustomRuleGroupsSignaturesList(this, "signatures", false);
  public get signatures() {
    return this._signatures;
  }
  public putSignatures(value: SecurityIpsProfileCustomRuleGroupsSignatures[] | cdktf.IResolvable) {
    this._signatures.internalValue = value;
  }
  public resetSignatures() {
    this._signatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturesInput() {
    return this._signatures.internalValue;
  }
}

export class SecurityIpsProfileCustomRuleGroupsList extends cdktf.ComplexList {
  public internalValue? : SecurityIpsProfileCustomRuleGroups[] | cdktf.IResolvable

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
  public get(index: number): SecurityIpsProfileCustomRuleGroupsOutputReference {
    return new SecurityIpsProfileCustomRuleGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityIpsProfileEntriesExemptIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#dst_ip SecurityIpsProfile#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#id SecurityIpsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#src_ip SecurityIpsProfile#src_ip}
  */
  readonly srcIp?: string;
}

export function securityIpsProfileEntriesExemptIpToTerraform(struct?: SecurityIpsProfileEntriesExemptIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ip: cdktf.stringToTerraform(struct!.dstIp),
    id: cdktf.numberToTerraform(struct!.id),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
  }
}


export function securityIpsProfileEntriesExemptIpToHclTerraform(struct?: SecurityIpsProfileEntriesExemptIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.dstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIpsProfileEntriesExemptIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityIpsProfileEntriesExemptIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIpsProfileEntriesExemptIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstIp = undefined;
      this._id = undefined;
      this._srcIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstIp = value.dstIp;
      this._id = value.id;
      this._srcIp = value.srcIp;
    }
  }

  // dst_ip - computed: true, optional: true, required: false
  private _dstIp?: string; 
  public get dstIp() {
    return this.getStringAttribute('dst_ip');
  }
  public set dstIp(value: string) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // src_ip - computed: true, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }
}

export class SecurityIpsProfileEntriesExemptIpList extends cdktf.ComplexList {
  public internalValue? : SecurityIpsProfileEntriesExemptIp[] | cdktf.IResolvable

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
  public get(index: number): SecurityIpsProfileEntriesExemptIpOutputReference {
    return new SecurityIpsProfileEntriesExemptIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityIpsProfileEntriesRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#datasource SecurityIpsProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#primary_key SecurityIpsProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securityIpsProfileEntriesRuleToTerraform(struct?: SecurityIpsProfileEntriesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securityIpsProfileEntriesRuleToHclTerraform(struct?: SecurityIpsProfileEntriesRule | cdktf.IResolvable): any {
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

export class SecurityIpsProfileEntriesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityIpsProfileEntriesRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityIpsProfileEntriesRule | cdktf.IResolvable | undefined) {
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

export class SecurityIpsProfileEntriesRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityIpsProfileEntriesRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityIpsProfileEntriesRuleOutputReference {
    return new SecurityIpsProfileEntriesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityIpsProfileEntriesVulnType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#id SecurityIpsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function securityIpsProfileEntriesVulnTypeToTerraform(struct?: SecurityIpsProfileEntriesVulnType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function securityIpsProfileEntriesVulnTypeToHclTerraform(struct?: SecurityIpsProfileEntriesVulnType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIpsProfileEntriesVulnTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityIpsProfileEntriesVulnType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityIpsProfileEntriesVulnType | cdktf.IResolvable | undefined) {
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

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

export class SecurityIpsProfileEntriesVulnTypeList extends cdktf.ComplexList {
  public internalValue? : SecurityIpsProfileEntriesVulnType[] | cdktf.IResolvable

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
  public get(index: number): SecurityIpsProfileEntriesVulnTypeOutputReference {
    return new SecurityIpsProfileEntriesVulnTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityIpsProfileEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#action SecurityIpsProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#application SecurityIpsProfile#application}
  */
  readonly application?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#cve SecurityIpsProfile#cve}
  */
  readonly cve?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#default_action SecurityIpsProfile#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#default_status SecurityIpsProfile#default_status}
  */
  readonly defaultStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#exempt_ip SecurityIpsProfile#exempt_ip}
  */
  readonly exemptIp?: SecurityIpsProfileEntriesExemptIp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#location SecurityIpsProfile#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#log SecurityIpsProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#log_attack_context SecurityIpsProfile#log_attack_context}
  */
  readonly logAttackContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#log_packet SecurityIpsProfile#log_packet}
  */
  readonly logPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#os SecurityIpsProfile#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#protocol SecurityIpsProfile#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#quarantine SecurityIpsProfile#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#rule SecurityIpsProfile#rule}
  */
  readonly rule?: SecurityIpsProfileEntriesRule[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#severity SecurityIpsProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#status SecurityIpsProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#vuln_type SecurityIpsProfile#vuln_type}
  */
  readonly vulnType?: SecurityIpsProfileEntriesVulnType[] | cdktf.IResolvable;
}

export function securityIpsProfileEntriesToTerraform(struct?: SecurityIpsProfileEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    application: cdktf.stringToTerraform(struct!.application),
    cve: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cve),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    default_status: cdktf.stringToTerraform(struct!.defaultStatus),
    exempt_ip: cdktf.listMapper(securityIpsProfileEntriesExemptIpToTerraform, false)(struct!.exemptIp),
    location: cdktf.stringToTerraform(struct!.location),
    log: cdktf.stringToTerraform(struct!.log),
    log_attack_context: cdktf.stringToTerraform(struct!.logAttackContext),
    log_packet: cdktf.stringToTerraform(struct!.logPacket),
    os: cdktf.stringToTerraform(struct!.os),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    rule: cdktf.listMapper(securityIpsProfileEntriesRuleToTerraform, false)(struct!.rule),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
    vuln_type: cdktf.listMapper(securityIpsProfileEntriesVulnTypeToTerraform, false)(struct!.vulnType),
  }
}


export function securityIpsProfileEntriesToHclTerraform(struct?: SecurityIpsProfileEntries | cdktf.IResolvable): any {
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
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cve: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cve),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_status: {
      value: cdktf.stringToHclTerraform(struct!.defaultStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exempt_ip: {
      value: cdktf.listMapperHcl(securityIpsProfileEntriesExemptIpToHclTerraform, false)(struct!.exemptIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityIpsProfileEntriesExemptIpList",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_attack_context: {
      value: cdktf.stringToHclTerraform(struct!.logAttackContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_packet: {
      value: cdktf.stringToHclTerraform(struct!.logPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.listMapperHcl(securityIpsProfileEntriesRuleToHclTerraform, false)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityIpsProfileEntriesRuleList",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vuln_type: {
      value: cdktf.listMapperHcl(securityIpsProfileEntriesVulnTypeToHclTerraform, false)(struct!.vulnType),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityIpsProfileEntriesVulnTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIpsProfileEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityIpsProfileEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._cve !== undefined) {
      hasAnyValues = true;
      internalValueResult.cve = this._cve;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._defaultStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStatus = this._defaultStatus;
    }
    if (this._exemptIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptIp = this._exemptIp?.internalValue;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logAttackContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAttackContext = this._logAttackContext;
    }
    if (this._logPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPacket = this._logPacket;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._vulnType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnType = this._vulnType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIpsProfileEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._application = undefined;
      this._cve = undefined;
      this._defaultAction = undefined;
      this._defaultStatus = undefined;
      this._exemptIp.internalValue = undefined;
      this._location = undefined;
      this._log = undefined;
      this._logAttackContext = undefined;
      this._logPacket = undefined;
      this._os = undefined;
      this._protocol = undefined;
      this._quarantine = undefined;
      this._rule.internalValue = undefined;
      this._severity = undefined;
      this._status = undefined;
      this._vulnType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._application = value.application;
      this._cve = value.cve;
      this._defaultAction = value.defaultAction;
      this._defaultStatus = value.defaultStatus;
      this._exemptIp.internalValue = value.exemptIp;
      this._location = value.location;
      this._log = value.log;
      this._logAttackContext = value.logAttackContext;
      this._logPacket = value.logPacket;
      this._os = value.os;
      this._protocol = value.protocol;
      this._quarantine = value.quarantine;
      this._rule.internalValue = value.rule;
      this._severity = value.severity;
      this._status = value.status;
      this._vulnType.internalValue = value.vulnType;
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

  // application - computed: true, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // cve - computed: true, optional: true, required: false
  private _cve?: string[]; 
  public get cve() {
    return cdktf.Fn.tolist(this.getListAttribute('cve'));
  }
  public set cve(value: string[]) {
    this._cve = value;
  }
  public resetCve() {
    this._cve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveInput() {
    return this._cve;
  }

  // default_action - computed: true, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // default_status - computed: true, optional: true, required: false
  private _defaultStatus?: string; 
  public get defaultStatus() {
    return this.getStringAttribute('default_status');
  }
  public set defaultStatus(value: string) {
    this._defaultStatus = value;
  }
  public resetDefaultStatus() {
    this._defaultStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStatusInput() {
    return this._defaultStatus;
  }

  // exempt_ip - computed: true, optional: true, required: false
  private _exemptIp = new SecurityIpsProfileEntriesExemptIpList(this, "exempt_ip", false);
  public get exemptIp() {
    return this._exemptIp;
  }
  public putExemptIp(value: SecurityIpsProfileEntriesExemptIp[] | cdktf.IResolvable) {
    this._exemptIp.internalValue = value;
  }
  public resetExemptIp() {
    this._exemptIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptIpInput() {
    return this._exemptIp.internalValue;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_attack_context - computed: true, optional: true, required: false
  private _logAttackContext?: string; 
  public get logAttackContext() {
    return this.getStringAttribute('log_attack_context');
  }
  public set logAttackContext(value: string) {
    this._logAttackContext = value;
  }
  public resetLogAttackContext() {
    this._logAttackContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAttackContextInput() {
    return this._logAttackContext;
  }

  // log_packet - computed: true, optional: true, required: false
  private _logPacket?: string; 
  public get logPacket() {
    return this.getStringAttribute('log_packet');
  }
  public set logPacket(value: string) {
    this._logPacket = value;
  }
  public resetLogPacket() {
    this._logPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPacketInput() {
    return this._logPacket;
  }

  // os - computed: true, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // rule - computed: true, optional: true, required: false
  private _rule = new SecurityIpsProfileEntriesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityIpsProfileEntriesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vuln_type - computed: true, optional: true, required: false
  private _vulnType = new SecurityIpsProfileEntriesVulnTypeList(this, "vuln_type", false);
  public get vulnType() {
    return this._vulnType;
  }
  public putVulnType(value: SecurityIpsProfileEntriesVulnType[] | cdktf.IResolvable) {
    this._vulnType.internalValue = value;
  }
  public resetVulnType() {
    this._vulnType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnTypeInput() {
    return this._vulnType.internalValue;
  }
}

export class SecurityIpsProfileEntriesList extends cdktf.ComplexList {
  public internalValue? : SecurityIpsProfileEntries[] | cdktf.IResolvable

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
  public get(index: number): SecurityIpsProfileEntriesOutputReference {
    return new SecurityIpsProfileEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile fortisase_security_ips_profile}
*/
export class SecurityIpsProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_ips_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityIpsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityIpsProfile to import
  * @param importFromId The id of the existing SecurityIpsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityIpsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_ips_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ips_profile fortisase_security_ips_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityIpsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityIpsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_ips_profile',
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
    this._botnetScanning = config.botnetScanning;
    this._comment = config.comment;
    this._customRuleGroups.internalValue = config.customRuleGroups;
    this._direction = config.direction;
    this._entries.internalValue = config.entries;
    this._isBlockingMaliciousUrl = config.isBlockingMaliciousUrl;
    this._isExtendedLogEnabled = config.isExtendedLogEnabled;
    this._primaryKey = config.primaryKey;
    this._profileType = config.profileType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // botnet_scanning - computed: true, optional: true, required: false
  private _botnetScanning?: string; 
  public get botnetScanning() {
    return this.getStringAttribute('botnet_scanning');
  }
  public set botnetScanning(value: string) {
    this._botnetScanning = value;
  }
  public resetBotnetScanning() {
    this._botnetScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botnetScanningInput() {
    return this._botnetScanning;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // custom_rule_groups - computed: true, optional: true, required: false
  private _customRuleGroups = new SecurityIpsProfileCustomRuleGroupsList(this, "custom_rule_groups", false);
  public get customRuleGroups() {
    return this._customRuleGroups;
  }
  public putCustomRuleGroups(value: SecurityIpsProfileCustomRuleGroups[] | cdktf.IResolvable) {
    this._customRuleGroups.internalValue = value;
  }
  public resetCustomRuleGroups() {
    this._customRuleGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuleGroupsInput() {
    return this._customRuleGroups.internalValue;
  }

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

  // entries - computed: true, optional: true, required: false
  private _entries = new SecurityIpsProfileEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: SecurityIpsProfileEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_blocking_malicious_url - computed: true, optional: true, required: false
  private _isBlockingMaliciousUrl?: boolean | cdktf.IResolvable; 
  public get isBlockingMaliciousUrl() {
    return this.getBooleanAttribute('is_blocking_malicious_url');
  }
  public set isBlockingMaliciousUrl(value: boolean | cdktf.IResolvable) {
    this._isBlockingMaliciousUrl = value;
  }
  public resetIsBlockingMaliciousUrl() {
    this._isBlockingMaliciousUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBlockingMaliciousUrlInput() {
    return this._isBlockingMaliciousUrl;
  }

  // is_extended_log_enabled - computed: true, optional: true, required: false
  private _isExtendedLogEnabled?: boolean | cdktf.IResolvable; 
  public get isExtendedLogEnabled() {
    return this.getBooleanAttribute('is_extended_log_enabled');
  }
  public set isExtendedLogEnabled(value: boolean | cdktf.IResolvable) {
    this._isExtendedLogEnabled = value;
  }
  public resetIsExtendedLogEnabled() {
    this._isExtendedLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExtendedLogEnabledInput() {
    return this._isExtendedLogEnabled;
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

  // profile_type - computed: true, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      botnet_scanning: cdktf.stringToTerraform(this._botnetScanning),
      comment: cdktf.stringToTerraform(this._comment),
      custom_rule_groups: cdktf.listMapper(securityIpsProfileCustomRuleGroupsToTerraform, false)(this._customRuleGroups.internalValue),
      direction: cdktf.stringToTerraform(this._direction),
      entries: cdktf.listMapper(securityIpsProfileEntriesToTerraform, false)(this._entries.internalValue),
      is_blocking_malicious_url: cdktf.booleanToTerraform(this._isBlockingMaliciousUrl),
      is_extended_log_enabled: cdktf.booleanToTerraform(this._isExtendedLogEnabled),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      profile_type: cdktf.stringToTerraform(this._profileType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      botnet_scanning: {
        value: cdktf.stringToHclTerraform(this._botnetScanning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_rule_groups: {
        value: cdktf.listMapperHcl(securityIpsProfileCustomRuleGroupsToHclTerraform, false)(this._customRuleGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityIpsProfileCustomRuleGroupsList",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(securityIpsProfileEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityIpsProfileEntriesList",
      },
      is_blocking_malicious_url: {
        value: cdktf.booleanToHclTerraform(this._isBlockingMaliciousUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_extended_log_enabled: {
        value: cdktf.booleanToHclTerraform(this._isExtendedLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
