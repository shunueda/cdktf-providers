// https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#authentication_method Settings#authentication_method}
  */
  readonly authenticationMethod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#disable_kube_roles_sync Settings#disable_kube_roles_sync}
  */
  readonly disableKubeRolesSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#disable_kube_shell Settings#disable_kube_shell}
  */
  readonly disableKubeShell?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#disable_kubeconfig_download Settings#disable_kubeconfig_download}
  */
  readonly disableKubeconfigDownload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#display_donation_header Settings#display_donation_header}
  */
  readonly displayDonationHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#display_external_contributors Settings#display_external_contributors}
  */
  readonly displayExternalContributors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#edge_agent_checkin_interval Settings#edge_agent_checkin_interval}
  */
  readonly edgeAgentCheckinInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#edge_portainer_url Settings#edge_portainer_url}
  */
  readonly edgePortainerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#enable_edge_compute_features Settings#enable_edge_compute_features}
  */
  readonly enableEdgeComputeFeatures?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#enable_telemetry Settings#enable_telemetry}
  */
  readonly enableTelemetry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#enforce_edge_id Settings#enforce_edge_id}
  */
  readonly enforceEdgeId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#helm_repository_url Settings#helm_repository_url}
  */
  readonly helmRepositoryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#id Settings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#is_docker_desktop_extension Settings#is_docker_desktop_extension}
  */
  readonly isDockerDesktopExtension?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#kubeconfig_expiry Settings#kubeconfig_expiry}
  */
  readonly kubeconfigExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#kubectl_shell_image Settings#kubectl_shell_image}
  */
  readonly kubectlShellImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#logo_url Settings#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#snapshot_interval Settings#snapshot_interval}
  */
  readonly snapshotInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#templates_url Settings#templates_url}
  */
  readonly templatesUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#trust_on_first_connect Settings#trust_on_first_connect}
  */
  readonly trustOnFirstConnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#user_session_timeout Settings#user_session_timeout}
  */
  readonly userSessionTimeout?: string;
  /**
  * black_listed_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#black_listed_labels Settings#black_listed_labels}
  */
  readonly blackListedLabels?: SettingsBlackListedLabels[] | cdktf.IResolvable;
  /**
  * global_deployment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#global_deployment_options Settings#global_deployment_options}
  */
  readonly globalDeploymentOptions?: SettingsGlobalDeploymentOptions;
  /**
  * internal_auth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#internal_auth_settings Settings#internal_auth_settings}
  */
  readonly internalAuthSettings?: SettingsInternalAuthSettings;
  /**
  * ldap_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#ldap_settings Settings#ldap_settings}
  */
  readonly ldapSettings?: SettingsLdapSettings;
  /**
  * oauth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#oauth_settings Settings#oauth_settings}
  */
  readonly oauthSettings?: SettingsOauthSettings;
}
export interface SettingsBlackListedLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#name Settings#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#value Settings#value}
  */
  readonly value: string;
}

export function settingsBlackListedLabelsToTerraform(struct?: SettingsBlackListedLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function settingsBlackListedLabelsToHclTerraform(struct?: SettingsBlackListedLabels | cdktf.IResolvable): any {
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

export class SettingsBlackListedLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SettingsBlackListedLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SettingsBlackListedLabels | cdktf.IResolvable | undefined) {
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

export class SettingsBlackListedLabelsList extends cdktf.ComplexList {
  public internalValue? : SettingsBlackListedLabels[] | cdktf.IResolvable

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
  public get(index: number): SettingsBlackListedLabelsOutputReference {
    return new SettingsBlackListedLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SettingsGlobalDeploymentOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#hide_stacks_functionality Settings#hide_stacks_functionality}
  */
  readonly hideStacksFunctionality?: boolean | cdktf.IResolvable;
}

export function settingsGlobalDeploymentOptionsToTerraform(struct?: SettingsGlobalDeploymentOptionsOutputReference | SettingsGlobalDeploymentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide_stacks_functionality: cdktf.booleanToTerraform(struct!.hideStacksFunctionality),
  }
}


export function settingsGlobalDeploymentOptionsToHclTerraform(struct?: SettingsGlobalDeploymentOptionsOutputReference | SettingsGlobalDeploymentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide_stacks_functionality: {
      value: cdktf.booleanToHclTerraform(struct!.hideStacksFunctionality),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingsGlobalDeploymentOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SettingsGlobalDeploymentOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hideStacksFunctionality !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideStacksFunctionality = this._hideStacksFunctionality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingsGlobalDeploymentOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hideStacksFunctionality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hideStacksFunctionality = value.hideStacksFunctionality;
    }
  }

  // hide_stacks_functionality - computed: true, optional: true, required: false
  private _hideStacksFunctionality?: boolean | cdktf.IResolvable; 
  public get hideStacksFunctionality() {
    return this.getBooleanAttribute('hide_stacks_functionality');
  }
  public set hideStacksFunctionality(value: boolean | cdktf.IResolvable) {
    this._hideStacksFunctionality = value;
  }
  public resetHideStacksFunctionality() {
    this._hideStacksFunctionality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideStacksFunctionalityInput() {
    return this._hideStacksFunctionality;
  }
}
export interface SettingsInternalAuthSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#required_password_length Settings#required_password_length}
  */
  readonly requiredPasswordLength?: number;
}

export function settingsInternalAuthSettingsToTerraform(struct?: SettingsInternalAuthSettingsOutputReference | SettingsInternalAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required_password_length: cdktf.numberToTerraform(struct!.requiredPasswordLength),
  }
}


