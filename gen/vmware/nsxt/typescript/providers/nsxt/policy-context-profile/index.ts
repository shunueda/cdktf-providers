// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyContextProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#description PolicyContextProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#display_name PolicyContextProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#id PolicyContextProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#nsx_id PolicyContextProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * app_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#app_id PolicyContextProfile#app_id}
  */
  readonly appId?: PolicyContextProfileAppId[] | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#context PolicyContextProfile#context}
  */
  readonly context?: PolicyContextProfileContext;
  /**
  * custom_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#custom_url PolicyContextProfile#custom_url}
  */
  readonly customUrl?: PolicyContextProfileCustomUrl;
  /**
  * domain_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#domain_name PolicyContextProfile#domain_name}
  */
  readonly domainName?: PolicyContextProfileDomainName;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#tag PolicyContextProfile#tag}
  */
  readonly tag?: PolicyContextProfileTag[] | cdktf.IResolvable;
  /**
  * url_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#url_category PolicyContextProfile#url_category}
  */
  readonly urlCategory?: PolicyContextProfileUrlCategory;
}
export interface PolicyContextProfileAppIdSubAttribute {
  /**
  * Values for sub attribute key cifs_smb_version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#cifs_smb_version PolicyContextProfile#cifs_smb_version}
  */
  readonly cifsSmbVersion?: string[];
  /**
  * Values for sub attribute key tls_cipher_suite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#tls_cipher_suite PolicyContextProfile#tls_cipher_suite}
  */
  readonly tlsCipherSuite?: string[];
  /**
  * Values for sub attribute key tls_version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#tls_version PolicyContextProfile#tls_version}
  */
  readonly tlsVersion?: string[];
}

export function policyContextProfileAppIdSubAttributeToTerraform(struct?: PolicyContextProfileAppIdSubAttributeOutputReference | PolicyContextProfileAppIdSubAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cifs_smb_version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cifsSmbVersion),
    tls_cipher_suite: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsCipherSuite),
    tls_version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsVersion),
  }
}


export function policyContextProfileAppIdSubAttributeToHclTerraform(struct?: PolicyContextProfileAppIdSubAttributeOutputReference | PolicyContextProfileAppIdSubAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cifs_smb_version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cifsSmbVersion),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tls_cipher_suite: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsCipherSuite),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tls_version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsVersion),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyContextProfileAppIdSubAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyContextProfileAppIdSubAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cifsSmbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cifsSmbVersion = this._cifsSmbVersion;
    }
    if (this._tlsCipherSuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCipherSuite = this._tlsCipherSuite;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyContextProfileAppIdSubAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cifsSmbVersion = undefined;
      this._tlsCipherSuite = undefined;
      this._tlsVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cifsSmbVersion = value.cifsSmbVersion;
      this._tlsCipherSuite = value.tlsCipherSuite;
      this._tlsVersion = value.tlsVersion;
    }
  }

  // cifs_smb_version - computed: false, optional: true, required: false
  private _cifsSmbVersion?: string[]; 
  public get cifsSmbVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('cifs_smb_version'));
  }
  public set cifsSmbVersion(value: string[]) {
    this._cifsSmbVersion = value;
  }
  public resetCifsSmbVersion() {
    this._cifsSmbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsSmbVersionInput() {
    return this._cifsSmbVersion;
  }

  // tls_cipher_suite - computed: false, optional: true, required: false
  private _tlsCipherSuite?: string[]; 
  public get tlsCipherSuite() {
    return cdktf.Fn.tolist(this.getListAttribute('tls_cipher_suite'));
  }
  public set tlsCipherSuite(value: string[]) {
    this._tlsCipherSuite = value;
  }
  public resetTlsCipherSuite() {
    this._tlsCipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherSuiteInput() {
    return this._tlsCipherSuite;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string[]; 
  public get tlsVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('tls_version'));
  }
  public set tlsVersion(value: string[]) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }
}
export interface PolicyContextProfileAppId {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#description PolicyContextProfile#description}
  */
  readonly description?: string;
  /**
  * Values for attribute key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#value PolicyContextProfile#value}
  */
  readonly value: string[];
  /**
  * sub_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#sub_attribute PolicyContextProfile#sub_attribute}
  */
  readonly subAttribute?: PolicyContextProfileAppIdSubAttribute;
}

