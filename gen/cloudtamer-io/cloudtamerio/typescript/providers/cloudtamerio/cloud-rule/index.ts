// https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#description CloudRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#last_updated CloudRule#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#name CloudRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#post_webhook_id CloudRule#post_webhook_id}
  */
  readonly postWebhookId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#pre_webhook_id CloudRule#pre_webhook_id}
  */
  readonly preWebhookId?: number;
  /**
  * aws_cloudformation_templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#aws_cloudformation_templates CloudRule#aws_cloudformation_templates}
  */
  readonly awsCloudformationTemplates?: CloudRuleAwsCloudformationTemplates[] | cdktf.IResolvable;
  /**
  * aws_iam_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#aws_iam_policies CloudRule#aws_iam_policies}
  */
  readonly awsIamPolicies?: CloudRuleAwsIamPolicies[] | cdktf.IResolvable;
  /**
  * azure_arm_template_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#azure_arm_template_definitions CloudRule#azure_arm_template_definitions}
  */
  readonly azureArmTemplateDefinitions?: CloudRuleAzureArmTemplateDefinitions[] | cdktf.IResolvable;
  /**
  * azure_policy_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#azure_policy_definitions CloudRule#azure_policy_definitions}
  */
  readonly azurePolicyDefinitions?: CloudRuleAzurePolicyDefinitions[] | cdktf.IResolvable;
  /**
  * azure_role_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#azure_role_definitions CloudRule#azure_role_definitions}
  */
  readonly azureRoleDefinitions?: CloudRuleAzureRoleDefinitions[] | cdktf.IResolvable;
  /**
  * compliance_standards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#compliance_standards CloudRule#compliance_standards}
  */
  readonly complianceStandards?: CloudRuleComplianceStandards[] | cdktf.IResolvable;
  /**
  * gcp_iam_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#gcp_iam_roles CloudRule#gcp_iam_roles}
  */
  readonly gcpIamRoles?: CloudRuleGcpIamRoles[] | cdktf.IResolvable;
  /**
  * internal_aws_amis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#internal_aws_amis CloudRule#internal_aws_amis}
  */
  readonly internalAwsAmis?: CloudRuleInternalAwsAmis[] | cdktf.IResolvable;
  /**
  * internal_aws_service_catalog_portfolios block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#internal_aws_service_catalog_portfolios CloudRule#internal_aws_service_catalog_portfolios}
  */
  readonly internalAwsServiceCatalogPortfolios?: CloudRuleInternalAwsServiceCatalogPortfolios[] | cdktf.IResolvable;
  /**
  * ous block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#ous CloudRule#ous}
  */
  readonly ous?: CloudRuleOus[] | cdktf.IResolvable;
  /**
  * owner_user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#owner_user_groups CloudRule#owner_user_groups}
  */
  readonly ownerUserGroups?: CloudRuleOwnerUserGroups[] | cdktf.IResolvable;
  /**
  * owner_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#owner_users CloudRule#owner_users}
  */
  readonly ownerUsers?: CloudRuleOwnerUsers[] | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#projects CloudRule#projects}
  */
  readonly projects?: CloudRuleProjects[] | cdktf.IResolvable;
  /**
  * service_control_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#service_control_policies CloudRule#service_control_policies}
  */
  readonly serviceControlPolicies?: CloudRuleServiceControlPolicies[] | cdktf.IResolvable;
}
export interface CloudRuleAwsCloudformationTemplates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleAwsCloudformationTemplatesToTerraform(struct?: CloudRuleAwsCloudformationTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleAwsCloudformationTemplatesToHclTerraform(struct?: CloudRuleAwsCloudformationTemplates | cdktf.IResolvable): any {
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

export class CloudRuleAwsCloudformationTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleAwsCloudformationTemplates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleAwsCloudformationTemplates | cdktf.IResolvable | undefined) {
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

export class CloudRuleAwsCloudformationTemplatesList extends cdktf.ComplexList {
  public internalValue? : CloudRuleAwsCloudformationTemplates[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleAwsCloudformationTemplatesOutputReference {
    return new CloudRuleAwsCloudformationTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleAwsIamPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleAwsIamPoliciesToTerraform(struct?: CloudRuleAwsIamPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleAwsIamPoliciesToHclTerraform(struct?: CloudRuleAwsIamPolicies | cdktf.IResolvable): any {
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

export class CloudRuleAwsIamPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleAwsIamPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleAwsIamPolicies | cdktf.IResolvable | undefined) {
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

export class CloudRuleAwsIamPoliciesList extends cdktf.ComplexList {
  public internalValue? : CloudRuleAwsIamPolicies[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleAwsIamPoliciesOutputReference {
    return new CloudRuleAwsIamPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleAzureArmTemplateDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleAzureArmTemplateDefinitionsToTerraform(struct?: CloudRuleAzureArmTemplateDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleAzureArmTemplateDefinitionsToHclTerraform(struct?: CloudRuleAzureArmTemplateDefinitions | cdktf.IResolvable): any {
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

export class CloudRuleAzureArmTemplateDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleAzureArmTemplateDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleAzureArmTemplateDefinitions | cdktf.IResolvable | undefined) {
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

export class CloudRuleAzureArmTemplateDefinitionsList extends cdktf.ComplexList {
  public internalValue? : CloudRuleAzureArmTemplateDefinitions[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleAzureArmTemplateDefinitionsOutputReference {
    return new CloudRuleAzureArmTemplateDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleAzurePolicyDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleAzurePolicyDefinitionsToTerraform(struct?: CloudRuleAzurePolicyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleAzurePolicyDefinitionsToHclTerraform(struct?: CloudRuleAzurePolicyDefinitions | cdktf.IResolvable): any {
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

export class CloudRuleAzurePolicyDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleAzurePolicyDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleAzurePolicyDefinitions | cdktf.IResolvable | undefined) {
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

export class CloudRuleAzurePolicyDefinitionsList extends cdktf.ComplexList {
  public internalValue? : CloudRuleAzurePolicyDefinitions[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleAzurePolicyDefinitionsOutputReference {
    return new CloudRuleAzurePolicyDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleAzureRoleDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleAzureRoleDefinitionsToTerraform(struct?: CloudRuleAzureRoleDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleAzureRoleDefinitionsToHclTerraform(struct?: CloudRuleAzureRoleDefinitions | cdktf.IResolvable): any {
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

export class CloudRuleAzureRoleDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleAzureRoleDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleAzureRoleDefinitions | cdktf.IResolvable | undefined) {
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

export class CloudRuleAzureRoleDefinitionsList extends cdktf.ComplexList {
  public internalValue? : CloudRuleAzureRoleDefinitions[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleAzureRoleDefinitionsOutputReference {
    return new CloudRuleAzureRoleDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleComplianceStandards {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleComplianceStandardsToTerraform(struct?: CloudRuleComplianceStandards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleComplianceStandardsToHclTerraform(struct?: CloudRuleComplianceStandards | cdktf.IResolvable): any {
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

export class CloudRuleComplianceStandardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleComplianceStandards | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleComplianceStandards | cdktf.IResolvable | undefined) {
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

export class CloudRuleComplianceStandardsList extends cdktf.ComplexList {
  public internalValue? : CloudRuleComplianceStandards[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleComplianceStandardsOutputReference {
    return new CloudRuleComplianceStandardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleGcpIamRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleGcpIamRolesToTerraform(struct?: CloudRuleGcpIamRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleGcpIamRolesToHclTerraform(struct?: CloudRuleGcpIamRoles | cdktf.IResolvable): any {
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

export class CloudRuleGcpIamRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleGcpIamRoles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleGcpIamRoles | cdktf.IResolvable | undefined) {
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

export class CloudRuleGcpIamRolesList extends cdktf.ComplexList {
  public internalValue? : CloudRuleGcpIamRoles[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleGcpIamRolesOutputReference {
    return new CloudRuleGcpIamRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleInternalAwsAmis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleInternalAwsAmisToTerraform(struct?: CloudRuleInternalAwsAmis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleInternalAwsAmisToHclTerraform(struct?: CloudRuleInternalAwsAmis | cdktf.IResolvable): any {
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

export class CloudRuleInternalAwsAmisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleInternalAwsAmis | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleInternalAwsAmis | cdktf.IResolvable | undefined) {
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

export class CloudRuleInternalAwsAmisList extends cdktf.ComplexList {
  public internalValue? : CloudRuleInternalAwsAmis[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleInternalAwsAmisOutputReference {
    return new CloudRuleInternalAwsAmisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleInternalAwsServiceCatalogPortfolios {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleInternalAwsServiceCatalogPortfoliosToTerraform(struct?: CloudRuleInternalAwsServiceCatalogPortfolios | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleInternalAwsServiceCatalogPortfoliosToHclTerraform(struct?: CloudRuleInternalAwsServiceCatalogPortfolios | cdktf.IResolvable): any {
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

export class CloudRuleInternalAwsServiceCatalogPortfoliosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleInternalAwsServiceCatalogPortfolios | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleInternalAwsServiceCatalogPortfolios | cdktf.IResolvable | undefined) {
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

export class CloudRuleInternalAwsServiceCatalogPortfoliosList extends cdktf.ComplexList {
  public internalValue? : CloudRuleInternalAwsServiceCatalogPortfolios[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleInternalAwsServiceCatalogPortfoliosOutputReference {
    return new CloudRuleInternalAwsServiceCatalogPortfoliosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleOus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleOusToTerraform(struct?: CloudRuleOus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleOusToHclTerraform(struct?: CloudRuleOus | cdktf.IResolvable): any {
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

export class CloudRuleOusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleOus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleOus | cdktf.IResolvable | undefined) {
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

export class CloudRuleOusList extends cdktf.ComplexList {
  public internalValue? : CloudRuleOus[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleOusOutputReference {
    return new CloudRuleOusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleOwnerUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleOwnerUserGroupsToTerraform(struct?: CloudRuleOwnerUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleOwnerUserGroupsToHclTerraform(struct?: CloudRuleOwnerUserGroups | cdktf.IResolvable): any {
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

export class CloudRuleOwnerUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleOwnerUserGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleOwnerUserGroups | cdktf.IResolvable | undefined) {
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

export class CloudRuleOwnerUserGroupsList extends cdktf.ComplexList {
  public internalValue? : CloudRuleOwnerUserGroups[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleOwnerUserGroupsOutputReference {
    return new CloudRuleOwnerUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleOwnerUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleOwnerUsersToTerraform(struct?: CloudRuleOwnerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleOwnerUsersToHclTerraform(struct?: CloudRuleOwnerUsers | cdktf.IResolvable): any {
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

export class CloudRuleOwnerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleOwnerUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleOwnerUsers | cdktf.IResolvable | undefined) {
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

export class CloudRuleOwnerUsersList extends cdktf.ComplexList {
  public internalValue? : CloudRuleOwnerUsers[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleOwnerUsersOutputReference {
    return new CloudRuleOwnerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleProjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleProjectsToTerraform(struct?: CloudRuleProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleProjectsToHclTerraform(struct?: CloudRuleProjects | cdktf.IResolvable): any {
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

export class CloudRuleProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleProjects | cdktf.IResolvable | undefined) {
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

export class CloudRuleProjectsList extends cdktf.ComplexList {
  public internalValue? : CloudRuleProjects[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleProjectsOutputReference {
    return new CloudRuleProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRuleServiceControlPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#id CloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudRuleServiceControlPoliciesToTerraform(struct?: CloudRuleServiceControlPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudRuleServiceControlPoliciesToHclTerraform(struct?: CloudRuleServiceControlPolicies | cdktf.IResolvable): any {
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

export class CloudRuleServiceControlPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRuleServiceControlPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRuleServiceControlPolicies | cdktf.IResolvable | undefined) {
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

export class CloudRuleServiceControlPoliciesList extends cdktf.ComplexList {
  public internalValue? : CloudRuleServiceControlPolicies[] | cdktf.IResolvable

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
  public get(index: number): CloudRuleServiceControlPoliciesOutputReference {
    return new CloudRuleServiceControlPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule cloudtamerio_cloud_rule}
*/
export class CloudRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudtamerio_cloud_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudRule to import
  * @param importFromId The id of the existing CloudRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudtamerio_cloud_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/cloud_rule cloudtamerio_cloud_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudtamerio_cloud_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudtamerio',
        providerVersion: '0.2.0'
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
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._postWebhookId = config.postWebhookId;
    this._preWebhookId = config.preWebhookId;
    this._awsCloudformationTemplates.internalValue = config.awsCloudformationTemplates;
    this._awsIamPolicies.internalValue = config.awsIamPolicies;
    this._azureArmTemplateDefinitions.internalValue = config.azureArmTemplateDefinitions;
    this._azurePolicyDefinitions.internalValue = config.azurePolicyDefinitions;
    this._azureRoleDefinitions.internalValue = config.azureRoleDefinitions;
    this._complianceStandards.internalValue = config.complianceStandards;
    this._gcpIamRoles.internalValue = config.gcpIamRoles;
    this._internalAwsAmis.internalValue = config.internalAwsAmis;
    this._internalAwsServiceCatalogPortfolios.internalValue = config.internalAwsServiceCatalogPortfolios;
    this._ous.internalValue = config.ous;
    this._ownerUserGroups.internalValue = config.ownerUserGroups;
    this._ownerUsers.internalValue = config.ownerUsers;
    this._projects.internalValue = config.projects;
    this._serviceControlPolicies.internalValue = config.serviceControlPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // built_in - computed: true, optional: false, required: false
  public get builtIn() {
    return this.getBooleanAttribute('built_in');
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
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

  // post_webhook_id - computed: false, optional: true, required: false
  private _postWebhookId?: number; 
  public get postWebhookId() {
    return this.getNumberAttribute('post_webhook_id');
  }
  public set postWebhookId(value: number) {
    this._postWebhookId = value;
  }
  public resetPostWebhookId() {
    this._postWebhookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postWebhookIdInput() {
    return this._postWebhookId;
  }

  // pre_webhook_id - computed: false, optional: true, required: false
  private _preWebhookId?: number; 
  public get preWebhookId() {
    return this.getNumberAttribute('pre_webhook_id');
  }
  public set preWebhookId(value: number) {
    this._preWebhookId = value;
  }
  public resetPreWebhookId() {
    this._preWebhookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preWebhookIdInput() {
    return this._preWebhookId;
  }

  // aws_cloudformation_templates - computed: false, optional: true, required: false
  private _awsCloudformationTemplates = new CloudRuleAwsCloudformationTemplatesList(this, "aws_cloudformation_templates", false);
  public get awsCloudformationTemplates() {
    return this._awsCloudformationTemplates;
  }
  public putAwsCloudformationTemplates(value: CloudRuleAwsCloudformationTemplates[] | cdktf.IResolvable) {
    this._awsCloudformationTemplates.internalValue = value;
  }
  public resetAwsCloudformationTemplates() {
    this._awsCloudformationTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudformationTemplatesInput() {
    return this._awsCloudformationTemplates.internalValue;
  }

  // aws_iam_policies - computed: false, optional: true, required: false
  private _awsIamPolicies = new CloudRuleAwsIamPoliciesList(this, "aws_iam_policies", false);
  public get awsIamPolicies() {
    return this._awsIamPolicies;
  }
  public putAwsIamPolicies(value: CloudRuleAwsIamPolicies[] | cdktf.IResolvable) {
    this._awsIamPolicies.internalValue = value;
  }
  public resetAwsIamPolicies() {
    this._awsIamPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamPoliciesInput() {
    return this._awsIamPolicies.internalValue;
  }

  // azure_arm_template_definitions - computed: false, optional: true, required: false
  private _azureArmTemplateDefinitions = new CloudRuleAzureArmTemplateDefinitionsList(this, "azure_arm_template_definitions", false);
  public get azureArmTemplateDefinitions() {
    return this._azureArmTemplateDefinitions;
  }
  public putAzureArmTemplateDefinitions(value: CloudRuleAzureArmTemplateDefinitions[] | cdktf.IResolvable) {
    this._azureArmTemplateDefinitions.internalValue = value;
  }
  public resetAzureArmTemplateDefinitions() {
    this._azureArmTemplateDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureArmTemplateDefinitionsInput() {
    return this._azureArmTemplateDefinitions.internalValue;
  }

  // azure_policy_definitions - computed: false, optional: true, required: false
  private _azurePolicyDefinitions = new CloudRuleAzurePolicyDefinitionsList(this, "azure_policy_definitions", false);
  public get azurePolicyDefinitions() {
    return this._azurePolicyDefinitions;
  }
  public putAzurePolicyDefinitions(value: CloudRuleAzurePolicyDefinitions[] | cdktf.IResolvable) {
    this._azurePolicyDefinitions.internalValue = value;
  }
  public resetAzurePolicyDefinitions() {
    this._azurePolicyDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePolicyDefinitionsInput() {
    return this._azurePolicyDefinitions.internalValue;
  }

  // azure_role_definitions - computed: false, optional: true, required: false
  private _azureRoleDefinitions = new CloudRuleAzureRoleDefinitionsList(this, "azure_role_definitions", false);
  public get azureRoleDefinitions() {
    return this._azureRoleDefinitions;
  }
  public putAzureRoleDefinitions(value: CloudRuleAzureRoleDefinitions[] | cdktf.IResolvable) {
    this._azureRoleDefinitions.internalValue = value;
  }
  public resetAzureRoleDefinitions() {
    this._azureRoleDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRoleDefinitionsInput() {
    return this._azureRoleDefinitions.internalValue;
  }

  // compliance_standards - computed: false, optional: true, required: false
  private _complianceStandards = new CloudRuleComplianceStandardsList(this, "compliance_standards", false);
  public get complianceStandards() {
    return this._complianceStandards;
  }
  public putComplianceStandards(value: CloudRuleComplianceStandards[] | cdktf.IResolvable) {
    this._complianceStandards.internalValue = value;
  }
  public resetComplianceStandards() {
    this._complianceStandards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStandardsInput() {
    return this._complianceStandards.internalValue;
  }

  // gcp_iam_roles - computed: false, optional: true, required: false
  private _gcpIamRoles = new CloudRuleGcpIamRolesList(this, "gcp_iam_roles", false);
  public get gcpIamRoles() {
    return this._gcpIamRoles;
  }
  public putGcpIamRoles(value: CloudRuleGcpIamRoles[] | cdktf.IResolvable) {
    this._gcpIamRoles.internalValue = value;
  }
  public resetGcpIamRoles() {
    this._gcpIamRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpIamRolesInput() {
    return this._gcpIamRoles.internalValue;
  }

  // internal_aws_amis - computed: false, optional: true, required: false
  private _internalAwsAmis = new CloudRuleInternalAwsAmisList(this, "internal_aws_amis", false);
  public get internalAwsAmis() {
    return this._internalAwsAmis;
  }
  public putInternalAwsAmis(value: CloudRuleInternalAwsAmis[] | cdktf.IResolvable) {
    this._internalAwsAmis.internalValue = value;
  }
  public resetInternalAwsAmis() {
    this._internalAwsAmis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAwsAmisInput() {
    return this._internalAwsAmis.internalValue;
  }

  // internal_aws_service_catalog_portfolios - computed: false, optional: true, required: false
  private _internalAwsServiceCatalogPortfolios = new CloudRuleInternalAwsServiceCatalogPortfoliosList(this, "internal_aws_service_catalog_portfolios", false);
  public get internalAwsServiceCatalogPortfolios() {
    return this._internalAwsServiceCatalogPortfolios;
  }
  public putInternalAwsServiceCatalogPortfolios(value: CloudRuleInternalAwsServiceCatalogPortfolios[] | cdktf.IResolvable) {
    this._internalAwsServiceCatalogPortfolios.internalValue = value;
  }
  public resetInternalAwsServiceCatalogPortfolios() {
    this._internalAwsServiceCatalogPortfolios.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAwsServiceCatalogPortfoliosInput() {
    return this._internalAwsServiceCatalogPortfolios.internalValue;
  }

  // ous - computed: false, optional: true, required: false
  private _ous = new CloudRuleOusList(this, "ous", false);
  public get ous() {
    return this._ous;
  }
  public putOus(value: CloudRuleOus[] | cdktf.IResolvable) {
    this._ous.internalValue = value;
  }
  public resetOus() {
    this._ous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ousInput() {
    return this._ous.internalValue;
  }

  // owner_user_groups - computed: false, optional: true, required: false
  private _ownerUserGroups = new CloudRuleOwnerUserGroupsList(this, "owner_user_groups", false);
  public get ownerUserGroups() {
    return this._ownerUserGroups;
  }
  public putOwnerUserGroups(value: CloudRuleOwnerUserGroups[] | cdktf.IResolvable) {
    this._ownerUserGroups.internalValue = value;
  }
  public resetOwnerUserGroups() {
    this._ownerUserGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserGroupsInput() {
    return this._ownerUserGroups.internalValue;
  }

  // owner_users - computed: false, optional: true, required: false
  private _ownerUsers = new CloudRuleOwnerUsersList(this, "owner_users", false);
  public get ownerUsers() {
    return this._ownerUsers;
  }
  public putOwnerUsers(value: CloudRuleOwnerUsers[] | cdktf.IResolvable) {
    this._ownerUsers.internalValue = value;
  }
  public resetOwnerUsers() {
    this._ownerUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUsersInput() {
    return this._ownerUsers.internalValue;
  }

  // projects - computed: false, optional: true, required: false
  private _projects = new CloudRuleProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: CloudRuleProjects[] | cdktf.IResolvable) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }

  // service_control_policies - computed: false, optional: true, required: false
  private _serviceControlPolicies = new CloudRuleServiceControlPoliciesList(this, "service_control_policies", false);
  public get serviceControlPolicies() {
    return this._serviceControlPolicies;
  }
  public putServiceControlPolicies(value: CloudRuleServiceControlPolicies[] | cdktf.IResolvable) {
    this._serviceControlPolicies.internalValue = value;
  }
  public resetServiceControlPolicies() {
    this._serviceControlPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceControlPoliciesInput() {
    return this._serviceControlPolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      post_webhook_id: cdktf.numberToTerraform(this._postWebhookId),
      pre_webhook_id: cdktf.numberToTerraform(this._preWebhookId),
      aws_cloudformation_templates: cdktf.listMapper(cloudRuleAwsCloudformationTemplatesToTerraform, true)(this._awsCloudformationTemplates.internalValue),
      aws_iam_policies: cdktf.listMapper(cloudRuleAwsIamPoliciesToTerraform, true)(this._awsIamPolicies.internalValue),
      azure_arm_template_definitions: cdktf.listMapper(cloudRuleAzureArmTemplateDefinitionsToTerraform, true)(this._azureArmTemplateDefinitions.internalValue),
      azure_policy_definitions: cdktf.listMapper(cloudRuleAzurePolicyDefinitionsToTerraform, true)(this._azurePolicyDefinitions.internalValue),
      azure_role_definitions: cdktf.listMapper(cloudRuleAzureRoleDefinitionsToTerraform, true)(this._azureRoleDefinitions.internalValue),
      compliance_standards: cdktf.listMapper(cloudRuleComplianceStandardsToTerraform, true)(this._complianceStandards.internalValue),
      gcp_iam_roles: cdktf.listMapper(cloudRuleGcpIamRolesToTerraform, true)(this._gcpIamRoles.internalValue),
      internal_aws_amis: cdktf.listMapper(cloudRuleInternalAwsAmisToTerraform, true)(this._internalAwsAmis.internalValue),
      internal_aws_service_catalog_portfolios: cdktf.listMapper(cloudRuleInternalAwsServiceCatalogPortfoliosToTerraform, true)(this._internalAwsServiceCatalogPortfolios.internalValue),
      ous: cdktf.listMapper(cloudRuleOusToTerraform, true)(this._ous.internalValue),
      owner_user_groups: cdktf.listMapper(cloudRuleOwnerUserGroupsToTerraform, true)(this._ownerUserGroups.internalValue),
      owner_users: cdktf.listMapper(cloudRuleOwnerUsersToTerraform, true)(this._ownerUsers.internalValue),
      projects: cdktf.listMapper(cloudRuleProjectsToTerraform, true)(this._projects.internalValue),
      service_control_policies: cdktf.listMapper(cloudRuleServiceControlPoliciesToTerraform, true)(this._serviceControlPolicies.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
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
      post_webhook_id: {
        value: cdktf.numberToHclTerraform(this._postWebhookId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pre_webhook_id: {
        value: cdktf.numberToHclTerraform(this._preWebhookId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aws_cloudformation_templates: {
        value: cdktf.listMapperHcl(cloudRuleAwsCloudformationTemplatesToHclTerraform, true)(this._awsCloudformationTemplates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleAwsCloudformationTemplatesList",
      },
      aws_iam_policies: {
        value: cdktf.listMapperHcl(cloudRuleAwsIamPoliciesToHclTerraform, true)(this._awsIamPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleAwsIamPoliciesList",
      },
      azure_arm_template_definitions: {
        value: cdktf.listMapperHcl(cloudRuleAzureArmTemplateDefinitionsToHclTerraform, true)(this._azureArmTemplateDefinitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleAzureArmTemplateDefinitionsList",
      },
      azure_policy_definitions: {
        value: cdktf.listMapperHcl(cloudRuleAzurePolicyDefinitionsToHclTerraform, true)(this._azurePolicyDefinitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleAzurePolicyDefinitionsList",
      },
      azure_role_definitions: {
        value: cdktf.listMapperHcl(cloudRuleAzureRoleDefinitionsToHclTerraform, true)(this._azureRoleDefinitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleAzureRoleDefinitionsList",
      },
      compliance_standards: {
        value: cdktf.listMapperHcl(cloudRuleComplianceStandardsToHclTerraform, true)(this._complianceStandards.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleComplianceStandardsList",
      },
      gcp_iam_roles: {
        value: cdktf.listMapperHcl(cloudRuleGcpIamRolesToHclTerraform, true)(this._gcpIamRoles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleGcpIamRolesList",
      },
      internal_aws_amis: {
        value: cdktf.listMapperHcl(cloudRuleInternalAwsAmisToHclTerraform, true)(this._internalAwsAmis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleInternalAwsAmisList",
      },
      internal_aws_service_catalog_portfolios: {
        value: cdktf.listMapperHcl(cloudRuleInternalAwsServiceCatalogPortfoliosToHclTerraform, true)(this._internalAwsServiceCatalogPortfolios.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleInternalAwsServiceCatalogPortfoliosList",
      },
      ous: {
        value: cdktf.listMapperHcl(cloudRuleOusToHclTerraform, true)(this._ous.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleOusList",
      },
      owner_user_groups: {
        value: cdktf.listMapperHcl(cloudRuleOwnerUserGroupsToHclTerraform, true)(this._ownerUserGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleOwnerUserGroupsList",
      },
      owner_users: {
        value: cdktf.listMapperHcl(cloudRuleOwnerUsersToHclTerraform, true)(this._ownerUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleOwnerUsersList",
      },
      projects: {
        value: cdktf.listMapperHcl(cloudRuleProjectsToHclTerraform, true)(this._projects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleProjectsList",
      },
      service_control_policies: {
        value: cdktf.listMapperHcl(cloudRuleServiceControlPoliciesToHclTerraform, true)(this._serviceControlPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRuleServiceControlPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