export function settingsInternalAuthSettingsToHclTerraform(struct?: SettingsInternalAuthSettingsOutputReference | SettingsInternalAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required_password_length: {
      value: cdktf.numberToHclTerraform(struct!.requiredPasswordLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingsInternalAuthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SettingsInternalAuthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requiredPasswordLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredPasswordLength = this._requiredPasswordLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingsInternalAuthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requiredPasswordLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requiredPasswordLength = value.requiredPasswordLength;
    }
  }

  // required_password_length - computed: true, optional: true, required: false
  private _requiredPasswordLength?: number; 
  public get requiredPasswordLength() {
    return this.getNumberAttribute('required_password_length');
  }
  public set requiredPasswordLength(value: number) {
    this._requiredPasswordLength = value;
  }
  public resetRequiredPasswordLength() {
    this._requiredPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPasswordLengthInput() {
    return this._requiredPasswordLength;
  }
}
export interface SettingsLdapSettingsGroupSearchSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#group_attribute Settings#group_attribute}
  */
  readonly groupAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#group_base_dn Settings#group_base_dn}
  */
  readonly groupBaseDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#group_filter Settings#group_filter}
  */
  readonly groupFilter?: string;
}

export function settingsLdapSettingsGroupSearchSettingsToTerraform(struct?: SettingsLdapSettingsGroupSearchSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_attribute: cdktf.stringToTerraform(struct!.groupAttribute),
    group_base_dn: cdktf.stringToTerraform(struct!.groupBaseDn),
    group_filter: cdktf.stringToTerraform(struct!.groupFilter),
  }
}


