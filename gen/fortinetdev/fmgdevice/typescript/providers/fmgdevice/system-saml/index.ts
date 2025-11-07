// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#artifact_resolution_url SystemSaml#artifact_resolution_url}
  */
  readonly artifactResolutionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#binding_protocol SystemSaml#binding_protocol}
  */
  readonly bindingProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#cert SystemSaml#cert}
  */
  readonly cert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#default_login_page SystemSaml#default_login_page}
  */
  readonly defaultLoginPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#default_profile SystemSaml#default_profile}
  */
  readonly defaultProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#device_name SystemSaml#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#dynamic_sort_subtable SystemSaml#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#entity_id SystemSaml#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#id SystemSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#idp_artifact_resolution_url SystemSaml#idp_artifact_resolution_url}
  */
  readonly idpArtifactResolutionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#idp_cert SystemSaml#idp_cert}
  */
  readonly idpCert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#idp_entity_id SystemSaml#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#idp_single_logout_url SystemSaml#idp_single_logout_url}
  */
  readonly idpSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#idp_single_sign_on_url SystemSaml#idp_single_sign_on_url}
  */
  readonly idpSingleSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#life SystemSaml#life}
  */
  readonly life?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#portal_url SystemSaml#portal_url}
  */
  readonly portalUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#role SystemSaml#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#server_address SystemSaml#server_address}
  */
  readonly serverAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#single_logout_url SystemSaml#single_logout_url}
  */
  readonly singleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#single_sign_on_url SystemSaml#single_sign_on_url}
  */
  readonly singleSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#status SystemSaml#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#tolerance SystemSaml#tolerance}
  */
  readonly tolerance?: number;
  /**
  * service_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#service_providers SystemSaml#service_providers}
  */
  readonly serviceProviders?: SystemSamlServiceProviders[] | cdktf.IResolvable;
}
export interface SystemSamlServiceProvidersAssertionAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#name SystemSaml#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#type SystemSaml#type}
  */
  readonly type?: string;
}