export function policyContextProfileAppIdToTerraform(struct?: PolicyContextProfileAppId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
    sub_attribute: policyContextProfileAppIdSubAttributeToTerraform(struct!.subAttribute),
  }
}


export function policyContextProfileAppIdToHclTerraform(struct?: PolicyContextProfileAppId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sub_attribute: {
      value: policyContextProfileAppIdSubAttributeToHclTerraform(struct!.subAttribute),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyContextProfileAppIdSubAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyContextProfileAppIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyContextProfileAppId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._subAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subAttribute = this._subAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyContextProfileAppId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
      this._subAttribute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
      this._subAttribute.internalValue = value.subAttribute;
    }
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

  // is_alg_type - computed: true, optional: false, required: false
  public get isAlgType() {
    return this.getBooleanAttribute('is_alg_type');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // sub_attribute - computed: false, optional: true, required: false
  private _subAttribute = new PolicyContextProfileAppIdSubAttributeOutputReference(this, "sub_attribute");
  public get subAttribute() {
    return this._subAttribute;
  }
  public putSubAttribute(value: PolicyContextProfileAppIdSubAttribute) {
    this._subAttribute.internalValue = value;
  }
  public resetSubAttribute() {
    this._subAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAttributeInput() {
    return this._subAttribute.internalValue;
  }
}

export class PolicyContextProfileAppIdList extends cdktf.ComplexList {
  public internalValue? : PolicyContextProfileAppId[] | cdktf.IResolvable

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
  public get(index: number): PolicyContextProfileAppIdOutputReference {
    return new PolicyContextProfileAppIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyContextProfileContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#project_id PolicyContextProfile#project_id}
  */
  readonly projectId: string;
}

export function policyContextProfileContextToTerraform(struct?: PolicyContextProfileContextOutputReference | PolicyContextProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyContextProfileContextToHclTerraform(struct?: PolicyContextProfileContextOutputReference | PolicyContextProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyContextProfileContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyContextProfileContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyContextProfileContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface PolicyContextProfileCustomUrl {
  /**
  * True value for this flag will be treated as a partial match for custom url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#custom_url_partial_match PolicyContextProfile#custom_url_partial_match}
  */
  readonly customUrlPartialMatch?: boolean | cdktf.IResolvable;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#description PolicyContextProfile#description}
  */
  readonly description?: string;
  /**
  * Values for attribute key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#value PolicyContextProfile#value}
  */
  readonly value: string[];
}

export function policyContextProfileCustomUrlToTerraform(struct?: PolicyContextProfileCustomUrlOutputReference | PolicyContextProfileCustomUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_url_partial_match: cdktf.booleanToTerraform(struct!.customUrlPartialMatch),
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function policyContextProfileCustomUrlToHclTerraform(struct?: PolicyContextProfileCustomUrlOutputReference | PolicyContextProfileCustomUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_url_partial_match: {
      value: cdktf.booleanToHclTerraform(struct!.customUrlPartialMatch),
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyContextProfileCustomUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyContextProfileCustomUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customUrlPartialMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUrlPartialMatch = this._customUrlPartialMatch;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyContextProfileCustomUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customUrlPartialMatch = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customUrlPartialMatch = value.customUrlPartialMatch;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // custom_url_partial_match - computed: false, optional: true, required: false
  private _customUrlPartialMatch?: boolean | cdktf.IResolvable; 
  public get customUrlPartialMatch() {
    return this.getBooleanAttribute('custom_url_partial_match');
  }
  public set customUrlPartialMatch(value: boolean | cdktf.IResolvable) {
    this._customUrlPartialMatch = value;
  }
  public resetCustomUrlPartialMatch() {
    this._customUrlPartialMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUrlPartialMatchInput() {
    return this._customUrlPartialMatch;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyContextProfileDomainName {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#description PolicyContextProfile#description}
  */
  readonly description?: string;
  /**
  * Values for attribute key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#value PolicyContextProfile#value}
  */
  readonly value: string[];
}

export function policyContextProfileDomainNameToTerraform(struct?: PolicyContextProfileDomainNameOutputReference | PolicyContextProfileDomainName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function policyContextProfileDomainNameToHclTerraform(struct?: PolicyContextProfileDomainNameOutputReference | PolicyContextProfileDomainName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyContextProfileDomainNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyContextProfileDomainName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyContextProfileDomainName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyContextProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#scope PolicyContextProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#tag PolicyContextProfile#tag}
  */
  readonly tag?: string;
}

export function policyContextProfileTagToTerraform(struct?: PolicyContextProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyContextProfileTagToHclTerraform(struct?: PolicyContextProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyContextProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyContextProfileTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyContextProfileTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyContextProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyContextProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyContextProfileTagOutputReference {
    return new PolicyContextProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyContextProfileUrlCategory {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#description PolicyContextProfile#description}
  */
  readonly description?: string;
  /**
  * Values for attribute key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#value PolicyContextProfile#value}
  */
  readonly value: string[];
}

export function policyContextProfileUrlCategoryToTerraform(struct?: PolicyContextProfileUrlCategoryOutputReference | PolicyContextProfileUrlCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function policyContextProfileUrlCategoryToHclTerraform(struct?: PolicyContextProfileUrlCategoryOutputReference | PolicyContextProfileUrlCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyContextProfileUrlCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyContextProfileUrlCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyContextProfileUrlCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile nsxt_policy_context_profile}
*/
export class PolicyContextProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_context_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyContextProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyContextProfile to import
  * @param importFromId The id of the existing PolicyContextProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyContextProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_context_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_context_profile nsxt_policy_context_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyContextProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyContextProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_context_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._appId.internalValue = config.appId;
    this._context.internalValue = config.context;
    this._customUrl.internalValue = config.customUrl;
    this._domainName.internalValue = config.domainName;
    this._tag.internalValue = config.tag;
    this._urlCategory.internalValue = config.urlCategory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // app_id - computed: false, optional: true, required: false
  private _appId = new PolicyContextProfileAppIdList(this, "app_id", true);
  public get appId() {
    return this._appId;
  }
  public putAppId(value: PolicyContextProfileAppId[] | cdktf.IResolvable) {
    this._appId.internalValue = value;
  }
  public resetAppId() {
    this._appId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId.internalValue;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyContextProfileContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyContextProfileContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // custom_url - computed: false, optional: true, required: false
  private _customUrl = new PolicyContextProfileCustomUrlOutputReference(this, "custom_url");
  public get customUrl() {
    return this._customUrl;
  }
  public putCustomUrl(value: PolicyContextProfileCustomUrl) {
    this._customUrl.internalValue = value;
  }
  public resetCustomUrl() {
    this._customUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUrlInput() {
    return this._customUrl.internalValue;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName = new PolicyContextProfileDomainNameOutputReference(this, "domain_name");
  public get domainName() {
    return this._domainName;
  }
  public putDomainName(value: PolicyContextProfileDomainName) {
    this._domainName.internalValue = value;
  }
  public resetDomainName() {
    this._domainName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyContextProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyContextProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // url_category - computed: false, optional: true, required: false
  private _urlCategory = new PolicyContextProfileUrlCategoryOutputReference(this, "url_category");
  public get urlCategory() {
    return this._urlCategory;
  }
  public putUrlCategory(value: PolicyContextProfileUrlCategory) {
    this._urlCategory.internalValue = value;
  }
  public resetUrlCategory() {
    this._urlCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoryInput() {
    return this._urlCategory.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      app_id: cdktf.listMapper(policyContextProfileAppIdToTerraform, true)(this._appId.internalValue),
      context: policyContextProfileContextToTerraform(this._context.internalValue),
      custom_url: policyContextProfileCustomUrlToTerraform(this._customUrl.internalValue),
      domain_name: policyContextProfileDomainNameToTerraform(this._domainName.internalValue),
      tag: cdktf.listMapper(policyContextProfileTagToTerraform, true)(this._tag.internalValue),
      url_category: policyContextProfileUrlCategoryToTerraform(this._urlCategory.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_id: {
        value: cdktf.listMapperHcl(policyContextProfileAppIdToHclTerraform, true)(this._appId.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyContextProfileAppIdList",
      },
      context: {
        value: policyContextProfileContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyContextProfileContextList",
      },
      custom_url: {
        value: policyContextProfileCustomUrlToHclTerraform(this._customUrl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyContextProfileCustomUrlList",
      },
      domain_name: {
        value: policyContextProfileDomainNameToHclTerraform(this._domainName.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyContextProfileDomainNameList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyContextProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyContextProfileTagList",
      },
      url_category: {
        value: policyContextProfileUrlCategoryToHclTerraform(this._urlCategory.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyContextProfileUrlCategoryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
