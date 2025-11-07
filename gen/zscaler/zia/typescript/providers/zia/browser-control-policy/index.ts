// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrowserControlPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A Boolean value that specifies whether or not to allow all the browsers and their respective versions access to the internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#allow_all_browsers BrowserControlPolicy#allow_all_browsers}
  */
  readonly allowAllBrowsers?: boolean | cdktf.IResolvable;
  /**
  * Versions of Google Chrome browser that need to be blocked. If not set, all Google Chrome versions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#blocked_chrome_versions BrowserControlPolicy#blocked_chrome_versions}
  */
  readonly blockedChromeVersions?: string[];
  /**
  * Versions of Mozilla Firefox browser that need to be blocked. If not set, all Mozilla Firefox versions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#blocked_firefox_versions BrowserControlPolicy#blocked_firefox_versions}
  */
  readonly blockedFirefoxVersions?: string[];
  /**
  * Versions of Microsoft browser that need to be blocked. If not set, all Microsoft browser versions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#blocked_internet_explorer_versions BrowserControlPolicy#blocked_internet_explorer_versions}
  */
  readonly blockedInternetExplorerVersions?: string[];
  /**
  * Versions of Opera browser that need to be blocked. If not set, all Opera versions are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#blocked_opera_versions BrowserControlPolicy#blocked_opera_versions}
  */
  readonly blockedOperaVersions?: string[];
  /**
  * Versions of Apple Safari browser that need to be blocked. If not set, all Apple Safari versions are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#blocked_safari_versions BrowserControlPolicy#blocked_safari_versions}
  */
  readonly blockedSafariVersions?: string[];
  /**
  * If set to true, all the browsers are bypassed for warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#bypass_all_browsers BrowserControlPolicy#bypass_all_browsers}
  */
  readonly bypassAllBrowsers?: boolean | cdktf.IResolvable;
  /**
  * List of applications that need to be bypassed for warnings. This attribute has effect only if the 'enableWarnings' attribute is set to true. If not set, all vulnerable applications are warned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#bypass_applications BrowserControlPolicy#bypass_applications}
  */
  readonly bypassApplications?: string[];
  /**
  * List of plugins that need to be bypassed for warnings. This attribute has effect only if the 'enableWarnings' attribute is set to true. If not set, all vulnerable plugins are warned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#bypass_plugins BrowserControlPolicy#bypass_plugins}
  */
  readonly bypassPlugins?: string[];
  /**
  * A Boolean value that specifies if Smart Browser Isolation is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#enable_smart_browser_isolation BrowserControlPolicy#enable_smart_browser_isolation}
  */
  readonly enableSmartBrowserIsolation?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value that specifies if the warnings are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#enable_warnings BrowserControlPolicy#enable_warnings}
  */
  readonly enableWarnings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#id BrowserControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies how frequently the service checks browsers and relevant applications to warn users regarding outdated or vulnerable browsers, plugins, and applications. If not set, the warnings are disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#plugin_check_frequency BrowserControlPolicy#plugin_check_frequency}
  */
  readonly pluginCheckFrequency?: string;
  /**
  * smart_isolation_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#smart_isolation_groups BrowserControlPolicy#smart_isolation_groups}
  */
  readonly smartIsolationGroups?: BrowserControlPolicySmartIsolationGroups;
  /**
  * smart_isolation_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#smart_isolation_profile BrowserControlPolicy#smart_isolation_profile}
  */
  readonly smartIsolationProfile?: BrowserControlPolicySmartIsolationProfile[] | cdktf.IResolvable;
  /**
  * smart_isolation_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#smart_isolation_users BrowserControlPolicy#smart_isolation_users}
  */
  readonly smartIsolationUsers?: BrowserControlPolicySmartIsolationUsers;
}
export interface BrowserControlPolicySmartIsolationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#id BrowserControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function browserControlPolicySmartIsolationGroupsToTerraform(struct?: BrowserControlPolicySmartIsolationGroupsOutputReference | BrowserControlPolicySmartIsolationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function browserControlPolicySmartIsolationGroupsToHclTerraform(struct?: BrowserControlPolicySmartIsolationGroupsOutputReference | BrowserControlPolicySmartIsolationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserControlPolicySmartIsolationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserControlPolicySmartIsolationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserControlPolicySmartIsolationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
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
export interface BrowserControlPolicySmartIsolationProfile {
  /**
  * The universally unique identifier (UUID) for the browser isolation profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#id BrowserControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function browserControlPolicySmartIsolationProfileToTerraform(struct?: BrowserControlPolicySmartIsolationProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function browserControlPolicySmartIsolationProfileToHclTerraform(struct?: BrowserControlPolicySmartIsolationProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserControlPolicySmartIsolationProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserControlPolicySmartIsolationProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BrowserControlPolicySmartIsolationProfile | cdktf.IResolvable | undefined) {
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
}

export class BrowserControlPolicySmartIsolationProfileList extends cdktf.ComplexList {
  public internalValue? : BrowserControlPolicySmartIsolationProfile[] | cdktf.IResolvable

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
  public get(index: number): BrowserControlPolicySmartIsolationProfileOutputReference {
    return new BrowserControlPolicySmartIsolationProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserControlPolicySmartIsolationUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#id BrowserControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function browserControlPolicySmartIsolationUsersToTerraform(struct?: BrowserControlPolicySmartIsolationUsersOutputReference | BrowserControlPolicySmartIsolationUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function browserControlPolicySmartIsolationUsersToHclTerraform(struct?: BrowserControlPolicySmartIsolationUsersOutputReference | BrowserControlPolicySmartIsolationUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserControlPolicySmartIsolationUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserControlPolicySmartIsolationUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserControlPolicySmartIsolationUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy zia_browser_control_policy}
*/
export class BrowserControlPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_browser_control_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrowserControlPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrowserControlPolicy to import
  * @param importFromId The id of the existing BrowserControlPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrowserControlPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_browser_control_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/browser_control_policy zia_browser_control_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrowserControlPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BrowserControlPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_browser_control_policy',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAllBrowsers = config.allowAllBrowsers;
    this._blockedChromeVersions = config.blockedChromeVersions;
    this._blockedFirefoxVersions = config.blockedFirefoxVersions;
    this._blockedInternetExplorerVersions = config.blockedInternetExplorerVersions;
    this._blockedOperaVersions = config.blockedOperaVersions;
    this._blockedSafariVersions = config.blockedSafariVersions;
    this._bypassAllBrowsers = config.bypassAllBrowsers;
    this._bypassApplications = config.bypassApplications;
    this._bypassPlugins = config.bypassPlugins;
    this._enableSmartBrowserIsolation = config.enableSmartBrowserIsolation;
    this._enableWarnings = config.enableWarnings;
    this._id = config.id;
    this._pluginCheckFrequency = config.pluginCheckFrequency;
    this._smartIsolationGroups.internalValue = config.smartIsolationGroups;
    this._smartIsolationProfile.internalValue = config.smartIsolationProfile;
    this._smartIsolationUsers.internalValue = config.smartIsolationUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_all_browsers - computed: true, optional: true, required: false
  private _allowAllBrowsers?: boolean | cdktf.IResolvable; 
  public get allowAllBrowsers() {
    return this.getBooleanAttribute('allow_all_browsers');
  }
  public set allowAllBrowsers(value: boolean | cdktf.IResolvable) {
    this._allowAllBrowsers = value;
  }
  public resetAllowAllBrowsers() {
    this._allowAllBrowsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllBrowsersInput() {
    return this._allowAllBrowsers;
  }

  // blocked_chrome_versions - computed: true, optional: true, required: false
  private _blockedChromeVersions?: string[]; 
  public get blockedChromeVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_chrome_versions'));
  }
  public set blockedChromeVersions(value: string[]) {
    this._blockedChromeVersions = value;
  }
  public resetBlockedChromeVersions() {
    this._blockedChromeVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedChromeVersionsInput() {
    return this._blockedChromeVersions;
  }

  // blocked_firefox_versions - computed: true, optional: true, required: false
  private _blockedFirefoxVersions?: string[]; 
  public get blockedFirefoxVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_firefox_versions'));
  }
  public set blockedFirefoxVersions(value: string[]) {
    this._blockedFirefoxVersions = value;
  }
  public resetBlockedFirefoxVersions() {
    this._blockedFirefoxVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedFirefoxVersionsInput() {
    return this._blockedFirefoxVersions;
  }

  // blocked_internet_explorer_versions - computed: true, optional: true, required: false
  private _blockedInternetExplorerVersions?: string[]; 
  public get blockedInternetExplorerVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_internet_explorer_versions'));
  }
  public set blockedInternetExplorerVersions(value: string[]) {
    this._blockedInternetExplorerVersions = value;
  }
  public resetBlockedInternetExplorerVersions() {
    this._blockedInternetExplorerVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInternetExplorerVersionsInput() {
    return this._blockedInternetExplorerVersions;
  }

  // blocked_opera_versions - computed: true, optional: true, required: false
  private _blockedOperaVersions?: string[]; 
  public get blockedOperaVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_opera_versions'));
  }
  public set blockedOperaVersions(value: string[]) {
    this._blockedOperaVersions = value;
  }
  public resetBlockedOperaVersions() {
    this._blockedOperaVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedOperaVersionsInput() {
    return this._blockedOperaVersions;
  }

  // blocked_safari_versions - computed: true, optional: true, required: false
  private _blockedSafariVersions?: string[]; 
  public get blockedSafariVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_safari_versions'));
  }
  public set blockedSafariVersions(value: string[]) {
    this._blockedSafariVersions = value;
  }
  public resetBlockedSafariVersions() {
    this._blockedSafariVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedSafariVersionsInput() {
    return this._blockedSafariVersions;
  }

  // bypass_all_browsers - computed: true, optional: true, required: false
  private _bypassAllBrowsers?: boolean | cdktf.IResolvable; 
  public get bypassAllBrowsers() {
    return this.getBooleanAttribute('bypass_all_browsers');
  }
  public set bypassAllBrowsers(value: boolean | cdktf.IResolvable) {
    this._bypassAllBrowsers = value;
  }
  public resetBypassAllBrowsers() {
    this._bypassAllBrowsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAllBrowsersInput() {
    return this._bypassAllBrowsers;
  }

  // bypass_applications - computed: true, optional: true, required: false
  private _bypassApplications?: string[]; 
  public get bypassApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_applications'));
  }
  public set bypassApplications(value: string[]) {
    this._bypassApplications = value;
  }
  public resetBypassApplications() {
    this._bypassApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassApplicationsInput() {
    return this._bypassApplications;
  }

  // bypass_plugins - computed: true, optional: true, required: false
  private _bypassPlugins?: string[]; 
  public get bypassPlugins() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_plugins'));
  }
  public set bypassPlugins(value: string[]) {
    this._bypassPlugins = value;
  }
  public resetBypassPlugins() {
    this._bypassPlugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassPluginsInput() {
    return this._bypassPlugins;
  }

  // enable_smart_browser_isolation - computed: true, optional: true, required: false
  private _enableSmartBrowserIsolation?: boolean | cdktf.IResolvable; 
  public get enableSmartBrowserIsolation() {
    return this.getBooleanAttribute('enable_smart_browser_isolation');
  }
  public set enableSmartBrowserIsolation(value: boolean | cdktf.IResolvable) {
    this._enableSmartBrowserIsolation = value;
  }
  public resetEnableSmartBrowserIsolation() {
    this._enableSmartBrowserIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSmartBrowserIsolationInput() {
    return this._enableSmartBrowserIsolation;
  }

  // enable_warnings - computed: true, optional: true, required: false
  private _enableWarnings?: boolean | cdktf.IResolvable; 
  public get enableWarnings() {
    return this.getBooleanAttribute('enable_warnings');
  }
  public set enableWarnings(value: boolean | cdktf.IResolvable) {
    this._enableWarnings = value;
  }
  public resetEnableWarnings() {
    this._enableWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWarningsInput() {
    return this._enableWarnings;
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

  // plugin_check_frequency - computed: false, optional: true, required: false
  private _pluginCheckFrequency?: string; 
  public get pluginCheckFrequency() {
    return this.getStringAttribute('plugin_check_frequency');
  }
  public set pluginCheckFrequency(value: string) {
    this._pluginCheckFrequency = value;
  }
  public resetPluginCheckFrequency() {
    this._pluginCheckFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginCheckFrequencyInput() {
    return this._pluginCheckFrequency;
  }

  // smart_isolation_groups - computed: false, optional: true, required: false
  private _smartIsolationGroups = new BrowserControlPolicySmartIsolationGroupsOutputReference(this, "smart_isolation_groups");
  public get smartIsolationGroups() {
    return this._smartIsolationGroups;
  }
  public putSmartIsolationGroups(value: BrowserControlPolicySmartIsolationGroups) {
    this._smartIsolationGroups.internalValue = value;
  }
  public resetSmartIsolationGroups() {
    this._smartIsolationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartIsolationGroupsInput() {
    return this._smartIsolationGroups.internalValue;
  }

  // smart_isolation_profile - computed: false, optional: true, required: false
  private _smartIsolationProfile = new BrowserControlPolicySmartIsolationProfileList(this, "smart_isolation_profile", false);
  public get smartIsolationProfile() {
    return this._smartIsolationProfile;
  }
  public putSmartIsolationProfile(value: BrowserControlPolicySmartIsolationProfile[] | cdktf.IResolvable) {
    this._smartIsolationProfile.internalValue = value;
  }
  public resetSmartIsolationProfile() {
    this._smartIsolationProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartIsolationProfileInput() {
    return this._smartIsolationProfile.internalValue;
  }

  // smart_isolation_users - computed: false, optional: true, required: false
  private _smartIsolationUsers = new BrowserControlPolicySmartIsolationUsersOutputReference(this, "smart_isolation_users");
  public get smartIsolationUsers() {
    return this._smartIsolationUsers;
  }
  public putSmartIsolationUsers(value: BrowserControlPolicySmartIsolationUsers) {
    this._smartIsolationUsers.internalValue = value;
  }
  public resetSmartIsolationUsers() {
    this._smartIsolationUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartIsolationUsersInput() {
    return this._smartIsolationUsers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_all_browsers: cdktf.booleanToTerraform(this._allowAllBrowsers),
      blocked_chrome_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedChromeVersions),
      blocked_firefox_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedFirefoxVersions),
      blocked_internet_explorer_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedInternetExplorerVersions),
      blocked_opera_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedOperaVersions),
      blocked_safari_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedSafariVersions),
      bypass_all_browsers: cdktf.booleanToTerraform(this._bypassAllBrowsers),
      bypass_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bypassApplications),
      bypass_plugins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bypassPlugins),
      enable_smart_browser_isolation: cdktf.booleanToTerraform(this._enableSmartBrowserIsolation),
      enable_warnings: cdktf.booleanToTerraform(this._enableWarnings),
      id: cdktf.stringToTerraform(this._id),
      plugin_check_frequency: cdktf.stringToTerraform(this._pluginCheckFrequency),
      smart_isolation_groups: browserControlPolicySmartIsolationGroupsToTerraform(this._smartIsolationGroups.internalValue),
      smart_isolation_profile: cdktf.listMapper(browserControlPolicySmartIsolationProfileToTerraform, true)(this._smartIsolationProfile.internalValue),
      smart_isolation_users: browserControlPolicySmartIsolationUsersToTerraform(this._smartIsolationUsers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_all_browsers: {
        value: cdktf.booleanToHclTerraform(this._allowAllBrowsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocked_chrome_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedChromeVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blocked_firefox_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedFirefoxVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blocked_internet_explorer_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedInternetExplorerVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blocked_opera_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedOperaVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blocked_safari_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedSafariVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bypass_all_browsers: {
        value: cdktf.booleanToHclTerraform(this._bypassAllBrowsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bypassApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bypass_plugins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bypassPlugins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_smart_browser_isolation: {
        value: cdktf.booleanToHclTerraform(this._enableSmartBrowserIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_warnings: {
        value: cdktf.booleanToHclTerraform(this._enableWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_check_frequency: {
        value: cdktf.stringToHclTerraform(this._pluginCheckFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_isolation_groups: {
        value: browserControlPolicySmartIsolationGroupsToHclTerraform(this._smartIsolationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BrowserControlPolicySmartIsolationGroupsList",
      },
      smart_isolation_profile: {
        value: cdktf.listMapperHcl(browserControlPolicySmartIsolationProfileToHclTerraform, true)(this._smartIsolationProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrowserControlPolicySmartIsolationProfileList",
      },
      smart_isolation_users: {
        value: browserControlPolicySmartIsolationUsersToHclTerraform(this._smartIsolationUsers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BrowserControlPolicySmartIsolationUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
