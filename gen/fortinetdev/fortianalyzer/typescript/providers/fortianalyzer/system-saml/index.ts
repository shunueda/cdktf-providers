// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#acs_url SystemSaml#acs_url}
  */
  readonly acsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#auth_request_signed SystemSaml#auth_request_signed}
  */
  readonly authRequestSigned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#cert SystemSaml#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#default_profile SystemSaml#default_profile}
  */
  readonly defaultProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#dynamic_sort_subtable SystemSaml#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#entity_id SystemSaml#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#forticloud_sso SystemSaml#forticloud_sso}
  */
  readonly forticloudSso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#id SystemSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_cert SystemSaml#idp_cert}
  */
  readonly idpCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_entity_id SystemSaml#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_single_logout_url SystemSaml#idp_single_logout_url}
  */
  readonly idpSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_single_sign_on_url SystemSaml#idp_single_sign_on_url}
  */
  readonly idpSingleSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#login_auto_redirect SystemSaml#login_auto_redirect}
  */
  readonly loginAutoRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#logout_request_signed SystemSaml#logout_request_signed}
  */
  readonly logoutRequestSigned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#logout_response_signed SystemSaml#logout_response_signed}
  */
  readonly logoutResponseSigned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#role SystemSaml#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#server_address SystemSaml#server_address}
  */
  readonly serverAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#sls_url SystemSaml#sls_url}
  */
  readonly slsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#status SystemSaml#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#user_auto_create SystemSaml#user_auto_create}
  */
  readonly userAutoCreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#want_assertions_signed SystemSaml#want_assertions_signed}
  */
  readonly wantAssertionsSigned?: string;
  /**
  * fabric_idp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#fabric_idp SystemSaml#fabric_idp}
  */
  readonly fabricIdp?: SystemSamlFabricIdp[] | cdktf.IResolvable;
  /**
  * service_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#service_providers SystemSaml#service_providers}
  */
  readonly serviceProviders?: SystemSamlServiceProviders[] | cdktf.IResolvable;
}
export interface SystemSamlFabricIdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#dev_id SystemSaml#dev_id}
  */
  readonly devId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_cert SystemSaml#idp_cert}
  */
  readonly idpCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_entity_id SystemSaml#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_single_logout_url SystemSaml#idp_single_logout_url}
  */
  readonly idpSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_single_sign_on_url SystemSaml#idp_single_sign_on_url}
  */
  readonly idpSingleSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_status SystemSaml#idp_status}
  */
  readonly idpStatus?: string;
}

export function systemSamlFabricIdpToTerraform(struct?: SystemSamlFabricIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_id: cdktf.stringToTerraform(struct!.devId),
    idp_cert: cdktf.stringToTerraform(struct!.idpCert),
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    idp_single_logout_url: cdktf.stringToTerraform(struct!.idpSingleLogoutUrl),
    idp_single_sign_on_url: cdktf.stringToTerraform(struct!.idpSingleSignOnUrl),
    idp_status: cdktf.stringToTerraform(struct!.idpStatus),
  }
}


