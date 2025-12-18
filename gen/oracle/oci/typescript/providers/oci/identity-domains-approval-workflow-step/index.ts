// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsApprovalWorkflowStepConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#approvers_expressions IdentityDomainsApprovalWorkflowStep#approvers_expressions}
  */
  readonly approversExpressions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#attribute_sets IdentityDomainsApprovalWorkflowStep#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#attributes IdentityDomainsApprovalWorkflowStep#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#authorization IdentityDomainsApprovalWorkflowStep#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#idcs_endpoint IdentityDomainsApprovalWorkflowStep#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#minimum_approvals IdentityDomainsApprovalWorkflowStep#minimum_approvals}
  */
  readonly minimumApprovals?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#ocid IdentityDomainsApprovalWorkflowStep#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#order IdentityDomainsApprovalWorkflowStep#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#resource_type_schema_version IdentityDomainsApprovalWorkflowStep#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#schemas IdentityDomainsApprovalWorkflowStep#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#type IdentityDomainsApprovalWorkflowStep#type}
  */
  readonly type: string;
  /**
  * approvers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#approvers IdentityDomainsApprovalWorkflowStep#approvers}
  */
  readonly approvers?: IdentityDomainsApprovalWorkflowStepApprovers[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#tags IdentityDomainsApprovalWorkflowStep#tags}
  */
  readonly tags?: IdentityDomainsApprovalWorkflowStepTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#timeouts IdentityDomainsApprovalWorkflowStep#timeouts}
  */
  readonly timeouts?: IdentityDomainsApprovalWorkflowStepTimeouts;
}
export interface IdentityDomainsApprovalWorkflowStepIdcsCreatedBy {
}

