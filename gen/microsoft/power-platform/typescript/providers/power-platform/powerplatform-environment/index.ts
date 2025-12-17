// https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerplatformEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow Bing search in the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#allow_bing_search PowerplatformEnvironment#allow_bing_search}
  */
  readonly allowBingSearch?: boolean | cdktf.IResolvable;
  /**
  * Allow moving data across regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#allow_moving_data_across_regions PowerplatformEnvironment#allow_moving_data_across_regions}
  */
  readonly allowMovingDataAcrossRegions?: boolean | cdktf.IResolvable;
  /**
  * Azure region of the environment (westeurope, eastus etc.). Can be queried using the `powerplatform_locations` data source. This property should only be set if absolutely necessary like when trying to create an environment in the same Azure region as Azure resources or Fabric capacity.  Changing this property after environment creation will result in a destroy and recreation of the environment (you can use the [`prevent_destroy` lifecycle metatdata](https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle#prevent_destroy) as an added safeguard to prevent accidental deletion of environments).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#azure_region PowerplatformEnvironment#azure_region}
  */
  readonly azureRegion?: string;
  /**
  * Billing policy id (guid) for pay-as-you-go environments using Azure subscription billing. To remove the environment from the billing policy, set this attribute to `00000000-0000-0000-0000-000000000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#billing_policy_id PowerplatformEnvironment#billing_policy_id}
  */
  readonly billingPolicyId?: string;
  /**
  * Cadence of updates for the environment (Frequent, Moderate). For more information check [here](https://learn.microsoft.com/en-us/power-platform/admin/create-environment#setting-an-environment-refresh-cadence).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#cadence PowerplatformEnvironment#cadence}
  */
  readonly cadence?: string;
  /**
  * Dataverse environment details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#dataverse PowerplatformEnvironment#dataverse}
  */
  readonly dataverse?: PowerplatformEnvironmentDataverse;
  /**
  * Description of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#description PowerplatformEnvironment#description}
  */
  readonly description?: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#display_name PowerplatformEnvironment#display_name}
  */
  readonly displayName: string;
  /**
  * Environment group id (guid) that the environment belongs to. See [Environment groups](https://learn.microsoft.com/en-us/power-platform/admin/environment-groups) for more information. To remove the environment from the environment group, set this attribute to `00000000-0000-0000-0000-000000000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#environment_group_id PowerplatformEnvironment#environment_group_id}
  */
  readonly environmentGroupId?: string;
  /**
  * Type of the environment (Sandbox, Production etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#environment_type PowerplatformEnvironment#environment_type}
  */
  readonly environmentType: string;
  /**
  * Location of the environment (europe, unitedstates etc.). Can be queried using the `powerplatform_locations` data source. The region of your Entra tenant may [limit the available locations for Power Platform](https://learn.microsoft.com/power-platform/admin/regions-overview#who-can-create-environments-in-these-regions). Changing this property after environment creation will result in a destroy and recreation of the environment (you can use the [`prevent_destroy` lifecycle metatdata](https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle#prevent_destroy) as an added safeguard to prevent accidental deletion of environments).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#location PowerplatformEnvironment#location}
  */
  readonly location: string;
  /**
  * Entra ID  user id (guid) of the environment owner when creating developer environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#owner_id PowerplatformEnvironment#owner_id}
  */
  readonly ownerId?: string;
  /**
  * Gives you the ability to create environments that are updated first. This allows you to experience and validate scenarios that are important to you before any updates reach your business-critical applications. See [more](https://learn.microsoft.com/en-us/power-platform/admin/early-release).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#release_cycle PowerplatformEnvironment#release_cycle}
  */
  readonly releaseCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#timeouts PowerplatformEnvironment#timeouts}
  */
  readonly timeouts?: PowerplatformEnvironmentTimeouts;
}
export interface PowerplatformEnvironmentDataverse {
  /**
  * Select to enable administration mode for the environment. See [Admin mode](https://learn.microsoft.com/en-us/power-platform/admin/admin-mode) for more information. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#administration_mode_enabled PowerplatformEnvironment#administration_mode_enabled}
  */
  readonly administrationModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates if background operation is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#background_operation_enabled PowerplatformEnvironment#background_operation_enabled}
  */
  readonly backgroundOperationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Currency name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#currency_code PowerplatformEnvironment#currency_code}
  */
  readonly currencyCode: string;
  /**
  * Domain name of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#domain PowerplatformEnvironment#domain}
  */
  readonly domain?: string;
  /**
  * Language LCID (integer)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#language_code PowerplatformEnvironment#language_code}
  */
  readonly languageCode: number;
  /**
  * Security group id (guid). For an empty security group, set this property to `0000000-0000-0000-0000-000000000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#security_group_id PowerplatformEnvironment#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Additional D365 environment template metadata (if any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#template_metadata PowerplatformEnvironment#template_metadata}
  */
  readonly templateMetadata?: string;
  /**
  * The selected instance provisioning template (if any). See [ERP-based template](https://learn.microsoft.com/en-us/power-platform/admin/unified-experience/tutorial-deploy-new-environment-with-erp-template?tabs=PPAC) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#templates PowerplatformEnvironment#templates}
  */
  readonly templates?: string[];
}

