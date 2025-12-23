// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/applicationinsightspolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviApplicationinsightspolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/applicationinsightspolicy#id DataAviApplicationinsightspolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/applicationinsightspolicy#name DataAviApplicationinsightspolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/applicationinsightspolicy#tenant_ref DataAviApplicationinsightspolicy#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/applicationinsightspolicy#uuid DataAviApplicationinsightspolicy#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications {
}

export function dataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsToTerraform(struct?: DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsToHclTerraform(struct?: DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_defined_type - computed: true, optional: false, required: false
  public get userDefinedType() {
    return this.getStringAttribute('user_defined_type');
  }
}

export class DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsOutputReference {
    return new DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBots {
}

export function dataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsToTerraform(struct?: DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsToHclTerraform(struct?: DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // classifications - computed: true, optional: false, required: false
  private _classifications = new DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }

  // match_operation - computed: true, optional: false, required: false
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
}

export class DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsOutputReference {
    return new DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationinsightspolicyApplicationInsightsParams {
}

export function dataAviApplicationinsightspolicyApplicationInsightsParamsToTerraform(struct?: DataAviApplicationinsightspolicyApplicationInsightsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationinsightspolicyApplicationInsightsParamsToHclTerraform(struct?: DataAviApplicationinsightspolicyApplicationInsightsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationinsightspolicyApplicationInsightsParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationinsightspolicyApplicationInsightsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationinsightspolicyApplicationInsightsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_learn_from_bots - computed: true, optional: false, required: false
  public get enableLearnFromBots() {
    return this.getStringAttribute('enable_learn_from_bots');
  }

  // enable_per_uri_learning - computed: true, optional: false, required: false
  public get enablePerUriLearning() {
    return this.getStringAttribute('enable_per_uri_learning');
  }

  // learn_from_authenticated_clients_only - computed: true, optional: false, required: false
  public get learnFromAuthenticatedClientsOnly() {
    return this.getStringAttribute('learn_from_authenticated_clients_only');
  }

  // learn_from_bots - computed: true, optional: false, required: false
  private _learnFromBots = new DataAviApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsList(this, "learn_from_bots", true);
  public get learnFromBots() {
    return this._learnFromBots;
  }

  // learn_from_urls_without_args - computed: true, optional: false, required: false
  public get learnFromUrlsWithoutArgs() {
    return this.getStringAttribute('learn_from_urls_without_args');
  }

  // max_params - computed: true, optional: false, required: false
  public get maxParams() {
    return this.getStringAttribute('max_params');
  }

  // max_uris - computed: true, optional: false, required: false
  public get maxUris() {
    return this.getStringAttribute('max_uris');
  }

  // trusted_ipgroup_ref - computed: true, optional: false, required: false
  public get trustedIpgroupRef() {
    return this.getStringAttribute('trusted_ipgroup_ref');
  }
}

export class DataAviApplicationinsightspolicyApplicationInsightsParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationinsightspolicyApplicationInsightsParamsOutputReference {
    return new DataAviApplicationinsightspolicyApplicationInsightsParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationinsightspolicyApplicationSamplingConfig {
}

export function dataAviApplicationinsightspolicyApplicationSamplingConfigToTerraform(struct?: DataAviApplicationinsightspolicyApplicationSamplingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationinsightspolicyApplicationSamplingConfigToHclTerraform(struct?: DataAviApplicationinsightspolicyApplicationSamplingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationinsightspolicyApplicationSamplingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationinsightspolicyApplicationSamplingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationinsightspolicyApplicationSamplingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_sampling_percent - computed: true, optional: false, required: false
  public get maxSamplingPercent() {
    return this.getStringAttribute('max_sampling_percent');
  }

  // min_update_interval - computed: true, optional: false, required: false
  public get minUpdateInterval() {
    return this.getStringAttribute('min_update_interval');
  }
}

export class DataAviApplicationinsightspolicyApplicationSamplingConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationinsightspolicyApplicationSamplingConfigOutputReference {
    return new DataAviApplicationinsightspolicyApplicationSamplingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationinsightspolicyConfigpbAttributes {
}

export function dataAviApplicationinsightspolicyConfigpbAttributesToTerraform(struct?: DataAviApplicationinsightspolicyConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationinsightspolicyConfigpbAttributesToHclTerraform(struct?: DataAviApplicationinsightspolicyConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationinsightspolicyConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationinsightspolicyConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationinsightspolicyConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviApplicationinsightspolicyConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationinsightspolicyConfigpbAttributesOutputReference {
    return new DataAviApplicationinsightspolicyConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/applicationinsightspolicy avi_applicationinsightspolicy}
*/
export class DataAviApplicationinsightspolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_applicationinsightspolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviApplicationinsightspolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviApplicationinsightspolicy to import
  * @param importFromId The id of the existing DataAviApplicationinsightspolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/applicationinsightspolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviApplicationinsightspolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_applicationinsightspolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/applicationinsightspolicy avi_applicationinsightspolicy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviApplicationinsightspolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviApplicationinsightspolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_applicationinsightspolicy',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
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
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_insights_params - computed: true, optional: false, required: false
  private _applicationInsightsParams = new DataAviApplicationinsightspolicyApplicationInsightsParamsList(this, "application_insights_params", true);
  public get applicationInsightsParams() {
    return this._applicationInsightsParams;
  }

  // application_sampling_config - computed: true, optional: false, required: false
  private _applicationSamplingConfig = new DataAviApplicationinsightspolicyApplicationSamplingConfigList(this, "application_sampling_config", true);
  public get applicationSamplingConfig() {
    return this._applicationSamplingConfig;
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviApplicationinsightspolicyConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_application_insights - computed: true, optional: false, required: false
  public get enableApplicationInsights() {
    return this.getStringAttribute('enable_application_insights');
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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
