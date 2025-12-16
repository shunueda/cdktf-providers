// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyIntrusionServiceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#description PolicyIntrusionServiceProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#display_name PolicyIntrusionServiceProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#id PolicyIntrusionServiceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#nsx_id PolicyIntrusionServiceProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Severities of signatures which are part of this profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#severities PolicyIntrusionServiceProfile#severities}
  */
  readonly severities: string[];
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#context PolicyIntrusionServiceProfile#context}
  */
  readonly context?: PolicyIntrusionServiceProfileContext;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#criteria PolicyIntrusionServiceProfile#criteria}
  */
  readonly criteria?: PolicyIntrusionServiceProfileCriteria;
  /**
  * overridden_signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#overridden_signature PolicyIntrusionServiceProfile#overridden_signature}
  */
  readonly overriddenSignature?: PolicyIntrusionServiceProfileOverriddenSignature[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#tag PolicyIntrusionServiceProfile#tag}
  */
  readonly tag?: PolicyIntrusionServiceProfileTag[] | cdktf.IResolvable;
}
export interface PolicyIntrusionServiceProfileContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#project_id PolicyIntrusionServiceProfile#project_id}
  */
  readonly projectId: string;
}

export function policyIntrusionServiceProfileContextToTerraform(struct?: PolicyIntrusionServiceProfileContextOutputReference | PolicyIntrusionServiceProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyIntrusionServiceProfileContextToHclTerraform(struct?: PolicyIntrusionServiceProfileContextOutputReference | PolicyIntrusionServiceProfileContext): any {
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

export class PolicyIntrusionServiceProfileContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyIntrusionServiceProfileContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIntrusionServiceProfileContext | undefined) {
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
export interface PolicyIntrusionServiceProfileCriteria {
  /**
  * List of attack target criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#attack_targets PolicyIntrusionServiceProfile#attack_targets}
  */
  readonly attackTargets?: string[];
  /**
  * List of attack type criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#attack_types PolicyIntrusionServiceProfile#attack_types}
  */
  readonly attackTypes?: string[];
  /**
  * Common Vulnerability Scoring System Ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#cvss PolicyIntrusionServiceProfile#cvss}
  */
  readonly cvss?: string[];
  /**
  * List of products affected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#products_affected PolicyIntrusionServiceProfile#products_affected}
  */
  readonly productsAffected?: string[];
}

export function policyIntrusionServiceProfileCriteriaToTerraform(struct?: PolicyIntrusionServiceProfileCriteriaOutputReference | PolicyIntrusionServiceProfileCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attackTargets),
    attack_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attackTypes),
    cvss: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cvss),
    products_affected: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.productsAffected),
  }
}


