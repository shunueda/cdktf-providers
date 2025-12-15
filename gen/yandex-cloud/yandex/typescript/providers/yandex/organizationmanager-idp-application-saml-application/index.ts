// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationmanagerIdpApplicationSamlApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the SAML application to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#application_id OrganizationmanagerIdpApplicationSamlApplication#application_id}
  */
  readonly applicationId?: string;
  /**
  * Attribute mapping configuration for the SAML application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#attribute_mapping OrganizationmanagerIdpApplicationSamlApplication#attribute_mapping}
  */
  readonly attributeMapping?: OrganizationmanagerIdpApplicationSamlApplicationAttributeMapping;
  /**
  * Description of the SAML application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#description OrganizationmanagerIdpApplicationSamlApplication#description}
  */
  readonly description?: string;
  /**
  * Group claims settings for the SAML application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#group_claims_settings OrganizationmanagerIdpApplicationSamlApplication#group_claims_settings}
  */
  readonly groupClaimsSettings?: OrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings;
  /**
  * ID of the SAML application to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#id OrganizationmanagerIdpApplicationSamlApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels as `` key:value `` pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#labels OrganizationmanagerIdpApplicationSamlApplication#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the SAML application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#name OrganizationmanagerIdpApplicationSamlApplication#name}
  */
  readonly name: string;
  /**
  * ID of the organization that the application belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#organization_id OrganizationmanagerIdpApplicationSamlApplication#organization_id}
  */
  readonly organizationId: string;
  /**
  * Security settings for the SAML application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#security_settings OrganizationmanagerIdpApplicationSamlApplication#security_settings}
  */
  readonly securitySettings?: OrganizationmanagerIdpApplicationSamlApplicationSecuritySettings;
  /**
  * Service provider configuration for the SAML application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#service_provider OrganizationmanagerIdpApplicationSamlApplication#service_provider}
  */
  readonly serviceProvider?: OrganizationmanagerIdpApplicationSamlApplicationServiceProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#timeouts OrganizationmanagerIdpApplicationSamlApplication#timeouts}
  */
  readonly timeouts?: OrganizationmanagerIdpApplicationSamlApplicationTimeouts;
}
export interface OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes {
  /**
  * Name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#name OrganizationmanagerIdpApplicationSamlApplication#name}
  */
  readonly name: string;
  /**
  * Value of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#value OrganizationmanagerIdpApplicationSamlApplication#value}
  */
  readonly value: string;
}

export function organizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesToTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function organizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesToHclTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesList extends cdktf.ComplexList {
  public internalValue? : OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes[] | cdktf.IResolvable

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
  public get(index: number): OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesOutputReference {
    return new OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId {
  /**
  * Format of the NameID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#format OrganizationmanagerIdpApplicationSamlApplication#format}
  */
  readonly format: string;
}

export function organizationmanagerIdpApplicationSamlApplicationAttributeMappingNameIdToTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function organizationmanagerIdpApplicationSamlApplicationAttributeMappingNameIdToHclTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
    }
  }

  // format - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface OrganizationmanagerIdpApplicationSamlApplicationAttributeMapping {
  /**
  * List of attribute mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#attributes OrganizationmanagerIdpApplicationSamlApplication#attributes}
  */
  readonly attributes?: OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes[] | cdktf.IResolvable;
  /**
  * NameID configuration for the SAML application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#name_id OrganizationmanagerIdpApplicationSamlApplication#name_id}
  */
  readonly nameId: OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId;
}

export function organizationmanagerIdpApplicationSamlApplicationAttributeMappingToTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationAttributeMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(organizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesToTerraform, false)(struct!.attributes),
    name_id: organizationmanagerIdpApplicationSamlApplicationAttributeMappingNameIdToTerraform(struct!.nameId),
  }
}


