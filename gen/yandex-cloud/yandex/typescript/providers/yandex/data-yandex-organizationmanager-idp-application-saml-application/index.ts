// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the SAML application to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application#application_id DataYandexOrganizationmanagerIdpApplicationSamlApplication#application_id}
  */
  readonly applicationId?: string;
  /**
  * ID of the SAML application to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application#id DataYandexOrganizationmanagerIdpApplicationSamlApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application#timeouts DataYandexOrganizationmanagerIdpApplicationSamlApplication#timeouts}
  */
  readonly timeouts?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeouts;
}
export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes {
}

export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesToTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesToHclTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesOutputReference {
    return new DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId {
}

export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameIdToTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameIdToHclTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMapping {
}

export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingToTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingToHclTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // name_id - computed: true, optional: false, required: false
  private _nameId = new DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingNameIdOutputReference(this, "name_id");
  public get nameId() {
    return this._nameId;
  }
}
export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings {
}

export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettingsToTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettingsToHclTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_attribute_name - computed: true, optional: false, required: false
  public get groupAttributeName() {
    return this.getStringAttribute('group_attribute_name');
  }

  // group_distribution_type - computed: true, optional: false, required: false
  public get groupDistributionType() {
    return this.getStringAttribute('group_distribution_type');
  }
}
export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadata {
}

export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadataToTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadataToHclTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadata | undefined) {
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
export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationSecuritySettings {
}

export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationSecuritySettingsToTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationSecuritySettingsToHclTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationSecuritySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpApplicationSamlApplicationSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationSecuritySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // signature_certificate_id - computed: true, optional: false, required: false
  public get signatureCertificateId() {
    return this.getStringAttribute('signature_certificate_id');
  }

  // signature_mode - computed: true, optional: false, required: false
  public get signatureMode() {
    return this.getStringAttribute('signature_mode');
  }
}
export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls {
}

export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsToTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsToHclTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsOutputReference {
    return new DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls {
}

export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsToTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsToHclTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // protocol_binding - computed: true, optional: false, required: false
  public get protocolBinding() {
    return this.getStringAttribute('protocol_binding');
  }

  // response_url - computed: true, optional: false, required: false
  public get responseUrl() {
    return this.getStringAttribute('response_url');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsOutputReference {
    return new DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProvider {
}

export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderToTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderToHclTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acs_urls - computed: true, optional: false, required: false
  private _acsUrls = new DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderAcsUrlsList(this, "acs_urls", false);
  public get acsUrls() {
    return this._acsUrls;
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // slo_urls - computed: true, optional: false, required: false
  private _sloUrls = new DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderSloUrlsList(this, "slo_urls", false);
  public get sloUrls() {
    return this._sloUrls;
  }
}
export interface DataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application#create DataYandexOrganizationmanagerIdpApplicationSamlApplication#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application#delete DataYandexOrganizationmanagerIdpApplicationSamlApplication#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application#read DataYandexOrganizationmanagerIdpApplicationSamlApplication#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application#update DataYandexOrganizationmanagerIdpApplicationSamlApplication#update}
  */
  readonly update?: string;
}

export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeoutsToTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeouts | cdktf.IResolvable): any {
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


export function dataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeoutsToHclTerraform(struct?: DataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeouts | cdktf.IResolvable): any {
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

export class DataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application yandex_organizationmanager_idp_application_saml_application}
*/
export class DataYandexOrganizationmanagerIdpApplicationSamlApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_idp_application_saml_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexOrganizationmanagerIdpApplicationSamlApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexOrganizationmanagerIdpApplicationSamlApplication to import
  * @param importFromId The id of the existing DataYandexOrganizationmanagerIdpApplicationSamlApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexOrganizationmanagerIdpApplicationSamlApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_organizationmanager_idp_application_saml_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/organizationmanager_idp_application_saml_application yandex_organizationmanager_idp_application_saml_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexOrganizationmanagerIdpApplicationSamlApplicationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexOrganizationmanagerIdpApplicationSamlApplicationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_idp_application_saml_application',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
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
    this._id = config.id;
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

  // attribute_mapping - computed: true, optional: false, required: false
  private _attributeMapping = new DataYandexOrganizationmanagerIdpApplicationSamlApplicationAttributeMappingOutputReference(this, "attribute_mapping");
  public get attributeMapping() {
    return this._attributeMapping;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // group_claims_settings - computed: true, optional: false, required: false
  private _groupClaimsSettings = new DataYandexOrganizationmanagerIdpApplicationSamlApplicationGroupClaimsSettingsOutputReference(this, "group_claims_settings");
  public get groupClaimsSettings() {
    return this._groupClaimsSettings;
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
  private _identityProviderMetadata = new DataYandexOrganizationmanagerIdpApplicationSamlApplicationIdentityProviderMetadataOutputReference(this, "identity_provider_metadata");
  public get identityProviderMetadata() {
    return this._identityProviderMetadata;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // security_settings - computed: true, optional: false, required: false
  private _securitySettings = new DataYandexOrganizationmanagerIdpApplicationSamlApplicationSecuritySettingsOutputReference(this, "security_settings");
  public get securitySettings() {
    return this._securitySettings;
  }

  // service_provider - computed: true, optional: false, required: false
  private _serviceProvider = new DataYandexOrganizationmanagerIdpApplicationSamlApplicationServiceProviderOutputReference(this, "service_provider");
  public get serviceProvider() {
    return this._serviceProvider;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexOrganizationmanagerIdpApplicationSamlApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