export function policyIntrusionServiceProfileCriteriaToHclTerraform(struct?: PolicyIntrusionServiceProfileCriteriaOutputReference | PolicyIntrusionServiceProfileCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attackTargets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attack_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attackTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cvss: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cvss),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    products_affected: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.productsAffected),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIntrusionServiceProfileCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyIntrusionServiceProfileCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attackTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackTargets = this._attackTargets;
    }
    if (this._attackTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackTypes = this._attackTypes;
    }
    if (this._cvss !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvss = this._cvss;
    }
    if (this._productsAffected !== undefined) {
      hasAnyValues = true;
      internalValueResult.productsAffected = this._productsAffected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIntrusionServiceProfileCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attackTargets = undefined;
      this._attackTypes = undefined;
      this._cvss = undefined;
      this._productsAffected = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attackTargets = value.attackTargets;
      this._attackTypes = value.attackTypes;
      this._cvss = value.cvss;
      this._productsAffected = value.productsAffected;
    }
  }

  // attack_targets - computed: false, optional: true, required: false
  private _attackTargets?: string[]; 
  public get attackTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('attack_targets'));
  }
  public set attackTargets(value: string[]) {
    this._attackTargets = value;
  }
  public resetAttackTargets() {
    this._attackTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTargetsInput() {
    return this._attackTargets;
  }

  // attack_types - computed: false, optional: true, required: false
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

  // cvss - computed: false, optional: true, required: false
  private _cvss?: string[]; 
  public get cvss() {
    return cdktf.Fn.tolist(this.getListAttribute('cvss'));
  }
  public set cvss(value: string[]) {
    this._cvss = value;
  }
  public resetCvss() {
    this._cvss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvssInput() {
    return this._cvss;
  }

  // products_affected - computed: false, optional: true, required: false
  private _productsAffected?: string[]; 
  public get productsAffected() {
    return cdktf.Fn.tolist(this.getListAttribute('products_affected'));
  }
  public set productsAffected(value: string[]) {
    this._productsAffected = value;
  }
  public resetProductsAffected() {
    this._productsAffected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsAffectedInput() {
    return this._productsAffected;
  }
}
export interface PolicyIntrusionServiceProfileOverriddenSignature {
  /**
  * This will take precedence over IDS signature action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#action PolicyIntrusionServiceProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#enabled PolicyIntrusionServiceProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#signature_id PolicyIntrusionServiceProfile#signature_id}
  */
  readonly signatureId: string;
}

export function policyIntrusionServiceProfileOverriddenSignatureToTerraform(struct?: PolicyIntrusionServiceProfileOverriddenSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    signature_id: cdktf.stringToTerraform(struct!.signatureId),
  }
}


export function policyIntrusionServiceProfileOverriddenSignatureToHclTerraform(struct?: PolicyIntrusionServiceProfileOverriddenSignature | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    signature_id: {
      value: cdktf.stringToHclTerraform(struct!.signatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIntrusionServiceProfileOverriddenSignatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServiceProfileOverriddenSignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._signatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureId = this._signatureId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIntrusionServiceProfileOverriddenSignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._signatureId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._enabled = value.enabled;
      this._signatureId = value.signatureId;
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

  // signature_id - computed: false, optional: false, required: true
  private _signatureId?: string; 
  public get signatureId() {
    return this.getStringAttribute('signature_id');
  }
  public set signatureId(value: string) {
    this._signatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureIdInput() {
    return this._signatureId;
  }
}

export class PolicyIntrusionServiceProfileOverriddenSignatureList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServiceProfileOverriddenSignature[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServiceProfileOverriddenSignatureOutputReference {
    return new PolicyIntrusionServiceProfileOverriddenSignatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIntrusionServiceProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#scope PolicyIntrusionServiceProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#tag PolicyIntrusionServiceProfile#tag}
  */
  readonly tag?: string;
}

export function policyIntrusionServiceProfileTagToTerraform(struct?: PolicyIntrusionServiceProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyIntrusionServiceProfileTagToHclTerraform(struct?: PolicyIntrusionServiceProfileTag | cdktf.IResolvable): any {
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

export class PolicyIntrusionServiceProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServiceProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIntrusionServiceProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyIntrusionServiceProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServiceProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServiceProfileTagOutputReference {
    return new PolicyIntrusionServiceProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile nsxt_policy_intrusion_service_profile}
*/
export class PolicyIntrusionServiceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_intrusion_service_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyIntrusionServiceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyIntrusionServiceProfile to import
  * @param importFromId The id of the existing PolicyIntrusionServiceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyIntrusionServiceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_intrusion_service_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_intrusion_service_profile nsxt_policy_intrusion_service_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyIntrusionServiceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyIntrusionServiceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_intrusion_service_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
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
    this._severities = config.severities;
    this._context.internalValue = config.context;
    this._criteria.internalValue = config.criteria;
    this._overriddenSignature.internalValue = config.overriddenSignature;
    this._tag.internalValue = config.tag;
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

  // severities - computed: false, optional: false, required: true
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyIntrusionServiceProfileContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyIntrusionServiceProfileContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new PolicyIntrusionServiceProfileCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: PolicyIntrusionServiceProfileCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // overridden_signature - computed: false, optional: true, required: false
  private _overriddenSignature = new PolicyIntrusionServiceProfileOverriddenSignatureList(this, "overridden_signature", true);
  public get overriddenSignature() {
    return this._overriddenSignature;
  }
  public putOverriddenSignature(value: PolicyIntrusionServiceProfileOverriddenSignature[] | cdktf.IResolvable) {
    this._overriddenSignature.internalValue = value;
  }
  public resetOverriddenSignature() {
    this._overriddenSignature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overriddenSignatureInput() {
    return this._overriddenSignature.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyIntrusionServiceProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyIntrusionServiceProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
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
      severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severities),
      context: policyIntrusionServiceProfileContextToTerraform(this._context.internalValue),
      criteria: policyIntrusionServiceProfileCriteriaToTerraform(this._criteria.internalValue),
      overridden_signature: cdktf.listMapper(policyIntrusionServiceProfileOverriddenSignatureToTerraform, true)(this._overriddenSignature.internalValue),
      tag: cdktf.listMapper(policyIntrusionServiceProfileTagToTerraform, true)(this._tag.internalValue),
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
      severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      context: {
        value: policyIntrusionServiceProfileContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyIntrusionServiceProfileContextList",
      },
      criteria: {
        value: policyIntrusionServiceProfileCriteriaToHclTerraform(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyIntrusionServiceProfileCriteriaList",
      },
      overridden_signature: {
        value: cdktf.listMapperHcl(policyIntrusionServiceProfileOverriddenSignatureToHclTerraform, true)(this._overriddenSignature.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIntrusionServiceProfileOverriddenSignatureList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyIntrusionServiceProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIntrusionServiceProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
