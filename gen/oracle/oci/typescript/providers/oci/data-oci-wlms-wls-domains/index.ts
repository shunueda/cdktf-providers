// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWlmsWlsDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#compartment_id DataOciWlmsWlsDomains#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#display_name DataOciWlmsWlsDomains#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#id DataOciWlmsWlsDomains#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#middleware_type DataOciWlmsWlsDomains#middleware_type}
  */
  readonly middlewareType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#patch_readiness_status DataOciWlmsWlsDomains#patch_readiness_status}
  */
  readonly patchReadinessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#state DataOciWlmsWlsDomains#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#weblogic_version DataOciWlmsWlsDomains#weblogic_version}
  */
  readonly weblogicVersion?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#filter DataOciWlmsWlsDomains#filter}
  */
  readonly filter?: DataOciWlmsWlsDomainsFilter[] | cdktf.IResolvable;
}
export interface DataOciWlmsWlsDomainsWlsDomainCollectionItemsConfiguration {
}

export function dataOciWlmsWlsDomainsWlsDomainCollectionItemsConfigurationToTerraform(struct?: DataOciWlmsWlsDomainsWlsDomainCollectionItemsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWlmsWlsDomainsWlsDomainCollectionItemsConfigurationToHclTerraform(struct?: DataOciWlmsWlsDomainsWlsDomainCollectionItemsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWlmsWlsDomainsWlsDomainCollectionItemsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWlmsWlsDomainsWlsDomainCollectionItemsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWlmsWlsDomainsWlsDomainCollectionItemsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_server_control_mode - computed: true, optional: false, required: false
  public get adminServerControlMode() {
    return this.getStringAttribute('admin_server_control_mode');
  }

  // admin_server_start_script_path - computed: true, optional: false, required: false
  public get adminServerStartScriptPath() {
    return this.getStringAttribute('admin_server_start_script_path');
  }

  // admin_server_stop_script_path - computed: true, optional: false, required: false
  public get adminServerStopScriptPath() {
    return this.getStringAttribute('admin_server_stop_script_path');
  }

  // is_patch_enabled - computed: true, optional: false, required: false
  public get isPatchEnabled() {
    return this.getBooleanAttribute('is_patch_enabled');
  }

  // is_rollback_on_failure - computed: true, optional: false, required: false
  public get isRollbackOnFailure() {
    return this.getBooleanAttribute('is_rollback_on_failure');
  }

  // managed_server_control_mode - computed: true, optional: false, required: false
  public get managedServerControlMode() {
    return this.getStringAttribute('managed_server_control_mode');
  }

  // managed_server_start_script_path - computed: true, optional: false, required: false
  public get managedServerStartScriptPath() {
    return this.getStringAttribute('managed_server_start_script_path');
  }

  // managed_server_stop_script_path - computed: true, optional: false, required: false
  public get managedServerStopScriptPath() {
    return this.getStringAttribute('managed_server_stop_script_path');
  }

  // servers_shutdown_timeout - computed: true, optional: false, required: false
  public get serversShutdownTimeout() {
    return this.getNumberAttribute('servers_shutdown_timeout');
  }
}

export class DataOciWlmsWlsDomainsWlsDomainCollectionItemsConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWlmsWlsDomainsWlsDomainCollectionItemsConfigurationOutputReference {
    return new DataOciWlmsWlsDomainsWlsDomainCollectionItemsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWlmsWlsDomainsWlsDomainCollectionItems {
}

export function dataOciWlmsWlsDomainsWlsDomainCollectionItemsToTerraform(struct?: DataOciWlmsWlsDomainsWlsDomainCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWlmsWlsDomainsWlsDomainCollectionItemsToHclTerraform(struct?: DataOciWlmsWlsDomainsWlsDomainCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWlmsWlsDomainsWlsDomainCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWlmsWlsDomainsWlsDomainCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWlmsWlsDomainsWlsDomainCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataOciWlmsWlsDomainsWlsDomainCollectionItemsConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_accepted_terms_and_conditions - computed: true, optional: false, required: false
  public get isAcceptedTermsAndConditions() {
    return this.getBooleanAttribute('is_accepted_terms_and_conditions');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // middleware_type - computed: true, optional: false, required: false
  public get middlewareType() {
    return this.getStringAttribute('middleware_type');
  }

  // patch_readiness_status - computed: true, optional: false, required: false
  public get patchReadinessStatus() {
    return this.getStringAttribute('patch_readiness_status');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // weblogic_version - computed: true, optional: false, required: false
  public get weblogicVersion() {
    return this.getStringAttribute('weblogic_version');
  }
}

export class DataOciWlmsWlsDomainsWlsDomainCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWlmsWlsDomainsWlsDomainCollectionItemsOutputReference {
    return new DataOciWlmsWlsDomainsWlsDomainCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWlmsWlsDomainsWlsDomainCollection {
}

export function dataOciWlmsWlsDomainsWlsDomainCollectionToTerraform(struct?: DataOciWlmsWlsDomainsWlsDomainCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWlmsWlsDomainsWlsDomainCollectionToHclTerraform(struct?: DataOciWlmsWlsDomainsWlsDomainCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWlmsWlsDomainsWlsDomainCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWlmsWlsDomainsWlsDomainCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWlmsWlsDomainsWlsDomainCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciWlmsWlsDomainsWlsDomainCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciWlmsWlsDomainsWlsDomainCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWlmsWlsDomainsWlsDomainCollectionOutputReference {
    return new DataOciWlmsWlsDomainsWlsDomainCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWlmsWlsDomainsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#name DataOciWlmsWlsDomains#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#regex DataOciWlmsWlsDomains#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#values DataOciWlmsWlsDomains#values}
  */
  readonly values: string[];
}

export function dataOciWlmsWlsDomainsFilterToTerraform(struct?: DataOciWlmsWlsDomainsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciWlmsWlsDomainsFilterToHclTerraform(struct?: DataOciWlmsWlsDomainsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciWlmsWlsDomainsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWlmsWlsDomainsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWlmsWlsDomainsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciWlmsWlsDomainsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciWlmsWlsDomainsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciWlmsWlsDomainsFilterOutputReference {
    return new DataOciWlmsWlsDomainsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains oci_wlms_wls_domains}
*/
export class DataOciWlmsWlsDomains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_wlms_wls_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciWlmsWlsDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciWlmsWlsDomains to import
  * @param importFromId The id of the existing DataOciWlmsWlsDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciWlmsWlsDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_wlms_wls_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/wlms_wls_domains oci_wlms_wls_domains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWlmsWlsDomainsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciWlmsWlsDomainsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_wlms_wls_domains',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._middlewareType = config.middlewareType;
    this._patchReadinessStatus = config.patchReadinessStatus;
    this._state = config.state;
    this._weblogicVersion = config.weblogicVersion;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: true, required: false
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

  // middleware_type - computed: false, optional: true, required: false
  private _middlewareType?: string; 
  public get middlewareType() {
    return this.getStringAttribute('middleware_type');
  }
  public set middlewareType(value: string) {
    this._middlewareType = value;
  }
  public resetMiddlewareType() {
    this._middlewareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middlewareTypeInput() {
    return this._middlewareType;
  }

  // patch_readiness_status - computed: false, optional: true, required: false
  private _patchReadinessStatus?: string; 
  public get patchReadinessStatus() {
    return this.getStringAttribute('patch_readiness_status');
  }
  public set patchReadinessStatus(value: string) {
    this._patchReadinessStatus = value;
  }
  public resetPatchReadinessStatus() {
    this._patchReadinessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchReadinessStatusInput() {
    return this._patchReadinessStatus;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // weblogic_version - computed: false, optional: true, required: false
  private _weblogicVersion?: string; 
  public get weblogicVersion() {
    return this.getStringAttribute('weblogic_version');
  }
  public set weblogicVersion(value: string) {
    this._weblogicVersion = value;
  }
  public resetWeblogicVersion() {
    this._weblogicVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weblogicVersionInput() {
    return this._weblogicVersion;
  }

  // wls_domain_collection - computed: true, optional: false, required: false
  private _wlsDomainCollection = new DataOciWlmsWlsDomainsWlsDomainCollectionList(this, "wls_domain_collection", false);
  public get wlsDomainCollection() {
    return this._wlsDomainCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciWlmsWlsDomainsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciWlmsWlsDomainsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      middleware_type: cdktf.stringToTerraform(this._middlewareType),
      patch_readiness_status: cdktf.stringToTerraform(this._patchReadinessStatus),
      state: cdktf.stringToTerraform(this._state),
      weblogic_version: cdktf.stringToTerraform(this._weblogicVersion),
      filter: cdktf.listMapper(dataOciWlmsWlsDomainsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      middleware_type: {
        value: cdktf.stringToHclTerraform(this._middlewareType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patch_readiness_status: {
        value: cdktf.stringToHclTerraform(this._patchReadinessStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weblogic_version: {
        value: cdktf.stringToHclTerraform(this._weblogicVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciWlmsWlsDomainsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciWlmsWlsDomainsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