export function powerplatformEnvironmentDataverseToTerraform(struct?: PowerplatformEnvironmentDataverse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administration_mode_enabled: cdktf.booleanToTerraform(struct!.administrationModeEnabled),
    background_operation_enabled: cdktf.booleanToTerraform(struct!.backgroundOperationEnabled),
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
    domain: cdktf.stringToTerraform(struct!.domain),
    language_code: cdktf.numberToTerraform(struct!.languageCode),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    template_metadata: cdktf.stringToTerraform(struct!.templateMetadata),
    templates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templates),
  }
}


export function powerplatformEnvironmentDataverseToHclTerraform(struct?: PowerplatformEnvironmentDataverse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administration_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.administrationModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    background_operation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.backgroundOperationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    currency_code: {
      value: cdktf.stringToHclTerraform(struct!.currencyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_code: {
      value: cdktf.numberToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_metadata: {
      value: cdktf.stringToHclTerraform(struct!.templateMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    templates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformEnvironmentDataverseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentDataverse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administrationModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrationModeEnabled = this._administrationModeEnabled;
    }
    if (this._backgroundOperationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundOperationEnabled = this._backgroundOperationEnabled;
    }
    if (this._currencyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencyCode = this._currencyCode;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._templateMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateMetadata = this._templateMetadata;
    }
    if (this._templates !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentDataverse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._administrationModeEnabled = undefined;
      this._backgroundOperationEnabled = undefined;
      this._currencyCode = undefined;
      this._domain = undefined;
      this._languageCode = undefined;
      this._securityGroupId = undefined;
      this._templateMetadata = undefined;
      this._templates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._administrationModeEnabled = value.administrationModeEnabled;
      this._backgroundOperationEnabled = value.backgroundOperationEnabled;
      this._currencyCode = value.currencyCode;
      this._domain = value.domain;
      this._languageCode = value.languageCode;
      this._securityGroupId = value.securityGroupId;
      this._templateMetadata = value.templateMetadata;
      this._templates = value.templates;
    }
  }

  // administration_mode_enabled - computed: true, optional: true, required: false
  private _administrationModeEnabled?: boolean | cdktf.IResolvable; 
  public get administrationModeEnabled() {
    return this.getBooleanAttribute('administration_mode_enabled');
  }
  public set administrationModeEnabled(value: boolean | cdktf.IResolvable) {
    this._administrationModeEnabled = value;
  }
  public resetAdministrationModeEnabled() {
    this._administrationModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrationModeEnabledInput() {
    return this._administrationModeEnabled;
  }

  // background_operation_enabled - computed: true, optional: true, required: false
  private _backgroundOperationEnabled?: boolean | cdktf.IResolvable; 
  public get backgroundOperationEnabled() {
    return this.getBooleanAttribute('background_operation_enabled');
  }
  public set backgroundOperationEnabled(value: boolean | cdktf.IResolvable) {
    this._backgroundOperationEnabled = value;
  }
  public resetBackgroundOperationEnabled() {
    this._backgroundOperationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundOperationEnabledInput() {
    return this._backgroundOperationEnabled;
  }

  // currency_code - computed: true, optional: false, required: true
  private _currencyCode?: string; 
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }
  public set currencyCode(value: string) {
    this._currencyCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyCodeInput() {
    return this._currencyCode;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // language_code - computed: true, optional: false, required: true
  private _languageCode?: number; 
  public get languageCode() {
    return this.getNumberAttribute('language_code');
  }
  public set languageCode(value: number) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // linked_app_id - computed: true, optional: false, required: false
  public get linkedAppId() {
    return this.getStringAttribute('linked_app_id');
  }

  // linked_app_type - computed: true, optional: false, required: false
  public get linkedAppType() {
    return this.getStringAttribute('linked_app_type');
  }

  // linked_app_url - computed: true, optional: false, required: false
  public get linkedAppUrl() {
    return this.getStringAttribute('linked_app_url');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // template_metadata - computed: true, optional: true, required: false
  private _templateMetadata?: string; 
  public get templateMetadata() {
    return this.getStringAttribute('template_metadata');
  }
  public set templateMetadata(value: string) {
    this._templateMetadata = value;
  }
  public resetTemplateMetadata() {
    this._templateMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateMetadataInput() {
    return this._templateMetadata;
  }

  // templates - computed: true, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return this.getListAttribute('templates');
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }

  // unique_name - computed: true, optional: false, required: false
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface PowerplatformEnvironmentEnterprisePolicies {
}

export function powerplatformEnvironmentEnterprisePoliciesToTerraform(struct?: PowerplatformEnvironmentEnterprisePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function powerplatformEnvironmentEnterprisePoliciesToHclTerraform(struct?: PowerplatformEnvironmentEnterprisePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PowerplatformEnvironmentEnterprisePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformEnvironmentEnterprisePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentEnterprisePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PowerplatformEnvironmentEnterprisePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): PowerplatformEnvironmentEnterprisePoliciesOutputReference {
    return new PowerplatformEnvironmentEnterprisePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformEnvironmentTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#create PowerplatformEnvironment#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#delete PowerplatformEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#read PowerplatformEnvironment#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#update PowerplatformEnvironment#update}
  */
  readonly update?: string;
}

export function powerplatformEnvironmentTimeoutsToTerraform(struct?: PowerplatformEnvironmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function powerplatformEnvironmentTimeoutsToHclTerraform(struct?: PowerplatformEnvironmentTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class PowerplatformEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment powerplatform_environment}
*/
export class PowerplatformEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerplatformEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerplatformEnvironment to import
  * @param importFromId The id of the existing PowerplatformEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerplatformEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_environment powerplatform_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerplatformEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: PowerplatformEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_environment',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '4.0.0',
        providerVersionConstraint: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowBingSearch = config.allowBingSearch;
    this._allowMovingDataAcrossRegions = config.allowMovingDataAcrossRegions;
    this._azureRegion = config.azureRegion;
    this._billingPolicyId = config.billingPolicyId;
    this._cadence = config.cadence;
    this._dataverse.internalValue = config.dataverse;
    this._description = config.description;
    this._displayName = config.displayName;
    this._environmentGroupId = config.environmentGroupId;
    this._environmentType = config.environmentType;
    this._location = config.location;
    this._ownerId = config.ownerId;
    this._releaseCycle = config.releaseCycle;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_bing_search - computed: true, optional: true, required: false
  private _allowBingSearch?: boolean | cdktf.IResolvable; 
  public get allowBingSearch() {
    return this.getBooleanAttribute('allow_bing_search');
  }
  public set allowBingSearch(value: boolean | cdktf.IResolvable) {
    this._allowBingSearch = value;
  }
  public resetAllowBingSearch() {
    this._allowBingSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBingSearchInput() {
    return this._allowBingSearch;
  }

  // allow_moving_data_across_regions - computed: true, optional: true, required: false
  private _allowMovingDataAcrossRegions?: boolean | cdktf.IResolvable; 
  public get allowMovingDataAcrossRegions() {
    return this.getBooleanAttribute('allow_moving_data_across_regions');
  }
  public set allowMovingDataAcrossRegions(value: boolean | cdktf.IResolvable) {
    this._allowMovingDataAcrossRegions = value;
  }
  public resetAllowMovingDataAcrossRegions() {
    this._allowMovingDataAcrossRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMovingDataAcrossRegionsInput() {
    return this._allowMovingDataAcrossRegions;
  }

  // azure_region - computed: true, optional: true, required: false
  private _azureRegion?: string; 
  public get azureRegion() {
    return this.getStringAttribute('azure_region');
  }
  public set azureRegion(value: string) {
    this._azureRegion = value;
  }
  public resetAzureRegion() {
    this._azureRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionInput() {
    return this._azureRegion;
  }

  // billing_policy_id - computed: true, optional: true, required: false
  private _billingPolicyId?: string; 
  public get billingPolicyId() {
    return this.getStringAttribute('billing_policy_id');
  }
  public set billingPolicyId(value: string) {
    this._billingPolicyId = value;
  }
  public resetBillingPolicyId() {
    this._billingPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPolicyIdInput() {
    return this._billingPolicyId;
  }

  // cadence - computed: true, optional: true, required: false
  private _cadence?: string; 
  public get cadence() {
    return this.getStringAttribute('cadence');
  }
  public set cadence(value: string) {
    this._cadence = value;
  }
  public resetCadence() {
    this._cadence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cadenceInput() {
    return this._cadence;
  }

  // dataverse - computed: true, optional: true, required: false
  private _dataverse = new PowerplatformEnvironmentDataverseOutputReference(this, "dataverse");
  public get dataverse() {
    return this._dataverse;
  }
  public putDataverse(value: PowerplatformEnvironmentDataverse) {
    this._dataverse.internalValue = value;
  }
  public resetDataverse() {
    this._dataverse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataverseInput() {
    return this._dataverse.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // enterprise_policies - computed: true, optional: false, required: false
  private _enterprisePolicies = new PowerplatformEnvironmentEnterprisePoliciesList(this, "enterprise_policies", true);
  public get enterprisePolicies() {
    return this._enterprisePolicies;
  }

  // environment_group_id - computed: true, optional: true, required: false
  private _environmentGroupId?: string; 
  public get environmentGroupId() {
    return this.getStringAttribute('environment_group_id');
  }
  public set environmentGroupId(value: string) {
    this._environmentGroupId = value;
  }
  public resetEnvironmentGroupId() {
    this._environmentGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentGroupIdInput() {
    return this._environmentGroupId;
  }

  // environment_type - computed: false, optional: false, required: true
  private _environmentType?: string; 
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }
  public set environmentType(value: string) {
    this._environmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentTypeInput() {
    return this._environmentType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // owner_id - computed: false, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // release_cycle - computed: true, optional: true, required: false
  private _releaseCycle?: string; 
  public get releaseCycle() {
    return this.getStringAttribute('release_cycle');
  }
  public set releaseCycle(value: string) {
    this._releaseCycle = value;
  }
  public resetReleaseCycle() {
    this._releaseCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCycleInput() {
    return this._releaseCycle;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PowerplatformEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PowerplatformEnvironmentTimeouts) {
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
      allow_bing_search: cdktf.booleanToTerraform(this._allowBingSearch),
      allow_moving_data_across_regions: cdktf.booleanToTerraform(this._allowMovingDataAcrossRegions),
      azure_region: cdktf.stringToTerraform(this._azureRegion),
      billing_policy_id: cdktf.stringToTerraform(this._billingPolicyId),
      cadence: cdktf.stringToTerraform(this._cadence),
      dataverse: powerplatformEnvironmentDataverseToTerraform(this._dataverse.internalValue),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      environment_group_id: cdktf.stringToTerraform(this._environmentGroupId),
      environment_type: cdktf.stringToTerraform(this._environmentType),
      location: cdktf.stringToTerraform(this._location),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      release_cycle: cdktf.stringToTerraform(this._releaseCycle),
      timeouts: powerplatformEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_bing_search: {
        value: cdktf.booleanToHclTerraform(this._allowBingSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_moving_data_across_regions: {
        value: cdktf.booleanToHclTerraform(this._allowMovingDataAcrossRegions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      azure_region: {
        value: cdktf.stringToHclTerraform(this._azureRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_policy_id: {
        value: cdktf.stringToHclTerraform(this._billingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cadence: {
        value: cdktf.stringToHclTerraform(this._cadence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataverse: {
        value: powerplatformEnvironmentDataverseToHclTerraform(this._dataverse.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PowerplatformEnvironmentDataverse",
      },
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
      environment_group_id: {
        value: cdktf.stringToHclTerraform(this._environmentGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_type: {
        value: cdktf.stringToHclTerraform(this._environmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_cycle: {
        value: cdktf.stringToHclTerraform(this._releaseCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: powerplatformEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PowerplatformEnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
