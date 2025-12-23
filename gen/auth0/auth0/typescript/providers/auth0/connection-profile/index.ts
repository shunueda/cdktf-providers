// https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template for generating connection names from the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#connection_name_prefix_template ConnectionProfile#connection_name_prefix_template}
  */
  readonly connectionNamePrefixTemplate?: string;
  /**
  * List of enabled features for the connection profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#enabled_features ConnectionProfile#enabled_features}
  */
  readonly enabledFeatures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#id ConnectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the connection profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#name ConnectionProfile#name}
  */
  readonly name: string;
  /**
  * connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#connection_config ConnectionProfile#connection_config}
  */
  readonly connectionConfig?: ConnectionProfileConnectionConfig;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#organization ConnectionProfile#organization}
  */
  readonly organization?: ConnectionProfileOrganization;
  /**
  * strategy_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#strategy_overrides ConnectionProfile#strategy_overrides}
  */
  readonly strategyOverrides?: ConnectionProfileStrategyOverrides;
}
export interface ConnectionProfileConnectionConfig {
}

export function connectionProfileConnectionConfigToTerraform(struct?: ConnectionProfileConnectionConfigOutputReference | ConnectionProfileConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionProfileConnectionConfigToHclTerraform(struct?: ConnectionProfileConnectionConfigOutputReference | ConnectionProfileConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionProfileConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectionProfileOrganization {
  /**
  * Whether to assign membership on login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#assign_membership_on_login ConnectionProfile#assign_membership_on_login}
  */
  readonly assignMembershipOnLogin?: string;
  /**
  * Whether to show organization as a button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#show_as_button ConnectionProfile#show_as_button}
  */
  readonly showAsButton?: string;
}

export function connectionProfileOrganizationToTerraform(struct?: ConnectionProfileOrganizationOutputReference | ConnectionProfileOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_membership_on_login: cdktf.stringToTerraform(struct!.assignMembershipOnLogin),
    show_as_button: cdktf.stringToTerraform(struct!.showAsButton),
  }
}


export function connectionProfileOrganizationToHclTerraform(struct?: ConnectionProfileOrganizationOutputReference | ConnectionProfileOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_membership_on_login: {
      value: cdktf.stringToHclTerraform(struct!.assignMembershipOnLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_as_button: {
      value: cdktf.stringToHclTerraform(struct!.showAsButton),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionProfileOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignMembershipOnLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMembershipOnLogin = this._assignMembershipOnLogin;
    }
    if (this._showAsButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAsButton = this._showAsButton;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignMembershipOnLogin = undefined;
      this._showAsButton = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignMembershipOnLogin = value.assignMembershipOnLogin;
      this._showAsButton = value.showAsButton;
    }
  }

  // assign_membership_on_login - computed: true, optional: true, required: false
  private _assignMembershipOnLogin?: string; 
  public get assignMembershipOnLogin() {
    return this.getStringAttribute('assign_membership_on_login');
  }
  public set assignMembershipOnLogin(value: string) {
    this._assignMembershipOnLogin = value;
  }
  public resetAssignMembershipOnLogin() {
    this._assignMembershipOnLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMembershipOnLoginInput() {
    return this._assignMembershipOnLogin;
  }

  // show_as_button - computed: true, optional: true, required: false
  private _showAsButton?: string; 
  public get showAsButton() {
    return this.getStringAttribute('show_as_button');
  }
  public set showAsButton(value: string) {
    this._showAsButton = value;
  }
  public resetShowAsButton() {
    this._showAsButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAsButtonInput() {
    return this._showAsButton;
  }
}
export interface ConnectionProfileStrategyOverridesAdConnectionConfig {
}

export function connectionProfileStrategyOverridesAdConnectionConfigToTerraform(struct?: ConnectionProfileStrategyOverridesAdConnectionConfigOutputReference | ConnectionProfileStrategyOverridesAdConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionProfileStrategyOverridesAdConnectionConfigToHclTerraform(struct?: ConnectionProfileStrategyOverridesAdConnectionConfigOutputReference | ConnectionProfileStrategyOverridesAdConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionProfileStrategyOverridesAdConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesAdConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesAdConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectionProfileStrategyOverridesAd {
  /**
  * Enabled features for the strategy override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#enabled_features ConnectionProfile#enabled_features}
  */
  readonly enabledFeatures?: string[];
  /**
  * connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#connection_config ConnectionProfile#connection_config}
  */
  readonly connectionConfig?: ConnectionProfileStrategyOverridesAdConnectionConfig;
}

export function connectionProfileStrategyOverridesAdToTerraform(struct?: ConnectionProfileStrategyOverridesAdOutputReference | ConnectionProfileStrategyOverridesAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledFeatures),
    connection_config: connectionProfileStrategyOverridesAdConnectionConfigToTerraform(struct!.connectionConfig),
  }
}


export function connectionProfileStrategyOverridesAdToHclTerraform(struct?: ConnectionProfileStrategyOverridesAdOutputReference | ConnectionProfileStrategyOverridesAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_config: {
      value: connectionProfileStrategyOverridesAdConnectionConfigToHclTerraform(struct!.connectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesAdConnectionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionProfileStrategyOverridesAdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesAd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledFeatures = this._enabledFeatures;
    }
    if (this._connectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionConfig = this._connectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesAd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledFeatures = undefined;
      this._connectionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledFeatures = value.enabledFeatures;
      this._connectionConfig.internalValue = value.connectionConfig;
    }
  }

  // enabled_features - computed: true, optional: true, required: false
  private _enabledFeatures?: string[]; 
  public get enabledFeatures() {
    return this.getListAttribute('enabled_features');
  }
  public set enabledFeatures(value: string[]) {
    this._enabledFeatures = value;
  }
  public resetEnabledFeatures() {
    this._enabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFeaturesInput() {
    return this._enabledFeatures;
  }

  // connection_config - computed: false, optional: true, required: false
  private _connectionConfig = new ConnectionProfileStrategyOverridesAdConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: ConnectionProfileStrategyOverridesAdConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }
}
export interface ConnectionProfileStrategyOverridesAdfsConnectionConfig {
}

export function connectionProfileStrategyOverridesAdfsConnectionConfigToTerraform(struct?: ConnectionProfileStrategyOverridesAdfsConnectionConfigOutputReference | ConnectionProfileStrategyOverridesAdfsConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionProfileStrategyOverridesAdfsConnectionConfigToHclTerraform(struct?: ConnectionProfileStrategyOverridesAdfsConnectionConfigOutputReference | ConnectionProfileStrategyOverridesAdfsConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionProfileStrategyOverridesAdfsConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesAdfsConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesAdfsConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectionProfileStrategyOverridesAdfs {
  /**
  * Enabled features for the strategy override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#enabled_features ConnectionProfile#enabled_features}
  */
  readonly enabledFeatures?: string[];
  /**
  * connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#connection_config ConnectionProfile#connection_config}
  */
  readonly connectionConfig?: ConnectionProfileStrategyOverridesAdfsConnectionConfig;
}

export function connectionProfileStrategyOverridesAdfsToTerraform(struct?: ConnectionProfileStrategyOverridesAdfsOutputReference | ConnectionProfileStrategyOverridesAdfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledFeatures),
    connection_config: connectionProfileStrategyOverridesAdfsConnectionConfigToTerraform(struct!.connectionConfig),
  }
}


export function connectionProfileStrategyOverridesAdfsToHclTerraform(struct?: ConnectionProfileStrategyOverridesAdfsOutputReference | ConnectionProfileStrategyOverridesAdfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_config: {
      value: connectionProfileStrategyOverridesAdfsConnectionConfigToHclTerraform(struct!.connectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesAdfsConnectionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionProfileStrategyOverridesAdfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesAdfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledFeatures = this._enabledFeatures;
    }
    if (this._connectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionConfig = this._connectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesAdfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledFeatures = undefined;
      this._connectionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledFeatures = value.enabledFeatures;
      this._connectionConfig.internalValue = value.connectionConfig;
    }
  }

  // enabled_features - computed: true, optional: true, required: false
  private _enabledFeatures?: string[]; 
  public get enabledFeatures() {
    return this.getListAttribute('enabled_features');
  }
  public set enabledFeatures(value: string[]) {
    this._enabledFeatures = value;
  }
  public resetEnabledFeatures() {
    this._enabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFeaturesInput() {
    return this._enabledFeatures;
  }

  // connection_config - computed: false, optional: true, required: false
  private _connectionConfig = new ConnectionProfileStrategyOverridesAdfsConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: ConnectionProfileStrategyOverridesAdfsConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }
}
export interface ConnectionProfileStrategyOverridesGoogleAppsConnectionConfig {
}

export function connectionProfileStrategyOverridesGoogleAppsConnectionConfigToTerraform(struct?: ConnectionProfileStrategyOverridesGoogleAppsConnectionConfigOutputReference | ConnectionProfileStrategyOverridesGoogleAppsConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionProfileStrategyOverridesGoogleAppsConnectionConfigToHclTerraform(struct?: ConnectionProfileStrategyOverridesGoogleAppsConnectionConfigOutputReference | ConnectionProfileStrategyOverridesGoogleAppsConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionProfileStrategyOverridesGoogleAppsConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesGoogleAppsConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesGoogleAppsConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectionProfileStrategyOverridesGoogleApps {
  /**
  * Enabled features for the strategy override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#enabled_features ConnectionProfile#enabled_features}
  */
  readonly enabledFeatures?: string[];
  /**
  * connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#connection_config ConnectionProfile#connection_config}
  */
  readonly connectionConfig?: ConnectionProfileStrategyOverridesGoogleAppsConnectionConfig;
}

export function connectionProfileStrategyOverridesGoogleAppsToTerraform(struct?: ConnectionProfileStrategyOverridesGoogleAppsOutputReference | ConnectionProfileStrategyOverridesGoogleApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledFeatures),
    connection_config: connectionProfileStrategyOverridesGoogleAppsConnectionConfigToTerraform(struct!.connectionConfig),
  }
}


export function connectionProfileStrategyOverridesGoogleAppsToHclTerraform(struct?: ConnectionProfileStrategyOverridesGoogleAppsOutputReference | ConnectionProfileStrategyOverridesGoogleApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_config: {
      value: connectionProfileStrategyOverridesGoogleAppsConnectionConfigToHclTerraform(struct!.connectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesGoogleAppsConnectionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionProfileStrategyOverridesGoogleAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesGoogleApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledFeatures = this._enabledFeatures;
    }
    if (this._connectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionConfig = this._connectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesGoogleApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledFeatures = undefined;
      this._connectionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledFeatures = value.enabledFeatures;
      this._connectionConfig.internalValue = value.connectionConfig;
    }
  }

  // enabled_features - computed: true, optional: true, required: false
  private _enabledFeatures?: string[]; 
  public get enabledFeatures() {
    return this.getListAttribute('enabled_features');
  }
  public set enabledFeatures(value: string[]) {
    this._enabledFeatures = value;
  }
  public resetEnabledFeatures() {
    this._enabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFeaturesInput() {
    return this._enabledFeatures;
  }

  // connection_config - computed: false, optional: true, required: false
  private _connectionConfig = new ConnectionProfileStrategyOverridesGoogleAppsConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: ConnectionProfileStrategyOverridesGoogleAppsConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }
}
export interface ConnectionProfileStrategyOverridesOidcConnectionConfig {
}

export function connectionProfileStrategyOverridesOidcConnectionConfigToTerraform(struct?: ConnectionProfileStrategyOverridesOidcConnectionConfigOutputReference | ConnectionProfileStrategyOverridesOidcConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionProfileStrategyOverridesOidcConnectionConfigToHclTerraform(struct?: ConnectionProfileStrategyOverridesOidcConnectionConfigOutputReference | ConnectionProfileStrategyOverridesOidcConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionProfileStrategyOverridesOidcConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesOidcConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesOidcConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectionProfileStrategyOverridesOidc {
  /**
  * Enabled features for the strategy override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#enabled_features ConnectionProfile#enabled_features}
  */
  readonly enabledFeatures?: string[];
  /**
  * connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#connection_config ConnectionProfile#connection_config}
  */
  readonly connectionConfig?: ConnectionProfileStrategyOverridesOidcConnectionConfig;
}

export function connectionProfileStrategyOverridesOidcToTerraform(struct?: ConnectionProfileStrategyOverridesOidcOutputReference | ConnectionProfileStrategyOverridesOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledFeatures),
    connection_config: connectionProfileStrategyOverridesOidcConnectionConfigToTerraform(struct!.connectionConfig),
  }
}


export function connectionProfileStrategyOverridesOidcToHclTerraform(struct?: ConnectionProfileStrategyOverridesOidcOutputReference | ConnectionProfileStrategyOverridesOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_config: {
      value: connectionProfileStrategyOverridesOidcConnectionConfigToHclTerraform(struct!.connectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesOidcConnectionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionProfileStrategyOverridesOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledFeatures = this._enabledFeatures;
    }
    if (this._connectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionConfig = this._connectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledFeatures = undefined;
      this._connectionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledFeatures = value.enabledFeatures;
      this._connectionConfig.internalValue = value.connectionConfig;
    }
  }

  // enabled_features - computed: true, optional: true, required: false
  private _enabledFeatures?: string[]; 
  public get enabledFeatures() {
    return this.getListAttribute('enabled_features');
  }
  public set enabledFeatures(value: string[]) {
    this._enabledFeatures = value;
  }
  public resetEnabledFeatures() {
    this._enabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFeaturesInput() {
    return this._enabledFeatures;
  }

  // connection_config - computed: false, optional: true, required: false
  private _connectionConfig = new ConnectionProfileStrategyOverridesOidcConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: ConnectionProfileStrategyOverridesOidcConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }
}
export interface ConnectionProfileStrategyOverridesOktaConnectionConfig {
}

export function connectionProfileStrategyOverridesOktaConnectionConfigToTerraform(struct?: ConnectionProfileStrategyOverridesOktaConnectionConfigOutputReference | ConnectionProfileStrategyOverridesOktaConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionProfileStrategyOverridesOktaConnectionConfigToHclTerraform(struct?: ConnectionProfileStrategyOverridesOktaConnectionConfigOutputReference | ConnectionProfileStrategyOverridesOktaConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionProfileStrategyOverridesOktaConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesOktaConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesOktaConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectionProfileStrategyOverridesOkta {
  /**
  * Enabled features for the strategy override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#enabled_features ConnectionProfile#enabled_features}
  */
  readonly enabledFeatures?: string[];
  /**
  * connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#connection_config ConnectionProfile#connection_config}
  */
  readonly connectionConfig?: ConnectionProfileStrategyOverridesOktaConnectionConfig;
}

export function connectionProfileStrategyOverridesOktaToTerraform(struct?: ConnectionProfileStrategyOverridesOktaOutputReference | ConnectionProfileStrategyOverridesOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledFeatures),
    connection_config: connectionProfileStrategyOverridesOktaConnectionConfigToTerraform(struct!.connectionConfig),
  }
}


export function connectionProfileStrategyOverridesOktaToHclTerraform(struct?: ConnectionProfileStrategyOverridesOktaOutputReference | ConnectionProfileStrategyOverridesOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_config: {
      value: connectionProfileStrategyOverridesOktaConnectionConfigToHclTerraform(struct!.connectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesOktaConnectionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionProfileStrategyOverridesOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesOkta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledFeatures = this._enabledFeatures;
    }
    if (this._connectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionConfig = this._connectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesOkta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledFeatures = undefined;
      this._connectionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledFeatures = value.enabledFeatures;
      this._connectionConfig.internalValue = value.connectionConfig;
    }
  }

  // enabled_features - computed: true, optional: true, required: false
  private _enabledFeatures?: string[]; 
  public get enabledFeatures() {
    return this.getListAttribute('enabled_features');
  }
  public set enabledFeatures(value: string[]) {
    this._enabledFeatures = value;
  }
  public resetEnabledFeatures() {
    this._enabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFeaturesInput() {
    return this._enabledFeatures;
  }

  // connection_config - computed: false, optional: true, required: false
  private _connectionConfig = new ConnectionProfileStrategyOverridesOktaConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: ConnectionProfileStrategyOverridesOktaConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }
}
export interface ConnectionProfileStrategyOverridesPingfederateConnectionConfig {
}

export function connectionProfileStrategyOverridesPingfederateConnectionConfigToTerraform(struct?: ConnectionProfileStrategyOverridesPingfederateConnectionConfigOutputReference | ConnectionProfileStrategyOverridesPingfederateConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionProfileStrategyOverridesPingfederateConnectionConfigToHclTerraform(struct?: ConnectionProfileStrategyOverridesPingfederateConnectionConfigOutputReference | ConnectionProfileStrategyOverridesPingfederateConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionProfileStrategyOverridesPingfederateConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesPingfederateConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesPingfederateConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectionProfileStrategyOverridesPingfederate {
  /**
  * Enabled features for the strategy override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#enabled_features ConnectionProfile#enabled_features}
  */
  readonly enabledFeatures?: string[];
  /**
  * connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#connection_config ConnectionProfile#connection_config}
  */
  readonly connectionConfig?: ConnectionProfileStrategyOverridesPingfederateConnectionConfig;
}

export function connectionProfileStrategyOverridesPingfederateToTerraform(struct?: ConnectionProfileStrategyOverridesPingfederateOutputReference | ConnectionProfileStrategyOverridesPingfederate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledFeatures),
    connection_config: connectionProfileStrategyOverridesPingfederateConnectionConfigToTerraform(struct!.connectionConfig),
  }
}


export function connectionProfileStrategyOverridesPingfederateToHclTerraform(struct?: ConnectionProfileStrategyOverridesPingfederateOutputReference | ConnectionProfileStrategyOverridesPingfederate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_config: {
      value: connectionProfileStrategyOverridesPingfederateConnectionConfigToHclTerraform(struct!.connectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesPingfederateConnectionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionProfileStrategyOverridesPingfederateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesPingfederate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledFeatures = this._enabledFeatures;
    }
    if (this._connectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionConfig = this._connectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesPingfederate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledFeatures = undefined;
      this._connectionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledFeatures = value.enabledFeatures;
      this._connectionConfig.internalValue = value.connectionConfig;
    }
  }

  // enabled_features - computed: true, optional: true, required: false
  private _enabledFeatures?: string[]; 
  public get enabledFeatures() {
    return this.getListAttribute('enabled_features');
  }
  public set enabledFeatures(value: string[]) {
    this._enabledFeatures = value;
  }
  public resetEnabledFeatures() {
    this._enabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFeaturesInput() {
    return this._enabledFeatures;
  }

  // connection_config - computed: false, optional: true, required: false
  private _connectionConfig = new ConnectionProfileStrategyOverridesPingfederateConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: ConnectionProfileStrategyOverridesPingfederateConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }
}
export interface ConnectionProfileStrategyOverridesSamlpConnectionConfig {
}

export function connectionProfileStrategyOverridesSamlpConnectionConfigToTerraform(struct?: ConnectionProfileStrategyOverridesSamlpConnectionConfigOutputReference | ConnectionProfileStrategyOverridesSamlpConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionProfileStrategyOverridesSamlpConnectionConfigToHclTerraform(struct?: ConnectionProfileStrategyOverridesSamlpConnectionConfigOutputReference | ConnectionProfileStrategyOverridesSamlpConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionProfileStrategyOverridesSamlpConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesSamlpConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesSamlpConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectionProfileStrategyOverridesSamlp {
  /**
  * Enabled features for the strategy override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#enabled_features ConnectionProfile#enabled_features}
  */
  readonly enabledFeatures?: string[];
  /**
  * connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#connection_config ConnectionProfile#connection_config}
  */
  readonly connectionConfig?: ConnectionProfileStrategyOverridesSamlpConnectionConfig;
}

export function connectionProfileStrategyOverridesSamlpToTerraform(struct?: ConnectionProfileStrategyOverridesSamlpOutputReference | ConnectionProfileStrategyOverridesSamlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledFeatures),
    connection_config: connectionProfileStrategyOverridesSamlpConnectionConfigToTerraform(struct!.connectionConfig),
  }
}


export function connectionProfileStrategyOverridesSamlpToHclTerraform(struct?: ConnectionProfileStrategyOverridesSamlpOutputReference | ConnectionProfileStrategyOverridesSamlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_config: {
      value: connectionProfileStrategyOverridesSamlpConnectionConfigToHclTerraform(struct!.connectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesSamlpConnectionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionProfileStrategyOverridesSamlpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesSamlp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledFeatures = this._enabledFeatures;
    }
    if (this._connectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionConfig = this._connectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesSamlp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledFeatures = undefined;
      this._connectionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledFeatures = value.enabledFeatures;
      this._connectionConfig.internalValue = value.connectionConfig;
    }
  }

  // enabled_features - computed: true, optional: true, required: false
  private _enabledFeatures?: string[]; 
  public get enabledFeatures() {
    return this.getListAttribute('enabled_features');
  }
  public set enabledFeatures(value: string[]) {
    this._enabledFeatures = value;
  }
  public resetEnabledFeatures() {
    this._enabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFeaturesInput() {
    return this._enabledFeatures;
  }

  // connection_config - computed: false, optional: true, required: false
  private _connectionConfig = new ConnectionProfileStrategyOverridesSamlpConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: ConnectionProfileStrategyOverridesSamlpConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }
}
export interface ConnectionProfileStrategyOverridesWaadConnectionConfig {
}

export function connectionProfileStrategyOverridesWaadConnectionConfigToTerraform(struct?: ConnectionProfileStrategyOverridesWaadConnectionConfigOutputReference | ConnectionProfileStrategyOverridesWaadConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionProfileStrategyOverridesWaadConnectionConfigToHclTerraform(struct?: ConnectionProfileStrategyOverridesWaadConnectionConfigOutputReference | ConnectionProfileStrategyOverridesWaadConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionProfileStrategyOverridesWaadConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesWaadConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesWaadConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectionProfileStrategyOverridesWaad {
  /**
  * Enabled features for the strategy override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#enabled_features ConnectionProfile#enabled_features}
  */
  readonly enabledFeatures?: string[];
  /**
  * connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#connection_config ConnectionProfile#connection_config}
  */
  readonly connectionConfig?: ConnectionProfileStrategyOverridesWaadConnectionConfig;
}

export function connectionProfileStrategyOverridesWaadToTerraform(struct?: ConnectionProfileStrategyOverridesWaadOutputReference | ConnectionProfileStrategyOverridesWaad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledFeatures),
    connection_config: connectionProfileStrategyOverridesWaadConnectionConfigToTerraform(struct!.connectionConfig),
  }
}


export function connectionProfileStrategyOverridesWaadToHclTerraform(struct?: ConnectionProfileStrategyOverridesWaadOutputReference | ConnectionProfileStrategyOverridesWaad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_config: {
      value: connectionProfileStrategyOverridesWaadConnectionConfigToHclTerraform(struct!.connectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesWaadConnectionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionProfileStrategyOverridesWaadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverridesWaad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledFeatures = this._enabledFeatures;
    }
    if (this._connectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionConfig = this._connectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverridesWaad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledFeatures = undefined;
      this._connectionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledFeatures = value.enabledFeatures;
      this._connectionConfig.internalValue = value.connectionConfig;
    }
  }

  // enabled_features - computed: true, optional: true, required: false
  private _enabledFeatures?: string[]; 
  public get enabledFeatures() {
    return this.getListAttribute('enabled_features');
  }
  public set enabledFeatures(value: string[]) {
    this._enabledFeatures = value;
  }
  public resetEnabledFeatures() {
    this._enabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFeaturesInput() {
    return this._enabledFeatures;
  }

  // connection_config - computed: false, optional: true, required: false
  private _connectionConfig = new ConnectionProfileStrategyOverridesWaadConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: ConnectionProfileStrategyOverridesWaadConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }
}
export interface ConnectionProfileStrategyOverrides {
  /**
  * ad block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#ad ConnectionProfile#ad}
  */
  readonly ad?: ConnectionProfileStrategyOverridesAd;
  /**
  * adfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#adfs ConnectionProfile#adfs}
  */
  readonly adfs?: ConnectionProfileStrategyOverridesAdfs;
  /**
  * google_apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#google_apps ConnectionProfile#google_apps}
  */
  readonly googleApps?: ConnectionProfileStrategyOverridesGoogleApps;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#oidc ConnectionProfile#oidc}
  */
  readonly oidc?: ConnectionProfileStrategyOverridesOidc;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#okta ConnectionProfile#okta}
  */
  readonly okta?: ConnectionProfileStrategyOverridesOkta;
  /**
  * pingfederate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#pingfederate ConnectionProfile#pingfederate}
  */
  readonly pingfederate?: ConnectionProfileStrategyOverridesPingfederate;
  /**
  * samlp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#samlp ConnectionProfile#samlp}
  */
  readonly samlp?: ConnectionProfileStrategyOverridesSamlp;
  /**
  * waad block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#waad ConnectionProfile#waad}
  */
  readonly waad?: ConnectionProfileStrategyOverridesWaad;
}

export function connectionProfileStrategyOverridesToTerraform(struct?: ConnectionProfileStrategyOverridesOutputReference | ConnectionProfileStrategyOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad: connectionProfileStrategyOverridesAdToTerraform(struct!.ad),
    adfs: connectionProfileStrategyOverridesAdfsToTerraform(struct!.adfs),
    google_apps: connectionProfileStrategyOverridesGoogleAppsToTerraform(struct!.googleApps),
    oidc: connectionProfileStrategyOverridesOidcToTerraform(struct!.oidc),
    okta: connectionProfileStrategyOverridesOktaToTerraform(struct!.okta),
    pingfederate: connectionProfileStrategyOverridesPingfederateToTerraform(struct!.pingfederate),
    samlp: connectionProfileStrategyOverridesSamlpToTerraform(struct!.samlp),
    waad: connectionProfileStrategyOverridesWaadToTerraform(struct!.waad),
  }
}


export function connectionProfileStrategyOverridesToHclTerraform(struct?: ConnectionProfileStrategyOverridesOutputReference | ConnectionProfileStrategyOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad: {
      value: connectionProfileStrategyOverridesAdToHclTerraform(struct!.ad),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesAdList",
    },
    adfs: {
      value: connectionProfileStrategyOverridesAdfsToHclTerraform(struct!.adfs),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesAdfsList",
    },
    google_apps: {
      value: connectionProfileStrategyOverridesGoogleAppsToHclTerraform(struct!.googleApps),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesGoogleAppsList",
    },
    oidc: {
      value: connectionProfileStrategyOverridesOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesOidcList",
    },
    okta: {
      value: connectionProfileStrategyOverridesOktaToHclTerraform(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesOktaList",
    },
    pingfederate: {
      value: connectionProfileStrategyOverridesPingfederateToHclTerraform(struct!.pingfederate),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesPingfederateList",
    },
    samlp: {
      value: connectionProfileStrategyOverridesSamlpToHclTerraform(struct!.samlp),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesSamlpList",
    },
    waad: {
      value: connectionProfileStrategyOverridesWaadToHclTerraform(struct!.waad),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionProfileStrategyOverridesWaadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionProfileStrategyOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionProfileStrategyOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ad?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ad = this._ad?.internalValue;
    }
    if (this._adfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adfs = this._adfs?.internalValue;
    }
    if (this._googleApps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleApps = this._googleApps?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._okta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.okta = this._okta?.internalValue;
    }
    if (this._pingfederate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingfederate = this._pingfederate?.internalValue;
    }
    if (this._samlp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlp = this._samlp?.internalValue;
    }
    if (this._waad?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waad = this._waad?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionProfileStrategyOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ad.internalValue = undefined;
      this._adfs.internalValue = undefined;
      this._googleApps.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._okta.internalValue = undefined;
      this._pingfederate.internalValue = undefined;
      this._samlp.internalValue = undefined;
      this._waad.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ad.internalValue = value.ad;
      this._adfs.internalValue = value.adfs;
      this._googleApps.internalValue = value.googleApps;
      this._oidc.internalValue = value.oidc;
      this._okta.internalValue = value.okta;
      this._pingfederate.internalValue = value.pingfederate;
      this._samlp.internalValue = value.samlp;
      this._waad.internalValue = value.waad;
    }
  }

  // ad - computed: false, optional: true, required: false
  private _ad = new ConnectionProfileStrategyOverridesAdOutputReference(this, "ad");
  public get ad() {
    return this._ad;
  }
  public putAd(value: ConnectionProfileStrategyOverridesAd) {
    this._ad.internalValue = value;
  }
  public resetAd() {
    this._ad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adInput() {
    return this._ad.internalValue;
  }

  // adfs - computed: false, optional: true, required: false
  private _adfs = new ConnectionProfileStrategyOverridesAdfsOutputReference(this, "adfs");
  public get adfs() {
    return this._adfs;
  }
  public putAdfs(value: ConnectionProfileStrategyOverridesAdfs) {
    this._adfs.internalValue = value;
  }
  public resetAdfs() {
    this._adfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsInput() {
    return this._adfs.internalValue;
  }

  // google_apps - computed: false, optional: true, required: false
  private _googleApps = new ConnectionProfileStrategyOverridesGoogleAppsOutputReference(this, "google_apps");
  public get googleApps() {
    return this._googleApps;
  }
  public putGoogleApps(value: ConnectionProfileStrategyOverridesGoogleApps) {
    this._googleApps.internalValue = value;
  }
  public resetGoogleApps() {
    this._googleApps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAppsInput() {
    return this._googleApps.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new ConnectionProfileStrategyOverridesOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: ConnectionProfileStrategyOverridesOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new ConnectionProfileStrategyOverridesOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ConnectionProfileStrategyOverridesOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // pingfederate - computed: false, optional: true, required: false
  private _pingfederate = new ConnectionProfileStrategyOverridesPingfederateOutputReference(this, "pingfederate");
  public get pingfederate() {
    return this._pingfederate;
  }
  public putPingfederate(value: ConnectionProfileStrategyOverridesPingfederate) {
    this._pingfederate.internalValue = value;
  }
  public resetPingfederate() {
    this._pingfederate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingfederateInput() {
    return this._pingfederate.internalValue;
  }

  // samlp - computed: false, optional: true, required: false
  private _samlp = new ConnectionProfileStrategyOverridesSamlpOutputReference(this, "samlp");
  public get samlp() {
    return this._samlp;
  }
  public putSamlp(value: ConnectionProfileStrategyOverridesSamlp) {
    this._samlp.internalValue = value;
  }
  public resetSamlp() {
    this._samlp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlpInput() {
    return this._samlp.internalValue;
  }

  // waad - computed: false, optional: true, required: false
  private _waad = new ConnectionProfileStrategyOverridesWaadOutputReference(this, "waad");
  public get waad() {
    return this._waad;
  }
  public putWaad(value: ConnectionProfileStrategyOverridesWaad) {
    this._waad.internalValue = value;
  }
  public resetWaad() {
    this._waad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waadInput() {
    return this._waad.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile auth0_connection_profile}
*/
export class ConnectionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_connection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionProfile to import
  * @param importFromId The id of the existing ConnectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_connection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_profile auth0_connection_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_connection_profile',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionNamePrefixTemplate = config.connectionNamePrefixTemplate;
    this._enabledFeatures = config.enabledFeatures;
    this._id = config.id;
    this._name = config.name;
    this._connectionConfig.internalValue = config.connectionConfig;
    this._organization.internalValue = config.organization;
    this._strategyOverrides.internalValue = config.strategyOverrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_name_prefix_template - computed: false, optional: true, required: false
  private _connectionNamePrefixTemplate?: string; 
  public get connectionNamePrefixTemplate() {
    return this.getStringAttribute('connection_name_prefix_template');
  }
  public set connectionNamePrefixTemplate(value: string) {
    this._connectionNamePrefixTemplate = value;
  }
  public resetConnectionNamePrefixTemplate() {
    this._connectionNamePrefixTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNamePrefixTemplateInput() {
    return this._connectionNamePrefixTemplate;
  }

  // enabled_features - computed: true, optional: true, required: false
  private _enabledFeatures?: string[]; 
  public get enabledFeatures() {
    return this.getListAttribute('enabled_features');
  }
  public set enabledFeatures(value: string[]) {
    this._enabledFeatures = value;
  }
  public resetEnabledFeatures() {
    this._enabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFeaturesInput() {
    return this._enabledFeatures;
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

  // connection_config - computed: false, optional: true, required: false
  private _connectionConfig = new ConnectionProfileConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: ConnectionProfileConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }

  // organization - computed: false, optional: true, required: false
  private _organization = new ConnectionProfileOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: ConnectionProfileOrganization) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // strategy_overrides - computed: false, optional: true, required: false
  private _strategyOverrides = new ConnectionProfileStrategyOverridesOutputReference(this, "strategy_overrides");
  public get strategyOverrides() {
    return this._strategyOverrides;
  }
  public putStrategyOverrides(value: ConnectionProfileStrategyOverrides) {
    this._strategyOverrides.internalValue = value;
  }
  public resetStrategyOverrides() {
    this._strategyOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyOverridesInput() {
    return this._strategyOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_name_prefix_template: cdktf.stringToTerraform(this._connectionNamePrefixTemplate),
      enabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledFeatures),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      connection_config: connectionProfileConnectionConfigToTerraform(this._connectionConfig.internalValue),
      organization: connectionProfileOrganizationToTerraform(this._organization.internalValue),
      strategy_overrides: connectionProfileStrategyOverridesToTerraform(this._strategyOverrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_name_prefix_template: {
        value: cdktf.stringToHclTerraform(this._connectionNamePrefixTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledFeatures),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      connection_config: {
        value: connectionProfileConnectionConfigToHclTerraform(this._connectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionProfileConnectionConfigList",
      },
      organization: {
        value: connectionProfileOrganizationToHclTerraform(this._organization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionProfileOrganizationList",
      },
      strategy_overrides: {
        value: connectionProfileStrategyOverridesToHclTerraform(this._strategyOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionProfileStrategyOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
