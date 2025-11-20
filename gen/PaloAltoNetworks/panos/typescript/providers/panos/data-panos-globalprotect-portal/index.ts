// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosGlobalprotectPortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#client_config DataPanosGlobalprotectPortal#client_config}
  */
  readonly clientConfig?: DataPanosGlobalprotectPortalClientConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#clientless_vpn DataPanosGlobalprotectPortal#clientless_vpn}
  */
  readonly clientlessVpn?: DataPanosGlobalprotectPortalClientlessVpn;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#location DataPanosGlobalprotectPortal#location}
  */
  readonly location: DataPanosGlobalprotectPortalLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#portal_config DataPanosGlobalprotectPortal#portal_config}
  */
  readonly portalConfig?: DataPanosGlobalprotectPortalPortalConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#satellite_config DataPanosGlobalprotectPortal#satellite_config}
  */
  readonly satelliteConfig?: DataPanosGlobalprotectPortalSatelliteConfig;
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsAgentConfig {
}

export function dataPanosGlobalprotectPortalClientConfigConfigsAgentConfigToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAgentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsAgentConfigToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAgentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosGlobalprotectPortalClientConfigConfigsAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsAgentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsAgentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#page DataPanosGlobalprotectPortal#page}
  */
  readonly page?: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePageToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    page: cdktf.stringToTerraform(struct!.page),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePageToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    page: {
      value: cdktf.stringToHclTerraform(struct!.page),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._page !== undefined) {
      hasAnyValues = true;
      internalValueResult.page = this._page;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._page = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._page = value.page;
    }
  }

  // page - computed: true, optional: true, required: false
  private _page?: string; 
  public get page() {
    return this.getStringAttribute('page');
  }
  public set page(value: string) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsAgentUi {
  /**
  * Agent user override duration in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#agent_user_override_timeout DataPanosGlobalprotectPortal#agent_user_override_timeout}
  */
  readonly agentUserOverrideTimeout?: number;
  /**
  * Max agent user overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#max_agent_user_overrides DataPanosGlobalprotectPortal#max_agent_user_overrides}
  */
  readonly maxAgentUserOverrides?: number;
  /**
  * Passcode required for override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#passcode DataPanosGlobalprotectPortal#passcode}
  */
  readonly passcode?: string;
  /**
  * Password to uninstall GlobalProtect app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#uninstall_password DataPanosGlobalprotectPortal#uninstall_password}
  */
  readonly uninstallPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#welcome_page DataPanosGlobalprotectPortal#welcome_page}
  */
  readonly welcomePage?: DataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePage;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsAgentUiToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAgentUi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_user_override_timeout: cdktf.numberToTerraform(struct!.agentUserOverrideTimeout),
    max_agent_user_overrides: cdktf.numberToTerraform(struct!.maxAgentUserOverrides),
    passcode: cdktf.stringToTerraform(struct!.passcode),
    uninstall_password: cdktf.stringToTerraform(struct!.uninstallPassword),
    welcome_page: dataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePageToTerraform(struct!.welcomePage),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsAgentUiToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAgentUi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_user_override_timeout: {
      value: cdktf.numberToHclTerraform(struct!.agentUserOverrideTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_agent_user_overrides: {
      value: cdktf.numberToHclTerraform(struct!.maxAgentUserOverrides),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passcode: {
      value: cdktf.stringToHclTerraform(struct!.passcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uninstall_password: {
      value: cdktf.stringToHclTerraform(struct!.uninstallPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    welcome_page: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePageToHclTerraform(struct!.welcomePage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsAgentUiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsAgentUi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentUserOverrideTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentUserOverrideTimeout = this._agentUserOverrideTimeout;
    }
    if (this._maxAgentUserOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgentUserOverrides = this._maxAgentUserOverrides;
    }
    if (this._passcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcode = this._passcode;
    }
    if (this._uninstallPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.uninstallPassword = this._uninstallPassword;
    }
    if (this._welcomePage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.welcomePage = this._welcomePage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsAgentUi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentUserOverrideTimeout = undefined;
      this._maxAgentUserOverrides = undefined;
      this._passcode = undefined;
      this._uninstallPassword = undefined;
      this._welcomePage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentUserOverrideTimeout = value.agentUserOverrideTimeout;
      this._maxAgentUserOverrides = value.maxAgentUserOverrides;
      this._passcode = value.passcode;
      this._uninstallPassword = value.uninstallPassword;
      this._welcomePage.internalValue = value.welcomePage;
    }
  }

  // agent_user_override_timeout - computed: true, optional: true, required: false
  private _agentUserOverrideTimeout?: number; 
  public get agentUserOverrideTimeout() {
    return this.getNumberAttribute('agent_user_override_timeout');
  }
  public set agentUserOverrideTimeout(value: number) {
    this._agentUserOverrideTimeout = value;
  }
  public resetAgentUserOverrideTimeout() {
    this._agentUserOverrideTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentUserOverrideTimeoutInput() {
    return this._agentUserOverrideTimeout;
  }

  // max_agent_user_overrides - computed: true, optional: true, required: false
  private _maxAgentUserOverrides?: number; 
  public get maxAgentUserOverrides() {
    return this.getNumberAttribute('max_agent_user_overrides');
  }
  public set maxAgentUserOverrides(value: number) {
    this._maxAgentUserOverrides = value;
  }
  public resetMaxAgentUserOverrides() {
    this._maxAgentUserOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgentUserOverridesInput() {
    return this._maxAgentUserOverrides;
  }

  // passcode - computed: true, optional: true, required: false
  private _passcode?: string; 
  public get passcode() {
    return this.getStringAttribute('passcode');
  }
  public set passcode(value: string) {
    this._passcode = value;
  }
  public resetPasscode() {
    this._passcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeInput() {
    return this._passcode;
  }

  // uninstall_password - computed: true, optional: true, required: false
  private _uninstallPassword?: string; 
  public get uninstallPassword() {
    return this.getStringAttribute('uninstall_password');
  }
  public set uninstallPassword(value: string) {
    this._uninstallPassword = value;
  }
  public resetUninstallPassword() {
    this._uninstallPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uninstallPasswordInput() {
    return this._uninstallPassword;
  }

  // welcome_page - computed: true, optional: true, required: false
  private _welcomePage = new DataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePageOutputReference(this, "welcome_page");
  public get welcomePage() {
    return this._welcomePage;
  }
  public putWelcomePage(value: DataPanosGlobalprotectPortalClientConfigConfigsAgentUiWelcomePage) {
    this._welcomePage.internalValue = value;
  }
  public resetWelcomePage() {
    this._welcomePage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get welcomePageInput() {
    return this._welcomePage.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetime {
  /**
  * Cookie lifetime in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#lifetime_in_days DataPanosGlobalprotectPortal#lifetime_in_days}
  */
  readonly lifetimeInDays?: number;
  /**
  * Cookie lifetime in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#lifetime_in_hours DataPanosGlobalprotectPortal#lifetime_in_hours}
  */
  readonly lifetimeInHours?: number;
  /**
  * Cookie lifetime in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#lifetime_in_minutes DataPanosGlobalprotectPortal#lifetime_in_minutes}
  */
  readonly lifetimeInMinutes?: number;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime_in_days: cdktf.numberToTerraform(struct!.lifetimeInDays),
    lifetime_in_hours: cdktf.numberToTerraform(struct!.lifetimeInHours),
    lifetime_in_minutes: cdktf.numberToTerraform(struct!.lifetimeInMinutes),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime_in_days: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifetime_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifetime_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetimeInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInDays = this._lifetimeInDays;
    }
    if (this._lifetimeInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInHours = this._lifetimeInHours;
    }
    if (this._lifetimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInMinutes = this._lifetimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetimeInDays = undefined;
      this._lifetimeInHours = undefined;
      this._lifetimeInMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetimeInDays = value.lifetimeInDays;
      this._lifetimeInHours = value.lifetimeInHours;
      this._lifetimeInMinutes = value.lifetimeInMinutes;
    }
  }

  // lifetime_in_days - computed: true, optional: true, required: false
  private _lifetimeInDays?: number; 
  public get lifetimeInDays() {
    return this.getNumberAttribute('lifetime_in_days');
  }
  public set lifetimeInDays(value: number) {
    this._lifetimeInDays = value;
  }
  public resetLifetimeInDays() {
    this._lifetimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInDaysInput() {
    return this._lifetimeInDays;
  }

  // lifetime_in_hours - computed: true, optional: true, required: false
  private _lifetimeInHours?: number; 
  public get lifetimeInHours() {
    return this.getNumberAttribute('lifetime_in_hours');
  }
  public set lifetimeInHours(value: number) {
    this._lifetimeInHours = value;
  }
  public resetLifetimeInHours() {
    this._lifetimeInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInHoursInput() {
    return this._lifetimeInHours;
  }

  // lifetime_in_minutes - computed: true, optional: true, required: false
  private _lifetimeInMinutes?: number; 
  public get lifetimeInMinutes() {
    return this.getNumberAttribute('lifetime_in_minutes');
  }
  public set lifetimeInMinutes(value: number) {
    this._lifetimeInMinutes = value;
  }
  public resetLifetimeInMinutes() {
    this._lifetimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInMinutesInput() {
    return this._lifetimeInMinutes;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#cookie_lifetime DataPanosGlobalprotectPortal#cookie_lifetime}
  */
  readonly cookieLifetime?: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetime;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_lifetime: dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToTerraform(struct!.cookieLifetime),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_lifetime: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToHclTerraform(struct!.cookieLifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieLifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieLifetime = this._cookieLifetime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieLifetime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieLifetime.internalValue = value.cookieLifetime;
    }
  }

  // cookie_lifetime - computed: true, optional: true, required: false
  private _cookieLifetime = new DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetimeOutputReference(this, "cookie_lifetime");
  public get cookieLifetime() {
    return this._cookieLifetime;
  }
  public putCookieLifetime(value: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieCookieLifetime) {
    this._cookieLifetime.internalValue = value;
  }
  public resetCookieLifetime() {
    this._cookieLifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieLifetimeInput() {
    return this._cookieLifetime.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#accept_cookie DataPanosGlobalprotectPortal#accept_cookie}
  */
  readonly acceptCookie?: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookie;
  /**
  * Certificate to Encrypt/Decrypt Cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#cookie_encrypt_decrypt_cert DataPanosGlobalprotectPortal#cookie_encrypt_decrypt_cert}
  */
  readonly cookieEncryptDecryptCert?: string;
  /**
  * Generate cookie for authentication override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#generate_cookie DataPanosGlobalprotectPortal#generate_cookie}
  */
  readonly generateCookie?: boolean | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_cookie: dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieToTerraform(struct!.acceptCookie),
    cookie_encrypt_decrypt_cert: cdktf.stringToTerraform(struct!.cookieEncryptDecryptCert),
    generate_cookie: cdktf.booleanToTerraform(struct!.generateCookie),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_cookie: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieToHclTerraform(struct!.acceptCookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookie",
    },
    cookie_encrypt_decrypt_cert: {
      value: cdktf.stringToHclTerraform(struct!.cookieEncryptDecryptCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.generateCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptCookie = this._acceptCookie?.internalValue;
    }
    if (this._cookieEncryptDecryptCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieEncryptDecryptCert = this._cookieEncryptDecryptCert;
    }
    if (this._generateCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateCookie = this._generateCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptCookie.internalValue = undefined;
      this._cookieEncryptDecryptCert = undefined;
      this._generateCookie = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptCookie.internalValue = value.acceptCookie;
      this._cookieEncryptDecryptCert = value.cookieEncryptDecryptCert;
      this._generateCookie = value.generateCookie;
    }
  }

  // accept_cookie - computed: true, optional: true, required: false
  private _acceptCookie = new DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookieOutputReference(this, "accept_cookie");
  public get acceptCookie() {
    return this._acceptCookie;
  }
  public putAcceptCookie(value: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideAcceptCookie) {
    this._acceptCookie.internalValue = value;
  }
  public resetAcceptCookie() {
    this._acceptCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptCookieInput() {
    return this._acceptCookie.internalValue;
  }

  // cookie_encrypt_decrypt_cert - computed: true, optional: true, required: false
  private _cookieEncryptDecryptCert?: string; 
  public get cookieEncryptDecryptCert() {
    return this.getStringAttribute('cookie_encrypt_decrypt_cert');
  }
  public set cookieEncryptDecryptCert(value: string) {
    this._cookieEncryptDecryptCert = value;
  }
  public resetCookieEncryptDecryptCert() {
    this._cookieEncryptDecryptCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieEncryptDecryptCertInput() {
    return this._cookieEncryptDecryptCert;
  }

  // generate_cookie - computed: true, optional: true, required: false
  private _generateCookie?: boolean | cdktf.IResolvable; 
  public get generateCookie() {
    return this.getBooleanAttribute('generate_cookie');
  }
  public set generateCookie(value: boolean | cdktf.IResolvable) {
    this._generateCookie = value;
  }
  public resetGenerateCookie() {
    this._generateCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateCookieInput() {
    return this._generateCookie;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteria {
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#certificate_profile DataPanosGlobalprotectPortal#certificate_profile}
  */
  readonly certificateProfile?: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteriaToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteriaToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateProfile = value.certificateProfile;
    }
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#criteria DataPanosGlobalprotectPortal#criteria}
  */
  readonly criteria?: DataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteria;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsCertificateToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: dataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteriaToTerraform(struct!.criteria),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsCertificateToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
    }
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new DataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: DataPanosGlobalprotectPortalClientConfigConfigsCertificateCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsClientCertificate {
  /**
  * Select Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#local DataPanosGlobalprotectPortal#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#scep DataPanosGlobalprotectPortal#scep}
  */
  readonly scep?: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsClientCertificateToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: cdktf.stringToTerraform(struct!.local),
    scep: cdktf.stringToTerraform(struct!.scep),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsClientCertificateToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: cdktf.stringToHclTerraform(struct!.local),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scep: {
      value: cdktf.stringToHclTerraform(struct!.scep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    if (this._scep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scep = this._scep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local = undefined;
      this._scep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local = value.local;
      this._scep = value.scep;
    }
  }

  // local - computed: true, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // scep - computed: true, optional: true, required: false
  private _scep?: string; 
  public get scep() {
    return this.getStringAttribute('scep');
  }
  public set scep(value: string) {
    this._scep = value;
  }
  public resetScep() {
    this._scep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepInput() {
    return this._scep;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Value does not exist or match specified value data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#negate DataPanosGlobalprotectPortal#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#value DataPanosGlobalprotectPortal#value}
  */
  readonly value?: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKeyToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKeyToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKey | cdktf.IResolvable): any {
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
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._negate = undefined;
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
      this._negate = value.negate;
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

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKeyList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKey[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKeyOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#key DataPanosGlobalprotectPortal#key}
  */
  readonly key?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKey[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Plist does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#negate DataPanosGlobalprotectPortal#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStructToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKeyToTerraform, false)(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStructToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKeyToHclTerraform, false)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKeyList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key.internalValue = undefined;
      this._name = undefined;
      this._negate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key.internalValue = value.key;
      this._name = value.name;
      this._negate = value.negate;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key = new DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
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

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStructList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStruct[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStructOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Value does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#negate DataPanosGlobalprotectPortal#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Registry value data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#value_data DataPanosGlobalprotectPortal#value_data}
  */
  readonly valueData?: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValueToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    value_data: cdktf.stringToTerraform(struct!.valueData),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValueToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValue | cdktf.IResolvable): any {
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
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_data: {
      value: cdktf.stringToHclTerraform(struct!.valueData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._valueData !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueData = this._valueData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._negate = undefined;
      this._valueData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._negate = value.negate;
      this._valueData = value.valueData;
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

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // value_data - computed: true, optional: true, required: false
  private _valueData?: string; 
  public get valueData() {
    return this.getStringAttribute('value_data');
  }
  public set valueData(value: string) {
    this._valueData = value;
  }
  public resetValueData() {
    this._valueData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueDataInput() {
    return this._valueData;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValueList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValue[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValueOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKey {
  /**
  * Registry key default value data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#default_value_data DataPanosGlobalprotectPortal#default_value_data}
  */
  readonly defaultValueData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Key does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#negate DataPanosGlobalprotectPortal#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#registry_value DataPanosGlobalprotectPortal#registry_value}
  */
  readonly registryValue?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValue[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value_data: cdktf.stringToTerraform(struct!.defaultValueData),
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    registry_value: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValueToTerraform, false)(struct!.registryValue),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value_data: {
      value: cdktf.stringToHclTerraform(struct!.defaultValueData),
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
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry_value: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValueToHclTerraform, false)(struct!.registryValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValueData !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValueData = this._defaultValueData;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._registryValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryValue = this._registryValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValueData = undefined;
      this._name = undefined;
      this._negate = undefined;
      this._registryValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValueData = value.defaultValueData;
      this._name = value.name;
      this._negate = value.negate;
      this._registryValue.internalValue = value.registryValue;
    }
  }

  // default_value_data - computed: true, optional: true, required: false
  private _defaultValueData?: string; 
  public get defaultValueData() {
    return this.getStringAttribute('default_value_data');
  }
  public set defaultValueData(value: string) {
    this._defaultValueData = value;
  }
  public resetDefaultValueData() {
    this._defaultValueData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueDataInput() {
    return this._defaultValueData;
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

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // registry_value - computed: true, optional: true, required: false
  private _registryValue = new DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValueList(this, "registry_value", false);
  public get registryValue() {
    return this._registryValue;
  }
  public putRegistryValue(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyRegistryValue[] | cdktf.IResolvable) {
    this._registryValue.internalValue = value;
  }
  public resetRegistryValue() {
    this._registryValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryValueInput() {
    return this._registryValue.internalValue;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKey[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#plist DataPanosGlobalprotectPortal#plist}
  */
  readonly plist?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#registry_key DataPanosGlobalprotectPortal#registry_key}
  */
  readonly registryKey?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKey[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plist: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStructToTerraform, false)(struct!.plist),
    registry_key: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyToTerraform, false)(struct!.registryKey),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plist: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStructToHclTerraform, false)(struct!.plist),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStructList",
    },
    registry_key: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyToHclTerraform, false)(struct!.registryKey),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plist = this._plist?.internalValue;
    }
    if (this._registryKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryKey = this._registryKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plist.internalValue = undefined;
      this._registryKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plist.internalValue = value.plist;
      this._registryKey.internalValue = value.registryKey;
    }
  }

  // plist - computed: true, optional: true, required: false
  private _plist = new DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStructList(this, "plist", false);
  public get plist() {
    return this._plist;
  }
  public putPlist(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaPlistStruct[] | cdktf.IResolvable) {
    this._plist.internalValue = value;
  }
  public resetPlist() {
    this._plist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plistInput() {
    return this._plist.internalValue;
  }

  // registry_key - computed: true, optional: true, required: false
  private _registryKey = new DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKeyList(this, "registry_key", false);
  public get registryKey() {
    return this._registryKey;
  }
  public putRegistryKey(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaRegistryKey[] | cdktf.IResolvable) {
    this._registryKey.internalValue = value;
  }
  public resetRegistryKey() {
    this._registryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryKeyInput() {
    return this._registryKey.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsCustomChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#criteria DataPanosGlobalprotectPortal#criteria}
  */
  readonly criteria?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteria;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaToTerraform(struct!.criteria),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsCustomChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
    }
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIp {
  /**
  * IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv4 DataPanosGlobalprotectPortal#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv6 DataPanosGlobalprotectPortal#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIpToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIpToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Priority of GlobalProtect gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#priority DataPanosGlobalprotectPortal#priority}
  */
  readonly priority?: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRuleToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRuleToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRule | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRuleList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRule[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRuleOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStruct {
  /**
  * fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#fqdn DataPanosGlobalprotectPortal#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ip DataPanosGlobalprotectPortal#ip}
  */
  readonly ip?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIp;
  /**
  * If this GlobalProtect gateway can be manually selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#manual DataPanosGlobalprotectPortal#manual}
  */
  readonly manual?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#priority_rule DataPanosGlobalprotectPortal#priority_rule}
  */
  readonly priorityRule?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRule[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStructToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip: dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIpToTerraform(struct!.ip),
    manual: cdktf.booleanToTerraform(struct!.manual),
    name: cdktf.stringToTerraform(struct!.name),
    priority_rule: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRuleToTerraform, false)(struct!.priorityRule),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStructToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIp",
    },
    manual: {
      value: cdktf.booleanToHclTerraform(struct!.manual),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_rule: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRuleToHclTerraform, false)(struct!.priorityRule),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._manual !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priorityRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityRule = this._priorityRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ip.internalValue = undefined;
      this._manual = undefined;
      this._name = undefined;
      this._priorityRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ip.internalValue = value.ip;
      this._manual = value.manual;
      this._name = value.name;
      this._priorityRule.internalValue = value.priorityRule;
    }
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip - computed: true, optional: true, required: false
  private _ip = new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // manual - computed: true, optional: true, required: false
  private _manual?: boolean | cdktf.IResolvable; 
  public get manual() {
    return this.getBooleanAttribute('manual');
  }
  public set manual(value: boolean | cdktf.IResolvable) {
    this._manual = value;
  }
  public resetManual() {
    this._manual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual;
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

  // priority_rule - computed: true, optional: true, required: false
  private _priorityRule = new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRuleList(this, "priority_rule", false);
  public get priorityRule() {
    return this._priorityRule;
  }
  public putPriorityRule(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListPriorityRule[] | cdktf.IResolvable) {
    this._priorityRule.internalValue = value;
  }
  public resetPriorityRule() {
    this._priorityRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityRuleInput() {
    return this._priorityRule.internalValue;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStructList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStructOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternal {
  /**
  * Gateway discovery cutoff time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#cutoff_time DataPanosGlobalprotectPortal#cutoff_time}
  */
  readonly cutoffTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#list DataPanosGlobalprotectPortal#list}
  */
  readonly list?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStruct[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cutoff_time: cdktf.numberToTerraform(struct!.cutoffTime),
    list: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStructToTerraform, false)(struct!.list),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cutoff_time: {
      value: cdktf.numberToHclTerraform(struct!.cutoffTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    list: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStructToHclTerraform, false)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cutoffTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cutoffTime = this._cutoffTime;
    }
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cutoffTime = undefined;
      this._list.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cutoffTime = value.cutoffTime;
      this._list.internalValue = value.list;
    }
  }

  // cutoff_time - computed: true, optional: true, required: false
  private _cutoffTime?: number; 
  public get cutoffTime() {
    return this.getNumberAttribute('cutoff_time');
  }
  public set cutoffTime(value: number) {
    this._cutoffTime = value;
  }
  public resetCutoffTime() {
    this._cutoffTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffTimeInput() {
    return this._cutoffTime;
  }

  // list - computed: true, optional: true, required: false
  private _list = new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIp {
  /**
  * IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv4 DataPanosGlobalprotectPortal#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv6 DataPanosGlobalprotectPortal#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIpToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIpToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStruct {
  /**
  * fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#fqdn DataPanosGlobalprotectPortal#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ip DataPanosGlobalprotectPortal#ip}
  */
  readonly ip?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#source_ip DataPanosGlobalprotectPortal#source_ip}
  */
  readonly sourceIp?: string[];
}

export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStructToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip: dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIpToTerraform(struct!.ip),
    name: cdktf.stringToTerraform(struct!.name),
    source_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIp),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStructToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIp",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ip.internalValue = undefined;
      this._name = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ip.internalValue = value.ip;
      this._name = value.name;
      this._sourceIp = value.sourceIp;
    }
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip - computed: true, optional: true, required: false
  private _ip = new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
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

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string[]; 
  public get sourceIp() {
    return this.getListAttribute('source_ip');
  }
  public set sourceIp(value: string[]) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStructList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStructOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#dhcp_option_code DataPanosGlobalprotectPortal#dhcp_option_code}
  */
  readonly dhcpOptionCode?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#list DataPanosGlobalprotectPortal#list}
  */
  readonly list?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStruct[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_option_code: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dhcpOptionCode),
    list: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStructToTerraform, false)(struct!.list),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_option_code: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dhcpOptionCode),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    list: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStructToHclTerraform, false)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpOptionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptionCode = this._dhcpOptionCode;
    }
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpOptionCode = undefined;
      this._list.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpOptionCode = value.dhcpOptionCode;
      this._list.internalValue = value.list;
    }
  }

  // dhcp_option_code - computed: true, optional: true, required: false
  private _dhcpOptionCode?: number[]; 
  public get dhcpOptionCode() {
    return this.getNumberListAttribute('dhcp_option_code');
  }
  public set dhcpOptionCode(value: number[]) {
    this._dhcpOptionCode = value;
  }
  public resetDhcpOptionCode() {
    this._dhcpOptionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionCodeInput() {
    return this._dhcpOptionCode;
  }

  // list - computed: true, optional: true, required: false
  private _list = new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsGateways {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#external DataPanosGlobalprotectPortal#external}
  */
  readonly external?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#internal DataPanosGlobalprotectPortal#internal}
  */
  readonly internal?: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternal;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalToTerraform(struct!.external),
    internal: dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalToTerraform(struct!.internal),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsGatewaysToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternal",
    },
    internal: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalToHclTerraform(struct!.internal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGatewaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._internal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internal = this._internal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._external.internalValue = undefined;
      this._internal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._external.internalValue = value.external;
      this._internal.internalValue = value.internal;
    }
  }

  // external - computed: true, optional: true, required: false
  private _external = new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // internal - computed: true, optional: true, required: false
  private _internal = new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternalOutputReference(this, "internal");
  public get internal() {
    return this._internal;
  }
  public putInternal(value: DataPanosGlobalprotectPortalClientConfigConfigsGatewaysInternal) {
    this._internal.internalValue = value;
  }
  public resetInternal() {
    this._internal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#value DataPanosGlobalprotectPortal#value}
  */
  readonly value?: string[];
}

export function dataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfigToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfigToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfig | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfig | cdktf.IResolvable | undefined) {
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

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfigList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfig[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfigOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#config DataPanosGlobalprotectPortal#config}
  */
  readonly config?: DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfig[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfigToTerraform, false)(struct!.config),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfigToHclTerraform, false)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinux {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#process_list DataPanosGlobalprotectPortal#process_list}
  */
  readonly processList?: string[];
}

export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinuxToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    process_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.processList),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinuxToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    process_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.processList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinuxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinux | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processList !== undefined) {
      hasAnyValues = true;
      internalValueResult.processList = this._processList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinux | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._processList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._processList = value.processList;
    }
  }

  // process_list - computed: true, optional: true, required: false
  private _processList?: string[]; 
  public get processList() {
    return this.getListAttribute('process_list');
  }
  public set processList(value: string[]) {
    this._processList = value;
  }
  public resetProcessList() {
    this._processList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processListInput() {
    return this._processList;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#key DataPanosGlobalprotectPortal#key}
  */
  readonly key?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStructToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStructToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.key),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string[]; 
  public get key() {
    return this.getListAttribute('key');
  }
  public set key(value: string[]) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStructList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStruct[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStructOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#plist DataPanosGlobalprotectPortal#plist}
  */
  readonly plist?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#process_list DataPanosGlobalprotectPortal#process_list}
  */
  readonly processList?: string[];
}

export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plist: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStructToTerraform, false)(struct!.plist),
    process_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.processList),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plist: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStructToHclTerraform, false)(struct!.plist),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStructList",
    },
    process_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.processList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plist = this._plist?.internalValue;
    }
    if (this._processList !== undefined) {
      hasAnyValues = true;
      internalValueResult.processList = this._processList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plist.internalValue = undefined;
      this._processList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plist.internalValue = value.plist;
      this._processList = value.processList;
    }
  }

  // plist - computed: true, optional: true, required: false
  private _plist = new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStructList(this, "plist", false);
  public get plist() {
    return this._plist;
  }
  public putPlist(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsPlistStruct[] | cdktf.IResolvable) {
    this._plist.internalValue = value;
  }
  public resetPlist() {
    this._plist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plistInput() {
    return this._plist.internalValue;
  }

  // process_list - computed: true, optional: true, required: false
  private _processList?: string[]; 
  public get processList() {
    return this.getListAttribute('process_list');
  }
  public set processList(value: string[]) {
    this._processList = value;
  }
  public resetProcessList() {
    this._processList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processListInput() {
    return this._processList;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#registry_value DataPanosGlobalprotectPortal#registry_value}
  */
  readonly registryValue?: string[];
}

export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKeyToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    registry_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.registryValue),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKeyToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKey | cdktf.IResolvable): any {
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
    registry_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.registryValue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._registryValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryValue = this._registryValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._registryValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._registryValue = value.registryValue;
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

  // registry_value - computed: true, optional: true, required: false
  private _registryValue?: string[]; 
  public get registryValue() {
    return this.getListAttribute('registry_value');
  }
  public set registryValue(value: string[]) {
    this._registryValue = value;
  }
  public resetRegistryValue() {
    this._registryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryValueInput() {
    return this._registryValue;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKeyList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKey[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKeyOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#process_list DataPanosGlobalprotectPortal#process_list}
  */
  readonly processList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#registry_key DataPanosGlobalprotectPortal#registry_key}
  */
  readonly registryKey?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKey[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    process_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.processList),
    registry_key: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKeyToTerraform, false)(struct!.registryKey),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    process_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.processList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    registry_key: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKeyToHclTerraform, false)(struct!.registryKey),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processList !== undefined) {
      hasAnyValues = true;
      internalValueResult.processList = this._processList;
    }
    if (this._registryKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryKey = this._registryKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._processList = undefined;
      this._registryKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._processList = value.processList;
      this._registryKey.internalValue = value.registryKey;
    }
  }

  // process_list - computed: true, optional: true, required: false
  private _processList?: string[]; 
  public get processList() {
    return this.getListAttribute('process_list');
  }
  public set processList(value: string[]) {
    this._processList = value;
  }
  public resetProcessList() {
    this._processList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processListInput() {
    return this._processList;
  }

  // registry_key - computed: true, optional: true, required: false
  private _registryKey = new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKeyList(this, "registry_key", false);
  public get registryKey() {
    return this._registryKey;
  }
  public putRegistryKey(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsRegistryKey[] | cdktf.IResolvable) {
    this._registryKey.internalValue = value;
  }
  public resetRegistryKey() {
    this._registryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryKeyInput() {
    return this._registryKey.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#linux DataPanosGlobalprotectPortal#linux}
  */
  readonly linux?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinux;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#mac_os DataPanosGlobalprotectPortal#mac_os}
  */
  readonly macOs?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#windows DataPanosGlobalprotectPortal#windows}
  */
  readonly windows?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindows;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linux: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinuxToTerraform(struct!.linux),
    mac_os: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsToTerraform(struct!.macOs),
    windows: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsToTerraform(struct!.windows),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linux: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinuxToHclTerraform(struct!.linux),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinux",
    },
    mac_os: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsToHclTerraform(struct!.macOs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOs",
    },
    windows: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsToHclTerraform(struct!.windows),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindows",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linux?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linux = this._linux?.internalValue;
    }
    if (this._macOs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.macOs = this._macOs?.internalValue;
    }
    if (this._windows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windows = this._windows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linux.internalValue = undefined;
      this._macOs.internalValue = undefined;
      this._windows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linux.internalValue = value.linux;
      this._macOs.internalValue = value.macOs;
      this._windows.internalValue = value.windows;
    }
  }

  // linux - computed: true, optional: true, required: false
  private _linux = new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinuxOutputReference(this, "linux");
  public get linux() {
    return this._linux;
  }
  public putLinux(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksLinux) {
    this._linux.internalValue = value;
  }
  public resetLinux() {
    this._linux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxInput() {
    return this._linux.internalValue;
  }

  // mac_os - computed: true, optional: true, required: false
  private _macOs = new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOsOutputReference(this, "mac_os");
  public get macOs() {
    return this._macOs;
  }
  public putMacOs(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksMacOs) {
    this._macOs.internalValue = value;
  }
  public resetMacOs() {
    this._macOs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macOsInput() {
    return this._macOs.internalValue;
  }

  // windows - computed: true, optional: true, required: false
  private _windows = new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }
  public putWindows(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksWindows) {
    this._windows.internalValue = value;
  }
  public resetWindows() {
    this._windows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#product DataPanosGlobalprotectPortal#product}
  */
  readonly product?: string[];
}

export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendorToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.product),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendorToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendor | cdktf.IResolvable): any {
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
    product: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.product),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._product = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._product = value.product;
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

  // product - computed: true, optional: true, required: false
  private _product?: string[]; 
  public get product() {
    return this.getListAttribute('product');
  }
  public set product(value: string[]) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendorList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendor[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendorOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#vendor DataPanosGlobalprotectPortal#vendor}
  */
  readonly vendor?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendor[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vendor: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendorToTerraform, false)(struct!.vendor),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategory | cdktf.IResolvable): any {
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
    vendor: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendorToHclTerraform, false)(struct!.vendor),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vendor.internalValue = value.vendor;
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

  // vendor - computed: true, optional: true, required: false
  private _vendor = new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
  public putVendor(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryVendor[] | cdktf.IResolvable) {
    this._vendor.internalValue = value;
  }
  public resetVendor() {
    this._vendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor.internalValue;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategory[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#category DataPanosGlobalprotectPortal#category}
  */
  readonly category?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategory[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryToTerraform, false)(struct!.category),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryToHclTerraform, false)(struct!.category),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category.internalValue = value.category;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category = new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionCategory[] | cdktf.IResolvable) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsHipCollection {
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#certificate_profile DataPanosGlobalprotectPortal#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Collect HIP Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#collect_hip_data DataPanosGlobalprotectPortal#collect_hip_data}
  */
  readonly collectHipData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#custom_checks DataPanosGlobalprotectPortal#custom_checks}
  */
  readonly customChecks?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#exclusion DataPanosGlobalprotectPortal#exclusion}
  */
  readonly exclusion?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusion;
  /**
  * Max Wait Time (Sec)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#max_wait_time DataPanosGlobalprotectPortal#max_wait_time}
  */
  readonly maxWaitTime?: number;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    collect_hip_data: cdktf.booleanToTerraform(struct!.collectHipData),
    custom_checks: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksToTerraform(struct!.customChecks),
    exclusion: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionToTerraform(struct!.exclusion),
    max_wait_time: cdktf.numberToTerraform(struct!.maxWaitTime),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collect_hip_data: {
      value: cdktf.booleanToHclTerraform(struct!.collectHipData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_checks: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksToHclTerraform(struct!.customChecks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecks",
    },
    exclusion: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionToHclTerraform(struct!.exclusion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusion",
    },
    max_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.maxWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsHipCollection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._collectHipData !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectHipData = this._collectHipData;
    }
    if (this._customChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customChecks = this._customChecks?.internalValue;
    }
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    if (this._maxWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTime = this._maxWaitTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateProfile = undefined;
      this._collectHipData = undefined;
      this._customChecks.internalValue = undefined;
      this._exclusion.internalValue = undefined;
      this._maxWaitTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateProfile = value.certificateProfile;
      this._collectHipData = value.collectHipData;
      this._customChecks.internalValue = value.customChecks;
      this._exclusion.internalValue = value.exclusion;
      this._maxWaitTime = value.maxWaitTime;
    }
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // collect_hip_data - computed: true, optional: true, required: false
  private _collectHipData?: boolean | cdktf.IResolvable; 
  public get collectHipData() {
    return this.getBooleanAttribute('collect_hip_data');
  }
  public set collectHipData(value: boolean | cdktf.IResolvable) {
    this._collectHipData = value;
  }
  public resetCollectHipData() {
    this._collectHipData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectHipDataInput() {
    return this._collectHipData;
  }

  // custom_checks - computed: true, optional: true, required: false
  private _customChecks = new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecksOutputReference(this, "custom_checks");
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionCustomChecks) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }

  // exclusion - computed: true, optional: true, required: false
  private _exclusion = new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusionOutputReference(this, "exclusion");
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionExclusion) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }

  // max_wait_time - computed: true, optional: true, required: false
  private _maxWaitTime?: number; 
  public get maxWaitTime() {
    return this.getNumberAttribute('max_wait_time');
  }
  public set maxWaitTime(value: number) {
    this._maxWaitTime = value;
  }
  public resetMaxWaitTime() {
    this._maxWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInput() {
    return this._maxWaitTime;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetection {
  /**
  * Host name of the IPv4 in DNS record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#hostname DataPanosGlobalprotectPortal#hostname}
  */
  readonly hostname?: string;
  /**
  * Internal IPv4 address of a host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ip_address DataPanosGlobalprotectPortal#ip_address}
  */
  readonly ipAddress?: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
    }
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6 {
  /**
  * Host name of the IPv6 in DNS record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#hostname DataPanosGlobalprotectPortal#hostname}
  */
  readonly hostname?: string;
  /**
  * Internal IPv6 address of a host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ip_address DataPanosGlobalprotectPortal#ip_address}
  */
  readonly ipAddress?: string;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6ToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6ToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
    }
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNo {
}

export function dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNoToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNoToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYes {
}

export function dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYesToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYesToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialno {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#no DataPanosGlobalprotectPortal#no}
  */
  readonly no?: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#yes DataPanosGlobalprotectPortal#yes}
  */
  readonly yes?: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYes;
}

export function dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialno | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNoToTerraform(struct!.no),
    yes: dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYesToTerraform(struct!.yes),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialno | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNo",
    },
    yes: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialno | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._no?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.no = this._no?.internalValue;
    }
    if (this._yes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yes = this._yes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialno | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._no.internalValue = undefined;
      this._yes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._no.internalValue = value.no;
      this._yes.internalValue = value.yes;
    }
  }

  // no - computed: true, optional: true, required: false
  private _no = new DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoNo) {
    this._no.internalValue = value;
  }
  public resetNo() {
    this._no.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no.internalValue;
  }

  // yes - computed: true, optional: true, required: false
  private _yes = new DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoYes) {
    this._yes.internalValue = value;
  }
  public resetYes() {
    this._yes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yesInput() {
    return this._yes.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientConfigConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#agent_config DataPanosGlobalprotectPortal#agent_config}
  */
  readonly agentConfig?: DataPanosGlobalprotectPortalClientConfigConfigsAgentConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#agent_ui DataPanosGlobalprotectPortal#agent_ui}
  */
  readonly agentUi?: DataPanosGlobalprotectPortalClientConfigConfigsAgentUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#authentication_override DataPanosGlobalprotectPortal#authentication_override}
  */
  readonly authenticationOverride?: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverride;
  /**
  * Auto Discovery External Gateway Authentication OTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#auto_discovery_external_gateway_2fa DataPanosGlobalprotectPortal#auto_discovery_external_gateway_2fa}
  */
  readonly autoDiscoveryExternalGateway2Fa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#certificate DataPanosGlobalprotectPortal#certificate}
  */
  readonly certificate?: DataPanosGlobalprotectPortalClientConfigConfigsCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#client_certificate DataPanosGlobalprotectPortal#client_certificate}
  */
  readonly clientCertificate?: DataPanosGlobalprotectPortalClientConfigConfigsClientCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#custom_checks DataPanosGlobalprotectPortal#custom_checks}
  */
  readonly customChecks?: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#gateways DataPanosGlobalprotectPortal#gateways}
  */
  readonly gateways?: DataPanosGlobalprotectPortalClientConfigConfigsGateways;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#gp_app_config DataPanosGlobalprotectPortal#gp_app_config}
  */
  readonly gpAppConfig?: DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#hip_collection DataPanosGlobalprotectPortal#hip_collection}
  */
  readonly hipCollection?: DataPanosGlobalprotectPortalClientConfigConfigsHipCollection;
  /**
  * Internal Gateway Authentication OTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#internal_gateway_2fa DataPanosGlobalprotectPortal#internal_gateway_2fa}
  */
  readonly internalGateway2Fa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#internal_host_detection DataPanosGlobalprotectPortal#internal_host_detection}
  */
  readonly internalHostDetection?: DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#internal_host_detection_v6 DataPanosGlobalprotectPortal#internal_host_detection_v6}
  */
  readonly internalHostDetectionV6?: DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#machine_account_exists_with_serialno DataPanosGlobalprotectPortal#machine_account_exists_with_serialno}
  */
  readonly machineAccountExistsWithSerialno?: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialno;
  /**
  * Manual Only External Gateway Authentication OTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#manual_only_gateway_2fa DataPanosGlobalprotectPortal#manual_only_gateway_2fa}
  */
  readonly manualOnlyGateway2Fa?: boolean | cdktf.IResolvable;
  /**
  * IP address or hostname for GlobalProtect MDM server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#mdm_address DataPanosGlobalprotectPortal#mdm_address}
  */
  readonly mdmAddress?: string;
  /**
  * MDM enrollment port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#mdm_enrollment_port DataPanosGlobalprotectPortal#mdm_enrollment_port}
  */
  readonly mdmEnrollmentPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#os DataPanosGlobalprotectPortal#os}
  */
  readonly os?: string[];
  /**
  * Portal Authentication OTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#portal_2fa DataPanosGlobalprotectPortal#portal_2fa}
  */
  readonly portal2Fa?: boolean | cdktf.IResolvable;
  /**
  * Enable portal config refresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#refresh_config DataPanosGlobalprotectPortal#refresh_config}
  */
  readonly refreshConfig?: boolean | cdktf.IResolvable;
  /**
  * Save User Credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#save_user_credentials DataPanosGlobalprotectPortal#save_user_credentials}
  */
  readonly saveUserCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#source_user DataPanosGlobalprotectPortal#source_user}
  */
  readonly sourceUser?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#third_party_vpn_clients DataPanosGlobalprotectPortal#third_party_vpn_clients}
  */
  readonly thirdPartyVpnClients?: string[];
}

export function dataPanosGlobalprotectPortalClientConfigConfigsToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_config: dataPanosGlobalprotectPortalClientConfigConfigsAgentConfigToTerraform(struct!.agentConfig),
    agent_ui: dataPanosGlobalprotectPortalClientConfigConfigsAgentUiToTerraform(struct!.agentUi),
    authentication_override: dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideToTerraform(struct!.authenticationOverride),
    auto_discovery_external_gateway_2fa: cdktf.booleanToTerraform(struct!.autoDiscoveryExternalGateway2Fa),
    certificate: dataPanosGlobalprotectPortalClientConfigConfigsCertificateToTerraform(struct!.certificate),
    client_certificate: dataPanosGlobalprotectPortalClientConfigConfigsClientCertificateToTerraform(struct!.clientCertificate),
    custom_checks: dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksToTerraform(struct!.customChecks),
    gateways: dataPanosGlobalprotectPortalClientConfigConfigsGatewaysToTerraform(struct!.gateways),
    gp_app_config: dataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigToTerraform(struct!.gpAppConfig),
    hip_collection: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionToTerraform(struct!.hipCollection),
    internal_gateway_2fa: cdktf.booleanToTerraform(struct!.internalGateway2Fa),
    internal_host_detection: dataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionToTerraform(struct!.internalHostDetection),
    internal_host_detection_v6: dataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6ToTerraform(struct!.internalHostDetectionV6),
    machine_account_exists_with_serialno: dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoToTerraform(struct!.machineAccountExistsWithSerialno),
    manual_only_gateway_2fa: cdktf.booleanToTerraform(struct!.manualOnlyGateway2Fa),
    mdm_address: cdktf.stringToTerraform(struct!.mdmAddress),
    mdm_enrollment_port: cdktf.stringToTerraform(struct!.mdmEnrollmentPort),
    name: cdktf.stringToTerraform(struct!.name),
    os: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.os),
    portal_2fa: cdktf.booleanToTerraform(struct!.portal2Fa),
    refresh_config: cdktf.booleanToTerraform(struct!.refreshConfig),
    save_user_credentials: cdktf.stringToTerraform(struct!.saveUserCredentials),
    source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUser),
    third_party_vpn_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.thirdPartyVpnClients),
  }
}


export function dataPanosGlobalprotectPortalClientConfigConfigsToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_config: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsAgentConfigToHclTerraform(struct!.agentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsAgentConfig",
    },
    agent_ui: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsAgentUiToHclTerraform(struct!.agentUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsAgentUi",
    },
    authentication_override: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideToHclTerraform(struct!.authenticationOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverride",
    },
    auto_discovery_external_gateway_2fa: {
      value: cdktf.booleanToHclTerraform(struct!.autoDiscoveryExternalGateway2Fa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsCertificate",
    },
    client_certificate: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsClientCertificate",
    },
    custom_checks: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsCustomChecksToHclTerraform(struct!.customChecks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsCustomChecks",
    },
    gateways: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsGatewaysToHclTerraform(struct!.gateways),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsGateways",
    },
    gp_app_config: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigToHclTerraform(struct!.gpAppConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfig",
    },
    hip_collection: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsHipCollectionToHclTerraform(struct!.hipCollection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsHipCollection",
    },
    internal_gateway_2fa: {
      value: cdktf.booleanToHclTerraform(struct!.internalGateway2Fa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_host_detection: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionToHclTerraform(struct!.internalHostDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetection",
    },
    internal_host_detection_v6: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6ToHclTerraform(struct!.internalHostDetectionV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6",
    },
    machine_account_exists_with_serialno: {
      value: dataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoToHclTerraform(struct!.machineAccountExistsWithSerialno),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialno",
    },
    manual_only_gateway_2fa: {
      value: cdktf.booleanToHclTerraform(struct!.manualOnlyGateway2Fa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mdm_address: {
      value: cdktf.stringToHclTerraform(struct!.mdmAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdm_enrollment_port: {
      value: cdktf.stringToHclTerraform(struct!.mdmEnrollmentPort),
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
    os: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.os),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    portal_2fa: {
      value: cdktf.booleanToHclTerraform(struct!.portal2Fa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_config: {
      value: cdktf.booleanToHclTerraform(struct!.refreshConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    save_user_credentials: {
      value: cdktf.stringToHclTerraform(struct!.saveUserCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_user: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUser),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    third_party_vpn_clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.thirdPartyVpnClients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentConfig = this._agentConfig?.internalValue;
    }
    if (this._agentUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentUi = this._agentUi?.internalValue;
    }
    if (this._authenticationOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationOverride = this._authenticationOverride?.internalValue;
    }
    if (this._autoDiscoveryExternalGateway2Fa !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDiscoveryExternalGateway2Fa = this._autoDiscoveryExternalGateway2Fa;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._customChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customChecks = this._customChecks?.internalValue;
    }
    if (this._gateways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways?.internalValue;
    }
    if (this._gpAppConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpAppConfig = this._gpAppConfig?.internalValue;
    }
    if (this._hipCollection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipCollection = this._hipCollection?.internalValue;
    }
    if (this._internalGateway2Fa !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalGateway2Fa = this._internalGateway2Fa;
    }
    if (this._internalHostDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalHostDetection = this._internalHostDetection?.internalValue;
    }
    if (this._internalHostDetectionV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalHostDetectionV6 = this._internalHostDetectionV6?.internalValue;
    }
    if (this._machineAccountExistsWithSerialno?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineAccountExistsWithSerialno = this._machineAccountExistsWithSerialno?.internalValue;
    }
    if (this._manualOnlyGateway2Fa !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualOnlyGateway2Fa = this._manualOnlyGateway2Fa;
    }
    if (this._mdmAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdmAddress = this._mdmAddress;
    }
    if (this._mdmEnrollmentPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdmEnrollmentPort = this._mdmEnrollmentPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._portal2Fa !== undefined) {
      hasAnyValues = true;
      internalValueResult.portal2Fa = this._portal2Fa;
    }
    if (this._refreshConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshConfig = this._refreshConfig;
    }
    if (this._saveUserCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveUserCredentials = this._saveUserCredentials;
    }
    if (this._sourceUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUser = this._sourceUser;
    }
    if (this._thirdPartyVpnClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyVpnClients = this._thirdPartyVpnClients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentConfig.internalValue = undefined;
      this._agentUi.internalValue = undefined;
      this._authenticationOverride.internalValue = undefined;
      this._autoDiscoveryExternalGateway2Fa = undefined;
      this._certificate.internalValue = undefined;
      this._clientCertificate.internalValue = undefined;
      this._customChecks.internalValue = undefined;
      this._gateways.internalValue = undefined;
      this._gpAppConfig.internalValue = undefined;
      this._hipCollection.internalValue = undefined;
      this._internalGateway2Fa = undefined;
      this._internalHostDetection.internalValue = undefined;
      this._internalHostDetectionV6.internalValue = undefined;
      this._machineAccountExistsWithSerialno.internalValue = undefined;
      this._manualOnlyGateway2Fa = undefined;
      this._mdmAddress = undefined;
      this._mdmEnrollmentPort = undefined;
      this._name = undefined;
      this._os = undefined;
      this._portal2Fa = undefined;
      this._refreshConfig = undefined;
      this._saveUserCredentials = undefined;
      this._sourceUser = undefined;
      this._thirdPartyVpnClients = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentConfig.internalValue = value.agentConfig;
      this._agentUi.internalValue = value.agentUi;
      this._authenticationOverride.internalValue = value.authenticationOverride;
      this._autoDiscoveryExternalGateway2Fa = value.autoDiscoveryExternalGateway2Fa;
      this._certificate.internalValue = value.certificate;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._customChecks.internalValue = value.customChecks;
      this._gateways.internalValue = value.gateways;
      this._gpAppConfig.internalValue = value.gpAppConfig;
      this._hipCollection.internalValue = value.hipCollection;
      this._internalGateway2Fa = value.internalGateway2Fa;
      this._internalHostDetection.internalValue = value.internalHostDetection;
      this._internalHostDetectionV6.internalValue = value.internalHostDetectionV6;
      this._machineAccountExistsWithSerialno.internalValue = value.machineAccountExistsWithSerialno;
      this._manualOnlyGateway2Fa = value.manualOnlyGateway2Fa;
      this._mdmAddress = value.mdmAddress;
      this._mdmEnrollmentPort = value.mdmEnrollmentPort;
      this._name = value.name;
      this._os = value.os;
      this._portal2Fa = value.portal2Fa;
      this._refreshConfig = value.refreshConfig;
      this._saveUserCredentials = value.saveUserCredentials;
      this._sourceUser = value.sourceUser;
      this._thirdPartyVpnClients = value.thirdPartyVpnClients;
    }
  }

  // agent_config - computed: true, optional: true, required: false
  private _agentConfig = new DataPanosGlobalprotectPortalClientConfigConfigsAgentConfigOutputReference(this, "agent_config");
  public get agentConfig() {
    return this._agentConfig;
  }
  public putAgentConfig(value: DataPanosGlobalprotectPortalClientConfigConfigsAgentConfig) {
    this._agentConfig.internalValue = value;
  }
  public resetAgentConfig() {
    this._agentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConfigInput() {
    return this._agentConfig.internalValue;
  }

  // agent_ui - computed: true, optional: true, required: false
  private _agentUi = new DataPanosGlobalprotectPortalClientConfigConfigsAgentUiOutputReference(this, "agent_ui");
  public get agentUi() {
    return this._agentUi;
  }
  public putAgentUi(value: DataPanosGlobalprotectPortalClientConfigConfigsAgentUi) {
    this._agentUi.internalValue = value;
  }
  public resetAgentUi() {
    this._agentUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentUiInput() {
    return this._agentUi.internalValue;
  }

  // authentication_override - computed: true, optional: true, required: false
  private _authenticationOverride = new DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverrideOutputReference(this, "authentication_override");
  public get authenticationOverride() {
    return this._authenticationOverride;
  }
  public putAuthenticationOverride(value: DataPanosGlobalprotectPortalClientConfigConfigsAuthenticationOverride) {
    this._authenticationOverride.internalValue = value;
  }
  public resetAuthenticationOverride() {
    this._authenticationOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOverrideInput() {
    return this._authenticationOverride.internalValue;
  }

  // auto_discovery_external_gateway_2fa - computed: true, optional: true, required: false
  private _autoDiscoveryExternalGateway2Fa?: boolean | cdktf.IResolvable; 
  public get autoDiscoveryExternalGateway2Fa() {
    return this.getBooleanAttribute('auto_discovery_external_gateway_2fa');
  }
  public set autoDiscoveryExternalGateway2Fa(value: boolean | cdktf.IResolvable) {
    this._autoDiscoveryExternalGateway2Fa = value;
  }
  public resetAutoDiscoveryExternalGateway2Fa() {
    this._autoDiscoveryExternalGateway2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveryExternalGateway2FaInput() {
    return this._autoDiscoveryExternalGateway2Fa;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate = new DataPanosGlobalprotectPortalClientConfigConfigsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataPanosGlobalprotectPortalClientConfigConfigsCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate = new DataPanosGlobalprotectPortalClientConfigConfigsClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: DataPanosGlobalprotectPortalClientConfigConfigsClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // custom_checks - computed: true, optional: true, required: false
  private _customChecks = new DataPanosGlobalprotectPortalClientConfigConfigsCustomChecksOutputReference(this, "custom_checks");
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: DataPanosGlobalprotectPortalClientConfigConfigsCustomChecks) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }

  // gateways - computed: true, optional: true, required: false
  private _gateways = new DataPanosGlobalprotectPortalClientConfigConfigsGatewaysOutputReference(this, "gateways");
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: DataPanosGlobalprotectPortalClientConfigConfigsGateways) {
    this._gateways.internalValue = value;
  }
  public resetGateways() {
    this._gateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
  }

  // gp_app_config - computed: true, optional: true, required: false
  private _gpAppConfig = new DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfigOutputReference(this, "gp_app_config");
  public get gpAppConfig() {
    return this._gpAppConfig;
  }
  public putGpAppConfig(value: DataPanosGlobalprotectPortalClientConfigConfigsGpAppConfig) {
    this._gpAppConfig.internalValue = value;
  }
  public resetGpAppConfig() {
    this._gpAppConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpAppConfigInput() {
    return this._gpAppConfig.internalValue;
  }

  // hip_collection - computed: true, optional: true, required: false
  private _hipCollection = new DataPanosGlobalprotectPortalClientConfigConfigsHipCollectionOutputReference(this, "hip_collection");
  public get hipCollection() {
    return this._hipCollection;
  }
  public putHipCollection(value: DataPanosGlobalprotectPortalClientConfigConfigsHipCollection) {
    this._hipCollection.internalValue = value;
  }
  public resetHipCollection() {
    this._hipCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipCollectionInput() {
    return this._hipCollection.internalValue;
  }

  // internal_gateway_2fa - computed: true, optional: true, required: false
  private _internalGateway2Fa?: boolean | cdktf.IResolvable; 
  public get internalGateway2Fa() {
    return this.getBooleanAttribute('internal_gateway_2fa');
  }
  public set internalGateway2Fa(value: boolean | cdktf.IResolvable) {
    this._internalGateway2Fa = value;
  }
  public resetInternalGateway2Fa() {
    this._internalGateway2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalGateway2FaInput() {
    return this._internalGateway2Fa;
  }

  // internal_host_detection - computed: true, optional: true, required: false
  private _internalHostDetection = new DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionOutputReference(this, "internal_host_detection");
  public get internalHostDetection() {
    return this._internalHostDetection;
  }
  public putInternalHostDetection(value: DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetection) {
    this._internalHostDetection.internalValue = value;
  }
  public resetInternalHostDetection() {
    this._internalHostDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalHostDetectionInput() {
    return this._internalHostDetection.internalValue;
  }

  // internal_host_detection_v6 - computed: true, optional: true, required: false
  private _internalHostDetectionV6 = new DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6OutputReference(this, "internal_host_detection_v6");
  public get internalHostDetectionV6() {
    return this._internalHostDetectionV6;
  }
  public putInternalHostDetectionV6(value: DataPanosGlobalprotectPortalClientConfigConfigsInternalHostDetectionV6) {
    this._internalHostDetectionV6.internalValue = value;
  }
  public resetInternalHostDetectionV6() {
    this._internalHostDetectionV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalHostDetectionV6Input() {
    return this._internalHostDetectionV6.internalValue;
  }

  // machine_account_exists_with_serialno - computed: true, optional: true, required: false
  private _machineAccountExistsWithSerialno = new DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialnoOutputReference(this, "machine_account_exists_with_serialno");
  public get machineAccountExistsWithSerialno() {
    return this._machineAccountExistsWithSerialno;
  }
  public putMachineAccountExistsWithSerialno(value: DataPanosGlobalprotectPortalClientConfigConfigsMachineAccountExistsWithSerialno) {
    this._machineAccountExistsWithSerialno.internalValue = value;
  }
  public resetMachineAccountExistsWithSerialno() {
    this._machineAccountExistsWithSerialno.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineAccountExistsWithSerialnoInput() {
    return this._machineAccountExistsWithSerialno.internalValue;
  }

  // manual_only_gateway_2fa - computed: true, optional: true, required: false
  private _manualOnlyGateway2Fa?: boolean | cdktf.IResolvable; 
  public get manualOnlyGateway2Fa() {
    return this.getBooleanAttribute('manual_only_gateway_2fa');
  }
  public set manualOnlyGateway2Fa(value: boolean | cdktf.IResolvable) {
    this._manualOnlyGateway2Fa = value;
  }
  public resetManualOnlyGateway2Fa() {
    this._manualOnlyGateway2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualOnlyGateway2FaInput() {
    return this._manualOnlyGateway2Fa;
  }

  // mdm_address - computed: true, optional: true, required: false
  private _mdmAddress?: string; 
  public get mdmAddress() {
    return this.getStringAttribute('mdm_address');
  }
  public set mdmAddress(value: string) {
    this._mdmAddress = value;
  }
  public resetMdmAddress() {
    this._mdmAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmAddressInput() {
    return this._mdmAddress;
  }

  // mdm_enrollment_port - computed: true, optional: true, required: false
  private _mdmEnrollmentPort?: string; 
  public get mdmEnrollmentPort() {
    return this.getStringAttribute('mdm_enrollment_port');
  }
  public set mdmEnrollmentPort(value: string) {
    this._mdmEnrollmentPort = value;
  }
  public resetMdmEnrollmentPort() {
    this._mdmEnrollmentPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmEnrollmentPortInput() {
    return this._mdmEnrollmentPort;
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

  // os - computed: true, optional: true, required: false
  private _os?: string[]; 
  public get os() {
    return this.getListAttribute('os');
  }
  public set os(value: string[]) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // portal_2fa - computed: true, optional: true, required: false
  private _portal2Fa?: boolean | cdktf.IResolvable; 
  public get portal2Fa() {
    return this.getBooleanAttribute('portal_2fa');
  }
  public set portal2Fa(value: boolean | cdktf.IResolvable) {
    this._portal2Fa = value;
  }
  public resetPortal2Fa() {
    this._portal2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portal2FaInput() {
    return this._portal2Fa;
  }

  // refresh_config - computed: true, optional: true, required: false
  private _refreshConfig?: boolean | cdktf.IResolvable; 
  public get refreshConfig() {
    return this.getBooleanAttribute('refresh_config');
  }
  public set refreshConfig(value: boolean | cdktf.IResolvable) {
    this._refreshConfig = value;
  }
  public resetRefreshConfig() {
    this._refreshConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshConfigInput() {
    return this._refreshConfig;
  }

  // save_user_credentials - computed: true, optional: true, required: false
  private _saveUserCredentials?: string; 
  public get saveUserCredentials() {
    return this.getStringAttribute('save_user_credentials');
  }
  public set saveUserCredentials(value: string) {
    this._saveUserCredentials = value;
  }
  public resetSaveUserCredentials() {
    this._saveUserCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveUserCredentialsInput() {
    return this._saveUserCredentials;
  }

  // source_user - computed: true, optional: true, required: false
  private _sourceUser?: string[]; 
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }
  public set sourceUser(value: string[]) {
    this._sourceUser = value;
  }
  public resetSourceUser() {
    this._sourceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser;
  }

  // third_party_vpn_clients - computed: true, optional: true, required: false
  private _thirdPartyVpnClients?: string[]; 
  public get thirdPartyVpnClients() {
    return this.getListAttribute('third_party_vpn_clients');
  }
  public set thirdPartyVpnClients(value: string[]) {
    this._thirdPartyVpnClients = value;
  }
  public resetThirdPartyVpnClients() {
    this._thirdPartyVpnClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyVpnClientsInput() {
    return this._thirdPartyVpnClients;
  }
}

export class DataPanosGlobalprotectPortalClientConfigConfigsList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigConfigsOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfigRootCa {
  /**
  * Install in Trusted CA Certificate Store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#install_in_cert_store DataPanosGlobalprotectPortal#install_in_cert_store}
  */
  readonly installInCertStore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
}

export function dataPanosGlobalprotectPortalClientConfigRootCaToTerraform(struct?: DataPanosGlobalprotectPortalClientConfigRootCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    install_in_cert_store: cdktf.booleanToTerraform(struct!.installInCertStore),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosGlobalprotectPortalClientConfigRootCaToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfigRootCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    install_in_cert_store: {
      value: cdktf.booleanToHclTerraform(struct!.installInCertStore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigRootCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientConfigRootCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installInCertStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.installInCertStore = this._installInCertStore;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfigRootCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._installInCertStore = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._installInCertStore = value.installInCertStore;
      this._name = value.name;
    }
  }

  // install_in_cert_store - computed: true, optional: true, required: false
  private _installInCertStore?: boolean | cdktf.IResolvable; 
  public get installInCertStore() {
    return this.getBooleanAttribute('install_in_cert_store');
  }
  public set installInCertStore(value: boolean | cdktf.IResolvable) {
    this._installInCertStore = value;
  }
  public resetInstallInCertStore() {
    this._installInCertStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInCertStoreInput() {
    return this._installInCertStore;
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
}

export class DataPanosGlobalprotectPortalClientConfigRootCaList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientConfigRootCa[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientConfigRootCaOutputReference {
    return new DataPanosGlobalprotectPortalClientConfigRootCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientConfig {
  /**
  * Agent user override ticket key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#agent_user_override_key DataPanosGlobalprotectPortal#agent_user_override_key}
  */
  readonly agentUserOverrideKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#configs DataPanosGlobalprotectPortal#configs}
  */
  readonly configs?: DataPanosGlobalprotectPortalClientConfigConfigs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#root_ca DataPanosGlobalprotectPortal#root_ca}
  */
  readonly rootCa?: DataPanosGlobalprotectPortalClientConfigRootCa[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientConfigToTerraform(struct?: DataPanosGlobalprotectPortalClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_user_override_key: cdktf.stringToTerraform(struct!.agentUserOverrideKey),
    configs: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigConfigsToTerraform, false)(struct!.configs),
    root_ca: cdktf.listMapper(dataPanosGlobalprotectPortalClientConfigRootCaToTerraform, false)(struct!.rootCa),
  }
}


export function dataPanosGlobalprotectPortalClientConfigToHclTerraform(struct?: DataPanosGlobalprotectPortalClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_user_override_key: {
      value: cdktf.stringToHclTerraform(struct!.agentUserOverrideKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configs: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigConfigsToHclTerraform, false)(struct!.configs),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigConfigsList",
    },
    root_ca: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientConfigRootCaToHclTerraform, false)(struct!.rootCa),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientConfigRootCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentUserOverrideKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentUserOverrideKey = this._agentUserOverrideKey;
    }
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    if (this._rootCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCa = this._rootCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentUserOverrideKey = undefined;
      this._configs.internalValue = undefined;
      this._rootCa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentUserOverrideKey = value.agentUserOverrideKey;
      this._configs.internalValue = value.configs;
      this._rootCa.internalValue = value.rootCa;
    }
  }

  // agent_user_override_key - computed: true, optional: true, required: false
  private _agentUserOverrideKey?: string; 
  public get agentUserOverrideKey() {
    return this.getStringAttribute('agent_user_override_key');
  }
  public set agentUserOverrideKey(value: string) {
    this._agentUserOverrideKey = value;
  }
  public resetAgentUserOverrideKey() {
    this._agentUserOverrideKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentUserOverrideKeyInput() {
    return this._agentUserOverrideKey;
  }

  // configs - computed: true, optional: true, required: false
  private _configs = new DataPanosGlobalprotectPortalClientConfigConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: DataPanosGlobalprotectPortalClientConfigConfigs[] | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // root_ca - computed: true, optional: true, required: false
  private _rootCa = new DataPanosGlobalprotectPortalClientConfigRootCaList(this, "root_ca", false);
  public get rootCa() {
    return this._rootCa;
  }
  public putRootCa(value: DataPanosGlobalprotectPortalClientConfigRootCa[] | cdktf.IResolvable) {
    this._rootCa.internalValue = value;
  }
  public resetRootCa() {
    this._rootCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaInput() {
    return this._rootCa.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientlessVpnAppsToUserMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#applications DataPanosGlobalprotectPortal#applications}
  */
  readonly applications?: string[];
  /**
  * Display Global Protect Agent download link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#display_global_protect_agent_download_link DataPanosGlobalprotectPortal#display_global_protect_agent_download_link}
  */
  readonly displayGlobalProtectAgentDownloadLink?: boolean | cdktf.IResolvable;
  /**
  * URL browse bar to access unpublished clientless VPN applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#enable_custom_app_u_r_l_address_bar DataPanosGlobalprotectPortal#enable_custom_app_u_r_l_address_bar}
  */
  readonly enableCustomAppURLAddressBar?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#source_user DataPanosGlobalprotectPortal#source_user}
  */
  readonly sourceUser?: string[];
}

export function dataPanosGlobalprotectPortalClientlessVpnAppsToUserMappingToTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnAppsToUserMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    display_global_protect_agent_download_link: cdktf.booleanToTerraform(struct!.displayGlobalProtectAgentDownloadLink),
    enable_custom_app_u_r_l_address_bar: cdktf.booleanToTerraform(struct!.enableCustomAppURLAddressBar),
    name: cdktf.stringToTerraform(struct!.name),
    source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUser),
  }
}


export function dataPanosGlobalprotectPortalClientlessVpnAppsToUserMappingToHclTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnAppsToUserMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    display_global_protect_agent_download_link: {
      value: cdktf.booleanToHclTerraform(struct!.displayGlobalProtectAgentDownloadLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_custom_app_u_r_l_address_bar: {
      value: cdktf.booleanToHclTerraform(struct!.enableCustomAppURLAddressBar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_user: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUser),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientlessVpnAppsToUserMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientlessVpnAppsToUserMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._displayGlobalProtectAgentDownloadLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayGlobalProtectAgentDownloadLink = this._displayGlobalProtectAgentDownloadLink;
    }
    if (this._enableCustomAppURLAddressBar !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCustomAppURLAddressBar = this._enableCustomAppURLAddressBar;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUser = this._sourceUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientlessVpnAppsToUserMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications = undefined;
      this._displayGlobalProtectAgentDownloadLink = undefined;
      this._enableCustomAppURLAddressBar = undefined;
      this._name = undefined;
      this._sourceUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications = value.applications;
      this._displayGlobalProtectAgentDownloadLink = value.displayGlobalProtectAgentDownloadLink;
      this._enableCustomAppURLAddressBar = value.enableCustomAppURLAddressBar;
      this._name = value.name;
      this._sourceUser = value.sourceUser;
    }
  }

  // applications - computed: true, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // display_global_protect_agent_download_link - computed: true, optional: true, required: false
  private _displayGlobalProtectAgentDownloadLink?: boolean | cdktf.IResolvable; 
  public get displayGlobalProtectAgentDownloadLink() {
    return this.getBooleanAttribute('display_global_protect_agent_download_link');
  }
  public set displayGlobalProtectAgentDownloadLink(value: boolean | cdktf.IResolvable) {
    this._displayGlobalProtectAgentDownloadLink = value;
  }
  public resetDisplayGlobalProtectAgentDownloadLink() {
    this._displayGlobalProtectAgentDownloadLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayGlobalProtectAgentDownloadLinkInput() {
    return this._displayGlobalProtectAgentDownloadLink;
  }

  // enable_custom_app_u_r_l_address_bar - computed: true, optional: true, required: false
  private _enableCustomAppURLAddressBar?: boolean | cdktf.IResolvable; 
  public get enableCustomAppURLAddressBar() {
    return this.getBooleanAttribute('enable_custom_app_u_r_l_address_bar');
  }
  public set enableCustomAppURLAddressBar(value: boolean | cdktf.IResolvable) {
    this._enableCustomAppURLAddressBar = value;
  }
  public resetEnableCustomAppURLAddressBar() {
    this._enableCustomAppURLAddressBar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomAppURLAddressBarInput() {
    return this._enableCustomAppURLAddressBar;
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

  // source_user - computed: true, optional: true, required: false
  private _sourceUser?: string[]; 
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }
  public set sourceUser(value: string[]) {
    this._sourceUser = value;
  }
  public resetSourceUser() {
    this._sourceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser;
  }
}

export class DataPanosGlobalprotectPortalClientlessVpnAppsToUserMappingList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientlessVpnAppsToUserMapping[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientlessVpnAppsToUserMappingOutputReference {
    return new DataPanosGlobalprotectPortalClientlessVpnAppsToUserMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerification {
  /**
  * whether to block sessions if server's certificate is expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#block_expired_certificate DataPanosGlobalprotectPortal#block_expired_certificate}
  */
  readonly blockExpiredCertificate?: boolean | cdktf.IResolvable;
  /**
  * whether to block a session if cert. status can't be retrieved within timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#block_timeout_cert DataPanosGlobalprotectPortal#block_timeout_cert}
  */
  readonly blockTimeoutCert?: boolean | cdktf.IResolvable;
  /**
  * whether to block a session if cert. status is unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#block_unknown_cert DataPanosGlobalprotectPortal#block_unknown_cert}
  */
  readonly blockUnknownCert?: boolean | cdktf.IResolvable;
  /**
  * whether to block sessions if server's certificate is issued by untrusted CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#block_untrusted_issuer DataPanosGlobalprotectPortal#block_untrusted_issuer}
  */
  readonly blockUntrustedIssuer?: boolean | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerificationToTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_expired_certificate: cdktf.booleanToTerraform(struct!.blockExpiredCertificate),
    block_timeout_cert: cdktf.booleanToTerraform(struct!.blockTimeoutCert),
    block_unknown_cert: cdktf.booleanToTerraform(struct!.blockUnknownCert),
    block_untrusted_issuer: cdktf.booleanToTerraform(struct!.blockUntrustedIssuer),
  }
}


export function dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerificationToHclTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_expired_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.blockExpiredCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_timeout_cert: {
      value: cdktf.booleanToHclTerraform(struct!.blockTimeoutCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_unknown_cert: {
      value: cdktf.booleanToHclTerraform(struct!.blockUnknownCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_untrusted_issuer: {
      value: cdktf.booleanToHclTerraform(struct!.blockUntrustedIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockExpiredCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockExpiredCertificate = this._blockExpiredCertificate;
    }
    if (this._blockTimeoutCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTimeoutCert = this._blockTimeoutCert;
    }
    if (this._blockUnknownCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUnknownCert = this._blockUnknownCert;
    }
    if (this._blockUntrustedIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUntrustedIssuer = this._blockUntrustedIssuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockExpiredCertificate = undefined;
      this._blockTimeoutCert = undefined;
      this._blockUnknownCert = undefined;
      this._blockUntrustedIssuer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockExpiredCertificate = value.blockExpiredCertificate;
      this._blockTimeoutCert = value.blockTimeoutCert;
      this._blockUnknownCert = value.blockUnknownCert;
      this._blockUntrustedIssuer = value.blockUntrustedIssuer;
    }
  }

  // block_expired_certificate - computed: true, optional: true, required: false
  private _blockExpiredCertificate?: boolean | cdktf.IResolvable; 
  public get blockExpiredCertificate() {
    return this.getBooleanAttribute('block_expired_certificate');
  }
  public set blockExpiredCertificate(value: boolean | cdktf.IResolvable) {
    this._blockExpiredCertificate = value;
  }
  public resetBlockExpiredCertificate() {
    this._blockExpiredCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExpiredCertificateInput() {
    return this._blockExpiredCertificate;
  }

  // block_timeout_cert - computed: true, optional: true, required: false
  private _blockTimeoutCert?: boolean | cdktf.IResolvable; 
  public get blockTimeoutCert() {
    return this.getBooleanAttribute('block_timeout_cert');
  }
  public set blockTimeoutCert(value: boolean | cdktf.IResolvable) {
    this._blockTimeoutCert = value;
  }
  public resetBlockTimeoutCert() {
    this._blockTimeoutCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTimeoutCertInput() {
    return this._blockTimeoutCert;
  }

  // block_unknown_cert - computed: true, optional: true, required: false
  private _blockUnknownCert?: boolean | cdktf.IResolvable; 
  public get blockUnknownCert() {
    return this.getBooleanAttribute('block_unknown_cert');
  }
  public set blockUnknownCert(value: boolean | cdktf.IResolvable) {
    this._blockUnknownCert = value;
  }
  public resetBlockUnknownCert() {
    this._blockUnknownCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnknownCertInput() {
    return this._blockUnknownCert;
  }

  // block_untrusted_issuer - computed: true, optional: true, required: false
  private _blockUntrustedIssuer?: boolean | cdktf.IResolvable; 
  public get blockUntrustedIssuer() {
    return this.getBooleanAttribute('block_untrusted_issuer');
  }
  public set blockUntrustedIssuer(value: boolean | cdktf.IResolvable) {
    this._blockUntrustedIssuer = value;
  }
  public resetBlockUntrustedIssuer() {
    this._blockUntrustedIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUntrustedIssuerInput() {
    return this._blockUntrustedIssuer;
  }
}
export interface DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocol {
  /**
  * Allow authentication MD5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#auth_algo_md5 DataPanosGlobalprotectPortal#auth_algo_md5}
  */
  readonly authAlgoMd5?: boolean | cdktf.IResolvable;
  /**
  * Allow authentication SHA1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#auth_algo_sha1 DataPanosGlobalprotectPortal#auth_algo_sha1}
  */
  readonly authAlgoSha1?: boolean | cdktf.IResolvable;
  /**
  * Allow authentication SHA256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#auth_algo_sha256 DataPanosGlobalprotectPortal#auth_algo_sha256}
  */
  readonly authAlgoSha256?: boolean | cdktf.IResolvable;
  /**
  * Allow authentication SHA384
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#auth_algo_sha384 DataPanosGlobalprotectPortal#auth_algo_sha384}
  */
  readonly authAlgoSha384?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm 3DES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#enc_algo_3des DataPanosGlobalprotectPortal#enc_algo_3des}
  */
  readonly encAlgo3Des?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm AES-128-CBC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#enc_algo_aes_128_cbc DataPanosGlobalprotectPortal#enc_algo_aes_128_cbc}
  */
  readonly encAlgoAes128Cbc?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm AES-128-GCM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#enc_algo_aes_128_gcm DataPanosGlobalprotectPortal#enc_algo_aes_128_gcm}
  */
  readonly encAlgoAes128Gcm?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm AES-256-CBC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#enc_algo_aes_256_cbc DataPanosGlobalprotectPortal#enc_algo_aes_256_cbc}
  */
  readonly encAlgoAes256Cbc?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm AES-256-GCM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#enc_algo_aes_256_gcm DataPanosGlobalprotectPortal#enc_algo_aes_256_gcm}
  */
  readonly encAlgoAes256Gcm?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm RC4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#enc_algo_rc4 DataPanosGlobalprotectPortal#enc_algo_rc4}
  */
  readonly encAlgoRc4?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm DHE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#keyxchg_algo_dhe DataPanosGlobalprotectPortal#keyxchg_algo_dhe}
  */
  readonly keyxchgAlgoDhe?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm ECDHE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#keyxchg_algo_ecdhe DataPanosGlobalprotectPortal#keyxchg_algo_ecdhe}
  */
  readonly keyxchgAlgoEcdhe?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm RSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#keyxchg_algo_rsa DataPanosGlobalprotectPortal#keyxchg_algo_rsa}
  */
  readonly keyxchgAlgoRsa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#max_version DataPanosGlobalprotectPortal#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#min_version DataPanosGlobalprotectPortal#min_version}
  */
  readonly minVersion?: string;
}

export function dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocolToTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_algo_md5: cdktf.booleanToTerraform(struct!.authAlgoMd5),
    auth_algo_sha1: cdktf.booleanToTerraform(struct!.authAlgoSha1),
    auth_algo_sha256: cdktf.booleanToTerraform(struct!.authAlgoSha256),
    auth_algo_sha384: cdktf.booleanToTerraform(struct!.authAlgoSha384),
    enc_algo_3des: cdktf.booleanToTerraform(struct!.encAlgo3Des),
    enc_algo_aes_128_cbc: cdktf.booleanToTerraform(struct!.encAlgoAes128Cbc),
    enc_algo_aes_128_gcm: cdktf.booleanToTerraform(struct!.encAlgoAes128Gcm),
    enc_algo_aes_256_cbc: cdktf.booleanToTerraform(struct!.encAlgoAes256Cbc),
    enc_algo_aes_256_gcm: cdktf.booleanToTerraform(struct!.encAlgoAes256Gcm),
    enc_algo_rc4: cdktf.booleanToTerraform(struct!.encAlgoRc4),
    keyxchg_algo_dhe: cdktf.booleanToTerraform(struct!.keyxchgAlgoDhe),
    keyxchg_algo_ecdhe: cdktf.booleanToTerraform(struct!.keyxchgAlgoEcdhe),
    keyxchg_algo_rsa: cdktf.booleanToTerraform(struct!.keyxchgAlgoRsa),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocolToHclTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_algo_md5: {
      value: cdktf.booleanToHclTerraform(struct!.authAlgoMd5),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_algo_sha1: {
      value: cdktf.booleanToHclTerraform(struct!.authAlgoSha1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_algo_sha256: {
      value: cdktf.booleanToHclTerraform(struct!.authAlgoSha256),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_algo_sha384: {
      value: cdktf.booleanToHclTerraform(struct!.authAlgoSha384),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_3des: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgo3Des),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_aes_128_cbc: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoAes128Cbc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_aes_128_gcm: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoAes128Gcm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_aes_256_cbc: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoAes256Cbc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_aes_256_gcm: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoAes256Gcm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_rc4: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoRc4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyxchg_algo_dhe: {
      value: cdktf.booleanToHclTerraform(struct!.keyxchgAlgoDhe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyxchg_algo_ecdhe: {
      value: cdktf.booleanToHclTerraform(struct!.keyxchgAlgoEcdhe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyxchg_algo_rsa: {
      value: cdktf.booleanToHclTerraform(struct!.keyxchgAlgoRsa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authAlgoMd5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgoMd5 = this._authAlgoMd5;
    }
    if (this._authAlgoSha1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgoSha1 = this._authAlgoSha1;
    }
    if (this._authAlgoSha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgoSha256 = this._authAlgoSha256;
    }
    if (this._authAlgoSha384 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgoSha384 = this._authAlgoSha384;
    }
    if (this._encAlgo3Des !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgo3Des = this._encAlgo3Des;
    }
    if (this._encAlgoAes128Cbc !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoAes128Cbc = this._encAlgoAes128Cbc;
    }
    if (this._encAlgoAes128Gcm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoAes128Gcm = this._encAlgoAes128Gcm;
    }
    if (this._encAlgoAes256Cbc !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoAes256Cbc = this._encAlgoAes256Cbc;
    }
    if (this._encAlgoAes256Gcm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoAes256Gcm = this._encAlgoAes256Gcm;
    }
    if (this._encAlgoRc4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoRc4 = this._encAlgoRc4;
    }
    if (this._keyxchgAlgoDhe !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyxchgAlgoDhe = this._keyxchgAlgoDhe;
    }
    if (this._keyxchgAlgoEcdhe !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyxchgAlgoEcdhe = this._keyxchgAlgoEcdhe;
    }
    if (this._keyxchgAlgoRsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyxchgAlgoRsa = this._keyxchgAlgoRsa;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authAlgoMd5 = undefined;
      this._authAlgoSha1 = undefined;
      this._authAlgoSha256 = undefined;
      this._authAlgoSha384 = undefined;
      this._encAlgo3Des = undefined;
      this._encAlgoAes128Cbc = undefined;
      this._encAlgoAes128Gcm = undefined;
      this._encAlgoAes256Cbc = undefined;
      this._encAlgoAes256Gcm = undefined;
      this._encAlgoRc4 = undefined;
      this._keyxchgAlgoDhe = undefined;
      this._keyxchgAlgoEcdhe = undefined;
      this._keyxchgAlgoRsa = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authAlgoMd5 = value.authAlgoMd5;
      this._authAlgoSha1 = value.authAlgoSha1;
      this._authAlgoSha256 = value.authAlgoSha256;
      this._authAlgoSha384 = value.authAlgoSha384;
      this._encAlgo3Des = value.encAlgo3Des;
      this._encAlgoAes128Cbc = value.encAlgoAes128Cbc;
      this._encAlgoAes128Gcm = value.encAlgoAes128Gcm;
      this._encAlgoAes256Cbc = value.encAlgoAes256Cbc;
      this._encAlgoAes256Gcm = value.encAlgoAes256Gcm;
      this._encAlgoRc4 = value.encAlgoRc4;
      this._keyxchgAlgoDhe = value.keyxchgAlgoDhe;
      this._keyxchgAlgoEcdhe = value.keyxchgAlgoEcdhe;
      this._keyxchgAlgoRsa = value.keyxchgAlgoRsa;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // auth_algo_md5 - computed: true, optional: true, required: false
  private _authAlgoMd5?: boolean | cdktf.IResolvable; 
  public get authAlgoMd5() {
    return this.getBooleanAttribute('auth_algo_md5');
  }
  public set authAlgoMd5(value: boolean | cdktf.IResolvable) {
    this._authAlgoMd5 = value;
  }
  public resetAuthAlgoMd5() {
    this._authAlgoMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoMd5Input() {
    return this._authAlgoMd5;
  }

  // auth_algo_sha1 - computed: true, optional: true, required: false
  private _authAlgoSha1?: boolean | cdktf.IResolvable; 
  public get authAlgoSha1() {
    return this.getBooleanAttribute('auth_algo_sha1');
  }
  public set authAlgoSha1(value: boolean | cdktf.IResolvable) {
    this._authAlgoSha1 = value;
  }
  public resetAuthAlgoSha1() {
    this._authAlgoSha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoSha1Input() {
    return this._authAlgoSha1;
  }

  // auth_algo_sha256 - computed: true, optional: true, required: false
  private _authAlgoSha256?: boolean | cdktf.IResolvable; 
  public get authAlgoSha256() {
    return this.getBooleanAttribute('auth_algo_sha256');
  }
  public set authAlgoSha256(value: boolean | cdktf.IResolvable) {
    this._authAlgoSha256 = value;
  }
  public resetAuthAlgoSha256() {
    this._authAlgoSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoSha256Input() {
    return this._authAlgoSha256;
  }

  // auth_algo_sha384 - computed: true, optional: true, required: false
  private _authAlgoSha384?: boolean | cdktf.IResolvable; 
  public get authAlgoSha384() {
    return this.getBooleanAttribute('auth_algo_sha384');
  }
  public set authAlgoSha384(value: boolean | cdktf.IResolvable) {
    this._authAlgoSha384 = value;
  }
  public resetAuthAlgoSha384() {
    this._authAlgoSha384 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoSha384Input() {
    return this._authAlgoSha384;
  }

  // enc_algo_3des - computed: true, optional: true, required: false
  private _encAlgo3Des?: boolean | cdktf.IResolvable; 
  public get encAlgo3Des() {
    return this.getBooleanAttribute('enc_algo_3des');
  }
  public set encAlgo3Des(value: boolean | cdktf.IResolvable) {
    this._encAlgo3Des = value;
  }
  public resetEncAlgo3Des() {
    this._encAlgo3Des = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgo3DesInput() {
    return this._encAlgo3Des;
  }

  // enc_algo_aes_128_cbc - computed: true, optional: true, required: false
  private _encAlgoAes128Cbc?: boolean | cdktf.IResolvable; 
  public get encAlgoAes128Cbc() {
    return this.getBooleanAttribute('enc_algo_aes_128_cbc');
  }
  public set encAlgoAes128Cbc(value: boolean | cdktf.IResolvable) {
    this._encAlgoAes128Cbc = value;
  }
  public resetEncAlgoAes128Cbc() {
    this._encAlgoAes128Cbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoAes128CbcInput() {
    return this._encAlgoAes128Cbc;
  }

  // enc_algo_aes_128_gcm - computed: true, optional: true, required: false
  private _encAlgoAes128Gcm?: boolean | cdktf.IResolvable; 
  public get encAlgoAes128Gcm() {
    return this.getBooleanAttribute('enc_algo_aes_128_gcm');
  }
  public set encAlgoAes128Gcm(value: boolean | cdktf.IResolvable) {
    this._encAlgoAes128Gcm = value;
  }
  public resetEncAlgoAes128Gcm() {
    this._encAlgoAes128Gcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoAes128GcmInput() {
    return this._encAlgoAes128Gcm;
  }

  // enc_algo_aes_256_cbc - computed: true, optional: true, required: false
  private _encAlgoAes256Cbc?: boolean | cdktf.IResolvable; 
  public get encAlgoAes256Cbc() {
    return this.getBooleanAttribute('enc_algo_aes_256_cbc');
  }
  public set encAlgoAes256Cbc(value: boolean | cdktf.IResolvable) {
    this._encAlgoAes256Cbc = value;
  }
  public resetEncAlgoAes256Cbc() {
    this._encAlgoAes256Cbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoAes256CbcInput() {
    return this._encAlgoAes256Cbc;
  }

  // enc_algo_aes_256_gcm - computed: true, optional: true, required: false
  private _encAlgoAes256Gcm?: boolean | cdktf.IResolvable; 
  public get encAlgoAes256Gcm() {
    return this.getBooleanAttribute('enc_algo_aes_256_gcm');
  }
  public set encAlgoAes256Gcm(value: boolean | cdktf.IResolvable) {
    this._encAlgoAes256Gcm = value;
  }
  public resetEncAlgoAes256Gcm() {
    this._encAlgoAes256Gcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoAes256GcmInput() {
    return this._encAlgoAes256Gcm;
  }

  // enc_algo_rc4 - computed: true, optional: true, required: false
  private _encAlgoRc4?: boolean | cdktf.IResolvable; 
  public get encAlgoRc4() {
    return this.getBooleanAttribute('enc_algo_rc4');
  }
  public set encAlgoRc4(value: boolean | cdktf.IResolvable) {
    this._encAlgoRc4 = value;
  }
  public resetEncAlgoRc4() {
    this._encAlgoRc4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoRc4Input() {
    return this._encAlgoRc4;
  }

  // keyxchg_algo_dhe - computed: true, optional: true, required: false
  private _keyxchgAlgoDhe?: boolean | cdktf.IResolvable; 
  public get keyxchgAlgoDhe() {
    return this.getBooleanAttribute('keyxchg_algo_dhe');
  }
  public set keyxchgAlgoDhe(value: boolean | cdktf.IResolvable) {
    this._keyxchgAlgoDhe = value;
  }
  public resetKeyxchgAlgoDhe() {
    this._keyxchgAlgoDhe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyxchgAlgoDheInput() {
    return this._keyxchgAlgoDhe;
  }

  // keyxchg_algo_ecdhe - computed: true, optional: true, required: false
  private _keyxchgAlgoEcdhe?: boolean | cdktf.IResolvable; 
  public get keyxchgAlgoEcdhe() {
    return this.getBooleanAttribute('keyxchg_algo_ecdhe');
  }
  public set keyxchgAlgoEcdhe(value: boolean | cdktf.IResolvable) {
    this._keyxchgAlgoEcdhe = value;
  }
  public resetKeyxchgAlgoEcdhe() {
    this._keyxchgAlgoEcdhe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyxchgAlgoEcdheInput() {
    return this._keyxchgAlgoEcdhe;
  }

  // keyxchg_algo_rsa - computed: true, optional: true, required: false
  private _keyxchgAlgoRsa?: boolean | cdktf.IResolvable; 
  public get keyxchgAlgoRsa() {
    return this.getBooleanAttribute('keyxchg_algo_rsa');
  }
  public set keyxchgAlgoRsa(value: boolean | cdktf.IResolvable) {
    this._keyxchgAlgoRsa = value;
  }
  public resetKeyxchgAlgoRsa() {
    this._keyxchgAlgoRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyxchgAlgoRsaInput() {
    return this._keyxchgAlgoRsa;
  }

  // max_version - computed: true, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: true, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface DataPanosGlobalprotectPortalClientlessVpnCryptoSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#server_cert_verification DataPanosGlobalprotectPortal#server_cert_verification}
  */
  readonly serverCertVerification?: DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ssl_protocol DataPanosGlobalprotectPortal#ssl_protocol}
  */
  readonly sslProtocol?: DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocol;
}

export function dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsToTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnCryptoSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_cert_verification: dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerificationToTerraform(struct!.serverCertVerification),
    ssl_protocol: dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocolToTerraform(struct!.sslProtocol),
  }
}


export function dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsToHclTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnCryptoSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_cert_verification: {
      value: dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerificationToHclTerraform(struct!.serverCertVerification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerification",
    },
    ssl_protocol: {
      value: dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocolToHclTerraform(struct!.sslProtocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocol",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientlessVpnCryptoSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverCertVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertVerification = this._serverCertVerification?.internalValue;
    }
    if (this._sslProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProtocol = this._sslProtocol?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientlessVpnCryptoSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverCertVerification.internalValue = undefined;
      this._sslProtocol.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverCertVerification.internalValue = value.serverCertVerification;
      this._sslProtocol.internalValue = value.sslProtocol;
    }
  }

  // server_cert_verification - computed: true, optional: true, required: false
  private _serverCertVerification = new DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerificationOutputReference(this, "server_cert_verification");
  public get serverCertVerification() {
    return this._serverCertVerification;
  }
  public putServerCertVerification(value: DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsServerCertVerification) {
    this._serverCertVerification.internalValue = value;
  }
  public resetServerCertVerification() {
    this._serverCertVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertVerificationInput() {
    return this._serverCertVerification.internalValue;
  }

  // ssl_protocol - computed: true, optional: true, required: false
  private _sslProtocol = new DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocolOutputReference(this, "ssl_protocol");
  public get sslProtocol() {
    return this._sslProtocol;
  }
  public putSslProtocol(value: DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsSslProtocol) {
    this._sslProtocol.internalValue = value;
  }
  public resetSslProtocol() {
    this._sslProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalClientlessVpnInactivityLogout {
  /**
  * specify inactivity time in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#hours DataPanosGlobalprotectPortal#hours}
  */
  readonly hours?: number;
  /**
  * specify inactivity time in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#minutes DataPanosGlobalprotectPortal#minutes}
  */
  readonly minutes?: number;
}

export function dataPanosGlobalprotectPortalClientlessVpnInactivityLogoutToTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnInactivityLogout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function dataPanosGlobalprotectPortalClientlessVpnInactivityLogoutToHclTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnInactivityLogout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientlessVpnInactivityLogoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientlessVpnInactivityLogout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientlessVpnInactivityLogout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface DataPanosGlobalprotectPortalClientlessVpnLoginLifetime {
  /**
  * specify lifetime in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#hours DataPanosGlobalprotectPortal#hours}
  */
  readonly hours?: number;
  /**
  * specify lifetime in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#minutes DataPanosGlobalprotectPortal#minutes}
  */
  readonly minutes?: number;
}

export function dataPanosGlobalprotectPortalClientlessVpnLoginLifetimeToTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnLoginLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function dataPanosGlobalprotectPortalClientlessVpnLoginLifetimeToHclTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnLoginLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientlessVpnLoginLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientlessVpnLoginLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientlessVpnLoginLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServer {
  /**
  * Proxy password to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#password DataPanosGlobalprotectPortal#password}
  */
  readonly password?: string;
  /**
  * Port for proxy server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#port DataPanosGlobalprotectPortal#port}
  */
  readonly port?: number;
  /**
  * Proxy server to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#server DataPanosGlobalprotectPortal#server}
  */
  readonly server?: string;
  /**
  * Proxy user name to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#user DataPanosGlobalprotectPortal#user}
  */
  readonly user?: string;
}

export function dataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServerToTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    server: cdktf.stringToTerraform(struct!.server),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServerToHclTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._port = undefined;
      this._server = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._port = value.port;
      this._server = value.server;
      this._user = value.user;
    }
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataPanosGlobalprotectPortalClientlessVpnProxyServerSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#domains DataPanosGlobalprotectPortal#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#proxy_server DataPanosGlobalprotectPortal#proxy_server}
  */
  readonly proxyServer?: DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServer;
  /**
  * Whether to use proxy server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#use_proxy DataPanosGlobalprotectPortal#use_proxy}
  */
  readonly useProxy?: boolean | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalClientlessVpnProxyServerSettingToTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnProxyServerSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    name: cdktf.stringToTerraform(struct!.name),
    proxy_server: dataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServerToTerraform(struct!.proxyServer),
    use_proxy: cdktf.booleanToTerraform(struct!.useProxy),
  }
}


export function dataPanosGlobalprotectPortalClientlessVpnProxyServerSettingToHclTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpnProxyServerSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_server: {
      value: dataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServerToHclTerraform(struct!.proxyServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServer",
    },
    use_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.useProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalClientlessVpnProxyServerSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._proxyServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyServer = this._proxyServer?.internalValue;
    }
    if (this._useProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxy = this._useProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientlessVpnProxyServerSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domains = undefined;
      this._name = undefined;
      this._proxyServer.internalValue = undefined;
      this._useProxy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domains = value.domains;
      this._name = value.name;
      this._proxyServer.internalValue = value.proxyServer;
      this._useProxy = value.useProxy;
    }
  }

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
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

  // proxy_server - computed: true, optional: true, required: false
  private _proxyServer = new DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServerOutputReference(this, "proxy_server");
  public get proxyServer() {
    return this._proxyServer;
  }
  public putProxyServer(value: DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingProxyServer) {
    this._proxyServer.internalValue = value;
  }
  public resetProxyServer() {
    this._proxyServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerInput() {
    return this._proxyServer.internalValue;
  }

  // use_proxy - computed: true, optional: true, required: false
  private _useProxy?: boolean | cdktf.IResolvable; 
  public get useProxy() {
    return this.getBooleanAttribute('use_proxy');
  }
  public set useProxy(value: boolean | cdktf.IResolvable) {
    this._useProxy = value;
  }
  public resetUseProxy() {
    this._useProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyInput() {
    return this._useProxy;
  }
}

export class DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalClientlessVpnProxyServerSetting[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingOutputReference {
    return new DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalClientlessVpn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#apps_to_user_mapping DataPanosGlobalprotectPortal#apps_to_user_mapping}
  */
  readonly appsToUserMapping?: DataPanosGlobalprotectPortalClientlessVpnAppsToUserMapping[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#crypto_settings DataPanosGlobalprotectPortal#crypto_settings}
  */
  readonly cryptoSettings?: DataPanosGlobalprotectPortalClientlessVpnCryptoSettings;
  /**
  * DNS proxy object used for resolving clientless-vpn application hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#dns_proxy DataPanosGlobalprotectPortal#dns_proxy}
  */
  readonly dnsProxy?: string;
  /**
  * FQDN or IP address of GlobalProtect Portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#hostname DataPanosGlobalprotectPortal#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#inactivity_logout DataPanosGlobalprotectPortal#inactivity_logout}
  */
  readonly inactivityLogout?: DataPanosGlobalprotectPortalClientlessVpnInactivityLogout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#login_lifetime DataPanosGlobalprotectPortal#login_lifetime}
  */
  readonly loginLifetime?: DataPanosGlobalprotectPortalClientlessVpnLoginLifetime;
  /**
  * max number of concurrent logined users to GlobalProtect portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#max_user DataPanosGlobalprotectPortal#max_user}
  */
  readonly maxUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#proxy_server_setting DataPanosGlobalprotectPortal#proxy_server_setting}
  */
  readonly proxyServerSetting?: DataPanosGlobalprotectPortalClientlessVpnProxyServerSetting[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#rewrite_exclude_domain_list DataPanosGlobalprotectPortal#rewrite_exclude_domain_list}
  */
  readonly rewriteExcludeDomainList?: string[];
  /**
  * Zone to be used for clientless-vpn traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#security_zone DataPanosGlobalprotectPortal#security_zone}
  */
  readonly securityZone?: string;
}

export function dataPanosGlobalprotectPortalClientlessVpnToTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps_to_user_mapping: cdktf.listMapper(dataPanosGlobalprotectPortalClientlessVpnAppsToUserMappingToTerraform, false)(struct!.appsToUserMapping),
    crypto_settings: dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsToTerraform(struct!.cryptoSettings),
    dns_proxy: cdktf.stringToTerraform(struct!.dnsProxy),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    inactivity_logout: dataPanosGlobalprotectPortalClientlessVpnInactivityLogoutToTerraform(struct!.inactivityLogout),
    login_lifetime: dataPanosGlobalprotectPortalClientlessVpnLoginLifetimeToTerraform(struct!.loginLifetime),
    max_user: cdktf.numberToTerraform(struct!.maxUser),
    proxy_server_setting: cdktf.listMapper(dataPanosGlobalprotectPortalClientlessVpnProxyServerSettingToTerraform, false)(struct!.proxyServerSetting),
    rewrite_exclude_domain_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rewriteExcludeDomainList),
    security_zone: cdktf.stringToTerraform(struct!.securityZone),
  }
}


export function dataPanosGlobalprotectPortalClientlessVpnToHclTerraform(struct?: DataPanosGlobalprotectPortalClientlessVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps_to_user_mapping: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientlessVpnAppsToUserMappingToHclTerraform, false)(struct!.appsToUserMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientlessVpnAppsToUserMappingList",
    },
    crypto_settings: {
      value: dataPanosGlobalprotectPortalClientlessVpnCryptoSettingsToHclTerraform(struct!.cryptoSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientlessVpnCryptoSettings",
    },
    dns_proxy: {
      value: cdktf.stringToHclTerraform(struct!.dnsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inactivity_logout: {
      value: dataPanosGlobalprotectPortalClientlessVpnInactivityLogoutToHclTerraform(struct!.inactivityLogout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientlessVpnInactivityLogout",
    },
    login_lifetime: {
      value: dataPanosGlobalprotectPortalClientlessVpnLoginLifetimeToHclTerraform(struct!.loginLifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalClientlessVpnLoginLifetime",
    },
    max_user: {
      value: cdktf.numberToHclTerraform(struct!.maxUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_server_setting: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalClientlessVpnProxyServerSettingToHclTerraform, false)(struct!.proxyServerSetting),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingList",
    },
    rewrite_exclude_domain_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rewriteExcludeDomainList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_zone: {
      value: cdktf.stringToHclTerraform(struct!.securityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalClientlessVpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalClientlessVpn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appsToUserMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsToUserMapping = this._appsToUserMapping?.internalValue;
    }
    if (this._cryptoSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoSettings = this._cryptoSettings?.internalValue;
    }
    if (this._dnsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsProxy = this._dnsProxy;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._inactivityLogout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityLogout = this._inactivityLogout?.internalValue;
    }
    if (this._loginLifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginLifetime = this._loginLifetime?.internalValue;
    }
    if (this._maxUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUser = this._maxUser;
    }
    if (this._proxyServerSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyServerSetting = this._proxyServerSetting?.internalValue;
    }
    if (this._rewriteExcludeDomainList !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteExcludeDomainList = this._rewriteExcludeDomainList;
    }
    if (this._securityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityZone = this._securityZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalClientlessVpn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appsToUserMapping.internalValue = undefined;
      this._cryptoSettings.internalValue = undefined;
      this._dnsProxy = undefined;
      this._hostname = undefined;
      this._inactivityLogout.internalValue = undefined;
      this._loginLifetime.internalValue = undefined;
      this._maxUser = undefined;
      this._proxyServerSetting.internalValue = undefined;
      this._rewriteExcludeDomainList = undefined;
      this._securityZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appsToUserMapping.internalValue = value.appsToUserMapping;
      this._cryptoSettings.internalValue = value.cryptoSettings;
      this._dnsProxy = value.dnsProxy;
      this._hostname = value.hostname;
      this._inactivityLogout.internalValue = value.inactivityLogout;
      this._loginLifetime.internalValue = value.loginLifetime;
      this._maxUser = value.maxUser;
      this._proxyServerSetting.internalValue = value.proxyServerSetting;
      this._rewriteExcludeDomainList = value.rewriteExcludeDomainList;
      this._securityZone = value.securityZone;
    }
  }

  // apps_to_user_mapping - computed: true, optional: true, required: false
  private _appsToUserMapping = new DataPanosGlobalprotectPortalClientlessVpnAppsToUserMappingList(this, "apps_to_user_mapping", false);
  public get appsToUserMapping() {
    return this._appsToUserMapping;
  }
  public putAppsToUserMapping(value: DataPanosGlobalprotectPortalClientlessVpnAppsToUserMapping[] | cdktf.IResolvable) {
    this._appsToUserMapping.internalValue = value;
  }
  public resetAppsToUserMapping() {
    this._appsToUserMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsToUserMappingInput() {
    return this._appsToUserMapping.internalValue;
  }

  // crypto_settings - computed: true, optional: true, required: false
  private _cryptoSettings = new DataPanosGlobalprotectPortalClientlessVpnCryptoSettingsOutputReference(this, "crypto_settings");
  public get cryptoSettings() {
    return this._cryptoSettings;
  }
  public putCryptoSettings(value: DataPanosGlobalprotectPortalClientlessVpnCryptoSettings) {
    this._cryptoSettings.internalValue = value;
  }
  public resetCryptoSettings() {
    this._cryptoSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoSettingsInput() {
    return this._cryptoSettings.internalValue;
  }

  // dns_proxy - computed: true, optional: true, required: false
  private _dnsProxy?: string; 
  public get dnsProxy() {
    return this.getStringAttribute('dns_proxy');
  }
  public set dnsProxy(value: string) {
    this._dnsProxy = value;
  }
  public resetDnsProxy() {
    this._dnsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProxyInput() {
    return this._dnsProxy;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // inactivity_logout - computed: true, optional: true, required: false
  private _inactivityLogout = new DataPanosGlobalprotectPortalClientlessVpnInactivityLogoutOutputReference(this, "inactivity_logout");
  public get inactivityLogout() {
    return this._inactivityLogout;
  }
  public putInactivityLogout(value: DataPanosGlobalprotectPortalClientlessVpnInactivityLogout) {
    this._inactivityLogout.internalValue = value;
  }
  public resetInactivityLogout() {
    this._inactivityLogout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityLogoutInput() {
    return this._inactivityLogout.internalValue;
  }

  // login_lifetime - computed: true, optional: true, required: false
  private _loginLifetime = new DataPanosGlobalprotectPortalClientlessVpnLoginLifetimeOutputReference(this, "login_lifetime");
  public get loginLifetime() {
    return this._loginLifetime;
  }
  public putLoginLifetime(value: DataPanosGlobalprotectPortalClientlessVpnLoginLifetime) {
    this._loginLifetime.internalValue = value;
  }
  public resetLoginLifetime() {
    this._loginLifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginLifetimeInput() {
    return this._loginLifetime.internalValue;
  }

  // max_user - computed: true, optional: true, required: false
  private _maxUser?: number; 
  public get maxUser() {
    return this.getNumberAttribute('max_user');
  }
  public set maxUser(value: number) {
    this._maxUser = value;
  }
  public resetMaxUser() {
    this._maxUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserInput() {
    return this._maxUser;
  }

  // proxy_server_setting - computed: true, optional: true, required: false
  private _proxyServerSetting = new DataPanosGlobalprotectPortalClientlessVpnProxyServerSettingList(this, "proxy_server_setting", false);
  public get proxyServerSetting() {
    return this._proxyServerSetting;
  }
  public putProxyServerSetting(value: DataPanosGlobalprotectPortalClientlessVpnProxyServerSetting[] | cdktf.IResolvable) {
    this._proxyServerSetting.internalValue = value;
  }
  public resetProxyServerSetting() {
    this._proxyServerSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerSettingInput() {
    return this._proxyServerSetting.internalValue;
  }

  // rewrite_exclude_domain_list - computed: true, optional: true, required: false
  private _rewriteExcludeDomainList?: string[]; 
  public get rewriteExcludeDomainList() {
    return this.getListAttribute('rewrite_exclude_domain_list');
  }
  public set rewriteExcludeDomainList(value: string[]) {
    this._rewriteExcludeDomainList = value;
  }
  public resetRewriteExcludeDomainList() {
    this._rewriteExcludeDomainList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteExcludeDomainListInput() {
    return this._rewriteExcludeDomainList;
  }

  // security_zone - computed: true, optional: true, required: false
  private _securityZone?: string; 
  public get securityZone() {
    return this.getStringAttribute('security_zone');
  }
  public set securityZone(value: string) {
    this._securityZone = value;
  }
  public resetSecurityZone() {
    this._securityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneInput() {
    return this._securityZone;
  }
}
export interface DataPanosGlobalprotectPortalLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ngfw_device DataPanosGlobalprotectPortal#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#panorama_device DataPanosGlobalprotectPortal#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosGlobalprotectPortalLocationTemplateToTerraform(struct?: DataPanosGlobalprotectPortalLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosGlobalprotectPortalLocationTemplateToHclTerraform(struct?: DataPanosGlobalprotectPortalLocationTemplate | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosGlobalprotectPortalLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ngfw_device DataPanosGlobalprotectPortal#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#panorama_device DataPanosGlobalprotectPortal#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosGlobalprotectPortalLocationTemplateStackToTerraform(struct?: DataPanosGlobalprotectPortalLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosGlobalprotectPortalLocationTemplateStackToHclTerraform(struct?: DataPanosGlobalprotectPortalLocationTemplateStack | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosGlobalprotectPortalLocationTemplateStackVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ngfw_device DataPanosGlobalprotectPortal#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#panorama_device DataPanosGlobalprotectPortal#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#template_stack DataPanosGlobalprotectPortal#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#vsys DataPanosGlobalprotectPortal#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosGlobalprotectPortalLocationTemplateStackVsysToTerraform(struct?: DataPanosGlobalprotectPortalLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template_stack: cdktf.stringToTerraform(struct!.templateStack),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function dataPanosGlobalprotectPortalLocationTemplateStackVsysToHclTerraform(struct?: DataPanosGlobalprotectPortalLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_stack: {
      value: cdktf.stringToHclTerraform(struct!.templateStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalLocationTemplateStackVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._templateStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._templateStack = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._templateStack = value.templateStack;
      this._vsys = value.vsys;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // template_stack - computed: true, optional: true, required: false
  private _templateStack?: string; 
  public get templateStack() {
    return this.getStringAttribute('template_stack');
  }
  public set templateStack(value: string) {
    this._templateStack = value;
  }
  public resetTemplateStack() {
    this._templateStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface DataPanosGlobalprotectPortalLocationTemplateVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ngfw_device DataPanosGlobalprotectPortal#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#panorama_device DataPanosGlobalprotectPortal#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#template DataPanosGlobalprotectPortal#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#vsys DataPanosGlobalprotectPortal#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosGlobalprotectPortalLocationTemplateVsysToTerraform(struct?: DataPanosGlobalprotectPortalLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template: cdktf.stringToTerraform(struct!.template),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function dataPanosGlobalprotectPortalLocationTemplateVsysToHclTerraform(struct?: DataPanosGlobalprotectPortalLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalLocationTemplateVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalLocationTemplateVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._template = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._template = value.template;
      this._vsys = value.vsys;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface DataPanosGlobalprotectPortalLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ngfw_device DataPanosGlobalprotectPortal#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosGlobalprotectPortalLocationVsysToTerraform(struct?: DataPanosGlobalprotectPortalLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosGlobalprotectPortalLocationVsysToHclTerraform(struct?: DataPanosGlobalprotectPortalLocationVsys | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalLocationVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalLocationVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface DataPanosGlobalprotectPortalLocation {
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#template DataPanosGlobalprotectPortal#template}
  */
  readonly template?: DataPanosGlobalprotectPortalLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#template_stack DataPanosGlobalprotectPortal#template_stack}
  */
  readonly templateStack?: DataPanosGlobalprotectPortalLocationTemplateStack;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#template_stack_vsys DataPanosGlobalprotectPortal#template_stack_vsys}
  */
  readonly templateStackVsys?: DataPanosGlobalprotectPortalLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#template_vsys DataPanosGlobalprotectPortal#template_vsys}
  */
  readonly templateVsys?: DataPanosGlobalprotectPortalLocationTemplateVsys;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#vsys DataPanosGlobalprotectPortal#vsys}
  */
  readonly vsys?: DataPanosGlobalprotectPortalLocationVsys;
}

export function dataPanosGlobalprotectPortalLocationToTerraform(struct?: DataPanosGlobalprotectPortalLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataPanosGlobalprotectPortalLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosGlobalprotectPortalLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: dataPanosGlobalprotectPortalLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: dataPanosGlobalprotectPortalLocationTemplateVsysToTerraform(struct!.templateVsys),
    vsys: dataPanosGlobalprotectPortalLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosGlobalprotectPortalLocationToHclTerraform(struct?: DataPanosGlobalprotectPortalLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataPanosGlobalprotectPortalLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalLocationTemplate",
    },
    template_stack: {
      value: dataPanosGlobalprotectPortalLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalLocationTemplateStack",
    },
    template_stack_vsys: {
      value: dataPanosGlobalprotectPortalLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalLocationTemplateStackVsys",
    },
    template_vsys: {
      value: dataPanosGlobalprotectPortalLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalLocationTemplateVsys",
    },
    vsys: {
      value: dataPanosGlobalprotectPortalLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    if (this._templateStackVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStackVsys = this._templateStackVsys?.internalValue;
    }
    if (this._templateVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVsys = this._templateVsys?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._templateStackVsys.internalValue = undefined;
      this._templateVsys.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
      this._templateStackVsys.internalValue = value.templateStackVsys;
      this._templateVsys.internalValue = value.templateVsys;
      this._vsys.internalValue = value.vsys;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosGlobalprotectPortalLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosGlobalprotectPortalLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new DataPanosGlobalprotectPortalLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosGlobalprotectPortalLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }

  // template_stack_vsys - computed: false, optional: true, required: false
  private _templateStackVsys = new DataPanosGlobalprotectPortalLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: DataPanosGlobalprotectPortalLocationTemplateStackVsys) {
    this._templateStackVsys.internalValue = value;
  }
  public resetTemplateStackVsys() {
    this._templateStackVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackVsysInput() {
    return this._templateStackVsys.internalValue;
  }

  // template_vsys - computed: false, optional: true, required: false
  private _templateVsys = new DataPanosGlobalprotectPortalLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: DataPanosGlobalprotectPortalLocationTemplateVsys) {
    this._templateVsys.internalValue = value;
  }
  public resetTemplateVsys() {
    this._templateVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVsysInput() {
    return this._templateVsys.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new DataPanosGlobalprotectPortalLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosGlobalprotectPortalLocationVsys) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalPortalConfigClientAuth {
  /**
  * Authentication Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#authentication_message DataPanosGlobalprotectPortal#authentication_message}
  */
  readonly authenticationMessage?: string;
  /**
  * authentication profile used for this GlobalProtect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#authentication_profile DataPanosGlobalprotectPortal#authentication_profile}
  */
  readonly authenticationProfile?: string;
  /**
  * Automatically retrieve passcode from SoftToken application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#auto_retrieve_passcode DataPanosGlobalprotectPortal#auto_retrieve_passcode}
  */
  readonly autoRetrievePasscode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Client OS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#os DataPanosGlobalprotectPortal#os}
  */
  readonly os?: string;
  /**
  * Password Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#password_label DataPanosGlobalprotectPortal#password_label}
  */
  readonly passwordLabel?: string;
  /**
  * Allow Authentication with User Credentials OR Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#user_credential_or_client_cert_required DataPanosGlobalprotectPortal#user_credential_or_client_cert_required}
  */
  readonly userCredentialOrClientCertRequired?: string;
  /**
  * Username Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#username_label DataPanosGlobalprotectPortal#username_label}
  */
  readonly usernameLabel?: string;
}

export function dataPanosGlobalprotectPortalPortalConfigClientAuthToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigClientAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_message: cdktf.stringToTerraform(struct!.authenticationMessage),
    authentication_profile: cdktf.stringToTerraform(struct!.authenticationProfile),
    auto_retrieve_passcode: cdktf.booleanToTerraform(struct!.autoRetrievePasscode),
    name: cdktf.stringToTerraform(struct!.name),
    os: cdktf.stringToTerraform(struct!.os),
    password_label: cdktf.stringToTerraform(struct!.passwordLabel),
    user_credential_or_client_cert_required: cdktf.stringToTerraform(struct!.userCredentialOrClientCertRequired),
    username_label: cdktf.stringToTerraform(struct!.usernameLabel),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigClientAuthToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigClientAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_message: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_profile: {
      value: cdktf.stringToHclTerraform(struct!.authenticationProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_retrieve_passcode: {
      value: cdktf.booleanToHclTerraform(struct!.autoRetrievePasscode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_label: {
      value: cdktf.stringToHclTerraform(struct!.passwordLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_credential_or_client_cert_required: {
      value: cdktf.stringToHclTerraform(struct!.userCredentialOrClientCertRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_label: {
      value: cdktf.stringToHclTerraform(struct!.usernameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigClientAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfigClientAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMessage = this._authenticationMessage;
    }
    if (this._authenticationProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationProfile = this._authenticationProfile;
    }
    if (this._autoRetrievePasscode !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRetrievePasscode = this._autoRetrievePasscode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._passwordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordLabel = this._passwordLabel;
    }
    if (this._userCredentialOrClientCertRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCredentialOrClientCertRequired = this._userCredentialOrClientCertRequired;
    }
    if (this._usernameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameLabel = this._usernameLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfigClientAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationMessage = undefined;
      this._authenticationProfile = undefined;
      this._autoRetrievePasscode = undefined;
      this._name = undefined;
      this._os = undefined;
      this._passwordLabel = undefined;
      this._userCredentialOrClientCertRequired = undefined;
      this._usernameLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationMessage = value.authenticationMessage;
      this._authenticationProfile = value.authenticationProfile;
      this._autoRetrievePasscode = value.autoRetrievePasscode;
      this._name = value.name;
      this._os = value.os;
      this._passwordLabel = value.passwordLabel;
      this._userCredentialOrClientCertRequired = value.userCredentialOrClientCertRequired;
      this._usernameLabel = value.usernameLabel;
    }
  }

  // authentication_message - computed: true, optional: true, required: false
  private _authenticationMessage?: string; 
  public get authenticationMessage() {
    return this.getStringAttribute('authentication_message');
  }
  public set authenticationMessage(value: string) {
    this._authenticationMessage = value;
  }
  public resetAuthenticationMessage() {
    this._authenticationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMessageInput() {
    return this._authenticationMessage;
  }

  // authentication_profile - computed: true, optional: true, required: false
  private _authenticationProfile?: string; 
  public get authenticationProfile() {
    return this.getStringAttribute('authentication_profile');
  }
  public set authenticationProfile(value: string) {
    this._authenticationProfile = value;
  }
  public resetAuthenticationProfile() {
    this._authenticationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileInput() {
    return this._authenticationProfile;
  }

  // auto_retrieve_passcode - computed: true, optional: true, required: false
  private _autoRetrievePasscode?: boolean | cdktf.IResolvable; 
  public get autoRetrievePasscode() {
    return this.getBooleanAttribute('auto_retrieve_passcode');
  }
  public set autoRetrievePasscode(value: boolean | cdktf.IResolvable) {
    this._autoRetrievePasscode = value;
  }
  public resetAutoRetrievePasscode() {
    this._autoRetrievePasscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRetrievePasscodeInput() {
    return this._autoRetrievePasscode;
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

  // os - computed: true, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // password_label - computed: true, optional: true, required: false
  private _passwordLabel?: string; 
  public get passwordLabel() {
    return this.getStringAttribute('password_label');
  }
  public set passwordLabel(value: string) {
    this._passwordLabel = value;
  }
  public resetPasswordLabel() {
    this._passwordLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLabelInput() {
    return this._passwordLabel;
  }

  // user_credential_or_client_cert_required - computed: true, optional: true, required: false
  private _userCredentialOrClientCertRequired?: string; 
  public get userCredentialOrClientCertRequired() {
    return this.getStringAttribute('user_credential_or_client_cert_required');
  }
  public set userCredentialOrClientCertRequired(value: string) {
    this._userCredentialOrClientCertRequired = value;
  }
  public resetUserCredentialOrClientCertRequired() {
    this._userCredentialOrClientCertRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCredentialOrClientCertRequiredInput() {
    return this._userCredentialOrClientCertRequired;
  }

  // username_label - computed: true, optional: true, required: false
  private _usernameLabel?: string; 
  public get usernameLabel() {
    return this.getStringAttribute('username_label');
  }
  public set usernameLabel(value: string) {
    this._usernameLabel = value;
  }
  public resetUsernameLabel() {
    this._usernameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameLabelInput() {
    return this._usernameLabel;
  }
}

export class DataPanosGlobalprotectPortalPortalConfigClientAuthList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalPortalConfigClientAuth[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalPortalConfigClientAuthOutputReference {
    return new DataPanosGlobalprotectPortalPortalConfigClientAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#key DataPanosGlobalprotectPortal#key}
  */
  readonly key?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
}

export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStructToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStructToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.key),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string[]; 
  public get key() {
    return this.getListAttribute('key');
  }
  public set key(value: string[]) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStructList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStruct[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStructOutputReference {
    return new DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#plist DataPanosGlobalprotectPortal#plist}
  */
  readonly plist?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStruct[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plist: cdktf.listMapper(dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStructToTerraform, false)(struct!.plist),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plist: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStructToHclTerraform, false)(struct!.plist),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plist = this._plist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plist.internalValue = value.plist;
    }
  }

  // plist - computed: true, optional: true, required: false
  private _plist = new DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStructList(this, "plist", false);
  public get plist() {
    return this._plist;
  }
  public putPlist(value: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsPlistStruct[] | cdktf.IResolvable) {
    this._plist.internalValue = value;
  }
  public resetPlist() {
    this._plist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plistInput() {
    return this._plist.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#registry_value DataPanosGlobalprotectPortal#registry_value}
  */
  readonly registryValue?: string[];
}

export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKeyToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    registry_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.registryValue),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKeyToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKey | cdktf.IResolvable): any {
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
    registry_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.registryValue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._registryValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryValue = this._registryValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._registryValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._registryValue = value.registryValue;
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

  // registry_value - computed: true, optional: true, required: false
  private _registryValue?: string[]; 
  public get registryValue() {
    return this.getListAttribute('registry_value');
  }
  public set registryValue(value: string[]) {
    this._registryValue = value;
  }
  public resetRegistryValue() {
    this._registryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryValueInput() {
    return this._registryValue;
  }
}

export class DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKeyList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKey[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKeyOutputReference {
    return new DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#registry_key DataPanosGlobalprotectPortal#registry_key}
  */
  readonly registryKey?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKey[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registry_key: cdktf.listMapper(dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKeyToTerraform, false)(struct!.registryKey),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    registry_key: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKeyToHclTerraform, false)(struct!.registryKey),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registryKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryKey = this._registryKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._registryKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._registryKey.internalValue = value.registryKey;
    }
  }

  // registry_key - computed: true, optional: true, required: false
  private _registryKey = new DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKeyList(this, "registry_key", false);
  public get registryKey() {
    return this._registryKey;
  }
  public putRegistryKey(value: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsRegistryKey[] | cdktf.IResolvable) {
    this._registryKey.internalValue = value;
  }
  public resetRegistryKey() {
    this._registryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryKeyInput() {
    return this._registryKey.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#mac_os DataPanosGlobalprotectPortal#mac_os}
  */
  readonly macOs?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#windows DataPanosGlobalprotectPortal#windows}
  */
  readonly windows?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindows;
}

export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_os: dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsToTerraform(struct!.macOs),
    windows: dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsToTerraform(struct!.windows),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_os: {
      value: dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsToHclTerraform(struct!.macOs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOs",
    },
    windows: {
      value: dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsToHclTerraform(struct!.windows),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindows",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macOs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.macOs = this._macOs?.internalValue;
    }
    if (this._windows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windows = this._windows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macOs.internalValue = undefined;
      this._windows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macOs.internalValue = value.macOs;
      this._windows.internalValue = value.windows;
    }
  }

  // mac_os - computed: true, optional: true, required: false
  private _macOs = new DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOsOutputReference(this, "mac_os");
  public get macOs() {
    return this._macOs;
  }
  public putMacOs(value: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksMacOs) {
    this._macOs.internalValue = value;
  }
  public resetMacOs() {
    this._macOs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macOsInput() {
    return this._macOs.internalValue;
  }

  // windows - computed: true, optional: true, required: false
  private _windows = new DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }
  public putWindows(value: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksWindows) {
    this._windows.internalValue = value;
  }
  public resetWindows() {
    this._windows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalPortalConfigConfigSelection {
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#certificate_profile DataPanosGlobalprotectPortal#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#custom_checks DataPanosGlobalprotectPortal#custom_checks}
  */
  readonly customChecks?: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecks;
}

export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    custom_checks: dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksToTerraform(struct!.customChecks),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigConfigSelectionToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigConfigSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_checks: {
      value: dataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksToHclTerraform(struct!.customChecks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecks",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigConfigSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfigConfigSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._customChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customChecks = this._customChecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfigConfigSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateProfile = undefined;
      this._customChecks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateProfile = value.certificateProfile;
      this._customChecks.internalValue = value.customChecks;
    }
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // custom_checks - computed: true, optional: true, required: false
  private _customChecks = new DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecksOutputReference(this, "custom_checks");
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: DataPanosGlobalprotectPortalPortalConfigConfigSelectionCustomChecks) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIp {
  /**
  * Floating IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv4 DataPanosGlobalprotectPortal#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Floating IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv6 DataPanosGlobalprotectPortal#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIpToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIpToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface DataPanosGlobalprotectPortalPortalConfigLocalAddressIp {
  /**
  * IPv4 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv4 DataPanosGlobalprotectPortal#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv6 DataPanosGlobalprotectPortal#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosGlobalprotectPortalPortalConfigLocalAddressIpToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigLocalAddressIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigLocalAddressIpToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigLocalAddressIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigLocalAddressIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfigLocalAddressIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfigLocalAddressIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface DataPanosGlobalprotectPortalPortalConfigLocalAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#floating_ip DataPanosGlobalprotectPortal#floating_ip}
  */
  readonly floatingIp?: DataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIp;
  /**
  * local gateway end-point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#interface DataPanosGlobalprotectPortal#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ip DataPanosGlobalprotectPortal#ip}
  */
  readonly ip?: DataPanosGlobalprotectPortalPortalConfigLocalAddressIp;
  /**
  * specify the family of the local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ip_address_family DataPanosGlobalprotectPortal#ip_address_family}
  */
  readonly ipAddressFamily?: string;
}

export function dataPanosGlobalprotectPortalPortalConfigLocalAddressToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: dataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIpToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: dataPanosGlobalprotectPortalPortalConfigLocalAddressIpToTerraform(struct!.ip),
    ip_address_family: cdktf.stringToTerraform(struct!.ipAddressFamily),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigLocalAddressToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfigLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: dataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIpToHclTerraform(struct!.floatingIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIp",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: dataPanosGlobalprotectPortalPortalConfigLocalAddressIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalPortalConfigLocalAddressIp",
    },
    ip_address_family: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfigLocalAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp?.internalValue;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipAddressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressFamily = this._ipAddressFamily;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfigLocalAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp.internalValue = undefined;
      this._interface = undefined;
      this._ip.internalValue = undefined;
      this._ipAddressFamily = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp.internalValue = value.floatingIp;
      this._interface = value.interface;
      this._ip.internalValue = value.ip;
      this._ipAddressFamily = value.ipAddressFamily;
    }
  }

  // floating_ip - computed: true, optional: true, required: false
  private _floatingIp = new DataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIpOutputReference(this, "floating_ip");
  public get floatingIp() {
    return this._floatingIp;
  }
  public putFloatingIp(value: DataPanosGlobalprotectPortalPortalConfigLocalAddressFloatingIp) {
    this._floatingIp.internalValue = value;
  }
  public resetFloatingIp() {
    this._floatingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp.internalValue;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: true, optional: true, required: false
  private _ip = new DataPanosGlobalprotectPortalPortalConfigLocalAddressIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataPanosGlobalprotectPortalPortalConfigLocalAddressIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ip_address_family - computed: true, optional: true, required: false
  private _ipAddressFamily?: string; 
  public get ipAddressFamily() {
    return this.getStringAttribute('ip_address_family');
  }
  public set ipAddressFamily(value: string) {
    this._ipAddressFamily = value;
  }
  public resetIpAddressFamily() {
    this._ipAddressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressFamilyInput() {
    return this._ipAddressFamily;
  }
}
export interface DataPanosGlobalprotectPortalPortalConfig {
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#certificate_profile DataPanosGlobalprotectPortal#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#client_auth DataPanosGlobalprotectPortal#client_auth}
  */
  readonly clientAuth?: DataPanosGlobalprotectPortalPortalConfigClientAuth[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#config_selection DataPanosGlobalprotectPortal#config_selection}
  */
  readonly configSelection?: DataPanosGlobalprotectPortalPortalConfigConfigSelection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#custom_help_page DataPanosGlobalprotectPortal#custom_help_page}
  */
  readonly customHelpPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#custom_home_page DataPanosGlobalprotectPortal#custom_home_page}
  */
  readonly customHomePage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#custom_login_page DataPanosGlobalprotectPortal#custom_login_page}
  */
  readonly customLoginPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#local_address DataPanosGlobalprotectPortal#local_address}
  */
  readonly localAddress?: DataPanosGlobalprotectPortalPortalConfigLocalAddress;
  /**
  * Log unsuccessful TLS handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#log_fail DataPanosGlobalprotectPortal#log_fail}
  */
  readonly logFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#log_setting DataPanosGlobalprotectPortal#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Log successful TLS handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#log_success DataPanosGlobalprotectPortal#log_success}
  */
  readonly logSuccess?: boolean | cdktf.IResolvable;
  /**
  * SSL TLS service profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ssl_tls_service_profile DataPanosGlobalprotectPortal#ssl_tls_service_profile}
  */
  readonly sslTlsServiceProfile?: string;
}

export function dataPanosGlobalprotectPortalPortalConfigToTerraform(struct?: DataPanosGlobalprotectPortalPortalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    client_auth: cdktf.listMapper(dataPanosGlobalprotectPortalPortalConfigClientAuthToTerraform, false)(struct!.clientAuth),
    config_selection: dataPanosGlobalprotectPortalPortalConfigConfigSelectionToTerraform(struct!.configSelection),
    custom_help_page: cdktf.stringToTerraform(struct!.customHelpPage),
    custom_home_page: cdktf.stringToTerraform(struct!.customHomePage),
    custom_login_page: cdktf.stringToTerraform(struct!.customLoginPage),
    local_address: dataPanosGlobalprotectPortalPortalConfigLocalAddressToTerraform(struct!.localAddress),
    log_fail: cdktf.booleanToTerraform(struct!.logFail),
    log_setting: cdktf.stringToTerraform(struct!.logSetting),
    log_success: cdktf.booleanToTerraform(struct!.logSuccess),
    ssl_tls_service_profile: cdktf.stringToTerraform(struct!.sslTlsServiceProfile),
  }
}


export function dataPanosGlobalprotectPortalPortalConfigToHclTerraform(struct?: DataPanosGlobalprotectPortalPortalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_auth: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalPortalConfigClientAuthToHclTerraform, false)(struct!.clientAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalPortalConfigClientAuthList",
    },
    config_selection: {
      value: dataPanosGlobalprotectPortalPortalConfigConfigSelectionToHclTerraform(struct!.configSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalPortalConfigConfigSelection",
    },
    custom_help_page: {
      value: cdktf.stringToHclTerraform(struct!.customHelpPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_home_page: {
      value: cdktf.stringToHclTerraform(struct!.customHomePage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_login_page: {
      value: cdktf.stringToHclTerraform(struct!.customLoginPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_address: {
      value: dataPanosGlobalprotectPortalPortalConfigLocalAddressToHclTerraform(struct!.localAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalPortalConfigLocalAddress",
    },
    log_fail: {
      value: cdktf.booleanToHclTerraform(struct!.logFail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_setting: {
      value: cdktf.stringToHclTerraform(struct!.logSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_success: {
      value: cdktf.booleanToHclTerraform(struct!.logSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_tls_service_profile: {
      value: cdktf.stringToHclTerraform(struct!.sslTlsServiceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalPortalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalPortalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._clientAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuth = this._clientAuth?.internalValue;
    }
    if (this._configSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSelection = this._configSelection?.internalValue;
    }
    if (this._customHelpPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHelpPage = this._customHelpPage;
    }
    if (this._customHomePage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHomePage = this._customHomePage;
    }
    if (this._customLoginPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLoginPage = this._customLoginPage;
    }
    if (this._localAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress?.internalValue;
    }
    if (this._logFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFail = this._logFail;
    }
    if (this._logSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetting = this._logSetting;
    }
    if (this._logSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSuccess = this._logSuccess;
    }
    if (this._sslTlsServiceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTlsServiceProfile = this._sslTlsServiceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalPortalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateProfile = undefined;
      this._clientAuth.internalValue = undefined;
      this._configSelection.internalValue = undefined;
      this._customHelpPage = undefined;
      this._customHomePage = undefined;
      this._customLoginPage = undefined;
      this._localAddress.internalValue = undefined;
      this._logFail = undefined;
      this._logSetting = undefined;
      this._logSuccess = undefined;
      this._sslTlsServiceProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateProfile = value.certificateProfile;
      this._clientAuth.internalValue = value.clientAuth;
      this._configSelection.internalValue = value.configSelection;
      this._customHelpPage = value.customHelpPage;
      this._customHomePage = value.customHomePage;
      this._customLoginPage = value.customLoginPage;
      this._localAddress.internalValue = value.localAddress;
      this._logFail = value.logFail;
      this._logSetting = value.logSetting;
      this._logSuccess = value.logSuccess;
      this._sslTlsServiceProfile = value.sslTlsServiceProfile;
    }
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // client_auth - computed: true, optional: true, required: false
  private _clientAuth = new DataPanosGlobalprotectPortalPortalConfigClientAuthList(this, "client_auth", false);
  public get clientAuth() {
    return this._clientAuth;
  }
  public putClientAuth(value: DataPanosGlobalprotectPortalPortalConfigClientAuth[] | cdktf.IResolvable) {
    this._clientAuth.internalValue = value;
  }
  public resetClientAuth() {
    this._clientAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth.internalValue;
  }

  // config_selection - computed: true, optional: true, required: false
  private _configSelection = new DataPanosGlobalprotectPortalPortalConfigConfigSelectionOutputReference(this, "config_selection");
  public get configSelection() {
    return this._configSelection;
  }
  public putConfigSelection(value: DataPanosGlobalprotectPortalPortalConfigConfigSelection) {
    this._configSelection.internalValue = value;
  }
  public resetConfigSelection() {
    this._configSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSelectionInput() {
    return this._configSelection.internalValue;
  }

  // custom_help_page - computed: true, optional: true, required: false
  private _customHelpPage?: string; 
  public get customHelpPage() {
    return this.getStringAttribute('custom_help_page');
  }
  public set customHelpPage(value: string) {
    this._customHelpPage = value;
  }
  public resetCustomHelpPage() {
    this._customHelpPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHelpPageInput() {
    return this._customHelpPage;
  }

  // custom_home_page - computed: true, optional: true, required: false
  private _customHomePage?: string; 
  public get customHomePage() {
    return this.getStringAttribute('custom_home_page');
  }
  public set customHomePage(value: string) {
    this._customHomePage = value;
  }
  public resetCustomHomePage() {
    this._customHomePage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHomePageInput() {
    return this._customHomePage;
  }

  // custom_login_page - computed: true, optional: true, required: false
  private _customLoginPage?: string; 
  public get customLoginPage() {
    return this.getStringAttribute('custom_login_page');
  }
  public set customLoginPage(value: string) {
    this._customLoginPage = value;
  }
  public resetCustomLoginPage() {
    this._customLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLoginPageInput() {
    return this._customLoginPage;
  }

  // local_address - computed: true, optional: true, required: false
  private _localAddress = new DataPanosGlobalprotectPortalPortalConfigLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: DataPanosGlobalprotectPortalPortalConfigLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
  }

  // log_fail - computed: true, optional: true, required: false
  private _logFail?: boolean | cdktf.IResolvable; 
  public get logFail() {
    return this.getBooleanAttribute('log_fail');
  }
  public set logFail(value: boolean | cdktf.IResolvable) {
    this._logFail = value;
  }
  public resetLogFail() {
    this._logFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFailInput() {
    return this._logFail;
  }

  // log_setting - computed: true, optional: true, required: false
  private _logSetting?: string; 
  public get logSetting() {
    return this.getStringAttribute('log_setting');
  }
  public set logSetting(value: string) {
    this._logSetting = value;
  }
  public resetLogSetting() {
    this._logSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingInput() {
    return this._logSetting;
  }

  // log_success - computed: true, optional: true, required: false
  private _logSuccess?: boolean | cdktf.IResolvable; 
  public get logSuccess() {
    return this.getBooleanAttribute('log_success');
  }
  public set logSuccess(value: boolean | cdktf.IResolvable) {
    this._logSuccess = value;
  }
  public resetLogSuccess() {
    this._logSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSuccessInput() {
    return this._logSuccess;
  }

  // ssl_tls_service_profile - computed: true, optional: true, required: false
  private _sslTlsServiceProfile?: string; 
  public get sslTlsServiceProfile() {
    return this.getStringAttribute('ssl_tls_service_profile');
  }
  public set sslTlsServiceProfile(value: string) {
    this._sslTlsServiceProfile = value;
  }
  public resetSslTlsServiceProfile() {
    this._sslTlsServiceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTlsServiceProfileInput() {
    return this._sslTlsServiceProfile;
  }
}
export interface DataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocal {
  /**
  * Issued GlobalProtect satellite certificate life time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#certificate_life_time DataPanosGlobalprotectPortal#certificate_life_time}
  */
  readonly certificateLifeTime?: number;
  /**
  * GlobalProtect satellite certificate renewal period in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#certificate_renewal_period DataPanosGlobalprotectPortal#certificate_renewal_period}
  */
  readonly certificateRenewalPeriod?: number;
  /**
  * Issuing certificate to issue GlobalProtect satellite certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#issuing_certificate DataPanosGlobalprotectPortal#issuing_certificate}
  */
  readonly issuingCertificate?: string;
  /**
  * OCSP responder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ocsp_responder DataPanosGlobalprotectPortal#ocsp_responder}
  */
  readonly ocspResponder?: string;
}

export function dataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocalToTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_life_time: cdktf.numberToTerraform(struct!.certificateLifeTime),
    certificate_renewal_period: cdktf.numberToTerraform(struct!.certificateRenewalPeriod),
    issuing_certificate: cdktf.stringToTerraform(struct!.issuingCertificate),
    ocsp_responder: cdktf.stringToTerraform(struct!.ocspResponder),
  }
}


export function dataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocalToHclTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_life_time: {
      value: cdktf.numberToHclTerraform(struct!.certificateLifeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    certificate_renewal_period: {
      value: cdktf.numberToHclTerraform(struct!.certificateRenewalPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    issuing_certificate: {
      value: cdktf.stringToHclTerraform(struct!.issuingCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_responder: {
      value: cdktf.stringToHclTerraform(struct!.ocspResponder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateLifeTime = this._certificateLifeTime;
    }
    if (this._certificateRenewalPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateRenewalPeriod = this._certificateRenewalPeriod;
    }
    if (this._issuingCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuingCertificate = this._issuingCertificate;
    }
    if (this._ocspResponder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponder = this._ocspResponder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateLifeTime = undefined;
      this._certificateRenewalPeriod = undefined;
      this._issuingCertificate = undefined;
      this._ocspResponder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateLifeTime = value.certificateLifeTime;
      this._certificateRenewalPeriod = value.certificateRenewalPeriod;
      this._issuingCertificate = value.issuingCertificate;
      this._ocspResponder = value.ocspResponder;
    }
  }

  // certificate_life_time - computed: true, optional: true, required: false
  private _certificateLifeTime?: number; 
  public get certificateLifeTime() {
    return this.getNumberAttribute('certificate_life_time');
  }
  public set certificateLifeTime(value: number) {
    this._certificateLifeTime = value;
  }
  public resetCertificateLifeTime() {
    this._certificateLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateLifeTimeInput() {
    return this._certificateLifeTime;
  }

  // certificate_renewal_period - computed: true, optional: true, required: false
  private _certificateRenewalPeriod?: number; 
  public get certificateRenewalPeriod() {
    return this.getNumberAttribute('certificate_renewal_period');
  }
  public set certificateRenewalPeriod(value: number) {
    this._certificateRenewalPeriod = value;
  }
  public resetCertificateRenewalPeriod() {
    this._certificateRenewalPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRenewalPeriodInput() {
    return this._certificateRenewalPeriod;
  }

  // issuing_certificate - computed: true, optional: true, required: false
  private _issuingCertificate?: string; 
  public get issuingCertificate() {
    return this.getStringAttribute('issuing_certificate');
  }
  public set issuingCertificate(value: string) {
    this._issuingCertificate = value;
  }
  public resetIssuingCertificate() {
    this._issuingCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuingCertificateInput() {
    return this._issuingCertificate;
  }

  // ocsp_responder - computed: true, optional: true, required: false
  private _ocspResponder?: string; 
  public get ocspResponder() {
    return this.getStringAttribute('ocsp_responder');
  }
  public set ocspResponder(value: string) {
    this._ocspResponder = value;
  }
  public resetOcspResponder() {
    this._ocspResponder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponderInput() {
    return this._ocspResponder;
  }
}
export interface DataPanosGlobalprotectPortalSatelliteConfigClientCertificateScep {
  /**
  * GlobalProtect satellite certificate renewal period in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#certificate_renewal_period DataPanosGlobalprotectPortal#certificate_renewal_period}
  */
  readonly certificateRenewalPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#scep DataPanosGlobalprotectPortal#scep}
  */
  readonly scep?: string;
}

export function dataPanosGlobalprotectPortalSatelliteConfigClientCertificateScepToTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigClientCertificateScep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_renewal_period: cdktf.numberToTerraform(struct!.certificateRenewalPeriod),
    scep: cdktf.stringToTerraform(struct!.scep),
  }
}


export function dataPanosGlobalprotectPortalSatelliteConfigClientCertificateScepToHclTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigClientCertificateScep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_renewal_period: {
      value: cdktf.numberToHclTerraform(struct!.certificateRenewalPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scep: {
      value: cdktf.stringToHclTerraform(struct!.scep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalSatelliteConfigClientCertificateScepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalSatelliteConfigClientCertificateScep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateRenewalPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateRenewalPeriod = this._certificateRenewalPeriod;
    }
    if (this._scep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scep = this._scep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalSatelliteConfigClientCertificateScep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateRenewalPeriod = undefined;
      this._scep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateRenewalPeriod = value.certificateRenewalPeriod;
      this._scep = value.scep;
    }
  }

  // certificate_renewal_period - computed: true, optional: true, required: false
  private _certificateRenewalPeriod?: number; 
  public get certificateRenewalPeriod() {
    return this.getNumberAttribute('certificate_renewal_period');
  }
  public set certificateRenewalPeriod(value: number) {
    this._certificateRenewalPeriod = value;
  }
  public resetCertificateRenewalPeriod() {
    this._certificateRenewalPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRenewalPeriodInput() {
    return this._certificateRenewalPeriod;
  }

  // scep - computed: true, optional: true, required: false
  private _scep?: string; 
  public get scep() {
    return this.getStringAttribute('scep');
  }
  public set scep(value: string) {
    this._scep = value;
  }
  public resetScep() {
    this._scep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepInput() {
    return this._scep;
  }
}
export interface DataPanosGlobalprotectPortalSatelliteConfigClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#local DataPanosGlobalprotectPortal#local}
  */
  readonly local?: DataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#scep DataPanosGlobalprotectPortal#scep}
  */
  readonly scep?: DataPanosGlobalprotectPortalSatelliteConfigClientCertificateScep;
}

export function dataPanosGlobalprotectPortalSatelliteConfigClientCertificateToTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: dataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocalToTerraform(struct!.local),
    scep: dataPanosGlobalprotectPortalSatelliteConfigClientCertificateScepToTerraform(struct!.scep),
  }
}


export function dataPanosGlobalprotectPortalSatelliteConfigClientCertificateToHclTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: dataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocal",
    },
    scep: {
      value: dataPanosGlobalprotectPortalSatelliteConfigClientCertificateScepToHclTerraform(struct!.scep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalSatelliteConfigClientCertificateScep",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalSatelliteConfigClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalSatelliteConfigClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._scep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scep = this._scep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalSatelliteConfigClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local.internalValue = undefined;
      this._scep.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local.internalValue = value.local;
      this._scep.internalValue = value.scep;
    }
  }

  // local - computed: true, optional: true, required: false
  private _local = new DataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: DataPanosGlobalprotectPortalSatelliteConfigClientCertificateLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // scep - computed: true, optional: true, required: false
  private _scep = new DataPanosGlobalprotectPortalSatelliteConfigClientCertificateScepOutputReference(this, "scep");
  public get scep() {
    return this._scep;
  }
  public putScep(value: DataPanosGlobalprotectPortalSatelliteConfigClientCertificateScep) {
    this._scep.internalValue = value;
  }
  public resetScep() {
    this._scep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepInput() {
    return this._scep.internalValue;
  }
}
export interface DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIp {
  /**
  * IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv4 DataPanosGlobalprotectPortal#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv6 DataPanosGlobalprotectPortal#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIpToTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIpToHclTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface DataPanosGlobalprotectPortalSatelliteConfigConfigsGateways {
  /**
  * fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#fqdn DataPanosGlobalprotectPortal#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ip DataPanosGlobalprotectPortal#ip}
  */
  readonly ip?: DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIp;
  /**
  * IPv6 Preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#ipv6_preferred DataPanosGlobalprotectPortal#ipv6_preferred}
  */
  readonly ipv6Preferred?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Priority of GlobalProtect gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#priority DataPanosGlobalprotectPortal#priority}
  */
  readonly priority?: number;
}

export function dataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysToTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigConfigsGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip: dataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIpToTerraform(struct!.ip),
    ipv6_preferred: cdktf.booleanToTerraform(struct!.ipv6Preferred),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysToHclTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigConfigsGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: dataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIp",
    },
    ipv6_preferred: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Preferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalSatelliteConfigConfigsGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipv6Preferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Preferred = this._ipv6Preferred;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalSatelliteConfigConfigsGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ip.internalValue = undefined;
      this._ipv6Preferred = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ip.internalValue = value.ip;
      this._ipv6Preferred = value.ipv6Preferred;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip - computed: true, optional: true, required: false
  private _ip = new DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6_preferred - computed: true, optional: true, required: false
  private _ipv6Preferred?: boolean | cdktf.IResolvable; 
  public get ipv6Preferred() {
    return this.getBooleanAttribute('ipv6_preferred');
  }
  public set ipv6Preferred(value: boolean | cdktf.IResolvable) {
    this._ipv6Preferred = value;
  }
  public resetIpv6Preferred() {
    this._ipv6Preferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PreferredInput() {
    return this._ipv6Preferred;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalSatelliteConfigConfigsGateways[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysOutputReference {
    return new DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalSatelliteConfigConfigs {
  /**
  * GlobalProtect satellite configuration refresh interval in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#config_refresh_interval DataPanosGlobalprotectPortal#config_refresh_interval}
  */
  readonly configRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#devices DataPanosGlobalprotectPortal#devices}
  */
  readonly devices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#gateways DataPanosGlobalprotectPortal#gateways}
  */
  readonly gateways?: DataPanosGlobalprotectPortalSatelliteConfigConfigsGateways[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#name DataPanosGlobalprotectPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#source_user DataPanosGlobalprotectPortal#source_user}
  */
  readonly sourceUser?: string[];
}

export function dataPanosGlobalprotectPortalSatelliteConfigConfigsToTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_refresh_interval: cdktf.numberToTerraform(struct!.configRefreshInterval),
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    gateways: cdktf.listMapper(dataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysToTerraform, false)(struct!.gateways),
    name: cdktf.stringToTerraform(struct!.name),
    source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUser),
  }
}


export function dataPanosGlobalprotectPortalSatelliteConfigConfigsToHclTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfigConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.configRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateways: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysToHclTerraform, false)(struct!.gateways),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_user: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUser),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalSatelliteConfigConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectPortalSatelliteConfigConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRefreshInterval = this._configRefreshInterval;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._gateways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUser = this._sourceUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalSatelliteConfigConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configRefreshInterval = undefined;
      this._devices = undefined;
      this._gateways.internalValue = undefined;
      this._name = undefined;
      this._sourceUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configRefreshInterval = value.configRefreshInterval;
      this._devices = value.devices;
      this._gateways.internalValue = value.gateways;
      this._name = value.name;
      this._sourceUser = value.sourceUser;
    }
  }

  // config_refresh_interval - computed: true, optional: true, required: false
  private _configRefreshInterval?: number; 
  public get configRefreshInterval() {
    return this.getNumberAttribute('config_refresh_interval');
  }
  public set configRefreshInterval(value: number) {
    this._configRefreshInterval = value;
  }
  public resetConfigRefreshInterval() {
    this._configRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRefreshIntervalInput() {
    return this._configRefreshInterval;
  }

  // devices - computed: true, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // gateways - computed: true, optional: true, required: false
  private _gateways = new DataPanosGlobalprotectPortalSatelliteConfigConfigsGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: DataPanosGlobalprotectPortalSatelliteConfigConfigsGateways[] | cdktf.IResolvable) {
    this._gateways.internalValue = value;
  }
  public resetGateways() {
    this._gateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
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

  // source_user - computed: true, optional: true, required: false
  private _sourceUser?: string[]; 
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }
  public set sourceUser(value: string[]) {
    this._sourceUser = value;
  }
  public resetSourceUser() {
    this._sourceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser;
  }
}

export class DataPanosGlobalprotectPortalSatelliteConfigConfigsList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectPortalSatelliteConfigConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectPortalSatelliteConfigConfigsOutputReference {
    return new DataPanosGlobalprotectPortalSatelliteConfigConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectPortalSatelliteConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#client_certificate DataPanosGlobalprotectPortal#client_certificate}
  */
  readonly clientCertificate?: DataPanosGlobalprotectPortalSatelliteConfigClientCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#configs DataPanosGlobalprotectPortal#configs}
  */
  readonly configs?: DataPanosGlobalprotectPortalSatelliteConfigConfigs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#root_ca DataPanosGlobalprotectPortal#root_ca}
  */
  readonly rootCa?: string[];
}

export function dataPanosGlobalprotectPortalSatelliteConfigToTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: dataPanosGlobalprotectPortalSatelliteConfigClientCertificateToTerraform(struct!.clientCertificate),
    configs: cdktf.listMapper(dataPanosGlobalprotectPortalSatelliteConfigConfigsToTerraform, false)(struct!.configs),
    root_ca: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootCa),
  }
}


export function dataPanosGlobalprotectPortalSatelliteConfigToHclTerraform(struct?: DataPanosGlobalprotectPortalSatelliteConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: dataPanosGlobalprotectPortalSatelliteConfigClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectPortalSatelliteConfigClientCertificate",
    },
    configs: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectPortalSatelliteConfigConfigsToHclTerraform, false)(struct!.configs),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectPortalSatelliteConfigConfigsList",
    },
    root_ca: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rootCa),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectPortalSatelliteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectPortalSatelliteConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    if (this._rootCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCa = this._rootCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectPortalSatelliteConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertificate.internalValue = undefined;
      this._configs.internalValue = undefined;
      this._rootCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._configs.internalValue = value.configs;
      this._rootCa = value.rootCa;
    }
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate = new DataPanosGlobalprotectPortalSatelliteConfigClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: DataPanosGlobalprotectPortalSatelliteConfigClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // configs - computed: true, optional: true, required: false
  private _configs = new DataPanosGlobalprotectPortalSatelliteConfigConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: DataPanosGlobalprotectPortalSatelliteConfigConfigs[] | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // root_ca - computed: true, optional: true, required: false
  private _rootCa?: string[]; 
  public get rootCa() {
    return this.getListAttribute('root_ca');
  }
  public set rootCa(value: string[]) {
    this._rootCa = value;
  }
  public resetRootCa() {
    this._rootCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaInput() {
    return this._rootCa;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal panos_globalprotect_portal}
*/
export class DataPanosGlobalprotectPortal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_globalprotect_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosGlobalprotectPortal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosGlobalprotectPortal to import
  * @param importFromId The id of the existing DataPanosGlobalprotectPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosGlobalprotectPortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_globalprotect_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/globalprotect_portal panos_globalprotect_portal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosGlobalprotectPortalConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosGlobalprotectPortalConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_globalprotect_portal',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.6',
        providerVersionConstraint: '2.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientConfig.internalValue = config.clientConfig;
    this._clientlessVpn.internalValue = config.clientlessVpn;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._portalConfig.internalValue = config.portalConfig;
    this._satelliteConfig.internalValue = config.satelliteConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_config - computed: true, optional: true, required: false
  private _clientConfig = new DataPanosGlobalprotectPortalClientConfigOutputReference(this, "client_config");
  public get clientConfig() {
    return this._clientConfig;
  }
  public putClientConfig(value: DataPanosGlobalprotectPortalClientConfig) {
    this._clientConfig.internalValue = value;
  }
  public resetClientConfig() {
    this._clientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig.internalValue;
  }

  // clientless_vpn - computed: true, optional: true, required: false
  private _clientlessVpn = new DataPanosGlobalprotectPortalClientlessVpnOutputReference(this, "clientless_vpn");
  public get clientlessVpn() {
    return this._clientlessVpn;
  }
  public putClientlessVpn(value: DataPanosGlobalprotectPortalClientlessVpn) {
    this._clientlessVpn.internalValue = value;
  }
  public resetClientlessVpn() {
    this._clientlessVpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlessVpnInput() {
    return this._clientlessVpn.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosGlobalprotectPortalLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosGlobalprotectPortalLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // portal_config - computed: true, optional: true, required: false
  private _portalConfig = new DataPanosGlobalprotectPortalPortalConfigOutputReference(this, "portal_config");
  public get portalConfig() {
    return this._portalConfig;
  }
  public putPortalConfig(value: DataPanosGlobalprotectPortalPortalConfig) {
    this._portalConfig.internalValue = value;
  }
  public resetPortalConfig() {
    this._portalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalConfigInput() {
    return this._portalConfig.internalValue;
  }

  // satellite_config - computed: true, optional: true, required: false
  private _satelliteConfig = new DataPanosGlobalprotectPortalSatelliteConfigOutputReference(this, "satellite_config");
  public get satelliteConfig() {
    return this._satelliteConfig;
  }
  public putSatelliteConfig(value: DataPanosGlobalprotectPortalSatelliteConfig) {
    this._satelliteConfig.internalValue = value;
  }
  public resetSatelliteConfig() {
    this._satelliteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satelliteConfigInput() {
    return this._satelliteConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_config: dataPanosGlobalprotectPortalClientConfigToTerraform(this._clientConfig.internalValue),
      clientless_vpn: dataPanosGlobalprotectPortalClientlessVpnToTerraform(this._clientlessVpn.internalValue),
      location: dataPanosGlobalprotectPortalLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      portal_config: dataPanosGlobalprotectPortalPortalConfigToTerraform(this._portalConfig.internalValue),
      satellite_config: dataPanosGlobalprotectPortalSatelliteConfigToTerraform(this._satelliteConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_config: {
        value: dataPanosGlobalprotectPortalClientConfigToHclTerraform(this._clientConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosGlobalprotectPortalClientConfig",
      },
      clientless_vpn: {
        value: dataPanosGlobalprotectPortalClientlessVpnToHclTerraform(this._clientlessVpn.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosGlobalprotectPortalClientlessVpn",
      },
      location: {
        value: dataPanosGlobalprotectPortalLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosGlobalprotectPortalLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_config: {
        value: dataPanosGlobalprotectPortalPortalConfigToHclTerraform(this._portalConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosGlobalprotectPortalPortalConfig",
      },
      satellite_config: {
        value: dataPanosGlobalprotectPortalSatelliteConfigToHclTerraform(this._satelliteConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosGlobalprotectPortalSatelliteConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
