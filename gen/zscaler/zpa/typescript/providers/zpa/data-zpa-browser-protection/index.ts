// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/browser_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaBrowserProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/browser_protection#name DataZpaBrowserProtection#name}
  */
  readonly name?: string;
}
export interface DataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowser {
}

export function dataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowserToTerraform(struct?: DataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowserToHclTerraform(struct?: DataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser_eng - computed: true, optional: false, required: false
  public get browserEng() {
    return this.getBooleanAttribute('browser_eng');
  }

  // browser_eng_ver - computed: true, optional: false, required: false
  public get browserEngVer() {
    return this.getBooleanAttribute('browser_eng_ver');
  }

  // browser_name - computed: true, optional: false, required: false
  public get browserName() {
    return this.getBooleanAttribute('browser_name');
  }

  // browser_version - computed: true, optional: false, required: false
  public get browserVersion() {
    return this.getBooleanAttribute('browser_version');
  }

  // canvas - computed: true, optional: false, required: false
  public get canvas() {
    return this.getBooleanAttribute('canvas');
  }

  // flash_ver - computed: true, optional: false, required: false
  public get flashVer() {
    return this.getBooleanAttribute('flash_ver');
  }

  // fp_usr_agent_str - computed: true, optional: false, required: false
  public get fpUsrAgentStr() {
    return this.getBooleanAttribute('fp_usr_agent_str');
  }

  // is_cookie - computed: true, optional: false, required: false
  public get isCookie() {
    return this.getBooleanAttribute('is_cookie');
  }

  // is_local_storage - computed: true, optional: false, required: false
  public get isLocalStorage() {
    return this.getBooleanAttribute('is_local_storage');
  }

  // is_sess_storage - computed: true, optional: false, required: false
  public get isSessStorage() {
    return this.getBooleanAttribute('is_sess_storage');
  }

  // ja3 - computed: true, optional: false, required: false
  public get ja3() {
    return this.getBooleanAttribute('ja3');
  }

  // mime - computed: true, optional: false, required: false
  public get mime() {
    return this.getBooleanAttribute('mime');
  }

  // plugin - computed: true, optional: false, required: false
  public get plugin() {
    return this.getBooleanAttribute('plugin');
  }

  // silverlight_ver - computed: true, optional: false, required: false
  public get silverlightVer() {
    return this.getBooleanAttribute('silverlight_ver');
  }
}

export class DataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowserList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowserOutputReference {
    return new DataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocation {
}

export function dataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocationToTerraform(struct?: DataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocationToHclTerraform(struct?: DataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lat - computed: true, optional: false, required: false
  public get lat() {
    return this.getBooleanAttribute('lat');
  }

  // lon - computed: true, optional: false, required: false
  public get lon() {
    return this.getBooleanAttribute('lon');
  }
}

export class DataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocationOutputReference {
    return new DataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystem {
}

export function dataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystemToTerraform(struct?: DataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystemToHclTerraform(struct?: DataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avail_screen_resolution - computed: true, optional: false, required: false
  public get availScreenResolution() {
    return this.getBooleanAttribute('avail_screen_resolution');
  }

  // cpu_arch - computed: true, optional: false, required: false
  public get cpuArch() {
    return this.getBooleanAttribute('cpu_arch');
  }

  // curr_screen_resolution - computed: true, optional: false, required: false
  public get currScreenResolution() {
    return this.getBooleanAttribute('curr_screen_resolution');
  }

  // font - computed: true, optional: false, required: false
  public get font() {
    return this.getBooleanAttribute('font');
  }

  // java_ver - computed: true, optional: false, required: false
  public get javaVer() {
    return this.getBooleanAttribute('java_ver');
  }

  // mobile_dev_type - computed: true, optional: false, required: false
  public get mobileDevType() {
    return this.getBooleanAttribute('mobile_dev_type');
  }

  // monitor_mobile - computed: true, optional: false, required: false
  public get monitorMobile() {
    return this.getBooleanAttribute('monitor_mobile');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getBooleanAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getBooleanAttribute('os_version');
  }

  // sys_lang - computed: true, optional: false, required: false
  public get sysLang() {
    return this.getBooleanAttribute('sys_lang');
  }

  // tz - computed: true, optional: false, required: false
  public get tz() {
    return this.getBooleanAttribute('tz');
  }

  // usr_lang - computed: true, optional: false, required: false
  public get usrLang() {
    return this.getBooleanAttribute('usr_lang');
  }
}

export class DataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystemList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystemOutputReference {
    return new DataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaBrowserProtectionCriteriaFingerPrintCriteria {
}

export function dataZpaBrowserProtectionCriteriaFingerPrintCriteriaToTerraform(struct?: DataZpaBrowserProtectionCriteriaFingerPrintCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaBrowserProtectionCriteriaFingerPrintCriteriaToHclTerraform(struct?: DataZpaBrowserProtectionCriteriaFingerPrintCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaBrowserProtectionCriteriaFingerPrintCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaBrowserProtectionCriteriaFingerPrintCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaBrowserProtectionCriteriaFingerPrintCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser - computed: true, optional: false, required: false
  private _browser = new DataZpaBrowserProtectionCriteriaFingerPrintCriteriaBrowserList(this, "browser", false);
  public get browser() {
    return this._browser;
  }

  // collect_location - computed: true, optional: false, required: false
  public get collectLocation() {
    return this.getBooleanAttribute('collect_location');
  }

  // fingerprint_timeout - computed: true, optional: false, required: false
  public get fingerprintTimeout() {
    return this.getStringAttribute('fingerprint_timeout');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataZpaBrowserProtectionCriteriaFingerPrintCriteriaLocationList(this, "location", false);
  public get location() {
    return this._location;
  }

  // system - computed: true, optional: false, required: false
  private _system = new DataZpaBrowserProtectionCriteriaFingerPrintCriteriaSystemList(this, "system", false);
  public get systemAttribute() {
    return this._system;
  }
}

export class DataZpaBrowserProtectionCriteriaFingerPrintCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaBrowserProtectionCriteriaFingerPrintCriteriaOutputReference {
    return new DataZpaBrowserProtectionCriteriaFingerPrintCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaBrowserProtectionCriteria {
}

export function dataZpaBrowserProtectionCriteriaToTerraform(struct?: DataZpaBrowserProtectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaBrowserProtectionCriteriaToHclTerraform(struct?: DataZpaBrowserProtectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaBrowserProtectionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaBrowserProtectionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaBrowserProtectionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // finger_print_criteria - computed: true, optional: false, required: false
  private _fingerPrintCriteria = new DataZpaBrowserProtectionCriteriaFingerPrintCriteriaList(this, "finger_print_criteria", false);
  public get fingerPrintCriteria() {
    return this._fingerPrintCriteria;
  }
}

export class DataZpaBrowserProtectionCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaBrowserProtectionCriteriaOutputReference {
    return new DataZpaBrowserProtectionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/browser_protection zpa_browser_protection}
*/
export class DataZpaBrowserProtection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_browser_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaBrowserProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaBrowserProtection to import
  * @param importFromId The id of the existing DataZpaBrowserProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/browser_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaBrowserProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_browser_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/browser_protection zpa_browser_protection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaBrowserProtectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaBrowserProtectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_browser_protection',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataZpaBrowserProtectionCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }

  // criteria_flags_mask - computed: true, optional: false, required: false
  public get criteriaFlagsMask() {
    return this.getStringAttribute('criteria_flags_mask');
  }

  // default_csp - computed: true, optional: false, required: false
  public get defaultCsp() {
    return this.getBooleanAttribute('default_csp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
