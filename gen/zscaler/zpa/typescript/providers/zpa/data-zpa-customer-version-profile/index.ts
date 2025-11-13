// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/customer_version_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaCustomerVersionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/customer_version_profile#name DataZpaCustomerVersionProfile#name}
  */
  readonly name: string;
}
export interface DataZpaCustomerVersionProfileCustomScopeCustomerIds {
}

export function dataZpaCustomerVersionProfileCustomScopeCustomerIdsToTerraform(struct?: DataZpaCustomerVersionProfileCustomScopeCustomerIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaCustomerVersionProfileCustomScopeCustomerIdsToHclTerraform(struct?: DataZpaCustomerVersionProfileCustomScopeCustomerIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaCustomerVersionProfileCustomScopeCustomerIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaCustomerVersionProfileCustomScopeCustomerIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaCustomerVersionProfileCustomScopeCustomerIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // exclude_constellation - computed: true, optional: false, required: false
  public get excludeConstellation() {
    return this.getBooleanAttribute('exclude_constellation');
  }

  // is_partner - computed: true, optional: false, required: false
  public get isPartner() {
    return this.getBooleanAttribute('is_partner');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZpaCustomerVersionProfileCustomScopeCustomerIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaCustomerVersionProfileCustomScopeCustomerIdsOutputReference {
    return new DataZpaCustomerVersionProfileCustomScopeCustomerIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaCustomerVersionProfileCustomScopeRequestCustomerIds {
}

export function dataZpaCustomerVersionProfileCustomScopeRequestCustomerIdsToTerraform(struct?: DataZpaCustomerVersionProfileCustomScopeRequestCustomerIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaCustomerVersionProfileCustomScopeRequestCustomerIdsToHclTerraform(struct?: DataZpaCustomerVersionProfileCustomScopeRequestCustomerIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaCustomerVersionProfileCustomScopeRequestCustomerIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaCustomerVersionProfileCustomScopeRequestCustomerIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaCustomerVersionProfileCustomScopeRequestCustomerIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_customer_ids - computed: true, optional: false, required: false
  public get addCustomerIds() {
    return this.getListAttribute('add_customer_ids');
  }

  // delete_customer_ids - computed: true, optional: false, required: false
  public get deleteCustomerIds() {
    return this.getListAttribute('delete_customer_ids');
  }
}

export class DataZpaCustomerVersionProfileCustomScopeRequestCustomerIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaCustomerVersionProfileCustomScopeRequestCustomerIdsOutputReference {
    return new DataZpaCustomerVersionProfileCustomScopeRequestCustomerIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaCustomerVersionProfileVersions {
}

export function dataZpaCustomerVersionProfileVersionsToTerraform(struct?: DataZpaCustomerVersionProfileVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaCustomerVersionProfileVersionsToHclTerraform(struct?: DataZpaCustomerVersionProfileVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaCustomerVersionProfileVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaCustomerVersionProfileVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaCustomerVersionProfileVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
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

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // restart_after_uptime_in_days - computed: true, optional: false, required: false
  public get restartAfterUptimeInDays() {
    return this.getStringAttribute('restart_after_uptime_in_days');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_profile_gid - computed: true, optional: false, required: false
  public get versionProfileGid() {
    return this.getStringAttribute('version_profile_gid');
  }
}

export class DataZpaCustomerVersionProfileVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaCustomerVersionProfileVersionsOutputReference {
    return new DataZpaCustomerVersionProfileVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/customer_version_profile zpa_customer_version_profile}
*/
export class DataZpaCustomerVersionProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_customer_version_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaCustomerVersionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaCustomerVersionProfile to import
  * @param importFromId The id of the existing DataZpaCustomerVersionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/customer_version_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaCustomerVersionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_customer_version_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/customer_version_profile zpa_customer_version_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaCustomerVersionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataZpaCustomerVersionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_customer_version_profile',
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

  // custom_scope_customer_ids - computed: true, optional: false, required: false
  private _customScopeCustomerIds = new DataZpaCustomerVersionProfileCustomScopeCustomerIdsList(this, "custom_scope_customer_ids", false);
  public get customScopeCustomerIds() {
    return this._customScopeCustomerIds;
  }

  // custom_scope_request_customer_ids - computed: true, optional: false, required: false
  private _customScopeRequestCustomerIds = new DataZpaCustomerVersionProfileCustomScopeRequestCustomerIdsList(this, "custom_scope_request_customer_ids", false);
  public get customScopeRequestCustomerIds() {
    return this._customScopeRequestCustomerIds;
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
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

  // number_of_assistants - computed: true, optional: false, required: false
  public get numberOfAssistants() {
    return this.getStringAttribute('number_of_assistants');
  }

  // number_of_customers - computed: true, optional: false, required: false
  public get numberOfCustomers() {
    return this.getStringAttribute('number_of_customers');
  }

  // number_of_private_brokers - computed: true, optional: false, required: false
  public get numberOfPrivateBrokers() {
    return this.getStringAttribute('number_of_private_brokers');
  }

  // number_of_site_controllers - computed: true, optional: false, required: false
  public get numberOfSiteControllers() {
    return this.getStringAttribute('number_of_site_controllers');
  }

  // number_of_updated_assistants - computed: true, optional: false, required: false
  public get numberOfUpdatedAssistants() {
    return this.getStringAttribute('number_of_updated_assistants');
  }

  // number_of_updated_private_brokers - computed: true, optional: false, required: false
  public get numberOfUpdatedPrivateBrokers() {
    return this.getStringAttribute('number_of_updated_private_brokers');
  }

  // number_of_updated_site_controllers - computed: true, optional: false, required: false
  public get numberOfUpdatedSiteControllers() {
    return this.getStringAttribute('number_of_updated_site_controllers');
  }

  // upgrade_priority - computed: true, optional: false, required: false
  public get upgradePriority() {
    return this.getStringAttribute('upgrade_priority');
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataZpaCustomerVersionProfileVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }

  // visibility_scope - computed: true, optional: false, required: false
  public get visibilityScope() {
    return this.getStringAttribute('visibility_scope');
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