export function organizationmanagerIdpApplicationSamlApplicationAttributeMappingToHclTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationAttributeMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(organizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesList",
    },
    name_id: {
      value: organizationmanagerIdpApplicationSamlApplicationAttributeMappingNameIdToHclTerraform(struct!.nameId),
      isBlock: true,
      type: "struct",
      storageClassType: "OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpApplicationSamlApplicationAttributeMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._nameId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameId = this._nameId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationSamlApplicationAttributeMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._nameId.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._nameId.internalValue = value.nameId;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // name_id - computed: true, optional: false, required: true
  private _nameId = new OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameIdOutputReference(this, "name_id");
  public get nameId() {
    return this._nameId;
  }
  public putNameId(value: OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId) {
    this._nameId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdInput() {
    return this._nameId.internalValue;
  }
}
export interface OrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings {
  /**
  * Name of the SAML attribute that contains group information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#group_attribute_name OrganizationmanagerIdpApplicationSamlApplication#group_attribute_name}
  */
  readonly groupAttributeName?: string;
  /**
  * Distribution type for group claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#group_distribution_type OrganizationmanagerIdpApplicationSamlApplication#group_distribution_type}
  */
  readonly groupDistributionType?: string;
}

export function organizationmanagerIdpApplicationSamlApplicationGroupClaimsSettingsToTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_attribute_name: cdktf.stringToTerraform(struct!.groupAttributeName),
    group_distribution_type: cdktf.stringToTerraform(struct!.groupDistributionType),
  }
}


export function organizationmanagerIdpApplicationSamlApplicationGroupClaimsSettingsToHclTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.groupAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_distribution_type: {
      value: cdktf.stringToHclTerraform(struct!.groupDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttributeName = this._groupAttributeName;
    }
    if (this._groupDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDistributionType = this._groupDistributionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAttributeName = undefined;
      this._groupDistributionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAttributeName = value.groupAttributeName;
      this._groupDistributionType = value.groupDistributionType;
    }
  }

  // group_attribute_name - computed: true, optional: true, required: false
  private _groupAttributeName?: string; 
  public get groupAttributeName() {
    return this.getStringAttribute('group_attribute_name');
  }
  public set groupAttributeName(value: string) {
    this._groupAttributeName = value;
  }
  public resetGroupAttributeName() {
    this._groupAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeNameInput() {
    return this._groupAttributeName;
  }

  // group_distribution_type - computed: true, optional: true, required: false
  private _groupDistributionType?: string; 
  public get groupDistributionType() {
    return this.getStringAttribute('group_distribution_type');
  }
  public set groupDistributionType(value: string) {
    this._groupDistributionType = value;
  }
  public resetGroupDistributionType() {
    this._groupDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDistributionTypeInput() {
    return this._groupDistributionType;
  }
}
export interface OrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadata {
}

export function organizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadataToTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadataToHclTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // metadata_url - computed: true, optional: false, required: false
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }

  // slo_url - computed: true, optional: false, required: false
  public get sloUrl() {
    return this.getStringAttribute('slo_url');
  }

  // sso_url - computed: true, optional: false, required: false
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
}
export interface OrganizationmanagerIdpApplicationSamlApplicationSecuritySettings {
  /**
  * ID of the signature certificate to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#signature_certificate_id OrganizationmanagerIdpApplicationSamlApplication#signature_certificate_id}
  */
  readonly signatureCertificateId?: string;
  /**
  * Signature mode for SAML messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#signature_mode OrganizationmanagerIdpApplicationSamlApplication#signature_mode}
  */
  readonly signatureMode?: string;
}

export function organizationmanagerIdpApplicationSamlApplicationSecuritySettingsToTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationSecuritySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signature_certificate_id: cdktf.stringToTerraform(struct!.signatureCertificateId),
    signature_mode: cdktf.stringToTerraform(struct!.signatureMode),
  }
}