export function systemSamlFabricIdpToHclTerraform(struct?: SystemSamlFabricIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_id: {
      value: cdktf.stringToHclTerraform(struct!.devId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_cert: {
      value: cdktf.stringToHclTerraform(struct!.idpCert),
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
    idp_status: {
      value: cdktf.stringToHclTerraform(struct!.idpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSamlFabricIdpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSamlFabricIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devId !== undefined) {
      hasAnyValues = true;
      internalValueResult.devId = this._devId;
    }
    if (this._idpCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpCert = this._idpCert;
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
    if (this._idpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpStatus = this._idpStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSamlFabricIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devId = undefined;
      this._idpCert = undefined;
      this._idpEntityId = undefined;
      this._idpSingleLogoutUrl = undefined;
      this._idpSingleSignOnUrl = undefined;
      this._idpStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devId = value.devId;
      this._idpCert = value.idpCert;
      this._idpEntityId = value.idpEntityId;
      this._idpSingleLogoutUrl = value.idpSingleLogoutUrl;
      this._idpSingleSignOnUrl = value.idpSingleSignOnUrl;
      this._idpStatus = value.idpStatus;
    }
  }

  // dev_id - computed: false, optional: true, required: false
  private _devId?: string; 
  public get devId() {
    return this.getStringAttribute('dev_id');
  }
  public set devId(value: string) {
    this._devId = value;
  }
  public resetDevId() {
    this._devId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devIdInput() {
    return this._devId;
  }

  // idp_cert - computed: false, optional: true, required: false
  private _idpCert?: string; 
  public get idpCert() {
    return this.getStringAttribute('idp_cert');
  }
  public set idpCert(value: string) {
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

  // idp_status - computed: true, optional: true, required: false
  private _idpStatus?: string; 
  public get idpStatus() {
    return this.getStringAttribute('idp_status');
  }
  public set idpStatus(value: string) {
    this._idpStatus = value;
  }
  public resetIdpStatus() {
    this._idpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpStatusInput() {
    return this._idpStatus;
  }
}

export class SystemSamlFabricIdpList extends cdktf.ComplexList {
  public internalValue? : SystemSamlFabricIdp[] | cdktf.IResolvable

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
  public get(index: number): SystemSamlFabricIdpOutputReference {
    return new SystemSamlFabricIdpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSamlServiceProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_entity_id SystemSaml#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_single_logout_url SystemSaml#idp_single_logout_url}
  */
  readonly idpSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#idp_single_sign_on_url SystemSaml#idp_single_sign_on_url}
  */
  readonly idpSingleSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#name SystemSaml#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#prefix SystemSaml#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#sp_adom SystemSaml#sp_adom}
  */
  readonly spAdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#sp_cert SystemSaml#sp_cert}
  */
  readonly spCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#sp_entity_id SystemSaml#sp_entity_id}
  */
  readonly spEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#sp_profile SystemSaml#sp_profile}
  */
  readonly spProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#sp_single_logout_url SystemSaml#sp_single_logout_url}
  */
  readonly spSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#sp_single_sign_on_url SystemSaml#sp_single_sign_on_url}
  */
  readonly spSingleSignOnUrl?: string;
}

export function systemSamlServiceProvidersToTerraform(struct?: SystemSamlServiceProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    idp_single_logout_url: cdktf.stringToTerraform(struct!.idpSingleLogoutUrl),
    idp_single_sign_on_url: cdktf.stringToTerraform(struct!.idpSingleSignOnUrl),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    sp_adom: cdktf.stringToTerraform(struct!.spAdom),
    sp_cert: cdktf.stringToTerraform(struct!.spCert),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
    sp_profile: cdktf.stringToTerraform(struct!.spProfile),
    sp_single_logout_url: cdktf.stringToTerraform(struct!.spSingleLogoutUrl),
    sp_single_sign_on_url: cdktf.stringToTerraform(struct!.spSingleSignOnUrl),
  }
}


export function systemSamlServiceProvidersToHclTerraform(struct?: SystemSamlServiceProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    sp_adom: {
      value: cdktf.stringToHclTerraform(struct!.spAdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_cert: {
      value: cdktf.stringToHclTerraform(struct!.spCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.spEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_profile: {
      value: cdktf.stringToHclTerraform(struct!.spProfile),
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
    if (this._spAdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.spAdom = this._spAdom;
    }
    if (this._spCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.spCert = this._spCert;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    if (this._spProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.spProfile = this._spProfile;
    }
    if (this._spSingleLogoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.spSingleLogoutUrl = this._spSingleLogoutUrl;
    }
    if (this._spSingleSignOnUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.spSingleSignOnUrl = this._spSingleSignOnUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSamlServiceProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idpEntityId = undefined;
      this._idpSingleLogoutUrl = undefined;
      this._idpSingleSignOnUrl = undefined;
      this._name = undefined;
      this._prefix = undefined;
      this._spAdom = undefined;
      this._spCert = undefined;
      this._spEntityId = undefined;
      this._spProfile = undefined;
      this._spSingleLogoutUrl = undefined;
      this._spSingleSignOnUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idpEntityId = value.idpEntityId;
      this._idpSingleLogoutUrl = value.idpSingleLogoutUrl;
      this._idpSingleSignOnUrl = value.idpSingleSignOnUrl;
      this._name = value.name;
      this._prefix = value.prefix;
      this._spAdom = value.spAdom;
      this._spCert = value.spCert;
      this._spEntityId = value.spEntityId;
      this._spProfile = value.spProfile;
      this._spSingleLogoutUrl = value.spSingleLogoutUrl;
      this._spSingleSignOnUrl = value.spSingleSignOnUrl;
    }
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

  // sp_adom - computed: false, optional: true, required: false
  private _spAdom?: string; 
  public get spAdom() {
    return this.getStringAttribute('sp_adom');
  }
  public set spAdom(value: string) {
    this._spAdom = value;
  }
  public resetSpAdom() {
    this._spAdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spAdomInput() {
    return this._spAdom;
  }

  // sp_cert - computed: false, optional: true, required: false
  private _spCert?: string; 
  public get spCert() {
    return this.getStringAttribute('sp_cert');
  }
  public set spCert(value: string) {
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

  // sp_profile - computed: false, optional: true, required: false
  private _spProfile?: string; 
  public get spProfile() {
    return this.getStringAttribute('sp_profile');
  }
  public set spProfile(value: string) {
    this._spProfile = value;
  }
  public resetSpProfile() {
    this._spProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spProfileInput() {
    return this._spProfile;
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml fortianalyzer_system_saml}
*/
export class SystemSaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSaml to import
  * @param importFromId The id of the existing SystemSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_saml fortianalyzer_system_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSamlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSamlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_saml',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acsUrl = config.acsUrl;
    this._authRequestSigned = config.authRequestSigned;
    this._cert = config.cert;
    this._defaultProfile = config.defaultProfile;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._entityId = config.entityId;
    this._forticloudSso = config.forticloudSso;
    this._id = config.id;
    this._idpCert = config.idpCert;
    this._idpEntityId = config.idpEntityId;
    this._idpSingleLogoutUrl = config.idpSingleLogoutUrl;
    this._idpSingleSignOnUrl = config.idpSingleSignOnUrl;
    this._loginAutoRedirect = config.loginAutoRedirect;
    this._logoutRequestSigned = config.logoutRequestSigned;
    this._logoutResponseSigned = config.logoutResponseSigned;
    this._role = config.role;
    this._serverAddress = config.serverAddress;
    this._slsUrl = config.slsUrl;
    this._status = config.status;
    this._userAutoCreate = config.userAutoCreate;
    this._wantAssertionsSigned = config.wantAssertionsSigned;
    this._fabricIdp.internalValue = config.fabricIdp;
    this._serviceProviders.internalValue = config.serviceProviders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_url - computed: true, optional: true, required: false
  private _acsUrl?: string; 
  public get acsUrl() {
    return this.getStringAttribute('acs_url');
  }
  public set acsUrl(value: string) {
    this._acsUrl = value;
  }
  public resetAcsUrl() {
    this._acsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsUrlInput() {
    return this._acsUrl;
  }

  // auth_request_signed - computed: true, optional: true, required: false
  private _authRequestSigned?: string; 
  public get authRequestSigned() {
    return this.getStringAttribute('auth_request_signed');
  }
  public set authRequestSigned(value: string) {
    this._authRequestSigned = value;
  }
  public resetAuthRequestSigned() {
    this._authRequestSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRequestSignedInput() {
    return this._authRequestSigned;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // default_profile - computed: true, optional: true, required: false
  private _defaultProfile?: string; 
  public get defaultProfile() {
    return this.getStringAttribute('default_profile');
  }
  public set defaultProfile(value: string) {
    this._defaultProfile = value;
  }
  public resetDefaultProfile() {
    this._defaultProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProfileInput() {
    return this._defaultProfile;
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

  // entity_id - computed: true, optional: true, required: false
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

  // forticloud_sso - computed: true, optional: true, required: false
  private _forticloudSso?: string; 
  public get forticloudSso() {
    return this.getStringAttribute('forticloud_sso');
  }
  public set forticloudSso(value: string) {
    this._forticloudSso = value;
  }
  public resetForticloudSso() {
    this._forticloudSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticloudSsoInput() {
    return this._forticloudSso;
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

  // idp_cert - computed: false, optional: true, required: false
  private _idpCert?: string; 
  public get idpCert() {
    return this.getStringAttribute('idp_cert');
  }
  public set idpCert(value: string) {
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

  // login_auto_redirect - computed: true, optional: true, required: false
  private _loginAutoRedirect?: string; 
  public get loginAutoRedirect() {
    return this.getStringAttribute('login_auto_redirect');
  }
  public set loginAutoRedirect(value: string) {
    this._loginAutoRedirect = value;
  }
  public resetLoginAutoRedirect() {
    this._loginAutoRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAutoRedirectInput() {
    return this._loginAutoRedirect;
  }

  // logout_request_signed - computed: true, optional: true, required: false
  private _logoutRequestSigned?: string; 
  public get logoutRequestSigned() {
    return this.getStringAttribute('logout_request_signed');
  }
  public set logoutRequestSigned(value: string) {
    this._logoutRequestSigned = value;
  }
  public resetLogoutRequestSigned() {
    this._logoutRequestSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutRequestSignedInput() {
    return this._logoutRequestSigned;
  }

  // logout_response_signed - computed: true, optional: true, required: false
  private _logoutResponseSigned?: string; 
  public get logoutResponseSigned() {
    return this.getStringAttribute('logout_response_signed');
  }
  public set logoutResponseSigned(value: string) {
    this._logoutResponseSigned = value;
  }
  public resetLogoutResponseSigned() {
    this._logoutResponseSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutResponseSignedInput() {
    return this._logoutResponseSigned;
  }

  // role - computed: true, optional: true, required: false
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

  // sls_url - computed: true, optional: true, required: false
  private _slsUrl?: string; 
  public get slsUrl() {
    return this.getStringAttribute('sls_url');
  }
  public set slsUrl(value: string) {
    this._slsUrl = value;
  }
  public resetSlsUrl() {
    this._slsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsUrlInput() {
    return this._slsUrl;
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

  // user_auto_create - computed: true, optional: true, required: false
  private _userAutoCreate?: string; 
  public get userAutoCreate() {
    return this.getStringAttribute('user_auto_create');
  }
  public set userAutoCreate(value: string) {
    this._userAutoCreate = value;
  }
  public resetUserAutoCreate() {
    this._userAutoCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAutoCreateInput() {
    return this._userAutoCreate;
  }

  // want_assertions_signed - computed: true, optional: true, required: false
  private _wantAssertionsSigned?: string; 
  public get wantAssertionsSigned() {
    return this.getStringAttribute('want_assertions_signed');
  }
  public set wantAssertionsSigned(value: string) {
    this._wantAssertionsSigned = value;
  }
  public resetWantAssertionsSigned() {
    this._wantAssertionsSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantAssertionsSignedInput() {
    return this._wantAssertionsSigned;
  }

  // fabric_idp - computed: false, optional: true, required: false
  private _fabricIdp = new SystemSamlFabricIdpList(this, "fabric_idp", false);
  public get fabricIdp() {
    return this._fabricIdp;
  }
  public putFabricIdp(value: SystemSamlFabricIdp[] | cdktf.IResolvable) {
    this._fabricIdp.internalValue = value;
  }
  public resetFabricIdp() {
    this._fabricIdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdpInput() {
    return this._fabricIdp.internalValue;
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
      acs_url: cdktf.stringToTerraform(this._acsUrl),
      auth_request_signed: cdktf.stringToTerraform(this._authRequestSigned),
      cert: cdktf.stringToTerraform(this._cert),
      default_profile: cdktf.stringToTerraform(this._defaultProfile),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      entity_id: cdktf.stringToTerraform(this._entityId),
      forticloud_sso: cdktf.stringToTerraform(this._forticloudSso),
      id: cdktf.stringToTerraform(this._id),
      idp_cert: cdktf.stringToTerraform(this._idpCert),
      idp_entity_id: cdktf.stringToTerraform(this._idpEntityId),
      idp_single_logout_url: cdktf.stringToTerraform(this._idpSingleLogoutUrl),
      idp_single_sign_on_url: cdktf.stringToTerraform(this._idpSingleSignOnUrl),
      login_auto_redirect: cdktf.stringToTerraform(this._loginAutoRedirect),
      logout_request_signed: cdktf.stringToTerraform(this._logoutRequestSigned),
      logout_response_signed: cdktf.stringToTerraform(this._logoutResponseSigned),
      role: cdktf.stringToTerraform(this._role),
      server_address: cdktf.stringToTerraform(this._serverAddress),
      sls_url: cdktf.stringToTerraform(this._slsUrl),
      status: cdktf.stringToTerraform(this._status),
      user_auto_create: cdktf.stringToTerraform(this._userAutoCreate),
      want_assertions_signed: cdktf.stringToTerraform(this._wantAssertionsSigned),
      fabric_idp: cdktf.listMapper(systemSamlFabricIdpToTerraform, true)(this._fabricIdp.internalValue),
      service_providers: cdktf.listMapper(systemSamlServiceProvidersToTerraform, true)(this._serviceProviders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acs_url: {
        value: cdktf.stringToHclTerraform(this._acsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_request_signed: {
        value: cdktf.stringToHclTerraform(this._authRequestSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_profile: {
        value: cdktf.stringToHclTerraform(this._defaultProfile),
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
      forticloud_sso: {
        value: cdktf.stringToHclTerraform(this._forticloudSso),
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
      idp_cert: {
        value: cdktf.stringToHclTerraform(this._idpCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      login_auto_redirect: {
        value: cdktf.stringToHclTerraform(this._loginAutoRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_request_signed: {
        value: cdktf.stringToHclTerraform(this._logoutRequestSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_response_signed: {
        value: cdktf.stringToHclTerraform(this._logoutResponseSigned),
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
      sls_url: {
        value: cdktf.stringToHclTerraform(this._slsUrl),
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
      user_auto_create: {
        value: cdktf.stringToHclTerraform(this._userAutoCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      want_assertions_signed: {
        value: cdktf.stringToHclTerraform(this._wantAssertionsSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_idp: {
        value: cdktf.listMapperHcl(systemSamlFabricIdpToHclTerraform, true)(this._fabricIdp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSamlFabricIdpList",
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