export function settingsLdapSettingsGroupSearchSettingsToHclTerraform(struct?: SettingsLdapSettingsGroupSearchSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_attribute: {
      value: cdktf.stringToHclTerraform(struct!.groupAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_base_dn: {
      value: cdktf.stringToHclTerraform(struct!.groupBaseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_filter: {
      value: cdktf.stringToHclTerraform(struct!.groupFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingsLdapSettingsGroupSearchSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SettingsLdapSettingsGroupSearchSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttribute = this._groupAttribute;
    }
    if (this._groupBaseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBaseDn = this._groupBaseDn;
    }
    if (this._groupFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupFilter = this._groupFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingsLdapSettingsGroupSearchSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAttribute = undefined;
      this._groupBaseDn = undefined;
      this._groupFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAttribute = value.groupAttribute;
      this._groupBaseDn = value.groupBaseDn;
      this._groupFilter = value.groupFilter;
    }
  }

  // group_attribute - computed: true, optional: true, required: false
  private _groupAttribute?: string; 
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }
  public set groupAttribute(value: string) {
    this._groupAttribute = value;
  }
  public resetGroupAttribute() {
    this._groupAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeInput() {
    return this._groupAttribute;
  }

  // group_base_dn - computed: true, optional: true, required: false
  private _groupBaseDn?: string; 
  public get groupBaseDn() {
    return this.getStringAttribute('group_base_dn');
  }
  public set groupBaseDn(value: string) {
    this._groupBaseDn = value;
  }
  public resetGroupBaseDn() {
    this._groupBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBaseDnInput() {
    return this._groupBaseDn;
  }

  // group_filter - computed: true, optional: true, required: false
  private _groupFilter?: string; 
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }
  public set groupFilter(value: string) {
    this._groupFilter = value;
  }
  public resetGroupFilter() {
    this._groupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterInput() {
    return this._groupFilter;
  }
}

export class SettingsLdapSettingsGroupSearchSettingsList extends cdktf.ComplexList {
  public internalValue? : SettingsLdapSettingsGroupSearchSettings[] | cdktf.IResolvable

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
  public get(index: number): SettingsLdapSettingsGroupSearchSettingsOutputReference {
    return new SettingsLdapSettingsGroupSearchSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SettingsLdapSettingsSearchSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#base_dn Settings#base_dn}
  */
  readonly baseDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#filter Settings#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#user_name_attribute Settings#user_name_attribute}
  */
  readonly userNameAttribute?: string;
}

export function settingsLdapSettingsSearchSettingsToTerraform(struct?: SettingsLdapSettingsSearchSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    filter: cdktf.stringToTerraform(struct!.filter),
    user_name_attribute: cdktf.stringToTerraform(struct!.userNameAttribute),
  }
}


export function settingsLdapSettingsSearchSettingsToHclTerraform(struct?: SettingsLdapSettingsSearchSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name_attribute: {
      value: cdktf.stringToHclTerraform(struct!.userNameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingsLdapSettingsSearchSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SettingsLdapSettingsSearchSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._userNameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameAttribute = this._userNameAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingsLdapSettingsSearchSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._filter = undefined;
      this._userNameAttribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._filter = value.filter;
      this._userNameAttribute = value.userNameAttribute;
    }
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // user_name_attribute - computed: true, optional: true, required: false
  private _userNameAttribute?: string; 
  public get userNameAttribute() {
    return this.getStringAttribute('user_name_attribute');
  }
  public set userNameAttribute(value: string) {
    this._userNameAttribute = value;
  }
  public resetUserNameAttribute() {
    this._userNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameAttributeInput() {
    return this._userNameAttribute;
  }
}

export class SettingsLdapSettingsSearchSettingsList extends cdktf.ComplexList {
  public internalValue? : SettingsLdapSettingsSearchSettings[] | cdktf.IResolvable

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
  public get(index: number): SettingsLdapSettingsSearchSettingsOutputReference {
    return new SettingsLdapSettingsSearchSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SettingsLdapSettingsTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#tls Settings#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#tls_ca_cert Settings#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#tls_cert Settings#tls_cert}
  */
  readonly tlsCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#tls_key Settings#tls_key}
  */
  readonly tlsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#tls_skip_verify Settings#tls_skip_verify}
  */
  readonly tlsSkipVerify?: boolean | cdktf.IResolvable;
}

export function settingsLdapSettingsTlsConfigToTerraform(struct?: SettingsLdapSettingsTlsConfigOutputReference | SettingsLdapSettingsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: cdktf.booleanToTerraform(struct!.tls),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_cert: cdktf.stringToTerraform(struct!.tlsCert),
    tls_key: cdktf.stringToTerraform(struct!.tlsKey),
    tls_skip_verify: cdktf.booleanToTerraform(struct!.tlsSkipVerify),
  }
}


export function settingsLdapSettingsTlsConfigToHclTerraform(struct?: SettingsLdapSettingsTlsConfigOutputReference | SettingsLdapSettingsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.tlsSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingsLdapSettingsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SettingsLdapSettingsTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._tlsCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaCert = this._tlsCaCert;
    }
    if (this._tlsCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCert = this._tlsCert;
    }
    if (this._tlsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsKey = this._tlsKey;
    }
    if (this._tlsSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSkipVerify = this._tlsSkipVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingsLdapSettingsTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls = undefined;
      this._tlsCaCert = undefined;
      this._tlsCert = undefined;
      this._tlsKey = undefined;
      this._tlsSkipVerify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls = value.tls;
      this._tlsCaCert = value.tlsCaCert;
      this._tlsCert = value.tlsCert;
      this._tlsKey = value.tlsKey;
      this._tlsSkipVerify = value.tlsSkipVerify;
    }
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // tls_ca_cert - computed: true, optional: true, required: false
  private _tlsCaCert?: string; 
  public get tlsCaCert() {
    return this.getStringAttribute('tls_ca_cert');
  }
  public set tlsCaCert(value: string) {
    this._tlsCaCert = value;
  }
  public resetTlsCaCert() {
    this._tlsCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertInput() {
    return this._tlsCaCert;
  }

  // tls_cert - computed: true, optional: true, required: false
  private _tlsCert?: string; 
  public get tlsCert() {
    return this.getStringAttribute('tls_cert');
  }
  public set tlsCert(value: string) {
    this._tlsCert = value;
  }
  public resetTlsCert() {
    this._tlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertInput() {
    return this._tlsCert;
  }

  // tls_key - computed: true, optional: true, required: false
  private _tlsKey?: string; 
  public get tlsKey() {
    return this.getStringAttribute('tls_key');
  }
  public set tlsKey(value: string) {
    this._tlsKey = value;
  }
  public resetTlsKey() {
    this._tlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeyInput() {
    return this._tlsKey;
  }

  // tls_skip_verify - computed: true, optional: true, required: false
  private _tlsSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsSkipVerify() {
    return this.getBooleanAttribute('tls_skip_verify');
  }
  public set tlsSkipVerify(value: boolean | cdktf.IResolvable) {
    this._tlsSkipVerify = value;
  }
  public resetTlsSkipVerify() {
    this._tlsSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSkipVerifyInput() {
    return this._tlsSkipVerify;
  }
}
export interface SettingsLdapSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#anonymous_mode Settings#anonymous_mode}
  */
  readonly anonymousMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#auto_create_users Settings#auto_create_users}
  */
  readonly autoCreateUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#password Settings#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#reader_dn Settings#reader_dn}
  */
  readonly readerDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#start_tls Settings#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#url Settings#url}
  */
  readonly url?: string;
  /**
  * group_search_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#group_search_settings Settings#group_search_settings}
  */
  readonly groupSearchSettings?: SettingsLdapSettingsGroupSearchSettings[] | cdktf.IResolvable;
  /**
  * search_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#search_settings Settings#search_settings}
  */
  readonly searchSettings?: SettingsLdapSettingsSearchSettings[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#tls_config Settings#tls_config}
  */
  readonly tlsConfig?: SettingsLdapSettingsTlsConfig;
}

export function settingsLdapSettingsToTerraform(struct?: SettingsLdapSettingsOutputReference | SettingsLdapSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymous_mode: cdktf.booleanToTerraform(struct!.anonymousMode),
    auto_create_users: cdktf.booleanToTerraform(struct!.autoCreateUsers),
    password: cdktf.stringToTerraform(struct!.password),
    reader_dn: cdktf.stringToTerraform(struct!.readerDn),
    start_tls: cdktf.booleanToTerraform(struct!.startTls),
    url: cdktf.stringToTerraform(struct!.url),
    group_search_settings: cdktf.listMapper(settingsLdapSettingsGroupSearchSettingsToTerraform, true)(struct!.groupSearchSettings),
    search_settings: cdktf.listMapper(settingsLdapSettingsSearchSettingsToTerraform, true)(struct!.searchSettings),
    tls_config: settingsLdapSettingsTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function settingsLdapSettingsToHclTerraform(struct?: SettingsLdapSettingsOutputReference | SettingsLdapSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymous_mode: {
      value: cdktf.booleanToHclTerraform(struct!.anonymousMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_create_users: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reader_dn: {
      value: cdktf.stringToHclTerraform(struct!.readerDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_tls: {
      value: cdktf.booleanToHclTerraform(struct!.startTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_search_settings: {
      value: cdktf.listMapperHcl(settingsLdapSettingsGroupSearchSettingsToHclTerraform, true)(struct!.groupSearchSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SettingsLdapSettingsGroupSearchSettingsList",
    },
    search_settings: {
      value: cdktf.listMapperHcl(settingsLdapSettingsSearchSettingsToHclTerraform, true)(struct!.searchSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SettingsLdapSettingsSearchSettingsList",
    },
    tls_config: {
      value: settingsLdapSettingsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SettingsLdapSettingsTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingsLdapSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SettingsLdapSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymousMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousMode = this._anonymousMode;
    }
    if (this._autoCreateUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateUsers = this._autoCreateUsers;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._readerDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.readerDn = this._readerDn;
    }
    if (this._startTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTls = this._startTls;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._groupSearchSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSearchSettings = this._groupSearchSettings?.internalValue;
    }
    if (this._searchSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSettings = this._searchSettings?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingsLdapSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anonymousMode = undefined;
      this._autoCreateUsers = undefined;
      this._password = undefined;
      this._readerDn = undefined;
      this._startTls = undefined;
      this._url = undefined;
      this._groupSearchSettings.internalValue = undefined;
      this._searchSettings.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anonymousMode = value.anonymousMode;
      this._autoCreateUsers = value.autoCreateUsers;
      this._password = value.password;
      this._readerDn = value.readerDn;
      this._startTls = value.startTls;
      this._url = value.url;
      this._groupSearchSettings.internalValue = value.groupSearchSettings;
      this._searchSettings.internalValue = value.searchSettings;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // anonymous_mode - computed: true, optional: true, required: false
  private _anonymousMode?: boolean | cdktf.IResolvable; 
  public get anonymousMode() {
    return this.getBooleanAttribute('anonymous_mode');
  }
  public set anonymousMode(value: boolean | cdktf.IResolvable) {
    this._anonymousMode = value;
  }
  public resetAnonymousMode() {
    this._anonymousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousModeInput() {
    return this._anonymousMode;
  }

  // auto_create_users - computed: true, optional: true, required: false
  private _autoCreateUsers?: boolean | cdktf.IResolvable; 
  public get autoCreateUsers() {
    return this.getBooleanAttribute('auto_create_users');
  }
  public set autoCreateUsers(value: boolean | cdktf.IResolvable) {
    this._autoCreateUsers = value;
  }
  public resetAutoCreateUsers() {
    this._autoCreateUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateUsersInput() {
    return this._autoCreateUsers;
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

  // reader_dn - computed: true, optional: true, required: false
  private _readerDn?: string; 
  public get readerDn() {
    return this.getStringAttribute('reader_dn');
  }
  public set readerDn(value: string) {
    this._readerDn = value;
  }
  public resetReaderDn() {
    this._readerDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readerDnInput() {
    return this._readerDn;
  }

  // start_tls - computed: true, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // group_search_settings - computed: false, optional: true, required: false
  private _groupSearchSettings = new SettingsLdapSettingsGroupSearchSettingsList(this, "group_search_settings", false);
  public get groupSearchSettings() {
    return this._groupSearchSettings;
  }
  public putGroupSearchSettings(value: SettingsLdapSettingsGroupSearchSettings[] | cdktf.IResolvable) {
    this._groupSearchSettings.internalValue = value;
  }
  public resetGroupSearchSettings() {
    this._groupSearchSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchSettingsInput() {
    return this._groupSearchSettings.internalValue;
  }

  // search_settings - computed: false, optional: true, required: false
  private _searchSettings = new SettingsLdapSettingsSearchSettingsList(this, "search_settings", false);
  public get searchSettings() {
    return this._searchSettings;
  }
  public putSearchSettings(value: SettingsLdapSettingsSearchSettings[] | cdktf.IResolvable) {
    this._searchSettings.internalValue = value;
  }
  public resetSearchSettings() {
    this._searchSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSettingsInput() {
    return this._searchSettings.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new SettingsLdapSettingsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: SettingsLdapSettingsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface SettingsOauthSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#access_token_uri Settings#access_token_uri}
  */
  readonly accessTokenUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#auth_style Settings#auth_style}
  */
  readonly authStyle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#authorization_uri Settings#authorization_uri}
  */
  readonly authorizationUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#client_id Settings#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#client_secret Settings#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#default_team_id Settings#default_team_id}
  */
  readonly defaultTeamId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#kube_secret_key Settings#kube_secret_key}
  */
  readonly kubeSecretKey?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#logout_uri Settings#logout_uri}
  */
  readonly logoutUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#oauth_auto_create_users Settings#oauth_auto_create_users}
  */
  readonly oauthAutoCreateUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#redirect_uri Settings#redirect_uri}
  */
  readonly redirectUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#resource_uri Settings#resource_uri}
  */
  readonly resourceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#scopes Settings#scopes}
  */
  readonly scopes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#sso Settings#sso}
  */
  readonly sso?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#user_identifier Settings#user_identifier}
  */
  readonly userIdentifier?: string;
}

export function settingsOauthSettingsToTerraform(struct?: SettingsOauthSettingsOutputReference | SettingsOauthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_uri: cdktf.stringToTerraform(struct!.accessTokenUri),
    auth_style: cdktf.numberToTerraform(struct!.authStyle),
    authorization_uri: cdktf.stringToTerraform(struct!.authorizationUri),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    default_team_id: cdktf.numberToTerraform(struct!.defaultTeamId),
    kube_secret_key: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.kubeSecretKey),
    logout_uri: cdktf.stringToTerraform(struct!.logoutUri),
    oauth_auto_create_users: cdktf.booleanToTerraform(struct!.oauthAutoCreateUsers),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
    resource_uri: cdktf.stringToTerraform(struct!.resourceUri),
    scopes: cdktf.stringToTerraform(struct!.scopes),
    sso: cdktf.booleanToTerraform(struct!.sso),
    user_identifier: cdktf.stringToTerraform(struct!.userIdentifier),
  }
}


export function settingsOauthSettingsToHclTerraform(struct?: SettingsOauthSettingsOutputReference | SettingsOauthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_uri: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_style: {
      value: cdktf.numberToHclTerraform(struct!.authStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorization_uri: {
      value: cdktf.stringToHclTerraform(struct!.authorizationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_team_id: {
      value: cdktf.numberToHclTerraform(struct!.defaultTeamId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_secret_key: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.kubeSecretKey),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    logout_uri: {
      value: cdktf.stringToHclTerraform(struct!.logoutUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_auto_create_users: {
      value: cdktf.booleanToHclTerraform(struct!.oauthAutoCreateUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_uri: {
      value: cdktf.stringToHclTerraform(struct!.resourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.stringToHclTerraform(struct!.scopes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso: {
      value: cdktf.booleanToHclTerraform(struct!.sso),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_identifier: {
      value: cdktf.stringToHclTerraform(struct!.userIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingsOauthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SettingsOauthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenUri = this._accessTokenUri;
    }
    if (this._authStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStyle = this._authStyle;
    }
    if (this._authorizationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationUri = this._authorizationUri;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._defaultTeamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTeamId = this._defaultTeamId;
    }
    if (this._kubeSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeSecretKey = this._kubeSecretKey;
    }
    if (this._logoutUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUri = this._logoutUri;
    }
    if (this._oauthAutoCreateUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthAutoCreateUsers = this._oauthAutoCreateUsers;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    if (this._resourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUri = this._resourceUri;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._sso !== undefined) {
      hasAnyValues = true;
      internalValueResult.sso = this._sso;
    }
    if (this._userIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentifier = this._userIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingsOauthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokenUri = undefined;
      this._authStyle = undefined;
      this._authorizationUri = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._defaultTeamId = undefined;
      this._kubeSecretKey = undefined;
      this._logoutUri = undefined;
      this._oauthAutoCreateUsers = undefined;
      this._redirectUri = undefined;
      this._resourceUri = undefined;
      this._scopes = undefined;
      this._sso = undefined;
      this._userIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokenUri = value.accessTokenUri;
      this._authStyle = value.authStyle;
      this._authorizationUri = value.authorizationUri;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._defaultTeamId = value.defaultTeamId;
      this._kubeSecretKey = value.kubeSecretKey;
      this._logoutUri = value.logoutUri;
      this._oauthAutoCreateUsers = value.oauthAutoCreateUsers;
      this._redirectUri = value.redirectUri;
      this._resourceUri = value.resourceUri;
      this._scopes = value.scopes;
      this._sso = value.sso;
      this._userIdentifier = value.userIdentifier;
    }
  }

  // access_token_uri - computed: true, optional: true, required: false
  private _accessTokenUri?: string; 
  public get accessTokenUri() {
    return this.getStringAttribute('access_token_uri');
  }
  public set accessTokenUri(value: string) {
    this._accessTokenUri = value;
  }
  public resetAccessTokenUri() {
    this._accessTokenUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenUriInput() {
    return this._accessTokenUri;
  }

  // auth_style - computed: true, optional: true, required: false
  private _authStyle?: number; 
  public get authStyle() {
    return this.getNumberAttribute('auth_style');
  }
  public set authStyle(value: number) {
    this._authStyle = value;
  }
  public resetAuthStyle() {
    this._authStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStyleInput() {
    return this._authStyle;
  }

  // authorization_uri - computed: true, optional: true, required: false
  private _authorizationUri?: string; 
  public get authorizationUri() {
    return this.getStringAttribute('authorization_uri');
  }
  public set authorizationUri(value: string) {
    this._authorizationUri = value;
  }
  public resetAuthorizationUri() {
    this._authorizationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationUriInput() {
    return this._authorizationUri;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // default_team_id - computed: true, optional: true, required: false
  private _defaultTeamId?: number; 
  public get defaultTeamId() {
    return this.getNumberAttribute('default_team_id');
  }
  public set defaultTeamId(value: number) {
    this._defaultTeamId = value;
  }
  public resetDefaultTeamId() {
    this._defaultTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTeamIdInput() {
    return this._defaultTeamId;
  }

  // kube_secret_key - computed: true, optional: true, required: false
  private _kubeSecretKey?: number[]; 
  public get kubeSecretKey() {
    return this.getNumberListAttribute('kube_secret_key');
  }
  public set kubeSecretKey(value: number[]) {
    this._kubeSecretKey = value;
  }
  public resetKubeSecretKey() {
    this._kubeSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeSecretKeyInput() {
    return this._kubeSecretKey;
  }

  // logout_uri - computed: true, optional: true, required: false
  private _logoutUri?: string; 
  public get logoutUri() {
    return this.getStringAttribute('logout_uri');
  }
  public set logoutUri(value: string) {
    this._logoutUri = value;
  }
  public resetLogoutUri() {
    this._logoutUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUriInput() {
    return this._logoutUri;
  }

  // oauth_auto_create_users - computed: true, optional: true, required: false
  private _oauthAutoCreateUsers?: boolean | cdktf.IResolvable; 
  public get oauthAutoCreateUsers() {
    return this.getBooleanAttribute('oauth_auto_create_users');
  }
  public set oauthAutoCreateUsers(value: boolean | cdktf.IResolvable) {
    this._oauthAutoCreateUsers = value;
  }
  public resetOauthAutoCreateUsers() {
    this._oauthAutoCreateUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAutoCreateUsersInput() {
    return this._oauthAutoCreateUsers;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // resource_uri - computed: true, optional: true, required: false
  private _resourceUri?: string; 
  public get resourceUri() {
    return this.getStringAttribute('resource_uri');
  }
  public set resourceUri(value: string) {
    this._resourceUri = value;
  }
  public resetResourceUri() {
    this._resourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUriInput() {
    return this._resourceUri;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string; 
  public get scopes() {
    return this.getStringAttribute('scopes');
  }
  public set scopes(value: string) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // sso - computed: true, optional: true, required: false
  private _sso?: boolean | cdktf.IResolvable; 
  public get sso() {
    return this.getBooleanAttribute('sso');
  }
  public set sso(value: boolean | cdktf.IResolvable) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }

  // user_identifier - computed: true, optional: true, required: false
  private _userIdentifier?: string; 
  public get userIdentifier() {
    return this.getStringAttribute('user_identifier');
  }
  public set userIdentifier(value: string) {
    this._userIdentifier = value;
  }
  public resetUserIdentifier() {
    this._userIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierInput() {
    return this._userIdentifier;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings portainer_settings}
*/
export class Settings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Settings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Settings to import
  * @param importFromId The id of the existing Settings that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Settings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/settings portainer_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'portainer_settings',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMethod = config.authenticationMethod;
    this._disableKubeRolesSync = config.disableKubeRolesSync;
    this._disableKubeShell = config.disableKubeShell;
    this._disableKubeconfigDownload = config.disableKubeconfigDownload;
    this._displayDonationHeader = config.displayDonationHeader;
    this._displayExternalContributors = config.displayExternalContributors;
    this._edgeAgentCheckinInterval = config.edgeAgentCheckinInterval;
    this._edgePortainerUrl = config.edgePortainerUrl;
    this._enableEdgeComputeFeatures = config.enableEdgeComputeFeatures;
    this._enableTelemetry = config.enableTelemetry;
    this._enforceEdgeId = config.enforceEdgeId;
    this._helmRepositoryUrl = config.helmRepositoryUrl;
    this._id = config.id;
    this._isDockerDesktopExtension = config.isDockerDesktopExtension;
    this._kubeconfigExpiry = config.kubeconfigExpiry;
    this._kubectlShellImage = config.kubectlShellImage;
    this._logoUrl = config.logoUrl;
    this._snapshotInterval = config.snapshotInterval;
    this._templatesUrl = config.templatesUrl;
    this._trustOnFirstConnect = config.trustOnFirstConnect;
    this._userSessionTimeout = config.userSessionTimeout;
    this._blackListedLabels.internalValue = config.blackListedLabels;
    this._globalDeploymentOptions.internalValue = config.globalDeploymentOptions;
    this._internalAuthSettings.internalValue = config.internalAuthSettings;
    this._ldapSettings.internalValue = config.ldapSettings;
    this._oauthSettings.internalValue = config.oauthSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: number; 
  public get authenticationMethod() {
    return this.getNumberAttribute('authentication_method');
  }
  public set authenticationMethod(value: number) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // disable_kube_roles_sync - computed: true, optional: true, required: false
  private _disableKubeRolesSync?: boolean | cdktf.IResolvable; 
  public get disableKubeRolesSync() {
    return this.getBooleanAttribute('disable_kube_roles_sync');
  }
  public set disableKubeRolesSync(value: boolean | cdktf.IResolvable) {
    this._disableKubeRolesSync = value;
  }
  public resetDisableKubeRolesSync() {
    this._disableKubeRolesSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKubeRolesSyncInput() {
    return this._disableKubeRolesSync;
  }

  // disable_kube_shell - computed: true, optional: true, required: false
  private _disableKubeShell?: boolean | cdktf.IResolvable; 
  public get disableKubeShell() {
    return this.getBooleanAttribute('disable_kube_shell');
  }
  public set disableKubeShell(value: boolean | cdktf.IResolvable) {
    this._disableKubeShell = value;
  }
  public resetDisableKubeShell() {
    this._disableKubeShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKubeShellInput() {
    return this._disableKubeShell;
  }

  // disable_kubeconfig_download - computed: true, optional: true, required: false
  private _disableKubeconfigDownload?: boolean | cdktf.IResolvable; 
  public get disableKubeconfigDownload() {
    return this.getBooleanAttribute('disable_kubeconfig_download');
  }
  public set disableKubeconfigDownload(value: boolean | cdktf.IResolvable) {
    this._disableKubeconfigDownload = value;
  }
  public resetDisableKubeconfigDownload() {
    this._disableKubeconfigDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKubeconfigDownloadInput() {
    return this._disableKubeconfigDownload;
  }

  // display_donation_header - computed: true, optional: true, required: false
  private _displayDonationHeader?: boolean | cdktf.IResolvable; 
  public get displayDonationHeader() {
    return this.getBooleanAttribute('display_donation_header');
  }
  public set displayDonationHeader(value: boolean | cdktf.IResolvable) {
    this._displayDonationHeader = value;
  }
  public resetDisplayDonationHeader() {
    this._displayDonationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDonationHeaderInput() {
    return this._displayDonationHeader;
  }

  // display_external_contributors - computed: true, optional: true, required: false
  private _displayExternalContributors?: boolean | cdktf.IResolvable; 
  public get displayExternalContributors() {
    return this.getBooleanAttribute('display_external_contributors');
  }
  public set displayExternalContributors(value: boolean | cdktf.IResolvable) {
    this._displayExternalContributors = value;
  }
  public resetDisplayExternalContributors() {
    this._displayExternalContributors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayExternalContributorsInput() {
    return this._displayExternalContributors;
  }

  // edge_agent_checkin_interval - computed: true, optional: true, required: false
  private _edgeAgentCheckinInterval?: number; 
  public get edgeAgentCheckinInterval() {
    return this.getNumberAttribute('edge_agent_checkin_interval');
  }
  public set edgeAgentCheckinInterval(value: number) {
    this._edgeAgentCheckinInterval = value;
  }
  public resetEdgeAgentCheckinInterval() {
    this._edgeAgentCheckinInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeAgentCheckinIntervalInput() {
    return this._edgeAgentCheckinInterval;
  }

  // edge_portainer_url - computed: true, optional: true, required: false
  private _edgePortainerUrl?: string; 
  public get edgePortainerUrl() {
    return this.getStringAttribute('edge_portainer_url');
  }
  public set edgePortainerUrl(value: string) {
    this._edgePortainerUrl = value;
  }
  public resetEdgePortainerUrl() {
    this._edgePortainerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgePortainerUrlInput() {
    return this._edgePortainerUrl;
  }

  // enable_edge_compute_features - computed: true, optional: true, required: false
  private _enableEdgeComputeFeatures?: boolean | cdktf.IResolvable; 
  public get enableEdgeComputeFeatures() {
    return this.getBooleanAttribute('enable_edge_compute_features');
  }
  public set enableEdgeComputeFeatures(value: boolean | cdktf.IResolvable) {
    this._enableEdgeComputeFeatures = value;
  }
  public resetEnableEdgeComputeFeatures() {
    this._enableEdgeComputeFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdgeComputeFeaturesInput() {
    return this._enableEdgeComputeFeatures;
  }

  // enable_telemetry - computed: true, optional: true, required: false
  private _enableTelemetry?: boolean | cdktf.IResolvable; 
  public get enableTelemetry() {
    return this.getBooleanAttribute('enable_telemetry');
  }
  public set enableTelemetry(value: boolean | cdktf.IResolvable) {
    this._enableTelemetry = value;
  }
  public resetEnableTelemetry() {
    this._enableTelemetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTelemetryInput() {
    return this._enableTelemetry;
  }

  // enforce_edge_id - computed: true, optional: true, required: false
  private _enforceEdgeId?: boolean | cdktf.IResolvable; 
  public get enforceEdgeId() {
    return this.getBooleanAttribute('enforce_edge_id');
  }
  public set enforceEdgeId(value: boolean | cdktf.IResolvable) {
    this._enforceEdgeId = value;
  }
  public resetEnforceEdgeId() {
    this._enforceEdgeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceEdgeIdInput() {
    return this._enforceEdgeId;
  }

  // helm_repository_url - computed: true, optional: true, required: false
  private _helmRepositoryUrl?: string; 
  public get helmRepositoryUrl() {
    return this.getStringAttribute('helm_repository_url');
  }
  public set helmRepositoryUrl(value: string) {
    this._helmRepositoryUrl = value;
  }
  public resetHelmRepositoryUrl() {
    this._helmRepositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRepositoryUrlInput() {
    return this._helmRepositoryUrl;
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

  // is_docker_desktop_extension - computed: true, optional: true, required: false
  private _isDockerDesktopExtension?: boolean | cdktf.IResolvable; 
  public get isDockerDesktopExtension() {
    return this.getBooleanAttribute('is_docker_desktop_extension');
  }
  public set isDockerDesktopExtension(value: boolean | cdktf.IResolvable) {
    this._isDockerDesktopExtension = value;
  }
  public resetIsDockerDesktopExtension() {
    this._isDockerDesktopExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDockerDesktopExtensionInput() {
    return this._isDockerDesktopExtension;
  }

  // kubeconfig_expiry - computed: true, optional: true, required: false
  private _kubeconfigExpiry?: string; 
  public get kubeconfigExpiry() {
    return this.getStringAttribute('kubeconfig_expiry');
  }
  public set kubeconfigExpiry(value: string) {
    this._kubeconfigExpiry = value;
  }
  public resetKubeconfigExpiry() {
    this._kubeconfigExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigExpiryInput() {
    return this._kubeconfigExpiry;
  }

  // kubectl_shell_image - computed: true, optional: true, required: false
  private _kubectlShellImage?: string; 
  public get kubectlShellImage() {
    return this.getStringAttribute('kubectl_shell_image');
  }
  public set kubectlShellImage(value: string) {
    this._kubectlShellImage = value;
  }
  public resetKubectlShellImage() {
    this._kubectlShellImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubectlShellImageInput() {
    return this._kubectlShellImage;
  }

  // logo_url - computed: true, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }

  // snapshot_interval - computed: true, optional: true, required: false
  private _snapshotInterval?: string; 
  public get snapshotInterval() {
    return this.getStringAttribute('snapshot_interval');
  }
  public set snapshotInterval(value: string) {
    this._snapshotInterval = value;
  }
  public resetSnapshotInterval() {
    this._snapshotInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIntervalInput() {
    return this._snapshotInterval;
  }

  // templates_url - computed: true, optional: true, required: false
  private _templatesUrl?: string; 
  public get templatesUrl() {
    return this.getStringAttribute('templates_url');
  }
  public set templatesUrl(value: string) {
    this._templatesUrl = value;
  }
  public resetTemplatesUrl() {
    this._templatesUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesUrlInput() {
    return this._templatesUrl;
  }

  // trust_on_first_connect - computed: true, optional: true, required: false
  private _trustOnFirstConnect?: boolean | cdktf.IResolvable; 
  public get trustOnFirstConnect() {
    return this.getBooleanAttribute('trust_on_first_connect');
  }
  public set trustOnFirstConnect(value: boolean | cdktf.IResolvable) {
    this._trustOnFirstConnect = value;
  }
  public resetTrustOnFirstConnect() {
    this._trustOnFirstConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustOnFirstConnectInput() {
    return this._trustOnFirstConnect;
  }

  // user_session_timeout - computed: true, optional: true, required: false
  private _userSessionTimeout?: string; 
  public get userSessionTimeout() {
    return this.getStringAttribute('user_session_timeout');
  }
  public set userSessionTimeout(value: string) {
    this._userSessionTimeout = value;
  }
  public resetUserSessionTimeout() {
    this._userSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSessionTimeoutInput() {
    return this._userSessionTimeout;
  }

  // black_listed_labels - computed: false, optional: true, required: false
  private _blackListedLabels = new SettingsBlackListedLabelsList(this, "black_listed_labels", false);
  public get blackListedLabels() {
    return this._blackListedLabels;
  }
  public putBlackListedLabels(value: SettingsBlackListedLabels[] | cdktf.IResolvable) {
    this._blackListedLabels.internalValue = value;
  }
  public resetBlackListedLabels() {
    this._blackListedLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListedLabelsInput() {
    return this._blackListedLabels.internalValue;
  }

  // global_deployment_options - computed: false, optional: true, required: false
  private _globalDeploymentOptions = new SettingsGlobalDeploymentOptionsOutputReference(this, "global_deployment_options");
  public get globalDeploymentOptions() {
    return this._globalDeploymentOptions;
  }
  public putGlobalDeploymentOptions(value: SettingsGlobalDeploymentOptions) {
    this._globalDeploymentOptions.internalValue = value;
  }
  public resetGlobalDeploymentOptions() {
    this._globalDeploymentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalDeploymentOptionsInput() {
    return this._globalDeploymentOptions.internalValue;
  }

  // internal_auth_settings - computed: false, optional: true, required: false
  private _internalAuthSettings = new SettingsInternalAuthSettingsOutputReference(this, "internal_auth_settings");
  public get internalAuthSettings() {
    return this._internalAuthSettings;
  }
  public putInternalAuthSettings(value: SettingsInternalAuthSettings) {
    this._internalAuthSettings.internalValue = value;
  }
  public resetInternalAuthSettings() {
    this._internalAuthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAuthSettingsInput() {
    return this._internalAuthSettings.internalValue;
  }

  // ldap_settings - computed: false, optional: true, required: false
  private _ldapSettings = new SettingsLdapSettingsOutputReference(this, "ldap_settings");
  public get ldapSettings() {
    return this._ldapSettings;
  }
  public putLdapSettings(value: SettingsLdapSettings) {
    this._ldapSettings.internalValue = value;
  }
  public resetLdapSettings() {
    this._ldapSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSettingsInput() {
    return this._ldapSettings.internalValue;
  }

  // oauth_settings - computed: false, optional: true, required: false
  private _oauthSettings = new SettingsOauthSettingsOutputReference(this, "oauth_settings");
  public get oauthSettings() {
    return this._oauthSettings;
  }
  public putOauthSettings(value: SettingsOauthSettings) {
    this._oauthSettings.internalValue = value;
  }
  public resetOauthSettings() {
    this._oauthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthSettingsInput() {
    return this._oauthSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_method: cdktf.numberToTerraform(this._authenticationMethod),
      disable_kube_roles_sync: cdktf.booleanToTerraform(this._disableKubeRolesSync),
      disable_kube_shell: cdktf.booleanToTerraform(this._disableKubeShell),
      disable_kubeconfig_download: cdktf.booleanToTerraform(this._disableKubeconfigDownload),
      display_donation_header: cdktf.booleanToTerraform(this._displayDonationHeader),
      display_external_contributors: cdktf.booleanToTerraform(this._displayExternalContributors),
      edge_agent_checkin_interval: cdktf.numberToTerraform(this._edgeAgentCheckinInterval),
      edge_portainer_url: cdktf.stringToTerraform(this._edgePortainerUrl),
      enable_edge_compute_features: cdktf.booleanToTerraform(this._enableEdgeComputeFeatures),
      enable_telemetry: cdktf.booleanToTerraform(this._enableTelemetry),
      enforce_edge_id: cdktf.booleanToTerraform(this._enforceEdgeId),
      helm_repository_url: cdktf.stringToTerraform(this._helmRepositoryUrl),
      id: cdktf.stringToTerraform(this._id),
      is_docker_desktop_extension: cdktf.booleanToTerraform(this._isDockerDesktopExtension),
      kubeconfig_expiry: cdktf.stringToTerraform(this._kubeconfigExpiry),
      kubectl_shell_image: cdktf.stringToTerraform(this._kubectlShellImage),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      snapshot_interval: cdktf.stringToTerraform(this._snapshotInterval),
      templates_url: cdktf.stringToTerraform(this._templatesUrl),
      trust_on_first_connect: cdktf.booleanToTerraform(this._trustOnFirstConnect),
      user_session_timeout: cdktf.stringToTerraform(this._userSessionTimeout),
      black_listed_labels: cdktf.listMapper(settingsBlackListedLabelsToTerraform, true)(this._blackListedLabels.internalValue),
      global_deployment_options: settingsGlobalDeploymentOptionsToTerraform(this._globalDeploymentOptions.internalValue),
      internal_auth_settings: settingsInternalAuthSettingsToTerraform(this._internalAuthSettings.internalValue),
      ldap_settings: settingsLdapSettingsToTerraform(this._ldapSettings.internalValue),
      oauth_settings: settingsOauthSettingsToTerraform(this._oauthSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_method: {
        value: cdktf.numberToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_kube_roles_sync: {
        value: cdktf.booleanToHclTerraform(this._disableKubeRolesSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_kube_shell: {
        value: cdktf.booleanToHclTerraform(this._disableKubeShell),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_kubeconfig_download: {
        value: cdktf.booleanToHclTerraform(this._disableKubeconfigDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_donation_header: {
        value: cdktf.booleanToHclTerraform(this._displayDonationHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_external_contributors: {
        value: cdktf.booleanToHclTerraform(this._displayExternalContributors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge_agent_checkin_interval: {
        value: cdktf.numberToHclTerraform(this._edgeAgentCheckinInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edge_portainer_url: {
        value: cdktf.stringToHclTerraform(this._edgePortainerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_edge_compute_features: {
        value: cdktf.booleanToHclTerraform(this._enableEdgeComputeFeatures),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_telemetry: {
        value: cdktf.booleanToHclTerraform(this._enableTelemetry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_edge_id: {
        value: cdktf.booleanToHclTerraform(this._enforceEdgeId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      helm_repository_url: {
        value: cdktf.stringToHclTerraform(this._helmRepositoryUrl),
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
      is_docker_desktop_extension: {
        value: cdktf.booleanToHclTerraform(this._isDockerDesktopExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubeconfig_expiry: {
        value: cdktf.stringToHclTerraform(this._kubeconfigExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubectl_shell_image: {
        value: cdktf.stringToHclTerraform(this._kubectlShellImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_url: {
        value: cdktf.stringToHclTerraform(this._logoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_interval: {
        value: cdktf.stringToHclTerraform(this._snapshotInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      templates_url: {
        value: cdktf.stringToHclTerraform(this._templatesUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_on_first_connect: {
        value: cdktf.booleanToHclTerraform(this._trustOnFirstConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_session_timeout: {
        value: cdktf.stringToHclTerraform(this._userSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      black_listed_labels: {
        value: cdktf.listMapperHcl(settingsBlackListedLabelsToHclTerraform, true)(this._blackListedLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SettingsBlackListedLabelsList",
      },
      global_deployment_options: {
        value: settingsGlobalDeploymentOptionsToHclTerraform(this._globalDeploymentOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SettingsGlobalDeploymentOptionsList",
      },
      internal_auth_settings: {
        value: settingsInternalAuthSettingsToHclTerraform(this._internalAuthSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SettingsInternalAuthSettingsList",
      },
      ldap_settings: {
        value: settingsLdapSettingsToHclTerraform(this._ldapSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SettingsLdapSettingsList",
      },
      oauth_settings: {
        value: settingsOauthSettingsToHclTerraform(this._oauthSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SettingsOauthSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
