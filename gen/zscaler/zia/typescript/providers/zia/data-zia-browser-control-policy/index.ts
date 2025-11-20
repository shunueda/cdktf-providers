// https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/data-sources/browser_control_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaBrowserControlPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/data-sources/browser_control_policy#id DataZiaBrowserControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataZiaBrowserControlPolicySmartIsolationProfile {
}

export function dataZiaBrowserControlPolicySmartIsolationProfileToTerraform(struct?: DataZiaBrowserControlPolicySmartIsolationProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaBrowserControlPolicySmartIsolationProfileToHclTerraform(struct?: DataZiaBrowserControlPolicySmartIsolationProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaBrowserControlPolicySmartIsolationProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaBrowserControlPolicySmartIsolationProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaBrowserControlPolicySmartIsolationProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_profile - computed: true, optional: false, required: false
  public get defaultProfile() {
    return this.getBooleanAttribute('default_profile');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataZiaBrowserControlPolicySmartIsolationProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaBrowserControlPolicySmartIsolationProfileOutputReference {
    return new DataZiaBrowserControlPolicySmartIsolationProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/data-sources/browser_control_policy zia_browser_control_policy}
*/
export class DataZiaBrowserControlPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_browser_control_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaBrowserControlPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaBrowserControlPolicy to import
  * @param importFromId The id of the existing DataZiaBrowserControlPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/data-sources/browser_control_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaBrowserControlPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_browser_control_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/data-sources/browser_control_policy zia_browser_control_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaBrowserControlPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaBrowserControlPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_browser_control_policy',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.0',
        providerVersionConstraint: '4.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_all_browsers - computed: true, optional: false, required: false
  public get allowAllBrowsers() {
    return this.getBooleanAttribute('allow_all_browsers');
  }

  // blocked_chrome_versions - computed: true, optional: false, required: false
  public get blockedChromeVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_chrome_versions'));
  }

  // blocked_firefox_versions - computed: true, optional: false, required: false
  public get blockedFirefoxVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_firefox_versions'));
  }

  // blocked_internet_explorer_versions - computed: true, optional: false, required: false
  public get blockedInternetExplorerVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_internet_explorer_versions'));
  }

  // blocked_opera_versions - computed: true, optional: false, required: false
  public get blockedOperaVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_opera_versions'));
  }

  // blocked_safari_versions - computed: true, optional: false, required: false
  public get blockedSafariVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_safari_versions'));
  }

  // bypass_all_browsers - computed: true, optional: false, required: false
  public get bypassAllBrowsers() {
    return this.getBooleanAttribute('bypass_all_browsers');
  }

  // bypass_applications - computed: true, optional: false, required: false
  public get bypassApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_applications'));
  }

  // bypass_plugins - computed: true, optional: false, required: false
  public get bypassPlugins() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_plugins'));
  }

  // enable_smart_browser_isolation - computed: true, optional: false, required: false
  public get enableSmartBrowserIsolation() {
    return this.getBooleanAttribute('enable_smart_browser_isolation');
  }

  // enable_warnings - computed: true, optional: false, required: false
  public get enableWarnings() {
    return this.getBooleanAttribute('enable_warnings');
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

  // plugin_check_frequency - computed: true, optional: false, required: false
  public get pluginCheckFrequency() {
    return this.getStringAttribute('plugin_check_frequency');
  }

  // smart_isolation_profile - computed: true, optional: false, required: false
  private _smartIsolationProfile = new DataZiaBrowserControlPolicySmartIsolationProfileList(this, "smart_isolation_profile", false);
  public get smartIsolationProfile() {
    return this._smartIsolationProfile;
  }

  // smart_isolation_profile_id - computed: true, optional: false, required: false
  public get smartIsolationProfileId() {
    return this.getNumberAttribute('smart_isolation_profile_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