export function systemSamlServiceProvidersAssertionAttributesToTerraform(struct?: SystemSamlServiceProvidersAssertionAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemSamlServiceProvidersAssertionAttributesToHclTerraform(struct?: SystemSamlServiceProvidersAssertionAttributes | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSamlServiceProvidersAssertionAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSamlServiceProvidersAssertionAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSamlServiceProvidersAssertionAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SystemSamlServiceProvidersAssertionAttributesList extends cdktf.ComplexList {
  public internalValue? : SystemSamlServiceProvidersAssertionAttributes[] | cdktf.IResolvable

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
  public get(index: number): SystemSamlServiceProvidersAssertionAttributesOutputReference {
    return new SystemSamlServiceProvidersAssertionAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSamlServiceProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#idp_artifact_resolution_url SystemSaml#idp_artifact_resolution_url}
  */
  readonly idpArtifactResolutionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#idp_entity_id SystemSaml#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#idp_single_logout_url SystemSaml#idp_single_logout_url}
  */
  readonly idpSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#idp_single_sign_on_url SystemSaml#idp_single_sign_on_url}
  */
  readonly idpSingleSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#name SystemSaml#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#prefix SystemSaml#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#sp_artifact_resolution_url SystemSaml#sp_artifact_resolution_url}
  */
  readonly spArtifactResolutionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#sp_binding_protocol SystemSaml#sp_binding_protocol}
  */
  readonly spBindingProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#sp_cert SystemSaml#sp_cert}
  */
  readonly spCert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#sp_entity_id SystemSaml#sp_entity_id}
  */
  readonly spEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#sp_portal_url SystemSaml#sp_portal_url}
  */
  readonly spPortalUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#sp_single_logout_url SystemSaml#sp_single_logout_url}
  */
  readonly spSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#sp_single_sign_on_url SystemSaml#sp_single_sign_on_url}
  */
  readonly spSingleSignOnUrl?: string;
  /**
  * assertion_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#assertion_attributes SystemSaml#assertion_attributes}
  */
  readonly assertionAttributes?: SystemSamlServiceProvidersAssertionAttributes[] | cdktf.IResolvable;
}

export function systemSamlServiceProvidersToTerraform(struct?: SystemSamlServiceProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_artifact_resolution_url: cdktf.stringToTerraform(struct!.idpArtifactResolutionUrl),
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    idp_single_logout_url: cdktf.stringToTerraform(struct!.idpSingleLogoutUrl),
    idp_single_sign_on_url: cdktf.stringToTerraform(struct!.idpSingleSignOnUrl),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    sp_artifact_resolution_url: cdktf.stringToTerraform(struct!.spArtifactResolutionUrl),
    sp_binding_protocol: cdktf.stringToTerraform(struct!.spBindingProtocol),
    sp_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.spCert),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
    sp_portal_url: cdktf.stringToTerraform(struct!.spPortalUrl),
    sp_single_logout_url: cdktf.stringToTerraform(struct!.spSingleLogoutUrl),
    sp_single_sign_on_url: cdktf.stringToTerraform(struct!.spSingleSignOnUrl),
    assertion_attributes: cdktf.listMapper(systemSamlServiceProvidersAssertionAttributesToTerraform, true)(struct!.assertionAttributes),
  }
}


export function systemSamlServiceProvidersToHclTerraform(struct?: SystemSamlServiceProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp_artifact_resolution_url: {
      value: cdktf.stringToHclTerraform(struct!.idpArtifactResolutionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.idpEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_single_logout_url: {
      value: cdktf.stringToHclTerraform(struct!.idpSingleLogoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_single_sign_on_url: {
      value: cdktf.stringToHclTerraform(struct!.idpSingleSignOnUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_artifact_resolution_url: {
      value: cdktf.stringToHclTerraform(struct!.spArtifactResolutionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_binding_protocol: {
      value: cdktf.stringToHclTerraform(struct!.spBindingProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_cert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.spCert),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.spEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_portal_url: {
      value: cdktf.stringToHclTerraform(struct!.spPortalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_single_logout_url: {
      value: cdktf.stringToHclTerraform(struct!.spSingleLogoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_single_sign_on_url: {
      value: cdktf.stringToHclTerraform(struct!.spSingleSignOnUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_attributes: {
      value: cdktf.listMapperHcl(systemSamlServiceProvidersAssertionAttributesToHclTerraform, true)(struct!.assertionAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "SystemSamlServiceProvidersAssertionAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSamlServiceProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSamlServiceProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpArtifactResolutionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpArtifactResolutionUrl = this._idpArtifactResolutionUrl;
    }
    if (this._idpEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpEntityId = this._idpEntityId;
    }
    if (this._idpSingleLogoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpSingleLogoutUrl = this._idpSingleLogoutUrl;
    }
    if (this._idpSingleSignOnUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpSingleSignOnUrl = this._idpSingleSignOnUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._spArtifactResolutionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.spArtifactResolutionUrl = this._spArtifactResolutionUrl;
    }
    if (this._spBindingProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.spBindingProtocol = this._spBindingProtocol;
    }
    if (this._spCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.spCert = this._spCert;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    if (this._spPortalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.spPortalUrl = this._spPortalUrl;
    }
    if (this._spSingleLogoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.spSingleLogoutUrl = this._spSingleLogoutUrl;
    }
    if (this._spSingleSignOnUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.spSingleSignOnUrl = this._spSingleSignOnUrl;
    }
    if (this._assertionAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionAttributes = this._assertionAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSamlServiceProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idpArtifactResolutionUrl = undefined;
      this._idpEntityId = undefined;
      this._idpSingleLogoutUrl = undefined;
      this._idpSingleSignOnUrl = undefined;
      this._name = undefined;
      this._prefix = undefined;
      this._spArtifactResolutionUrl = undefined;
      this._spBindingProtocol = undefined;
      this._spCert = undefined;
      this._spEntityId = undefined;
      this._spPortalUrl = undefined;
      this._spSingleLogoutUrl = undefined;
      this._spSingleSignOnUrl = undefined;
      this._assertionAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idpArtifactResolutionUrl = value.idpArtifactResolutionUrl;
      this._idpEntityId = value.idpEntityId;
      this._idpSingleLogoutUrl = value.idpSingleLogoutUrl;
      this._idpSingleSignOnUrl = value.idpSingleSignOnUrl;
      this._name = value.name;
      this._prefix = value.prefix;
      this._spArtifactResolutionUrl = value.spArtifactResolutionUrl;
      this._spBindingProtocol = value.spBindingProtocol;
      this._spCert = value.spCert;
      this._spEntityId = value.spEntityId;
      this._spPortalUrl = value.spPortalUrl;
      this._spSingleLogoutUrl = value.spSingleLogoutUrl;
      this._spSingleSignOnUrl = value.spSingleSignOnUrl;
      this._assertionAttributes.internalValue = value.assertionAttributes;
    }
  }

  // idp_artifact_resolution_url - computed: false, optional: true, required: false
  private _idpArtifactResolutionUrl?: string; 
  public get idpArtifactResolutionUrl() {
    return this.getStringAttribute('idp_artifact_resolution_url');
  }
  public set idpArtifactResolutionUrl(value: string) {
    this._idpArtifactResolutionUrl = value;
  }
  public resetIdpArtifactResolutionUrl() {
    this._idpArtifactResolutionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpArtifactResolutionUrlInput() {
    return this._idpArtifactResolutionUrl;
  }

  // idp_entity_id - computed: false, optional: true, required: false
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  public resetIdpEntityId() {
    this._idpEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_single_logout_url - computed: false, optional: true, required: false
  private _idpSingleLogoutUrl?: string; 
  public get idpSingleLogoutUrl() {
    return this.getStringAttribute('idp_single_logout_url');
  }
  public set idpSingleLogoutUrl(value: string) {
    this._idpSingleLogoutUrl = value;
  }
  public resetIdpSingleLogoutUrl() {
    this._idpSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleLogoutUrlInput() {
    return this._idpSingleLogoutUrl;
  }

  // idp_single_sign_on_url - computed: false, optional: true, required: false
  private _idpSingleSignOnUrl?: string; 
  public get idpSingleSignOnUrl() {
    return this.getStringAttribute('idp_single_sign_on_url');
  }
  public set idpSingleSignOnUrl(value: string) {
    this._idpSingleSignOnUrl = value;
  }
  public resetIdpSingleSignOnUrl() {
    this._idpSingleSignOnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleSignOnUrlInput() {
    return this._idpSingleSignOnUrl;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // sp_artifact_resolution_url - computed: false, optional: true, required: false
  private _spArtifactResolutionUrl?: string; 
  public get spArtifactResolutionUrl() {
    return this.getStringAttribute('sp_artifact_resolution_url');
  }
  public set spArtifactResolutionUrl(value: string) {
    this._spArtifactResolutionUrl = value;
  }
  public resetSpArtifactResolutionUrl() {
    this._spArtifactResolutionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spArtifactResolutionUrlInput() {
    return this._spArtifactResolutionUrl;
  }

  // sp_binding_protocol - computed: false, optional: true, required: false
  private _spBindingProtocol?: string; 
  public get spBindingProtocol() {
    return this.getStringAttribute('sp_binding_protocol');
  }
  public set spBindingProtocol(value: string) {
    this._spBindingProtocol = value;
  }
  public resetSpBindingProtocol() {
    this._spBindingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spBindingProtocolInput() {
    return this._spBindingProtocol;
  }

  // sp_cert - computed: true, optional: true, required: false
  private _spCert?: string[]; 
  public get spCert() {
    return cdktf.Fn.tolist(this.getListAttribute('sp_cert'));
  }
  public set spCert(value: string[]) {
    this._spCert = value;
  }
  public resetSpCert() {
    this._spCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spCertInput() {
    return this._spCert;
  }

  // sp_entity_id - computed: false, optional: true, required: false
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  public resetSpEntityId() {
    this._spEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }

  // sp_portal_url - computed: false, optional: true, required: false
  private _spPortalUrl?: string; 
  public get spPortalUrl() {
    return this.getStringAttribute('sp_portal_url');
  }
  public set spPortalUrl(value: string) {
    this._spPortalUrl = value;
  }
  public resetSpPortalUrl() {
    this._spPortalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spPortalUrlInput() {
    return this._spPortalUrl;
  }

  // sp_single_logout_url - computed: false, optional: true, required: false
  private _spSingleLogoutUrl?: string; 
  public get spSingleLogoutUrl() {
    return this.getStringAttribute('sp_single_logout_url');
  }
  public set spSingleLogoutUrl(value: string) {
    this._spSingleLogoutUrl = value;
  }
  public resetSpSingleLogoutUrl() {
    this._spSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSingleLogoutUrlInput() {
    return this._spSingleLogoutUrl;
  }

  // sp_single_sign_on_url - computed: false, optional: true, required: false
  private _spSingleSignOnUrl?: string; 
  public get spSingleSignOnUrl() {
    return this.getStringAttribute('sp_single_sign_on_url');
  }
  public set spSingleSignOnUrl(value: string) {
    this._spSingleSignOnUrl = value;
  }
  public resetSpSingleSignOnUrl() {
    this._spSingleSignOnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSingleSignOnUrlInput() {
    return this._spSingleSignOnUrl;
  }

  // assertion_attributes - computed: false, optional: true, required: false
  private _assertionAttributes = new SystemSamlServiceProvidersAssertionAttributesList(this, "assertion_attributes", false);
  public get assertionAttributes() {
    return this._assertionAttributes;
  }
  public putAssertionAttributes(value: SystemSamlServiceProvidersAssertionAttributes[] | cdktf.IResolvable) {
    this._assertionAttributes.internalValue = value;
  }
  public resetAssertionAttributes() {
    this._assertionAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionAttributesInput() {
    return this._assertionAttributes.internalValue;
  }
}

export class SystemSamlServiceProvidersList extends cdktf.ComplexList {
  public internalValue? : SystemSamlServiceProviders[] | cdktf.IResolvable

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
  public get(index: number): SystemSamlServiceProvidersOutputReference {
    return new SystemSamlServiceProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml fmgdevice_system_saml}
*/
export class SystemSaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSaml to import
  * @param importFromId The id of the existing SystemSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_saml fmgdevice_system_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSamlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSamlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_saml',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactResolutionUrl = config.artifactResolutionUrl;
    this._bindingProtocol = config.bindingProtocol;
    this._cert = config.cert;
    this._defaultLoginPage = config.defaultLoginPage;
    this._defaultProfile = config.defaultProfile;
    this._deviceName = config.deviceName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._entityId = config.entityId;
    this._id = config.id;
    this._idpArtifactResolutionUrl = config.idpArtifactResolutionUrl;
    this._idpCert = config.idpCert;
    this._idpEntityId = config.idpEntityId;
    this._idpSingleLogoutUrl = config.idpSingleLogoutUrl;
    this._idpSingleSignOnUrl = config.idpSingleSignOnUrl;
    this._life = config.life;
    this._portalUrl = config.portalUrl;
    this._role = config.role;
    this._serverAddress = config.serverAddress;
    this._singleLogoutUrl = config.singleLogoutUrl;
    this._singleSignOnUrl = config.singleSignOnUrl;
    this._status = config.status;
    this._tolerance = config.tolerance;
    this._serviceProviders.internalValue = config.serviceProviders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_resolution_url - computed: false, optional: true, required: false
  private _artifactResolutionUrl?: string; 
  public get artifactResolutionUrl() {
    return this.getStringAttribute('artifact_resolution_url');
  }
  public set artifactResolutionUrl(value: string) {
    this._artifactResolutionUrl = value;
  }
  public resetArtifactResolutionUrl() {
    this._artifactResolutionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactResolutionUrlInput() {
    return this._artifactResolutionUrl;
  }

  // binding_protocol - computed: true, optional: true, required: false
  private _bindingProtocol?: string; 
  public get bindingProtocol() {
    return this.getStringAttribute('binding_protocol');
  }
  public set bindingProtocol(value: string) {
    this._bindingProtocol = value;
  }
  public resetBindingProtocol() {
    this._bindingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingProtocolInput() {
    return this._bindingProtocol;
  }

  // cert - computed: true, optional: true, required: false
  private _cert?: string[]; 
  public get cert() {
    return cdktf.Fn.tolist(this.getListAttribute('cert'));
  }
  public set cert(value: string[]) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // default_login_page - computed: true, optional: true, required: false
  private _defaultLoginPage?: string; 
  public get defaultLoginPage() {
    return this.getStringAttribute('default_login_page');
  }
  public set defaultLoginPage(value: string) {
    this._defaultLoginPage = value;
  }
  public resetDefaultLoginPage() {
    this._defaultLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoginPageInput() {
    return this._defaultLoginPage;
  }

  // default_profile - computed: true, optional: true, required: false
  private _defaultProfile?: string[]; 
  public get defaultProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('default_profile'));
  }
  public set defaultProfile(value: string[]) {
    this._defaultProfile = value;
  }
  public resetDefaultProfile() {
    this._defaultProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProfileInput() {
    return this._defaultProfile;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
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

  // idp_artifact_resolution_url - computed: false, optional: true, required: false
  private _idpArtifactResolutionUrl?: string; 
  public get idpArtifactResolutionUrl() {
    return this.getStringAttribute('idp_artifact_resolution_url');
  }
  public set idpArtifactResolutionUrl(value: string) {
    this._idpArtifactResolutionUrl = value;
  }
  public resetIdpArtifactResolutionUrl() {
    this._idpArtifactResolutionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpArtifactResolutionUrlInput() {
    return this._idpArtifactResolutionUrl;
  }

  // idp_cert - computed: true, optional: true, required: false
  private _idpCert?: string[]; 
  public get idpCert() {
    return cdktf.Fn.tolist(this.getListAttribute('idp_cert'));
  }
  public set idpCert(value: string[]) {
    this._idpCert = value;
  }
  public resetIdpCert() {
    this._idpCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertInput() {
    return this._idpCert;
  }

  // idp_entity_id - computed: false, optional: true, required: false
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  public resetIdpEntityId() {
    this._idpEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_single_logout_url - computed: false, optional: true, required: false
  private _idpSingleLogoutUrl?: string; 
  public get idpSingleLogoutUrl() {
    return this.getStringAttribute('idp_single_logout_url');
  }
  public set idpSingleLogoutUrl(value: string) {
    this._idpSingleLogoutUrl = value;
  }
  public resetIdpSingleLogoutUrl() {
    this._idpSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleLogoutUrlInput() {
    return this._idpSingleLogoutUrl;
  }

  // idp_single_sign_on_url - computed: false, optional: true, required: false
  private _idpSingleSignOnUrl?: string; 
  public get idpSingleSignOnUrl() {
    return this.getStringAttribute('idp_single_sign_on_url');
  }
  public set idpSingleSignOnUrl(value: string) {
    this._idpSingleSignOnUrl = value;
  }
  public resetIdpSingleSignOnUrl() {
    this._idpSingleSignOnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleSignOnUrlInput() {
    return this._idpSingleSignOnUrl;
  }

  // life - computed: false, optional: true, required: false
  private _life?: number; 
  public get life() {
    return this.getNumberAttribute('life');
  }
  public set life(value: number) {
    this._life = value;
  }
  public resetLife() {
    this._life = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeInput() {
    return this._life;
  }

  // portal_url - computed: false, optional: true, required: false
  private _portalUrl?: string; 
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }
  public set portalUrl(value: string) {
    this._portalUrl = value;
  }
  public resetPortalUrl() {
    this._portalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalUrlInput() {
    return this._portalUrl;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // server_address - computed: false, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // single_logout_url - computed: false, optional: true, required: false
  private _singleLogoutUrl?: string; 
  public get singleLogoutUrl() {
    return this.getStringAttribute('single_logout_url');
  }
  public set singleLogoutUrl(value: string) {
    this._singleLogoutUrl = value;
  }
  public resetSingleLogoutUrl() {
    this._singleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutUrlInput() {
    return this._singleLogoutUrl;
  }

  // single_sign_on_url - computed: false, optional: true, required: false
  private _singleSignOnUrl?: string; 
  public get singleSignOnUrl() {
    return this.getStringAttribute('single_sign_on_url');
  }
  public set singleSignOnUrl(value: string) {
    this._singleSignOnUrl = value;
  }
  public resetSingleSignOnUrl() {
    this._singleSignOnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUrlInput() {
    return this._singleSignOnUrl;
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

  // tolerance - computed: false, optional: true, required: false
  private _tolerance?: number; 
  public get tolerance() {
    return this.getNumberAttribute('tolerance');
  }
  public set tolerance(value: number) {
    this._tolerance = value;
  }
  public resetTolerance() {
    this._tolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceInput() {
    return this._tolerance;
  }

  // service_providers - computed: false, optional: true, required: false
  private _serviceProviders = new SystemSamlServiceProvidersList(this, "service_providers", false);
  public get serviceProviders() {
    return this._serviceProviders;
  }
  public putServiceProviders(value: SystemSamlServiceProviders[] | cdktf.IResolvable) {
    this._serviceProviders.internalValue = value;
  }
  public resetServiceProviders() {
    this._serviceProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProvidersInput() {
    return this._serviceProviders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_resolution_url: cdktf.stringToTerraform(this._artifactResolutionUrl),
      binding_protocol: cdktf.stringToTerraform(this._bindingProtocol),
      cert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cert),
      default_login_page: cdktf.stringToTerraform(this._defaultLoginPage),
      default_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultProfile),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      entity_id: cdktf.stringToTerraform(this._entityId),
      id: cdktf.stringToTerraform(this._id),
      idp_artifact_resolution_url: cdktf.stringToTerraform(this._idpArtifactResolutionUrl),
      idp_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._idpCert),
      idp_entity_id: cdktf.stringToTerraform(this._idpEntityId),
      idp_single_logout_url: cdktf.stringToTerraform(this._idpSingleLogoutUrl),
      idp_single_sign_on_url: cdktf.stringToTerraform(this._idpSingleSignOnUrl),
      life: cdktf.numberToTerraform(this._life),
      portal_url: cdktf.stringToTerraform(this._portalUrl),
      role: cdktf.stringToTerraform(this._role),
      server_address: cdktf.stringToTerraform(this._serverAddress),
      single_logout_url: cdktf.stringToTerraform(this._singleLogoutUrl),
      single_sign_on_url: cdktf.stringToTerraform(this._singleSignOnUrl),
      status: cdktf.stringToTerraform(this._status),
      tolerance: cdktf.numberToTerraform(this._tolerance),
      service_providers: cdktf.listMapper(systemSamlServiceProvidersToTerraform, true)(this._serviceProviders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_resolution_url: {
        value: cdktf.stringToHclTerraform(this._artifactResolutionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binding_protocol: {
        value: cdktf.stringToHclTerraform(this._bindingProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cert),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_login_page: {
        value: cdktf.stringToHclTerraform(this._defaultLoginPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
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
      idp_artifact_resolution_url: {
        value: cdktf.stringToHclTerraform(this._idpArtifactResolutionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_cert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._idpCert),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      idp_entity_id: {
        value: cdktf.stringToHclTerraform(this._idpEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_single_logout_url: {
        value: cdktf.stringToHclTerraform(this._idpSingleLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_single_sign_on_url: {
        value: cdktf.stringToHclTerraform(this._idpSingleSignOnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      life: {
        value: cdktf.numberToHclTerraform(this._life),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      portal_url: {
        value: cdktf.stringToHclTerraform(this._portalUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_address: {
        value: cdktf.stringToHclTerraform(this._serverAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_logout_url: {
        value: cdktf.stringToHclTerraform(this._singleLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_url: {
        value: cdktf.stringToHclTerraform(this._singleSignOnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tolerance: {
        value: cdktf.numberToHclTerraform(this._tolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_providers: {
        value: cdktf.listMapperHcl(systemSamlServiceProvidersToHclTerraform, true)(this._serviceProviders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSamlServiceProvidersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
