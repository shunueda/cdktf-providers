// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/redirect_validation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateRedirectValidationConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStruct {
}

export function dataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStructToTerraform(struct?: DataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStructToHclTerraform(struct?: DataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_query_and_fragment - computed: true, optional: false, required: false
  public get allowQueryAndFragment() {
    return this.getBooleanAttribute('allow_query_and_fragment');
  }

  // idp_discovery - computed: true, optional: false, required: false
  public get idpDiscovery() {
    return this.getBooleanAttribute('idp_discovery');
  }

  // in_error_resource - computed: true, optional: false, required: false
  public get inErrorResource() {
    return this.getBooleanAttribute('in_error_resource');
  }

  // target_resource_slo - computed: true, optional: false, required: false
  public get targetResourceSlo() {
    return this.getBooleanAttribute('target_resource_slo');
  }

  // target_resource_sso - computed: true, optional: false, required: false
  public get targetResourceSso() {
    return this.getBooleanAttribute('target_resource_sso');
  }

  // valid_uri - computed: true, optional: false, required: false
  public get validUri() {
    return this.getStringAttribute('valid_uri');
  }
}

export class DataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStructOutputReference {
    return new DataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStruct {
}

export function dataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStructToTerraform(struct?: DataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStructToHclTerraform(struct?: DataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_query_and_fragment - computed: true, optional: false, required: false
  public get allowQueryAndFragment() {
    return this.getBooleanAttribute('allow_query_and_fragment');
  }

  // idp_discovery - computed: true, optional: false, required: false
  public get idpDiscovery() {
    return this.getBooleanAttribute('idp_discovery');
  }

  // in_error_resource - computed: true, optional: false, required: false
  public get inErrorResource() {
    return this.getBooleanAttribute('in_error_resource');
  }

  // require_https - computed: true, optional: false, required: false
  public get requireHttps() {
    return this.getBooleanAttribute('require_https');
  }

  // target_resource_slo - computed: true, optional: false, required: false
  public get targetResourceSlo() {
    return this.getBooleanAttribute('target_resource_slo');
  }

  // target_resource_sso - computed: true, optional: false, required: false
  public get targetResourceSso() {
    return this.getBooleanAttribute('target_resource_sso');
  }

  // valid_domain - computed: true, optional: false, required: false
  public get validDomain() {
    return this.getStringAttribute('valid_domain');
  }

  // valid_path - computed: true, optional: false, required: false
  public get validPath() {
    return this.getStringAttribute('valid_path');
  }
}

export class DataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStructOutputReference {
    return new DataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateRedirectValidationRedirectValidationLocalSettings {
}

export function dataPingfederateRedirectValidationRedirectValidationLocalSettingsToTerraform(struct?: DataPingfederateRedirectValidationRedirectValidationLocalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateRedirectValidationRedirectValidationLocalSettingsToHclTerraform(struct?: DataPingfederateRedirectValidationRedirectValidationLocalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateRedirectValidationRedirectValidationLocalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateRedirectValidationRedirectValidationLocalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateRedirectValidationRedirectValidationLocalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_in_error_resource_validation - computed: true, optional: false, required: false
  public get enableInErrorResourceValidation() {
    return this.getBooleanAttribute('enable_in_error_resource_validation');
  }

  // enable_target_resource_validation_for_idp_discovery - computed: true, optional: false, required: false
  public get enableTargetResourceValidationForIdpDiscovery() {
    return this.getBooleanAttribute('enable_target_resource_validation_for_idp_discovery');
  }

  // enable_target_resource_validation_for_slo - computed: true, optional: false, required: false
  public get enableTargetResourceValidationForSlo() {
    return this.getBooleanAttribute('enable_target_resource_validation_for_slo');
  }

  // enable_target_resource_validation_for_sso - computed: true, optional: false, required: false
  public get enableTargetResourceValidationForSso() {
    return this.getBooleanAttribute('enable_target_resource_validation_for_sso');
  }

  // uri_allow_list - computed: true, optional: false, required: false
  private _uriAllowList = new DataPingfederateRedirectValidationRedirectValidationLocalSettingsUriAllowListStructList(this, "uri_allow_list", true);
  public get uriAllowList() {
    return this._uriAllowList;
  }

  // white_list - computed: true, optional: false, required: false
  private _whiteList = new DataPingfederateRedirectValidationRedirectValidationLocalSettingsWhiteListStructList(this, "white_list", true);
  public get whiteList() {
    return this._whiteList;
  }
}
export interface DataPingfederateRedirectValidationRedirectValidationPartnerSettings {
}

export function dataPingfederateRedirectValidationRedirectValidationPartnerSettingsToTerraform(struct?: DataPingfederateRedirectValidationRedirectValidationPartnerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateRedirectValidationRedirectValidationPartnerSettingsToHclTerraform(struct?: DataPingfederateRedirectValidationRedirectValidationPartnerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateRedirectValidationRedirectValidationPartnerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateRedirectValidationRedirectValidationPartnerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateRedirectValidationRedirectValidationPartnerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_wreply_validation_slo - computed: true, optional: false, required: false
  public get enableWreplyValidationSlo() {
    return this.getBooleanAttribute('enable_wreply_validation_slo');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/redirect_validation pingfederate_redirect_validation}
*/
export class DataPingfederateRedirectValidation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_redirect_validation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateRedirectValidation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateRedirectValidation to import
  * @param importFromId The id of the existing DataPingfederateRedirectValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/redirect_validation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateRedirectValidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_redirect_validation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/redirect_validation pingfederate_redirect_validation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateRedirectValidationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateRedirectValidationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_redirect_validation',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // redirect_validation_local_settings - computed: true, optional: false, required: false
  private _redirectValidationLocalSettings = new DataPingfederateRedirectValidationRedirectValidationLocalSettingsOutputReference(this, "redirect_validation_local_settings");
  public get redirectValidationLocalSettings() {
    return this._redirectValidationLocalSettings;
  }

  // redirect_validation_partner_settings - computed: true, optional: false, required: false
  private _redirectValidationPartnerSettings = new DataPingfederateRedirectValidationRedirectValidationPartnerSettingsOutputReference(this, "redirect_validation_partner_settings");
  public get redirectValidationPartnerSettings() {
    return this._redirectValidationPartnerSettings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
