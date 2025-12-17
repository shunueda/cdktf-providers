// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemconfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#common_criteria_mode Systemconfiguration#common_criteria_mode}
  */
  readonly commonCriteriaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#default_license_tier Systemconfiguration#default_license_tier}
  */
  readonly defaultLicenseTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#dns_virtualservice_refs Systemconfiguration#dns_virtualservice_refs}
  */
  readonly dnsVirtualserviceRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#docker_mode Systemconfiguration#docker_mode}
  */
  readonly dockerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#enable_cors Systemconfiguration#enable_cors}
  */
  readonly enableCors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#fips_mode Systemconfiguration#fips_mode}
  */
  readonly fipsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#host_key_algorithm_exclude Systemconfiguration#host_key_algorithm_exclude}
  */
  readonly hostKeyAlgorithmExclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#id Systemconfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#kex_algorithm_exclude Systemconfiguration#kex_algorithm_exclude}
  */
  readonly kexAlgorithmExclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#rekey_time_limit Systemconfiguration#rekey_time_limit}
  */
  readonly rekeyTimeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#rekey_volume_limit Systemconfiguration#rekey_volume_limit}
  */
  readonly rekeyVolumeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ssh_ciphers Systemconfiguration#ssh_ciphers}
  */
  readonly sshCiphers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ssh_hmacs Systemconfiguration#ssh_hmacs}
  */
  readonly sshHmacs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#uuid Systemconfiguration#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#welcome_workflow_complete Systemconfiguration#welcome_workflow_complete}
  */
  readonly welcomeWorkflowComplete?: string;
  /**
  * admin_auth_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#admin_auth_configuration Systemconfiguration#admin_auth_configuration}
  */
  readonly adminAuthConfiguration?: SystemconfigurationAdminAuthConfiguration[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#configpb_attributes Systemconfiguration#configpb_attributes}
  */
  readonly configpbAttributes?: SystemconfigurationConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * controller_analytics_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#controller_analytics_policy Systemconfiguration#controller_analytics_policy}
  */
  readonly controllerAnalyticsPolicy?: SystemconfigurationControllerAnalyticsPolicy[] | cdktf.IResolvable;
  /**
  * dns_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#dns_configuration Systemconfiguration#dns_configuration}
  */
  readonly dnsConfiguration?: SystemconfigurationDnsConfiguration[] | cdktf.IResolvable;
  /**
  * email_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#email_configuration Systemconfiguration#email_configuration}
  */
  readonly emailConfiguration?: SystemconfigurationEmailConfiguration[] | cdktf.IResolvable;
  /**
  * global_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#global_tenant_config Systemconfiguration#global_tenant_config}
  */
  readonly globalTenantConfig?: SystemconfigurationGlobalTenantConfig[] | cdktf.IResolvable;
  /**
  * linux_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#linux_configuration Systemconfiguration#linux_configuration}
  */
  readonly linuxConfiguration?: SystemconfigurationLinuxConfiguration[] | cdktf.IResolvable;
  /**
  * mgmt_ip_access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#mgmt_ip_access_control Systemconfiguration#mgmt_ip_access_control}
  */
  readonly mgmtIpAccessControl?: SystemconfigurationMgmtIpAccessControl[] | cdktf.IResolvable;
  /**
  * ntp_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ntp_configuration Systemconfiguration#ntp_configuration}
  */
  readonly ntpConfiguration?: SystemconfigurationNtpConfiguration[] | cdktf.IResolvable;
  /**
  * portal_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#portal_configuration Systemconfiguration#portal_configuration}
  */
  readonly portalConfiguration?: SystemconfigurationPortalConfiguration[] | cdktf.IResolvable;
  /**
  * proxy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#proxy_configuration Systemconfiguration#proxy_configuration}
  */
  readonly proxyConfiguration?: SystemconfigurationProxyConfiguration[] | cdktf.IResolvable;
  /**
  * secure_channel_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#secure_channel_configuration Systemconfiguration#secure_channel_configuration}
  */
  readonly secureChannelConfiguration?: SystemconfigurationSecureChannelConfiguration[] | cdktf.IResolvable;
  /**
  * snmp_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#snmp_configuration Systemconfiguration#snmp_configuration}
  */
  readonly snmpConfiguration?: SystemconfigurationSnmpConfiguration[] | cdktf.IResolvable;
}
export interface SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#auth_mapping_profile_ref Systemconfiguration#auth_mapping_profile_ref}
  */
  readonly authMappingProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#auth_profile_ref Systemconfiguration#auth_profile_ref}
  */
  readonly authProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#index Systemconfiguration#index}
  */
  readonly index: string;
}

export function systemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsToTerraform(struct?: SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_mapping_profile_ref: cdktf.stringToTerraform(struct!.authMappingProfileRef),
    auth_profile_ref: cdktf.stringToTerraform(struct!.authProfileRef),
    index: cdktf.stringToTerraform(struct!.index),
  }
}


