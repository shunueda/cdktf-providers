// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_uri
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementResourceUriConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_uri#id DataCheckpointManagementResourceUri#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_uri#name DataCheckpointManagementResourceUri#name}
  */
  readonly name?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_uri#uid DataCheckpointManagementResourceUri#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementResourceUriAction {
}

export function dataCheckpointManagementResourceUriActionToTerraform(struct?: DataCheckpointManagementResourceUriAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceUriActionToHclTerraform(struct?: DataCheckpointManagementResourceUriAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceUriActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceUriAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceUriAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replacement_uri - computed: true, optional: false, required: false
  public get replacementUri() {
    return this.getStringAttribute('replacement_uri');
  }

  // strip_activex_tags - computed: true, optional: false, required: false
  public get stripActivexTags() {
    return this.getBooleanAttribute('strip_activex_tags');
  }

  // strip_applet_tags - computed: true, optional: false, required: false
  public get stripAppletTags() {
    return this.getBooleanAttribute('strip_applet_tags');
  }

  // strip_ftp_links - computed: true, optional: false, required: false
  public get stripFtpLinks() {
    return this.getBooleanAttribute('strip_ftp_links');
  }

  // strip_port_strings - computed: true, optional: false, required: false
  public get stripPortStrings() {
    return this.getBooleanAttribute('strip_port_strings');
  }

  // strip_script_tags - computed: true, optional: false, required: false
  public get stripScriptTags() {
    return this.getBooleanAttribute('strip_script_tags');
  }
}

export class DataCheckpointManagementResourceUriActionList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceUriActionOutputReference {
    return new DataCheckpointManagementResourceUriActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementResourceUriCvp {
}

export function dataCheckpointManagementResourceUriCvpToTerraform(struct?: DataCheckpointManagementResourceUriCvp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceUriCvpToHclTerraform(struct?: DataCheckpointManagementResourceUriCvp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceUriCvpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceUriCvp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceUriCvp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_to_modify_content - computed: true, optional: false, required: false
  public get allowedToModifyContent() {
    return this.getBooleanAttribute('allowed_to_modify_content');
  }

  // enable_cvp - computed: true, optional: false, required: false
  public get enableCvp() {
    return this.getBooleanAttribute('enable_cvp');
  }

  // reply_order - computed: true, optional: false, required: false
  public get replyOrder() {
    return this.getStringAttribute('reply_order');
  }

  // send_http_headers_to_cvp - computed: true, optional: false, required: false
  public get sendHttpHeadersToCvp() {
    return this.getBooleanAttribute('send_http_headers_to_cvp');
  }

  // send_http_request_to_cvp - computed: true, optional: false, required: false
  public get sendHttpRequestToCvp() {
    return this.getBooleanAttribute('send_http_request_to_cvp');
  }

  // send_only_unsafe_file_types - computed: true, optional: false, required: false
  public get sendOnlyUnsafeFileTypes() {
    return this.getBooleanAttribute('send_only_unsafe_file_types');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataCheckpointManagementResourceUriCvpList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceUriCvpOutputReference {
    return new DataCheckpointManagementResourceUriCvpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementResourceUriMatchUfp {
}

export function dataCheckpointManagementResourceUriMatchUfpToTerraform(struct?: DataCheckpointManagementResourceUriMatchUfp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceUriMatchUfpToHclTerraform(struct?: DataCheckpointManagementResourceUriMatchUfp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceUriMatchUfpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceUriMatchUfp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceUriMatchUfp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // caching_control - computed: true, optional: false, required: false
  public get cachingControl() {
    return this.getStringAttribute('caching_control');
  }

  // ignore_ufp_server_after_failure - computed: true, optional: false, required: false
  public get ignoreUfpServerAfterFailure() {
    return this.getBooleanAttribute('ignore_ufp_server_after_failure');
  }

  // number_of_failures_before_ignore - computed: true, optional: false, required: false
  public get numberOfFailuresBeforeIgnore() {
    return this.getNumberAttribute('number_of_failures_before_ignore');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // timeout_before_reconnecting - computed: true, optional: false, required: false
  public get timeoutBeforeReconnecting() {
    return this.getNumberAttribute('timeout_before_reconnecting');
  }
}

export class DataCheckpointManagementResourceUriMatchUfpList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceUriMatchUfpOutputReference {
    return new DataCheckpointManagementResourceUriMatchUfpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementResourceUriMatchWildcardsMethods {
}

export function dataCheckpointManagementResourceUriMatchWildcardsMethodsToTerraform(struct?: DataCheckpointManagementResourceUriMatchWildcardsMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceUriMatchWildcardsMethodsToHclTerraform(struct?: DataCheckpointManagementResourceUriMatchWildcardsMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceUriMatchWildcardsMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceUriMatchWildcardsMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceUriMatchWildcardsMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // get - computed: true, optional: false, required: false
  public get get() {
    return this.getBooleanAttribute('get');
  }

  // head - computed: true, optional: false, required: false
  public get head() {
    return this.getBooleanAttribute('head');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getStringAttribute('other');
  }

  // post - computed: true, optional: false, required: false
  public get post() {
    return this.getBooleanAttribute('post');
  }

  // put - computed: true, optional: false, required: false
  public get put() {
    return this.getBooleanAttribute('put');
  }
}

export class DataCheckpointManagementResourceUriMatchWildcardsMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceUriMatchWildcardsMethodsOutputReference {
    return new DataCheckpointManagementResourceUriMatchWildcardsMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementResourceUriMatchWildcardsSchemes {
}

export function dataCheckpointManagementResourceUriMatchWildcardsSchemesToTerraform(struct?: DataCheckpointManagementResourceUriMatchWildcardsSchemes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceUriMatchWildcardsSchemesToHclTerraform(struct?: DataCheckpointManagementResourceUriMatchWildcardsSchemes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceUriMatchWildcardsSchemesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceUriMatchWildcardsSchemes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceUriMatchWildcardsSchemes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ftp - computed: true, optional: false, required: false
  public get ftp() {
    return this.getBooleanAttribute('ftp');
  }

  // gopher - computed: true, optional: false, required: false
  public get gopher() {
    return this.getBooleanAttribute('gopher');
  }

  // http - computed: true, optional: false, required: false
  public get http() {
    return this.getBooleanAttribute('http');
  }

  // mailto - computed: true, optional: false, required: false
  public get mailto() {
    return this.getBooleanAttribute('mailto');
  }

  // news - computed: true, optional: false, required: false
  public get news() {
    return this.getBooleanAttribute('news');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getStringAttribute('other');
  }

  // wais - computed: true, optional: false, required: false
  public get wais() {
    return this.getBooleanAttribute('wais');
  }
}

export class DataCheckpointManagementResourceUriMatchWildcardsSchemesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceUriMatchWildcardsSchemesOutputReference {
    return new DataCheckpointManagementResourceUriMatchWildcardsSchemesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementResourceUriMatchWildcards {
}

export function dataCheckpointManagementResourceUriMatchWildcardsToTerraform(struct?: DataCheckpointManagementResourceUriMatchWildcards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceUriMatchWildcardsToHclTerraform(struct?: DataCheckpointManagementResourceUriMatchWildcards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceUriMatchWildcardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceUriMatchWildcards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceUriMatchWildcards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // methods - computed: true, optional: false, required: false
  private _methods = new DataCheckpointManagementResourceUriMatchWildcardsMethodsList(this, "methods", false);
  public get methods() {
    return this._methods;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // schemes - computed: true, optional: false, required: false
  private _schemes = new DataCheckpointManagementResourceUriMatchWildcardsSchemesList(this, "schemes", false);
  public get schemes() {
    return this._schemes;
  }
}

export class DataCheckpointManagementResourceUriMatchWildcardsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceUriMatchWildcardsOutputReference {
    return new DataCheckpointManagementResourceUriMatchWildcardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_uri checkpoint_management_resource_uri}
*/
export class DataCheckpointManagementResourceUri extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_resource_uri";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementResourceUri resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementResourceUri to import
  * @param importFromId The id of the existing DataCheckpointManagementResourceUri that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_uri#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementResourceUri to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_resource_uri", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_uri checkpoint_management_resource_uri} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementResourceUriConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementResourceUriConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_resource_uri',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  private _action = new DataCheckpointManagementResourceUriActionList(this, "action", false);
  public get action() {
    return this._action;
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // connection_methods - computed: true, optional: false, required: false
  private _connectionMethods = new cdktf.StringMap(this, "connection_methods");
  public get connectionMethods() {
    return this._connectionMethods;
  }

  // cvp - computed: true, optional: false, required: false
  private _cvp = new DataCheckpointManagementResourceUriCvpList(this, "cvp", false);
  public get cvp() {
    return this._cvp;
  }

  // exception_track - computed: true, optional: false, required: false
  public get exceptionTrack() {
    return this.getStringAttribute('exception_track');
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

  // match_ufp - computed: true, optional: false, required: false
  private _matchUfp = new DataCheckpointManagementResourceUriMatchUfpList(this, "match_ufp", false);
  public get matchUfp() {
    return this._matchUfp;
  }

  // match_wildcards - computed: true, optional: false, required: false
  private _matchWildcards = new DataCheckpointManagementResourceUriMatchWildcardsList(this, "match_wildcards", false);
  public get matchWildcards() {
    return this._matchWildcards;
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

  // soap - computed: true, optional: false, required: false
  private _soap = new cdktf.StringMap(this, "soap");
  public get soap() {
    return this._soap;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // uri_match_specification_type - computed: true, optional: false, required: false
  public get uriMatchSpecificationType() {
    return this.getStringAttribute('uri_match_specification_type');
  }

  // use_this_resource_to - computed: true, optional: false, required: false
  public get useThisResourceTo() {
    return this.getStringAttribute('use_this_resource_to');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