export function identityDomainsApprovalWorkflowStepIdcsCreatedByToTerraform(struct?: IdentityDomainsApprovalWorkflowStepIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsApprovalWorkflowStepIdcsCreatedByToHclTerraform(struct?: IdentityDomainsApprovalWorkflowStepIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentityDomainsApprovalWorkflowStepIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsApprovalWorkflowStepIdcsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsApprovalWorkflowStepIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference {
    return new IdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy {
}

export function identityDomainsApprovalWorkflowStepIdcsLastModifiedByToTerraform(struct?: IdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsApprovalWorkflowStepIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference {
    return new IdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsApprovalWorkflowStepMeta {
}

export function identityDomainsApprovalWorkflowStepMetaToTerraform(struct?: IdentityDomainsApprovalWorkflowStepMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsApprovalWorkflowStepMetaToHclTerraform(struct?: IdentityDomainsApprovalWorkflowStepMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsApprovalWorkflowStepMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentityDomainsApprovalWorkflowStepMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsApprovalWorkflowStepMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class IdentityDomainsApprovalWorkflowStepMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsApprovalWorkflowStepMetaOutputReference {
    return new IdentityDomainsApprovalWorkflowStepMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsApprovalWorkflowStepApprovers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#ocid IdentityDomainsApprovalWorkflowStep#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#type IdentityDomainsApprovalWorkflowStep#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#value IdentityDomainsApprovalWorkflowStep#value}
  */
  readonly value: string;
}

export function identityDomainsApprovalWorkflowStepApproversToTerraform(struct?: IdentityDomainsApprovalWorkflowStepApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocid: cdktf.stringToTerraform(struct!.ocid),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsApprovalWorkflowStepApproversToHclTerraform(struct?: IdentityDomainsApprovalWorkflowStepApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ocid: {
      value: cdktf.stringToHclTerraform(struct!.ocid),
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

export class IdentityDomainsApprovalWorkflowStepApproversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsApprovalWorkflowStepApprovers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocid = this._ocid;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsApprovalWorkflowStepApprovers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ocid = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ocid = value.ocid;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: true, required: false
  private _ocid?: string; 
  public get ocid() {
    return this.getStringAttribute('ocid');
  }
  public set ocid(value: string) {
    this._ocid = value;
  }
  public resetOcid() {
    this._ocid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocidInput() {
    return this._ocid;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class IdentityDomainsApprovalWorkflowStepApproversList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsApprovalWorkflowStepApprovers[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsApprovalWorkflowStepApproversOutputReference {
    return new IdentityDomainsApprovalWorkflowStepApproversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsApprovalWorkflowStepTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#key IdentityDomainsApprovalWorkflowStep#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#value IdentityDomainsApprovalWorkflowStep#value}
  */
  readonly value: string;
}

export function identityDomainsApprovalWorkflowStepTagsToTerraform(struct?: IdentityDomainsApprovalWorkflowStepTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsApprovalWorkflowStepTagsToHclTerraform(struct?: IdentityDomainsApprovalWorkflowStepTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class IdentityDomainsApprovalWorkflowStepTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsApprovalWorkflowStepTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsApprovalWorkflowStepTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class IdentityDomainsApprovalWorkflowStepTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsApprovalWorkflowStepTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsApprovalWorkflowStepTagsOutputReference {
    return new IdentityDomainsApprovalWorkflowStepTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsApprovalWorkflowStepTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#create IdentityDomainsApprovalWorkflowStep#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#delete IdentityDomainsApprovalWorkflowStep#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#update IdentityDomainsApprovalWorkflowStep#update}
  */
  readonly update?: string;
}

export function identityDomainsApprovalWorkflowStepTimeoutsToTerraform(struct?: IdentityDomainsApprovalWorkflowStepTimeouts | cdktf.IResolvable): any {
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


export function identityDomainsApprovalWorkflowStepTimeoutsToHclTerraform(struct?: IdentityDomainsApprovalWorkflowStepTimeouts | cdktf.IResolvable): any {
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

export class IdentityDomainsApprovalWorkflowStepTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsApprovalWorkflowStepTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsApprovalWorkflowStepTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step oci_identity_domains_approval_workflow_step}
*/
export class IdentityDomainsApprovalWorkflowStep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_approval_workflow_step";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsApprovalWorkflowStep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsApprovalWorkflowStep to import
  * @param importFromId The id of the existing IdentityDomainsApprovalWorkflowStep that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsApprovalWorkflowStep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_approval_workflow_step", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_approval_workflow_step oci_identity_domains_approval_workflow_step} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsApprovalWorkflowStepConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsApprovalWorkflowStepConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_approval_workflow_step',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approversExpressions = config.approversExpressions;
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._idcsEndpoint = config.idcsEndpoint;
    this._minimumApprovals = config.minimumApprovals;
    this._ocid = config.ocid;
    this._order = config.order;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._schemas = config.schemas;
    this._type = config.type;
    this._approvers.internalValue = config.approvers;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approvers_expressions - computed: true, optional: true, required: false
  private _approversExpressions?: string[]; 
  public get approversExpressions() {
    return this.getListAttribute('approvers_expressions');
  }
  public set approversExpressions(value: string[]) {
    this._approversExpressions = value;
  }
  public resetApproversExpressions() {
    this._approversExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approversExpressionsInput() {
    return this._approversExpressions;
  }

  // attribute_sets - computed: false, optional: true, required: false
  private _attributeSets?: string[]; 
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }
  public set attributeSets(value: string[]) {
    this._attributeSets = value;
  }
  public resetAttributeSets() {
    this._attributeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetsInput() {
    return this._attributeSets;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsApprovalWorkflowStepIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: false, optional: false, required: true
  private _idcsEndpoint?: string; 
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }
  public set idcsEndpoint(value: string) {
    this._idcsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsEndpointInput() {
    return this._idcsEndpoint;
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new IdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsApprovalWorkflowStepMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // minimum_approvals - computed: true, optional: true, required: false
  private _minimumApprovals?: number; 
  public get minimumApprovals() {
    return this.getNumberAttribute('minimum_approvals');
  }
  public set minimumApprovals(value: number) {
    this._minimumApprovals = value;
  }
  public resetMinimumApprovals() {
    this._minimumApprovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumApprovalsInput() {
    return this._minimumApprovals;
  }

  // ocid - computed: true, optional: true, required: false
  private _ocid?: string; 
  public get ocid() {
    return this.getStringAttribute('ocid');
  }
  public set ocid(value: string) {
    this._ocid = value;
  }
  public resetOcid() {
    this._ocid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocidInput() {
    return this._ocid;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // resource_type_schema_version - computed: false, optional: true, required: false
  private _resourceTypeSchemaVersion?: string; 
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }
  public set resourceTypeSchemaVersion(value: string) {
    this._resourceTypeSchemaVersion = value;
  }
  public resetResourceTypeSchemaVersion() {
    this._resourceTypeSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaVersionInput() {
    return this._resourceTypeSchemaVersion;
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas?: string[]; 
  public get schemas() {
    return this.getListAttribute('schemas');
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // approvers - computed: false, optional: true, required: false
  private _approvers = new IdentityDomainsApprovalWorkflowStepApproversList(this, "approvers", false);
  public get approvers() {
    return this._approvers;
  }
  public putApprovers(value: IdentityDomainsApprovalWorkflowStepApprovers[] | cdktf.IResolvable) {
    this._approvers.internalValue = value;
  }
  public resetApprovers() {
    this._approvers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approversInput() {
    return this._approvers.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsApprovalWorkflowStepTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsApprovalWorkflowStepTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityDomainsApprovalWorkflowStepTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsApprovalWorkflowStepTimeouts) {
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
      approvers_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approversExpressions),
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      minimum_approvals: cdktf.numberToTerraform(this._minimumApprovals),
      ocid: cdktf.stringToTerraform(this._ocid),
      order: cdktf.numberToTerraform(this._order),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      type: cdktf.stringToTerraform(this._type),
      approvers: cdktf.listMapper(identityDomainsApprovalWorkflowStepApproversToTerraform, true)(this._approvers.internalValue),
      tags: cdktf.listMapper(identityDomainsApprovalWorkflowStepTagsToTerraform, true)(this._tags.internalValue),
      timeouts: identityDomainsApprovalWorkflowStepTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approvers_expressions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approversExpressions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attribute_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_approvals: {
        value: cdktf.numberToHclTerraform(this._minimumApprovals),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocid: {
        value: cdktf.stringToHclTerraform(this._ocid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schemas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approvers: {
        value: cdktf.listMapperHcl(identityDomainsApprovalWorkflowStepApproversToHclTerraform, true)(this._approvers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsApprovalWorkflowStepApproversList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsApprovalWorkflowStepTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsApprovalWorkflowStepTagsList",
      },
      timeouts: {
        value: identityDomainsApprovalWorkflowStepTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsApprovalWorkflowStepTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