export function systemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsToHclTerraform(struct?: SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_mapping_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.authMappingProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.authProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMappingProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMappingProfileRef = this._authMappingProfileRef;
    }
    if (this._authProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProfileRef = this._authProfileRef;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMappingProfileRef = undefined;
      this._authProfileRef = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMappingProfileRef = value.authMappingProfileRef;
      this._authProfileRef = value.authProfileRef;
      this._index = value.index;
    }
  }

  // auth_mapping_profile_ref - computed: false, optional: false, required: true
  private _authMappingProfileRef?: string; 
  public get authMappingProfileRef() {
    return this.getStringAttribute('auth_mapping_profile_ref');
  }
  public set authMappingProfileRef(value: string) {
    this._authMappingProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMappingProfileRefInput() {
    return this._authMappingProfileRef;
  }

  // auth_profile_ref - computed: false, optional: false, required: true
  private _authProfileRef?: string; 
  public get authProfileRef() {
    return this.getStringAttribute('auth_profile_ref');
  }
  public set authProfileRef(value: string) {
    this._authProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authProfileRefInput() {
    return this._authProfileRef;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsOutputReference {
    return new SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationAdminAuthConfigurationServiceAuthConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#index Systemconfiguration#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#service_auth_mapping_profile_ref Systemconfiguration#service_auth_mapping_profile_ref}
  */
  readonly serviceAuthMappingProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#service_auth_profile_ref Systemconfiguration#service_auth_profile_ref}
  */
  readonly serviceAuthProfileRef: string;
}

export function systemconfigurationAdminAuthConfigurationServiceAuthConfigurationsToTerraform(struct?: SystemconfigurationAdminAuthConfigurationServiceAuthConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    service_auth_mapping_profile_ref: cdktf.stringToTerraform(struct!.serviceAuthMappingProfileRef),
    service_auth_profile_ref: cdktf.stringToTerraform(struct!.serviceAuthProfileRef),
  }
}


export function systemconfigurationAdminAuthConfigurationServiceAuthConfigurationsToHclTerraform(struct?: SystemconfigurationAdminAuthConfigurationServiceAuthConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_auth_mapping_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.serviceAuthMappingProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_auth_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.serviceAuthProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationAdminAuthConfigurationServiceAuthConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._serviceAuthMappingProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAuthMappingProfileRef = this._serviceAuthMappingProfileRef;
    }
    if (this._serviceAuthProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAuthProfileRef = this._serviceAuthProfileRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationAdminAuthConfigurationServiceAuthConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._serviceAuthMappingProfileRef = undefined;
      this._serviceAuthProfileRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._serviceAuthMappingProfileRef = value.serviceAuthMappingProfileRef;
      this._serviceAuthProfileRef = value.serviceAuthProfileRef;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // service_auth_mapping_profile_ref - computed: false, optional: false, required: true
  private _serviceAuthMappingProfileRef?: string; 
  public get serviceAuthMappingProfileRef() {
    return this.getStringAttribute('service_auth_mapping_profile_ref');
  }
  public set serviceAuthMappingProfileRef(value: string) {
    this._serviceAuthMappingProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAuthMappingProfileRefInput() {
    return this._serviceAuthMappingProfileRef;
  }

  // service_auth_profile_ref - computed: false, optional: false, required: true
  private _serviceAuthProfileRef?: string; 
  public get serviceAuthProfileRef() {
    return this.getStringAttribute('service_auth_profile_ref');
  }
  public set serviceAuthProfileRef(value: string) {
    this._serviceAuthProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAuthProfileRefInput() {
    return this._serviceAuthProfileRef;
  }
}

export class SystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationAdminAuthConfigurationServiceAuthConfigurations[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsOutputReference {
    return new SystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationAdminAuthConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#allow_local_user_login Systemconfiguration#allow_local_user_login}
  */
  readonly allowLocalUserLogin?: string;
  /**
  * remote_auth_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#remote_auth_configurations Systemconfiguration#remote_auth_configurations}
  */
  readonly remoteAuthConfigurations?: SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations[] | cdktf.IResolvable;
  /**
  * service_auth_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#service_auth_configurations Systemconfiguration#service_auth_configurations}
  */
  readonly serviceAuthConfigurations?: SystemconfigurationAdminAuthConfigurationServiceAuthConfigurations[] | cdktf.IResolvable;
}

export function systemconfigurationAdminAuthConfigurationToTerraform(struct?: SystemconfigurationAdminAuthConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_local_user_login: cdktf.stringToTerraform(struct!.allowLocalUserLogin),
    remote_auth_configurations: cdktf.listMapper(systemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsToTerraform, true)(struct!.remoteAuthConfigurations),
    service_auth_configurations: cdktf.listMapper(systemconfigurationAdminAuthConfigurationServiceAuthConfigurationsToTerraform, true)(struct!.serviceAuthConfigurations),
  }
}


export function systemconfigurationAdminAuthConfigurationToHclTerraform(struct?: SystemconfigurationAdminAuthConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_local_user_login: {
      value: cdktf.stringToHclTerraform(struct!.allowLocalUserLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_auth_configurations: {
      value: cdktf.listMapperHcl(systemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsToHclTerraform, true)(struct!.remoteAuthConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsList",
    },
    service_auth_configurations: {
      value: cdktf.listMapperHcl(systemconfigurationAdminAuthConfigurationServiceAuthConfigurationsToHclTerraform, true)(struct!.serviceAuthConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationAdminAuthConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationAdminAuthConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowLocalUserLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowLocalUserLogin = this._allowLocalUserLogin;
    }
    if (this._remoteAuthConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAuthConfigurations = this._remoteAuthConfigurations?.internalValue;
    }
    if (this._serviceAuthConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAuthConfigurations = this._serviceAuthConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationAdminAuthConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowLocalUserLogin = undefined;
      this._remoteAuthConfigurations.internalValue = undefined;
      this._serviceAuthConfigurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowLocalUserLogin = value.allowLocalUserLogin;
      this._remoteAuthConfigurations.internalValue = value.remoteAuthConfigurations;
      this._serviceAuthConfigurations.internalValue = value.serviceAuthConfigurations;
    }
  }

  // allow_local_user_login - computed: false, optional: true, required: false
  private _allowLocalUserLogin?: string; 
  public get allowLocalUserLogin() {
    return this.getStringAttribute('allow_local_user_login');
  }
  public set allowLocalUserLogin(value: string) {
    this._allowLocalUserLogin = value;
  }
  public resetAllowLocalUserLogin() {
    this._allowLocalUserLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLocalUserLoginInput() {
    return this._allowLocalUserLogin;
  }

  // remote_auth_configurations - computed: false, optional: true, required: false
  private _remoteAuthConfigurations = new SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsList(this, "remote_auth_configurations", false);
  public get remoteAuthConfigurations() {
    return this._remoteAuthConfigurations;
  }
  public putRemoteAuthConfigurations(value: SystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations[] | cdktf.IResolvable) {
    this._remoteAuthConfigurations.internalValue = value;
  }
  public resetRemoteAuthConfigurations() {
    this._remoteAuthConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthConfigurationsInput() {
    return this._remoteAuthConfigurations.internalValue;
  }

  // service_auth_configurations - computed: false, optional: true, required: false
  private _serviceAuthConfigurations = new SystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsList(this, "service_auth_configurations", false);
  public get serviceAuthConfigurations() {
    return this._serviceAuthConfigurations;
  }
  public putServiceAuthConfigurations(value: SystemconfigurationAdminAuthConfigurationServiceAuthConfigurations[] | cdktf.IResolvable) {
    this._serviceAuthConfigurations.internalValue = value;
  }
  public resetServiceAuthConfigurations() {
    this._serviceAuthConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAuthConfigurationsInput() {
    return this._serviceAuthConfigurations.internalValue;
  }
}

export class SystemconfigurationAdminAuthConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationAdminAuthConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationAdminAuthConfigurationOutputReference {
    return new SystemconfigurationAdminAuthConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#version Systemconfiguration#version}
  */
  readonly version?: string;
}

export function systemconfigurationConfigpbAttributesToTerraform(struct?: SystemconfigurationConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function systemconfigurationConfigpbAttributesToHclTerraform(struct?: SystemconfigurationConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class SystemconfigurationConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationConfigpbAttributesOutputReference {
    return new SystemconfigurationConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#metrics_event_threshold_type Systemconfiguration#metrics_event_threshold_type}
  */
  readonly metricsEventThresholdType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#reset_threshold Systemconfiguration#reset_threshold}
  */
  readonly resetThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#watermark_thresholds Systemconfiguration#watermark_thresholds}
  */
  readonly watermarkThresholds?: number[];
}

export function systemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsToTerraform(struct?: SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_event_threshold_type: cdktf.stringToTerraform(struct!.metricsEventThresholdType),
    reset_threshold: cdktf.stringToTerraform(struct!.resetThreshold),
    watermark_thresholds: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.watermarkThresholds),
  }
}


export function systemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsToHclTerraform(struct?: SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics_event_threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.metricsEventThresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_threshold: {
      value: cdktf.stringToHclTerraform(struct!.resetThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watermark_thresholds: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.watermarkThresholds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsEventThresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEventThresholdType = this._metricsEventThresholdType;
    }
    if (this._resetThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetThreshold = this._resetThreshold;
    }
    if (this._watermarkThresholds !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkThresholds = this._watermarkThresholds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsEventThresholdType = undefined;
      this._resetThreshold = undefined;
      this._watermarkThresholds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsEventThresholdType = value.metricsEventThresholdType;
      this._resetThreshold = value.resetThreshold;
      this._watermarkThresholds = value.watermarkThresholds;
    }
  }

  // metrics_event_threshold_type - computed: false, optional: false, required: true
  private _metricsEventThresholdType?: string; 
  public get metricsEventThresholdType() {
    return this.getStringAttribute('metrics_event_threshold_type');
  }
  public set metricsEventThresholdType(value: string) {
    this._metricsEventThresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEventThresholdTypeInput() {
    return this._metricsEventThresholdType;
  }

  // reset_threshold - computed: true, optional: true, required: false
  private _resetThreshold?: string; 
  public get resetThreshold() {
    return this.getStringAttribute('reset_threshold');
  }
  public set resetThreshold(value: string) {
    this._resetThreshold = value;
  }
  public resetResetThreshold() {
    this._resetThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetThresholdInput() {
    return this._resetThreshold;
  }

  // watermark_thresholds - computed: false, optional: true, required: false
  private _watermarkThresholds?: number[]; 
  public get watermarkThresholds() {
    return this.getNumberListAttribute('watermark_thresholds');
  }
  public set watermarkThresholds(value: number[]) {
    this._watermarkThresholds = value;
  }
  public resetWatermarkThresholds() {
    this._watermarkThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkThresholdsInput() {
    return this._watermarkThresholds;
  }
}

export class SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsOutputReference {
    return new SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationControllerAnalyticsPolicy {
  /**
  * metrics_event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#metrics_event_thresholds Systemconfiguration#metrics_event_thresholds}
  */
  readonly metricsEventThresholds?: SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds[] | cdktf.IResolvable;
}

export function systemconfigurationControllerAnalyticsPolicyToTerraform(struct?: SystemconfigurationControllerAnalyticsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_event_thresholds: cdktf.listMapper(systemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsToTerraform, true)(struct!.metricsEventThresholds),
  }
}


export function systemconfigurationControllerAnalyticsPolicyToHclTerraform(struct?: SystemconfigurationControllerAnalyticsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics_event_thresholds: {
      value: cdktf.listMapperHcl(systemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsToHclTerraform, true)(struct!.metricsEventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationControllerAnalyticsPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationControllerAnalyticsPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsEventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEventThresholds = this._metricsEventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationControllerAnalyticsPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsEventThresholds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsEventThresholds.internalValue = value.metricsEventThresholds;
    }
  }

  // metrics_event_thresholds - computed: false, optional: true, required: false
  private _metricsEventThresholds = new SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsList(this, "metrics_event_thresholds", false);
  public get metricsEventThresholds() {
    return this._metricsEventThresholds;
  }
  public putMetricsEventThresholds(value: SystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds[] | cdktf.IResolvable) {
    this._metricsEventThresholds.internalValue = value;
  }
  public resetMetricsEventThresholds() {
    this._metricsEventThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEventThresholdsInput() {
    return this._metricsEventThresholds.internalValue;
  }
}

export class SystemconfigurationControllerAnalyticsPolicyList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationControllerAnalyticsPolicy[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationControllerAnalyticsPolicyOutputReference {
    return new SystemconfigurationControllerAnalyticsPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationDnsConfigurationServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationDnsConfigurationServerListStructToTerraform(struct?: SystemconfigurationDnsConfigurationServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationDnsConfigurationServerListStructToHclTerraform(struct?: SystemconfigurationDnsConfigurationServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationDnsConfigurationServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationDnsConfigurationServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationDnsConfigurationServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationDnsConfigurationServerListStructList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationDnsConfigurationServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationDnsConfigurationServerListStructOutputReference {
    return new SystemconfigurationDnsConfigurationServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationDnsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#search_domain Systemconfiguration#search_domain}
  */
  readonly searchDomain?: string;
  /**
  * server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#server_list Systemconfiguration#server_list}
  */
  readonly serverList?: SystemconfigurationDnsConfigurationServerListStruct[] | cdktf.IResolvable;
}

export function systemconfigurationDnsConfigurationToTerraform(struct?: SystemconfigurationDnsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_domain: cdktf.stringToTerraform(struct!.searchDomain),
    server_list: cdktf.listMapper(systemconfigurationDnsConfigurationServerListStructToTerraform, true)(struct!.serverList),
  }
}


export function systemconfigurationDnsConfigurationToHclTerraform(struct?: SystemconfigurationDnsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_domain: {
      value: cdktf.stringToHclTerraform(struct!.searchDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_list: {
      value: cdktf.listMapperHcl(systemconfigurationDnsConfigurationServerListStructToHclTerraform, true)(struct!.serverList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationDnsConfigurationServerListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationDnsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationDnsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchDomain = this._searchDomain;
    }
    if (this._serverList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverList = this._serverList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationDnsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._searchDomain = undefined;
      this._serverList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._searchDomain = value.searchDomain;
      this._serverList.internalValue = value.serverList;
    }
  }

  // search_domain - computed: true, optional: true, required: false
  private _searchDomain?: string; 
  public get searchDomain() {
    return this.getStringAttribute('search_domain');
  }
  public set searchDomain(value: string) {
    this._searchDomain = value;
  }
  public resetSearchDomain() {
    this._searchDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainInput() {
    return this._searchDomain;
  }

  // server_list - computed: false, optional: true, required: false
  private _serverList = new SystemconfigurationDnsConfigurationServerListStructList(this, "server_list", false);
  public get serverList() {
    return this._serverList;
  }
  public putServerList(value: SystemconfigurationDnsConfigurationServerListStruct[] | cdktf.IResolvable) {
    this._serverList.internalValue = value;
  }
  public resetServerList() {
    this._serverList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverListInput() {
    return this._serverList.internalValue;
  }
}

export class SystemconfigurationDnsConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationDnsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationDnsConfigurationOutputReference {
    return new SystemconfigurationDnsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationEmailConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#auth_password Systemconfiguration#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#auth_username Systemconfiguration#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#disable_tls Systemconfiguration#disable_tls}
  */
  readonly disableTls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#email_timezone Systemconfiguration#email_timezone}
  */
  readonly emailTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#from_email Systemconfiguration#from_email}
  */
  readonly fromEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#from_name Systemconfiguration#from_name}
  */
  readonly fromName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#mail_server_name Systemconfiguration#mail_server_name}
  */
  readonly mailServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#mail_server_port Systemconfiguration#mail_server_port}
  */
  readonly mailServerPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#smtp_type Systemconfiguration#smtp_type}
  */
  readonly smtpType: string;
}

export function systemconfigurationEmailConfigurationToTerraform(struct?: SystemconfigurationEmailConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_username: cdktf.stringToTerraform(struct!.authUsername),
    disable_tls: cdktf.stringToTerraform(struct!.disableTls),
    email_timezone: cdktf.stringToTerraform(struct!.emailTimezone),
    from_email: cdktf.stringToTerraform(struct!.fromEmail),
    from_name: cdktf.stringToTerraform(struct!.fromName),
    mail_server_name: cdktf.stringToTerraform(struct!.mailServerName),
    mail_server_port: cdktf.stringToTerraform(struct!.mailServerPort),
    smtp_type: cdktf.stringToTerraform(struct!.smtpType),
  }
}


export function systemconfigurationEmailConfigurationToHclTerraform(struct?: SystemconfigurationEmailConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_username: {
      value: cdktf.stringToHclTerraform(struct!.authUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_tls: {
      value: cdktf.stringToHclTerraform(struct!.disableTls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_timezone: {
      value: cdktf.stringToHclTerraform(struct!.emailTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_email: {
      value: cdktf.stringToHclTerraform(struct!.fromEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_name: {
      value: cdktf.stringToHclTerraform(struct!.fromName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_server_name: {
      value: cdktf.stringToHclTerraform(struct!.mailServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_server_port: {
      value: cdktf.stringToHclTerraform(struct!.mailServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_type: {
      value: cdktf.stringToHclTerraform(struct!.smtpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationEmailConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationEmailConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUsername = this._authUsername;
    }
    if (this._disableTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTls = this._disableTls;
    }
    if (this._emailTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailTimezone = this._emailTimezone;
    }
    if (this._fromEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEmail = this._fromEmail;
    }
    if (this._fromName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromName = this._fromName;
    }
    if (this._mailServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailServerName = this._mailServerName;
    }
    if (this._mailServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailServerPort = this._mailServerPort;
    }
    if (this._smtpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpType = this._smtpType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationEmailConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authPassword = undefined;
      this._authUsername = undefined;
      this._disableTls = undefined;
      this._emailTimezone = undefined;
      this._fromEmail = undefined;
      this._fromName = undefined;
      this._mailServerName = undefined;
      this._mailServerPort = undefined;
      this._smtpType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authPassword = value.authPassword;
      this._authUsername = value.authUsername;
      this._disableTls = value.disableTls;
      this._emailTimezone = value.emailTimezone;
      this._fromEmail = value.fromEmail;
      this._fromName = value.fromName;
      this._mailServerName = value.mailServerName;
      this._mailServerPort = value.mailServerPort;
      this._smtpType = value.smtpType;
    }
  }

  // auth_password - computed: true, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_username - computed: true, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // disable_tls - computed: false, optional: true, required: false
  private _disableTls?: string; 
  public get disableTls() {
    return this.getStringAttribute('disable_tls');
  }
  public set disableTls(value: string) {
    this._disableTls = value;
  }
  public resetDisableTls() {
    this._disableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTlsInput() {
    return this._disableTls;
  }

  // email_timezone - computed: true, optional: true, required: false
  private _emailTimezone?: string; 
  public get emailTimezone() {
    return this.getStringAttribute('email_timezone');
  }
  public set emailTimezone(value: string) {
    this._emailTimezone = value;
  }
  public resetEmailTimezone() {
    this._emailTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTimezoneInput() {
    return this._emailTimezone;
  }

  // from_email - computed: false, optional: true, required: false
  private _fromEmail?: string; 
  public get fromEmail() {
    return this.getStringAttribute('from_email');
  }
  public set fromEmail(value: string) {
    this._fromEmail = value;
  }
  public resetFromEmail() {
    this._fromEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailInput() {
    return this._fromEmail;
  }

  // from_name - computed: true, optional: true, required: false
  private _fromName?: string; 
  public get fromName() {
    return this.getStringAttribute('from_name');
  }
  public set fromName(value: string) {
    this._fromName = value;
  }
  public resetFromName() {
    this._fromName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNameInput() {
    return this._fromName;
  }

  // mail_server_name - computed: false, optional: true, required: false
  private _mailServerName?: string; 
  public get mailServerName() {
    return this.getStringAttribute('mail_server_name');
  }
  public set mailServerName(value: string) {
    this._mailServerName = value;
  }
  public resetMailServerName() {
    this._mailServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailServerNameInput() {
    return this._mailServerName;
  }

  // mail_server_port - computed: false, optional: true, required: false
  private _mailServerPort?: string; 
  public get mailServerPort() {
    return this.getStringAttribute('mail_server_port');
  }
  public set mailServerPort(value: string) {
    this._mailServerPort = value;
  }
  public resetMailServerPort() {
    this._mailServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailServerPortInput() {
    return this._mailServerPort;
  }

  // smtp_type - computed: false, optional: false, required: true
  private _smtpType?: string; 
  public get smtpType() {
    return this.getStringAttribute('smtp_type');
  }
  public set smtpType(value: string) {
    this._smtpType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpTypeInput() {
    return this._smtpType;
  }
}

export class SystemconfigurationEmailConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationEmailConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationEmailConfigurationOutputReference {
    return new SystemconfigurationEmailConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationGlobalTenantConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#se_in_provider_context Systemconfiguration#se_in_provider_context}
  */
  readonly seInProviderContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#tenant_access_to_provider_se Systemconfiguration#tenant_access_to_provider_se}
  */
  readonly tenantAccessToProviderSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#tenant_vrf Systemconfiguration#tenant_vrf}
  */
  readonly tenantVrf?: string;
}

export function systemconfigurationGlobalTenantConfigToTerraform(struct?: SystemconfigurationGlobalTenantConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    se_in_provider_context: cdktf.stringToTerraform(struct!.seInProviderContext),
    tenant_access_to_provider_se: cdktf.stringToTerraform(struct!.tenantAccessToProviderSe),
    tenant_vrf: cdktf.stringToTerraform(struct!.tenantVrf),
  }
}


export function systemconfigurationGlobalTenantConfigToHclTerraform(struct?: SystemconfigurationGlobalTenantConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    se_in_provider_context: {
      value: cdktf.stringToHclTerraform(struct!.seInProviderContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_access_to_provider_se: {
      value: cdktf.stringToHclTerraform(struct!.tenantAccessToProviderSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_vrf: {
      value: cdktf.stringToHclTerraform(struct!.tenantVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationGlobalTenantConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationGlobalTenantConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seInProviderContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.seInProviderContext = this._seInProviderContext;
    }
    if (this._tenantAccessToProviderSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantAccessToProviderSe = this._tenantAccessToProviderSe;
    }
    if (this._tenantVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantVrf = this._tenantVrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationGlobalTenantConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seInProviderContext = undefined;
      this._tenantAccessToProviderSe = undefined;
      this._tenantVrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seInProviderContext = value.seInProviderContext;
      this._tenantAccessToProviderSe = value.tenantAccessToProviderSe;
      this._tenantVrf = value.tenantVrf;
    }
  }

  // se_in_provider_context - computed: false, optional: true, required: false
  private _seInProviderContext?: string; 
  public get seInProviderContext() {
    return this.getStringAttribute('se_in_provider_context');
  }
  public set seInProviderContext(value: string) {
    this._seInProviderContext = value;
  }
  public resetSeInProviderContext() {
    this._seInProviderContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seInProviderContextInput() {
    return this._seInProviderContext;
  }

  // tenant_access_to_provider_se - computed: false, optional: true, required: false
  private _tenantAccessToProviderSe?: string; 
  public get tenantAccessToProviderSe() {
    return this.getStringAttribute('tenant_access_to_provider_se');
  }
  public set tenantAccessToProviderSe(value: string) {
    this._tenantAccessToProviderSe = value;
  }
  public resetTenantAccessToProviderSe() {
    this._tenantAccessToProviderSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantAccessToProviderSeInput() {
    return this._tenantAccessToProviderSe;
  }

  // tenant_vrf - computed: false, optional: true, required: false
  private _tenantVrf?: string; 
  public get tenantVrf() {
    return this.getStringAttribute('tenant_vrf');
  }
  public set tenantVrf(value: string) {
    this._tenantVrf = value;
  }
  public resetTenantVrf() {
    this._tenantVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantVrfInput() {
    return this._tenantVrf;
  }
}

export class SystemconfigurationGlobalTenantConfigList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationGlobalTenantConfig[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationGlobalTenantConfigOutputReference {
    return new SystemconfigurationGlobalTenantConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationLinuxConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#banner Systemconfiguration#banner}
  */
  readonly banner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#cis_mode Systemconfiguration#cis_mode}
  */
  readonly cisMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#motd Systemconfiguration#motd}
  */
  readonly motd?: string;
}

export function systemconfigurationLinuxConfigurationToTerraform(struct?: SystemconfigurationLinuxConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    banner: cdktf.stringToTerraform(struct!.banner),
    cis_mode: cdktf.stringToTerraform(struct!.cisMode),
    motd: cdktf.stringToTerraform(struct!.motd),
  }
}


export function systemconfigurationLinuxConfigurationToHclTerraform(struct?: SystemconfigurationLinuxConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    banner: {
      value: cdktf.stringToHclTerraform(struct!.banner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cis_mode: {
      value: cdktf.stringToHclTerraform(struct!.cisMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    motd: {
      value: cdktf.stringToHclTerraform(struct!.motd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationLinuxConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationLinuxConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._banner !== undefined) {
      hasAnyValues = true;
      internalValueResult.banner = this._banner;
    }
    if (this._cisMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisMode = this._cisMode;
    }
    if (this._motd !== undefined) {
      hasAnyValues = true;
      internalValueResult.motd = this._motd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationLinuxConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._banner = undefined;
      this._cisMode = undefined;
      this._motd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._banner = value.banner;
      this._cisMode = value.cisMode;
      this._motd = value.motd;
    }
  }

  // banner - computed: true, optional: true, required: false
  private _banner?: string; 
  public get banner() {
    return this.getStringAttribute('banner');
  }
  public set banner(value: string) {
    this._banner = value;
  }
  public resetBanner() {
    this._banner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerInput() {
    return this._banner;
  }

  // cis_mode - computed: false, optional: true, required: false
  private _cisMode?: string; 
  public get cisMode() {
    return this.getStringAttribute('cis_mode');
  }
  public set cisMode(value: string) {
    this._cisMode = value;
  }
  public resetCisMode() {
    this._cisMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisModeInput() {
    return this._cisMode;
  }

  // motd - computed: true, optional: true, required: false
  private _motd?: string; 
  public get motd() {
    return this.getStringAttribute('motd');
  }
  public set motd(value: string) {
    this._motd = value;
  }
  public resetMotd() {
    this._motd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdInput() {
    return this._motd;
  }
}

export class SystemconfigurationLinuxConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationLinuxConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationLinuxConfigurationOutputReference {
    return new SystemconfigurationLinuxConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlApiAccessAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlApiAccessAddrsToTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlApiAccessAddrsToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlApiAccessAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlApiAccessAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlApiAccessAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlApiAccessAddrsList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlApiAccessAddrs[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlApiAccessAddrsOutputReference {
    return new SystemconfigurationMgmtIpAccessControlApiAccessAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrToTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrOutputReference {
    return new SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlApiAccessPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#mask Systemconfiguration#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ip_addr Systemconfiguration#ip_addr}
  */
  readonly ipAddr: SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlApiAccessPrefixesToTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(systemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function systemconfigurationMgmtIpAccessControlApiAccessPrefixesToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlApiAccessPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlApiAccessPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlApiAccessPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: SystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlApiAccessPrefixesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlApiAccessPrefixes[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlApiAccessPrefixesOutputReference {
    return new SystemconfigurationMgmtIpAccessControlApiAccessPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlApiAccessRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlApiAccessRangesBeginToTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlApiAccessRangesBeginToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlApiAccessRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlApiAccessRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlApiAccessRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlApiAccessRangesBeginList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlApiAccessRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlApiAccessRangesBeginOutputReference {
    return new SystemconfigurationMgmtIpAccessControlApiAccessRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlApiAccessRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlApiAccessRangesEndToTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlApiAccessRangesEndToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlApiAccessRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlApiAccessRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlApiAccessRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlApiAccessRangesEndList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlApiAccessRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlApiAccessRangesEndOutputReference {
    return new SystemconfigurationMgmtIpAccessControlApiAccessRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlApiAccessRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#begin Systemconfiguration#begin}
  */
  readonly begin: SystemconfigurationMgmtIpAccessControlApiAccessRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#end Systemconfiguration#end}
  */
  readonly end: SystemconfigurationMgmtIpAccessControlApiAccessRangesEnd[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlApiAccessRangesToTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(systemconfigurationMgmtIpAccessControlApiAccessRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(systemconfigurationMgmtIpAccessControlApiAccessRangesEndToTerraform, true)(struct!.end),
  }
}


export function systemconfigurationMgmtIpAccessControlApiAccessRangesToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccessRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlApiAccessRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlApiAccessRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlApiAccessRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlApiAccessRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlApiAccessRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlApiAccessRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlApiAccessRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new SystemconfigurationMgmtIpAccessControlApiAccessRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: SystemconfigurationMgmtIpAccessControlApiAccessRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new SystemconfigurationMgmtIpAccessControlApiAccessRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: SystemconfigurationMgmtIpAccessControlApiAccessRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlApiAccessRangesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlApiAccessRanges[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlApiAccessRangesOutputReference {
    return new SystemconfigurationMgmtIpAccessControlApiAccessRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlApiAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#group_refs Systemconfiguration#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#match_criteria Systemconfiguration#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addrs Systemconfiguration#addrs}
  */
  readonly addrs?: SystemconfigurationMgmtIpAccessControlApiAccessAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#prefixes Systemconfiguration#prefixes}
  */
  readonly prefixes?: SystemconfigurationMgmtIpAccessControlApiAccessPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ranges Systemconfiguration#ranges}
  */
  readonly ranges?: SystemconfigurationMgmtIpAccessControlApiAccessRanges[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlApiAccessToTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(systemconfigurationMgmtIpAccessControlApiAccessAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(systemconfigurationMgmtIpAccessControlApiAccessPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(systemconfigurationMgmtIpAccessControlApiAccessRangesToTerraform, true)(struct!.ranges),
  }
}


export function systemconfigurationMgmtIpAccessControlApiAccessToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlApiAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlApiAccessAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlApiAccessAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlApiAccessPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlApiAccessPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlApiAccessRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlApiAccessRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlApiAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlApiAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlApiAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new SystemconfigurationMgmtIpAccessControlApiAccessAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: SystemconfigurationMgmtIpAccessControlApiAccessAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new SystemconfigurationMgmtIpAccessControlApiAccessPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: SystemconfigurationMgmtIpAccessControlApiAccessPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SystemconfigurationMgmtIpAccessControlApiAccessRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SystemconfigurationMgmtIpAccessControlApiAccessRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlApiAccessList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlApiAccess[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlApiAccessOutputReference {
    return new SystemconfigurationMgmtIpAccessControlApiAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlShellServerAccessAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlShellServerAccessAddrsToTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlShellServerAccessAddrsToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlShellServerAccessAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlShellServerAccessAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlShellServerAccessAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlShellServerAccessAddrsList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlShellServerAccessAddrs[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlShellServerAccessAddrsOutputReference {
    return new SystemconfigurationMgmtIpAccessControlShellServerAccessAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrToTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrOutputReference {
    return new SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#mask Systemconfiguration#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ip_addr Systemconfiguration#ip_addr}
  */
  readonly ipAddr: SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlShellServerAccessPrefixesToTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(systemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function systemconfigurationMgmtIpAccessControlShellServerAccessPrefixesToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesOutputReference {
    return new SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginToTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginOutputReference {
    return new SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlShellServerAccessRangesEndToTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlShellServerAccessRangesEndToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndOutputReference {
    return new SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlShellServerAccessRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#begin Systemconfiguration#begin}
  */
  readonly begin: SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#end Systemconfiguration#end}
  */
  readonly end: SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlShellServerAccessRangesToTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(systemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(systemconfigurationMgmtIpAccessControlShellServerAccessRangesEndToTerraform, true)(struct!.end),
  }
}


export function systemconfigurationMgmtIpAccessControlShellServerAccessRangesToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccessRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlShellServerAccessRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlShellServerAccessRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlShellServerAccessRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlShellServerAccessRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: SystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: SystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlShellServerAccessRangesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlShellServerAccessRanges[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlShellServerAccessRangesOutputReference {
    return new SystemconfigurationMgmtIpAccessControlShellServerAccessRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlShellServerAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#group_refs Systemconfiguration#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#match_criteria Systemconfiguration#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addrs Systemconfiguration#addrs}
  */
  readonly addrs?: SystemconfigurationMgmtIpAccessControlShellServerAccessAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#prefixes Systemconfiguration#prefixes}
  */
  readonly prefixes?: SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ranges Systemconfiguration#ranges}
  */
  readonly ranges?: SystemconfigurationMgmtIpAccessControlShellServerAccessRanges[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlShellServerAccessToTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(systemconfigurationMgmtIpAccessControlShellServerAccessAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(systemconfigurationMgmtIpAccessControlShellServerAccessPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(systemconfigurationMgmtIpAccessControlShellServerAccessRangesToTerraform, true)(struct!.ranges),
  }
}


export function systemconfigurationMgmtIpAccessControlShellServerAccessToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlShellServerAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlShellServerAccessAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlShellServerAccessAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlShellServerAccessPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlShellServerAccessRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlShellServerAccessRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlShellServerAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlShellServerAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlShellServerAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new SystemconfigurationMgmtIpAccessControlShellServerAccessAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: SystemconfigurationMgmtIpAccessControlShellServerAccessAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: SystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SystemconfigurationMgmtIpAccessControlShellServerAccessRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SystemconfigurationMgmtIpAccessControlShellServerAccessRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlShellServerAccessList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlShellServerAccess[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlShellServerAccessOutputReference {
    return new SystemconfigurationMgmtIpAccessControlShellServerAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSnmpAccessAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSnmpAccessAddrsToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSnmpAccessAddrsToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSnmpAccessAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSnmpAccessAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSnmpAccessAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSnmpAccessAddrsList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSnmpAccessAddrs[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSnmpAccessAddrsOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSnmpAccessAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#mask Systemconfiguration#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ip_addr Systemconfiguration#ip_addr}
  */
  readonly ipAddr: SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlSnmpAccessPrefixesToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function systemconfigurationMgmtIpAccessControlSnmpAccessPrefixesToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSnmpAccessRangesEndToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSnmpAccessRangesEndToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSnmpAccessRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#begin Systemconfiguration#begin}
  */
  readonly begin: SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#end Systemconfiguration#end}
  */
  readonly end: SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlSnmpAccessRangesToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSnmpAccessRangesEndToTerraform, true)(struct!.end),
  }
}


export function systemconfigurationMgmtIpAccessControlSnmpAccessRangesToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccessRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSnmpAccessRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlSnmpAccessRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSnmpAccessRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSnmpAccessRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: SystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: SystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlSnmpAccessRangesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSnmpAccessRanges[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSnmpAccessRangesOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSnmpAccessRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSnmpAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#group_refs Systemconfiguration#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#match_criteria Systemconfiguration#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addrs Systemconfiguration#addrs}
  */
  readonly addrs?: SystemconfigurationMgmtIpAccessControlSnmpAccessAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#prefixes Systemconfiguration#prefixes}
  */
  readonly prefixes?: SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ranges Systemconfiguration#ranges}
  */
  readonly ranges?: SystemconfigurationMgmtIpAccessControlSnmpAccessRanges[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlSnmpAccessToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSnmpAccessAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSnmpAccessPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSnmpAccessRangesToTerraform, true)(struct!.ranges),
  }
}


export function systemconfigurationMgmtIpAccessControlSnmpAccessToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSnmpAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSnmpAccessAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSnmpAccessAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSnmpAccessPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSnmpAccessRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSnmpAccessRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlSnmpAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSnmpAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSnmpAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new SystemconfigurationMgmtIpAccessControlSnmpAccessAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: SystemconfigurationMgmtIpAccessControlSnmpAccessAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: SystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SystemconfigurationMgmtIpAccessControlSnmpAccessRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SystemconfigurationMgmtIpAccessControlSnmpAccessRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlSnmpAccessList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSnmpAccess[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSnmpAccessOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSnmpAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSshAccessAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSshAccessAddrsToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSshAccessAddrsToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSshAccessAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSshAccessAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSshAccessAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSshAccessAddrsList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSshAccessAddrs[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSshAccessAddrsOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSshAccessAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSshAccessPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#mask Systemconfiguration#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ip_addr Systemconfiguration#ip_addr}
  */
  readonly ipAddr: SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlSshAccessPrefixesToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function systemconfigurationMgmtIpAccessControlSshAccessPrefixesToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlSshAccessPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSshAccessPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSshAccessPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: SystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlSshAccessPrefixesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSshAccessPrefixes[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSshAccessPrefixesOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSshAccessPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSshAccessRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSshAccessRangesBeginToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSshAccessRangesBeginToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSshAccessRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSshAccessRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSshAccessRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSshAccessRangesBeginList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSshAccessRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSshAccessRangesBeginOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSshAccessRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSshAccessRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSshAccessRangesEndToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSshAccessRangesEndToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSshAccessRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSshAccessRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSshAccessRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSshAccessRangesEndList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSshAccessRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSshAccessRangesEndOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSshAccessRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSshAccessRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#begin Systemconfiguration#begin}
  */
  readonly begin: SystemconfigurationMgmtIpAccessControlSshAccessRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#end Systemconfiguration#end}
  */
  readonly end: SystemconfigurationMgmtIpAccessControlSshAccessRangesEnd[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlSshAccessRangesToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSshAccessRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSshAccessRangesEndToTerraform, true)(struct!.end),
  }
}


export function systemconfigurationMgmtIpAccessControlSshAccessRangesToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccessRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSshAccessRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSshAccessRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSshAccessRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSshAccessRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlSshAccessRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSshAccessRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSshAccessRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new SystemconfigurationMgmtIpAccessControlSshAccessRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: SystemconfigurationMgmtIpAccessControlSshAccessRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new SystemconfigurationMgmtIpAccessControlSshAccessRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: SystemconfigurationMgmtIpAccessControlSshAccessRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlSshAccessRangesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSshAccessRanges[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSshAccessRangesOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSshAccessRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSshAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#group_refs Systemconfiguration#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#match_criteria Systemconfiguration#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addrs Systemconfiguration#addrs}
  */
  readonly addrs?: SystemconfigurationMgmtIpAccessControlSshAccessAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#prefixes Systemconfiguration#prefixes}
  */
  readonly prefixes?: SystemconfigurationMgmtIpAccessControlSshAccessPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ranges Systemconfiguration#ranges}
  */
  readonly ranges?: SystemconfigurationMgmtIpAccessControlSshAccessRanges[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlSshAccessToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSshAccessAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSshAccessPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSshAccessRangesToTerraform, true)(struct!.ranges),
  }
}


export function systemconfigurationMgmtIpAccessControlSshAccessToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSshAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSshAccessAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSshAccessAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSshAccessPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSshAccessPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSshAccessRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSshAccessRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlSshAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSshAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSshAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new SystemconfigurationMgmtIpAccessControlSshAccessAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: SystemconfigurationMgmtIpAccessControlSshAccessAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new SystemconfigurationMgmtIpAccessControlSshAccessPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: SystemconfigurationMgmtIpAccessControlSshAccessPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SystemconfigurationMgmtIpAccessControlSshAccessRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SystemconfigurationMgmtIpAccessControlSshAccessRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlSshAccessList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSshAccess[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSshAccessOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSshAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSysintAccessAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSysintAccessAddrsToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSysintAccessAddrsToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSysintAccessAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSysintAccessAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSysintAccessAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSysintAccessAddrsList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSysintAccessAddrs[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSysintAccessAddrsOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSysintAccessAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSysintAccessPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#mask Systemconfiguration#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ip_addr Systemconfiguration#ip_addr}
  */
  readonly ipAddr: SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlSysintAccessPrefixesToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function systemconfigurationMgmtIpAccessControlSysintAccessPrefixesToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSysintAccessPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSysintAccessPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSysintAccessPrefixes[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSysintAccessRangesBeginToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSysintAccessRangesBeginToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationMgmtIpAccessControlSysintAccessRangesEndToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationMgmtIpAccessControlSysintAccessRangesEndToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationMgmtIpAccessControlSysintAccessRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationMgmtIpAccessControlSysintAccessRangesEndList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSysintAccessRangesEndOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSysintAccessRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSysintAccessRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#begin Systemconfiguration#begin}
  */
  readonly begin: SystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#end Systemconfiguration#end}
  */
  readonly end: SystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlSysintAccessRangesToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSysintAccessRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSysintAccessRangesEndToTerraform, true)(struct!.end),
  }
}


export function systemconfigurationMgmtIpAccessControlSysintAccessRangesToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccessRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSysintAccessRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSysintAccessRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSysintAccessRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlSysintAccessRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSysintAccessRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSysintAccessRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new SystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: SystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new SystemconfigurationMgmtIpAccessControlSysintAccessRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: SystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlSysintAccessRangesList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSysintAccessRanges[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSysintAccessRangesOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSysintAccessRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControlSysintAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#group_refs Systemconfiguration#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#match_criteria Systemconfiguration#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addrs Systemconfiguration#addrs}
  */
  readonly addrs?: SystemconfigurationMgmtIpAccessControlSysintAccessAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#prefixes Systemconfiguration#prefixes}
  */
  readonly prefixes?: SystemconfigurationMgmtIpAccessControlSysintAccessPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ranges Systemconfiguration#ranges}
  */
  readonly ranges?: SystemconfigurationMgmtIpAccessControlSysintAccessRanges[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlSysintAccessToTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSysintAccessAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSysintAccessPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSysintAccessRangesToTerraform, true)(struct!.ranges),
  }
}


export function systemconfigurationMgmtIpAccessControlSysintAccessToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControlSysintAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSysintAccessAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSysintAccessAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSysintAccessPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSysintAccessRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSysintAccessRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlSysintAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControlSysintAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControlSysintAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new SystemconfigurationMgmtIpAccessControlSysintAccessAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: SystemconfigurationMgmtIpAccessControlSysintAccessAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new SystemconfigurationMgmtIpAccessControlSysintAccessPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: SystemconfigurationMgmtIpAccessControlSysintAccessPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SystemconfigurationMgmtIpAccessControlSysintAccessRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SystemconfigurationMgmtIpAccessControlSysintAccessRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlSysintAccessList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControlSysintAccess[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlSysintAccessOutputReference {
    return new SystemconfigurationMgmtIpAccessControlSysintAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationMgmtIpAccessControl {
  /**
  * api_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#api_access Systemconfiguration#api_access}
  */
  readonly apiAccess?: SystemconfigurationMgmtIpAccessControlApiAccess[] | cdktf.IResolvable;
  /**
  * shell_server_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#shell_server_access Systemconfiguration#shell_server_access}
  */
  readonly shellServerAccess?: SystemconfigurationMgmtIpAccessControlShellServerAccess[] | cdktf.IResolvable;
  /**
  * snmp_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#snmp_access Systemconfiguration#snmp_access}
  */
  readonly snmpAccess?: SystemconfigurationMgmtIpAccessControlSnmpAccess[] | cdktf.IResolvable;
  /**
  * ssh_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ssh_access Systemconfiguration#ssh_access}
  */
  readonly sshAccess?: SystemconfigurationMgmtIpAccessControlSshAccess[] | cdktf.IResolvable;
  /**
  * sysint_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#sysint_access Systemconfiguration#sysint_access}
  */
  readonly sysintAccess?: SystemconfigurationMgmtIpAccessControlSysintAccess[] | cdktf.IResolvable;
}

export function systemconfigurationMgmtIpAccessControlToTerraform(struct?: SystemconfigurationMgmtIpAccessControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_access: cdktf.listMapper(systemconfigurationMgmtIpAccessControlApiAccessToTerraform, true)(struct!.apiAccess),
    shell_server_access: cdktf.listMapper(systemconfigurationMgmtIpAccessControlShellServerAccessToTerraform, true)(struct!.shellServerAccess),
    snmp_access: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSnmpAccessToTerraform, true)(struct!.snmpAccess),
    ssh_access: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSshAccessToTerraform, true)(struct!.sshAccess),
    sysint_access: cdktf.listMapper(systemconfigurationMgmtIpAccessControlSysintAccessToTerraform, true)(struct!.sysintAccess),
  }
}


export function systemconfigurationMgmtIpAccessControlToHclTerraform(struct?: SystemconfigurationMgmtIpAccessControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_access: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlApiAccessToHclTerraform, true)(struct!.apiAccess),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlApiAccessList",
    },
    shell_server_access: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlShellServerAccessToHclTerraform, true)(struct!.shellServerAccess),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlShellServerAccessList",
    },
    snmp_access: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSnmpAccessToHclTerraform, true)(struct!.snmpAccess),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSnmpAccessList",
    },
    ssh_access: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSshAccessToHclTerraform, true)(struct!.sshAccess),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSshAccessList",
    },
    sysint_access: {
      value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlSysintAccessToHclTerraform, true)(struct!.sysintAccess),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationMgmtIpAccessControlSysintAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationMgmtIpAccessControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationMgmtIpAccessControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiAccess = this._apiAccess?.internalValue;
    }
    if (this._shellServerAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shellServerAccess = this._shellServerAccess?.internalValue;
    }
    if (this._snmpAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpAccess = this._snmpAccess?.internalValue;
    }
    if (this._sshAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAccess = this._sshAccess?.internalValue;
    }
    if (this._sysintAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysintAccess = this._sysintAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationMgmtIpAccessControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiAccess.internalValue = undefined;
      this._shellServerAccess.internalValue = undefined;
      this._snmpAccess.internalValue = undefined;
      this._sshAccess.internalValue = undefined;
      this._sysintAccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiAccess.internalValue = value.apiAccess;
      this._shellServerAccess.internalValue = value.shellServerAccess;
      this._snmpAccess.internalValue = value.snmpAccess;
      this._sshAccess.internalValue = value.sshAccess;
      this._sysintAccess.internalValue = value.sysintAccess;
    }
  }

  // api_access - computed: false, optional: true, required: false
  private _apiAccess = new SystemconfigurationMgmtIpAccessControlApiAccessList(this, "api_access", true);
  public get apiAccess() {
    return this._apiAccess;
  }
  public putApiAccess(value: SystemconfigurationMgmtIpAccessControlApiAccess[] | cdktf.IResolvable) {
    this._apiAccess.internalValue = value;
  }
  public resetApiAccess() {
    this._apiAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAccessInput() {
    return this._apiAccess.internalValue;
  }

  // shell_server_access - computed: false, optional: true, required: false
  private _shellServerAccess = new SystemconfigurationMgmtIpAccessControlShellServerAccessList(this, "shell_server_access", true);
  public get shellServerAccess() {
    return this._shellServerAccess;
  }
  public putShellServerAccess(value: SystemconfigurationMgmtIpAccessControlShellServerAccess[] | cdktf.IResolvable) {
    this._shellServerAccess.internalValue = value;
  }
  public resetShellServerAccess() {
    this._shellServerAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellServerAccessInput() {
    return this._shellServerAccess.internalValue;
  }

  // snmp_access - computed: false, optional: true, required: false
  private _snmpAccess = new SystemconfigurationMgmtIpAccessControlSnmpAccessList(this, "snmp_access", true);
  public get snmpAccess() {
    return this._snmpAccess;
  }
  public putSnmpAccess(value: SystemconfigurationMgmtIpAccessControlSnmpAccess[] | cdktf.IResolvable) {
    this._snmpAccess.internalValue = value;
  }
  public resetSnmpAccess() {
    this._snmpAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpAccessInput() {
    return this._snmpAccess.internalValue;
  }

  // ssh_access - computed: false, optional: true, required: false
  private _sshAccess = new SystemconfigurationMgmtIpAccessControlSshAccessList(this, "ssh_access", true);
  public get sshAccess() {
    return this._sshAccess;
  }
  public putSshAccess(value: SystemconfigurationMgmtIpAccessControlSshAccess[] | cdktf.IResolvable) {
    this._sshAccess.internalValue = value;
  }
  public resetSshAccess() {
    this._sshAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAccessInput() {
    return this._sshAccess.internalValue;
  }

  // sysint_access - computed: false, optional: true, required: false
  private _sysintAccess = new SystemconfigurationMgmtIpAccessControlSysintAccessList(this, "sysint_access", true);
  public get sysintAccess() {
    return this._sysintAccess;
  }
  public putSysintAccess(value: SystemconfigurationMgmtIpAccessControlSysintAccess[] | cdktf.IResolvable) {
    this._sysintAccess.internalValue = value;
  }
  public resetSysintAccess() {
    this._sysintAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysintAccessInput() {
    return this._sysintAccess.internalValue;
  }
}

export class SystemconfigurationMgmtIpAccessControlList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationMgmtIpAccessControl[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationMgmtIpAccessControlOutputReference {
    return new SystemconfigurationMgmtIpAccessControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationNtpConfigurationNtpAuthenticationKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#algorithm Systemconfiguration#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#key Systemconfiguration#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#key_number Systemconfiguration#key_number}
  */
  readonly keyNumber: string;
}

export function systemconfigurationNtpConfigurationNtpAuthenticationKeysToTerraform(struct?: SystemconfigurationNtpConfigurationNtpAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key: cdktf.stringToTerraform(struct!.key),
    key_number: cdktf.stringToTerraform(struct!.keyNumber),
  }
}


export function systemconfigurationNtpConfigurationNtpAuthenticationKeysToHclTerraform(struct?: SystemconfigurationNtpConfigurationNtpAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_number: {
      value: cdktf.stringToHclTerraform(struct!.keyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationNtpConfigurationNtpAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationNtpConfigurationNtpAuthenticationKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNumber = this._keyNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationNtpConfigurationNtpAuthenticationKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._key = undefined;
      this._keyNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._key = value.key;
      this._keyNumber = value.keyNumber;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // key_number - computed: false, optional: false, required: true
  private _keyNumber?: string; 
  public get keyNumber() {
    return this.getStringAttribute('key_number');
  }
  public set keyNumber(value: string) {
    this._keyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }
}

export class SystemconfigurationNtpConfigurationNtpAuthenticationKeysList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationNtpConfigurationNtpAuthenticationKeys[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationNtpConfigurationNtpAuthenticationKeysOutputReference {
    return new SystemconfigurationNtpConfigurationNtpAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationNtpConfigurationNtpServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationNtpConfigurationNtpServerListStructToTerraform(struct?: SystemconfigurationNtpConfigurationNtpServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationNtpConfigurationNtpServerListStructToHclTerraform(struct?: SystemconfigurationNtpConfigurationNtpServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationNtpConfigurationNtpServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationNtpConfigurationNtpServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationNtpConfigurationNtpServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationNtpConfigurationNtpServerListStructList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationNtpConfigurationNtpServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationNtpConfigurationNtpServerListStructOutputReference {
    return new SystemconfigurationNtpConfigurationNtpServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationNtpConfigurationNtpServersServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#addr Systemconfiguration#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#type Systemconfiguration#type}
  */
  readonly type: string;
}

export function systemconfigurationNtpConfigurationNtpServersServerToTerraform(struct?: SystemconfigurationNtpConfigurationNtpServersServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemconfigurationNtpConfigurationNtpServersServerToHclTerraform(struct?: SystemconfigurationNtpConfigurationNtpServersServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SystemconfigurationNtpConfigurationNtpServersServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationNtpConfigurationNtpServersServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationNtpConfigurationNtpServersServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class SystemconfigurationNtpConfigurationNtpServersServerList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationNtpConfigurationNtpServersServer[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationNtpConfigurationNtpServersServerOutputReference {
    return new SystemconfigurationNtpConfigurationNtpServersServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationNtpConfigurationNtpServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#key_number Systemconfiguration#key_number}
  */
  readonly keyNumber?: string;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#server Systemconfiguration#server}
  */
  readonly server: SystemconfigurationNtpConfigurationNtpServersServer[] | cdktf.IResolvable;
}

export function systemconfigurationNtpConfigurationNtpServersToTerraform(struct?: SystemconfigurationNtpConfigurationNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_number: cdktf.stringToTerraform(struct!.keyNumber),
    server: cdktf.listMapper(systemconfigurationNtpConfigurationNtpServersServerToTerraform, true)(struct!.server),
  }
}


export function systemconfigurationNtpConfigurationNtpServersToHclTerraform(struct?: SystemconfigurationNtpConfigurationNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_number: {
      value: cdktf.stringToHclTerraform(struct!.keyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.listMapperHcl(systemconfigurationNtpConfigurationNtpServersServerToHclTerraform, true)(struct!.server),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationNtpConfigurationNtpServersServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationNtpConfigurationNtpServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationNtpConfigurationNtpServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNumber = this._keyNumber;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationNtpConfigurationNtpServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyNumber = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyNumber = value.keyNumber;
      this._server.internalValue = value.server;
    }
  }

  // key_number - computed: true, optional: true, required: false
  private _keyNumber?: string; 
  public get keyNumber() {
    return this.getStringAttribute('key_number');
  }
  public set keyNumber(value: string) {
    this._keyNumber = value;
  }
  public resetKeyNumber() {
    this._keyNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }

  // server - computed: false, optional: false, required: true
  private _server = new SystemconfigurationNtpConfigurationNtpServersServerList(this, "server", true);
  public get server() {
    return this._server;
  }
  public putServer(value: SystemconfigurationNtpConfigurationNtpServersServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}

export class SystemconfigurationNtpConfigurationNtpServersList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationNtpConfigurationNtpServers[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationNtpConfigurationNtpServersOutputReference {
    return new SystemconfigurationNtpConfigurationNtpServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationNtpConfiguration {
  /**
  * ntp_authentication_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ntp_authentication_keys Systemconfiguration#ntp_authentication_keys}
  */
  readonly ntpAuthenticationKeys?: SystemconfigurationNtpConfigurationNtpAuthenticationKeys[] | cdktf.IResolvable;
  /**
  * ntp_server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ntp_server_list Systemconfiguration#ntp_server_list}
  */
  readonly ntpServerList?: SystemconfigurationNtpConfigurationNtpServerListStruct[] | cdktf.IResolvable;
  /**
  * ntp_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#ntp_servers Systemconfiguration#ntp_servers}
  */
  readonly ntpServers?: SystemconfigurationNtpConfigurationNtpServers[] | cdktf.IResolvable;
}

export function systemconfigurationNtpConfigurationToTerraform(struct?: SystemconfigurationNtpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntp_authentication_keys: cdktf.listMapper(systemconfigurationNtpConfigurationNtpAuthenticationKeysToTerraform, true)(struct!.ntpAuthenticationKeys),
    ntp_server_list: cdktf.listMapper(systemconfigurationNtpConfigurationNtpServerListStructToTerraform, true)(struct!.ntpServerList),
    ntp_servers: cdktf.listMapper(systemconfigurationNtpConfigurationNtpServersToTerraform, true)(struct!.ntpServers),
  }
}


export function systemconfigurationNtpConfigurationToHclTerraform(struct?: SystemconfigurationNtpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ntp_authentication_keys: {
      value: cdktf.listMapperHcl(systemconfigurationNtpConfigurationNtpAuthenticationKeysToHclTerraform, true)(struct!.ntpAuthenticationKeys),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationNtpConfigurationNtpAuthenticationKeysList",
    },
    ntp_server_list: {
      value: cdktf.listMapperHcl(systemconfigurationNtpConfigurationNtpServerListStructToHclTerraform, true)(struct!.ntpServerList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationNtpConfigurationNtpServerListStructList",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(systemconfigurationNtpConfigurationNtpServersToHclTerraform, true)(struct!.ntpServers),
      isBlock: true,
      type: "list",
      storageClassType: "SystemconfigurationNtpConfigurationNtpServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationNtpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationNtpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ntpAuthenticationKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpAuthenticationKeys = this._ntpAuthenticationKeys?.internalValue;
    }
    if (this._ntpServerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServerList = this._ntpServerList?.internalValue;
    }
    if (this._ntpServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationNtpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ntpAuthenticationKeys.internalValue = undefined;
      this._ntpServerList.internalValue = undefined;
      this._ntpServers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ntpAuthenticationKeys.internalValue = value.ntpAuthenticationKeys;
      this._ntpServerList.internalValue = value.ntpServerList;
      this._ntpServers.internalValue = value.ntpServers;
    }
  }

  // ntp_authentication_keys - computed: false, optional: true, required: false
  private _ntpAuthenticationKeys = new SystemconfigurationNtpConfigurationNtpAuthenticationKeysList(this, "ntp_authentication_keys", false);
  public get ntpAuthenticationKeys() {
    return this._ntpAuthenticationKeys;
  }
  public putNtpAuthenticationKeys(value: SystemconfigurationNtpConfigurationNtpAuthenticationKeys[] | cdktf.IResolvable) {
    this._ntpAuthenticationKeys.internalValue = value;
  }
  public resetNtpAuthenticationKeys() {
    this._ntpAuthenticationKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpAuthenticationKeysInput() {
    return this._ntpAuthenticationKeys.internalValue;
  }

  // ntp_server_list - computed: false, optional: true, required: false
  private _ntpServerList = new SystemconfigurationNtpConfigurationNtpServerListStructList(this, "ntp_server_list", false);
  public get ntpServerList() {
    return this._ntpServerList;
  }
  public putNtpServerList(value: SystemconfigurationNtpConfigurationNtpServerListStruct[] | cdktf.IResolvable) {
    this._ntpServerList.internalValue = value;
  }
  public resetNtpServerList() {
    this._ntpServerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerListInput() {
    return this._ntpServerList.internalValue;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers = new SystemconfigurationNtpConfigurationNtpServersList(this, "ntp_servers", false);
  public get ntpServers() {
    return this._ntpServers;
  }
  public putNtpServers(value: SystemconfigurationNtpConfigurationNtpServers[] | cdktf.IResolvable) {
    this._ntpServers.internalValue = value;
  }
  public resetNtpServers() {
    this._ntpServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers.internalValue;
  }
}

export class SystemconfigurationNtpConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationNtpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationNtpConfigurationOutputReference {
    return new SystemconfigurationNtpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationPortalConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#allow_basic_authentication Systemconfiguration#allow_basic_authentication}
  */
  readonly allowBasicAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#api_force_timeout Systemconfiguration#api_force_timeout}
  */
  readonly apiForceTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#disable_remote_cli_shell Systemconfiguration#disable_remote_cli_shell}
  */
  readonly disableRemoteCliShell?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#disable_swagger Systemconfiguration#disable_swagger}
  */
  readonly disableSwagger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#enable_clickjacking_protection Systemconfiguration#enable_clickjacking_protection}
  */
  readonly enableClickjackingProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#enable_http Systemconfiguration#enable_http}
  */
  readonly enableHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#enable_https Systemconfiguration#enable_https}
  */
  readonly enableHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#http_port Systemconfiguration#http_port}
  */
  readonly httpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#https_port Systemconfiguration#https_port}
  */
  readonly httpsPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#minimum_password_length Systemconfiguration#minimum_password_length}
  */
  readonly minimumPasswordLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#password_strength_check Systemconfiguration#password_strength_check}
  */
  readonly passwordStrengthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#pkiprofile_ref Systemconfiguration#pkiprofile_ref}
  */
  readonly pkiprofileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#redirect_to_https Systemconfiguration#redirect_to_https}
  */
  readonly redirectToHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#sslkeyandcertificate_refs Systemconfiguration#sslkeyandcertificate_refs}
  */
  readonly sslkeyandcertificateRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#sslprofile_ref Systemconfiguration#sslprofile_ref}
  */
  readonly sslprofileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#use_uuid_from_input Systemconfiguration#use_uuid_from_input}
  */
  readonly useUuidFromInput?: string;
}

export function systemconfigurationPortalConfigurationToTerraform(struct?: SystemconfigurationPortalConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_basic_authentication: cdktf.stringToTerraform(struct!.allowBasicAuthentication),
    api_force_timeout: cdktf.stringToTerraform(struct!.apiForceTimeout),
    disable_remote_cli_shell: cdktf.stringToTerraform(struct!.disableRemoteCliShell),
    disable_swagger: cdktf.stringToTerraform(struct!.disableSwagger),
    enable_clickjacking_protection: cdktf.stringToTerraform(struct!.enableClickjackingProtection),
    enable_http: cdktf.stringToTerraform(struct!.enableHttp),
    enable_https: cdktf.stringToTerraform(struct!.enableHttps),
    http_port: cdktf.stringToTerraform(struct!.httpPort),
    https_port: cdktf.stringToTerraform(struct!.httpsPort),
    minimum_password_length: cdktf.stringToTerraform(struct!.minimumPasswordLength),
    password_strength_check: cdktf.stringToTerraform(struct!.passwordStrengthCheck),
    pkiprofile_ref: cdktf.stringToTerraform(struct!.pkiprofileRef),
    redirect_to_https: cdktf.stringToTerraform(struct!.redirectToHttps),
    sslkeyandcertificate_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslkeyandcertificateRefs),
    sslprofile_ref: cdktf.stringToTerraform(struct!.sslprofileRef),
    use_uuid_from_input: cdktf.stringToTerraform(struct!.useUuidFromInput),
  }
}


export function systemconfigurationPortalConfigurationToHclTerraform(struct?: SystemconfigurationPortalConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_basic_authentication: {
      value: cdktf.stringToHclTerraform(struct!.allowBasicAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_force_timeout: {
      value: cdktf.stringToHclTerraform(struct!.apiForceTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_remote_cli_shell: {
      value: cdktf.stringToHclTerraform(struct!.disableRemoteCliShell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_swagger: {
      value: cdktf.stringToHclTerraform(struct!.disableSwagger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_clickjacking_protection: {
      value: cdktf.stringToHclTerraform(struct!.enableClickjackingProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_http: {
      value: cdktf.stringToHclTerraform(struct!.enableHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_https: {
      value: cdktf.stringToHclTerraform(struct!.enableHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.stringToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_port: {
      value: cdktf.stringToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_password_length: {
      value: cdktf.stringToHclTerraform(struct!.minimumPasswordLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_strength_check: {
      value: cdktf.stringToHclTerraform(struct!.passwordStrengthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkiprofile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiprofileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_to_https: {
      value: cdktf.stringToHclTerraform(struct!.redirectToHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslkeyandcertificate_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslkeyandcertificateRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sslprofile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslprofileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_uuid_from_input: {
      value: cdktf.stringToHclTerraform(struct!.useUuidFromInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationPortalConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationPortalConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowBasicAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowBasicAuthentication = this._allowBasicAuthentication;
    }
    if (this._apiForceTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiForceTimeout = this._apiForceTimeout;
    }
    if (this._disableRemoteCliShell !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRemoteCliShell = this._disableRemoteCliShell;
    }
    if (this._disableSwagger !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSwagger = this._disableSwagger;
    }
    if (this._enableClickjackingProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableClickjackingProtection = this._enableClickjackingProtection;
    }
    if (this._enableHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttp = this._enableHttp;
    }
    if (this._enableHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttps = this._enableHttps;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._minimumPasswordLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPasswordLength = this._minimumPasswordLength;
    }
    if (this._passwordStrengthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordStrengthCheck = this._passwordStrengthCheck;
    }
    if (this._pkiprofileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiprofileRef = this._pkiprofileRef;
    }
    if (this._redirectToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectToHttps = this._redirectToHttps;
    }
    if (this._sslkeyandcertificateRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslkeyandcertificateRefs = this._sslkeyandcertificateRefs;
    }
    if (this._sslprofileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslprofileRef = this._sslprofileRef;
    }
    if (this._useUuidFromInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUuidFromInput = this._useUuidFromInput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationPortalConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowBasicAuthentication = undefined;
      this._apiForceTimeout = undefined;
      this._disableRemoteCliShell = undefined;
      this._disableSwagger = undefined;
      this._enableClickjackingProtection = undefined;
      this._enableHttp = undefined;
      this._enableHttps = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._minimumPasswordLength = undefined;
      this._passwordStrengthCheck = undefined;
      this._pkiprofileRef = undefined;
      this._redirectToHttps = undefined;
      this._sslkeyandcertificateRefs = undefined;
      this._sslprofileRef = undefined;
      this._useUuidFromInput = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowBasicAuthentication = value.allowBasicAuthentication;
      this._apiForceTimeout = value.apiForceTimeout;
      this._disableRemoteCliShell = value.disableRemoteCliShell;
      this._disableSwagger = value.disableSwagger;
      this._enableClickjackingProtection = value.enableClickjackingProtection;
      this._enableHttp = value.enableHttp;
      this._enableHttps = value.enableHttps;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._minimumPasswordLength = value.minimumPasswordLength;
      this._passwordStrengthCheck = value.passwordStrengthCheck;
      this._pkiprofileRef = value.pkiprofileRef;
      this._redirectToHttps = value.redirectToHttps;
      this._sslkeyandcertificateRefs = value.sslkeyandcertificateRefs;
      this._sslprofileRef = value.sslprofileRef;
      this._useUuidFromInput = value.useUuidFromInput;
    }
  }

  // allow_basic_authentication - computed: false, optional: true, required: false
  private _allowBasicAuthentication?: string; 
  public get allowBasicAuthentication() {
    return this.getStringAttribute('allow_basic_authentication');
  }
  public set allowBasicAuthentication(value: string) {
    this._allowBasicAuthentication = value;
  }
  public resetAllowBasicAuthentication() {
    this._allowBasicAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBasicAuthenticationInput() {
    return this._allowBasicAuthentication;
  }

  // api_force_timeout - computed: false, optional: true, required: false
  private _apiForceTimeout?: string; 
  public get apiForceTimeout() {
    return this.getStringAttribute('api_force_timeout');
  }
  public set apiForceTimeout(value: string) {
    this._apiForceTimeout = value;
  }
  public resetApiForceTimeout() {
    this._apiForceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiForceTimeoutInput() {
    return this._apiForceTimeout;
  }

  // disable_remote_cli_shell - computed: false, optional: true, required: false
  private _disableRemoteCliShell?: string; 
  public get disableRemoteCliShell() {
    return this.getStringAttribute('disable_remote_cli_shell');
  }
  public set disableRemoteCliShell(value: string) {
    this._disableRemoteCliShell = value;
  }
  public resetDisableRemoteCliShell() {
    this._disableRemoteCliShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRemoteCliShellInput() {
    return this._disableRemoteCliShell;
  }

  // disable_swagger - computed: false, optional: true, required: false
  private _disableSwagger?: string; 
  public get disableSwagger() {
    return this.getStringAttribute('disable_swagger');
  }
  public set disableSwagger(value: string) {
    this._disableSwagger = value;
  }
  public resetDisableSwagger() {
    this._disableSwagger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSwaggerInput() {
    return this._disableSwagger;
  }

  // enable_clickjacking_protection - computed: false, optional: true, required: false
  private _enableClickjackingProtection?: string; 
  public get enableClickjackingProtection() {
    return this.getStringAttribute('enable_clickjacking_protection');
  }
  public set enableClickjackingProtection(value: string) {
    this._enableClickjackingProtection = value;
  }
  public resetEnableClickjackingProtection() {
    this._enableClickjackingProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClickjackingProtectionInput() {
    return this._enableClickjackingProtection;
  }

  // enable_http - computed: false, optional: true, required: false
  private _enableHttp?: string; 
  public get enableHttp() {
    return this.getStringAttribute('enable_http');
  }
  public set enableHttp(value: string) {
    this._enableHttp = value;
  }
  public resetEnableHttp() {
    this._enableHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpInput() {
    return this._enableHttp;
  }

  // enable_https - computed: false, optional: true, required: false
  private _enableHttps?: string; 
  public get enableHttps() {
    return this.getStringAttribute('enable_https');
  }
  public set enableHttps(value: string) {
    this._enableHttps = value;
  }
  public resetEnableHttps() {
    this._enableHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpsInput() {
    return this._enableHttps;
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: string; 
  public get httpPort() {
    return this.getStringAttribute('http_port');
  }
  public set httpPort(value: string) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: true, optional: true, required: false
  private _httpsPort?: string; 
  public get httpsPort() {
    return this.getStringAttribute('https_port');
  }
  public set httpsPort(value: string) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // minimum_password_length - computed: false, optional: true, required: false
  private _minimumPasswordLength?: string; 
  public get minimumPasswordLength() {
    return this.getStringAttribute('minimum_password_length');
  }
  public set minimumPasswordLength(value: string) {
    this._minimumPasswordLength = value;
  }
  public resetMinimumPasswordLength() {
    this._minimumPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordLengthInput() {
    return this._minimumPasswordLength;
  }

  // password_strength_check - computed: false, optional: true, required: false
  private _passwordStrengthCheck?: string; 
  public get passwordStrengthCheck() {
    return this.getStringAttribute('password_strength_check');
  }
  public set passwordStrengthCheck(value: string) {
    this._passwordStrengthCheck = value;
  }
  public resetPasswordStrengthCheck() {
    this._passwordStrengthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordStrengthCheckInput() {
    return this._passwordStrengthCheck;
  }

  // pkiprofile_ref - computed: true, optional: true, required: false
  private _pkiprofileRef?: string; 
  public get pkiprofileRef() {
    return this.getStringAttribute('pkiprofile_ref');
  }
  public set pkiprofileRef(value: string) {
    this._pkiprofileRef = value;
  }
  public resetPkiprofileRef() {
    this._pkiprofileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiprofileRefInput() {
    return this._pkiprofileRef;
  }

  // redirect_to_https - computed: false, optional: true, required: false
  private _redirectToHttps?: string; 
  public get redirectToHttps() {
    return this.getStringAttribute('redirect_to_https');
  }
  public set redirectToHttps(value: string) {
    this._redirectToHttps = value;
  }
  public resetRedirectToHttps() {
    this._redirectToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToHttpsInput() {
    return this._redirectToHttps;
  }

  // sslkeyandcertificate_refs - computed: false, optional: true, required: false
  private _sslkeyandcertificateRefs?: string[]; 
  public get sslkeyandcertificateRefs() {
    return this.getListAttribute('sslkeyandcertificate_refs');
  }
  public set sslkeyandcertificateRefs(value: string[]) {
    this._sslkeyandcertificateRefs = value;
  }
  public resetSslkeyandcertificateRefs() {
    this._sslkeyandcertificateRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslkeyandcertificateRefsInput() {
    return this._sslkeyandcertificateRefs;
  }

  // sslprofile_ref - computed: true, optional: true, required: false
  private _sslprofileRef?: string; 
  public get sslprofileRef() {
    return this.getStringAttribute('sslprofile_ref');
  }
  public set sslprofileRef(value: string) {
    this._sslprofileRef = value;
  }
  public resetSslprofileRef() {
    this._sslprofileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslprofileRefInput() {
    return this._sslprofileRef;
  }

  // use_uuid_from_input - computed: false, optional: true, required: false
  private _useUuidFromInput?: string; 
  public get useUuidFromInput() {
    return this.getStringAttribute('use_uuid_from_input');
  }
  public set useUuidFromInput(value: string) {
    this._useUuidFromInput = value;
  }
  public resetUseUuidFromInput() {
    this._useUuidFromInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUuidFromInputInput() {
    return this._useUuidFromInput;
  }
}

export class SystemconfigurationPortalConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationPortalConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationPortalConfigurationOutputReference {
    return new SystemconfigurationPortalConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#host Systemconfiguration#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#password Systemconfiguration#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#port Systemconfiguration#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#username Systemconfiguration#username}
  */
  readonly username?: string;
}

export function systemconfigurationProxyConfigurationToTerraform(struct?: SystemconfigurationProxyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function systemconfigurationProxyConfigurationToHclTerraform(struct?: SystemconfigurationProxyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationProxyConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationProxyConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationProxyConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class SystemconfigurationProxyConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationProxyConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationProxyConfigurationOutputReference {
    return new SystemconfigurationProxyConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationSecureChannelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#sslkeyandcertificate_refs Systemconfiguration#sslkeyandcertificate_refs}
  */
  readonly sslkeyandcertificateRefs?: string[];
}

export function systemconfigurationSecureChannelConfigurationToTerraform(struct?: SystemconfigurationSecureChannelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sslkeyandcertificate_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslkeyandcertificateRefs),
  }
}


export function systemconfigurationSecureChannelConfigurationToHclTerraform(struct?: SystemconfigurationSecureChannelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sslkeyandcertificate_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslkeyandcertificateRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationSecureChannelConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationSecureChannelConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslkeyandcertificateRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslkeyandcertificateRefs = this._sslkeyandcertificateRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationSecureChannelConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sslkeyandcertificateRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sslkeyandcertificateRefs = value.sslkeyandcertificateRefs;
    }
  }

  // sslkeyandcertificate_refs - computed: false, optional: true, required: false
  private _sslkeyandcertificateRefs?: string[]; 
  public get sslkeyandcertificateRefs() {
    return this.getListAttribute('sslkeyandcertificate_refs');
  }
  public set sslkeyandcertificateRefs(value: string[]) {
    this._sslkeyandcertificateRefs = value;
  }
  public resetSslkeyandcertificateRefs() {
    this._sslkeyandcertificateRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslkeyandcertificateRefsInput() {
    return this._sslkeyandcertificateRefs;
  }
}

export class SystemconfigurationSecureChannelConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationSecureChannelConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationSecureChannelConfigurationOutputReference {
    return new SystemconfigurationSecureChannelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationSnmpConfigurationSnmpV3ConfigUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#auth_passphrase Systemconfiguration#auth_passphrase}
  */
  readonly authPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#auth_type Systemconfiguration#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#priv_passphrase Systemconfiguration#priv_passphrase}
  */
  readonly privPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#priv_type Systemconfiguration#priv_type}
  */
  readonly privType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#username Systemconfiguration#username}
  */
  readonly username?: string;
}

export function systemconfigurationSnmpConfigurationSnmpV3ConfigUserToTerraform(struct?: SystemconfigurationSnmpConfigurationSnmpV3ConfigUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_passphrase: cdktf.stringToTerraform(struct!.authPassphrase),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    priv_passphrase: cdktf.stringToTerraform(struct!.privPassphrase),
    priv_type: cdktf.stringToTerraform(struct!.privType),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function systemconfigurationSnmpConfigurationSnmpV3ConfigUserToHclTerraform(struct?: SystemconfigurationSnmpConfigurationSnmpV3ConfigUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.authPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.privPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_type: {
      value: cdktf.stringToHclTerraform(struct!.privType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationSnmpConfigurationSnmpV3ConfigUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationSnmpConfigurationSnmpV3ConfigUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassphrase = this._authPassphrase;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._privPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.privPassphrase = this._privPassphrase;
    }
    if (this._privType !== undefined) {
      hasAnyValues = true;
      internalValueResult.privType = this._privType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationSnmpConfigurationSnmpV3ConfigUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authPassphrase = undefined;
      this._authType = undefined;
      this._privPassphrase = undefined;
      this._privType = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authPassphrase = value.authPassphrase;
      this._authType = value.authType;
      this._privPassphrase = value.privPassphrase;
      this._privType = value.privType;
      this._username = value.username;
    }
  }

  // auth_passphrase - computed: false, optional: true, required: false
  private _authPassphrase?: string; 
  public get authPassphrase() {
    return this.getStringAttribute('auth_passphrase');
  }
  public set authPassphrase(value: string) {
    this._authPassphrase = value;
  }
  public resetAuthPassphrase() {
    this._authPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPassphraseInput() {
    return this._authPassphrase;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // priv_passphrase - computed: false, optional: true, required: false
  private _privPassphrase?: string; 
  public get privPassphrase() {
    return this.getStringAttribute('priv_passphrase');
  }
  public set privPassphrase(value: string) {
    this._privPassphrase = value;
  }
  public resetPrivPassphrase() {
    this._privPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privPassphraseInput() {
    return this._privPassphrase;
  }

  // priv_type - computed: false, optional: true, required: false
  private _privType?: string; 
  public get privType() {
    return this.getStringAttribute('priv_type');
  }
  public set privType(value: string) {
    this._privType = value;
  }
  public resetPrivType() {
    this._privType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privTypeInput() {
    return this._privType;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class SystemconfigurationSnmpConfigurationSnmpV3ConfigUserList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationSnmpConfigurationSnmpV3ConfigUser[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationSnmpConfigurationSnmpV3ConfigUserOutputReference {
    return new SystemconfigurationSnmpConfigurationSnmpV3ConfigUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationSnmpConfigurationSnmpV3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#engine_id Systemconfiguration#engine_id}
  */
  readonly engineId?: string;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#user Systemconfiguration#user}
  */
  readonly user?: SystemconfigurationSnmpConfigurationSnmpV3ConfigUser[] | cdktf.IResolvable;
}

export function systemconfigurationSnmpConfigurationSnmpV3ConfigToTerraform(struct?: SystemconfigurationSnmpConfigurationSnmpV3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine_id: cdktf.stringToTerraform(struct!.engineId),
    user: cdktf.listMapper(systemconfigurationSnmpConfigurationSnmpV3ConfigUserToTerraform, true)(struct!.user),
  }
}


export function systemconfigurationSnmpConfigurationSnmpV3ConfigToHclTerraform(struct?: SystemconfigurationSnmpConfigurationSnmpV3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine_id: {
      value: cdktf.stringToHclTerraform(struct!.engineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.listMapperHcl(systemconfigurationSnmpConfigurationSnmpV3ConfigUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationSnmpConfigurationSnmpV3ConfigUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationSnmpConfigurationSnmpV3ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationSnmpConfigurationSnmpV3Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineId = this._engineId;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationSnmpConfigurationSnmpV3Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engineId = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engineId = value.engineId;
      this._user.internalValue = value.user;
    }
  }

  // engine_id - computed: true, optional: true, required: false
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // user - computed: false, optional: true, required: false
  private _user = new SystemconfigurationSnmpConfigurationSnmpV3ConfigUserList(this, "user", true);
  public get user() {
    return this._user;
  }
  public putUser(value: SystemconfigurationSnmpConfigurationSnmpV3ConfigUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

export class SystemconfigurationSnmpConfigurationSnmpV3ConfigList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationSnmpConfigurationSnmpV3Config[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationSnmpConfigurationSnmpV3ConfigOutputReference {
    return new SystemconfigurationSnmpConfigurationSnmpV3ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemconfigurationSnmpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#community Systemconfiguration#community}
  */
  readonly community?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#large_trap_payload Systemconfiguration#large_trap_payload}
  */
  readonly largeTrapPayload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#sys_contact Systemconfiguration#sys_contact}
  */
  readonly sysContact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#sys_location Systemconfiguration#sys_location}
  */
  readonly sysLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#version Systemconfiguration#version}
  */
  readonly version?: string;
  /**
  * snmp_v3_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#snmp_v3_config Systemconfiguration#snmp_v3_config}
  */
  readonly snmpV3Config?: SystemconfigurationSnmpConfigurationSnmpV3Config[] | cdktf.IResolvable;
}

export function systemconfigurationSnmpConfigurationToTerraform(struct?: SystemconfigurationSnmpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.stringToTerraform(struct!.community),
    large_trap_payload: cdktf.stringToTerraform(struct!.largeTrapPayload),
    sys_contact: cdktf.stringToTerraform(struct!.sysContact),
    sys_location: cdktf.stringToTerraform(struct!.sysLocation),
    version: cdktf.stringToTerraform(struct!.version),
    snmp_v3_config: cdktf.listMapper(systemconfigurationSnmpConfigurationSnmpV3ConfigToTerraform, true)(struct!.snmpV3Config),
  }
}


export function systemconfigurationSnmpConfigurationToHclTerraform(struct?: SystemconfigurationSnmpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    large_trap_payload: {
      value: cdktf.stringToHclTerraform(struct!.largeTrapPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sys_contact: {
      value: cdktf.stringToHclTerraform(struct!.sysContact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sys_location: {
      value: cdktf.stringToHclTerraform(struct!.sysLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_v3_config: {
      value: cdktf.listMapperHcl(systemconfigurationSnmpConfigurationSnmpV3ConfigToHclTerraform, true)(struct!.snmpV3Config),
      isBlock: true,
      type: "set",
      storageClassType: "SystemconfigurationSnmpConfigurationSnmpV3ConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemconfigurationSnmpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemconfigurationSnmpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._largeTrapPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeTrapPayload = this._largeTrapPayload;
    }
    if (this._sysContact !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysContact = this._sysContact;
    }
    if (this._sysLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysLocation = this._sysLocation;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._snmpV3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpV3Config = this._snmpV3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemconfigurationSnmpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
      this._largeTrapPayload = undefined;
      this._sysContact = undefined;
      this._sysLocation = undefined;
      this._version = undefined;
      this._snmpV3Config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
      this._largeTrapPayload = value.largeTrapPayload;
      this._sysContact = value.sysContact;
      this._sysLocation = value.sysLocation;
      this._version = value.version;
      this._snmpV3Config.internalValue = value.snmpV3Config;
    }
  }

  // community - computed: true, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // large_trap_payload - computed: false, optional: true, required: false
  private _largeTrapPayload?: string; 
  public get largeTrapPayload() {
    return this.getStringAttribute('large_trap_payload');
  }
  public set largeTrapPayload(value: string) {
    this._largeTrapPayload = value;
  }
  public resetLargeTrapPayload() {
    this._largeTrapPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeTrapPayloadInput() {
    return this._largeTrapPayload;
  }

  // sys_contact - computed: false, optional: true, required: false
  private _sysContact?: string; 
  public get sysContact() {
    return this.getStringAttribute('sys_contact');
  }
  public set sysContact(value: string) {
    this._sysContact = value;
  }
  public resetSysContact() {
    this._sysContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysContactInput() {
    return this._sysContact;
  }

  // sys_location - computed: true, optional: true, required: false
  private _sysLocation?: string; 
  public get sysLocation() {
    return this.getStringAttribute('sys_location');
  }
  public set sysLocation(value: string) {
    this._sysLocation = value;
  }
  public resetSysLocation() {
    this._sysLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysLocationInput() {
    return this._sysLocation;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // snmp_v3_config - computed: false, optional: true, required: false
  private _snmpV3Config = new SystemconfigurationSnmpConfigurationSnmpV3ConfigList(this, "snmp_v3_config", true);
  public get snmpV3Config() {
    return this._snmpV3Config;
  }
  public putSnmpV3Config(value: SystemconfigurationSnmpConfigurationSnmpV3Config[] | cdktf.IResolvable) {
    this._snmpV3Config.internalValue = value;
  }
  public resetSnmpV3Config() {
    this._snmpV3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3ConfigInput() {
    return this._snmpV3Config.internalValue;
  }
}

export class SystemconfigurationSnmpConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemconfigurationSnmpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemconfigurationSnmpConfigurationOutputReference {
    return new SystemconfigurationSnmpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration avi_systemconfiguration}
*/
export class Systemconfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_systemconfiguration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Systemconfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Systemconfiguration to import
  * @param importFromId The id of the existing Systemconfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Systemconfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_systemconfiguration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/systemconfiguration avi_systemconfiguration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemconfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemconfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_systemconfiguration',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commonCriteriaMode = config.commonCriteriaMode;
    this._defaultLicenseTier = config.defaultLicenseTier;
    this._dnsVirtualserviceRefs = config.dnsVirtualserviceRefs;
    this._dockerMode = config.dockerMode;
    this._enableCors = config.enableCors;
    this._fipsMode = config.fipsMode;
    this._hostKeyAlgorithmExclude = config.hostKeyAlgorithmExclude;
    this._id = config.id;
    this._kexAlgorithmExclude = config.kexAlgorithmExclude;
    this._rekeyTimeLimit = config.rekeyTimeLimit;
    this._rekeyVolumeLimit = config.rekeyVolumeLimit;
    this._sshCiphers = config.sshCiphers;
    this._sshHmacs = config.sshHmacs;
    this._uuid = config.uuid;
    this._welcomeWorkflowComplete = config.welcomeWorkflowComplete;
    this._adminAuthConfiguration.internalValue = config.adminAuthConfiguration;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._controllerAnalyticsPolicy.internalValue = config.controllerAnalyticsPolicy;
    this._dnsConfiguration.internalValue = config.dnsConfiguration;
    this._emailConfiguration.internalValue = config.emailConfiguration;
    this._globalTenantConfig.internalValue = config.globalTenantConfig;
    this._linuxConfiguration.internalValue = config.linuxConfiguration;
    this._mgmtIpAccessControl.internalValue = config.mgmtIpAccessControl;
    this._ntpConfiguration.internalValue = config.ntpConfiguration;
    this._portalConfiguration.internalValue = config.portalConfiguration;
    this._proxyConfiguration.internalValue = config.proxyConfiguration;
    this._secureChannelConfiguration.internalValue = config.secureChannelConfiguration;
    this._snmpConfiguration.internalValue = config.snmpConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // common_criteria_mode - computed: false, optional: true, required: false
  private _commonCriteriaMode?: string; 
  public get commonCriteriaMode() {
    return this.getStringAttribute('common_criteria_mode');
  }
  public set commonCriteriaMode(value: string) {
    this._commonCriteriaMode = value;
  }
  public resetCommonCriteriaMode() {
    this._commonCriteriaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonCriteriaModeInput() {
    return this._commonCriteriaMode;
  }

  // default_license_tier - computed: false, optional: true, required: false
  private _defaultLicenseTier?: string; 
  public get defaultLicenseTier() {
    return this.getStringAttribute('default_license_tier');
  }
  public set defaultLicenseTier(value: string) {
    this._defaultLicenseTier = value;
  }
  public resetDefaultLicenseTier() {
    this._defaultLicenseTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLicenseTierInput() {
    return this._defaultLicenseTier;
  }

  // dns_virtualservice_refs - computed: false, optional: true, required: false
  private _dnsVirtualserviceRefs?: string[]; 
  public get dnsVirtualserviceRefs() {
    return this.getListAttribute('dns_virtualservice_refs');
  }
  public set dnsVirtualserviceRefs(value: string[]) {
    this._dnsVirtualserviceRefs = value;
  }
  public resetDnsVirtualserviceRefs() {
    this._dnsVirtualserviceRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVirtualserviceRefsInput() {
    return this._dnsVirtualserviceRefs;
  }

  // docker_mode - computed: false, optional: true, required: false
  private _dockerMode?: string; 
  public get dockerMode() {
    return this.getStringAttribute('docker_mode');
  }
  public set dockerMode(value: string) {
    this._dockerMode = value;
  }
  public resetDockerMode() {
    this._dockerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerModeInput() {
    return this._dockerMode;
  }

  // enable_cors - computed: false, optional: true, required: false
  private _enableCors?: string; 
  public get enableCors() {
    return this.getStringAttribute('enable_cors');
  }
  public set enableCors(value: string) {
    this._enableCors = value;
  }
  public resetEnableCors() {
    this._enableCors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCorsInput() {
    return this._enableCors;
  }

  // fips_mode - computed: false, optional: true, required: false
  private _fipsMode?: string; 
  public get fipsMode() {
    return this.getStringAttribute('fips_mode');
  }
  public set fipsMode(value: string) {
    this._fipsMode = value;
  }
  public resetFipsMode() {
    this._fipsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsModeInput() {
    return this._fipsMode;
  }

  // host_key_algorithm_exclude - computed: true, optional: true, required: false
  private _hostKeyAlgorithmExclude?: string; 
  public get hostKeyAlgorithmExclude() {
    return this.getStringAttribute('host_key_algorithm_exclude');
  }
  public set hostKeyAlgorithmExclude(value: string) {
    this._hostKeyAlgorithmExclude = value;
  }
  public resetHostKeyAlgorithmExclude() {
    this._hostKeyAlgorithmExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyAlgorithmExcludeInput() {
    return this._hostKeyAlgorithmExclude;
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

  // kex_algorithm_exclude - computed: true, optional: true, required: false
  private _kexAlgorithmExclude?: string; 
  public get kexAlgorithmExclude() {
    return this.getStringAttribute('kex_algorithm_exclude');
  }
  public set kexAlgorithmExclude(value: string) {
    this._kexAlgorithmExclude = value;
  }
  public resetKexAlgorithmExclude() {
    this._kexAlgorithmExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexAlgorithmExcludeInput() {
    return this._kexAlgorithmExclude;
  }

  // rekey_time_limit - computed: false, optional: true, required: false
  private _rekeyTimeLimit?: string; 
  public get rekeyTimeLimit() {
    return this.getStringAttribute('rekey_time_limit');
  }
  public set rekeyTimeLimit(value: string) {
    this._rekeyTimeLimit = value;
  }
  public resetRekeyTimeLimit() {
    this._rekeyTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyTimeLimitInput() {
    return this._rekeyTimeLimit;
  }

  // rekey_volume_limit - computed: false, optional: true, required: false
  private _rekeyVolumeLimit?: string; 
  public get rekeyVolumeLimit() {
    return this.getStringAttribute('rekey_volume_limit');
  }
  public set rekeyVolumeLimit(value: string) {
    this._rekeyVolumeLimit = value;
  }
  public resetRekeyVolumeLimit() {
    this._rekeyVolumeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyVolumeLimitInput() {
    return this._rekeyVolumeLimit;
  }

  // ssh_ciphers - computed: false, optional: true, required: false
  private _sshCiphers?: string[]; 
  public get sshCiphers() {
    return this.getListAttribute('ssh_ciphers');
  }
  public set sshCiphers(value: string[]) {
    this._sshCiphers = value;
  }
  public resetSshCiphers() {
    this._sshCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCiphersInput() {
    return this._sshCiphers;
  }

  // ssh_hmacs - computed: false, optional: true, required: false
  private _sshHmacs?: string[]; 
  public get sshHmacs() {
    return this.getListAttribute('ssh_hmacs');
  }
  public set sshHmacs(value: string[]) {
    this._sshHmacs = value;
  }
  public resetSshHmacs() {
    this._sshHmacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHmacsInput() {
    return this._sshHmacs;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // welcome_workflow_complete - computed: false, optional: true, required: false
  private _welcomeWorkflowComplete?: string; 
  public get welcomeWorkflowComplete() {
    return this.getStringAttribute('welcome_workflow_complete');
  }
  public set welcomeWorkflowComplete(value: string) {
    this._welcomeWorkflowComplete = value;
  }
  public resetWelcomeWorkflowComplete() {
    this._welcomeWorkflowComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get welcomeWorkflowCompleteInput() {
    return this._welcomeWorkflowComplete;
  }

  // admin_auth_configuration - computed: false, optional: true, required: false
  private _adminAuthConfiguration = new SystemconfigurationAdminAuthConfigurationList(this, "admin_auth_configuration", true);
  public get adminAuthConfiguration() {
    return this._adminAuthConfiguration;
  }
  public putAdminAuthConfiguration(value: SystemconfigurationAdminAuthConfiguration[] | cdktf.IResolvable) {
    this._adminAuthConfiguration.internalValue = value;
  }
  public resetAdminAuthConfiguration() {
    this._adminAuthConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAuthConfigurationInput() {
    return this._adminAuthConfiguration.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new SystemconfigurationConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: SystemconfigurationConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // controller_analytics_policy - computed: false, optional: true, required: false
  private _controllerAnalyticsPolicy = new SystemconfigurationControllerAnalyticsPolicyList(this, "controller_analytics_policy", true);
  public get controllerAnalyticsPolicy() {
    return this._controllerAnalyticsPolicy;
  }
  public putControllerAnalyticsPolicy(value: SystemconfigurationControllerAnalyticsPolicy[] | cdktf.IResolvable) {
    this._controllerAnalyticsPolicy.internalValue = value;
  }
  public resetControllerAnalyticsPolicy() {
    this._controllerAnalyticsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerAnalyticsPolicyInput() {
    return this._controllerAnalyticsPolicy.internalValue;
  }

  // dns_configuration - computed: false, optional: true, required: false
  private _dnsConfiguration = new SystemconfigurationDnsConfigurationList(this, "dns_configuration", true);
  public get dnsConfiguration() {
    return this._dnsConfiguration;
  }
  public putDnsConfiguration(value: SystemconfigurationDnsConfiguration[] | cdktf.IResolvable) {
    this._dnsConfiguration.internalValue = value;
  }
  public resetDnsConfiguration() {
    this._dnsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigurationInput() {
    return this._dnsConfiguration.internalValue;
  }

  // email_configuration - computed: false, optional: true, required: false
  private _emailConfiguration = new SystemconfigurationEmailConfigurationList(this, "email_configuration", true);
  public get emailConfiguration() {
    return this._emailConfiguration;
  }
  public putEmailConfiguration(value: SystemconfigurationEmailConfiguration[] | cdktf.IResolvable) {
    this._emailConfiguration.internalValue = value;
  }
  public resetEmailConfiguration() {
    this._emailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigurationInput() {
    return this._emailConfiguration.internalValue;
  }

  // global_tenant_config - computed: false, optional: true, required: false
  private _globalTenantConfig = new SystemconfigurationGlobalTenantConfigList(this, "global_tenant_config", true);
  public get globalTenantConfig() {
    return this._globalTenantConfig;
  }
  public putGlobalTenantConfig(value: SystemconfigurationGlobalTenantConfig[] | cdktf.IResolvable) {
    this._globalTenantConfig.internalValue = value;
  }
  public resetGlobalTenantConfig() {
    this._globalTenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTenantConfigInput() {
    return this._globalTenantConfig.internalValue;
  }

  // linux_configuration - computed: false, optional: true, required: false
  private _linuxConfiguration = new SystemconfigurationLinuxConfigurationList(this, "linux_configuration", true);
  public get linuxConfiguration() {
    return this._linuxConfiguration;
  }
  public putLinuxConfiguration(value: SystemconfigurationLinuxConfiguration[] | cdktf.IResolvable) {
    this._linuxConfiguration.internalValue = value;
  }
  public resetLinuxConfiguration() {
    this._linuxConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxConfigurationInput() {
    return this._linuxConfiguration.internalValue;
  }

  // mgmt_ip_access_control - computed: false, optional: true, required: false
  private _mgmtIpAccessControl = new SystemconfigurationMgmtIpAccessControlList(this, "mgmt_ip_access_control", true);
  public get mgmtIpAccessControl() {
    return this._mgmtIpAccessControl;
  }
  public putMgmtIpAccessControl(value: SystemconfigurationMgmtIpAccessControl[] | cdktf.IResolvable) {
    this._mgmtIpAccessControl.internalValue = value;
  }
  public resetMgmtIpAccessControl() {
    this._mgmtIpAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpAccessControlInput() {
    return this._mgmtIpAccessControl.internalValue;
  }

  // ntp_configuration - computed: false, optional: true, required: false
  private _ntpConfiguration = new SystemconfigurationNtpConfigurationList(this, "ntp_configuration", true);
  public get ntpConfiguration() {
    return this._ntpConfiguration;
  }
  public putNtpConfiguration(value: SystemconfigurationNtpConfiguration[] | cdktf.IResolvable) {
    this._ntpConfiguration.internalValue = value;
  }
  public resetNtpConfiguration() {
    this._ntpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpConfigurationInput() {
    return this._ntpConfiguration.internalValue;
  }

  // portal_configuration - computed: false, optional: true, required: false
  private _portalConfiguration = new SystemconfigurationPortalConfigurationList(this, "portal_configuration", true);
  public get portalConfiguration() {
    return this._portalConfiguration;
  }
  public putPortalConfiguration(value: SystemconfigurationPortalConfiguration[] | cdktf.IResolvable) {
    this._portalConfiguration.internalValue = value;
  }
  public resetPortalConfiguration() {
    this._portalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalConfigurationInput() {
    return this._portalConfiguration.internalValue;
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration = new SystemconfigurationProxyConfigurationList(this, "proxy_configuration", true);
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public putProxyConfiguration(value: SystemconfigurationProxyConfiguration[] | cdktf.IResolvable) {
    this._proxyConfiguration.internalValue = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration.internalValue;
  }

  // secure_channel_configuration - computed: false, optional: true, required: false
  private _secureChannelConfiguration = new SystemconfigurationSecureChannelConfigurationList(this, "secure_channel_configuration", true);
  public get secureChannelConfiguration() {
    return this._secureChannelConfiguration;
  }
  public putSecureChannelConfiguration(value: SystemconfigurationSecureChannelConfiguration[] | cdktf.IResolvable) {
    this._secureChannelConfiguration.internalValue = value;
  }
  public resetSecureChannelConfiguration() {
    this._secureChannelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureChannelConfigurationInput() {
    return this._secureChannelConfiguration.internalValue;
  }

  // snmp_configuration - computed: false, optional: true, required: false
  private _snmpConfiguration = new SystemconfigurationSnmpConfigurationList(this, "snmp_configuration", true);
  public get snmpConfiguration() {
    return this._snmpConfiguration;
  }
  public putSnmpConfiguration(value: SystemconfigurationSnmpConfiguration[] | cdktf.IResolvable) {
    this._snmpConfiguration.internalValue = value;
  }
  public resetSnmpConfiguration() {
    this._snmpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpConfigurationInput() {
    return this._snmpConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      common_criteria_mode: cdktf.stringToTerraform(this._commonCriteriaMode),
      default_license_tier: cdktf.stringToTerraform(this._defaultLicenseTier),
      dns_virtualservice_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsVirtualserviceRefs),
      docker_mode: cdktf.stringToTerraform(this._dockerMode),
      enable_cors: cdktf.stringToTerraform(this._enableCors),
      fips_mode: cdktf.stringToTerraform(this._fipsMode),
      host_key_algorithm_exclude: cdktf.stringToTerraform(this._hostKeyAlgorithmExclude),
      id: cdktf.stringToTerraform(this._id),
      kex_algorithm_exclude: cdktf.stringToTerraform(this._kexAlgorithmExclude),
      rekey_time_limit: cdktf.stringToTerraform(this._rekeyTimeLimit),
      rekey_volume_limit: cdktf.stringToTerraform(this._rekeyVolumeLimit),
      ssh_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshCiphers),
      ssh_hmacs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshHmacs),
      uuid: cdktf.stringToTerraform(this._uuid),
      welcome_workflow_complete: cdktf.stringToTerraform(this._welcomeWorkflowComplete),
      admin_auth_configuration: cdktf.listMapper(systemconfigurationAdminAuthConfigurationToTerraform, true)(this._adminAuthConfiguration.internalValue),
      configpb_attributes: cdktf.listMapper(systemconfigurationConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      controller_analytics_policy: cdktf.listMapper(systemconfigurationControllerAnalyticsPolicyToTerraform, true)(this._controllerAnalyticsPolicy.internalValue),
      dns_configuration: cdktf.listMapper(systemconfigurationDnsConfigurationToTerraform, true)(this._dnsConfiguration.internalValue),
      email_configuration: cdktf.listMapper(systemconfigurationEmailConfigurationToTerraform, true)(this._emailConfiguration.internalValue),
      global_tenant_config: cdktf.listMapper(systemconfigurationGlobalTenantConfigToTerraform, true)(this._globalTenantConfig.internalValue),
      linux_configuration: cdktf.listMapper(systemconfigurationLinuxConfigurationToTerraform, true)(this._linuxConfiguration.internalValue),
      mgmt_ip_access_control: cdktf.listMapper(systemconfigurationMgmtIpAccessControlToTerraform, true)(this._mgmtIpAccessControl.internalValue),
      ntp_configuration: cdktf.listMapper(systemconfigurationNtpConfigurationToTerraform, true)(this._ntpConfiguration.internalValue),
      portal_configuration: cdktf.listMapper(systemconfigurationPortalConfigurationToTerraform, true)(this._portalConfiguration.internalValue),
      proxy_configuration: cdktf.listMapper(systemconfigurationProxyConfigurationToTerraform, true)(this._proxyConfiguration.internalValue),
      secure_channel_configuration: cdktf.listMapper(systemconfigurationSecureChannelConfigurationToTerraform, true)(this._secureChannelConfiguration.internalValue),
      snmp_configuration: cdktf.listMapper(systemconfigurationSnmpConfigurationToTerraform, true)(this._snmpConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      common_criteria_mode: {
        value: cdktf.stringToHclTerraform(this._commonCriteriaMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_license_tier: {
        value: cdktf.stringToHclTerraform(this._defaultLicenseTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_virtualservice_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsVirtualserviceRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      docker_mode: {
        value: cdktf.stringToHclTerraform(this._dockerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_cors: {
        value: cdktf.stringToHclTerraform(this._enableCors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fips_mode: {
        value: cdktf.stringToHclTerraform(this._fipsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_key_algorithm_exclude: {
        value: cdktf.stringToHclTerraform(this._hostKeyAlgorithmExclude),
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
      kex_algorithm_exclude: {
        value: cdktf.stringToHclTerraform(this._kexAlgorithmExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rekey_time_limit: {
        value: cdktf.stringToHclTerraform(this._rekeyTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rekey_volume_limit: {
        value: cdktf.stringToHclTerraform(this._rekeyVolumeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_ciphers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshCiphers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssh_hmacs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshHmacs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      welcome_workflow_complete: {
        value: cdktf.stringToHclTerraform(this._welcomeWorkflowComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_auth_configuration: {
        value: cdktf.listMapperHcl(systemconfigurationAdminAuthConfigurationToHclTerraform, true)(this._adminAuthConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationAdminAuthConfigurationList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(systemconfigurationConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationConfigpbAttributesList",
      },
      controller_analytics_policy: {
        value: cdktf.listMapperHcl(systemconfigurationControllerAnalyticsPolicyToHclTerraform, true)(this._controllerAnalyticsPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationControllerAnalyticsPolicyList",
      },
      dns_configuration: {
        value: cdktf.listMapperHcl(systemconfigurationDnsConfigurationToHclTerraform, true)(this._dnsConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationDnsConfigurationList",
      },
      email_configuration: {
        value: cdktf.listMapperHcl(systemconfigurationEmailConfigurationToHclTerraform, true)(this._emailConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationEmailConfigurationList",
      },
      global_tenant_config: {
        value: cdktf.listMapperHcl(systemconfigurationGlobalTenantConfigToHclTerraform, true)(this._globalTenantConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationGlobalTenantConfigList",
      },
      linux_configuration: {
        value: cdktf.listMapperHcl(systemconfigurationLinuxConfigurationToHclTerraform, true)(this._linuxConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationLinuxConfigurationList",
      },
      mgmt_ip_access_control: {
        value: cdktf.listMapperHcl(systemconfigurationMgmtIpAccessControlToHclTerraform, true)(this._mgmtIpAccessControl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationMgmtIpAccessControlList",
      },
      ntp_configuration: {
        value: cdktf.listMapperHcl(systemconfigurationNtpConfigurationToHclTerraform, true)(this._ntpConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationNtpConfigurationList",
      },
      portal_configuration: {
        value: cdktf.listMapperHcl(systemconfigurationPortalConfigurationToHclTerraform, true)(this._portalConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationPortalConfigurationList",
      },
      proxy_configuration: {
        value: cdktf.listMapperHcl(systemconfigurationProxyConfigurationToHclTerraform, true)(this._proxyConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationProxyConfigurationList",
      },
      secure_channel_configuration: {
        value: cdktf.listMapperHcl(systemconfigurationSecureChannelConfigurationToHclTerraform, true)(this._secureChannelConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationSecureChannelConfigurationList",
      },
      snmp_configuration: {
        value: cdktf.listMapperHcl(systemconfigurationSnmpConfigurationToHclTerraform, true)(this._snmpConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemconfigurationSnmpConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