export function organizationmanagerIdpApplicationSamlApplicationSecuritySettingsToHclTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationSecuritySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signature_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.signatureCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_mode: {
      value: cdktf.stringToHclTerraform(struct!.signatureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpApplicationSamlApplicationSecuritySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpApplicationSamlApplicationSecuritySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signatureCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureCertificateId = this._signatureCertificateId;
    }
    if (this._signatureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureMode = this._signatureMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationSamlApplicationSecuritySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._signatureCertificateId = undefined;
      this._signatureMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._signatureCertificateId = value.signatureCertificateId;
      this._signatureMode = value.signatureMode;
    }
  }

  // signature_certificate_id - computed: true, optional: true, required: false
  private _signatureCertificateId?: string; 
  public get signatureCertificateId() {
    return this.getStringAttribute('signature_certificate_id');
  }
  public set signatureCertificateId(value: string) {
    this._signatureCertificateId = value;
  }
  public resetSignatureCertificateId() {
    this._signatureCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureCertificateIdInput() {
    return this._signatureCertificateId;
  }

  // signature_mode - computed: true, optional: true, required: false
  private _signatureMode?: string; 
  public get signatureMode() {
    return this.getStringAttribute('signature_mode');
  }
  public set signatureMode(value: string) {
    this._signatureMode = value;
  }
  public resetSignatureMode() {
    this._signatureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureModeInput() {
    return this._signatureMode;
  }
}
export interface OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls {
  /**
  * Optional index for the assertion consumer service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#index OrganizationmanagerIdpApplicationSamlApplication#index}
  */
  readonly index?: number;
  /**
  * The URL where SAML responses are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#url OrganizationmanagerIdpApplicationSamlApplication#url}
  */
  readonly url: string;
}

export function organizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsToTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function organizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsToHclTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._url = value.url;
    }
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // url - computed: true, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsList extends cdktf.ComplexList {
  public internalValue? : OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls[] | cdktf.IResolvable

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
  public get(index: number): OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsOutputReference {
    return new OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls {
  /**
  * Protocol binding supported by the logout endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#protocol_binding OrganizationmanagerIdpApplicationSamlApplication#protocol_binding}
  */
  readonly protocolBinding: string;
  /**
  * Optional separate URL for logout responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#response_url OrganizationmanagerIdpApplicationSamlApplication#response_url}
  */
  readonly responseUrl?: string;
  /**
  * The URL where logout requests are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#url OrganizationmanagerIdpApplicationSamlApplication#url}
  */
  readonly url: string;
}

export function organizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsToTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_binding: cdktf.stringToTerraform(struct!.protocolBinding),
    response_url: cdktf.stringToTerraform(struct!.responseUrl),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function organizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsToHclTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol_binding: {
      value: cdktf.stringToHclTerraform(struct!.protocolBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_url: {
      value: cdktf.stringToHclTerraform(struct!.responseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolBinding = this._protocolBinding;
    }
    if (this._responseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUrl = this._responseUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocolBinding = undefined;
      this._responseUrl = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocolBinding = value.protocolBinding;
      this._responseUrl = value.responseUrl;
      this._url = value.url;
    }
  }

  // protocol_binding - computed: true, optional: false, required: true
  private _protocolBinding?: string; 
  public get protocolBinding() {
    return this.getStringAttribute('protocol_binding');
  }
  public set protocolBinding(value: string) {
    this._protocolBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolBindingInput() {
    return this._protocolBinding;
  }

  // response_url - computed: true, optional: true, required: false
  private _responseUrl?: string; 
  public get responseUrl() {
    return this.getStringAttribute('response_url');
  }
  public set responseUrl(value: string) {
    this._responseUrl = value;
  }
  public resetResponseUrl() {
    this._responseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseUrlInput() {
    return this._responseUrl;
  }

  // url - computed: true, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsList extends cdktf.ComplexList {
  public internalValue? : OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls[] | cdktf.IResolvable

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
  public get(index: number): OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsOutputReference {
    return new OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationmanagerIdpApplicationSamlApplicationServiceProvider {
  /**
  * Assertion Consumer Service URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#acs_urls OrganizationmanagerIdpApplicationSamlApplication#acs_urls}
  */
  readonly acsUrls?: OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls[] | cdktf.IResolvable;
  /**
  * Service provider entity ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#entity_id OrganizationmanagerIdpApplicationSamlApplication#entity_id}
  */
  readonly entityId: string;
  /**
  * Single Logout Service URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#slo_urls OrganizationmanagerIdpApplicationSamlApplication#slo_urls}
  */
  readonly sloUrls?: OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls[] | cdktf.IResolvable;
}

export function organizationmanagerIdpApplicationSamlApplicationServiceProviderToTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationServiceProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acs_urls: cdktf.listMapper(organizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsToTerraform, false)(struct!.acsUrls),
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    slo_urls: cdktf.listMapper(organizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsToTerraform, false)(struct!.sloUrls),
  }
}


export function organizationmanagerIdpApplicationSamlApplicationServiceProviderToHclTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationServiceProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acs_urls: {
      value: cdktf.listMapperHcl(organizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsToHclTerraform, false)(struct!.acsUrls),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsList",
    },
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_urls: {
      value: cdktf.listMapperHcl(organizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsToHclTerraform, false)(struct!.sloUrls),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpApplicationSamlApplicationServiceProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpApplicationSamlApplicationServiceProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acsUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsUrls = this._acsUrls?.internalValue;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._sloUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloUrls = this._sloUrls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationSamlApplicationServiceProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acsUrls.internalValue = undefined;
      this._entityId = undefined;
      this._sloUrls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acsUrls.internalValue = value.acsUrls;
      this._entityId = value.entityId;
      this._sloUrls.internalValue = value.sloUrls;
    }
  }

  // acs_urls - computed: true, optional: true, required: false
  private _acsUrls = new OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsList(this, "acs_urls", false);
  public get acsUrls() {
    return this._acsUrls;
  }
  public putAcsUrls(value: OrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls[] | cdktf.IResolvable) {
    this._acsUrls.internalValue = value;
  }
  public resetAcsUrls() {
    this._acsUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsUrlsInput() {
    return this._acsUrls.internalValue;
  }

  // entity_id - computed: true, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // slo_urls - computed: true, optional: true, required: false
  private _sloUrls = new OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsList(this, "slo_urls", false);
  public get sloUrls() {
    return this._sloUrls;
  }
  public putSloUrls(value: OrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls[] | cdktf.IResolvable) {
    this._sloUrls.internalValue = value;
  }
  public resetSloUrls() {
    this._sloUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloUrlsInput() {
    return this._sloUrls.internalValue;
  }
}
export interface OrganizationmanagerIdpApplicationSamlApplicationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#create OrganizationmanagerIdpApplicationSamlApplication#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#delete OrganizationmanagerIdpApplicationSamlApplication#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#read OrganizationmanagerIdpApplicationSamlApplication#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#update OrganizationmanagerIdpApplicationSamlApplication#update}
  */
  readonly update?: string;
}

export function organizationmanagerIdpApplicationSamlApplicationTimeoutsToTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationTimeouts | cdktf.IResolvable): any {
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


export function organizationmanagerIdpApplicationSamlApplicationTimeoutsToHclTerraform(struct?: OrganizationmanagerIdpApplicationSamlApplicationTimeouts | cdktf.IResolvable): any {
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

export class OrganizationmanagerIdpApplicationSamlApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpApplicationSamlApplicationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrganizationmanagerIdpApplicationSamlApplicationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application yandex_organizationmanager_idp_application_saml_application}
*/
export class OrganizationmanagerIdpApplicationSamlApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_idp_application_saml_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationmanagerIdpApplicationSamlApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationmanagerIdpApplicationSamlApplication to import
  * @param importFromId The id of the existing OrganizationmanagerIdpApplicationSamlApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationmanagerIdpApplicationSamlApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_organizationmanager_idp_application_saml_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/organizationmanager_idp_application_saml_application yandex_organizationmanager_idp_application_saml_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationmanagerIdpApplicationSamlApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationmanagerIdpApplicationSamlApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_idp_application_saml_application',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._attributeMapping.internalValue = config.attributeMapping;
    this._description = config.description;
    this._groupClaimsSettings.internalValue = config.groupClaimsSettings;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._securitySettings.internalValue = config.securitySettings;
    this._serviceProvider.internalValue = config.serviceProvider;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // attribute_mapping - computed: true, optional: true, required: false
  private _attributeMapping = new OrganizationmanagerIdpApplicationSamlApplicationAttributeMappingOutputReference(this, "attribute_mapping");
  public get attributeMapping() {
    return this._attributeMapping;
  }
  public putAttributeMapping(value: OrganizationmanagerIdpApplicationSamlApplicationAttributeMapping) {
    this._attributeMapping.internalValue = value;
  }
  public resetAttributeMapping() {
    this._attributeMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMappingInput() {
    return this._attributeMapping.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // group_claims_settings - computed: true, optional: true, required: false
  private _groupClaimsSettings = new OrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettingsOutputReference(this, "group_claims_settings");
  public get groupClaimsSettings() {
    return this._groupClaimsSettings;
  }
  public putGroupClaimsSettings(value: OrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings) {
    this._groupClaimsSettings.internalValue = value;
  }
  public resetGroupClaimsSettings() {
    this._groupClaimsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupClaimsSettingsInput() {
    return this._groupClaimsSettings.internalValue;
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

  // identity_provider_metadata - computed: true, optional: false, required: false
  private _identityProviderMetadata = new OrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadataOutputReference(this, "identity_provider_metadata");
  public get identityProviderMetadata() {
    return this._identityProviderMetadata;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // security_settings - computed: true, optional: true, required: false
  private _securitySettings = new OrganizationmanagerIdpApplicationSamlApplicationSecuritySettingsOutputReference(this, "security_settings");
  public get securitySettings() {
    return this._securitySettings;
  }
  public putSecuritySettings(value: OrganizationmanagerIdpApplicationSamlApplicationSecuritySettings) {
    this._securitySettings.internalValue = value;
  }
  public resetSecuritySettings() {
    this._securitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings.internalValue;
  }

  // service_provider - computed: true, optional: true, required: false
  private _serviceProvider = new OrganizationmanagerIdpApplicationSamlApplicationServiceProviderOutputReference(this, "service_provider");
  public get serviceProvider() {
    return this._serviceProvider;
  }
  public putServiceProvider(value: OrganizationmanagerIdpApplicationSamlApplicationServiceProvider) {
    this._serviceProvider.internalValue = value;
  }
  public resetServiceProvider() {
    this._serviceProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationmanagerIdpApplicationSamlApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationmanagerIdpApplicationSamlApplicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      attribute_mapping: organizationmanagerIdpApplicationSamlApplicationAttributeMappingToTerraform(this._attributeMapping.internalValue),
      description: cdktf.stringToTerraform(this._description),
      group_claims_settings: organizationmanagerIdpApplicationSamlApplicationGroupClaimsSettingsToTerraform(this._groupClaimsSettings.internalValue),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      security_settings: organizationmanagerIdpApplicationSamlApplicationSecuritySettingsToTerraform(this._securitySettings.internalValue),
      service_provider: organizationmanagerIdpApplicationSamlApplicationServiceProviderToTerraform(this._serviceProvider.internalValue),
      timeouts: organizationmanagerIdpApplicationSamlApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_mapping: {
        value: organizationmanagerIdpApplicationSamlApplicationAttributeMappingToHclTerraform(this._attributeMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpApplicationSamlApplicationAttributeMapping",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_claims_settings: {
        value: organizationmanagerIdpApplicationSamlApplicationGroupClaimsSettingsToHclTerraform(this._groupClaimsSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_settings: {
        value: organizationmanagerIdpApplicationSamlApplicationSecuritySettingsToHclTerraform(this._securitySettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpApplicationSamlApplicationSecuritySettings",
      },
      service_provider: {
        value: organizationmanagerIdpApplicationSamlApplicationServiceProviderToHclTerraform(this._serviceProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpApplicationSamlApplicationServiceProvider",
      },
      timeouts: {
        value: organizationmanagerIdpApplicationSamlApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpApplicationSamlApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
